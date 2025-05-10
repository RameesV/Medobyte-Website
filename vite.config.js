import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compress from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'MedoByte - Results-Driven Digital Solutions',
          description: 'MedoByte specializes in web development, digital marketing, and eCommerce solutions that elevate your online presence and drive measurable results.'
        }
      }
    }),
    compress({
      algorithm: 'gzip',
      ext: '.gz'
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png'
      ],
      manifest: {
        name: 'MedoByte',
        short_name: 'MedoByte',
        theme_color: '#000000',
        icons: [
          {
            src: '/images/MB-Black-Logo.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  build: {
    rollupOptions: {
      input: 'index.html',
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion']
        }
      }
    },
    cssCodeSplit: true,
    minify: 'terser',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: true
  },
  server: {
    open: true,
    cors: true,
    compression: true
  }
});
