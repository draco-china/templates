import { useLocation } from "@tanstack/react-router";
import { ConfirmDialog } from "#/components/base/confirm-dialog";
import { useNavigate } from "#/hooks/react-router";
import { m } from "#/paraglide/messages";
import { useAuthStore } from "#/stores/auth-store";

interface SignOutDialogProps {
	onOpenChange: (open: boolean) => void;
	open: boolean;
}

export function SignOutDialog({ open, onOpenChange }: SignOutDialogProps) {
	const navigate = useNavigate();
	const location = useLocation();
	const { auth } = useAuthStore();

	const handleSignOut = () => {
		auth.reset();
		// Preserve current location for redirect after sign-in
		const currentPath = location.href;
		navigate({
			to: "/$locale/sign-in",
			search: { redirect: currentPath },
			replace: true,
		});
	};

	return (
		<ConfirmDialog
			className="sm:max-w-sm"
			confirmText={m.sign_out()}
			desc={m.sign_out_desc()}
			destructive
			handleConfirm={handleSignOut}
			onOpenChange={onOpenChange}
			open={open}
			title={m.sign_out()}
		/>
	);
}
