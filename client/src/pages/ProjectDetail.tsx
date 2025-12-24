import { useRoute, Link } from "wouter";
import { PROJECTS } from "@/data/portfolio";
import { Navigation } from "@/components/Navigation";
import { ArrowLeft, Cpu, Layers, Activity, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  const project = PROJECTS.find(p => p.id === params?.id);

  if (!match || !project) {
    return <div className="min-h-screen flex items-center justify-center bg-background text-muted-foreground font-mono">Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-32 pb-24 container mx-auto px-6 max-w-5xl">
        <Link href="/#projects">
          <a className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-white mb-12 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO PROJECTS
          </a>
        </Link>

        {/* Header */}
        <header className="mb-20 border-b border-white/10 pb-16">
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-mono text-accent border border-accent/30 bg-accent/5 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter leading-none"
          >
            {project.title}
          </motion.h1>
          <p className="text-xl md:text-3xl text-muted-foreground font-light leading-snug max-w-4xl">
            {project.oneLineProblem}
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Sidebar Info */}
          <aside className="lg:col-span-3 space-y-10">
            <div>
              <h3 className="text-xs font-mono text-white/40 uppercase mb-4 tracking-wider">Role</h3>
              <p className="font-medium text-white/90">{project.role}</p>
            </div>
            
            <div>
              <h3 className="text-xs font-mono text-white/40 uppercase mb-4 tracking-wider">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="bg-white/5 px-3 py-1.5 text-xs font-mono border border-white/10 text-white/70">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.links && (
                <div>
                  <h3 className="text-xs font-mono text-white/40 uppercase mb-4 tracking-wider">Resources</h3>
                  <div className="flex flex-col gap-3">
                    {project.links.map(link => (
                      <a key={link.label} href={link.url} className="text-accent hover:text-white transition-colors text-sm font-mono flex items-center gap-2">
                        <FileText className="w-3 h-3"/> {link.label}
                      </a>
                    ))}
                  </div>
                </div>
            )}
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-9 space-y-20">
            
            {/* Overview / Depth */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Cpu className="text-accent w-6 h-6" /> Technical Overview
              </h2>
              <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
                <p className="leading-relaxed whitespace-pre-line">
                  {project.depth}
                </p>
              </div>
            </section>

            {/* Detailed Sections */}
            {project.sections && (
               <div className="space-y-16">
                  {project.sections.map((section, idx) => (
                      <section key={idx} className="border-l-2 border-white/5 pl-8 hover:border-accent/50 transition-colors duration-500">
                          <h3 className="text-xl font-bold mb-4 text-white/90">{section.title}</h3>
                          <p className="text-muted-foreground leading-relaxed whitespace-pre-line mb-6">
                              {section.content}
                          </p>
                          {section.image && (
                              <div className="mt-8 border border-white/10 p-2 bg-black/40 overflow-hidden group">
                                  <div className="aspect-video relative overflow-hidden bg-white/5">
                                      <img 
                                        src={section.image} 
                                        alt={`Diagram for ${section.title}`} 
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                      />
                                      <div className="absolute bottom-0 right-0 bg-black/80 px-2 py-1 text-[10px] font-mono text-accent">
                                        FIG_0{idx+1}
                                      </div>
                                  </div>
                              </div>
                          )}
                      </section>
                  ))}
               </div>
            )}

            {/* Architecture List */}
            {project.architecture && (
              <section className="bg-white/[0.02] border border-white/5 p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Layers className="w-24 h-24" />
                </div>
                <h2 className="text-xl font-bold mb-8 flex items-center gap-3 relative z-10">
                  <Layers className="text-accent w-5 h-5" /> System Architecture
                </h2>
                <ul className="space-y-6 relative z-10">
                  {project.architecture.map((item, i) => (
                    <li key={i} className="flex gap-4 text-white/80">
                      <span className="font-mono text-accent text-sm pt-1">0{i + 1}</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Outcomes */}
            {project.outcomes && (
               <section>
                <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
                  <Activity className="text-accent w-5 h-5" /> Validation & Metrics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.outcomes.map((item, i) => (
                    <div key={i} className="p-6 border border-accent/20 bg-accent/[0.03] hover:bg-accent/[0.06] transition-colors">
                      <p className="font-medium text-white/90">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>
      </main>
    </div>
  );
}
