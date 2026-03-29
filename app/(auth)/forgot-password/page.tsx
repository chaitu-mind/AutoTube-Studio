"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authApi } from "@/lib/auth";
import { CheckCircle, Loader2 } from "lucide-react";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof schema>;

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await authApi.forgotPassword(data.email);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="w-full text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-green-500/15 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-400" />
          </div>
        </div>
        <h1 className="text-lg font-bold text-white mb-2">Check your email</h1>
        <p className="text-sm text-zinc-500 mb-6">
          If that email is registered, you'll receive a password reset link
          shortly.
        </p>
        <Link
          href="/login"
          className="text-sm text-violet-400 hover:text-violet-300 font-medium"
        >
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-7 text-center">
        <h1 className="text-xl font-bold mb-1.5 text-white">
          Reset your password
        </h1>
        <p className="text-sm text-zinc-500">
          Enter your email and we'll send you a reset link
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-xs text-zinc-400 mb-1.5">Email</label>
          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-violet-500/60 focus:outline-none text-sm placeholder:text-zinc-600 transition-colors text-white"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
          Send reset link
        </button>
      </form>

      <p className="mt-5 text-center text-xs text-zinc-500">
        Remember it?{" "}
        <Link
          href="/login"
          className="text-violet-400 hover:text-violet-300 font-medium"
        >
          Back to sign in
        </Link>
      </p>
    </div>
  );
}
