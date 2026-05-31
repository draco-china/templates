import { createFileRoute, redirect } from "@tanstack/react-router";
import { getLocale } from "#/paraglide/runtime";

export const Route = createFileRoute("/")({
	beforeLoad: () => {
		const locale = getLocale();
		throw redirect({
			to: "/$locale",
			params: { locale },
			replace: true,
		});
	},
	component: () => null,
});
