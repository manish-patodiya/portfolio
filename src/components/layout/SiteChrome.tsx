import type { ReactNode } from "react";
import { NeuralBackground } from "@/components/effects/NeuralBackground";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <NeuralBackground />
      <div
        className="bg-grid pointer-events-none fixed inset-0 z-[1] opacity-40"
        aria-hidden
      />
      <div className="relative z-10">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
