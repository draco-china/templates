import { Loader } from "lucide-react";
import { FormControl } from "#/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#/components/ui/select";
import { cn } from "#/utils/cn";

interface SelectDropdownProps {
  className?: string;
  defaultValue: string | undefined;
  disabled?: boolean;
  isControlled?: boolean;
  isPending?: boolean;
  items: { label: string; value: string }[] | undefined;
  onValueChange?: (value: string) => void;
  placeholder?: string;
}

export function SelectDropdown({
  defaultValue,
  onValueChange,
  isPending,
  items,
  placeholder,
  disabled,
  className = "",
  isControlled = false,
}: SelectDropdownProps) {
