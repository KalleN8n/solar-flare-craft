import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const testimonials = [
  {
    quote:
      "I especially appreciate the fact that issues get resolved quickly and smoothly. datametrix has been consistent with the quality and standard of their documentation.",
    source: "Clinical Data Manager, Global Pharmaceutical Company",
  },
  {
    quote:
      "datametrix is a valuable resource to us. Although we had a lot of ad-hoc requests they delivered all of them as expected.",
    source: "Head of Biostatistics, Swiss Biotech",
  },
  {
    quote:
      "I very much appreciate datametrix's positive work attitude. The team promptly gives their contribution. They worked hard during peak periods and overtime when needed.",
    source: "VP Clinical Operations, Large Pharma",
  },
  {
    quote:
      "Contributed in different data analysis projects as well as support to ancillary projects from other groups when needed. The whole team showed great willingness to learn and expand on the new statistical aspects and implement them immediately.",
    source: "Statistical Lead, Global Biopharma",
  },
  {
    quote:
      "What I value the most at Datametrix is their reliability and the fact that they always deliver on time, with high quality standards.",
    source: "Clinical Project Manager, Large Swiss Pharmaceutical Company",
  },
];

const stats = [
  {
    value: "90%+",
    label:
      'of customers claimed they were "very satisfied" or "extremely satisfied" with datametrix services',
  },
  {
    value: "90%+",
    label:
      "of customers said they would consider using Datametrix services again in the future",
  },
  {
    value: "20+",
    label: "years of trusted partnership in life sciences",
  },
];

const CustomerTestimonials = () => {
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
            <p className="text-sm uppercase tracking-[0.2em] text-teal font-semibold mb-4">
              Client Feedback
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Customer Testimonials
            </h1>
            <p className="text-primary-foreground/70 leading-relaxed max-w-3xl">
              Hear directly from the companies and teams we've partnered with.
              Our clients consistently rate us among their most reliable and
              high-quality service providers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border text-center"
              >
                <div className="font-display text-4xl font-bold text-teal mb-3">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-navy">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-primary-foreground mb-10 text-center"
          >
            What Our Customers Say
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-navy-light border border-teal/10"
              >
                <Quote className="text-teal/30 mb-3" size={24} />
                <p className="text-sm text-primary-foreground/80 leading-relaxed italic mb-4">
                  "{t.quote}"
                </p>
                <p className="text-xs text-primary-foreground/50">— {t.source}</p>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Let's talk.</h2>
          <p className="text-muted-foreground mb-8">
            Discover how datametrix can help you achieve your goals.
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomerTestimonials;
