import { Item, Root as Radio } from "@radix-ui/react-radio-group";
import { CircleCheck, RotateCcw, Settings } from "lucide-react";
import type { SVGProps } from "react";
import { IconDir } from "#/assets/custom/icon-dir";
import { IconLayoutCompact } from "#/assets/custom/icon-layout-compact";
import { IconLayoutDefault } from "#/assets/custom/icon-layout-default";
import { IconLayoutFull } from "#/assets/custom/icon-layout-full";
import { IconSidebarFloating } from "#/assets/custom/icon-sidebar-floating";
import { IconSidebarInset } from "#/assets/custom/icon-sidebar-inset";
import { IconSidebarSidebar } from "#/assets/custom/icon-sidebar-sidebar";
import { IconThemeDark } from "#/assets/custom/icon-theme-dark";
import { IconThemeLight } from "#/assets/custom/icon-theme-light";
import { IconThemeSystem } from "#/assets/custom/icon-theme-system";
import { Button } from "#/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "#/components/ui/sheet";
import { useDirection } from "#/context/direction-provider";
import { type Collapsible, useLayout } from "#/context/layout-provider";
import { useTheme } from "#/context/theme-provider";
import { cn } from "#/utils/cn";
import { useSidebar } from "./ui/sidebar";

export function ConfigDrawer() {
  const { setOpen } = useSidebar();
  const { resetDir } = useDirection();
  const { resetTheme } = useTheme();
  const { resetLayout } = useLayout();

  const handleReset = () => {
    setOpen(true);
    resetDir();
    resetTheme();
    resetLayout();
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label="Open theme settings"
          className="rounded-full"
          size="icon"
          variant="ghost"
        >
          <Settings aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="pb-0 text-start">
          <SheetTitle>Theme Settings</SheetTitle>
          <SheetDescription>
            Adjust the appearance and layout to suit your preferences.
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-6 overflow-y-auto px-4">
          <ThemeConfig />
          <SidebarConfig />
          <LayoutConfig />
          <DirConfig />
        </div>
        <SheetFooter className="gap-2">
          <Button
            aria-label="Reset all settings to default values"
            onClick={handleReset}
            variant="destructive"
          >
            Reset
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

function SectionTitle({
  title,
  showReset = false,
  onReset,
  resetAriaLabel,
  className,
}: {
  title: string;
  showReset?: boolean;
  onReset?: () => void;
  /** Shown on the small per-section reset (RotateCcw) for accessibility and tests. */
  resetAriaLabel?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-2 flex items-center gap-2 font-semibold text-muted-foreground text-sm",
        className
      )}
    >
      {title}
      {showReset && onReset && (
        <Button
          aria-label={resetAriaLabel}
          className="size-4 rounded-full"
          onClick={onReset}
          size="icon"
          type="button"
          variant="secondary"
        >
          <RotateCcw className="size-3" />
        </Button>
      )}
    </div>
  );
}

function RadioGroupItem({
  item,
  isTheme = false,
}: {
  item: {
    value: string;
    label: string;
    icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
  };
  isTheme?: boolean;
}) {
  return (
    <Item
      aria-describedby={`${item.value}-description`}
      aria-label={`Select ${item.label.toLowerCase()}`}
      className={cn("group outline-none", "transition duration-200 ease-in")}
      value={item.value}
    >
      <div
        aria-hidden="false"
        aria-label={`${item.label} option preview`}
        className={cn(
          "relative rounded-[6px] ring-[1px] ring-border",
          "group-data-[state=checked]:shadow-2xl group-data-[state=checked]:ring-primary",
          "group-focus-visible:ring-2"
        )}
        role="img"
      >
        <CircleCheck
          aria-hidden="true"
          className={cn(
            "size-6 fill-primary stroke-white",
            "group-data-[state=unchecked]:hidden",
            "absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
          )}
        />
        <item.icon
          aria-hidden="true"
          className={cn(
            !isTheme &&
              "fill-primary stroke-primary group-data-[state=unchecked]:fill-muted-foreground group-data-[state=unchecked]:stroke-muted-foreground"
          )}
        />
      </div>
      <div
        aria-live="polite"
        className="mt-1 text-xs"
        id={`${item.value}-description`}
      >
        {item.label}
      </div>
    </Item>
  );
}

function ThemeConfig() {
  const { defaultTheme, theme, setTheme } = useTheme();
  return (
    <div>
      <SectionTitle
        onReset={() => setTheme(defaultTheme)}
        resetAriaLabel="Reset theme preference to default"
        showReset={theme !== defaultTheme}
