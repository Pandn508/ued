import type { Rule } from '@unocss/core'
import type { Theme } from '../theme'
import { colorResolver, colorableShadows, h, hasParseableColor } from '../utils'
import { varEmpty } from './static'

export const boxShadowsBase = {
  '--un-ring-offset-shadow': '0 0 rgb(0 0 0 / 0)',
  '--un-ring-shadow': '0 0 rgb(0 0 0 / 0)',
  '--un-shadow-inset': varEmpty,
  '--un-shadow': '0 0 rgb(0 0 0 / 0)',
}


/* global shadow token */
export const shadowToken: Rule[] = [
  // use of component hover（tree|table drag）
  ['shadow-1', {'box-shadow': '0 1px 10px rgba(0, 0, 0, 5%), 0 4px 5px rgba(0, 0, 0, 8%), 0 2px 4px -1px rgba(0, 0, 0, 12%)'}],
  // use of drag-down components，such as menu|select|tooltip
  ['shadow-2', {'box-shadow': '0 3px 14px 2px rgba(0, 0, 0, 5%), 0 8px 10px 1px rgba(0, 0, 0, 6%), 0 5px 5px -3px rgba(0, 0, 0, 10%)'}],
  // use of Modal|drawer|Message
  ['shadow-3', {'box-shadow': '0 6px 30px 5px rgba(0, 0, 0, 5%), 0 16px 24px 2px rgba(0, 0, 0, 4%), 0 8px 10px -5px rgba(0, 0, 0, 8%)'}],
]


export const boxShadows: Rule<Theme>[] = [
  // color
  [/^shadow(?:-(.+))?$/, (match, context) => {
    const [, d] = match
    const { theme } = context
    const v = theme.boxShadow?.[d || 'DEFAULT']
    const c = d ? h.bracket.cssvar(d) : undefined

    if ((v != null || c != null) && !hasParseableColor(c, theme, 'shadowColor')) {
      return {
        '--un-shadow': colorableShadows((v || c)!, '--un-shadow-color').join(','),
        'box-shadow': 'var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)',
      }
    }
    return colorResolver('--un-shadow-color', 'shadow', 'shadowColor')(match, context)
  }, { autocomplete: ['shadow-$colors', 'shadow-$boxShadow'] }],
  [/^shadow-op(?:acity)?-?(.+)$/, ([, opacity]) => ({ '--un-shadow-opacity': h.bracket.percent.cssvar(opacity) }), { autocomplete: 'shadow-(op|opacity)-<percent>' }],

  // inset
  ['shadow-inset', { '--un-shadow-inset': 'inset' }],
]
