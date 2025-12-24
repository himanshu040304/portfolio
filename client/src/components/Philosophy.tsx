import { motion } from "framer-motion";
import { PHILOSOPHY } from "@/data/portfolio";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 border-t border-white/5 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">01 // Philosophy</h2>
            <h3 className="text-3xl font-bold mb-6">Engineering Principles</h3>
            <p className="text-muted-foreground leading-relaxed">
              Software engineering is decision making under constraints. My approach is grounded in rigorous verification and understanding the layers beneath the abstraction.
            </p>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PHILOSOPHY.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <h4 className="text-lg font-bold font-mono mb-3 text-white/90">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
