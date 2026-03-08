import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Imprint = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-navy pt-32 pb-20 section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-teal font-semibold mb-4">Legal</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Imprint
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Company Information</h2>
              <div className="text-muted-foreground leading-relaxed space-y-1">
                <p className="font-semibold text-foreground">datametrix AG</p>
                <p>Faubourg de l'Hôpital 3</p>
                <p>2000 Neuchâtel</p>
                <p>Switzerland</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Contact</h2>
              <div className="text-muted-foreground leading-relaxed space-y-1">
                <p>Phone: <a href="tel:+41325100822" className="text-teal hover:underline">+41 (0)32 510 0822</a></p>
                <p>Email: <a href="mailto:info@datametrix.ch" className="text-teal hover:underline">info@datametrix.ch</a></p>
                <p>Website: <a href="https://www.datametrix.ch" className="text-teal hover:underline" target="_blank" rel="noopener noreferrer">www.datametrix.ch</a></p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Commercial Register</h2>
              <p className="text-muted-foreground leading-relaxed">
                Registered in the Commercial Register of the Canton of Neuchâtel, Switzerland.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Authorised Representative</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ahmed El Rhali, CEO
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The content of this website has been prepared with the utmost care. However, datametrix AG cannot guarantee the accuracy, completeness, or timeliness of the information provided. datametrix AG is not liable for damages arising from the use of this website, unless caused by intentional or grossly negligent conduct.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                This website may contain links to external websites. datametrix AG has no influence over the content of these websites and therefore accepts no liability for them. The respective provider or operator of the linked pages is always responsible for their content.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Copyright</h2>
              <p className="text-muted-foreground leading-relaxed">
                The content and works on this website are subject to Swiss copyright law. Reproduction, editing, distribution, or any form of use beyond the scope of copyright law requires the written consent of datametrix AG.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Imprint;
