import type { SQL } from 'drizzle-orm'
import type { Field, Operator, Where } from 'payload'

import { and, isNotNull, isNull, ne, notInArray, or, sql } from 'drizzle-orm'
import { QueryError } from 'payload'
import { validOperators } from 'payload/shared'

import type { DrizzleAdapter, GenericColumn } from '../types.js'
import type { BuildQueryJoinAliases } from './buildQuery.js'

import { buildAndOrConditions } from './buildAndOrConditions.js'
import { getTableColumnFromPath } from './getTableColumnFromPath.js'
import { sanitizeQueryValue } from './sanitizeQueryValue.js'

type Args = {
  adapter: DrizzleAdapter
  fields: Field[]
  joins: BuildQueryJoinAliases
  locale: string
  selectFields: Record<string, GenericColumn>
  tableName: string
  where: Where
}

export async function parseParams({
  adapter,
  fields,
  joins,
  locale,
  selectFields,
  tableName,
  where,
}: Args): Promise<SQL> {
  let result: SQL
  const constraints: SQL[] = []

  if (typeof where === 'object' && Object.keys(where).length > 0) {
    // We need to determine if the whereKey is an AND, OR, or a schema path
    for (const relationOrPath of Object.keys(where)) {
      if (relationOrPath) {
        const condition = where[relationOrPath]
        let conditionOperator: typeof and | typeof or
        if (relationOrPath.toLowerCase() === 'and') {
          conditionOperator = and
        } else if (relationOrPath.toLowerCase() === 'or') {
          conditionOperator = or
        }
        if (Array.isArray(condition)) {
          const builtConditions = await buildAndOrConditions({
            adapter,
            fields,
            joins,
            locale,
            selectFields,
            tableName,
            where: condition,
          })
          if (builtConditions.length > 0) {
            result = conditionOperator(...builtConditions)
          }
        } else {
          // It's a path - and there can be multiple comparisons on a single path.
          // For example - title like 'test' and title not equal to 'tester'
          // So we need to loop on keys again here to handle each operator independently
          const pathOperators = where[relationOrPath]
          if (typeof pathOperators === 'object') {
            for (let operator of Object.keys(pathOperators)) {
              if (validOperators.includes(operator as Operator)) {
                const val = where[relationOrPath][operator]

                const {
                  columnName,
                  columns,
                  constraints: queryConstraints,
                  field,
                  getNotNullColumnByValue,
                  pathSegments,
                  rawColumn,
                  table,
                } = getTableColumnFromPath({
                  adapter,
                  collectionPath: relationOrPath,
                  fields,
                  joins,
                  locale,
                  pathSegments: relationOrPath.replace(/__/g, '.').split('.'),
                  selectFields,
                  tableName,
                  value: val,
                })

                queryConstraints.forEach(({ columnName: col, table: constraintTable, value }) => {
                  if (typeof value === 'string' && value.indexOf('%') > -1) {
                    constraints.push(adapter.operators.like(constraintTable[col], value))
                  } else {
                    constraints.push(adapter.operators.equals(constraintTable[col], value))
                  }
                })

                if (
                  ['json', 'richText'].includes(field.type) &&
                  Array.isArray(pathSegments) &&
                  pathSegments.length > 1
                ) {
                  const segments = pathSegments.slice(1)
                  segments.unshift(table[columnName].name)

                  if (field.type === 'richText') {
                    // use the table name from the nearest join to handle blocks, arrays, etc. or use the tableName arg
                    const jsonTable =
                      joins.length === 0
                        ? tableName
                        : joins[joins.length - 1].table[
                            Object.getOwnPropertySymbols(joins[joins.length - 1].table)[0]
                          ]
                    const jsonQuery = adapter.createJSONQuery({
                      operator,
                      pathSegments: segments,
                      table: jsonTable,
                      treatAsArray: ['children'],
                      treatRootAsArray: true,
                      value: val,
                    })

                    constraints.push(sql.raw(jsonQuery))
                    break
                  }

                  const jsonQuery = adapter.convertPathToJSONTraversal(pathSegments)
                  const operatorKeys: Record<string, { operator: string; wildcard: string }> = {
                    contains: { operator: 'like', wildcard: '%' },
                    equals: { operator: '=', wildcard: '' },
                    exists: { operator: val === true ? 'is not null' : 'is null', wildcard: '' },
                    in: { operator: 'in', wildcard: '' },
                    like: { operator: 'like', wildcard: '%' },
                    not_equals: { operator: '<>', wildcard: '' },
                    not_in: { operator: 'not in', wildcard: '' },
                  }

                  let formattedValue = val
                  if (adapter.name === 'sqlite' && operator === 'equals' && !isNaN(val)) {
                    formattedValue = val
                  } else if (['in', 'not_in'].includes(operator) && Array.isArray(val)) {
                    if (adapter.name === 'sqlite') {
                      formattedValue = `(${val.map((v) => `${v}`).join(',')})`
                    } else {
                      formattedValue = `(${val.map((v) => `'${v}'`).join(', ')})`
                    }
                  } else {
                    formattedValue = `'${operatorKeys[operator].wildcard}${val}${operatorKeys[operator].wildcard}'`
                  }
                  if (operator === 'exists') {
                    formattedValue = ''
                  }

                  constraints.push(
                    sql.raw(
                      `${table[columnName].name}${jsonQuery} ${operatorKeys[operator].operator} ${formattedValue}`,
                    ),
                  )

                  break
                }

                if (getNotNullColumnByValue) {
                  const columnName = getNotNullColumnByValue(val)
                  if (columnName) {
                    constraints.push(isNotNull(table[columnName]))
                  } else {
                    throw new QueryError([{ path: relationOrPath }])
                  }
                  break
                }

                if (
                  operator === 'like' &&
                  (field.type === 'number' || table[columnName].columnType === 'PgUUID')
                ) {
                  operator = 'equals'
                }

                if (operator === 'like') {
                  constraints.push(
                    and(
                      ...val
                        .split(' ')
                        .map((word) => adapter.operators.like(table[columnName], `%${word}%`)),
                    ),
                  )
                  break
                }

                const sanitizedQueryValue = sanitizeQueryValue({
                  adapter,
                  columns,
                  field,
                  operator,
                  relationOrPath,
                  val,
                })

                if (sanitizedQueryValue === null) {
                  break
                }

                const {
                  columns: queryColumns,
                  operator: queryOperator,
                  value: queryValue,
                } = sanitizedQueryValue

                // Handle polymorphic relationships by value
                if (queryColumns) {
                  if (!queryColumns.length) {
                    break
                  }

                  let wrapOperator = or

                  if (queryValue === null && ['equals', 'not_equals'].includes(operator)) {
                    if (operator === 'equals') {
                      wrapOperator = and
                    }

                    constraints.push(
                      wrapOperator(
                        ...queryColumns.map(({ rawColumn }) =>
                          operator === 'equals' ? isNull(rawColumn) : isNotNull(rawColumn),
                        ),
                      ),
                    )
                    break
                  }

                  if (['not_equals', 'not_in'].includes(operator)) {
                    wrapOperator = and
                  }

                  constraints.push(
                    wrapOperator(
                      ...queryColumns.map(({ rawColumn, value }) =>
                        adapter.operators[queryOperator](rawColumn, value),
                      ),
                    ),
                  )

                  break
                }

                if (queryOperator === 'not_equals' && queryValue !== null) {
                  constraints.push(
                    or(
                      isNull(rawColumn || table[columnName]),
                      /* eslint-disable @typescript-eslint/no-explicit-any */
                      ne<any>(rawColumn || table[columnName], queryValue),
                    ),
                  )
                  break
                }

                if (
                  (field.type === 'relationship' || field.type === 'upload') &&
                  Array.isArray(queryValue) &&
                  operator === 'not_in'
                ) {
                  constraints.push(
                    sql`(${notInArray(table[columnName], queryValue)} OR
                    ${table[columnName]}
                    IS
                    NULL)`,
                  )

                  break
                }

                if (operator === 'equals' && queryValue === null) {
                  constraints.push(isNull(rawColumn || table[columnName]))
                  break
                }

                if (operator === 'not_equals' && queryValue === null) {
                  constraints.push(isNotNull(rawColumn || table[columnName]))
                  break
                }

                constraints.push(
                  adapter.operators[queryOperator](rawColumn || table[columnName], queryValue),
                )
              }
            }
          }
        }
      }
    }
  }
  if (constraints.length > 0) {
    if (result) {
      result = and(result, ...constraints)
    } else {
      result = and(...constraints)
    }
  }
  if (constraints.length === 1 && !result) {
    ;[result] = constraints
  }

  return result
}