import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueMarkdown from 'vite-plugin-vue-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  // assetsInclude: ['**/*.md'],
  plugins: [
    vue(),
    vueMarkdown(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
