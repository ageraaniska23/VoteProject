// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Contoh konfigurasi rollupOptions
  rollupOptions: {
    input: {
      main: './src/main.jsx' // Sesuaikan dengan path file entry point Anda
    }
  }
})
