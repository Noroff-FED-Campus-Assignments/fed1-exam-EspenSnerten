/* eslint-disable no-undef */
import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // ADD YOUR PAGES HERE
        blog: resolve(__dirname, "archive.html"),
        blogDetail: resolve(__dirname, "post.html"),
        legal: resolve(__dirname, "legal.html"),
      },
    },
  },
});
