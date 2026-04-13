import { Loader } from "lucide-react";
import { FormControl } from "#/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";
import { cn } from "#/lib/utils";

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
	const defaultState = isControlled
		? { value: defaultValue, onValueChange }
		: { defaultValue, onValueChange };
	return (
		<Select {...defaultState}>
			<FormControl>
				<SelectTrigger className={cn(className)} disabled={disabled}>
					<SelectValue placeholder={placeholder ?? "Select"} />
				</SelectTrigger>
			</FormControl>
			<SelectContent>
				{isPending ? (
					<SelectItem className="h-14" disabled value="loading">
						<div className="flex items-center justify-center gap-2">
							<Loader className="h-5 w-5 animate-spin" />
							{"  "}
							Loading...
						</div>
					</SelectItem>
				) : (
					items?.map(({ label, value }) => (
						<SelectItem key={value} value={value}>
							{label}
						</SelectItem>
					))
				)}
			</SelectContent>
		</Select>
	);
}
