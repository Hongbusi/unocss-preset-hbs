import type { Preset } from 'unocss'

export function presetHbs(): Preset {
  return {
    name: 'unocss-preset-hbs',
    shortcuts: [
      {
        btn: 'bg-red'
      }
    ]
  }
}
