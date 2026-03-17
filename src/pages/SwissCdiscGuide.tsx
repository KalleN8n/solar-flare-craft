import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Clock,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  Users,
  Calendar,
  Download,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const FORM_INITIAL = { firstName: "", lastName: "", email: "", company: "", jobTitle: "" };

const SwissCdiscGuide = () => {
  const [form, setForm] = useState(FORM_INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isBusinessEmail = (email: string) => {
    const freeProviders = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "mail.com", "protonmail.com", "icloud.com", "gmx.com", "yandex.com"];
    const domain = email.split("@")[1]?.toLowerCase();
    return domain && !freeProviders.includes(domain);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.firstName || !form.lastName || !form.email || !form.company || !form.jobTitle) {
      setError("Please fill in all fields.");
      return;
    }
    if (!isBusinessEmail(form.email)) {
      setError("Please use your professional business email address.");
      return;
    }

    setSubmitting(true);
    try {
      const subject = encodeURIComponent(`[White Paper Download] ${form.firstName} ${form.lastName} — ${form.company}`);
      const body = encodeURIComponent(
        `New white paper download request:\n\nFirst Name: ${form.firstName}\nLast Name: ${form.lastName}\nEmail: ${form.email}\nCompany: ${form.company}\nJob Title: ${form.jobTitle}\n\nWhite Paper: Swiss CDISC Submission Guide 2026`
      );
      
      // Open mailto to send info
      window.open(`mailto:datametrixag@gmail.com?subject=${subject}&body=${body}`, "_blank");
      
      // Trigger download
      const link = document.createElement("a");
      link.href = "/downloads/swiss-cdisc-submission-guide-2026.pdf";
      link.download = "Swiss-CDISC-Submission-Guide-2026.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById("download-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const LeadForm = ({ id, dark = false }: { id?: string; dark?: boolean }) => (
    <div id={id} className={`rounded-2xl p-8 ${dark ? "bg-navy border border-teal/20" : "bg-card border border-border shadow-lg"}`}>
      {submitted ? (
        <div className="text-center py-8">
          <CheckCircle2 className="mx-auto mb-4 text-teal" size={48} />
          <h3 className={`font-display text-xl font-bold mb-2 ${dark ? "text-primary-foreground" : "text-foreground"}`}>
            Your guide is downloading
          </h3>
          <p className={`text-sm ${dark ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
            Check your downloads folder. If it didn't start,{" "}
            <a href="/downloads/swiss-cdisc-submission-guide-2026.pdf" download className="text-teal underline">
              click here
            </a>.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={`block text-xs font-medium mb-1.5 ${dark ? "text-primary-foreground/70" : "text-foreground"}`}>
                First Name
              </label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal/40"
                placeholder="Jane"
              />
            </div>
            <div>
              <label className={`block text-xs font-medium mb-1.5 ${dark ? "text-primary-foreground/70" : "text-foreground"}`}>
                Last Name
              </label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal/40"
                placeholder="Smith"
              />
            </div>
          </div>
          <div>
            <label className={`block text-xs font-medium mb-1.5 ${dark ? "text-primary-foreground/70" : "text-foreground"}`}>
              Work Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal/40"
              placeholder="jane@pharma.com"
            />
            <p className="text-[10px] text-muted-foreground mt-1">Please use your professional email address</p>
          </div>
          <div>
            <label className={`block text-xs font-medium mb-1.5 ${dark ? "text-primary-foreground/70" : "text-foreground"}`}>
              Company
            </label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal/40"
              placeholder="Acme Pharma AG"
            />
          </div>
          <div>
            <label className={`block text-xs font-medium mb-1.5 ${dark ? "text-primary-foreground/70" : "text-foreground"}`}>
              Job Title
            </label>
            <input
              type="text"
              value={form.jobTitle}
              onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal/40"
              placeholder="Head of Biostatistics"
            />
          </div>

          {error && (
            <p className="text-sm text-destructive flex items-center gap-1.5">
              <AlertTriangle size={14} /> {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-teal text-accent-foreground font-semibold py-3.5 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
          >
            <Download size={18} />
            {submitting ? "Processing..." : "Download the Free Guide"}
          </button>

          <p className={`text-[11px] text-center ${dark ? "text-primary-foreground/40" : "text-muted-foreground"}`}>
            Trusted by biotech and pharma teams preparing regulatory submissions
          </p>
        </form>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Swiss CDISC Submission Guide 2026 | Datametrix AG"
        description="Download the practical CDISC guide for sponsors preparing Swissmedic submissions. Prevent refuse-to-file delays, understand Swiss-specific requirements, and fix CRF-SDTM-ADaM traceability."
        canonical="/insights/swiss-cdisc-guide-2026"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Swiss CDISC Submission Guide 2026",
          description: "A practical CDISC guide for sponsors preparing Swissmedic submissions",
          publisher: { "@type": "Organization", name: "Datametrix AG" },
        }}
      />
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-20 section-padding bg-background relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — Copy */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-teal/10 text-teal px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
                <FileCheck size={14} /> White Paper — Free Download
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] mb-6">
                Avoid Swissmedic <br />
                <span className="text-teal">Refuse‑to‑File</span> in 2026
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                A practical CDISC guide for sponsors preparing Swissmedic submissions — without costly delays.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  "Prevent 3–6 month submission delays",
                  "Understand Swiss-specific requirements (SNCTP, EKOS)",
                  "Fix CRF → SDTM → ADaM traceability gaps",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-teal mt-0.5 shrink-0" size={18} />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Mobile form appears here */}
              <div className="lg:hidden">
                <LeadForm />
              </div>

              {/* Trust indicators */}
              <div className="hidden lg:flex items-center gap-6 mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield size={14} className="text-teal" />
                  <span>CDISC Silver Partner</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Users size={14} className="text-teal" />
                  <span>Swiss-based specialists</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <BookOpen size={14} className="text-teal" />
                  <span>19 pages · 15 min read</span>
                </div>
              </div>
            </motion.div>

            {/* Right — Form (desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden lg:block sticky top-28"
            >
              <LeadForm id="download-form" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="section-padding bg-navy">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs uppercase tracking-[0.2em] text-solar-orange font-semibold mb-4">The Risk</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Why Swissmedic Submissions Fail
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed max-w-3xl mb-12">
              Each year, sponsors face costly Refuse-to-File (RTF) decisions — adding 3 to 6 months of delay and significant expense. The root causes are preventable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <AlertTriangle size={24} />,
                title: "Poor CDISC Traceability",
                desc: "Broken links between CRF annotations, SDTM mappings, and ADaM derivations trigger validation failures and reviewer queries.",
              },
              {
                icon: <Clock size={24} />,
                title: "Late CDISC Engagement",
                desc: "Waiting until after database lock to start CDISC implementation leads to expensive retrofitting and timeline overruns.",
              },
              {
                icon: <FileCheck size={24} />,
                title: "Missing Swiss Metadata",
                desc: "SNCTP identifiers, EKOS references, and multilingual data requirements are unique to Swiss submissions and frequently overlooked.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5"
              >
                <div className="text-solar-orange mb-4">{item.icon}</div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 p-6 rounded-xl bg-solar-orange/10 border border-solar-orange/20 flex items-start gap-4"
          >
            <AlertTriangle className="text-solar-orange shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-sm font-semibold text-solar-orange mb-1">RTF Impact</p>
              <p className="text-sm text-primary-foreground/70">
                A Refuse-to-File decision delays your submission by <strong className="text-primary-foreground">3–6 months</strong> and can cost hundreds of thousands in rework, re-validation, and lost market access time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VISUAL PROOF — Traceability & Timeline */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-4">Visual Overview</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
              The Submission Data Flow
            </h2>
          </motion.div>

          {/* Traceability Flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="font-display text-sm uppercase tracking-wider text-muted-foreground mb-6">End-to-End Traceability</h3>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {["CRF", "SDTM", "ADaM", "TLF", "CSR"].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-3 md:gap-4">
                  <div className="px-6 py-4 rounded-xl bg-navy text-primary-foreground font-display font-bold text-sm md:text-base tracking-wide">
                    {step}
                  </div>
                  {i < arr.length - 1 && <ChevronRight className="text-teal" size={20} />}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Each step must be fully traceable for Swissmedic submission acceptance
            </p>
          </motion.div>

          {/* Timeline Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="p-6 rounded-xl border border-teal/20 bg-teal/5">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="text-teal" size={20} />
                <h4 className="font-display font-semibold text-foreground">Early CDISC Planning</h4>
              </div>
              <div className="text-4xl font-display font-bold text-teal mb-2">13–26 weeks</div>
              <p className="text-sm text-muted-foreground">Integrated approach from protocol design through submission</p>
              <div className="mt-4 h-3 rounded-full bg-teal/20 overflow-hidden">
                <div className="h-full rounded-full bg-teal w-[45%]" />
              </div>
            </div>

            <div className="p-6 rounded-xl border border-solar-orange/20 bg-solar-orange/5">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="text-solar-orange" size={20} />
                <h4 className="font-display font-semibold text-foreground">Late Retrofit</h4>
              </div>
              <div className="text-4xl font-display font-bold text-solar-orange mb-2">25–51 weeks</div>
              <p className="text-sm text-muted-foreground">Retroactive CDISC implementation after database lock</p>
              <div className="mt-4 h-3 rounded-full bg-solar-orange/20 overflow-hidden">
                <div className="h-full rounded-full bg-solar-orange w-[90%]" />
              </div>
            </div>
          </motion.div>

          {/* Swiss-specific layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl bg-card border border-border"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-6">Swiss-Specific Requirements Layer</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { label: "SNCTP", desc: "Swiss National Clinical Trials Portal registration and identifiers" },
                { label: "EKOS", desc: "Ethics Committee Online Submission system integration" },
                { label: "Multilingual Data", desc: "Handling German, French, Italian data elements in submissions" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-teal/10 text-teal font-display font-bold text-sm mb-3">
                    {item.label}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="section-padding bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-4">Inside the Guide</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                What You'll Learn
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                19 pages of actionable insights designed for regulatory affairs directors, biostatistics leads, and clinical operations managers.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <ul className="space-y-4">
                {[
                  "Swissmedic submission expectations and requirements",
                  "CDISC implementation strategy from protocol to filing",
                  "Complete CRF-to-CSR traceability model",
                  "Common RTF triggers and how to prevent them",
                  "When to start CDISC planning for each study phase",
                  "Swiss-specific metadata requirements (SNCTP, EKOS)",
                  "Timeline and cost comparison: early vs. late engagement",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="text-teal" size={14} />
                    </div>
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AUTHORITY */}
      <section className="section-padding bg-navy">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-4">About the Authors</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Swiss Experts in Clinical Data Standardization
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed max-w-3xl mx-auto mb-10">
              Datametrix AG is a Swiss-based consultancy specializing in CDISC data standards for regulatory submissions.
              As a CDISC Silver Partner, our team brings deep expertise in SDTM, ADaM, define.xml, and Swissmedic-specific
              requirements — combining global standards knowledge with Swiss regulatory precision.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { value: "CDISC", label: "Silver Partner" },
                { value: "50+", label: "Submissions supported" },
                { value: "0", label: "RTF decisions on our projects" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-display font-bold text-teal mb-1">{stat.value}</div>
                  <div className="text-xs text-primary-foreground/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECONDARY CTA — Assessment */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 rounded-2xl border border-border bg-card text-center"
          >
            <Calendar className="mx-auto text-teal mb-6" size={40} />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Not sure if your study is submission-ready?
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
              Book a free 30-minute CDISC Readiness Assessment with our Swiss regulatory data specialists. 
              We'll review your current approach and identify potential gaps before they become costly.
            </p>
            <a
              href="https://calendly.com/datametrixag/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-solar-orange text-accent-foreground font-semibold px-8 py-4 rounded-lg hover:brightness-110 transition-all group"
            >
              Book a Free Assessment
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-navy">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Prepare Your Swissmedic Submission with Confidence
            </h2>
            <p className="text-primary-foreground/60 mb-8 max-w-xl mx-auto">
              Download our comprehensive guide and avoid the most common — and most costly — submission mistakes.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-teal text-accent-foreground font-semibold px-10 py-4 rounded-lg hover:brightness-110 transition-all group"
            >
              <Download size={18} />
              Download the Guide
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-t border-teal/20 py-3 px-4 transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="hidden sm:block">
            <p className="text-primary-foreground font-display font-semibold text-sm">Swiss CDISC Submission Guide 2026</p>
            <p className="text-primary-foreground/50 text-xs">Free download · 19 pages</p>
          </div>
          <button
            onClick={scrollToForm}
            className="bg-teal text-accent-foreground font-semibold px-6 py-2.5 rounded-lg hover:brightness-110 transition-all flex items-center gap-2 text-sm"
          >
            <Download size={16} />
            Download Now
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SwissCdiscGuide;
