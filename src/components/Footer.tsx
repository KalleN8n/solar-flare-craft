import { Linkedin, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy border-t border-teal/10 px-6 py-10 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <span className="font-display text-xl font-bold text-primary-foreground">
          data<span className="text-teal">metrix</span>
        </span>
        <span className="text-xs text-muted-foreground">AG</span>
      </div>

      <p className="text-xs text-primary-foreground/40 text-center">
        © {new Date().getFullYear()} datametrix AG. All rights reserved. Neuchâtel, Switzerland.
      </p>

      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/company/datametrix-ag/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-foreground/40 hover:text-teal transition"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://www.facebook.com/Datametrix-1157790290953801/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-foreground/40 hover:text-teal transition"
          aria-label="Facebook"
        >
          <Facebook size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
