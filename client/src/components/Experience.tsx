import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Inter IIT Tech Meet 14.0",
    organization: "IIT Delhi",
    role: "2nd Place - Arista High Prep Problem Statement",
    period: "2024",
    description: "Designed RRM-Plus: a client-centric WiFi resource management system using distributed systems, causal inference, and ns-3 simulation.",
    highlights: [
      "Distributed control systems architecture",
      "Causal inference for validation",
      "ns-3 digital twin simulation",
    ]
  },
  {
    title: "Systems & Networking Research",
    organization: "IIT Guwahati",
    role: "Independent Study",
    period: "2023-2024",
    description: "Deep dive into low-level systems: kernel design, network protocols, distributed algorithms, and ML systems.",
    highlights: [
      "OS kernel modifications (xv6)",
      "Network protocol implementation",
      "Blockchain infrastructure exploration",
    ]
  },
  {
    title: "Competitive Programming & Problem Solving",
    organization: "Algorithm Design Track",
    role: "Team Member",
    period: "2023-2024",
    description: "Participated in multiple hackathons and tech meets focusing on systems and infrastructure challenges.",
    highlights: [
      "DeFi arbitrage bot development",
      "Blockchain protocol design",
      "Advanced algorithms and data structures",
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-white/5 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">01 // Experience</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-16">Technical Journey</h3>
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border-l-2 border-accent/30 hover:border-accent/60 pl-8 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="mt-1">
                    <Briefcase className="w-5 h-5 text-accent flex-shrink-0" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white/95">{exp.title}</h4>
                    <p className="text-accent font-mono text-sm mb-2">{exp.organization}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {exp.period}
                      </span>
                      {exp.role && <span>• {exp.role}</span>}
                    </div>
                  </div>
                </div>
                
                <p className="text-white/75 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-accent">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
