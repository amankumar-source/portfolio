import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  build: {
    // Increase chunk warning limit slightly (portfolio has several large deps)
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Manual chunk splitting: separate heavy vendor libs into their own chunks
        // so the main app bundle stays small and cached independently
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-icons': ['react-icons'],
          'vendor-email': ['@emailjs/browser'],
          'vendor-toast': ['react-toastify'],
          'vendor-tilt': ['react-parallax-tilt'],
          'vendor-github': ['react-github-calendar'],
          'vendor-remix': ['@remixicon/react'],
        },
      },
    },
    // Enable minification (default) + target modern browsers for smaller output
    target: 'es2020',
    // Compress CSS
    cssMinify: true,
  },
})
