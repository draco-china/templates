import { useRef, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "#/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "#/components/ui/tooltip";
import { cn } from "#/utils/cn";

interface LongTextProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function LongText({
  children,
  className = "",
  contentClassName = "",
}: LongTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOverflown, setIsOverflown] = useState(false);

  // Use ref callback to check overflow when element is mounted
  const refCallback = (node: HTMLDivElement | null) => {
    ref.current = node;
    if (node && checkOverflow(node)) {
      queueMicrotask(() => setIsOverflown(true));
    }
  };

  if (!isOverflown) {
    return (
      <div className={cn("truncate", className)} ref={refCallback}>
        {children}
      </div>
    );
  }

  return (
