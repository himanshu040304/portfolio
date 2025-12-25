import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Engineering Intern",
    organization: "Adobe",
    role: "Acrobat Performance",
    period: "May 2025 - Jul 2025",
    location: "Noida, India",
    description: "Designed a novel adaptive scheduling solution for Acrobat Reader, currently under consideration for patent filing.",
    highlights: [
      "Created adaptive background task scheduler optimizing idle-time without affecting responsiveness",
      "Developed modular scheduling framework using idle prediction, burstiness detection, and activity scoring",
      "Validated C++ Win32 prototype with 60% reduction in hang time and 50% higher background task throughput",
    ]
  },
  {
    title: "Core Contributor",
    organization: "iit.fun",
    role: "Web3 Platform Development",
    period: "May 2025 - Oct 2025",
    location: "Remote",
    description: "Active contributor to Web3 platform driving adoption across 15+ IITs with 1000+ active students.",
    highlights: [
      "Collaborated across 15+ IITs engaging 1000+ students on decentralized platform",
      "Expanded platform for open-source work via Pharos Network and Citrea",
      "Actively working on 10+ blockchain infrastructure projects",
    ]
  },
  {
    title: "DeFi and Blockchain Head",
    organization: "Finance and Economics Club, IIT Guwahati",
    role: "Student Leadership",
    period: "Apr 2024 - Apr 2025",
    location: "Guwahati, India",
    description: "Mentored 100+ students and launched initiatives to accelerate blockchain adoption at IIT Guwahati.",
    highlights: [
      "Mentored 100+ students on 6+ projects with 10+ major blockchain initiatives",
      "Partnered with 10+ leading firms including Aptos and The Graph",
      "Drove impactful initiatives with 1000+ active participants",
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-white/5 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">01 // Experience</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-16">Professional & Leadership</h3>
          
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
                      {exp.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" /> {exp.location}
                        </span>
                      )}
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
