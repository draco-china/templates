import { useLocation, useNavigate, useParams } from "@tanstack/react-router";
import { Check, Languages } from "lucide-react";
import { Button } from "#/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import { cn } from "#/lib/utils";
import { m } from "#/paraglide/messages";
import { locales } from "#/paraglide/runtime";

type Locale = (typeof locales)[number];

const LOCALE_LABELS: Record<string, string> = {
	"en-US": "English",
	"zh-CN": "中文",
};

export function LocaleSwitch() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const currentLocale =
		(useParams({ strict: false }) as Record<string, string>).locale ??
		locales[0];

	const handleSelect = (l: Locale) => {
		// Strip current locale prefix and navigate to new locale path.
		// setLocale is called by $locale/route.tsx beforeLoad with reload:false.
		const rest = pathname.replace(/^\/[^/]+/, "") || "/";
		navigate({ to: `/${l}${rest}` as string, replace: true });
	};

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<Button className="scale-95 rounded-full" size="icon" variant="ghost">
					<Languages className="size-[1.2rem]" />
					<span className="sr-only">{m.switch_language()}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{locales.map((l) => (
					<DropdownMenuItem key={l} onClick={() => handleSelect(l)}>
						{LOCALE_LABELS[l] ?? l}
						<Check
							className={cn("ms-auto", currentLocale !== l && "hidden")}
							size={14}
						/>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
