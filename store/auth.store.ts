import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthUser, Subscription } from "@/lib/auth";

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  subscription: Subscription | null;
  isLoading: boolean;
  setUser: (
    user: AuthUser,
    token: string,
    subscription?: Subscription | null,
  ) => void;
  clearUser: () => void;
  setSubscription: (subscription: Subscription | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      subscription: null,
      isLoading: false,

      setUser: (user, token, subscription = null) => {
        if (typeof window !== "undefined") {
          localStorage.setItem("autotube_token", token);
        }
        set({ user, token, subscription });
      },

      clearUser: () => {
        if (typeof window !== "undefined") {
          localStorage.removeItem("autotube_token");
        }
        set({ user: null, token: null, subscription: null });
      },

      setSubscription: (subscription) => set({ subscription }),

      setLoading: (isLoading) => set({ isLoading }),
    }),
    {
      name: "autotube-auth",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        subscription: state.subscription,
      }),
    },
  ),
);
