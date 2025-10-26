import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="shadcn-admin-logo"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      fill="none"
