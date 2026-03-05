import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Scientific data visualization" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-navy/70" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 pt-40">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-6">
          Turn your scientific data into{" "}
          <span className="text-teal">powerful information.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-4 max-w-2xl">
          Since 2003, Datametrix has been supporting clinical scientists, healthcare researchers, and life science experts in making better and faster decisions.
        </p>
        <p className="text-base text-primary-foreground/60 leading-relaxed mb-10 max-w-2xl">
          Our unique mix of expertise in data analysis, biostatistics, and clinical data management enables you to connect the dots and answer crucial questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://calendly.com/julienmnd/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal text-accent-foreground px-8 py-4 rounded-lg text-base font-semibold hover:brightness-110 transition group"
          >
            Book a Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:border-teal hover:text-teal transition"
          >
            Explore Services
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
