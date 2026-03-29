"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X, Zap, LogOut } from "lucide-react";
import { useAuthStore } from "@/store/auth.store";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, clearUser } = useAuthStore();
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "How it works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/download", label: "Download" },
  ];

  const handleLogout = () => {
    clearUser();
    router.push("/");
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/8 bg-black/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-white text-sm tracking-tight">
            AutoTube <span className="text-violet-400">Studio</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm text-zinc-300 hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-zinc-300 hover:text-white transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
              >
                Get started free
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/8 bg-black/95 backdrop-blur-xl px-4 py-4 space-y-3">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-zinc-400 hover:text-white py-1.5"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/8 flex flex-col gap-2">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-sm text-zinc-300 py-1.5"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-left text-sm text-zinc-400 py-1.5"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm text-zinc-300 py-1.5">
                  Sign in
                </Link>
                <Link
                  href="/register"
                  className="inline-flex justify-center px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium"
                >
                  Get started free
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
