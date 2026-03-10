import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const projects = [
  {
    title: "Global Phase III Clinical Trial Support",
    client: "Large Global Pharmaceutical Company",
    highlight: "2 Weeks Ahead of Schedule",
    description:
      "Provided end-to-end biostatistics and data management support for a multi-center Phase III clinical trial across 15 countries, delivering all statistical outputs on time and within budget.",
    outcomes: [
      "Statistical analysis completed 2 weeks ahead of schedule",
      "Zero major findings during FDA audit",
      "Seamless collaboration across 15 countries",
    ],
  },
  {
    title: "Real-World Evidence Analytics Platform",
    client: "Swiss Biotech Company",
    highlight: "60% Faster Data Processing",
    description:
      "Designed and implemented a comprehensive real-world evidence analytics platform, enabling the client to leverage large healthcare datasets for post-market surveillance and HEOR studies.",
    outcomes: [
      "Reduced data processing time by 60%",
      "Enabled real-time safety signal detection",
      "Supported 3 successful HTA submissions",
    ],
  },
  {
    title: "Flexible FSP Model for Clinical Data Management",
    client: "Mid-Size Biopharma",
    highlight: "30% Cost Reduction",
    description:
      "Deployed a dedicated FSP team of data managers and programmers that scaled flexibly with the client's pipeline, covering 12 concurrent studies across oncology and immunology.",
    outcomes: [
      "12 concurrent studies managed simultaneously",
      "30% cost reduction vs. traditional outsourcing",
      "98% staff retention over 3 years",
    ],
  },
  {
    title: "HEOR & Market Access Support",
    client: "Global Biopharma",
    highlight: "5 EU Markets Approved",
    description:
      "Conducted systematic literature reviews, meta-analyses, and budget impact models to support market access submissions in multiple European markets.",
    outcomes: [
      "Successful reimbursement in 5 EU markets",
      "Comprehensive evidence dossiers delivered on time",
      "Ongoing partnership for lifecycle management",
    ],
  },
];

const stats = [
  { value: "60%", label: "Average reduction in data processing time" },
  { value: "30%", label: "Cost savings vs. traditional outsourcing" },
  { value: "98%", label: "Staff retention rate across FSP engagements" },
  { value: "0", label: "Major audit findings across 500+ studies" },
];

const SuccessfulProjects = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Successful Projects | Datametrix AG"
        description="60% faster processing, 30% lower costs, zero audit findings. Explore proven clinical trial and data management results from Datametrix AG."
        canonical="/success-stories/successful-projects"
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-teal font-semibold mb-4">
              Proven Results
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              60% Faster Processing. 30% Lower Costs. Zero Audit Findings.
            </h1>
            <p className="text-primary-foreground/70 leading-relaxed max-w-3xl">
              Real outcomes from real partnerships — see how datametrix delivers
              measurable efficiency gains across clinical trials, data management,
              and market access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="font-display text-3xl font-bold text-teal mb-2">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-navy">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-primary-foreground mb-10 text-center"
          >
            How We Delivered Results
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-navy-light border border-teal/10"
              >
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="text-teal" size={16} />
                  <span className="text-sm font-bold text-teal">{project.highlight}</span>
                </div>
                <p className="text-xs text-primary-foreground/50 uppercase tracking-wider mb-2">
                  {project.client}
                </p>
                <h3 className="font-display text-lg font-bold text-primary-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="space-y-2">
                  {project.outcomes.map((outcome, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle className="text-teal shrink-0 mt-0.5" size={14} />
                      <span className="text-xs text-primary-foreground/60">{outcome}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Ready to achieve similar results?
          </h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how datametrix can deliver measurable impact for your next project.
          </p>
          <a
            href="https://calendly.com/datametrixag/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:brightness-110 transition group"
          >
            Book a Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessfulProjects;
