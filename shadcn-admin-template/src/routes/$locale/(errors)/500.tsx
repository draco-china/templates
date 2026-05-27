import { createFileRoute } from "@tanstack/react-router";
import { GeneralError } from "#/features/errors/general-error";

export const Route = createFileRoute("/$locale/(errors)/500")({
	component: GeneralError,
});
