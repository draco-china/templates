import type { VitePWAOptions } from "vite-plugin-pwa";

export const pwaOptions: VitePWAOptions = {
  registerType: "autoUpdate",
  injectRegister: "auto",
  includeAssets: [
    "favicon.ico",
    "logo.svg",
    "apple-touch-icon-180x180.png",
    "pwa-64x64.png",
    "pwa-192x192.png",
    "pwa-512x512.png",
    "maskable-icon-512x512.png",
    "robots.txt",
  ],
  manifest: {
    short_name: "TanStack App",
    name: "Create TanStack App Sample",
    icons: [
      {
        src: "pwa-64x64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "maskable-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    start_url: ".",
    display: "standalone",
    theme_color: "#000000",
    background_color: "#ffffff",
  },
  minify: false,
  workbox: {
    globPatterns: [
      "**/*.{js,css,html,ico,png,svg,webp,avif,woff,woff2,ttf,otf,eot,mp3,mp4,webm,wav}",
    ],
    globIgnores: ["**/*.map", "**/manifest.webmanifest"],
    cleanupOutdatedCaches: true,
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
  },
  injectManifest: {
    globPatterns: [
      "**/*.{js,css,html,ico,png,svg,webp,avif,woff,woff2,ttf,otf,eot,mp3,mp4,webm,wav}",
    ],
    globIgnores: ["**/*.map", "**/manifest.webmanifest"],
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
  },
  includeManifestIcons: false,
  disable: false,
};
