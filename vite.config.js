import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react':   ['react', 'react-dom'],
          'vendor-mui':     ['@mui/material', '@mui/system', '@emotion/react', '@emotion/styled'],
          'vendor-framer':  ['framer-motion'],
          'vendor-lucide':  ['lucide-react'],
        },
      },
    },
    // Increase warning limit to avoid noise (MUI is legitimately large)
    chunkSizeWarningLimit: 600,
  },
})
