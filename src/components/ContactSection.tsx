import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-navy">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-teal font-semibold mb-3">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Let's talk.
          </h2>
          <p className="text-primary-foreground/60 leading-relaxed mb-10">
            Ask us any question. We will get back to you within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                <MapPin className="text-teal" size={18} />
              </div>
              <div>
                <p className="text-primary-foreground text-sm font-medium">Faubourg de l'Hôpital 3</p>
                <p className="text-primary-foreground/50 text-sm">2000 Neuchâtel, Switzerland</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                <Phone className="text-teal" size={18} />
              </div>
              <a href="tel:+41325100822" className="text-primary-foreground text-sm hover:text-teal transition">
                +41 (0)32 510 0822
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                <Mail className="text-teal" size={18} />
              </div>
              <a href="mailto:info@datametrix.ch" className="text-primary-foreground text-sm hover:text-teal transition">
                info@datametrix.ch
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <div className="bg-navy-light rounded-2xl p-8 md:p-10 border border-teal/10">
            <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
              Prefer jumping on a call?
            </h3>
            <p className="text-primary-foreground/60 text-sm mb-8">
              View our calendar and book a call at your preferred time.
            </p>
            <a
              href="https://calendly.com/datametrixag/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition group w-full justify-center"
            >
              Book a Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-8 bg-navy-light rounded-2xl p-8 md:p-10 border border-teal/10">
            <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
              Stay informed
            </h3>
            <p className="text-primary-foreground/60 text-sm mb-6">
              Subscribe to our monthly recaps for inspiring stories and insights.
            </p>
            <a
              href="mailto:info@datametrix.ch?subject=Please%20Subscribe%20Me%20to%20Datametrix%20Newsletter"
              className="inline-flex items-center gap-2 border border-teal/40 text-teal px-6 py-3 rounded-lg font-medium text-sm hover:bg-teal/10 transition w-full justify-center"
            >
              Subscribe to Newsletter
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
