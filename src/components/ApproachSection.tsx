import { motion } from "framer-motion";
import { Settings, Users, Shield } from "lucide-react";

const pillars = [
  {
    icon: Settings,
    title: "A Flexible Approach",
    description:
      "Our flexible FSP model lets you keep control of core processes and critical deliverables, while minimizing the burden of employment for disciplines like biostatistics, programming, and clinical data management.",
  },
  {
    icon: Users,
    title: "Your Needs First",
    description:
      "We develop tailored solutions to your specific needs. A dedicated project manager works with you to define objectives and ensures the solution meets your requirements and those of your stakeholders.",
  },
  {
    icon: Shield,
    title: "A Trusted Expertise",
    description:
      "Since 2003, Datametrix has been a trusted partner in life sciences — working with global biopharmaceutical companies, hospitals, academic groups, and government institutions across Switzerland and beyond.",
  },
];

const ApproachSection = () => (
  <section id="approach" className="section-padding bg-navy">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-teal font-semibold mb-3">Why Datametrix</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
          Built on trust, driven by results
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mx-auto mb-6">
              <p.icon className="text-teal" size={28} />
            </div>
            <h3 className="font-display text-xl font-semibold text-primary-foreground mb-4">{p.title}</h3>
            <p className="text-primary-foreground/60 leading-relaxed text-sm">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ApproachSection;
