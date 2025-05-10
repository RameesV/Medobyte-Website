import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
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
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  }
});
