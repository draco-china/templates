import type { LinkProps } from "@tanstack/react-router";

interface User {
  avatar: string;
  email: string;
  name: string;
}

interface Team {
  logo: React.ElementType;
  name: string;
  plan: string;
}

interface BaseNavItem {
  badge?: string;
  icon?: React.ElementType;
  title: string;
}

type NavLink = BaseNavItem & {
