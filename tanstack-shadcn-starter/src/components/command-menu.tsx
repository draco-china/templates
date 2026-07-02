import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Laptop, Moon, Sun } from "lucide-react";
import { useCallback } from "react";
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
import { sidebarData } from "./layouts/components/data/sidebar-data";
import { ScrollArea } from "./ui/scroll-area";

export function CommandMenu() {
  const navigate = useNavigate();
  const { setTheme } = useTheme();
  const { open, setOpen } = useSearch();

  const runCommand = useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    [setOpen]
  );

  return (
    <CommandDialog modal onOpenChange={setOpen} open={open}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <ScrollArea className="h-72 pe-1" type="hover">
          <CommandEmpty>No results found.</CommandEmpty>
          {sidebarData.navGroups.map((group) => (
            <CommandGroup heading={group.title} key={group.title}>
              {group.items.map((navItem, i) => {
                if (navItem.url) {
                  return (
                    <CommandItem
                      key={`${navItem.url}-${i}`}
                      onSelect={() => {
                        runCommand(() => navigate({ to: navItem.url }));
                      }}
                      value={navItem.title}
