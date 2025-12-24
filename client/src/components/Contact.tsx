import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">06 // Contact</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Let's work together</h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm interested in systems engineering roles, research collaborations, and infrastructure challenges at scale. 
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href="mailto:himanshu04mar@gmail.com" 
              className="inline-flex items-center gap-3 px-8 py-3 bg-accent text-black font-mono text-sm font-bold hover:bg-accent/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get in touch
            </a>
            <a 
              href="https://github.com/himanshu040304" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white font-mono text-sm hover:border-accent hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/himanshu-73135b255" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white font-mono text-sm hover:border-accent hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>

          <div className="text-xs text-muted-foreground font-mono">
            <p>himanshu04mar@gmail.com • +91-6392301593</p>
            <p>IIT Guwahati • B.Tech Mathematics and Computing</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
