import { motion } from "framer-motion";
import { ArrowRight, MapPin, Shield, Scaling, Coins } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reasons = [
  {
    icon: MapPin,
    title: "Proximity to Collaborate",
    text: "With offices in Switzerland, USA, European Union, and North Africa, datametrix has means to ensure most effective client support.",
  },
  {
    icon: Shield,
    title: "Reliability & Expertise to Deliver",
    text: "A unique set of expertise and experience ensures ability to deliver the project on time and on budget.",
  },
  {
    icon: Scaling,
    title: "Flexibility to Adapt",
    text: "We have demonstrated the ability to adapt our proposals, team organisation, and even team location to customer needs.",
  },
  {
    icon: Coins,
    title: "Cost-Effectiveness to Compete",
    text: "Our rationalized management and lean organization allow us to develop cost-effective solutions and overcome your budget challenges.",
  },
];

const services = [
  {
    title: "Data Intelligence",
    href: "/services/data-intelligence",
    text: "Most of the Real-World Data, particularly big data, doesn't offer a lot of value in its unprocessed state. datametrix helps you get powerful insights from this stockpile of data by applying the right set of analytical tools merged with deep expertise and human insight.",
  },
  {
    title: "Biostatistical Analysis",
    href: "/services/biostatistics",
    text: "Biostatistics in clinical trials isn't just a necessity. Using the right approach is a path to success of your clinical trial. At datametrix, we adapt our offer to your clinical and business needs.",
  },
  {
    title: "Data Management",
    href: "/services/data-management",
    text: "High-quality, well-organized, and intelligently collected data are prerequisites to rapid and reliable hypothesis testing and deriving the most information from any sized subject dataset.",
  },
  {
    title: "HEOR",
    href: "/services/heor",
    text: "In the competitive world of pharmaceutical industry having a strong cost-effectiveness model or innovative market access strategy can pay dividends. Our HEOR experts have extensive experience in different health economic methodologies.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-teal font-semibold mb-4">Who We Are</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Why Choose Datametrix?
            </h1>
            <p className="text-xl text-teal font-medium mb-4">We offer you a different way forward!</p>
            <p className="text-primary-foreground/70 leading-relaxed max-w-3xl">
              We do not restrict ourselves to the same tools as every other provider. We know how to shape our services to your needs. We have deep domain knowledge and expertise, confirmed by consistently high customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reasons */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                  <r.icon className="text-teal" size={22} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section-padding bg-navy">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-primary-foreground mb-10 text-center"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  to={s.href}
                  className="block p-8 rounded-2xl bg-navy-light border border-teal/10 hover:border-teal/30 transition-all group h-full"
                >
                  <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3 group-hover:text-teal transition">
                    {s.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed mb-4">{s.text}</p>
                  <span className="text-xs text-teal inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={12} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FSP */}
      <section className="section-padding bg-background text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Our Adaptive FSP Model
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              To help our customers save time, enhance productivity and improve cost-effectiveness we also offer all our analytical services via datametrix adaptive, value-based FSP model.
            </p>
            <a
              href="https://calendly.com/julienmnd/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition group"
            >
              Book a Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;
