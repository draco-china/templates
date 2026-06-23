import type { Table } from "@tanstack/react-table";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import { Separator } from "#/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "#/components/ui/tooltip";
import { cn } from "#/utils/cn";

interface DataTableBulkActionsProps<TData> {
  children: React.ReactNode;
  entityName: string;
  table: Table<TData>;
}

/**
 * A modular toolbar for displaying bulk actions when table rows are selected.
 *
 * @template TData The type of data in the table.
 * @param {object} props The component props.
 * @param {Table<TData>} props.table The react-table instance.
 * @param {string} props.entityName The name of the entity being acted upon (e.g., "task", "user").
 * @param {React.ReactNode} props.children The action buttons to be rendered inside the toolbar.
 * @returns {React.ReactNode | null} The rendered component or null if no rows are selected.
 */
export function DataTableBulkActions<TData>({
  table,
  entityName,
  children,
}: DataTableBulkActionsProps<TData>): React.ReactNode | null {
  const selectedRows = table.getFilteredSelectedRowModel().rows;
  const selectedCount = selectedRows.length;
  const toolbarRef = useRef<HTMLDivElement>(null);
  const [announcement, setAnnouncement] = useState("");

  // Announce selection changes to screen readers
  useEffect(() => {
    if (selectedCount > 0) {
      const message = `${selectedCount} ${entityName}${selectedCount > 1 ? "s" : ""} selected. Bulk actions toolbar is available.`;

      // Use queueMicrotask to defer state update and avoid cascading renders
      queueMicrotask(() => {
        setAnnouncement(message);
      });

      // Clear announcement after a delay
      const timer = setTimeout(() => setAnnouncement(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [selectedCount, entityName]);

  const handleClearSelection = () => {
    table.resetRowSelection();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const buttons = toolbarRef.current?.querySelectorAll("button");
    if (!buttons) {
      return;
    }
    const buttonsArray = Array.from(buttons);
    const currentIndex = buttonsArray.indexOf(
      document.activeElement as HTMLButtonElement
    );

    switch (event.key) {
      case "ArrowRight": {
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % buttons.length;
        buttonsArray[nextIndex]?.focus();
        break;
      }
      case "ArrowLeft": {
        event.preventDefault();
        const prevIndex =
          currentIndex === 0 ? buttons.length - 1 : currentIndex - 1;
        buttonsArray[prevIndex]?.focus();
        break;
      }
      case "Home":
        event.preventDefault();
        buttonsArray[0]?.focus();
        break;
      case "End":
        event.preventDefault();
        buttonsArray.at(-1)?.focus();
        break;
      case "Escape": {
        // Check if the Escape key came from a dropdown trigger or content
        // We can't check dropdown state because Radix UI closes it before our handler runs
        const target = event.target as HTMLElement;
        const activeElement = document.activeElement as HTMLElement;

        // Check if the event target or currently focused element is a dropdown trigger
        const isFromDropdownTrigger =
          target?.getAttribute("data-slot") === "dropdown-menu-trigger" ||
          activeElement?.getAttribute("data-slot") ===
            "dropdown-menu-trigger" ||
          target?.closest('[data-slot="dropdown-menu-trigger"]') ||
          activeElement?.closest('[data-slot="dropdown-menu-trigger"]');

        // Check if the focused element is inside dropdown content (which is portaled)
        const isFromDropdownContent =
          activeElement?.closest('[data-slot="dropdown-menu-content"]') ||
          target?.closest('[data-slot="dropdown-menu-content"]');

        if (isFromDropdownTrigger || isFromDropdownContent) {
          // Escape was meant for the dropdown - don't clear selection
          return;
        }

        // Escape was meant for the toolbar - clear selection
        event.preventDefault();
        handleClearSelection();
        break;
      }
      default:
