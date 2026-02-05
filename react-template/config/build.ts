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

