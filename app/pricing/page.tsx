"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  XCircle,
  Zap,
  TrendingUp,
  Building2,
  Sparkles,
  Users,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// ─── Plan data ────────────────────────────────────────────────────────────────

const PLANS = [
  {
    id: "creator",
    icon: TrendingUp,
    name: "Creator",
    monthlyPrice: 799,
    annualPrice: 7990,
    annualPerMonth: 666,
    period: "/month",
    desc: "For creators building serious, monetized channels",
    cta: "Start free trial",
    ctaHref: "/register?plan=creator",
    highlight: true,
    badge: "Most Popular",
    roi: "1 monetized video = ₹500–5,000 earnings. Plan pays for itself.",
    features: [
      { text: "20 video generations / month", included: true },
      { text: "Up to 15 min per video", included: true },
      { text: "3 YouTube channels", included: true },
      { text: "1080p HD export", included: true },
      { text: "All 14 AI agents (local)", included: true },
      { text: "No watermark", included: true },
      { text: "Custom voice profiles", included: true },
      { text: "Priority processing queue", included: true },
      { text: "Email support", included: true },
      { text: "Batch scheduling", included: false },
      { text: "Analytics dashboard", included: false },
    ],
  },
  {
    id: "studio",
    icon: Sparkles,
    name: "Studio",
    monthlyPrice: 2499,
    annualPrice: 24990,
    annualPerMonth: 2083,
    period: "/month",
    desc: "For agencies and high-volume content teams",
    cta: "Get Studio",
    ctaHref: "/register?plan=studio",
    highlight: false,
    badge: "Best Value",
    roi: "10 channels × ₹3,000/month = ₹30,000 revenue from ₹2,499.",
    features: [
      { text: "60 video generations / month", included: true },
      { text: "Up to 30 min per video", included: true },
      { text: "10 YouTube channels", included: true },
      { text: "4K export", included: true },
      { text: "All 14 AI agents (local)", included: true },
      { text: "No watermark", included: true },
      { text: "Multi-language TTS (6 languages)", included: true },
      { text: "Batch scheduling (up to 30)", included: true },
      { text: "Analytics dashboard", included: true },
      { text: "Priority support + Discord", included: true },
      { text: "White-label thumbnails", included: true },
    ],
  },
  {
    id: "agency",
    icon: Building2,
    name: "Agency",
    monthlyPrice: 7999,
    annualPrice: null,
    annualPerMonth: null,
    period: "/month",
    desc: "Unlimited scale for content agencies",
    cta: "Contact sales",
    ctaHref: "mailto:hello@autotube.studio",
    highlight: false,
    badge: null,
    roi: null,
    features: [
      { text: "Unlimited video generations", included: true },
      { text: "Unlimited YouTube channels", included: true },
      { text: "4K export", included: true },
      { text: "No watermark", included: true },
      { text: "All 14 AI agents (local)", included: true },
      { text: "Multi-language TTS (12+ languages)", included: true },
      { text: "Unlimited batch scheduling", included: true },
      { text: "Full analytics dashboard", included: true },
      { text: "White-label (remove AutoTube branding)", included: true },
      { text: "REST API access", included: true },
      { text: "Dedicated account manager", included: true },
    ],
  },
];

const FAQS = [
  {
    q: "Does AutoTube Studio use my computer or the cloud?",
    a: "Your computer. AutoTube Studio runs the entire 14-agent AI pipeline locally using Ollama and ComfyUI. There are no per-video cloud compute charges — your subscription unlocks the software and enforces a fair-use quota.",
  },
  {
    q: "What does the 7-day free trial include?",
    a: "The trial gives you 5 video generations and full access to all Creator-level features for 7 days — no credit card required. After the trial ends you can upgrade to Creator, Studio, or Agency to keep creating.",
  },
  {
    q: "Does my trial automatically convert to a paid plan?",
    a: "No. We never charge you without explicit action. When the 7-day trial expires the app shows an upgrade prompt. Your account, channel connections, and project settings are saved so nothing is lost.",
  },
  {
    q: "Why does a desktop app need a login?",
    a: "The login enforces your monthly generation quota, prevents account sharing across unlimited machines, and auto-resets your counter on your billing date. You only need internet for the startup license check — not for each video generation.",
  },
  {
    q: "What is the annual billing discount?",
    a: "Annual billing saves you 2 months — about 16% off. Creator: ₹7,990/year vs ₹9,588/year if billed monthly. Studio: ₹24,990/year vs ₹29,988/year monthly.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your dashboard — no phone calls, no dark patterns. Your plan stays active until the end of the current billing period.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center px-4">
        <div className="inline-flex items-center gap-2 bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-full px-4 py-2 text-sm mb-6">
          <Sparkles size={14} />
          Simple, honest pricing
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Plans that grow{" "}
          <span className="gradient-text">with your channel</span>
        </h1>
        <p className="text-white/50 text-lg max-w-2xl mx-auto mb-6">
          Every plan includes the full 14-agent AI pipeline running locally on
          your machine. You provide the hardware — we provide the intelligence.
          No per-video cloud fees, ever.
        </p>

        {/* 7-day free trial callout */}
        <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/25 rounded-xl px-6 py-3 mb-10">
          <Zap size={16} className="text-green-400 shrink-0" />
          <p className="text-sm text-green-300">
            <span className="font-semibold">Start your 7-day free trial</span> —
            5 videos, full Creator features.{" "}
            <span className="text-green-400/70">No credit card required.</span>
          </p>
        </div>

        {/* Monthly / Annual toggle */}
        <div className="inline-flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1">
          <button
            onClick={() => setAnnual(false)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              !annual
                ? "bg-violet-600 text-white"
                : "text-white/50 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
              annual
                ? "bg-violet-600 text-white"
                : "text-white/50 hover:text-white"
            }`}
          >
            Annual
            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full">
              Save 2 months
            </span>
          </button>
        </div>
      </section>

      {/* Plans grid */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            const displayPrice =
              plan.monthlyPrice === 0
                ? "₹0"
                : annual && plan.annualPerMonth
                  ? `₹${plan.annualPerMonth.toLocaleString("en-IN")}`
                  : `₹${plan.monthlyPrice.toLocaleString("en-IN")}`;
            const billingNote =
              annual && plan.annualPrice
                ? `₹${plan.annualPrice.toLocaleString("en-IN")} billed annually`
                : "billed monthly";

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl border p-6 flex flex-col transition-all ${
                  plan.highlight
                    ? "bg-violet-600/10 border-violet-500 shadow-lg shadow-violet-900/30"
                    : "bg-white/[0.03] border-white/10 hover:border-white/20"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap ${
                      plan.highlight
                        ? "bg-violet-600 text-white"
                        : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Header */}
                <div className="mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                      plan.highlight ? "bg-violet-500/20" : "bg-white/5"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={
                        plan.highlight ? "text-violet-400" : "text-white/50"
                      }
                    />
                  </div>
                  <h2 className="text-xl font-bold">{plan.name}</h2>
                  <p className="text-white/40 text-sm mt-1">{plan.desc}</p>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">{displayPrice}</span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-white/40 text-sm mb-1">
                        {annual && plan.annualPerMonth ? "/mo" : plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-white/30 text-xs mt-1">{billingNote}</p>
                  {annual && plan.annualPrice && (
                    <p className="text-green-400 text-xs mt-0.5">
                      💰 Save ₹
                      {(
                        plan.monthlyPrice * 12 -
                        plan.annualPrice
                      ).toLocaleString("en-IN")}
                      /year
                    </p>
                  )}
                </div>

                {/* ROI callout */}
                {plan.roi && (
                  <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3 mb-5 text-green-400 text-xs">
                    💡 {plan.roi}
                  </div>
                )}

                {/* CTA */}
                <Link
                  href={plan.ctaHref}
                  className={`block text-center py-3 rounded-xl font-semibold text-sm mb-6 transition-all ${
                    plan.highlight
                      ? "bg-violet-600 hover:bg-violet-500 text-white"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
                >
                  {plan.cta}
                  {plan.highlight && (
                    <ArrowRight size={14} className="inline ml-1" />
                  )}
                </Link>

                {/* Feature list */}
                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      {f.included ? (
                        <CheckCircle
                          size={16}
                          className="text-violet-400 mt-0.5 shrink-0"
                        />
                      ) : (
                        <XCircle
                          size={16}
                          className="text-white/15 mt-0.5 shrink-0"
                        />
                      )}
                      <span
                        className={
                          f.included ? "text-white/80" : "text-white/25"
                        }
                      >
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        {/* Trial note */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <p className="text-white/30 text-sm">
            All plans require a valid account login on the desktop app. •{" "}
            <Link href="/download" className="underline hover:text-white/60">
              Download the app
            </Link>{" "}
            • Pricing in INR incl. GST • Cancel anytime
          </p>
          <p className="text-green-500/60 text-xs">
            ✓ 7-day free trial on all new accounts • No credit card required •
            Trial expires, never auto-charges
          </p>
        </div>
      </section>

      {/* Why login required */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-8 flex gap-5">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 mt-1">
            <Users size={22} className="text-amber-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">
              Why does a desktop app need a login?
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              AutoTube Studio runs 100% locally — no cloud AI costs per video.
              The login enforces your monthly quota, prevents one account from
              being shared across 100 machines, and auto-resets your counter
              every billing cycle. The app only needs internet for a brief
              startup license check, not during video generation.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                "Fair quota tracking across 2 devices",
                "Auto-reset every billing cycle",
                "Upgrade plan → quota unlocks instantly",
                "No internet needed during generation",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-white/60"
                >
                  <CheckCircle size={14} className="text-amber-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quick comparison table */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <h2 className="text-2xl font-bold text-center mb-10">
          Quick comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-white/40 font-normal w-1/3">
                  Feature
                </th>
                {["Trial (7d)", "Creator", "Studio", "Agency"].map((n) => (
                  <th
                    key={n}
                    className={`py-3 px-4 text-center font-semibold ${
                      n === "Creator"
                        ? "text-violet-400"
                        : n === "Trial (7d)"
                          ? "text-green-400"
                          : "text-white/70"
                    }`}
                  >
                    {n}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Videos", "5 / 7 days", "20 / mo", "60 / mo", "∞"],
                ["Max video length", "15 min", "15 min", "30 min", "30 min"],
                ["YouTube channels", "1", "3", "10", "∞"],
                ["Export quality", "1080p", "1080p", "4K", "4K"],
                ["Watermark", "Yes", "No", "No", "No"],
                ["Custom voice", "—", "✓", "✓", "✓"],
                ["Batch scheduling", "—", "—", "30/batch", "∞"],
                ["White-label", "—", "—", "—", "✓"],
                ["API access", "—", "—", "—", "✓"],
              ].map(([feature, ...cells], ri) => (
                <tr
                  key={ri}
                  className="border-b border-white/5 hover:bg-white/[0.02]"
                >
                  <td className="py-3 px-4 text-white/50">{feature}</td>
                  {cells.map((c, ci) => (
                    <td
                      key={ci}
                      className={`py-3 px-4 text-center ${
                        ci === 0
                          ? "text-green-400/80"
                          : ci === 1
                            ? "text-violet-300 font-medium"
                            : "text-white/60"
                      }`}
                    >
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-24">
        <h2 className="text-2xl font-bold text-center mb-10">
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/[0.03] transition-colors"
              >
                <span className="font-medium text-sm">{faq.q}</span>
                <span className="text-white/40 text-lg ml-4">
                  {expanded === i ? "−" : "+"}
                </span>
              </button>
              {expanded === i && (
                <div className="px-5 pb-4 text-white/50 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-32 text-center">
        <div className="bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border border-violet-500/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to automate your channel?
          </h2>
          <p className="text-white/50 mb-2">
            Start your 7-day free trial today. No credit card required.
          </p>
          <p className="text-green-400/70 text-sm mb-8">
            5 videos • Full Creator features • Trial expires, never auto-charges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-violet-600 hover:bg-violet-500 text-white px-8 py-3 rounded-xl font-semibold transition-all"
            >
              Start 7-day free trial
            </Link>
            <Link
              href="/download"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3 rounded-xl font-semibold transition-all"
            >
              Download the app
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
