import { cn } from "#/lib/utils";
import { m } from "#/paraglide/messages";

export function SkipToMain() {
	return (
		<a
			className={cn(
				"fixed inset-s-44 z-999 whitespace-nowrap",
				"bg-primary px-4 py-2 font-medium text-primary-foreground text-sm",
				"opacity-95 shadow-sm transition",
				"-translate-y-52 hover:bg-primary/90",
				"focus:translate-y-3 focus:transform",
				"focus-visible:ring-1 focus-visible:ring-ring"
			)}
			href="#content"
		>
			{m.skip_to_main()}
		</a>
	);
}
