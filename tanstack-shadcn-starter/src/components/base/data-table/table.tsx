import {
  type ColumnDef,
  flexRender,
  type RowData,
  type Table,
} from "@tanstack/react-table";
import {
  Table as BaseTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "#/components/ui/table";
import { cn } from "#/utils/cn";

declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    /** Sticks the column to the left or right edge */
    sticky?: "left" | "right";
    /** Applied to both <th> and <td> — use thClassName/tdClassName to target individually */
    tdClassName?: string;
    thClassName?: string;
  }
}

const STICKY_BASE_CLASS: Record<"left" | "right", string> = {
  left: "sticky inset-s-0",
  right: "sticky inset-e-0",
};

const STICKY_SHADOW_CLASS: Record<"left" | "right", string> = {
  left: "drop-shadow-[0_1px_2px_rgb(0_0_0_/_0.1)] dark:drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.1)] @4xl/content:drop-shadow-none",
  right:
    "drop-shadow-[0_-1px_2px_rgb(0_0_0_/_0.1)] dark:drop-shadow-[0_-1px_2px_rgb(255_255_255_/_0.1)] @4xl/content:drop-shadow-none",
};

const ROW_GROUP_CLASS = "group/row";
const CELL_STATE_CLASS =
  "bg-background group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted";

interface DataTableProps<TData> {
  className?: string;
  columns: ColumnDef<TData, RowData>[];
  table: Table<TData>;
}

export function DataTable<TData>({
  table,
  columns,
  className,
}: DataTableProps<TData>) {
  const orderedCols =
    table.getHeaderGroups()[0]?.headers.map((h) => h.column) ?? [];
  const lastLeftIdx = orderedCols.reduce(
    (acc, c, i) => (c.columnDef.meta?.sticky === "left" ? i : acc),
    -1
  );
  const firstRightIdx = orderedCols.findIndex(
    (c) => c.columnDef.meta?.sticky === "right"
  );

  return (
    <div className="overflow-hidden rounded-md border">
      <BaseTable className={className}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className={ROW_GROUP_CLASS} key={headerGroup.id}>
              {headerGroup.headers.map((header, i) => {
                const { sticky, thClassName } =
                  header.column.columnDef.meta ?? {};
                const isEdge =
                  (sticky === "left" && i === lastLeftIdx) ||
                  (sticky === "right" && i === firstRightIdx);
                return (
