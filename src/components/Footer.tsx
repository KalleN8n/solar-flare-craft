import { Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-navy border-t border-teal/10 px-6 py-12 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
        <div>
          <Link to="/">
            <img src={logo} alt="datametrix" className="h-9 mb-4" />
          </Link>
          <p className="text-xs text-primary-foreground/40 leading-relaxed">
            Turning scientific data into powerful information since 2003.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a href="https://www.linkedin.com/company/datametrix-ag/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-teal transition" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.facebook.com/Datametrix-1157790290953801/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 hover:text-teal transition" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-primary-foreground mb-4">Services</h4>
          <div className="flex flex-col gap-2">
            <Link to="/services/data-intelligence" className="text-xs text-primary-foreground/50 hover:text-teal transition">Data Intelligence</Link>
            <Link to="/services/biostatistics" className="text-xs text-primary-foreground/50 hover:text-teal transition">Biostatistics</Link>
            <Link to="/services/data-management" className="text-xs text-primary-foreground/50 hover:text-teal transition">Data Management</Link>
            <Link to="/services/heor" className="text-xs text-primary-foreground/50 hover:text-teal transition">HEOR</Link>
            <Link to="/flexible-fsp" className="text-xs text-primary-foreground/50 hover:text-teal transition">Flexible FSP</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-primary-foreground mb-4">Company</h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-xs text-primary-foreground/50 hover:text-teal transition">About Us</Link>
            <Link to="/team" className="text-xs text-primary-foreground/50 hover:text-teal transition">Our Team</Link>
            <Link to="/why-choose-us" className="text-xs text-primary-foreground/50 hover:text-teal transition">Why Choose Us</Link>
            <Link to="/success-stories" className="text-xs text-primary-foreground/50 hover:text-teal transition">Success Stories</Link>
            <Link to="/news" className="text-xs text-primary-foreground/50 hover:text-teal transition">News</Link>
            <Link to="/events" className="text-xs text-primary-foreground/50 hover:text-teal transition">Events</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-primary-foreground mb-4">Contact</h4>
          <div className="flex flex-col gap-2 text-xs text-primary-foreground/50">
            <p>datametrix AG</p>
            <p>Faubourg de l'Hôpital 3</p>
            <p>2000 Neuchâtel, Switzerland</p>
            <a href="tel:+41325100822" className="hover:text-teal transition">+41 (0)32 510 0822</a>
            <a href="mailto:info@datametrix.ch" className="hover:text-teal transition">info@datametrix.ch</a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link to="/contact" className="text-xs text-primary-foreground/50 hover:text-teal transition">Contact Us</Link>
            <a
              href="https://calendly.com/julienmnd/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary-foreground/50 hover:text-teal transition"
            >
              Book a Call
            </a>
            <a
              href="mailto:info@datametrix.ch?subject=Please%20Subscribe%20Me%20to%20Datametrix%20Newsletter"
              className="text-xs text-primary-foreground/50 hover:text-teal transition"
            >
              Newsletter
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-teal/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-primary-foreground/30">
          © {new Date().getFullYear()} datametrix AG. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link to="/privacy" className="text-xs text-primary-foreground/30 hover:text-teal transition">Privacy Policy</Link>
          <Link to="/imprint" className="text-xs text-primary-foreground/30 hover:text-teal transition">Imprint</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
