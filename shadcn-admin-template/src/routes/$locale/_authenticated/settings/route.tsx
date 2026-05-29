import { createFileRoute } from "@tanstack/react-router";
import { Settings } from "#/features/settings";

export const Route = createFileRoute("/$locale/_authenticated/settings")({
	component: Settings,
});
