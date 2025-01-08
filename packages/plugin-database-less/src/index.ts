/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/require-await */
import type {
  BasePayload,
  CollectionConfig,
  Config,
  DatabaseAdapter,
  IncomingAuthType,
  JoinQuery,
  PayloadRequest,
  PopulateType,
  SelectType,
  Where,
} from 'payload'

import assert from 'assert'
import * as qs from 'qs-esm'

import type { PluginConfig } from './types.js'

const defaultUserCollection: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    tokenExpiration: 7200,
  },
  fields: [],
  labels: {
    plural: ({ t }) => t('general:users'),
    singular: ({ t }) => t('general:user'),
  },
}

const getMockPaginatedResult = () => ({
  docs: [],
  hasNextPage: false,
  hasPrevPage: false,
  limit: 0,
  nextPage: 0,
  page: 0,
  pagingCounter: 0,
  prevPage: 0,
  totalDocs: 0,
  totalPages: 0,
})

const getMockDatabaseAdapter = ({
  defaultIDType,
  payload,
}: {
  defaultIDType: 'number' | 'text'
  payload: BasePayload
}): DatabaseAdapter => ({
  name: 'database-less',
  beginTransaction: async () => null,
  commitTransaction: async () => {},
  count: async () => ({ totalDocs: 0 }),
  countGlobalVersions: async () => ({ totalDocs: 0 }),
  countVersions: async () => ({ totalDocs: 0 }),
  create: async () => null,
  // @ts-expect-error
  createGlobal: async () => null,
  // @ts-expect-error
  createGlobalVersion: async () => null,
  createMigration: () => {},
  // @ts-expect-error
  createVersion: async () => null,
  defaultIDType,
  deleteMany: async () => {},
  deleteOne: async () => null,
  deleteVersions: async () => {},
  find: async () => getMockPaginatedResult(),
  // @ts-expect-error
  findGlobal: async () => null,
  findGlobalVersions: async () => getMockPaginatedResult(),
  findOne: async () => null,
  findVersions: async () => getMockPaginatedResult(),
  migrate: async () => {},
  migrateDown: async () => {},
  migrateFresh: async () => {},
  migrateRefresh: async () => {},
  migrateReset: async () => {},
  migrateStatus: async () => {},
  migrationDir: '',
  packageName: '@payloadcms/plugin-database-less',
  payload,
  queryDrafts: async () => getMockPaginatedResult(),
  rollbackTransaction: async () => {},
  // @ts-expect-error
  updateGlobal: async () => null,
  // @ts-expect-error
  updateGlobalVersion: async () => null,
  updateOne: async () => null,

  connect: async () => {},
  // @ts-expect-error
  updateVersion: async () => null,
  upsert: async () => null,
  // @ts-expect-error
  destroy: async () => null,
  init: () => {},
})

const parseToQuery = (args: OperationArgs): string => {
  const toQuery: Record<string, unknown> = {}

  if ('where' in args) {
    toQuery.where = args.where
  }

  if ('select' in args) {
    toQuery.select = args.select
  }

  if ('populate' in args) {
    toQuery.populate = args.populate
  }

  if ('limit' in args) {
    toQuery.limit = args.limit
  }

  if ('depth' in args) {
    toQuery.depth = args.depth
  }

  if ('joins' in args) {
    toQuery.joins = args.joins
  }

  if ('sort' in args) {
    toQuery.sort = args.sort
  }

  if ('draft' in args) {
    toQuery.draft = args.draft
  }

  if ('req' in args && args.req) {
    const req = args.req as PayloadRequest

    // Forward search
    if (req.searchParams) {
      for (const [k, v] of req.searchParams) {
        toQuery[k] = v
      }
    }

    if (req.locale) {
      toQuery.locale = req.locale
    }

    if (req.fallbackLocale) {
      toQuery.fallbackLocale = req.fallbackLocale
    }
  }

  if ('locale' in args) {
    toQuery.locale = args.locale
  }

  if ('fallbackLocale' in args) {
    toQuery.fallbackLocale = args.fallbackLocale
  }

  if (Object.keys(toQuery).length > 0) {
    return qs.stringify(toQuery, { addQueryPrefix: true })
  }

  return ''
}

type OperationArgs = {
  depth?: number
  disableErrors?: boolean
  draft?: boolean
  fallbackLocale?: false | null | string
  id?: number | string
  joins?: JoinQuery
  limit?: number
  locale?: null | string
  populate?: PopulateType
  req?: Partial<PayloadRequest>
  select?: SelectType
  sort?: string | string[]
  where?: Where
}

export const databaseLessPlugin =
  (pluginConfig: PluginConfig) =>
  (incomingConfig: Config): Config => {
    if (pluginConfig.disabled) {
      return incomingConfig
    }

    const fetch = pluginConfig.fetch ?? globalThis.fetch

    const apiURL = `${pluginConfig.externalURL}${incomingConfig.routes?.api ?? '/api'}`

    incomingConfig.db.init = ({ payload }) => {
      return getMockDatabaseAdapter({ defaultIDType: incomingConfig.db.defaultIDType, payload })
    }

    const request = async (
      method: 'DELETE' | 'GET' | 'PATCH' | 'POST',
      path: string,
      args: OperationArgs,
      data?: unknown,
    ) => {
      let body: BodyInit | undefined = undefined
      const headers = new Headers(args.req?.headers)
      if (method === 'PATCH' || method === 'POST') {
        headers.set('Content-Type', 'application/json')
        body = JSON.stringify(data)
      }

      const response = await fetch(`${apiURL}${path}${parseToQuery(args)}`, {
        body,
        headers,
        method,
      })

      return response.json()
    }

    let adminUserCollection: CollectionConfig | null = null

    if (!incomingConfig.collections) {
      incomingConfig.collections = []
    }

    if (!incomingConfig.admin?.user) {
      adminUserCollection = incomingConfig.collections.find(({ auth }) => Boolean(auth)) ?? null

      if (!adminUserCollection) {
        adminUserCollection = defaultUserCollection
        incomingConfig.collections.push(defaultUserCollection)
      }
    } else {
      adminUserCollection =
        incomingConfig.collections.find(({ slug }) => slug === incomingConfig.admin?.user) ?? null
    }

    assert(adminUserCollection)

    if (adminUserCollection.auth === true) {
      adminUserCollection.auth = {}
    }

    // attach a strategy that uses fetch to /me instead of verifying jwt
    ;(adminUserCollection.auth as IncomingAuthType).strategies = [
      {
        name: 'jwt-fetch',
        authenticate: async (args) => {
          const req: Partial<PayloadRequest> = { headers: args.headers }
          const { user } = await request('GET', `/${adminUserCollection.slug}/me`, { req })

          return { user }
        },
      },
    ]

    incomingConfig.onInit = async (payload) => {
      payload.find = (args) => request('GET', `/${args.collection}`, args)
      payload.findByID = (args) => request('GET', `/${args.collection}/${args.id}`, args)
      payload.findGlobal = (args) => request('GET', `/globals/${args.slug}`, args)
      payload.findVersions = (args) => request('GET', `/${args.collection}/versions`, args)
      payload.findVersionByID = (args) =>
        request('GET', `/${args.collection}/versions/${args.id}`, args)
      payload.findGlobalVersions = (args) => request('GET', `/globals/${args.slug}/versions`, args)
      payload.findGlobalVersionByID = (args) =>
        request('GET', `/globals/${args.slug}/versions/${args.id}`, args)
      payload.count = (args) => request('GET', `/${args.collection}/count`, args)
      payload.create = (args) => request('POST', `/${args.collection}`, args, args.data)
      payload.update = (args) => {
        let path = `/${args.collection}`

        if ('id' in args) {
          path = `${path}/${args.id}`
        }

        return request('PATCH', path, args, args.data)
      }

      payload.updateGlobal = (args) => request('PATCH', `/globals/${args.slug}`, args, args.data)

      payload.delete = (args) => {
        let path = `/${args.collection}`

        if ('id' in args) {
          path = `${path}/${args.id}`
        }

        return request('DELETE', path, args)
      }
    }

    return incomingConfig
  }
