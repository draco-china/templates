import { SearchIcon } from "lucide-react";
import { Button } from "#/components/ui/button";
import { useSearch } from "#/context/search-provider";
import { cn } from "#/utils/cn";

export function Search({
  className = "",
  placeholder = "Search",
  ...props
}: React.ComponentProps<"button"> & { placeholder?: string }) {
  const { setOpen } = useSearch();
  return (
    <Button
      {...props}
      aria-keyshortcuts="Meta+K Control+K"
      className={cn(
        "group relative h-8 w-full flex-1 justify-start rounded-md bg-muted/25 font-normal text-muted-foreground text-sm shadow-none hover:bg-accent sm:w-40 sm:pe-12 md:flex-none lg:w-52 xl:w-64",
