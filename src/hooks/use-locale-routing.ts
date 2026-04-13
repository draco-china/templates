import { useParams } from "@tanstack/react-router";

/**
 * Shared locale routing utilities.
 * Automatically injects the current locale into route params.
 */
export function useLocaleRouting() {
	const currentParams = useParams({ strict: false }) as Record<string, string>;
	const locale = currentParams.locale ?? "";

	/** Merge caller params with { locale } */
	function mergeParams(params?: unknown) {
		if (typeof params === "function") {
			return (prev: Record<string, unknown>) => ({
				locale,
				...(params as (p: typeof prev) => Record<string, unknown>)(prev),
			});
		}
		return { locale, ...(params as object | undefined) };
	}

	/** Strip locale prefix from pathname: "/en/settings" → "/settings" */
	function stripLocale(pathname: string): string {
		return pathname.replace(`/${locale}`, "") || "/";
	}

	return { locale, mergeParams, stripLocale };
}
