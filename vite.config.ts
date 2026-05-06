import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ghxst-producer-2026/',
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})