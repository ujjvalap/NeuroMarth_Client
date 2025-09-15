import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://neuromart-server.onrender.com/',
        changeOrigin: true,
        secure: true,
      }
    }
  },
  build: {
    sourcemap: true, // optional: error trace original file me milega
  }
})
