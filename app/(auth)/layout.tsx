import Link from "next/link";
import { Zap } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-600/8 blur-3xl" />
      </div>

      {/* Logo */}
      <div className="mb-8 relative z-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-white text-sm tracking-tight">
            AutoTube <span className="text-violet-400">Studio</span>
          </span>
        </Link>
      </div>

      {/* Auth card */}
      <div className="relative z-10 w-full max-w-sm bg-white/4 border border-white/10 rounded-2xl p-7 shadow-2xl">
        {children}
      </div>

      <p className="mt-6 text-xs text-zinc-600 relative z-10">
        © {new Date().getFullYear()} AutoTube Studio
      </p>
    </div>
  );
}
