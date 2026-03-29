"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/auth.store";
import {
  Zap,
  Film,
  Download,
  LogOut,
  Settings,
  ChevronRight,
  BarChart3,
  Plus,
} from "lucide-react";

export default function DashboardPage() {
  const { user, subscription, clearUser } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user, router]);

  if (!user) return null;

  const videosUsed = subscription?.videosGenerated ?? 0;
  const videosLimit = subscription?.videosLimit ?? 5;
  const plan = subscription?.plan ?? "free";
  const unlimited = videosLimit === -1;
  const usagePct = unlimited
    ? 0
    : Math.min((videosUsed / videosLimit) * 100, 100);

  // Trial countdown (only for free plan)
  const trialEndsAt = subscription?.trialEndsAt
    ? new Date(subscription.trialEndsAt)
    : null;
  const trialDaysLeft =
    plan === "free" && trialEndsAt
      ? Math.max(
          0,
          Math.ceil(
            (trialEndsAt.getTime() - Date.now()) / (1000 * 60 * 60 * 24),
          ),
        )
      : null;
  const trialExpired =
    plan === "free" && trialEndsAt && trialEndsAt < new Date();

  const PLAN_LABELS: Record<string, string> = {
    free: "Free Trial",
    creator: "Creator",
    studio: "Studio",
    agency: "Agency",
  };
  const planLabel = PLAN_LABELS[plan] ?? plan;
  const isUpgradeable = plan !== "agency";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top bar */}
      <header className="h-14 border-b border-white/8 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
            <Zap className="w-3 h-3 text-white" />
          </div>
          <span className="text-sm font-bold">
            AutoTube <span className="text-violet-400">Studio</span>
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <span className="text-xs text-zinc-500">
            {user.firstName} {user.lastName}
          </span>
          <button
            onClick={() => {
              clearUser();
              router.push("/");
            }}
            className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign out
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-10">
        {/* Welcome */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold mb-1">
            Welcome back, {user.firstName} 👋
          </h1>
          <p className="text-sm text-zinc-500">
            Here&apos;s an overview of your AutoTube Studio account.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {/* Plan */}
          <div className="p-5 rounded-2xl border border-white/8 bg-white/3">
            <p className="text-xs text-zinc-500 mb-1">Current plan</p>
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold text-white">{planLabel}</p>
              {plan === "agency" && (
                <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full">
                  Unlimited
                </span>
              )}
              {plan === "free" && trialDaysLeft !== null && !trialExpired && (
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    trialDaysLeft <= 2
                      ? "bg-red-500/20 text-red-400"
                      : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {trialDaysLeft === 0
                    ? "Expires today"
                    : `${trialDaysLeft}d left`}
                </span>
              )}
              {trialExpired && (
                <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">
                  Trial ended
                </span>
              )}
            </div>
            {isUpgradeable && (
              <Link
                href="/pricing"
                className={`mt-2 inline-flex items-center gap-1 text-xs ${
                  trialExpired ||
                  (plan === "free" &&
                    trialDaysLeft !== null &&
                    trialDaysLeft <= 2)
                    ? "text-red-400 hover:text-red-300"
                    : "text-violet-400 hover:text-violet-300"
                }`}
              >
                {trialExpired
                  ? "Trial expired — upgrade now"
                  : plan === "free" &&
                      trialDaysLeft !== null &&
                      trialDaysLeft <= 2
                    ? `${trialDaysLeft === 0 ? "Expires today" : `${trialDaysLeft}d left`} — upgrade`
                    : "Upgrade"}{" "}
                <ChevronRight className="w-3 h-3" />
              </Link>
            )}
          </div>

          {/* Videos generated */}
          <div className="p-5 rounded-2xl border border-white/8 bg-white/3">
            <p className="text-xs text-zinc-500 mb-1">Videos this month</p>
            <p className="text-xl font-bold text-white">
              {videosUsed}
              {!unlimited && (
                <span className="text-sm text-zinc-500 font-normal">
                  {" "}
                  / {videosLimit}
                </span>
              )}
              {unlimited && (
                <span className="text-sm text-zinc-500 font-normal"> / ∞</span>
              )}
            </p>
            {!unlimited && (
              <div className="mt-2.5 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    usagePct >= 90
                      ? "bg-red-500"
                      : usagePct >= 60
                        ? "bg-yellow-500"
                        : "bg-violet-500"
                  }`}
                  style={{ width: `${usagePct}%` }}
                />
              </div>
            )}
            {!unlimited && usagePct >= 80 && (
              <p className="text-xs text-amber-400 mt-1">
                {100 - Math.floor(usagePct)}% quota remaining —{" "}
                <Link href="/pricing" className="underline">
                  upgrade
                </Link>
              </p>
            )}
          </div>

          {/* Email */}
          <div className="p-5 rounded-2xl border border-white/8 bg-white/3">
            <p className="text-xs text-zinc-500 mb-1">Account email</p>
            <p className="text-sm font-medium text-white truncate">
              {user.email}
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Role: <span className="capitalize">{user.role}</span>
            </p>
          </div>
        </div>

        {/* Quick actions */}
        <div className="mb-10">
          <h2 className="text-sm font-semibold text-zinc-300 mb-4">
            Quick actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/download"
              className="group flex items-center gap-3 p-4 rounded-xl border border-white/8 bg-white/3 hover:bg-white/5 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-violet-600/20 flex items-center justify-center shrink-0">
                <Download className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Download the app
                </p>
                <p className="text-xs text-zinc-500">Get the desktop client</p>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-600 ml-auto group-hover:text-zinc-400 transition-colors" />
            </Link>

            <Link
              href="/pricing"
              className="group flex items-center gap-3 p-4 rounded-xl border border-white/8 bg-white/3 hover:bg-white/5 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-violet-600/20 flex items-center justify-center shrink-0">
                <Plus className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Upgrade plan</p>
                <p className="text-xs text-zinc-500">More videos, more power</p>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-600 ml-auto group-hover:text-zinc-400 transition-colors" />
            </Link>

            <Link
              href="/#how-it-works"
              className="group flex items-center gap-3 p-4 rounded-xl border border-white/8 bg-white/3 hover:bg-white/5 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-violet-600/20 flex items-center justify-center shrink-0">
                <Film className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">How it works</p>
                <p className="text-xs text-zinc-500">4-step walkthrough</p>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-600 ml-auto group-hover:text-zinc-400 transition-colors" />
            </Link>
          </div>
        </div>

        {/* Getting started */}
        <div className="rounded-2xl border border-violet-500/20 bg-violet-600/5 p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-violet-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white mb-1">
                Ready to generate your first video?
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Download the AutoTube Studio desktop app, connect your local
                Ollama instance and ComfyUI, link your YouTube channel, and
                start generating fully automated faceless videos in minutes.
              </p>
              <Link
                href="/download"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download AutoTube Studio
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
