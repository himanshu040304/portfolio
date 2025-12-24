import { motion } from "framer-motion";
import { PROJECTS } from "@/data/portfolio";
import { ArrowRight, Link as LinkIcon, FileText } from "lucide-react";
import { Link } from "wouter";

export function Projects() {
  const flagship = PROJECTS.find(p => p.featured);
  const others = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 border-t border-white/5 bg-black/40">
      <div className="container mx-auto px-6">
        <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-12">03 // Case Studies</h2>
        
        {/* Flagship Project */}
        {flagship && (
          <div className="mb-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="border border-accent/20 bg-accent/[0.02] p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <div className="text-9xl font-bold font-mono text-accent pointer-events-none">01</div>
              </div>

              <div className="relative z-10 max-w-4xl">
                <div className="flex gap-3 mb-6 flex-wrap">
                  {flagship.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-accent border border-accent/30 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl md:text-5xl font-bold mb-6">{flagship.title}</h3>
                <p className="text-xl text-white/80 mb-8 font-light leading-relaxed">
                  {flagship.oneLineProblem}
                </p>

                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h4 className="text-sm font-mono text-muted-foreground mb-4 uppercase">Architecture</h4>
                    <ul className="space-y-3">
                      {flagship.architecture?.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-white/70">
                          <span className="text-accent">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-muted-foreground mb-4 uppercase">Outcomes</h4>
                    <ul className="space-y-3">
                      {flagship.outcomes?.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-white/70">
                          <span className="text-accent">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link href={`/project/${flagship.id}`}>
                    <a className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 font-mono text-sm font-bold hover:bg-accent/80 transition-colors">
                      READ TECHNICAL REPORT <ArrowRight className="w-4 h-4" />
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/5 bg-white/[0.02] p-6 hover:border-white/10 hover:bg-white/[0.04] transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-accent font-mono text-xs mb-2">
                  {project.tags[0]}
                </div>
                <Link href={`/project/${project.id}`}>
                    <a className="text-muted-foreground group-hover:text-white transition-colors">
                        <ArrowRight className="w-4 h-4 -rotate-45" />
                    </a>
                </Link>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                {project.oneLineProblem}
              </p>

              <div className="mt-auto pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-[10px] font-mono uppercase text-white/40 bg-white/5 px-2 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
