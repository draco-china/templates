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
import type { SidebarData } from "../types";

export const sidebarData: SidebarData = {
	user: {
		name: "satnaing",
		email: "satnaingdev@gmail.com",
		avatar: "/avatars/shadcn.jpg",
	},
	teams: [
		{
			name: "Shadcn Admin",
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
					url: "/$locale/",
					icon: LayoutDashboard,
				},
				{
					title: "Tasks",
					url: "/$locale/tasks/",
					icon: ListTodo,
				},
				{
					title: "Apps",
					url: "/$locale/apps/",
					icon: Package,
				},
				{
					title: "Chats",
					url: "/$locale/chats/",
					badge: "3",
					icon: MessagesSquare,
				},
				{
					title: "Users",
					url: "/$locale/users/",
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
							url: "/$locale/sign-in",
						},
						{
							title: "Sign In (2 Col)",
							url: "/$locale/sign-in-2",
						},
						{
							title: "Sign Up",
							url: "/$locale/sign-up",
						},
						{
							title: "Forgot Password",
							url: "/$locale/forgot-password",
						},
						{
							title: "OTP",
							url: "/$locale/otp",
						},
					],
				},
				{
					title: "Errors",
					icon: Bug,
					items: [
						{
							title: "Unauthorized",
							url: "/$locale/401",
							icon: Lock,
						},
						{
							title: "Forbidden",
							url: "/$locale/403",
							icon: UserX,
						},
						{
							title: "Not Found",
							url: "/$locale/404",
							icon: FileX,
						},
						{
							title: "Internal Server Error",
							url: "/$locale/500",
							icon: ServerOff,
						},
						{
							title: "Maintenance Error",
							url: "/$locale/503",
							icon: Construction,
						},
					],
				},
			],
		},
		{
			title: "Other",
			items: [
				{
					title: "Settings",
					icon: Settings,
					items: [
						{
							title: "Profile",
							url: "/$locale/settings/",
							icon: UserCog,
						},
						{
							title: "Account",
							url: "/$locale/settings/account",
							icon: Wrench,
						},
						{
							title: "Appearance",
							url: "/$locale/settings/appearance",
							icon: Palette,
						},
						{
							title: "Notifications",
							url: "/$locale/settings/notifications",
							icon: Bell,
						},
						{
							title: "Display",
							url: "/$locale/settings/display",
							icon: Monitor,
						},
					],
				},
				{
					title: "Help Center",
					url: "/$locale/help-center/",
					icon: HelpCircle,
				},
			],
		},
	],
};
