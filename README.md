# unocss-preset-hbs

[![NPM version](https://img.shields.io/npm/v/unocss-preset-hbs?color=a1b858&label=)](https://www.npmjs.com/package/unocss-preset-hbs)

Hongbusi's unocss preset.

## Installation

``` bash
pnpm install unocss-preset-hbs -D
```

## Usages

``` ts
// vite.config.ts
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import { presetHbs } from 'unocss-preset-hbs'

export default {
  plugins: [
    Unocss({
      presets: [
        presetUno(),
        presetHbs()
      ]
    })
  ]
}
```

## License

[MIT](./LICENSE) License © 2022 [Hongbusi](https://github.com/Hongbusi) 
