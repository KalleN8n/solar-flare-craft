import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Privacy Policy | Datametrix AG"
        description="Learn how Datametrix AG collects, uses, and protects your personal data in compliance with GDPR and Swiss data protection law."
        canonical="/privacy"
      />
      <Navbar />

      <section className="bg-navy pt-48 pb-20 section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-teal font-semibold mb-4">Legal</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-primary-foreground/70 leading-relaxed max-w-3xl">
              Your privacy is important to us. This policy explains how datametrix AG collects, uses, and protects your personal data.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto prose prose-sm">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Controller</h2>
              <p className="text-muted-foreground leading-relaxed">
                The controller responsible for data processing on this website is:<br />
                datametrix AG<br />
                Faubourg de l'Hôpital 3<br />
                2000 Neuchâtel, Switzerland<br />
                Email: info@datametrix.ch<br />
                Phone: +41 (0)32 510 0822
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Data We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">When you visit our website, we may collect the following information:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
                <li>Technical data (IP address, browser type, operating system, access times)</li>
                <li>Contact information you voluntarily provide (name, email address, phone number)</li>
                <li>Communication data when you contact us via email or phone</li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Purpose of Processing</h2>
              <p className="text-muted-foreground leading-relaxed">We process your personal data for the following purposes:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
                <li>Providing and maintaining our website</li>
                <li>Responding to your enquiries and requests</li>
                <li>Sending newsletters (only with your explicit consent)</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Legal Basis</h2>
              <p className="text-muted-foreground leading-relaxed">
                We process your data based on: your consent (Art. 6(1)(a) GDPR / Art. 31 nDSG), the performance of a contract (Art. 6(1)(b) GDPR / Art. 31 nDSG), or our legitimate interests (Art. 6(1)(f) GDPR / Art. 31 nDSG) in operating and improving our services.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal data. We may share data with trusted service providers who assist us in operating our website, provided they agree to keep your information confidential. We may also disclose data when required by law.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, rectify, or delete your personal data. You may also object to processing or request data portability. To exercise these rights, please contact us at info@datametrix.ch.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. The latest version will always be available on this page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
