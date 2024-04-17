import { defineConfig, presetAttributify, transformerDirectives, presetTagify, transformerVariantGroup } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import { presetUed } from 'preset';

export default defineConfig({
  theme:{},
  shortcuts: {},
  presets: [
    presetRemToPx({ baseFontSize: 4 }),
    presetAttributify({ /* preset options */ }),
    presetTagify({}),
    presetUed({}),
  ],
  transformers: [
    // 指令：@apply、@sreen、theme()
    transformerDirectives(),
    // 前缀组，解决繁琐的多次写前缀的情况 hover:()
    transformerVariantGroup()
  ]
})