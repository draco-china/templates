import {
  AudioWaveform,
  Bell,
  Bug,
  Command,
  Construction,
  FileX,
  GalleryVerticalEnd,
  HelpCircle,
  LayoutDashboard,
  ListTodo,
  Lock,
  MessagesSquare,
  Monitor,
  Package,
  Palette,
  ServerOff,
  Settings,
  ShieldCheck,
  UserCog,
  Users,
  UserX,
  Wrench,
} from "lucide-react";
import type { SidebarData } from "#/components/layouts/components/types";

export const sidebarData: SidebarData = {
  user: {
    name: "Admin",
    email: "admin@example.com",
    avatar: "/avatars/avatar.jpg",
  },
  teams: [
    {
      name: "TanStack Shadcn Starter",
      logo: Command,
      plan: "Vite + ShadcnUI",
    },
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
  ],
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          url: "/",
          icon: LayoutDashboard,
        },
        {
          title: "Tasks",
          url: "/tasks",
          icon: ListTodo,
        },
        {
          title: "Apps",
          url: "/apps",
          icon: Package,
        },
        {
          title: "Chats",
          url: "/chats",
          badge: "3",
          icon: MessagesSquare,
        },
        {
          title: "Users",
          url: "/users",
          icon: Users,
        },
      ],
    },
    {
      title: "Pages",
      items: [
        {
          title: "Auth",
          icon: ShieldCheck,
          items: [
            {
              title: "Sign In",
              url: "/sign-in",
            },
            {
