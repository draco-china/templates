import { useStore } from "@tanstack/react-store";
import { Store } from "@tanstack/store";
import { getCookie, removeCookie, setCookie } from "#/lib/cookies";

const ACCESS_TOKEN = "thisisjustarandomstring";

interface AuthUser {
	accountNo: string;
	email: string;
	exp: number;
	role: string[];
}

interface AuthState {
	accessToken: string;
	user: AuthUser | null;
}

function getInitialToken(): string {
	const cookieState = getCookie(ACCESS_TOKEN);
	return cookieState ? JSON.parse(cookieState) : "";
}

export const authStore = new Store<AuthState>({
	user: null,
	accessToken: getInitialToken(),
});

export function setUser(user: AuthUser | null) {
	authStore.setState((state) => ({ ...state, user }));
}

export function setAccessToken(accessToken: string) {
	setCookie(ACCESS_TOKEN, JSON.stringify(accessToken));
	authStore.setState((state) => ({ ...state, accessToken }));
}

export function resetAccessToken() {
	removeCookie(ACCESS_TOKEN);
	authStore.setState((state) => ({ ...state, accessToken: "" }));
}

export function resetAuth() {
	removeCookie(ACCESS_TOKEN);
	authStore.setState((state) => ({ ...state, user: null, accessToken: "" }));
}

export function useAuthStore() {
	const state = useStore(authStore, (s) => s);
	return {
		...state,
		auth: {
			setUser,
			setAccessToken,
			resetAccessToken,
			reset: resetAuth,
		},
	};
}
