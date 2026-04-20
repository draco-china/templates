import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig, loadEnv, type PluginOption } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { cloudflarePlugins } from "./config/vite/cloudflare";
import { staticPlugins } from "./config/vite/static";

const config = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const plugins: PluginOption[] = [];

  switch (env.VITE_TARGET) {
    case "cloudflare":
      plugins.push(...cloudflarePlugins);
      break;
    case "static":
      plugins.push(...staticPlugins);
      break;
    default:
      plugins.push(tanstackStart());
      break;
  }

  return {
    base: "./",
    server: {
      port: 3000,
    },
    resolve: { tsconfigPaths: true },
    plugins: [
      devtools(),
      tailwindcss(),
      ...plugins,
      viteReact(),
      VitePWA({
        registerType: "autoUpdate",
        injectRegister: "auto",
        includeAssets: [
          "favicon.ico",
          "favicon.svg",
          "favicon-96x96.png",
          "apple-touch-icon.png",
        ],
        manifest: false,
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
          cleanupOutdatedCaches: true,
        },
        devOptions: {
          enabled: true,
        },
      }),
    ],
  };
});

export default config;
