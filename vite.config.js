import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://neuromart-server.onrender.com',
       changeOrigin: true,
      secure: true,
    }
  }
})
