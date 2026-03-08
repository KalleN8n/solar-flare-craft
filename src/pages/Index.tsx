import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import DashboardSection from "@/components/DashboardSection";
import AdvantageSection from "@/components/AdvantageSection";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Datametrix AG",
  url: "https://www.datametrix.ch",
  logo: "https://www.datametrix.ch/favicon.png",
  description: "Swiss life sciences data partner specializing in AI-driven biostatistics, clinical data management, and regulatory-compliant analytics since 2003.",
  foundingDate: "2003",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Faubourg de l'Hôpital 3",
    addressLocality: "Neuchâtel",
    postalCode: "2000",
    addressCountry: "CH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+41-32-510-0822",
    contactType: "customer service",
    email: "info@datametrix.ch",
  },
  sameAs: [
    "https://www.linkedin.com/company/datametrix-ag/",
    "https://www.facebook.com/Datametrix-1157790290953801/",
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Datametrix AG – Scientific Data & AI Clinical Solutions"
        description="Swiss life sciences data partner since 2003. AI-driven biostatistics, clinical data management, RWE analytics, and HEOR for pharma & biotech."
        canonical="/"
        jsonLd={organizationSchema}
      />
      <Navbar />
      <HeroSection />
      <CapabilitiesSection />
      <DashboardSection />
      <AdvantageSection />
      <ServicesSection />
      <ApproachSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
