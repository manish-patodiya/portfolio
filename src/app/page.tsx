import { SiteChrome } from "@/components/layout/SiteChrome";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <SiteChrome>
      <Hero />
      <Journey />
      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <Contact />
    </SiteChrome>
  );
}
