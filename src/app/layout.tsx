import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { AIChatbot } from "@/components/AIChatbot";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Manish Patodiya — AI Engineer",
  description:
    "Portfolio of Manish Patodiya — AI Engineer and full stack developer building intelligent systems with LLMs, RAG, and modern web stacks.",
  openGraph: {
    title: "Manish Patodiya — AI Engineer",
    description: "Building intelligent systems for real-world impact.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-[var(--bg-deep)] text-foreground">
        {children}
        {/* Outside app/template.tsx so Framer Motion does not create a transform containing block for fixed positioning */}
        <AIChatbot />
      </body>
    </html>
  );
}
