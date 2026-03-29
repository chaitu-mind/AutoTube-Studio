import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001/api/v1/autotube",
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
});

// Attach token from localStorage on every request
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("autotube_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Redirect to login on 401
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 && typeof window !== "undefined") {
      const publicPaths = ["/login", "/register", "/forgot-password", "/"];
      if (!publicPaths.includes(window.location.pathname)) {
        localStorage.removeItem("autotube_token");
        window.location.href = "/login";
      }
    }
    return Promise.reject(err);
  },
);

export default api;
