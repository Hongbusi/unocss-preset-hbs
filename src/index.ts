import type { Preset } from 'unocss'

export function presetHbs(): Preset {
  return {
    name: 'unocss-preset-hbs',
    shortcuts: {
      'absolute-x-center': 'absolute left-1/2 -translate-x-1/2',
      'absolute-y-center': 'absolute top-1/2 -translate-y-1/2',
      'absolute-center': 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      'flex-center': 'flex justify-center items-center',
      'inline-flex-center': 'inline-flex justify-center items-center'
    }
  }
}
