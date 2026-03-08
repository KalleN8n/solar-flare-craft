import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, Video } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const offices = [
  {
    country: "Headquarter SWITZERLAND",
    address: "datametrix AG, Faubourg de l'Hôpital 3, 2000 Neuchâtel, SWITZERLAND",
    phone: "+41 (0)32 511 4575",
  },
  {
    country: "USA",
    address: "datametrix INC, Bear Tavern Road, 830, 08628 West Trenton, New Jersey, USA",
    phone: "+1(812) 345 60 40",
  },
  {
    country: "TUNISIA",
    address: "datametrix Tunisia, «Lake Forum» à la cité les Pins lot 3.1.8 les berges du Lac 2, Tunis, TUNISIA",
    phone: "(+216) 71 267 676",
  },
  {
    country: "MOROCCO",
    address: "datametrix Morocco, 20 Rue Auguelmare Sidi Ali Agdal 3, 10090 Rabat, Morocco",
    phone: "+(212) 537 68 35 25",
  },
  {
    country: "FRANCE",
    address: "datametrix France, 37 Boulevard Alfred Wallach, 68100, Mulhouse, France",
    phone: "+33 (0)3 69 198 722",
  },
  {
    country: "Sweden",
    address: "AstraZeneca BioVenture Hub, Pepparedsleden 1, 431 50 Mölndal, Sweden",
    phone: "+46 70 016 25 48",
  },
];

const ContactUs = () => {
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
            <p className="text-sm uppercase tracking-[0.2em] text-teal font-semibold mb-4">Get in Touch</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-primary-foreground/70 leading-relaxed max-w-3xl">
              To find out more information about our services, or to ask for service quotation, please send us an e-mail to info@datametrix.ch or contact one of our offices on the details below. A member of our team will be happy to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Webinar */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                <Video className="text-teal" size={22} />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">Webinar</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  There's no question webinars have become an essential ingredient in today's business world. You've probably been hearing a lot about webinar marketing and communications for some time now, and surely you've attended a number of webinars yourself. Datametrix is offering webinars on different topics to be close to its employees and customers because we believe in sharing expertise areas and knowledge transfer.
                </p>
                <a
                  href="mailto:info@datametrix.ch?subject=Webinar%20Subscription"
                  className="text-sm text-teal inline-flex items-center gap-1 hover:gap-2 transition-all font-medium"
                >
                  Subscribe to join our next webinar <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-navy">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-primary-foreground mb-10 text-center"
          >
            Our Offices
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-navy-light border border-teal/10"
              >
                <h3 className="font-display text-sm font-semibold text-teal uppercase tracking-wider mb-3">
                  {office.country}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary-foreground/40 mt-0.5 shrink-0" size={14} />
                    <p className="text-xs text-primary-foreground/60 leading-relaxed">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary-foreground/40 shrink-0" size={14} />
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-xs text-primary-foreground/60 hover:text-teal transition">
                      {office.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form / CTA */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Send us a message</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We will get back to you within maximum 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                    <Mail className="text-teal" size={18} />
                  </div>
                  <a href="mailto:info@datametrix.ch" className="text-foreground text-sm hover:text-teal transition font-medium">
                    info@datametrix.ch
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                    <Phone className="text-teal" size={18} />
                  </div>
                  <a href="tel:+41325100822" className="text-foreground text-sm hover:text-teal transition font-medium">
                    +41 (0)32 510 0822
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Prefer jumping on a call?
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                View our calendar and book a call at your preferred time.
              </p>
              <a
                href="https://calendly.com/julienmnd/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition group w-full justify-center"
              >
                Book a Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
