import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "#/components/ui/button";
import { Calendar } from "#/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "#/components/ui/popover";

interface DatePickerProps {
  onSelect: (date: Date | undefined) => void;
  placeholder?: string;
  selected: Date | undefined;
}

export function DatePicker({
  selected,
  onSelect,
  placeholder = "Pick a date",
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="w-[240px] justify-start text-start font-normal data-[empty=true]:text-muted-foreground"
