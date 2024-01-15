import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const basePath = '/fdoble-website/';
// https://vitejs.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [vue()]
})
