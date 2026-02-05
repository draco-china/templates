export const rollupOutput = {
  entryFileNames: "js/[name]-[hash].js",
  chunkFileNames: "js/[name]-[hash].js",
  assetFileNames: (assetInfo: {
    name?: string;
    originalFileNames?: string[];
  }) => {
    if (assetInfo.name?.endsWith(".css")) {
      return "css/[name]-[hash][extname]";
    }

    const rawName =
      assetInfo.originalFileNames?.[0] ?? assetInfo.name ?? "asset";
    const cleanName = rawName.split("?")[0]?.split("#")[0] ?? rawName;
    const ext = cleanName.split(".").pop()?.toLowerCase() ?? "";

    if (ext === "css") {
      return "css/[name]-[hash][extname]";
    }

    if (["png", "jpg", "jpeg", "gif", "webp", "avif", "svg"].includes(ext)) {
      return "img/[name]-[hash][extname]";
    }

    if (["woff", "woff2", "ttf", "otf", "eot"].includes(ext)) {
      return "fonts/[name]-[hash][extname]";
    }

    if (["mp4", "webm", "ogg", "mp3", "wav", "flac", "aac"].includes(ext)) {
      return "media/[name]-[hash][extname]";
    }

    return "other/[name]-[hash][extname]";
  },
} as const;
