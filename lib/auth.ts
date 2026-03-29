import api from "./api";

export interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "admin" | "super_admin";
}

export interface Subscription {
  plan: "free" | "creator" | "studio" | "agency";
  videosGenerated: number;
  videosLimit: number;
  renewsAt?: string;
  trialEndsAt?: string; // only for plan === 'free'; ISO date string
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const authApi = {
  register: async (data: RegisterPayload) => {
    const res = await api.post("/auth/register", data);
    return res.data as {
      success: boolean;
      token: string;
      user: AuthUser;
    };
  },

  login: async (data: LoginPayload) => {
    const res = await api.post("/auth/login", data);
    return res.data as {
      success: boolean;
      token: string;
      user: AuthUser;
      subscription: Subscription | null;
    };
  },

  getMe: async () => {
    const res = await api.get("/auth/me");
    return res.data as {
      success: boolean;
      user: AuthUser;
      subscription: Subscription | null;
    };
  },

  forgotPassword: async (email: string) => {
    const res = await api.post("/auth/forgot-password", { email });
    return res.data as { success: boolean; message: string };
  },

  resetPassword: async (token: string, password: string) => {
    const res = await api.post("/auth/reset-password", { token, password });
    return res.data as { success: boolean; message: string };
  },

  updateProfile: async (data: { firstName: string; lastName: string }) => {
    const res = await api.put("/auth/profile", data);
    return res.data;
  },

  changePassword: async (currentPassword: string, newPassword: string) => {
    const res = await api.put("/auth/change-password", {
      currentPassword,
      newPassword,
    });
    return res.data;
  },
};
