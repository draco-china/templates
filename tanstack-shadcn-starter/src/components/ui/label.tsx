import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"

import { cn } from "#/utils/cn"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
