import { motion } from "framer-motion";
import { SKILLS } from "@/data/portfolio";

export function Skills() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">Technical Skills</h2>
            <h3 className="text-3xl font-bold mb-6">Core Competencies</h3>
            <p className="text-muted-foreground leading-relaxed">
              Specialization in systems, networking, and infrastructure. Understanding across the full stack from kernel to application.
            </p>
          </div>
          
          <div className="md:col-span-8">
            <div className="space-y-12">
              {Object.entries(SKILLS).map(([category, items], index) => (
                <div key={category} className="group">
                  <h4 className="text-sm font-mono text-white/50 mb-4 border-b border-white/10 pb-2">{category}</h4>
                  <div className="flex flex-wrap gap-x-8 gap-y-3">
                    {items.map((skill) => (
                      <span key={skill} className="text-lg md:text-xl font-medium text-white/80 group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
