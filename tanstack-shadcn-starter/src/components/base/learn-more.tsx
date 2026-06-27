import type { Content, Root, Trigger } from "@radix-ui/react-popover";
import { CircleQuestionMark } from "lucide-react";
import { Button } from "#/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "#/components/ui/popover";
import { cn } from "#/utils/cn";

type LearnMoreProps = React.ComponentProps<typeof Root> & {
  contentProps?: React.ComponentProps<typeof Content>;
  triggerProps?: React.ComponentProps<typeof Trigger>;
};

export function LearnMore({
  children,
  contentProps,
  triggerProps,
  ...props
}: LearnMoreProps) {
  return (
    <Popover {...props}>
