import ServicePage from "@/components/ServicePage";

const DataManagement = () => (
  <ServicePage
    title="Data Management"
    subtitle="Organized and High Quality Data: Go with Datametrix"
    description={[
      "High-quality, well-organized, and intelligently collected data are prerequisites to rapid and reliable hypothesis testing and deriving the most information from any sized subject dataset.",
      "Datametrix provides full data management services including our fast and easy to use EDC system to streamline data collection and monitoring process. In addition, we are specialized in online collaborative platforms open to healthcare professionals sharing a common scientific interest.",
      "We have gained a strong reputation with investigators and medical sites in the performance of Real World Registries. Our experience and unique combination of skills enables our team of Data Experts to rapidly deliver on Data Management projects.",
    ]}
    needs={[]}
    needsGrouped={[
      {
        label: "General Data Management Services",
        items: [
          "CRF-Design (e-CRF and p-CRF)",
          "Design and database implementation",
          "ePro/eDiary systems",
          "Data Validation and Query Management",
          "Clinical Programming",
          "Electronic Data Integration and Transfer",
          "Data Management Plan and Data Validation Plan preparation",
          "Live database migrations",
          "Data conversion and mapping",
          "Data Management and systems Audit",
        ],
      },
      {
        label: "CDISC Services",
        items: [
          "SDTM annotated CRF, metadata, PDF, XML",
          "Creation and documentation related to ADaM",
          "Mapping from legacy to CDISC standards for ISS/ISE reporting",
          "Creation of documentation for integrated databases",
          "Statistical programming using ADaM datasets",
        ],
      },
    ]}
    otherServices={[
      { title: "Data Intelligence", href: "/services/data-intelligence" },
      { title: "Biostatistics", href: "/services/biostatistics" },
      { title: "HEOR", href: "/services/heor" },
    ]}
  />
);

export default DataManagement;
