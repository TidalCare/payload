import type { Collection } from '../collections/config/types.js'
import type { SanitizedGlobalConfig } from '../globals/config/types.js'
import type { PayloadRequest } from '../types/index.js'

export const getRequestCollection = (req: PayloadRequest): Collection => {
  const collectionSlug = req.routeParams.collection

  if (typeof collectionSlug !== 'string') {
    throw new Error(`No collection was specified`)
  }

  const collection = req.payload.collections[collectionSlug]

  if (!collection) {
    throw new Error(`Collection with the slug ${collectionSlug} was not found`)
  }

  return collection
}

export const getRequestCollectionWithID = <T extends boolean>(
  req: PayloadRequest,
  {
    disableSanitize,
  }: {
    disableSanitize?: T
  } = {},
): {
  collection: Collection
  id: T extends true ? string : number | string
} => {
  const collection = getRequestCollection(req)
  const id = req.routeParams.id

  if (typeof id !== 'string') {
    throw new Error(`ID was not specified`)
  }

  if (disableSanitize !== true) {
    return {
      id,
      collection,
    }
  }

  let sanitizedID: number | string = id

  // If default db ID type is a number, we should sanitize
  let shouldSanitize = Boolean(req.payload.db.defaultIDType === 'number')

  // UNLESS the customIDType for this collection is text.... then we leave it
  if (shouldSanitize && collection.customIDType === 'text') {
    shouldSanitize = false
  }

  // If we still should sanitize, parse float
  if (shouldSanitize) {
    sanitizedID = parseFloat(sanitizedID)
  }

  return {
    // @ts-expect-error generic return
    id: sanitizedID,
    collection,
  }
}

export const getRequestGlobal = (req: PayloadRequest): SanitizedGlobalConfig => {
  const globalSlug = req.routeParams.global

  if (typeof globalSlug !== 'string') {
    throw new Error(`No global was specified`)
  }

  const globalConfig = req.payload.globals.config.find((each) => each.slug === globalSlug)

  if (!globalConfig) {
    throw new Error(`Global with the slug ${globalSlug} was not found`)
  }

  return globalConfig
}