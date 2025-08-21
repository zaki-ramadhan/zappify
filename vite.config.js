/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/zappify",
  resolve: {
    alias: {
      // meringkas path
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@layouts': path.resolve(__dirname, 'src/layouts/'),
      '@effects': path.resolve(__dirname, 'src/components/Effects/'),
      '@common': path.resolve(__dirname, 'src/components/Common/'),
      '@animation': path.resolve(__dirname, 'src/animation.js'),
    },
  },
    server: {
      historyApiFallback: true, // Menangani semua rute ke index.html
    },
})
