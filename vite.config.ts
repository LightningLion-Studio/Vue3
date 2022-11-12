import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [vue()],
  publicDir: "Public",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
  server: {
    host: "0.0.0.0",
    port: "5173",
    proxy: {
      '/apis': {
        target: "https://v2.api.light.xhhzs.cn/v2",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apis/, '')
      }
    },
  },
  build: {
    outDir: "Dist",
  },
});
