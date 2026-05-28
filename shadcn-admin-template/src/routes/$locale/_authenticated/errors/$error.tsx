import { createFileRoute } from "@tanstack/react-router";
import { ConfigDrawer } from "#/components/base/config-drawer";
import { LocaleSwitch } from "#/components/base/locale-switch";
import { ProfileDropdown } from "#/components/base/profile-dropdown";
import { Search } from "#/components/base/search";
import { ThemeSwitch } from "#/components/base/theme-switch";
import { Header } from "#/components/layout/header";
import { ForbiddenError } from "#/features/errors/forbidden";
import { GeneralError } from "#/features/errors/general-error";
import { MaintenanceError } from "#/features/errors/maintenance-error";
import { NotFoundError } from "#/features/errors/not-found-error";
import { UnauthorisedError } from "#/features/errors/unauthorized-error";

export const Route = createFileRoute("/$locale/_authenticated/errors/$error")({
	component: RouteComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
	const { error } = Route.useParams();

	const errorMap: Record<string, React.ComponentType> = {
		unauthorized: UnauthorisedError,
		forbidden: ForbiddenError,
		"not-found": NotFoundError,
		"internal-server-error": GeneralError,
		"maintenance-error": MaintenanceError,
	};
	const ErrorComponent = errorMap[error] || NotFoundError;

	return (
		<>
			<Header className="border-b" fixed>
				<Search />
				<div className="ms-auto flex items-center space-x-4">
					<LocaleSwitch />
					<ThemeSwitch />
					<ConfigDrawer />
					<ProfileDropdown />
				</div>
			</Header>
			<div className="flex-1 [&>div]:h-full">
				<ErrorComponent />
			</div>
		</>
	);
}
