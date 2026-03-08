import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
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
              Supporting your Data Needs since 2003
            </h1>
            <div className="space-y-4 text-primary-foreground/70 leading-relaxed max-w-3xl">
              <p>
                Founded in 2003, datametrix is a Swiss data analysis company with a strong heritage in biostatistical analysis and programming, data management and data intelligence. With more than 20 years of experience, we are a well-established alternative to top-tier CROs.
              </p>
              <p>
                We believe in looking beyond the obvious, and take on the challenge of going further than "what's possible". We do not restrict ourselves to "standard approaches", but are constantly exploring new avenues and techniques.
              </p>
              <p>
                We are convinced that high quality services can also be cost-effective. We believe professionalism and expertise are the key for business success and that attention to client's needs is the foundation for long-term partnerships.
              </p>
              <p>
                We appreciate our customers' own expertise and add to it our deep knowledge, strong domain experience and advanced data analytics capabilities. We understand the challenges across the different phases in clinical development. We have extensive knowledge across different therapeutic areas.
              </p>
              <p>
                We are valued by our customers for our reliability and for delivering high quality results on time.
              </p>
              <p>
                Over 90% of our customers are satisfied or very satisfied with our services and will consider using datametrix services again in the future.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Mission",
                text: "Our mission is to close the gap between data and information, turn data into science insights through our advanced analytics and expert knowledge, and enable our customers to go beyond expected business results. Unlock the power of your data with datametrix.",
              },
              {
                icon: Eye,
                title: "Vision",
                text: "To become the go-to data partner for pharmaceutical and biotech companies by providing high quality, efficient and cost-effective services as alternative to top tier CROs. We appreciate our customers own expertise and add to it our deep knowledge, strong domain experience and advanced data analytics capabilities.",
              },
              {
                icon: Heart,
                title: "Values",
                text: "We believe in looking beyond the obvious, and take on the challenge of going further than \"what's possible\". We do not restrict ourselves to \"standard approaches\", but are constantly exploring new avenues and techniques. We are convinced that high quality services can also be cost-effective.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                  <item.icon className="text-teal" size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FSP Model */}
      <section className="section-padding bg-navy">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Our "Flexible FSP" Model
            </h2>
            <p className="text-primary-foreground/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              To help you save time, enhance productivity and improve cost-effectiveness, we offer all our services via our adaptive, value-based FSP Model with strong benefits:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left">
              {["Focused resources", "Multiregional presence and localized customer support", "Enhanced productivity", "Accelerating recruitment timelines"].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-navy-light border border-teal/10">
                  <div className="w-2 h-2 rounded-full bg-teal shrink-0" />
                  <span className="text-sm text-primary-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">Customer Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "I specially appreciate the fact that issues get resolved quickly and smoothly, datametrix has been consistent with the quality and standard of their documentation.",
              "datametrix is a valuable resource to us. Although we had a lot of ad-hoc requests they delivered all of them as expected.",
              "I appreciate very much datametrix very positive work attitude. The team promptly gives their contribution. Worked hard during peak period and overtime when needed.",
              "Contributed in different data analysis projects as well as support to ancillary projects from other groups when needed. The whole team showed great willingness to learn and expand on the new statistical aspects and implement them immediately.",
            ].map((quote, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-card border border-border text-sm text-muted-foreground leading-relaxed italic"
              >
                "{quote}"
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Let's talk.</h2>
          <p className="text-primary-foreground/60 mb-8">We will get back to you within 24 hours.</p>
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

export default AboutUs;
