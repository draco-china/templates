import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "#/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	useSidebar,
} from "#/components/ui/sidebar";
import { Link, useMatchRoute } from "#/hooks/react-router";
import { Badge } from "../ui/badge";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import type {
	NavCollapsible,
	NavGroup as NavGroupProps,
	NavLink,
} from "./types";

export function NavGroup({ title, items }: NavGroupProps) {
	const { state, isMobile } = useSidebar();
	return (
		<SidebarGroup>
			<SidebarGroupLabel>{title}</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item) => {
					const key = `${item.title}-${item.url}`;

					if (!item.items) {
						return <SidebarMenuLink item={item} key={key} />;
					}

					if (state === "collapsed" && !isMobile) {
						return <SidebarMenuCollapsedDropdown item={item} key={key} />;
					}

					return <SidebarMenuCollapsible item={item} key={key} />;
				})}
			</SidebarMenu>
		</SidebarGroup>
	);
}

function NavBadge({ children }: { children: ReactNode }) {
	return <Badge className="rounded-full px-1 py-0 text-xs">{children}</Badge>;
}

function SidebarMenuLink({ item }: { item: NavLink }) {
	const { setOpenMobile } = useSidebar();
	const isActive = useMatchRoute({ to: item.url });
	return (
		<SidebarMenuItem>
			<SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
				<Link onClick={() => setOpenMobile(false)} to={item.url}>
					{item.icon && <item.icon />}
					<span>{item.title}</span>
					{item.badge && <NavBadge>{item.badge}</NavBadge>}
				</Link>
			</SidebarMenuButton>
		</SidebarMenuItem>
	);
}

function SidebarMenuCollapsible({ item }: { item: NavCollapsible }) {
	const { setOpenMobile } = useSidebar();
	const isChildActive = !!useMatchRoute({
		to: item.items.map((sub) => sub.url),
	});
	return (
		<Collapsible
			asChild
			className="group/collapsible"
			defaultOpen={isChildActive}
		>
			<SidebarMenuItem>
				<CollapsibleTrigger asChild>
					<SidebarMenuButton tooltip={item.title}>
						{item.icon && <item.icon />}
						<span>{item.title}</span>
						{item.badge && <NavBadge>{item.badge}</NavBadge>}
						<ChevronRight className="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 rtl:rotate-180" />
					</SidebarMenuButton>
				</CollapsibleTrigger>
				<CollapsibleContent className="CollapsibleContent">
					<SidebarMenuSub>
						{item.items.map((subItem) => (
							<CollapsibleSubItem
								item={subItem}
								key={subItem.title}
								onClose={() => setOpenMobile(false)}
							/>
						))}
					</SidebarMenuSub>
				</CollapsibleContent>
			</SidebarMenuItem>
		</Collapsible>
	);
}

function CollapsibleSubItem({
	item,
	onClose,
}: {
	item: NavLink;
	onClose: () => void;
}) {
	const isActive = useMatchRoute({ to: item.url });
	return (
		<SidebarMenuSubItem>
			<SidebarMenuSubButton asChild isActive={isActive}>
				<Link onClick={onClose} to={item.url}>
					{item.icon && <item.icon />}
					<span>{item.title}</span>
					{item.badge && <NavBadge>{item.badge}</NavBadge>}
				</Link>
			</SidebarMenuSubButton>
		</SidebarMenuSubItem>
	);
}

function SidebarMenuCollapsedDropdown({ item }: { item: NavCollapsible }) {
	const isChildActive = !!useMatchRoute({
		to: item.items.map((sub) => sub.url),
	});
	return (
		<SidebarMenuItem>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<SidebarMenuButton isActive={isChildActive} tooltip={item.title}>
						{item.icon && <item.icon />}
						<span>{item.title}</span>
						{item.badge && <NavBadge>{item.badge}</NavBadge>}
						<ChevronRight className="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
					</SidebarMenuButton>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="start" side="right" sideOffset={4}>
					<DropdownMenuLabel>
						{item.title} {item.badge ? `(${item.badge})` : ""}
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					{item.items.map((sub) => (
						<CollapsedDropdownItem item={sub} key={`${sub.title}-${sub.url}`} />
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</SidebarMenuItem>
	);
}

function CollapsedDropdownItem({ item }: { item: NavLink }) {
	const isActive = useMatchRoute({ to: item.url });
	return (
		<DropdownMenuItem asChild>
			<Link className={isActive ? "bg-secondary" : ""} to={item.url}>
				{item.icon && <item.icon />}
				<span className="max-w-52 text-wrap">{item.title}</span>
				{item.badge && <span className="ms-auto text-xs">{item.badge}</span>}
			</Link>
		</DropdownMenuItem>
	);
}
