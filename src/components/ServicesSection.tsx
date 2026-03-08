import { motion } from "framer-motion";
import { BarChart3, FlaskConical, Database, HeartPulse, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: BarChart3,
    title: "Data Intelligence",
    href: "/services/data-intelligence",
    description:
      "Transform raw data into actionable insights with advanced analytics, AI-driven visualization, and reporting solutions tailored to life sciences.",
  },
  {
    icon: FlaskConical,
    title: "Biostatistics",
    href: "/services/biostatistics",
    description:
      "Rigorous statistical analysis for clinical trials, research studies, and regulatory submissions using industry-standard methodologies.",
  },
  {
    icon: Database,
    title: "Data Management",
    href: "/services/data-management",
    description:
      "End-to-end clinical data management including database design, data cleaning, coding, and CDISC-compliant deliverables.",
  },
  {
    icon: HeartPulse,
    title: "HEOR",
    href: "/services/heor",
    description:
      "Health Economics & Outcomes Research to demonstrate the value of treatments through systematic reviews, meta-analyses, and real-world evidence.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-teal font-semibold mb-3">What We Do</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Make better informed decisions
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              to={service.href}
              className="group block bg-card rounded-2xl p-8 border border-border hover:border-teal/40 hover:shadow-xl transition-all duration-300 h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal/20 transition">
                <service.icon className="text-teal" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              <span className="text-xs text-teal font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={12} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
