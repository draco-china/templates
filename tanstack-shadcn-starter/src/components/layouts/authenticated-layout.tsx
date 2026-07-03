import { Outlet } from "@tanstack/react-router";
import { SkipToMain } from "#/components/base/skip-to-main";
import { AppSidebar } from "#/components/layouts/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "#/components/ui/sidebar";
import { LayoutProvider } from "#/context/layout-provider";
import { SearchProvider } from "#/context/search-provider";
import { cn } from "#/utils/cn";
import { getCookie } from "#/utils/cookies";

interface AuthenticatedLayoutProps {
  children?: React.ReactNode;
}

export function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  const defaultOpen = getCookie("sidebar_state") !== "false";
  return (
    <SearchProvider>
      <LayoutProvider>
