import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Events = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Events & Conferences | Datametrix AG"
        description="Meet the Datametrix AG team at key life sciences events and conferences. Discover how we support clinical data needs."
        canonical="/events"
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
            <p className="text-sm uppercase tracking-[0.2em] text-teal font-semibold mb-4">Meet Us</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Events
            </h1>
            <p className="text-primary-foreground/70 leading-relaxed max-w-3xl">
              We attend key industry events and conferences throughout the year. Come meet our team and discover how we can support your data needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-6 pt-8 pb-20 md:px-12 lg:px-24 lg:pt-10 lg:pb-28 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-10">Upcoming Events</h2>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex flex-col items-center justify-center bg-teal/10 rounded-xl px-5 py-4 shrink-0">
                  <span className="text-teal font-display text-sm font-semibold uppercase">May</span>
                  <span className="text-teal font-display text-3xl font-bold leading-tight">4–5</span>
                  <span className="text-teal/70 font-display text-sm font-medium">2026</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Swiss Biotech Day 2026</h3>
                  <div className="flex items-center gap-1.5 mb-3">
                    <MapPin className="text-muted-foreground" size={14} />
                    <span className="text-sm text-muted-foreground">Congress Center Basel, Switzerland</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                    Meet the Datametrix team at Swiss Biotech Day — a premier global biotechnology conference bringing together 3,000+ life sciences professionals to network, exchange ideas and explore advances in data management, AI and R&D.
                  </p>
                  <a
                    href="https://swissbiotechday.ch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-teal text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:brightness-110 transition group"
                  >
                    Learn More
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-10">Past Events</h2>
          <div className="space-y-4">
            {[
              { title: "DIA Annual Meeting", location: "Various Locations", year: "2025" },
              { title: "PHUSE EU Connect", location: "Europe", year: "2025" },
              { title: "SCOPE Summit", location: "USA", year: "2025" },
            ].map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-center gap-6 p-5 rounded-xl bg-navy-light border border-teal/10"
              >
                <div className="text-teal font-display font-bold text-lg w-16 text-center shrink-0">
                  {event.year}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-base font-semibold text-primary-foreground">{event.title}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="text-primary-foreground/40" size={12} />
                    <span className="text-xs text-primary-foreground/50">{event.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Want to meet us?</h2>
          <p className="text-muted-foreground mb-8">Book a call and let's discuss your data challenges.</p>
          <a
            href="https://calendly.com/datametrixag/30min"
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

export default Events;
