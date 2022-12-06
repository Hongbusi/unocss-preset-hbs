import { defineConfig, presetUno } from 'unocss'
import { presetHbs } from '../src/index'

export default defineConfig({
  presets: [
    presetUno(),
    presetHbs()
  ]
})
