import { motion } from "framer-motion";
import { PROJECTS } from "@/data/portfolio";
import { ArrowRight, Zap, Calendar } from "lucide-react";
import { Link } from "wouter";

export function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">04 // Portfolio</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-16">Selected Projects</h3>
        
        {/* Grid of all projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-full"
            >
              <Link href={`/project/${project.id}`}>
                <a className="block h-full border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 p-6 md:p-8 flex flex-col">
                  
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-2 flex-wrap max-w-xs">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] font-mono uppercase text-accent bg-accent/10 px-2 py-1 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold mb-4 group-hover:text-accent transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6 flex-grow line-clamp-4">
                    {project.oneLineProblem}
                  </p>

                  {/* Meta */}
                  <div className="space-y-4 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 text-xs text-white/50 font-mono">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="text-[10px] font-mono uppercase text-white/40 bg-white/5 px-2 py-1">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-[10px] font-mono uppercase text-white/30 px-2 py-1">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <div className="border-t border-white/5 pt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Each project represents a deep technical exploration. Click any card to read the full case study, including architecture decisions, validation approaches, and measurable outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
