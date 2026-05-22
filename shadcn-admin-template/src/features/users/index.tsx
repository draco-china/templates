import { getRouteApi } from "@tanstack/react-router";
import { ConfigDrawer } from "#/components/base/config-drawer";
import { LocaleSwitch } from "#/components/base/locale-switch";
import { ProfileDropdown } from "#/components/base/profile-dropdown";
import { Search } from "#/components/base/search";
import { ThemeSwitch } from "#/components/base/theme-switch";
import { Header } from "#/components/layout/header";
import { Main } from "#/components/layout/main";
import { UsersDialogs } from "./components/users-dialogs";
import { UsersPrimaryButtons } from "./components/users-primary-buttons";
import { UsersProvider } from "./components/users-provider";
import { UsersTable } from "./components/users-table";
import { users } from "./data/users";

const route = getRouteApi("/$locale/_authenticated/users/");

export function Users() {
	const search = route.useSearch();
	const navigate = route.useNavigate();

	return (
		<UsersProvider>
			<Header fixed>
				<Search />
				<div className="ms-auto flex items-center space-x-4">
					<LocaleSwitch />
					<ThemeSwitch />
					<ConfigDrawer />
					<ProfileDropdown />
				</div>
			</Header>

			<Main className="flex flex-1 flex-col gap-4 sm:gap-6">
				<div className="flex flex-wrap items-end justify-between gap-2">
					<div>
						<h2 className="font-bold text-2xl tracking-tight">User List</h2>
						<p className="text-muted-foreground">
							Manage your users and their roles here.
						</p>
					</div>
					<UsersPrimaryButtons />
				</div>
				<UsersTable data={users} navigate={navigate} search={search} />
			</Main>

			<UsersDialogs />
		</UsersProvider>
	);
}
