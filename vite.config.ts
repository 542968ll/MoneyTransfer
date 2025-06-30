import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { viteMockServe } from "vite-plugin-mock";
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    viteMockServe({
      mockPath: "./mock/", // mock数据存放的文件夹
      localEnabled: true, // 是否在开发环境下启用 mock
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 代理目标
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock'
        }
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
