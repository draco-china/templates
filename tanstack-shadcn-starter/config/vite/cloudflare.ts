import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import type { PluginOption } from "vite";

export const cloudflarePlugins: PluginOption[] = [
	cloudflare({ viteEnvironment: { name: "ssr" } }),
	tanstackStart(),
];
