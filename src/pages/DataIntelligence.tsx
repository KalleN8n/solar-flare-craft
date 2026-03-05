import ServicePage from "@/components/ServicePage";

const DataIntelligence = () => (
  <ServicePage
    title="Data Intelligence"
    subtitle="Trust what the Data Reveals."
    description={[
      "Most of the Real-World Data, particularly big data, doesn't offer a lot of value in its unprocessed state. We help you get powerful insights from this stockpile of data by bringing in our insights and deep experience, and applying the right set of analytical tools.",
      "We help you unleash the secret power of your data and see beyond the obvious conclusions, using either historical data or recently gathered data, or both, by utilizing a variety of statistical & data modelling, datamining and machine learning techniques.",
      "We enable you to make data driven business decisions and to bring added value to your own customers, by applying our agile approach to real-world data analysis and data modelling for you.",
    ]}
    needs={[
      "Data visualization (e.g. to support clinical/medical data review)",
      "Data mining (exploratory analyses on registries)",
      "Big data analysis",
      "RWD collection and analysis, customize RWD project",
      "Predictive modeling using AI technologies",
      "Machine learning methodology to improve data analysis",
      "Text mining for better understanding of customer opinion",
    ]}
    otherServices={[
      { title: "Biostatistics", href: "/services/biostatistics" },
      { title: "Data Management", href: "/services/data-management" },
      { title: "HEOR", href: "/services/heor" },
    ]}
  />
);

export default DataIntelligence;
