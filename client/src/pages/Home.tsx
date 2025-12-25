import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/30">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
