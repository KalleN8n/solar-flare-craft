import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "90%", label: "Client Satisfaction" },
  { value: "90%+", label: "Would Use Again" },
  { value: "24h", label: "Response Time" },
];

const StatsSection = () => (
  <section id="trust" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-teal font-semibold mb-3">Our Track Record</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Numbers that speak for themselves
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center p-8 rounded-2xl bg-card border border-border"
          >
            <div className="font-display text-4xl md:text-5xl font-bold text-teal mb-2">{stat.value}</div>
            <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 bg-navy-light rounded-2xl p-8 md:p-12"
      >
        <blockquote className="text-lg md:text-xl text-primary-foreground/80 italic text-center leading-relaxed max-w-3xl mx-auto">
          "What I value the most at Datametrix is their reliability and the fact that they always deliver on time, with high quality standards."
        </blockquote>
        <p className="text-teal text-center mt-4 font-medium text-sm">
          — Clinical Project Manager, Large Swiss Pharmaceutical Company
        </p>
      </motion.div>
    </div>
  </section>
);

export default StatsSection;
