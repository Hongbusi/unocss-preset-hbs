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

<!-- start -->
## Shortcuts 

| class | Properties |
| ----- | ---------- |
| `absolute-x-center` | `absolute left-1/2 -translate-x-1/2` |
| `absolute-y-center` | `absolute top-1/2 -translate-y-1/2` |
| `absolute-center` | `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2` |
| `fixed-x-center` | `fixed left-1/2 -translate-x-1/2` |
| `fixed-y-center` | `fixed top-1/2 -translate-y-1/2` |
| `fixed-center` | `fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2` |
| `flex-justify-center` | `flex justify-center` |
| `flex-items-center` | `flex items-center` |
| `flex-center` | `flex justify-center items-center` |
| `inline-flex-justify-center` | `inline-flex justify-center` |
| `inline-flex-items-center` | `inline-flex items-center` |
| `inline-flex-center` | `inline-flex justify-center items-center` |
<!-- end -->

## License

[MIT](./LICENSE) License © 2022 [Hongbusi](https://github.com/Hongbusi) 
