"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authApi } from "@/lib/auth";
import { CheckCircle, Eye, EyeOff, Loader2 } from "lucide-react";

const schema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirm: z.string(),
  })
  .refine((d) => d.password === d.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

type FormData = z.infer<typeof schema>;

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const router = useRouter();
  const [showPw, setShowPw] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setError("");
    try {
      await authApi.resetPassword(token, data.password);
      setDone(true);
    } catch (err: any) {
      setError(
        err.response?.data?.message ?? "Reset failed. Link may have expired.",
      );
    }
  };

  if (done) {
    return (
      <div className="w-full text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-green-500/15 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-400" />
          </div>
        </div>
        <h1 className="text-lg font-bold text-white mb-2">Password updated</h1>
        <p className="text-sm text-zinc-500 mb-6">
          Your password has been reset. You can now sign in with your new
          password.
        </p>
        <Link
          href="/login"
          className="inline-flex items-center justify-center w-full py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
        >
          Sign in
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-7 text-center">
        <h1 className="text-xl font-bold mb-1.5 text-white">
          Set new password
        </h1>
        <p className="text-sm text-zinc-500">Choose a strong password</p>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-xs text-zinc-400 mb-1.5">
            New password
          </label>
          <div className="relative">
            <input
              {...register("password")}
              type={showPw ? "text" : "password"}
              placeholder="Min. 8 characters"
              className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-violet-500/60 focus:outline-none text-sm placeholder:text-zinc-600 text-white pr-10 transition-colors"
            />
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
            >
              {showPw ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-400 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs text-zinc-400 mb-1.5">
            Confirm password
          </label>
          <input
            {...register("confirm")}
            type="password"
            placeholder="Repeat password"
            className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-violet-500/60 focus:outline-none text-sm placeholder:text-zinc-600 text-white transition-colors"
          />
          {errors.confirm && (
            <p className="text-red-400 text-xs mt-1">
              {errors.confirm.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !token}
          className="w-full py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
          Reset password
        </button>
      </form>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense>
      <ResetPasswordForm />
    </Suspense>
  );
}
