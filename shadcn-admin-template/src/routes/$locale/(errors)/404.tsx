import { createFileRoute } from "@tanstack/react-router";
import { NotFoundError } from "#/features/errors/not-found-error";

export const Route = createFileRoute("/$locale/(errors)/404")({
	component: NotFoundError,
});
