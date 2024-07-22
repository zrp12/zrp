import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VantResolver } from '@vant/auto-import-resolver'
// 引入一个加载vue组件的插件
import Components from 'unplugin-vue-components/vite'
// 工程化工具
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
