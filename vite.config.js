import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://neuromart-server.onrender.com', // your backend
        // target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

