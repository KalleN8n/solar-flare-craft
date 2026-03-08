import { motion } from "framer-motion";
import { BrainCircuit, FileCheck, Globe, TrendingUp, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Leverage advanced algorithms for pattern recognition, predictive modeling, and automated data quality checks.",
  },
  {
    icon: FileCheck,
    title: "CDISC/SDTM Standards",
    description: "End-to-end CDISC compliance including SDTM, ADaM, and define.xml for seamless regulatory submissions.",
  },
  {
    icon: Globe,
    title: "Real-World Evidence",
    description: "Transform real-world data from EHRs, claims, and registries into robust evidence supporting market access.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast trial outcomes, optimize patient recruitment, and identify signals earlier with statistical modeling.",
  },
];

const CapabilitiesSection = () => (
  <section id="capabilities" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-teal font-semibold mb-3">
          Technology & Trust
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Our Capabilities
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Combining deep domain expertise with modern technology to deliver compliant, high-quality outputs.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background rounded-2xl p-8 border border-border hover:border-teal/40 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal/20 transition">
              <cap.icon className="text-teal" size={28} />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">{cap.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Compliance Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-navy rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center gap-4 md:gap-6"
      >
        <div className="flex items-center gap-3 shrink-0">
          <ShieldCheck className="text-teal" size={28} />
          <span className="font-display text-lg font-semibold text-primary-foreground">
            Regulatory Compliance
          </span>
        </div>
        <div className="h-px md:h-8 md:w-px w-full bg-primary-foreground/20" />
        <p className="text-primary-foreground/70 text-sm text-center md:text-left">
          Operating under <span className="text-teal font-medium">ICH-GCP</span>,{" "}
          <span className="text-teal font-medium">FDA</span>, and{" "}
          <span className="text-teal font-medium">EMA</span> standards — ensuring every deliverable meets the highest regulatory requirements.
        </p>
      </motion.div>
    </div>
  </section>
);

export default CapabilitiesSection;
