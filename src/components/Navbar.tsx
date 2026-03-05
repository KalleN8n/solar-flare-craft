import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Trust", href: "#trust" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-teal/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-tight text-primary-foreground">
            data<span className="text-teal">metrix</span>
          </span>
          <span className="hidden sm:block text-xs text-muted-foreground tracking-widest uppercase">
            turning data into information
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/70 hover:text-teal transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/julienmnd/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal text-accent-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:brightness-110 transition"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-navy overflow-hidden"
          >
            <div className="px-6 pb-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-primary-foreground/70 hover:text-teal transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://calendly.com/julienmnd/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center hover:brightness-110 transition"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
