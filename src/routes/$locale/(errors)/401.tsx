import { createFileRoute } from "@tanstack/react-router";
import { UnauthorisedError } from "#/features/errors/unauthorized-error";

export const Route = createFileRoute("/$locale/(errors)/401")({
	component: UnauthorisedError,
});
