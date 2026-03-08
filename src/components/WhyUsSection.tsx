import { motion } from "framer-motion";
import { UserCheck, Zap, Wrench, Settings, Users, Shield } from "lucide-react";

const advantages = [
  {
    icon: UserCheck,
    title: "Senior Expertise",
    description:
      "Direct access to lead data scientists and senior biostatisticians — not junior managers. Every project is led by seasoned professionals with 15+ years of industry experience.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description:
      "Agile workflows and proven templates that cut data processing time by 30%. We mobilize dedicated teams within days, not weeks.",
  },
  {
    icon: Wrench,
    title: "Bespoke Solutions",
    description:
      "Custom-built algorithms and analysis pipelines tailored to your specific protocol — no one-size-fits-all. Every solution is designed for your unique data challenges.",
  },
];

const pillars = [
  {
    icon: Settings,
    title: "A Flexible Approach",
    description:
      "Our flexible FSP model lets you keep control of core processes while minimizing the burden of employment for disciplines like biostatistics and data management.",
  },
  {
    icon: Users,
    title: "Your Needs First",
    description:
      "A dedicated project manager works with you to define objectives and ensures the solution meets your requirements and those of your stakeholders.",
  },
  {
    icon: Shield,
    title: "A Trusted Expertise",
    description:
      "Since 2003, Datametrix has been a trusted partner — working with global biopharmaceutical companies, hospitals, and academic groups across Switzerland and beyond.",
  },
];

const WhyUsSection = () => (
  <section id="why-us" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-teal font-semibold mb-3">
          Why Choose Us
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          The Datametrix Advantage
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          As a focused, senior-led consultancy we deliver what large CROs cannot — speed, direct expertise, and solutions built around your needs.
        </p>
      </motion.div>

      {/* Advantage cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {advantages.map((adv, i) => (
          <motion.div
            key={adv.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative bg-background rounded-2xl p-10 border border-border hover:border-teal/40 transition-all duration-300 group"
          >
            <div className="absolute top-0 left-8 right-8 h-[3px] rounded-b-full bg-teal/0 group-hover:bg-teal transition-all duration-300" />
            <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal/20 transition">
              <adv.icon className="text-teal" size={28} />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{adv.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{adv.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Pillars row */}
      <div className="bg-navy rounded-2xl p-8 md:p-12">
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
              <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center mx-auto mb-5">
                <p.icon className="text-teal" size={26} />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-foreground mb-3">{p.title}</h3>
              <p className="text-primary-foreground/60 leading-relaxed text-sm">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyUsSection;
