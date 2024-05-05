# 安装

<p align="center">
<img src="https://raw.githubusercontent.com/macheteHot/unocss-preset-scalpel/master/src/assets/logo.svg" style="width:100px;" />
</p>
<h1 align="center">unocss-preset-ued</h1>
<h3 align="center">AnHeng Preset for UnoCSS</h3>

[<img src="https://img.shields.io/npm/v/unocss-preset-scalpel">](https://npmjs.com/package/unocss-preset-scalpel)

[<img src="https://img.shields.io/node/v/unocss-preset-scalpel">](https://nodejs.org/en/about/releases/)

[<img src="https://github.com/macheteHot/unocss-preset-scalpel/actions/workflows/ci.yml/badge.svg">](https://github.com/macheteHot/unocss-preset-scalpel/actions/workflows/ci.yml)

>

## Installation

```sh
npm i preset-ued unocss --save-dev # with npm
yarn add preset-ued unocss -D # with yarn
pnpm add preset-ued unocss -D # with pnpm
```

## Usage

```js
import { defineConfig } from 'unocss'
import { presetUed } from 'unocss-preset-scalpel'

export default defineConfig({
  presets: [
    presetUed({
      // config
    }),
  ],
})

