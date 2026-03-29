import Link from "next/link";
import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black/60 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-sm text-white">
                AutoTube <span className="text-violet-400">Studio</span>
              </span>
            </Link>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-[180px]">
              AI-powered faceless YouTube videos, from idea to upload — fully
              automated.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3">
              Product
            </p>
            <ul className="space-y-2">
              {[
                { href: "/#features", label: "Features" },
                { href: "/#how-it-works", label: "How it works" },
                { href: "/pricing", label: "Pricing" },
                { href: "/download", label: "Download" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3">
              Company
            </p>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3">
              Legal
            </p>
            <ul className="space-y-2">
              {[
                { href: "/privacy", label: "Privacy policy" },
                { href: "/terms", label: "Terms of service" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} AutoTube Studio. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700">Built by Tattva</p>
        </div>
      </div>
    </footer>
  );
}
