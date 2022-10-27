import type { Preset } from 'unocss'

export function presetHbs(): Preset {
  return {
    name: 'unocss-preset-hbs',
    shortcuts: [
      {
        'h-button': 'px-4 py-2 bg-red rounded text-white'
      }
    ]
  }
}
