import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { resolve } from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@pages': resolve(__dirname, './src/pages'),
      '@ui': resolve(__dirname, './src/shared/ui'),
      '@shared': resolve(__dirname, './src/shared'),
      '@widgets': resolve(__dirname, './src/widgets'),
      '@entities': resolve(__dirname, './src/entities'),
      '@features': resolve(__dirname, './src/features'),
      '@media': resolve(__dirname, './src/shared/media'),
      '@mock': resolve(__dirname, './src/shared/mock'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/app/styles/index.scss";`,
      },
    },
  }
})
