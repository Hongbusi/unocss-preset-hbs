// import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

// const r = (p: string) => resolve(__dirname, p)

// console.log(r('../src/index.ts'))

export default defineConfig({
  // resolve: {
  //   alias: {
  //     'unocss-preset-hbs': r('../src/index.ts')
  //   }
  // },

  plugins: [
    Vue(),
    Unocss()
  ]
})
