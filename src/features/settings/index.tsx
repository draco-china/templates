import { Outlet } from "@tanstack/react-router";
import { Bell, Monitor, Palette, UserCog, Wrench } from "lucide-react";
import { ConfigDrawer } from "#/components/base/config-drawer";
import { ProfileDropdown } from "#/components/base/profile-dropdown";
import { Search } from "#/components/base/search";
import { ThemeSwitch } from "#/components/base/theme-switch";
import { Header } from "#/components/layout/header";
import { Main } from "#/components/layout/main";
import { Separator } from "#/components/ui/separator";
import { SidebarNav } from "./components/sidebar-nav";

const sidebarNavItems = [
	{
		title: "Profile",
		href: "/$locale/settings",
		icon: <UserCog size={18} />,
	},
	{
		title: "Account",
		href: "/$locale/settings/account",
		icon: <Wrench size={18} />,
	},
	{
		title: "Appearance",
		href: "/$locale/settings/appearance",
		icon: <Palette size={18} />,
	},
	{
		title: "Notifications",
		href: "/$locale/settings/notifications",
		icon: <Bell size={18} />,
	},
	{
		title: "Display",
		href: "/$locale/settings/display",
		icon: <Monitor size={18} />,
	},
];

export function Settings() {
	return (
		<>
			{/* ===== Top Heading ===== */}
			<Header>
				<Search />
				<div className="ms-auto flex items-center space-x-4">
					<ThemeSwitch />
					<ConfigDrawer />
					<ProfileDropdown />
				</div>
			</Header>

			<Main fixed>
				<div className="space-y-0.5">
					<h1 className="font-bold text-2xl tracking-tight md:text-3xl">
						Settings
					</h1>
					<p className="text-muted-foreground">
						Manage your account settings and set e-mail preferences.
					</p>
				</div>
				<Separator className="my-4 lg:my-6" />
				<div className="flex flex-1 flex-col space-y-2 overflow-hidden md:space-y-2 lg:flex-row lg:space-x-12 lg:space-y-0">
					<aside className="top-0 lg:sticky lg:w-1/5">
						<SidebarNav items={sidebarNavItems} />
					</aside>
					<div className="flex w-full overflow-y-hidden p-1">
						<Outlet />
					</div>
				</div>
			</Main>
		</>
	);
}
