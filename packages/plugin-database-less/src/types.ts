export interface PluginConfig {
  disabled?: boolean
  externalURL: string
  /** custom fetch */
  fetch?: typeof fetch
  /**
   * By default when this plugin enabled `onInit` is omitted.
   * If you provide true, ensure you don't use database directly with payload.db or you use it
   * with a condition when this plugin is enabled
   * @default false
   */
  forceEnableOnInit?: boolean
}

export interface NextPluginConfig {
  apiRoute?: string
  disabled?: boolean
  externalAdminPath?: string
  externalURL: string
}
