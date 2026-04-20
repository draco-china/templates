import { getRouteApi } from "@tanstack/react-router";
import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import {
  DataTable,
  DataTablePagination,
  DataTableToolbar,
} from "#/components/base/data-table";
import { useTableUrlState } from "#/hooks/use-table-url-state";
import { cn } from "#/utils/cn";
import { priorities, statuses } from "../data/data";
import type { Task } from "../data/schema";
import { DataTableBulkActions } from "./data-table-bulk-actions";
import { tasksColumns as columns } from "./tasks-columns";

const route = getRouteApi("/_authenticated/tasks/");

interface DataTableProps {
  data: Task[];
}

export function TasksTable({ data }: DataTableProps) {
  // Local UI-only states
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  // Local state management for table (uncomment to use local-only state, not synced with URL)
  // const [globalFilter, onGlobalFilterChange] = useState('')
  // const [columnFilters, onColumnFiltersChange] = useState<ColumnFiltersState>([])
  // const [pagination, onPaginationChange] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })

  // Synced with URL states (updated to match route search schema defaults)
  const {
    globalFilter,
    onGlobalFilterChange,
    columnFilters,
    onColumnFiltersChange,
    pagination,
    onPaginationChange,
    ensurePageInRange,
  } = useTableUrlState({
    search: route.useSearch(),
    navigate: route.useNavigate(),
    pagination: { defaultPage: 1, defaultPageSize: 10 },
    globalFilter: { enabled: true, key: "filter" },
    columnFilters: [
      { columnId: "status", searchKey: "status", type: "array" },
      { columnId: "priority", searchKey: "priority", type: "array" },
    ],
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      globalFilter,
      pagination,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    globalFilterFn: (row, _columnId, filterValue) => {
      const id = String(row.getValue("id")).toLowerCase();
      const title = String(row.getValue("title")).toLowerCase();
      const searchValue = String(filterValue).toLowerCase();

      return id.includes(searchValue) || title.includes(searchValue);
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onPaginationChange,
    onGlobalFilterChange,
    onColumnFiltersChange,
  });

  const pageCount = table.getPageCount();
  useEffect(() => {
    ensurePageInRange(pageCount);
  }, [pageCount, ensurePageInRange]);

  return (
    <div
      className={cn(
        'max-sm:has-[div[role="toolbar"]]:mb-16', // Add margin bottom to the table on mobile when the toolbar is visible
        "flex flex-1 flex-col gap-4"
      )}
    >
      <DataTableToolbar
        filters={[
          {
            columnId: "status",
            title: "Status",
            options: statuses,
          },
          {
            columnId: "priority",
            title: "Priority",
            options: priorities,
          },
        ]}
        searchPlaceholder="Filter by title or ID..."
        table={table}
      />
      <DataTable className="min-w-xl" columns={columns} table={table} />
      <DataTablePagination className="mt-auto" table={table} />
      <DataTableBulkActions table={table} />
    </div>
  );
}
