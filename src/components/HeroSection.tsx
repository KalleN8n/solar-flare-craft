import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Abstract data visualization with flowing network nodes representing life sciences analytics"
        className="w-full h-full object-cover"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-navy/70" />
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(215 50% 10% / 0.6) 0%, transparent 40%, hsl(25 90% 55% / 0.1) 100%)",
            "linear-gradient(135deg, transparent 0%, hsl(215 50% 10% / 0.4) 50%, hsl(30 85% 65% / 0.15) 100%)",
            "linear-gradient(135deg, hsl(215 50% 10% / 0.6) 0%, transparent 40%, hsl(25 90% 55% / 0.1) 100%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 pt-40">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm uppercase tracking-[0.25em] text-teal font-semibold mb-6"
        >
          Life Sciences Data Partner
        </motion.p>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-6">
          Transforming Complex Scientific Data into{" "}
          <span className="text-teal">Actionable Intelligence.</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-4 max-w-2xl">
          Specializing in{" "}
          <Link to="/services/data-intelligence" className="text-teal hover:underline">AI-driven biostatistics</Link>,
          clinical data management, and regulatory-compliant visualizations for the Life Sciences industry.
        </p>

        <p className="text-base text-primary-foreground/50 leading-relaxed mb-10 max-w-2xl">
          Since 2003, datametrix has been the trusted partner for clinical scientists, healthcare researchers, and life science experts worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://calendly.com/julienmnd/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal text-accent-foreground px-8 py-4 rounded-lg text-base font-semibold hover:brightness-110 transition group shadow-lg shadow-teal/20"
          >
            Schedule a Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:border-teal hover:text-teal transition backdrop-blur-sm"
          >
            View Our Capabilities
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-primary-foreground/30" size={28} />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
