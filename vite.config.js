


import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import path from 'path';

export default defineConfig({
  plugins: [
    Inspect(),
    ViteImageOptimizer({
       jpg: {
    
    quality: 80,
        },
        
        png: {
    
    quality: 100,
  },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/assets'),
      '@img': path.resolve(__dirname, './src/assets/img'),
      
    }
  },

  
  
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
       
      }
    }
  },
  esbuild: {
    jsxFactory: 'create',
    jsxInject: 'import { create } from "../settings/create.js"',
    },
  
  base: '/WalterHouse/'
});



