import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import bgImage from "@assets/generated_images/abstract_technical_network_topology_wireframe_dark_background.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src={bgImage} 
          alt="Technical Wireframe" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-block px-3 py-1 mb-4 border border-accent/30 bg-accent/5 text-accent font-mono text-xs tracking-wider uppercase">
              Systems & Networking Engineer
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight"
          >
            Constructing <span className="text-muted-foreground">reliable</span> distributed systems & <span className="text-accent">intelligent</span> networks.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12"
          >
            Specialized in C/C++, OS Internals, and ML Systems. 
            Building infrastructure that scales, simulating complex environments, and validating with rigorous causal inference.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
             <a href="#projects" className="px-6 py-3 bg-white text-black font-mono text-sm font-bold hover:bg-gray-200 transition-colors">
              VIEW PROJECTS
            </a>
            <div className="flex gap-4 items-center px-6">
              <a href="https://github.com/himanshu040304" target="_blank" className="text-muted-foreground hover:text-white transition-colors"><Github className="w-5 h-5"/></a>
              <a href="https://linkedin.com/in/himanshu-73135b255" target="_blank" className="text-muted-foreground hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
              <a href="mailto:himanshu04mar@gmail.com" className="text-muted-foreground hover:text-white transition-colors"><Mail className="w-5 h-5"/></a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50 animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
