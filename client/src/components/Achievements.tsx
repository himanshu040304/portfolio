import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/data/portfolio";
import { Trophy, Award } from "lucide-react";

export function Achievements() {
  return (
    <section className="py-24 border-t border-white/5 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-4">05 // Recognition</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-12">Awards & Achievements</h3>
          
          <div className="space-y-4">
            {ACHIEVEMENTS.map((achievement, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex gap-4 md:gap-6 p-4 md:p-6 border border-white/5 hover:border-accent/30 hover:bg-accent/[0.02] transition-all group"
              >
                <div className="flex-shrink-0 pt-1">
                  {idx < 4 ? (
                    <Trophy className="w-5 h-5 md:w-6 md:h-6 text-accent group-hover:text-accent/80" />
                  ) : (
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-white/40 group-hover:text-accent/50" />
                  )}
                </div>
                <p className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors leading-relaxed">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
