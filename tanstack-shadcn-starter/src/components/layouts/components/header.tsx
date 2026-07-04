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

  return (
    <header
      className={cn(
        "z-50 h-16",
        fixed && "header-fixed peer/header sticky top-0 w-[inherit]",
        offset > 10 && fixed ? "shadow" : "shadow-none",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative flex h-full items-center gap-3 p-4 sm:gap-4",
          offset > 10 &&
            fixed &&
            "after:absolute after:inset-0 after:-z-10 after:bg-background/20 after:backdrop-blur-lg"
        )}
      >
        <SidebarTrigger className="max-md:scale-125" variant="outline" />
        <Separator className="h-6" orientation="vertical" />
        {topNav ? <TopNav className="me-auto" links={topNav} /> : null}
        <Search className={topNav ? undefined : "me-auto"} />
        <ThemeSwitch />
        <ConfigDrawer />
        <ProfileDropdown />
      </div>
    </header>
  );
}
