import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export function IconThemeSystem({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="icon-theme-system"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 79.86 51.14"
      className={cn(
        'overflow-hidden rounded-[6px]',
        'stroke-primary fill-primary group-data-[state=unchecked]:stroke-muted-foreground group-data-[state=unchecked]:fill-muted-foreground',
        className,
      )}
      {...props}
    >
      <path opacity={0.2} d="M0 0.03H22.88V51.17H0z" />
      <circle
        cx={6.7}
        cy={7.04}
        r={3.54}
        fill="#fff"
        opacity={0.8}
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit={10}
      />
      <path
        d="M18.12 6.39h-5.87c-.6 0-1.09-.45-1.09-1s.49-1 1.09-1h5.87c.6 0 1.09.45 1.09 1s-.49 1-1.09 1zM16.55 9.77h-4.24c-.55 0-1-.45-1-1s.45-1 1-1h4.24c.55 0 1 .45 1 1s-.45 1-1 1z"
        fill="#fff"
        stroke="none"
        opacity={0.75}
      />
      <path
        d="M18.32 17.37H4.59c-.69 0-1.25-.47-1.25-1.05s.56-1.05 1.25-1.05h13.73c.69 0 1.25.47 1.25 1.05s-.56 1.05-1.25 1.05z"
        fill="#fff"
        stroke="none"
        opacity={0.72}
      />
      <path
        d="M15.34 21.26h-11c-.55 0-1-.41-1-.91s.45-.91 1-.91h11c.55 0 1 .41 1 .91s-.45.91-1 .91z"
        fill="#fff"
        stroke="none"
        opacity={0.55}
      />
      <path
        d="M16.46 25.57H4.43c-.6 0-1.09-.44-1.09-.98s.49-.98 1.09-.98h12.03c.6 0 1.09.44 1.09.98s-.49.98-1.09.98z"
        fill="#fff"
        stroke="none"
        opacity={0.67}
      />
      <rect
        x={33.36}
        y={19.73}
        width={2.75}
