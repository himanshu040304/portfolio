import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/30">
      <Navigation />
      <main>
        <Hero />
        <Philosophy />
        <Skills />
        <Projects />
        <section className="py-24 border-t border-white/5 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to engineer reliable systems?</h2>
            <a href="mailto:himanshu04mar@gmail.com" className="text-accent font-mono text-lg hover:underline">himanshu04mar@gmail.com</a>
        </section>
      </main>
    </div>
  );
}
