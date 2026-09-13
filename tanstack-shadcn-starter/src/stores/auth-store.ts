import { useSelector } from "@tanstack/react-store";
import { Store } from "@tanstack/store";
import { getCookie, removeCookie, setCookie } from "#/utils/cookies";

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

const cookieState = getCookie(ACCESS_TOKEN);
const initToken = cookieState ? JSON.parse(cookieState) : "";

const authStore = new Store<AuthState>({
  user: null,
  accessToken: initToken,
});

export const useAuthStore = () => {
  const state = useSelector(authStore, (state) => state);

  return {
    auth: {
      user: state.user,
      setUser: (user: AuthUser | null) => {
        authStore.setState((prev) => ({ ...prev, user }));
      },
      accessToken: state.accessToken,
      setAccessToken: (accessToken: string) => {
        setCookie(ACCESS_TOKEN, JSON.stringify(accessToken));
        authStore.setState((prev) => ({ ...prev, accessToken }));
      },
      resetAccessToken: () => {
        removeCookie(ACCESS_TOKEN);
        authStore.setState((prev) => ({ ...prev, accessToken: "" }));
      },
      reset: () => {
        removeCookie(ACCESS_TOKEN);
        authStore.setState((prev) => ({
          ...prev,
          user: null,
          accessToken: "",
        }));
      },
    },
  };
};
