import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function IconTrello({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className={cn('[&>path]:stroke-current', className)}
      fill="none"
      stroke="currentColor"
