import { motion } from "framer-motion";
import { ArrowRight, Users, Globe, Zap, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const FlexibleFSP = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Flexible FSP Model | Datametrix AG"
        description="Datametrix's adaptive FSP model delivers focused resources, multiregional support & accelerated timelines for clinical data management."
        canonical="/flexible-fsp"
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-teal font-semibold mb-4">Our Model</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Get Super Flexible.
            </h1>
            <p className="text-xl text-teal font-medium mb-8">
              Offering you more flexibility than anywhere else, through our agile, value-based model.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Points */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "Focused resources",
                text: "Experts specialized in statistical consultancy, clinical data management, SAS programming, CDISC services and medical writing make up the team at datametrix.",
              },
              {
                icon: Globe,
                title: "Multiregional presence and customer support",
                text: "You can count on the support of a dedicated project manager. We strive for personal contact, using virtual meeting techniques to connect with you, or meet in person where needed and possible. We speak French, Swedish and more.",
              },
              {
                icon: Zap,
                title: "Enhanced productivity",
                text: "Our specialised teams are fully trained on customers' SOPs and processes. They can be operational from day one. All datametrix consultants are experts in their fields and have a proven track record as data analysts in the life science industry.",
              },
              {
                icon: Clock,
                title: "Accelerated recruitment timelines",
                text: "A fully operational team of 3-5 people can be set up for you in only 1-3 months. Only 3-5 months is needed to provide you with a fully operational team of 5+ people.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-teal" size={22} />
                </div>
                <div>
                  <h2 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Needs */}
      <section className="section-padding bg-navy">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">What's your need?</h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              In the past 20+ years, we have worked with all kinds of life science organisations – from global players to start-up biotechs.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              <strong className="text-primary-foreground">We understand your journey</strong>, regardless of the size of your team or company. This means understanding the implications of a growing pipeline, increased size and complexity of your studies, and hence the need to develop internal data standards, high quality processes and procedures. We are committed to partner on these as part as our FSP model.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              We will not only create a trial result report for you, but also work with you to develop internal capabilities, standards and processes. This ensures that you will remain compliant and in control, and be ready and prepared for subsequent steps in the clinical development plan and the growth of your company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/julienmnd/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal text-accent-foreground px-7 py-3.5 rounded-lg font-semibold hover:brightness-110 transition group"
              >
                Book a Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:info@datametrix.ch"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:border-teal hover:text-teal transition"
              >
                Send an Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Data Intelligence", href: "/services/data-intelligence" },
              { title: "Biostatistics", href: "/services/biostatistics" },
              { title: "Data Management", href: "/services/data-management" },
              { title: "HEOR", href: "/services/heor" },
            ].map((s) => (
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

      {/* CTA */}
      <section className="section-padding bg-navy text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Get started with Flexible FSP.</h2>
          <p className="text-primary-foreground/60 mb-8">Tell us about your pipeline and we'll design a model that fits.</p>
          <a
            href="https://calendly.com/julienmnd/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition group"
          >
            Book a Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FlexibleFSP;
