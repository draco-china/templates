import { ArrowRight, ChevronRight, Laptop, Moon, Sun } from "lucide-react";
import React from "react";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "#/components/ui/command";
import { useSearch } from "#/context/search-provider";
import { useTheme } from "#/context/theme-provider";
import { useNavigate } from "#/hooks/react-router";
import { m } from "#/paraglide/messages";
import { sidebarData } from "../layout/data/sidebar-data";
import { ScrollArea } from "../ui/scroll-area";

export function CommandMenu() {
	const navigate = useNavigate();
	const { setTheme } = useTheme();
	const { open, setOpen } = useSearch();

	const runCommand = React.useCallback(
		(command: () => unknown) => {
			setOpen(false);
			command();
		},
		[setOpen]
	);

	return (
		<CommandDialog modal onOpenChange={setOpen} open={open}>
			<CommandInput placeholder={m.command_search_placeholder()} />
			<CommandList>
				<ScrollArea className="h-72 pe-1" type="hover">
					<CommandEmpty>{m.command_no_results()}</CommandEmpty>
					{sidebarData.navGroups.map((group) => (
						<CommandGroup heading={group.title} key={group.title}>
							{group.items.map((navItem) => {
								if (navItem.url) {
									return (
										<CommandItem
											key={navItem.url}
											onSelect={() => {
												runCommand(() => navigate({ to: navItem.url }));
											}}
											value={navItem.title}
										>
											<div className="flex size-4 items-center justify-center">
												<ArrowRight className="size-2 text-muted-foreground/80" />
											</div>
											{navItem.title}
										</CommandItem>
									);
								}

								return navItem.items?.map((subItem) => (
									<CommandItem
										key={`${navItem.title}-${subItem.url}`}
										onSelect={() => {
											runCommand(() => navigate({ to: subItem.url }));
										}}
										value={`${navItem.title}-${subItem.url}`}
									>
										<div className="flex size-4 items-center justify-center">
											<ArrowRight className="size-2 text-muted-foreground/80" />
										</div>
										{navItem.title} <ChevronRight /> {subItem.title}
									</CommandItem>
								));
							})}
						</CommandGroup>
					))}
					<CommandSeparator />
					<CommandGroup heading={m.config_section_theme()}>
						<CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
							<Sun /> <span>{m.theme_light()}</span>
						</CommandItem>
						<CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
							<Moon className="scale-90" />
							<span>{m.theme_dark()}</span>
						</CommandItem>
						<CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
							<Laptop />
							<span>{m.theme_system()}</span>
						</CommandItem>
					</CommandGroup>
				</ScrollArea>
			</CommandList>
		</CommandDialog>
	);
}
