/*
 * @Author: sakurahuang
 * @Description: 
 * @Date: 2025-02-24 20:00:22
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import electron from 'vite-plugin-electron'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    electron({
      entry: 'electron/index.js',
      vite: {
        build: {
          outDir:'./dist' //统一electron和vite的打包目录 
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
