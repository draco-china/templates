import { useEffect, useState } from "react";
import { Search } from "#/components/base/search";
import { ConfigDrawer } from "#/components/config-drawer";
import { ProfileDropdown } from "#/components/profile-dropdown";
import { Separator } from "#/components/ui/separator";
import { SidebarTrigger } from "#/components/ui/sidebar";
import { cn } from "#/utils/cn";
import { ThemeSwitch } from "./theme-switch";
import { TopNav } from "./top-nav";

interface TopNavLink {
  disabled?: boolean;
  href: string;
  isActive: boolean;
  title: string;
}

type HeaderProps = React.HTMLAttributes<HTMLElement> & {
  fixed?: boolean;
  topNav?: TopNavLink[];
  ref?: React.Ref<HTMLElement>;
};

export function Header({ className, fixed, topNav, ...props }: HeaderProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop);
    };

    // Add scroll listener to the body
    document.addEventListener("scroll", onScroll, { passive: true });

    // Clean up the event listener on unmount
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

