import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import path from 'path'

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
        memo: true,
      },
      include: '**/*.svg',
    }),
    react()
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://disease.sh/v3/covid-19',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
