import type { SerializedTabNode } from '../../../../../../nodeTypes.js'
import type { JSXConverters } from '../types.js'

export const TabJSXConverter: JSXConverters<SerializedTabNode> = {
  tab: ({ node }) => {
    // Tab
    return node.text
  },
}