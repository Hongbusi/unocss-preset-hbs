import type { Preset } from 'unocss'

export function presetHbs(): Preset {
  return {
    name: 'unocss-preset-hbs',
    shortcuts: {
      // absolute
      'absolute-x-center': 'absolute left-1/2 -translate-x-1/2',
      'absolute-y-center': 'absolute top-1/2 -translate-y-1/2',
      'absolute-center': 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',

      // fixed
      'fixed-x-center': 'fixed left-1/2 -translate-x-1/2',
      'fixed-y-center': 'fixed top-1/2 -translate-y-1/2',
      'fixed-center': 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',

      // flex
      'flex-justify-center': 'flex justify-center',
      'flex-items-center': 'flex items-center',
      'flex-center': 'flex justify-center items-center',

      // inline-flex
      'inline-flex-justify-center': 'inline-flex justify-center',
      'inline-flex-items-center': 'inline-flex items-center',
      'inline-flex-center': 'inline-flex justify-center items-center'
    }
  }
}
