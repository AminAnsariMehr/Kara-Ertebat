import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@scss": path.resolve(__dirname, "./src/assets/scss"),
      "@decoration": path.resolve(__dirname, "./src/assets/decorations"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [vue()],
});
