import { NeuralBackground } from "@/components/effects/NeuralBackground";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { AIChatbot } from "@/components/chat/AIChatbot";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <NeuralBackground />
      <div className="bg-grid pointer-events-none fixed inset-0 z-[1] opacity-40" aria-hidden />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Journey />
          <Skills />
          <Projects />
          <Achievements />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
      <AIChatbot />
    </>
  );
}
