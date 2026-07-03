import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "#/components/ui/button";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "#/components/ui/sidebar";
import { cn } from "#/utils/cn";

export function AppTitle() {
  const { setOpenMobile } = useSidebar();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          className="gap-0 py-0 hover:bg-transparent active:bg-transparent"
          size="lg"
        >
          <div>
            <Link
              className="grid flex-1 text-start text-sm leading-tight"
              onClick={() => setOpenMobile(false)}
              to="/"
            >
              <span className="truncate font-bold">
                TanStack Shadcn Starter
              </span>
              <span className="truncate text-xs">Vite + ShadcnUI</span>
            </Link>
