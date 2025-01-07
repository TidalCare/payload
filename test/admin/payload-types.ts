/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    uploads: Upload;
    posts: Post;
    users: User;
    'hidden-collection': HiddenCollection;
    'not-in-view-collection': NotInViewCollection;
    'collection-no-api-view': CollectionNoApiView;
    'custom-views-one': CustomViewsOne;
    'custom-views-two': CustomViewsTwo;
    'custom-fields': CustomField;
    'group-one-collection-ones': GroupOneCollectionOne;
    'group-one-collection-twos': GroupOneCollectionTwo;
    'group-two-collection-ones': GroupTwoCollectionOne;
    'group-two-collection-twos': GroupTwoCollectionTwo;
    geo: Geo;
    'disable-duplicate': DisableDuplicate;
    'base-list-filters': BaseListFilter;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    uploads: UploadsSelect<false> | UploadsSelect<true>;
    posts: PostsSelect<false> | PostsSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    'hidden-collection': HiddenCollectionSelect<false> | HiddenCollectionSelect<true>;
    'not-in-view-collection': NotInViewCollectionSelect<false> | NotInViewCollectionSelect<true>;
    'collection-no-api-view': CollectionNoApiViewSelect<false> | CollectionNoApiViewSelect<true>;
    'custom-views-one': CustomViewsOneSelect<false> | CustomViewsOneSelect<true>;
    'custom-views-two': CustomViewsTwoSelect<false> | CustomViewsTwoSelect<true>;
    'custom-fields': CustomFieldsSelect<false> | CustomFieldsSelect<true>;
    'group-one-collection-ones': GroupOneCollectionOnesSelect<false> | GroupOneCollectionOnesSelect<true>;
    'group-one-collection-twos': GroupOneCollectionTwosSelect<false> | GroupOneCollectionTwosSelect<true>;
    'group-two-collection-ones': GroupTwoCollectionOnesSelect<false> | GroupTwoCollectionOnesSelect<true>;
    'group-two-collection-twos': GroupTwoCollectionTwosSelect<false> | GroupTwoCollectionTwosSelect<true>;
    geo: GeoSelect<false> | GeoSelect<true>;
    'disable-duplicate': DisableDuplicateSelect<false> | DisableDuplicateSelect<true>;
    'base-list-filters': BaseListFiltersSelect<false> | BaseListFiltersSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    'hidden-global': HiddenGlobal;
    'not-in-view-global': NotInViewGlobal;
    'global-no-api-view': GlobalNoApiView;
    global: Global;
    'custom-global-views-one': CustomGlobalViewsOne;
    'custom-global-views-two': CustomGlobalViewsTwo;
    'group-globals-one': GroupGlobalsOne;
    'group-globals-two': GroupGlobalsTwo;
    settings: Setting;
  };
  globalsSelect: {
    'hidden-global': HiddenGlobalSelect<false> | HiddenGlobalSelect<true>;
    'not-in-view-global': NotInViewGlobalSelect<false> | NotInViewGlobalSelect<true>;
    'global-no-api-view': GlobalNoApiViewSelect<false> | GlobalNoApiViewSelect<true>;
    global: GlobalSelect<false> | GlobalSelect<true>;
    'custom-global-views-one': CustomGlobalViewsOneSelect<false> | CustomGlobalViewsOneSelect<true>;
    'custom-global-views-two': CustomGlobalViewsTwoSelect<false> | CustomGlobalViewsTwoSelect<true>;
    'group-globals-one': GroupGlobalsOneSelect<false> | GroupGlobalsOneSelect<true>;
    'group-globals-two': GroupGlobalsTwoSelect<false> | GroupGlobalsTwoSelect<true>;
    settings: SettingsSelect<false> | SettingsSelect<true>;
  };
  locale: 'es' | 'en';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "uploads".
 */
export interface Upload {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This is a custom collection description.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  title?: string | null;
  description?: string | null;
  number?: number | null;
  richText?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  arrayOfFields?:
    | {
        optional?: string | null;
        innerArrayOfFields?:
          | {
              innerOptional?: string | null;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  group?: {
    defaultValueField?: string | null;
    title?: string | null;
  };
  someBlock?:
    | {
        textFieldForBlock?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'textBlock';
      }[]
    | null;
  defaultValueField?: string | null;
  relationship?: (string | null) | Post;
  customCell?: string | null;
  upload?: (string | null) | Upload;
  hiddenField?: string | null;
  adminHiddenField?: string | null;
  disableListColumnText?: string | null;
  disableListFilterText?: string | null;
  /**
   * This is a very long description that takes many characters to complete and hopefully will wrap instead of push the sidebar open, lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum voluptates. Quisquam, voluptatum voluptates.
   */
  sidebarField?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  textField?: string | null;
  sidebarField?: string | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hidden-collection".
 */
export interface HiddenCollection {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "not-in-view-collection".
 */
export interface NotInViewCollection {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "collection-no-api-view".
 */
export interface CollectionNoApiView {
  id: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-views-one".
 */
export interface CustomViewsOne {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-views-two".
 */
export interface CustomViewsTwo {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-fields".
 */
export interface CustomField {
  id: string;
  customTextServerField?: string | null;
  customTextClientField?: string | null;
  /**
   * Static field description.
   */
  descriptionAsString?: string | null;
  /**
   * Function description
   */
  descriptionAsFunction?: string | null;
  descriptionAsComponent?: string | null;
  customSelectField?: string | null;
  relationshipFieldWithBeforeAfterInputs?: (string | null) | Post;
  arrayFieldWithBeforeAfterInputs?:
    | {
        someTextField?: string | null;
        id?: string | null;
      }[]
    | null;
  blocksFieldWithBeforeAfterInputs?:
    | {
        textField?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'blockFields';
      }[]
    | null;
  text?: string | null;
  groupFieldWithBeforeAfterInputs?: {
    textOne?: string | null;
    textTwo?: string | null;
  };
  radioFieldWithBeforeAfterInputs?: ('one' | 'two' | 'three') | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "group-one-collection-ones".
 */
export interface GroupOneCollectionOne {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "group-one-collection-twos".
 */
export interface GroupOneCollectionTwo {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "group-two-collection-ones".
 */
export interface GroupTwoCollectionOne {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "group-two-collection-twos".
 */
export interface GroupTwoCollectionTwo {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "geo".
 */
export interface Geo {
  id: string;
  /**
   * @minItems 2
   * @maxItems 2
   */
  point?: [number, number] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "disable-duplicate".
 */
export interface DisableDuplicate {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "base-list-filters".
 */
export interface BaseListFilter {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'uploads';
        value: string | Upload;
      } | null)
    | ({
        relationTo: 'posts';
        value: string | Post;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'hidden-collection';
        value: string | HiddenCollection;
      } | null)
    | ({
        relationTo: 'not-in-view-collection';
        value: string | NotInViewCollection;
      } | null)
    | ({
        relationTo: 'collection-no-api-view';
        value: string | CollectionNoApiView;
      } | null)
    | ({
        relationTo: 'custom-views-one';
        value: string | CustomViewsOne;
      } | null)
    | ({
        relationTo: 'custom-views-two';
        value: string | CustomViewsTwo;
      } | null)
    | ({
        relationTo: 'custom-fields';
        value: string | CustomField;
      } | null)
    | ({
        relationTo: 'group-one-collection-ones';
        value: string | GroupOneCollectionOne;
      } | null)
    | ({
        relationTo: 'group-one-collection-twos';
        value: string | GroupOneCollectionTwo;
      } | null)
    | ({
        relationTo: 'group-two-collection-ones';
        value: string | GroupTwoCollectionOne;
      } | null)
    | ({
        relationTo: 'group-two-collection-twos';
        value: string | GroupTwoCollectionTwo;
      } | null)
    | ({
        relationTo: 'geo';
        value: string | Geo;
      } | null)
    | ({
        relationTo: 'disable-duplicate';
        value: string | DisableDuplicate;
      } | null)
    | ({
        relationTo: 'base-list-filters';
        value: string | BaseListFilter;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "uploads_select".
 */
export interface UploadsSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        thumbnail?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts_select".
 */
export interface PostsSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  number?: T;
  richText?: T;
  arrayOfFields?:
    | T
    | {
        optional?: T;
        innerArrayOfFields?:
          | T
          | {
              innerOptional?: T;
              id?: T;
            };
        id?: T;
      };
  group?:
    | T
    | {
        defaultValueField?: T;
        title?: T;
      };
  someBlock?:
    | T
    | {
        textBlock?:
          | T
          | {
              textFieldForBlock?: T;
              id?: T;
              blockName?: T;
            };
      };
  defaultValueField?: T;
  relationship?: T;
  customCell?: T;
  upload?: T;
  hiddenField?: T;
  adminHiddenField?: T;
  disableListColumnText?: T;
  disableListFilterText?: T;
  sidebarField?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  textField?: T;
  sidebarField?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hidden-collection_select".
 */
export interface HiddenCollectionSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "not-in-view-collection_select".
 */
export interface NotInViewCollectionSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "collection-no-api-view_select".
 */
export interface CollectionNoApiViewSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-views-one_select".
 */
export interface CustomViewsOneSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-views-two_select".
 */
export interface CustomViewsTwoSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-fields_select".
 */
export interface CustomFieldsSelect<T extends boolean = true> {
  customTextServerField?: T;
  customTextClientField?: T;
  descriptionAsString?: T;
  descriptionAsFunction?: T;
  descriptionAsComponent?: T;
  customSelectField?: T;
  relationshipFieldWithBeforeAfterInputs?: T;
  arrayFieldWithBeforeAfterInputs?:
    | T
    | {
        someTextField?: T;
        id?: T;
      };
  blocksFieldWithBeforeAfterInputs?:
    | T
    | {
        blockFields?:
          | T
          | {
              textField?: T;
              id?: T;
              blockName?: T;
            };
      };
  text?: T;
  groupFieldWithBeforeAfterInputs?:
    | T
    | {
        textOne?: T;
        textTwo?: T;
      };
  radioFieldWithBeforeAfterInputs?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "group-one-collection-ones_select".
 */
export interface GroupOneCollectionOnesSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "group-one-collection-twos_select".
 */
export interface GroupOneCollectionTwosSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "group-two-collection-ones_select".
 */
export interface GroupTwoCollectionOnesSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "group-two-collection-twos_select".
 */
export interface GroupTwoCollectionTwosSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "geo_select".
 */
export interface GeoSelect<T extends boolean = true> {
  point?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "disable-duplicate_select".
 */
export interface DisableDuplicateSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "base-list-filters_select".
 */
export interface BaseListFiltersSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hidden-global".
 */
export interface HiddenGlobal {
  id: string;
  title?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "not-in-view-global".
 */
export interface NotInViewGlobal {
  id: string;
  title?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "global-no-api-view".
 */
export interface GlobalNoApiView {
  id: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "global".
 */
export interface Global {
  id: string;
  title?: string | null;
  sidebarField?: string | null;
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-global-views-one".
 */
export interface CustomGlobalViewsOne {
  id: string;
  title?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-global-views-two".
 */
export interface CustomGlobalViewsTwo {
  id: string;
  title?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "group-globals-one".
 */
export interface GroupGlobalsOne {
  id: string;
  title?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "group-globals-two".
 */
export interface GroupGlobalsTwo {
  id: string;
  title?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Setting {
  id: string;
  canAccessProtected?: boolean | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hidden-global_select".
 */
export interface HiddenGlobalSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "not-in-view-global_select".
 */
export interface NotInViewGlobalSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "global-no-api-view_select".
 */
export interface GlobalNoApiViewSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "global_select".
 */
export interface GlobalSelect<T extends boolean = true> {
  title?: T;
  sidebarField?: T;
  _status?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-global-views-one_select".
 */
export interface CustomGlobalViewsOneSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-global-views-two_select".
 */
export interface CustomGlobalViewsTwoSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "group-globals-one_select".
 */
export interface GroupGlobalsOneSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "group-globals-two_select".
 */
export interface GroupGlobalsTwoSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings_select".
 */
export interface SettingsSelect<T extends boolean = true> {
  canAccessProtected?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  // @ts-ignore 
  export interface GeneratedTypes extends Config {}
}