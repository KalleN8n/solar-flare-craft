import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MidPageCTA = () => (
  <section className="section-padding bg-navy text-center">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          Ready to transform your clinical data?
        </h2>
        <p className="text-primary-foreground/60 leading-relaxed mb-8">
          Talk to our senior team and discover how we can accelerate your next project.
        </p>
        <a
          href="https://calendly.com/datametrixag/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-teal text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition group shadow-lg shadow-teal/20"
        >
          Schedule a Consultation
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default MidPageCTA;
