import { createFileRoute } from "@tanstack/react-router";
import { Otp } from "#/features/auth/otp";

export const Route = createFileRoute("/$locale/(auth)/otp")({
	component: Otp,
});
