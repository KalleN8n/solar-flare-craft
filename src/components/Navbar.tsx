import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  {
    label: "How we help you",
    href: "#services",
    children: [
      { label: "Data Intelligence", href: "/services/data-intelligence" },
      { label: "Biostatistics", href: "/services/biostatistics" },
      { label: "Data Management", href: "/services/data-management" },
      { label: "HEOR", href: "/services/heor" },
      { label: "Flexible FSP", href: "/flexible-fsp" },
    ],
  },
  {
    label: "Who we are",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Why Choose Us", href: "/why-choose-us" },
    ],
  },
  {
    label: "Success Stories",
    href: "/success-stories",
    children: [
      { label: "Successful Projects", href: "/success-stories/successful-projects" },
      { label: "Customer Testimonials", href: "/success-stories/customer-testimonials" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-teal/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="datametrix - turning data into information" className="h-14 md:h-16" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <span className="text-sm font-medium text-primary-foreground/70 hover:text-teal transition-colors cursor-pointer">
                  {link.label}
                </span>
                <AnimatePresence>
                  {openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-navy-light border border-teal/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-5 py-3 text-sm text-primary-foreground/70 hover:text-teal hover:bg-navy/50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-primary-foreground/70 hover:text-teal transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
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
          className="lg:hidden text-primary-foreground"
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
            className="lg:hidden bg-navy overflow-hidden"
          >
            <div className="px-6 pb-6 flex flex-col gap-4">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="flex flex-col gap-2">
                    <span className="text-primary-foreground/50 text-xs uppercase tracking-wider font-semibold">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => setOpen(false)}
                        className="text-primary-foreground/70 hover:text-teal transition-colors font-medium pl-3"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="text-primary-foreground/70 hover:text-teal transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                )
              )}
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
