import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";

const geistSans = Geist({
  variable: "--font-display",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoTube Studio — AI-Powered Faceless YouTube Videos",
  description:
    "Generate complete, upload-ready faceless YouTube videos from a single text prompt. Powered by local AI — script, visuals, voice, music, SEO, and upload — fully automated.",
  keywords: [
    "faceless youtube",
    "ai video generation",
    "automated youtube",
    "youtube automation",
    "autotube studio",
    "ai content creator",
  ],
  openGraph: {
    title: "AutoTube Studio",
    description:
      "Turn a text prompt into a full YouTube video in minutes. 100% automated, 100% local AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <AuthProvider>{children}</AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
