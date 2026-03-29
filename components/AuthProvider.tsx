"use client";

import { useEffect, useRef } from "react";
import { useAuthStore } from "@/store/auth.store";
import { authApi } from "@/lib/auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { token, setUser, clearUser, setLoading } = useAuthStore();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !token) return;
    initialized.current = true;

    setLoading(true);
    authApi
      .getMe()
      .then((res) => {
        if (res.success) {
          setUser(res.user, token, res.subscription);
        }
      })
      .catch(() => clearUser())
      .finally(() => setLoading(false));
  }, [token]);

  return <>{children}</>;
}
