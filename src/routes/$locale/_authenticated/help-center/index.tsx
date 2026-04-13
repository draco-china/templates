import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "#/components/base/coming-soon";

export const Route = createFileRoute("/$locale/_authenticated/help-center/")({
	component: ComingSoon,
});
