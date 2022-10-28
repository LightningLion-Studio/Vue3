import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: "Public",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/apis': {
        target: "https://v2.api.light.xhhzs.cn/v2",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apis/, '')
      }
    },
  }
});
