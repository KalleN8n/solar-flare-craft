import ServicePage from "@/components/ServicePage";
import SEOHead from "@/components/SEOHead";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Health Economics & Outcomes Research",
  provider: { "@type": "Organization", name: "Datametrix AG" },
  description: "Regulatory-grade Real-World Evidence (RWE), Real-World Data (RWD) harmonization, cost-effectiveness analysis, and market access strategy.",
  areaServed: "Worldwide",
  serviceType: "HEOR",
};

const HEOR = () => (
  <>
    <SEOHead
      title="HEOR & Real-World Evidence | Datametrix AG"
      description="Regulatory-grade RWE, RWD harmonization, synthetic control arms & cost-effectiveness analysis. Unlock market access with Datametrix."
      canonical="/services/heor"
      jsonLd={serviceSchema}
    />
    <ServicePage
      title="Health Economics & Outcomes Research"
      subtitle="Unlock your Market Access Potential"
      description={[
        "Having a strong cost-effectiveness model or innovative market access strategy can pay dividends in the competitive therapeutic area.",
        "Our experts in Health Economics and Outcome Research have extensive experience in different health economic methodologies and help you finding the optimal and fastest way to make your innovative products accessible to the patients that need them.",
      ]}
      needs={[
        "Discrete choice experiment",
        "Patient reported outcomes, ePRO",
        "Cost effectiveness analysis",
        "Budget impact analysis",
        "Value-added cost effectiveness analysis",
      ]}
      otherServices={[
        { title: "Data Intelligence", href: "/services/data-intelligence" },
        { title: "Biostatistics", href: "/services/biostatistics" },
        { title: "Data Management", href: "/services/data-management" },
      ]}
    />
  </>
);

export default HEOR;
