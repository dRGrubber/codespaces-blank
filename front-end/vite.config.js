import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://potential-parakeet-9gprr6qxgjj2x6wv-8000.app.github.dev',
        changeOrigin: true
      }
    }
  }
})
