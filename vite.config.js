import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // CORS solution
  server: {
    proxy: {
      '/data': {
        target: "https://samples.openweathermap.org",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: [
      'lodash.orderby',
      'lodash.throttle'
    ]
  },
})
