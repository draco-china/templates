import type { Table } from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "#/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#/components/ui/select";
import { cn } from "#/utils/cn";
import { getPageNumbers } from "#/utils/format";

interface DataTablePaginationProps<TData> {
  className?: string;
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
  className,
}: DataTablePaginationProps<TData>) {
  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div
      className={cn(
        "flex items-center justify-between overflow-clip px-2",
        "@max-2xl/content:flex-col-reverse @max-2xl/content:gap-4",
        className
      )}
      style={{ overflowClipMargin: 1 }}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex @2xl/content:hidden w-[100px] items-center justify-center font-medium text-sm">
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex @max-2xl/content:flex-row-reverse items-center gap-2">
          <Select
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
            value={`${table.getState().pagination.pageSize}`}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="hidden font-medium text-sm sm:block">Rows per page</p>
        </div>
      </div>

      <div className="flex items-center sm:space-x-6 lg:space-x-8">
        <div className="flex @max-3xl/content:hidden w-auto items-center justify-center whitespace-nowrap font-medium text-sm">
          Page {currentPage} of {totalPages}
