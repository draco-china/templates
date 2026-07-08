import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "#/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import { cn } from "#/utils/cn";

type TopNavProps = React.HTMLAttributes<HTMLElement> & {
  links: {
    title: string;
    href: string;
    isActive: boolean;
    disabled?: boolean;
  }[];
};

export function TopNav({ className, links, ...props }: TopNavProps) {
  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            className={cn("md:size-7 lg:hidden", className)}
            size="icon"
            variant="outline"
          >
            <Menu />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" side="bottom">
