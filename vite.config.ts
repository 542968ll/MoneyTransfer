import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { viteMockServe } from "vite-plugin-mock";
import path from 'path'

// {
//   mockPath: "./mock/", // mock数据存放的文件夹
//   localEnabled: true, // 是否在开发环境下启用 mock
// }
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    viteMockServe(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/', // 代理目标
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
})
