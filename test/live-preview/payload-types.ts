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
    users: User;
    pages: Page;
    posts: Post;
    ssr: Ssr;
    'ssr-autosave': SsrAutosave;
    tenants: Tenant;
    categories: Category;
    media: Media;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    posts: PostsSelect<false> | PostsSelect<true>;
    ssr: SsrSelect<false> | SsrSelect<true>;
    'ssr-autosave': SsrAutosaveSelect<false> | SsrAutosaveSelect<true>;
    tenants: TenantsSelect<false> | TenantsSelect<true>;
    categories: CategoriesSelect<false> | CategoriesSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    header: Header;
    footer: Footer;
  };
  globalsSelect: {
    header: HeaderSelect<false> | HeaderSelect<true>;
    footer: FooterSelect<false> | FooterSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs?: {
    tasks: unknown;
    workflows?: unknown;
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
 * via the `definition` "users".
 */
export interface User {
  id: string;
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
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  slug: string;
  tenant?: (string | null) | Tenant;
  title: string;
  hero: {
    type: 'none' | 'highImpact' | 'lowImpact';
    richText?:
      | {
          [k: string]: unknown;
        }[]
      | null;
    media?: (string | null) | Media;
  };
  layout?:
    | (
        | {
            invertBackground?: boolean | null;
            richText?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            links?:
              | {
                  link: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?:
                      | ({
                          relationTo: 'posts';
                          value: string | Post;
                        } | null)
                      | ({
                          relationTo: 'pages';
                          value: string | Page;
                        } | null);
                    url?: string | null;
                    label: string;
                    appearance?: ('primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'cta';
          }
        | {
            invertBackground?: boolean | null;
            columns?:
              | {
                  size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
                  richText?:
                    | {
                        [k: string]: unknown;
                      }[]
                    | null;
                  enableLink?: boolean | null;
                  link?: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?:
                      | ({
                          relationTo: 'posts';
                          value: string | Post;
                        } | null)
                      | ({
                          relationTo: 'pages';
                          value: string | Page;
                        } | null);
                    url?: string | null;
                    label: string;
                    appearance?: ('default' | 'primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            invertBackground?: boolean | null;
            position?: ('default' | 'fullscreen') | null;
            media: string | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'mediaBlock';
          }
        | {
            introContent?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            populateBy?: ('collection' | 'selection') | null;
            relationTo?: 'posts' | null;
            categories?: (string | Category)[] | null;
            limit?: number | null;
            selectedDocs?:
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }[]
              | null;
            populatedDocs?:
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }[]
              | null;
            populatedDocsTotal?: number | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'archive';
          }
      )[]
    | null;
  richTextSlate?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  richTextLexical?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  relationshipAsUpload?: (string | null) | Media;
  relationshipMonoHasOne?: (string | null) | Post;
  relationshipMonoHasMany?: (string | Post)[] | null;
  relationshipPolyHasOne?: {
    relationTo: 'posts';
    value: string | Post;
  } | null;
  relationshipPolyHasMany?:
    | {
        relationTo: 'posts';
        value: string | Post;
      }[]
    | null;
  arrayOfRelationships?:
    | {
        uploadInArray?: (string | null) | Media;
        richTextInArray?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        relationshipInArrayMonoHasOne?: (string | null) | Post;
        relationshipInArrayMonoHasMany?: (string | Post)[] | null;
        relationshipInArrayPolyHasOne?: {
          relationTo: 'posts';
          value: string | Post;
        } | null;
        relationshipInArrayPolyHasMany?:
          | {
              relationTo: 'posts';
              value: string | Post;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  tab?: {
    relationshipInTab?: (string | null) | Post;
  };
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: (string | null) | Media;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tenants".
 */
export interface Tenant {
  id: string;
  title: string;
  clientURL: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
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
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  slug: string;
  tenant?: (string | null) | Tenant;
  title: string;
  hero: {
    type: 'none' | 'highImpact' | 'lowImpact';
    richText?:
      | {
          [k: string]: unknown;
        }[]
      | null;
    media?: (string | null) | Media;
  };
  layout?:
    | (
        | {
            invertBackground?: boolean | null;
            richText?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            links?:
              | {
                  link: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?:
                      | ({
                          relationTo: 'posts';
                          value: string | Post;
                        } | null)
                      | ({
                          relationTo: 'pages';
                          value: string | Page;
                        } | null);
                    url?: string | null;
                    label: string;
                    appearance?: ('primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'cta';
          }
        | {
            invertBackground?: boolean | null;
            columns?:
              | {
                  size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
                  richText?:
                    | {
                        [k: string]: unknown;
                      }[]
                    | null;
                  enableLink?: boolean | null;
                  link?: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?:
                      | ({
                          relationTo: 'posts';
                          value: string | Post;
                        } | null)
                      | ({
                          relationTo: 'pages';
                          value: string | Page;
                        } | null);
                    url?: string | null;
                    label: string;
                    appearance?: ('default' | 'primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            invertBackground?: boolean | null;
            position?: ('default' | 'fullscreen') | null;
            media: string | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'mediaBlock';
          }
        | {
            introContent?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            populateBy?: ('collection' | 'selection') | null;
            relationTo?: 'posts' | null;
            categories?: (string | Category)[] | null;
            limit?: number | null;
            selectedDocs?:
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }[]
              | null;
            populatedDocs?:
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }[]
              | null;
            populatedDocsTotal?: number | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'archive';
          }
      )[]
    | null;
  relatedPosts?: (string | Post)[] | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: (string | null) | Media;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ssr".
 */
export interface Ssr {
  id: string;
  slug: string;
  tenant?: (string | null) | Tenant;
  title: string;
  hero: {
    type: 'none' | 'highImpact' | 'lowImpact';
    richText?:
      | {
          [k: string]: unknown;
        }[]
      | null;
    media?: (string | null) | Media;
  };
  layout?:
    | (
        | {
            invertBackground?: boolean | null;
            richText?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            links?:
              | {
                  link: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?:
                      | ({
                          relationTo: 'posts';
                          value: string | Post;
                        } | null)
                      | ({
                          relationTo: 'pages';
                          value: string | Page;
                        } | null);
                    url?: string | null;
                    label: string;
                    appearance?: ('primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'cta';
          }
        | {
            invertBackground?: boolean | null;
            columns?:
              | {
                  size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
                  richText?:
                    | {
                        [k: string]: unknown;
                      }[]
                    | null;
                  enableLink?: boolean | null;
                  link?: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?:
                      | ({
                          relationTo: 'posts';
                          value: string | Post;
                        } | null)
                      | ({
                          relationTo: 'pages';
                          value: string | Page;
                        } | null);
                    url?: string | null;
                    label: string;
                    appearance?: ('default' | 'primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            invertBackground?: boolean | null;
            position?: ('default' | 'fullscreen') | null;
            media: string | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'mediaBlock';
          }
        | {
            introContent?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            populateBy?: ('collection' | 'selection') | null;
            relationTo?: 'posts' | null;
            categories?: (string | Category)[] | null;
            limit?: number | null;
            selectedDocs?:
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }[]
              | null;
            populatedDocs?:
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }[]
              | null;
            populatedDocsTotal?: number | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'archive';
          }
      )[]
    | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: (string | null) | Media;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ssr-autosave".
 */
export interface SsrAutosave {
  id: string;
  slug: string;
  tenant?: (string | null) | Tenant;
  title: string;
  hero: {
    type: 'none' | 'highImpact' | 'lowImpact';
    richText?:
      | {
          [k: string]: unknown;
        }[]
      | null;
    media?: (string | null) | Media;
  };
  layout?:
    | (
        | {
            invertBackground?: boolean | null;
            richText?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            links?:
              | {
                  link: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?:
                      | ({
                          relationTo: 'posts';
                          value: string | Post;
                        } | null)
                      | ({
                          relationTo: 'pages';
                          value: string | Page;
                        } | null);
                    url?: string | null;
                    label: string;
                    appearance?: ('primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'cta';
          }
        | {
            invertBackground?: boolean | null;
            columns?:
              | {
                  size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
                  richText?:
                    | {
                        [k: string]: unknown;
                      }[]
                    | null;
                  enableLink?: boolean | null;
                  link?: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?:
                      | ({
                          relationTo: 'posts';
                          value: string | Post;
                        } | null)
                      | ({
                          relationTo: 'pages';
                          value: string | Page;
                        } | null);
                    url?: string | null;
                    label: string;
                    appearance?: ('default' | 'primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            invertBackground?: boolean | null;
            position?: ('default' | 'fullscreen') | null;
            media: string | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'mediaBlock';
          }
        | {
            introContent?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            populateBy?: ('collection' | 'selection') | null;
            relationTo?: 'posts' | null;
            categories?: (string | Category)[] | null;
            limit?: number | null;
            selectedDocs?:
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }[]
              | null;
            populatedDocs?:
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }[]
              | null;
            populatedDocsTotal?: number | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'archive';
          }
      )[]
    | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: (string | null) | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'pages';
        value: string | Page;
      } | null)
    | ({
        relationTo: 'posts';
        value: string | Post;
      } | null)
    | ({
        relationTo: 'ssr';
        value: string | Ssr;
      } | null)
    | ({
        relationTo: 'ssr-autosave';
        value: string | SsrAutosave;
      } | null)
    | ({
        relationTo: 'tenants';
        value: string | Tenant;
      } | null)
    | ({
        relationTo: 'categories';
        value: string | Category;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
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
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
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
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  slug?: T;
  tenant?: T;
  title?: T;
  hero?:
    | T
    | {
        type?: T;
        richText?: T;
        media?: T;
      };
  layout?:
    | T
    | {
        cta?:
          | T
          | {
              invertBackground?: T;
              richText?: T;
              links?:
                | T
                | {
                    link?:
                      | T
                      | {
                          type?: T;
                          newTab?: T;
                          reference?: T;
                          url?: T;
                          label?: T;
                          appearance?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        content?:
          | T
          | {
              invertBackground?: T;
              columns?:
                | T
                | {
                    size?: T;
                    richText?: T;
                    enableLink?: T;
                    link?:
                      | T
                      | {
                          type?: T;
                          newTab?: T;
                          reference?: T;
                          url?: T;
                          label?: T;
                          appearance?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        mediaBlock?:
          | T
          | {
              invertBackground?: T;
              position?: T;
              media?: T;
              id?: T;
              blockName?: T;
            };
        archive?:
          | T
          | {
              introContent?: T;
              populateBy?: T;
              relationTo?: T;
              categories?: T;
              limit?: T;
              selectedDocs?: T;
              populatedDocs?: T;
              populatedDocsTotal?: T;
              id?: T;
              blockName?: T;
            };
      };
  richTextSlate?: T;
  richTextLexical?: T;
  relationshipAsUpload?: T;
  relationshipMonoHasOne?: T;
  relationshipMonoHasMany?: T;
  relationshipPolyHasOne?: T;
  relationshipPolyHasMany?: T;
  arrayOfRelationships?:
    | T
    | {
        uploadInArray?: T;
        richTextInArray?: T;
        relationshipInArrayMonoHasOne?: T;
        relationshipInArrayMonoHasMany?: T;
        relationshipInArrayPolyHasOne?: T;
        relationshipInArrayPolyHasMany?: T;
        id?: T;
      };
  tab?:
    | T
    | {
        relationshipInTab?: T;
      };
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts_select".
 */
export interface PostsSelect<T extends boolean = true> {
  slug?: T;
  tenant?: T;
  title?: T;
  hero?:
    | T
    | {
        type?: T;
        richText?: T;
        media?: T;
      };
  layout?:
    | T
    | {
        cta?:
          | T
          | {
              invertBackground?: T;
              richText?: T;
              links?:
                | T
                | {
                    link?:
                      | T
                      | {
                          type?: T;
                          newTab?: T;
                          reference?: T;
                          url?: T;
                          label?: T;
                          appearance?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        content?:
          | T
          | {
              invertBackground?: T;
              columns?:
                | T
                | {
                    size?: T;
                    richText?: T;
                    enableLink?: T;
                    link?:
                      | T
                      | {
                          type?: T;
                          newTab?: T;
                          reference?: T;
                          url?: T;
                          label?: T;
                          appearance?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        mediaBlock?:
          | T
          | {
              invertBackground?: T;
              position?: T;
              media?: T;
              id?: T;
              blockName?: T;
            };
        archive?:
          | T
          | {
              introContent?: T;
              populateBy?: T;
              relationTo?: T;
              categories?: T;
              limit?: T;
              selectedDocs?: T;
              populatedDocs?: T;
              populatedDocsTotal?: T;
              id?: T;
              blockName?: T;
            };
      };
  relatedPosts?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ssr_select".
 */
export interface SsrSelect<T extends boolean = true> {
  slug?: T;
  tenant?: T;
  title?: T;
  hero?:
    | T
    | {
        type?: T;
        richText?: T;
        media?: T;
      };
  layout?:
    | T
    | {
        cta?:
          | T
          | {
              invertBackground?: T;
              richText?: T;
              links?:
                | T
                | {
                    link?:
                      | T
                      | {
                          type?: T;
                          newTab?: T;
                          reference?: T;
                          url?: T;
                          label?: T;
                          appearance?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        content?:
          | T
          | {
              invertBackground?: T;
              columns?:
                | T
                | {
                    size?: T;
                    richText?: T;
                    enableLink?: T;
                    link?:
                      | T
                      | {
                          type?: T;
                          newTab?: T;
                          reference?: T;
                          url?: T;
                          label?: T;
                          appearance?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        mediaBlock?:
          | T
          | {
              invertBackground?: T;
              position?: T;
              media?: T;
              id?: T;
              blockName?: T;
            };
        archive?:
          | T
          | {
              introContent?: T;
              populateBy?: T;
              relationTo?: T;
              categories?: T;
              limit?: T;
              selectedDocs?: T;
              populatedDocs?: T;
              populatedDocsTotal?: T;
              id?: T;
              blockName?: T;
            };
      };
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ssr-autosave_select".
 */
export interface SsrAutosaveSelect<T extends boolean = true> {
  slug?: T;
  tenant?: T;
  title?: T;
  hero?:
    | T
    | {
        type?: T;
        richText?: T;
        media?: T;
      };
  layout?:
    | T
    | {
        cta?:
          | T
          | {
              invertBackground?: T;
              richText?: T;
              links?:
                | T
                | {
                    link?:
                      | T
                      | {
                          type?: T;
                          newTab?: T;
                          reference?: T;
                          url?: T;
                          label?: T;
                          appearance?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        content?:
          | T
          | {
              invertBackground?: T;
              columns?:
                | T
                | {
                    size?: T;
                    richText?: T;
                    enableLink?: T;
                    link?:
                      | T
                      | {
                          type?: T;
                          newTab?: T;
                          reference?: T;
                          url?: T;
                          label?: T;
                          appearance?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        mediaBlock?:
          | T
          | {
              invertBackground?: T;
              position?: T;
              media?: T;
              id?: T;
              blockName?: T;
            };
        archive?:
          | T
          | {
              introContent?: T;
              populateBy?: T;
              relationTo?: T;
              categories?: T;
              limit?: T;
              selectedDocs?: T;
              populatedDocs?: T;
              populatedDocsTotal?: T;
              id?: T;
              blockName?: T;
            };
      };
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tenants_select".
 */
export interface TenantsSelect<T extends boolean = true> {
  title?: T;
  clientURL?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories_select".
 */
export interface CategoriesSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
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
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?:
            | ({
                relationTo: 'posts';
                value: string | Post;
              } | null)
            | ({
                relationTo: 'pages';
                value: string | Page;
              } | null);
          url?: string | null;
          label: string;
          appearance?: ('default' | 'primary' | 'secondary') | null;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?:
            | ({
                relationTo: 'posts';
                value: string | Post;
              } | null)
            | ({
                relationTo: 'pages';
                value: string | Page;
              } | null);
          url?: string | null;
          label: string;
          appearance?: ('default' | 'primary' | 'secondary') | null;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header_select".
 */
export interface HeaderSelect<T extends boolean = true> {
  navItems?:
    | T
    | {
        link?:
          | T
          | {
              type?: T;
              newTab?: T;
              reference?: T;
              url?: T;
              label?: T;
              appearance?: T;
            };
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer_select".
 */
export interface FooterSelect<T extends boolean = true> {
  navItems?:
    | T
    | {
        link?:
          | T
          | {
              type?: T;
              newTab?: T;
              reference?: T;
              url?: T;
              label?: T;
              appearance?: T;
            };
        id?: T;
      };
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