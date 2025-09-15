import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://neuromart-server.onrender.com', // No trailing slash
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '') // "/api" ko backend ke request se hata dega
      }
    }
  }
})
