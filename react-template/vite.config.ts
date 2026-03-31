import { fileURLToPath, URL } from "node:url";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { rollupOutput } from "./config/build";
import {
  cdnPackages,
  createCdnImportMapPlugin,
  isCdnPackage,
} from "./config/cdn";
import { pwaOptions } from "./config/pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    devtools(),
    createCdnImportMapPlugin(),
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/paraglide",
      strategy: ["url"],
    }),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    viteReact(),
    tailwindcss(),
    VitePWA(pwaOptions),
    visualizer({
      filename: "analysis/stats.html",
      template: "treemap",
      gzipSize: true,
      brotliSize: true,
      open: false,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: { exclude: [...cdnPackages] },
  build: {
    sourcemap: false,
    minify: "esbuild",
    cssCodeSplit: true,
    reportCompressedSize: true,
    rollupOptions: {
      external: isCdnPackage,
      output: {
        ...rollupOutput,
      },
    },
  },
});
