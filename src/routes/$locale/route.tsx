import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { locales, setLocale } from "#/paraglide/runtime";

type Locale = (typeof locales)[number];

export const Route = createFileRoute("/$locale")({
	beforeLoad: ({ params }) => {
		const { locale } = params as { locale: string };
		if (!locales.includes(locale as Locale)) {
			throw redirect({
				to: "/$locale",
				params: { locale: locales[0] },
				replace: true,
			});
		}
		setLocale(locale as Locale, { reload: false });
	},
	component: () => <Outlet />,
});
