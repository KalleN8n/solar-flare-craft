import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Scaling, Coins } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ServiceLink {
  title: string;
  href: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string[];
  needs: string[];
  needsGrouped?: { label: string; items: string[] }[];
  otherServices: ServiceLink[];
}

const benefits = [
  {
    icon: Globe,
    title: "Flexibility & Connectivity",
    text: "With offices in Switzerland, Sweden (at the AstraZeneca BioHub) and North Africa, we connect rapidly through virtual media or in person.",
  },
  {
    icon: Shield,
    title: "Reliability & Expertise",
    text: "Ensuring delivery on time, to expected standards and within budget, with highly qualified experts with extensive experience.",
  },
  {
    icon: Scaling,
    title: "Ability to Adapt to Your Scope",
    text: "Your needs come first. Our large partner network enables us to broaden services including clinical operations, field monitoring and site management.",
  },
  {
    icon: Coins,
    title: "Cost-Effectiveness to Compete",
    text: "Lean management and efficient organization enables cost-effective solutions, helping you manage budget challenges.",
  },
];

const ServicePage = ({
  title,
  subtitle,
  description,
  needs,
  needsGrouped,
  otherServices,
}: ServicePageProps) => {
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
            <p className="text-sm uppercase tracking-[0.2em] text-teal font-semibold mb-4">Services</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {title}
            </h1>
            <p className="text-xl text-teal font-medium mb-8">{subtitle}</p>
            {description.map((p, i) => (
              <p key={i} className="text-primary-foreground/70 leading-relaxed mb-4 max-w-3xl">
                {p}
              </p>
            ))}
            <a
href="https://calendly.com/datametrixag/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal text-accent-foreground px-7 py-3.5 rounded-lg font-semibold hover:brightness-110 transition group mt-4"
            >
              Book a Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Needs */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">What's your need?</h2>
            <p className="text-muted-foreground mb-8">
              We are experienced and able to support you with any of the below requirements.
            </p>

            {needsGrouped ? (
              needsGrouped.map((group) => (
                <div key={group.label} className="mb-8">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">{group.label}</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {group.items.map((need) => (
                      <div
                        key={need}
                        className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-teal/30 transition"
                      >
                        <div className="w-2 h-2 rounded-full bg-teal mt-2 shrink-0" />
                        <span className="text-sm text-foreground">{need}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="grid sm:grid-cols-2 gap-3">
                {needs.map((need) => (
                  <div
                    key={need}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-teal/30 transition"
                  >
                    <div className="w-2 h-2 rounded-full bg-teal mt-2 shrink-0" />
                    <span className="text-sm text-foreground">{need}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-navy">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl font-bold text-primary-foreground">
              Your Benefits When Choosing Datametrix
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                  <b.icon className="text-teal" size={22} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">{b.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FSP */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Our "Flexible FSP" Model
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              To help you save time, enhance productivity and improve cost-effectiveness, we offer all our services via our adaptive, value-based FSP Model with strong benefits:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left">
              {["Focused resources", "Multiregional presence", "Enhanced productivity", "Accelerating timelines"].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                  <div className="w-2 h-2 rounded-full bg-teal shrink-0" />
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">Our Other Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="p-6 rounded-2xl bg-card border border-border hover:border-teal/40 hover:shadow-lg transition-all text-center group"
              >
                <h3 className="font-display text-base font-semibold text-foreground group-hover:text-teal transition">
                  {s.title}
                </h3>
                <span className="text-xs text-muted-foreground mt-2 inline-flex items-center gap-1 group-hover:text-teal transition">
                  Learn more <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feasibility CTA */}
      <section className="section-padding bg-muted/50 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">
            Not sure where to start?
          </h2>
          <p className="text-muted-foreground mb-6">
            Book a free 15-minute feasibility chat to explore how we can support your specific protocol and timeline.
          </p>
          <a
            href="https://calendly.com/julienmnd/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-solar-orange text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition group"
          >
            Schedule a Quick Feasibility Chat
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Let's talk.</h2>
          <p className="text-primary-foreground/60 mb-8">
            We will get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/julienmnd/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition group"
            >
              Book a Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:info@datametrix.ch"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-medium hover:border-teal hover:text-teal transition"
            >
              Send an Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
