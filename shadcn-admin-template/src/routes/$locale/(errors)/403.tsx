import { createFileRoute } from "@tanstack/react-router";
import { ForbiddenError } from "#/features/errors/forbidden";

export const Route = createFileRoute("/$locale/(errors)/403")({
	component: ForbiddenError,
});
