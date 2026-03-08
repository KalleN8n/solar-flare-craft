import ServicePage from "@/components/ServicePage";
import SEOHead from "@/components/SEOHead";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Biostatistics",
  provider: { "@type": "Organization", name: "Datametrix AG" },
  description: "Expert biostatistical analysis, SAS programming, study design, and regulatory submission support for clinical trials.",
  areaServed: "Worldwide",
  serviceType: "Biostatistics",
};

const Biostatistics = () => (
  <>
    <SEOHead
      title="Biostatistics Services | Datametrix AG"
      description="Expert biostatistical analysis for clinical trials — study design, SAS programming, interim analysis & regulatory submissions. Swiss quality."
      canonical="/services/biostatistics"
      jsonLd={serviceSchema}
    />
    <ServicePage
      title="Biostatistics"
      subtitle="We offer you a different way forward."
      description={[
        "Biostatistics in clinical trials isn't just a necessity; choosing the right statistical approach is crucial as it can determine the success or failure of your clinical trial. At Datametrix, we adapt our offer to your clinical and business needs.",
        "We use our comprehensive approach to help you achieve beyond your expectations. Our biostatisticians apply their deep knowledge to help you navigate the complexities of your clinical trials with speed and flexibility.",
      ]}
      needs={[
        "Study Design and Sample Size Estimation",
        "Statistical analysis plans",
        "Advanced SAS Programming",
        "Responsive, Interactive Statistical Consulting on Demand",
        "Statistical reports",
        "Interim Analysis planning",
        "Statistical programming (SAS® and/or R): Table, Listing and Figures development",
        "Preparation of submission documents (ISS/SCS, ISE/SCE, RMP)",
      ]}
      otherServices={[
        { title: "Data Intelligence", href: "/services/data-intelligence" },
        { title: "Data Management", href: "/services/data-management" },
        { title: "HEOR", href: "/services/heor" },
      ]}
    />
  </>
);

export default Biostatistics;
