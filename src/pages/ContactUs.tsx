import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, Video, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const offices = [
  {
    country: "Headquarter SWITZERLAND",
    city: "Neuchâtel",
    address: "datametrix AG, Faubourg de l'Hôpital 3, 2000 Neuchâtel",
    phone: "+41 (0)32 511 4575",
    flag: "🇨🇭",
  },
  {
    country: "Sweden",
    city: "Mölndal",
    address: "AstraZeneca BioVenture Hub, Pepparedsleden 1, 431 50 Mölndal",
    phone: "+46 70 016 25 48",
    flag: "🇸🇪",
  },
  {
    country: "Tunisia",
    city: "Tunis",
    address: "«Lake Forum» à la cité les Pins lot 3.1.8 les berges du Lac 2",
    phone: "(+216) 71 267 676",
    flag: "🇹🇳",
  },
  {
    country: "France",
    city: "Mulhouse",
    address: "37 Boulevard Alfred Wallach, 68100, Mulhouse",
    phone: "+33 (0)3 69 198 722",
    flag: "🇫🇷",
  },
];

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact Datametrix AG | Get in Touch"
        description="Contact Datametrix AG in Neuchâtel, Switzerland. Offices in EU, Sweden & North Africa. Get a quote for biostatistics & data services."
        canonical="/contact"
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy pt-[180px] pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/5 blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-solar-orange/5 blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Hero text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-14"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-teal font-semibold mb-4">Get in Touch</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Let's Start a <span className="text-teal">Conversation</span>
            </h1>
            <p className="text-primary-foreground/60 leading-relaxed text-lg">
              Whether you need a service quotation or want to learn more about our capabilities, our team is ready to help.
            </p>
          </motion.div>

          {/* Contact cards row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-4"
          >
            <div className="bg-navy-light/80 backdrop-blur-sm rounded-2xl p-6 border border-teal/10 hover:border-teal/25 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                  <Mail className="text-teal" size={18} />
                </div>
                <div>
                  <p className="text-primary-foreground/40 text-xs uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:info@datametrix.ch" className="text-primary-foreground text-sm font-medium hover:text-teal transition">
                    info@datametrix.ch
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-navy-light/80 backdrop-blur-sm rounded-2xl p-6 border border-teal/10 hover:border-teal/25 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                  <Phone className="text-teal" size={18} />
                </div>
                <div>
                  <p className="text-primary-foreground/40 text-xs uppercase tracking-wider mb-0.5">Call</p>
                  <a href="tel:+41325100822" className="text-primary-foreground text-sm font-medium hover:text-teal transition">
                    +41 (0)32 510 0822
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://calendly.com/datametrixag/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-teal/10 backdrop-blur-sm rounded-2xl p-6 border border-teal/20 hover:bg-teal/15 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal/20 flex items-center justify-center shrink-0">
                  <Calendar className="text-teal" size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-primary-foreground/40 text-xs uppercase tracking-wider mb-0.5">Meeting</p>
                  <p className="text-primary-foreground text-sm font-medium">Book a 30-min Call</p>
                </div>
                <ArrowRight className="text-teal group-hover:translate-x-1 transition-transform" size={18} />
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-navy py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
              Our Offices
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, i) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative bg-navy rounded-2xl border border-teal/10 hover:border-teal/30 transition-all hover:shadow-xl hover:shadow-teal/5 p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{office.flag}</span>
                  <div>
                    <h3 className="font-display text-base font-bold text-primary-foreground leading-tight">
                      {office.country === "Headquarter SWITZERLAND" ? "Switzerland" : office.country}
                    </h3>
                    {office.country === "Headquarter SWITZERLAND" && (
                      <span className="text-[11px] uppercase tracking-wider text-teal font-semibold">Headquarters</span>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-teal mt-0.5 shrink-0" size={15} />
                    <p className="text-sm text-primary-foreground/60 leading-relaxed">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-teal shrink-0" size={15} />
                    <a
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="text-sm text-primary-foreground/60 hover:text-teal transition font-medium"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinar + Book a Call */}
      <section className="section-padding bg-navy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Webinar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-navy-light rounded-2xl p-8 md:p-10 border border-teal/10 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center mb-6">
                <Video className="text-teal" size={24} />
              </div>
              <h2 className="font-display text-2xl font-bold text-primary-foreground mb-4">Webinars</h2>
              <p className="text-sm text-primary-foreground/50 leading-relaxed mb-6 flex-1">
                datametrix offers webinars on different topics to share expertise and knowledge with employees and customers. Subscribe to stay informed about upcoming sessions.
              </p>
              <a
                href="mailto:info@datametrix.ch?subject=Webinar%20Subscription"
                className="inline-flex items-center justify-center gap-2 border border-teal/30 text-teal px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-teal/10 transition group"
              >
                Subscribe to Webinars
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Book a Call */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-navy-light rounded-2xl p-8 md:p-10 border border-teal/10 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center mb-6">
                <Calendar className="text-teal" size={24} />
              </div>
              <h2 className="font-display text-2xl font-bold text-primary-foreground mb-4">Book a Call</h2>
              <p className="text-sm text-primary-foreground/50 leading-relaxed mb-6 flex-1">
                Prefer a direct conversation? View our calendar and schedule a 30-minute call at a time that works best for you.
              </p>
              <a
                href="https://calendly.com/datametrixag/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal text-accent-foreground px-6 py-3.5 rounded-xl font-semibold text-sm hover:brightness-110 transition group"
              >
                Schedule a Meeting
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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