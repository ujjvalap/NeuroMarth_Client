import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {                  // Ye frontend ke /api requests ko intercept karega
        target: 'https://neuromart-server.onrender.com',
        changeOrigin: true,      // Backend ko request ke origin ko frontend ki tarah dikhaega
        secure: true,            // HTTPS backend ke liye
      }
    }
  }
})

