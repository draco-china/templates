import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import type { PluginOption } from "vite";

export const staticPlugins: PluginOption[] = [
	tanstackStart({
		spa: {
			enabled: true,
