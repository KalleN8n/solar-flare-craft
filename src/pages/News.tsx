import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const newsItems = [
  {
    title: "Datametrix partners with iHealth Group",
    excerpt: "iHealth Group and Datametrix launch partnership serving healthcare researchers in Brazil as well as internationally, with Real World Data Analytics capabilities.",
    description: "Together, iHealth & datametrix are well positioned as the \"go-to partners\" for Medical Affairs, Healthcare Market Access and Clinical Development to deliver real-world data/real world evidence projects.",
    date: "July 1st, 2021",
    logo: "iHealth",
    link: "https://datametrix.ch/wp-content/uploads/2021/09/iHealth-Datametrix-partnership-2021.pdf",
    linkText: "Read The Full Press Release",
    linkType: "pdf"
  },
  {
    title: "Datametrix joins BioRN Science & Industry Cluster",
    excerpt: "Datametrix is now part of BioRN, and thus reinforce our presence among major pharma players and life-science SME's alike, in a strong biotech hub in Germany.",
    description: "BioRN is the science and industry cluster of the Rhine-Main-Neckar region around Heidelberg, one of Germany's strongest biotech hubs. Datametrix joined the BioRN Cluster, and will be helping life science researchers in the region turning data into information. With our strong heritage in biostatistical analysis and programming, data management and data intelligence we will be helping the many companies in the BioRN Cluster close the gap between data and information.",
    date: "June 16, 2021",
    logo: "BioRN",
    link: "https://www.biorn.org/post/new-member-welcome-in-our-cluster-to-datametrix",
    linkText: "Learn more about BioRN",
    linkType: "external"
  },
  {
    title: "Poster: Can real world data support drug development with better trial design and real-world evidence?",
    excerpt: "Our work with our partner Clinerion uncovers how use of statistical analytics methodologies on electronic health records can build synthetic control arms to supplement clinical trial data for better clinical and regulatory decisions.",
    description: "The objective is to demonstrate that analysis of EMR can be used effectively to emulate patient and response patterns reflecting the results observed in randomized controlled trials (RCT).",
    date: "June 15th, 2021",
    logo: "Clinerion",
    link: "https://datametrix.ch/index.php/multiple-data-sources-poster",
    linkText: "Download Full Poster (Free)",
    linkType: "download"
  },
];

const dataNeeds = [
  "Data visualization (e.g. to support clinical/medical data review)",
  "Data mining (exploratory analyses in particular on registries)",
  "Big data analysis",
  "RWD collection and analysis, customize RWD project",
  "Predictive modeling using AI technologies",
  "Machine learning methodology to improve data analysis",
  "Text mining for better understanding of customer opinion",
];

const News = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-teal font-semibold mb-4">Stay Updated</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Latest News
            </h1>
            <p className="text-primary-foreground/70 leading-relaxed max-w-3xl">
              Stay informed about our latest developments, partnerships, and industry insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Items */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {newsItems.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-teal/30 transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-muted rounded-xl flex items-center justify-center">
                    <span className="text-xs font-bold text-muted-foreground text-center px-2">{item.logo}</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-muted-foreground">Publication date: {item.date}</span>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-foreground/80 mb-3">{item.excerpt}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-teal inline-flex items-center gap-2 hover:underline"
                    >
                      {item.linkType === "pdf" && <FileText size={14} />}
                      {item.linkType === "external" && <ExternalLink size={14} />}
                      {item.linkType === "download" && <FileText size={14} />}
                      {item.linkText}
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Your Data Needs */}
      <section className="section-padding bg-navy">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-2">
              Supporting your Data Needs since 2003...
            </h2>
            <h3 className="font-display text-2xl font-semibold text-teal mb-8">
              ...What are your needs?
            </h3>
            <p className="text-primary-foreground/70 mb-6">
              We are experienced and able to support you with any of the below requirements.
            </p>
            <ul className="space-y-3 mb-8">
              {dataNeeds.map((need, i) => (
                <li key={i} className="flex items-start gap-3 text-primary-foreground/80">
                  <span className="text-teal mt-1">•</span>
                  <span>{need}</span>
                </li>
              ))}
            </ul>
            <p className="text-primary-foreground/60 text-sm italic mb-6">
              Your need is not listed? <a href="/contact" className="text-teal hover:underline">Contact us</a> to see if we can help or recommend one of our partners.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://calendly.com/julienmnd/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition group"
              >
                Book a Call
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:info@datametrix.ch"
                className="inline-flex items-center gap-2 border border-teal text-teal px-6 py-3 rounded-lg font-semibold hover:bg-teal/10 transition"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-background text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Read inspiring stories.</h2>
          <p className="text-muted-foreground mb-8">
            To receive notifications about our latest developments and similar stories and challenges to yours, subscribe to our Datametrix Monthly Recaps.
          </p>
          <a
            href="mailto:info@datametrix.ch?subject=Please%20Subscribe%20Me%20to%20Datametrix%20Newsletter&body=I%20would%20like%20to%20receive%20useful%20insights%20about%20Data%20challenges%20in%20life%20science%20companies.%20Kind%20regards,"
            className="inline-flex items-center gap-2 bg-teal text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition group"
          >
            Yes, add me in
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
