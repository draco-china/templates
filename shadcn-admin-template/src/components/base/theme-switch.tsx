import { Check, Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { Button } from "#/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import { useTheme } from "#/context/theme-provider";
import { cn } from "#/lib/utils";
import { m } from "#/paraglide/messages";

export function ThemeSwitch() {
	const { theme, setTheme } = useTheme();

	/* Update theme-color meta tag
	 * when theme is updated */
	useEffect(() => {
		const themeColor = theme === "dark" ? "#020817" : "#fff";
		const metaThemeColor = document.querySelector("meta[name='theme-color']");
		if (metaThemeColor) {
			metaThemeColor.setAttribute("content", themeColor);
		}
	}, [theme]);

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<Button
					className="hidden scale-95 rounded-full sm:inline-flex"
					size="icon"
					variant="ghost"
				>
					<Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">{m.toggle_theme()}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					{m.theme_light()}{" "}
					<Check
						className={cn("ms-auto", theme !== "light" && "hidden")}
						size={14}
					/>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					{m.theme_dark()}
					<Check
						className={cn("ms-auto", theme !== "dark" && "hidden")}
						size={14}
					/>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					{m.theme_system()}
					<Check
						className={cn("ms-auto", theme !== "system" && "hidden")}
						size={14}
					/>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
