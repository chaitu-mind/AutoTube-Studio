import Link from "next/link";
import {
  Download,
  Apple,
  MonitorPlay,
  Terminal,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const RELEASES_BASE =
  "https://github.com/Tattva-Mind/autotube-studio-releases/releases/latest/download";

const platforms = [
  {
    icon: Apple,
    name: "macOS",
    desc: "Apple Silicon (M1/M2/M3/M4)",
    badge: "Recommended",
    ext: ".dmg",
    href: `${RELEASES_BASE}/AutoTube-Studio.dmg`,
    color: "from-zinc-700 to-zinc-800",
  },
  {
    icon: MonitorPlay,
    name: "Windows",
    desc: "Windows 10 / 11 (64-bit)",
    badge: null,
    ext: ".exe",
    href: `${RELEASES_BASE}/AutoTube-Studio-Setup.exe`,
    color: "from-blue-900 to-blue-950",
  },
  {
    icon: Terminal,
    name: "Linux",
    desc: "Ubuntu, Debian, Arch",
    badge: null,
    ext: ".AppImage",
    href: `${RELEASES_BASE}/AutoTube-Studio.AppImage`,
    color: "from-orange-900 to-red-950",
  },
];

const requirements = [
  { item: "16 GB RAM", note: "32 GB recommended for faster generation" },
  {
    item: "AI Language Runtime",
    note: "Powers on-device language model inference — free",
  },
  {
    item: "AI Vision Runtime",
    note: "Powers on-device image generation — free",
  },
  { item: "Video Engine", note: "Video assembly — auto-installed by the app" },
  { item: "YouTube account", note: "For uploading finished videos" },
];

export default function DownloadPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-5">
              <Download className="w-3 h-3" />
              <span>Native desktop app — macOS · Windows · Linux</span>
            </div>
            <h1 className="text-4xl font-extrabold mb-4">
              Download AutoTube Studio
            </h1>
            <p className="text-zinc-400 text-sm max-w-md mx-auto">
              A native desktop app that runs your full AI video pipeline
              locally. No subscriptions to external AI tools.
            </p>
          </div>

          {/* Platform cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="relative p-6 rounded-2xl border border-white/8 bg-white/3 flex flex-col items-center text-center hover:bg-white/5 transition-colors"
              >
                {p.badge && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-violet-600 text-white text-xs font-semibold">
                    {p.badge}
                  </span>
                )}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-3 border border-white/8`}
                >
                  <p.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-sm text-white mb-1">
                  {p.name}
                </h3>
                <p className="text-xs text-zinc-500 mb-4">{p.desc}</p>
                <a
                  href={p.href}
                  className="w-full py-2 rounded-lg bg-violet-600/20 border border-violet-500/30 text-violet-300 text-xs font-medium hover:bg-violet-600/30 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3 h-3" />
                  Download {p.ext}
                </a>
              </div>
            ))}
          </div>

          {/* macOS Gatekeeper notice */}
          <div className="mb-10 rounded-2xl border border-amber-500/30 bg-amber-500/8 p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-amber-300 mb-1">
                  macOS users — &quot;damaged app&quot; warning
                </h3>
                <p className="text-xs text-zinc-400 mb-3">
                  macOS blocks apps that aren&apos;t signed with an Apple
                  Developer certificate. AutoTube Studio is safe — follow one of
                  these steps after downloading:
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-zinc-300 mb-1">
                      Option 1 — Terminal (easiest, one command)
                    </p>
                    <code className="block text-xs bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-green-400 font-mono">
                      xattr -cr /Applications/AutoTube\ Studio.app
                    </code>
                    <p className="text-xs text-zinc-500 mt-1">
                      Then open the app normally.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-300 mb-1">
                      Option 2 — System Settings
                    </p>
                    <ol className="text-xs text-zinc-400 space-y-0.5 list-decimal list-inside">
                      <li>Try to open the app (it will be blocked)</li>
                      <li>
                        Go to{" "}
                        <span className="text-zinc-300">
                          System Settings → Privacy &amp; Security
                        </span>
                      </li>
                      <li>
                        Scroll down and click{" "}
                        <span className="text-zinc-300">
                          &quot;Open Anyway&quot;
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* System requirements */}
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-white mb-5">
              System requirements
            </h2>
            <div className="rounded-2xl border border-white/8 bg-white/3 overflow-hidden">
              {requirements.map((r, i) => (
                <div
                  key={r.item}
                  className={`flex items-center justify-between px-5 py-3.5 text-sm ${
                    i < requirements.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <span className="font-medium text-white">{r.item}</span>
                  <span className="text-xs text-zinc-500">{r.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-sm text-zinc-500 mb-4">
              Haven&apos;t created an account yet?
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors"
            >
              Create free account
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
