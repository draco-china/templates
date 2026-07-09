import { useLocation, useNavigate } from "@tanstack/react-router";
import { ConfirmDialog } from "#/components/base/confirm-dialog";
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
      to: "/sign-in",
