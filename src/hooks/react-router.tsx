import {
	type NavigateOptions,
	type RegisteredRouter,
	Link as RouterLink,
	useMatchRoute as useRouterMatchRoute,
	useNavigate as useRouterNavigate,
} from "@tanstack/react-router";
import { getLocale } from "#/paraglide/runtime";

type RouterLinkProps = React.ComponentProps<typeof RouterLink>;

function mergeParams(params?: unknown, locale = getLocale()) {
	if (typeof params === "function") {
		return (prev: Record<string, unknown>) => ({
			locale,
			...(params as (p: typeof prev) => Record<string, unknown>)(prev),
		});
	}
	return { locale, ...(params as object | undefined) };
}

export function Link({ to, params, children, ...props }: RouterLinkProps) {
	return (
		<RouterLink
			{...props}
			activeOptions={{
				exact: true,
				includeHash: true,
			}}
			params={mergeParams(params) as RouterLinkProps["params"]}
			to={to}
		>
			{children}
		</RouterLink>
	);
}

type NavigateOptionsLoose<TTo extends string = string> = Omit<
	NavigateOptions<RegisteredRouter, string, TTo>,
	"params"
> & { params?: unknown };

export function useNavigate() {
	const navigate = useRouterNavigate();

	return <TTo extends string>(opts: NavigateOptionsLoose<TTo>) =>
		navigate({
			...opts,
			params: mergeParams(opts?.params),
		} as NavigateOptions<RegisteredRouter, string, TTo>);
}

type MatcherFn = (url: string | undefined, fuzzy?: boolean) => boolean;

interface UseMatchRouteOpts {
	fuzzy?: boolean;
	to?: string | (string | undefined)[];
}

type UseMatchRouteReturn<T extends UseMatchRouteOpts | undefined> =
	T extends undefined
		? MatcherFn
		: NonNullable<(T & UseMatchRouteOpts)["to"]> extends (string | undefined)[]
			? string | undefined
			: boolean;

/**
 * Hook pre-bound with the current locale param.
 * - useMatchRoute({ to: "/$locale/tasks" })              // boolean
 * - useMatchRoute({ to: "/$locale/tasks", fuzzy: true }) // boolean
 * - useMatchRoute({ to: ["/$locale/a", "/$locale/b"] })  // first matched url or undefined
 * - const fn = useMatchRoute(); fn("/$locale/tasks")     // MatcherFn for callbacks
 */
export function useMatchRoute<
	T extends UseMatchRouteOpts | undefined = undefined,
>(opts?: T): UseMatchRouteReturn<T> {
	const matchRoute = useRouterMatchRoute();
	const locale = getLocale();
	const match = (u: string | undefined, f = false): boolean => {
		if (!u) {
			return false;
		}
		return !!matchRoute({
			to: u as never,
			params: mergeParams(undefined, locale) as never,
			fuzzy: f,
		});
	};
	if (opts === undefined) {
		return match as UseMatchRouteReturn<T>;
	}
	const { to, fuzzy = false } = opts;
	if (Array.isArray(to)) {
		return to.find((u) => match(u, fuzzy)) as UseMatchRouteReturn<T>;
	}
	return match(to, fuzzy) as UseMatchRouteReturn<T>;
}
