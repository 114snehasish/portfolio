import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imageOptimization } from './plugins/image-optimization';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imageOptimization()
  ],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@data': '/src/data',
      '@assets': '/src/assets',
      '@styles': '/src/styles',
      '@utils': '/src/utils'
    }
  }
});
