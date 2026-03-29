import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Image as ImageIcon,
  Mic,
  Music,
  Upload,
  Search,
  ShieldCheck,
  Download,
  Star,
  MonitorPlay,
  Cpu,
  Bot,
  Film,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const features = [
  {
    icon: Bot,
    title: "Multi-Agent AI Pipeline",
    desc: "Specialised AI agents work in sequence — content strategy, scripting, visuals, narration, music, SEO, QA, and upload — all triggered from a single prompt.",
    color: "from-violet-500 to-purple-600",
    badge: "Fully automated",
  },
  {
    icon: Cpu,
    title: "100% Local AI",
    desc: "All AI inference runs entirely on your own machine. Zero cloud AI costs, zero data privacy concerns, no internet dependency for generation.",
    color: "from-blue-500 to-cyan-500",
    badge: "Zero cloud costs",
  },
  {
    icon: ImageIcon,
    title: "AI Scene Generation",
    desc: "Our AI vision engine generates cinematic scene images for every segment of your script. Ken Burns pan-and-zoom effects bring them to life.",
    color: "from-emerald-500 to-teal-500",
    badge: "Cinematic visuals",
  },
  {
    icon: Mic,
    title: "Local Text-to-Speech",
    desc: "High-quality voice narration generated entirely on-device. Multiple voices and languages — no API fees, no limits.",
    color: "from-orange-500 to-red-500",
    badge: "On-device voice",
  },
  {
    icon: Music,
    title: "Background Music",
    desc: "The Music Agent selects mood-appropriate royalty-free background tracks and mixes them with your narration at the perfect volume.",
    color: "from-pink-500 to-rose-500",
    badge: "Auto-scored",
  },
  {
    icon: Search,
    title: "AI SEO Optimisation",
    desc: "Click-optimised titles, descriptions, tags, and chapter markers tuned for YouTube search ranking — generated automatically.",
    color: "from-yellow-500 to-amber-500",
    badge: "YouTube SEO",
  },
  {
    icon: ShieldCheck,
    title: "Built-in QA Review",
    desc: "A dedicated QA Agent checks every output before assembly — script quality, image coherence, audio sync, and metadata completeness.",
    color: "from-indigo-500 to-violet-500",
    badge: "Auto QA",
  },
  {
    icon: Upload,
    title: "One-Click YouTube Upload",
    desc: "Preview your finished video inside the app, edit metadata if needed, and upload directly to your YouTube channel with a single click.",
    color: "from-red-500 to-pink-500",
    badge: "Direct upload",
  },
];

const steps = [
  {
    number: "01",
    title: "Download & Launch",
    desc: "Download AutoTube Studio for macOS, Windows, or Linux. The setup wizard guides you through connecting your AI engines and YouTube account.",
    detail: "One-time setup.",
  },
  {
    number: "02",
    title: "Type Your Idea",
    desc: "Enter a topic, video length, content style, and target channel. That's all the input required — the AI handles everything else.",
    detail: "30-second input.",
  },
  {
    number: "03",
    title: "Watch the Pipeline Run",
    desc: "The live Agent Status Panel shows every stage of the pipeline working in real time — from content strategy all the way to QA review.",
    detail: "Full transparency.",
  },
  {
    number: "04",
    title: "Preview & Publish",
    desc: "Preview the assembled video and AI-generated metadata. Edit anything you want, then upload to YouTube with one click.",
    detail: "You're in control.",
  },
];

const testimonials = [
  {
    quote:
      "I went from zero YouTube presence to 12,000 subscribers in 60 days. AutoTube Studio does in 20 minutes what used to take me 8 hours.",
    name: "Rohit M.",
    handle: "@RohitCreates",
    stars: 5,
  },
  {
    quote:
      "The fact that everything runs locally is a game-changer. No recurring AI API bills, no privacy worries. The video quality honestly shocked me.",
    name: "Priya S.",
    handle: "@PriyaTechYT",
    stars: 5,
  },
  {
    quote:
      "I run 4 faceless channels simultaneously. With the multi-channel support this app is basically printing content for me. Highly recommend.",
    name: "Aditya K.",
    handle: "@AdityaDigital",
    stars: 5,
  },
];

const stats = [
  { value: "100%", label: "Local AI" },
  { value: "~20 min", label: "Avg. generation time" },
  { value: "₹0", label: "Cloud AI costs" },
  { value: "1-click", label: "YouTube upload" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/12 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/8 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-7">
            <Zap className="w-3 h-3" />
            <span>Runs 100% on your machine — zero cloud AI costs</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Faceless YouTube videos,{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              fully automated
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed mb-10">
            Type a video idea. AutoTube Studio&apos;s intelligent AI pipeline
            writes the script, generates scenes, records narration, scores
            music, assembles the video, optimises SEO, and uploads to YouTube —
            all on your machine, in about 20 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-violet-500/20"
            >
              Start for free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/download"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-white/25 text-zinc-300 hover:text-white font-semibold text-sm transition-colors"
            >
              <Download className="w-4 h-4" />
              Download the app
            </Link>
          </div>

          <p className="mt-5 text-xs text-zinc-600">
            Free forever · No credit card · Runs 100% on your machine
          </p>
        </div>

        {/* App mockup */}
        <div className="relative max-w-5xl mx-auto mt-16 px-4 sm:px-6">
          <div className="rounded-2xl border border-white/8 bg-zinc-900/80 overflow-hidden shadow-2xl">
            <div className="h-9 bg-zinc-800/60 flex items-center px-4 gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-zinc-500 font-mono">
                AutoTube Studio — Studio View
              </span>
            </div>
            <div className="p-5 grid grid-cols-3 gap-4 min-h-[260px]">
              <div className="col-span-1 space-y-3">
                <div className="h-3 w-20 bg-zinc-700 rounded" />
                <div className="h-20 bg-zinc-800 rounded-lg border border-white/5" />
                <div className="h-3 w-24 bg-zinc-700 rounded" />
                <div className="h-8 bg-violet-600/30 rounded-lg" />
              </div>
              <div className="col-span-1 space-y-2">
                <div className="h-3 w-28 bg-zinc-700 rounded mb-3" />
                {[
                  "Content Strategy",
                  "Script Writing",
                  "Visual Design",
                  "Media Generation",
                  "Voice Narration",
                  "Audio Scoring",
                  "Video Assembly",
                  "SEO Optimisation",
                ].map((a, i) => (
                  <div
                    key={a}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-zinc-800/60 border border-white/5"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        i < 5
                          ? "bg-green-400"
                          : i === 5
                            ? "bg-violet-400 animate-pulse"
                            : "bg-zinc-600"
                      }`}
                    />
                    <span className="text-xs text-zinc-400">{a}</span>
                  </div>
                ))}
              </div>
              <div className="col-span-1 space-y-3">
                <div className="h-3 w-16 bg-zinc-700 rounded mb-3" />
                <div className="aspect-video bg-zinc-800 rounded-lg border border-white/5 flex items-center justify-center">
                  <MonitorPlay className="w-8 h-8 text-zinc-600" />
                </div>
                <div className="h-2.5 w-full bg-zinc-700 rounded" />
                <div className="h-2.5 w-3/4 bg-zinc-700 rounded" />
                <div className="h-7 bg-red-600/30 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-white mb-1">
                {s.value}
              </p>
              <p className="text-xs text-zinc-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything you need to run a faceless channel
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed">
              A complete production studio inside a desktop app. All running
              locally.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-5 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 transition-colors"
              >
                <div
                  className={`w-9 h-9 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <f.icon className="w-4 h-4 text-white" />
                </div>
                <div className="inline-block text-xs px-2 py-0.5 rounded-full border border-white/10 text-zinc-400 mb-2">
                  {f.badge}
                </div>
                <h3 className="font-semibold text-sm text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 bg-white/2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              From idea to upload in 4 steps
            </h2>
            <p className="text-zinc-400 text-sm max-w-md mx-auto">
              The most hands-off YouTube workflow ever built.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-full h-px border-t border-dashed border-white/10 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl border border-violet-500/30 bg-violet-500/10 flex items-center justify-center mb-4">
                    <span className="text-sm font-bold text-violet-400">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-2">
                    {step.desc}
                  </p>
                  <span className="text-xs text-violet-400">{step.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple, honest pricing
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto mb-7">
              We keep all plan details on a single pricing page so you always
              see the latest plans and limits.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors"
            >
              View pricing plans
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white/2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">
              Creators already automating with AutoTube
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-5 rounded-2xl border border-white/8 bg-white/3"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-xs font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.handle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="relative p-10 rounded-3xl border border-violet-500/20 bg-gradient-to-b from-violet-600/10 to-transparent overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/8 via-transparent to-purple-600/5" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Your YouTube channel on autopilot
              </h2>
              <p className="text-zinc-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                Start generating faceless YouTube videos today — completely
                free, completely on your machine.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors"
                >
                  Create free account
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/download"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl border border-white/10 hover:border-white/25 text-zinc-300 font-semibold text-sm transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download the app
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
