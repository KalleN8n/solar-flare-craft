import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
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
  Zap,
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
  const formRef = useRef<HTMLDivElement>(null);
  const bottomFormRef = useRef<HTMLDivElement>(null);

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
      window.open(`mailto:datametrixag@gmail.com?subject=${subject}&body=${body}`, "_blank");

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
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const inputCls = "w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40 transition-shadow";

  /* Reusable form component */
  const LeadForm = ({ id, containerRef, variant = "light" }: { id?: string; containerRef?: React.Ref<HTMLDivElement>; variant?: "light" | "dark" }) => {
    const isDark = variant === "dark";
    return (
      <div
        ref={containerRef}
        id={id}
        className={`rounded-2xl p-6 ${isDark ? "bg-primary-foreground/5 border border-primary-foreground/10" : "bg-card border border-border shadow-xl"}`}
      >
        {submitted ? (
          <div className="text-center py-6">
            <CheckCircle2 className="mx-auto mb-3 text-teal" size={44} />
            <h3 className={`font-display text-lg font-bold mb-2 ${isDark ? "text-primary-foreground" : "text-foreground"}`}>Your guide is downloading</h3>
            <p className={`text-sm ${isDark ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
              Check your downloads folder. If it didn't start,{" "}
              <a href="/downloads/swiss-cdisc-submission-guide-2026.pdf" download className="text-teal underline">click here</a>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <p className={`font-display font-semibold text-sm mb-1 ${isDark ? "text-primary-foreground" : "text-foreground"}`}>Download the Free Guide</p>
            <div className="grid grid-cols-2 gap-2.5">
              <input type="text" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className={inputCls} placeholder="First Name" />
              <input type="text" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className={inputCls} placeholder="Last Name" />
            </div>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="Work Email (e.g. jane@pharma.com)" />
            <div className="grid grid-cols-2 gap-2.5">
              <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputCls} placeholder="Company" />
              <input type="text" value={form.jobTitle} onChange={(e) => setForm({ ...form, jobTitle: e.target.value })} className={inputCls} placeholder="Job Title" />
            </div>
            <p className={`text-[10px] ${isDark ? "text-primary-foreground/40" : "text-muted-foreground"}`}>Please use your professional email address</p>

            {error && (
              <p className="text-xs text-destructive flex items-center gap-1.5">
                <AlertTriangle size={12} /> {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-teal text-accent-foreground font-semibold py-3 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-60 text-sm"
            >
              <Download size={16} />
              {submitting ? "Processing..." : "Download the Free Guide"}
            </button>
            <p className={`text-[10px] text-center ${isDark ? "text-primary-foreground/40" : "text-muted-foreground"}`}>
              Trusted by biotech & pharma teams preparing regulatory submissions
            </p>
          </form>
        )}
      </div>
    );
  };

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

      {/* ─── HERO ─── */}
      <section className="pt-32 pb-14 px-6 md:px-12 lg:px-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-start">
            {/* Left — Copy */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 bg-teal/15 text-teal px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide uppercase mb-5">
                <FileCheck size={13} /> White Paper — Free Download
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary-foreground leading-[1.15] mb-5">
                Avoid Swissmedic{" "}
                <span className="text-teal">Refuse‑to‑File</span> in 2026
              </h1>

              <p className="text-base text-primary-foreground/70 leading-relaxed mb-6 max-w-lg">
                A practical CDISC guide for sponsors preparing Swissmedic submissions — without costly delays.
              </p>

              <ul className="space-y-2.5 mb-6">
                {[
                  "Prevent 3–6 month submission delays",
                  "Understand Swiss-specific requirements (SNCTP, EKOS)",
                  "Fix CRF → SDTM → ADaM traceability gaps",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-teal mt-0.5 shrink-0" size={16} />
                    <span className="text-primary-foreground/90 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-5 pt-5 border-t border-primary-foreground/10">
                {[
                  { icon: <Shield size={13} />, text: "CDISC Silver Partner" },
                  { icon: <Users size={13} />, text: "Swiss-based specialists" },
                  { icon: <BookOpen size={13} />, text: "19 pages · 15 min read" },
                ].map((b) => (
                  <div key={b.text} className="flex items-center gap-1.5 text-[11px] text-primary-foreground/50">
                    <span className="text-teal">{b.icon}</span>
                    {b.text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <LeadForm id="download-form" containerRef={formRef} />
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col items-center mt-10"
        >
          <button
            onClick={() => document.getElementById("section-risk")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex flex-col items-center gap-1.5 text-primary-foreground/40 hover:text-teal transition-colors"
          >
            <span className="text-[11px] tracking-wide">Understand the #1 cause of Refuse‑to‑File</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ArrowDown size={16} className="group-hover:text-teal transition-colors" />
            </motion.div>
          </button>
        </motion.div>
      </section>

      {/* ─── SECTION: PROBLEM (Pain / Risk) ─── */}
      <section id="section-risk" className="px-6 py-14 md:px-12 lg:px-24 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Section transition label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground/60 font-medium mb-6"
          >
            Here's where most submissions fail
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="text-solar-orange" size={16} />
              <p className="text-xs uppercase tracking-[0.2em] text-solar-orange font-semibold">The Risk</p>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Why Swissmedic Submissions Fail
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl mb-8">
              Each year, sponsors face costly Refuse-to-File decisions — adding 3–6 months of delay. The root causes are preventable.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: <AlertTriangle size={20} />, title: "Poor CDISC Traceability", desc: "Broken CRF → SDTM → ADaM links trigger validation failures and reviewer queries." },
                { icon: <Clock size={20} />, title: "Late CDISC Engagement", desc: "Post-lock CDISC implementation leads to expensive retrofitting and timeline overruns." },
                { icon: <FileCheck size={20} />, title: "Missing Swiss Metadata", desc: "SNCTP identifiers, EKOS references, and multilingual data are frequently overlooked." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-5 rounded-xl border border-border bg-card"
                >
                  <div className="text-solar-orange mb-3">{item.icon}</div>
                  <h3 className="font-display text-sm font-semibold text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section transition label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground/60 font-medium mb-6"
          >
            This is what proper traceability looks like
          </motion.p>

          {/* Traceability + Timeline side-by-side */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Traceability flow */}
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-display text-xs uppercase tracking-wider text-muted-foreground mb-5">End-to-End Traceability</h3>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {["CRF", "SDTM", "ADaM", "TLF", "CSR"].map((step, i, arr) => (
                    <div key={step} className="flex items-center gap-2">
                      <div className="px-4 py-2.5 rounded-lg bg-navy text-primary-foreground font-display font-bold text-xs tracking-wide">
                        {step}
                      </div>
                      {i < arr.length - 1 && <ChevronRight className="text-teal" size={16} />}
                    </div>
                  ))}
                </div>
                <p className="text-center text-[11px] text-muted-foreground mt-3">
                  Each step must be fully traceable for acceptance
                </p>
              </div>

              {/* Timeline comparison */}
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-display text-xs uppercase tracking-wider text-muted-foreground mb-5">Timeline Comparison</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                        <CheckCircle2 className="text-teal" size={14} /> Early Planning
                      </span>
                      <span className="font-display font-bold text-teal text-sm">13–26 wks</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-teal/15 overflow-hidden">
                      <div className="h-full rounded-full bg-teal w-[45%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                        <AlertTriangle className="text-solar-orange" size={14} /> Late Retrofit
                      </span>
                      <span className="font-display font-bold text-solar-orange text-sm">25–51 wks</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-solar-orange/15 overflow-hidden">
                      <div className="h-full rounded-full bg-solar-orange w-[90%]" />
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-muted-foreground mt-3">Starting early saves 12–25 weeks on average</p>
              </div>
            </div>

            {/* Swiss-specific layer */}
            <div className="mt-6 p-5 rounded-xl border border-teal/15 bg-teal/5 flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-xs font-semibold text-foreground whitespace-nowrap">Swiss-Specific Requirements:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "SNCTP", desc: "Clinical Trials Portal" },
                  { label: "EKOS", desc: "Ethics Committee System" },
                  { label: "Multilingual", desc: "DE / FR / IT data" },
                ].map((item) => (
                  <span key={item.label} className="inline-flex items-center gap-1.5 text-[11px] bg-card border border-border rounded-full px-3 py-1.5 text-foreground">
                    <span className="font-bold text-teal">{item.label}</span>
                    <span className="text-muted-foreground">{item.desc}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MID-PAGE CTA ─── */}
      <section className="px-6 py-10 md:px-12 lg:px-24 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-1">
              Understand the full submission framework
            </h3>
            <p className="text-sm text-muted-foreground">
              Get the complete traceability model, timeline benchmarks, and Swiss-specific checklist.
            </p>
          </div>
          <button
            onClick={scrollToForm}
            className="shrink-0 bg-teal text-accent-foreground font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition-all flex items-center gap-2 text-sm"
          >
            <Download size={16} />
            Download the Guide
          </button>
        </div>
      </section>

      {/* ─── WHAT YOU'LL LEARN + AUTHORITY ─── */}
      <section className="px-6 py-14 md:px-12 lg:px-24 bg-navy">
        <div className="max-w-6xl mx-auto">
          {/* Section transition label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[0.25em] text-primary-foreground/30 font-medium mb-6"
          >
            Now, let's look at what's inside
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* What You'll Learn */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-3">Inside the Guide</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
                What You'll Learn
              </h2>
              <ul className="space-y-3">
                {[
                  "Swissmedic submission expectations & requirements",
                  "CDISC implementation strategy from protocol to filing",
                  "Complete CRF-to-CSR traceability model",
                  "Common RTF triggers and how to prevent them",
                  "When to start CDISC planning for each study phase",
                  "Swiss-specific metadata (SNCTP, EKOS)",
                  "Timeline & cost: early vs. late engagement",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="text-teal shrink-0 mt-0.5" size={14} />
                    <span className="text-primary-foreground/80 text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Authority */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-3">About the Authors</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Swiss CDISC Experts
              </h2>
              <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
                Datametrix AG is a Swiss-based CDISC Silver Partner specializing in SDTM, ADaM, define.xml, and Swissmedic submissions — combining global standards with Swiss regulatory precision.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "CDISC", label: "Silver Partner" },
                  { value: "50+", label: "Submissions" },
                  { value: "0", label: "RTF decisions" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5">
                    <div className="text-xl font-display font-bold text-teal mb-0.5">{stat.value}</div>
                    <div className="text-[10px] text-primary-foreground/40">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CONSULTATION CTA (High-intent) ─── */}
      <section className="px-6 py-14 md:px-12 lg:px-24 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-2xl border border-border bg-card text-center"
          >
            <Calendar className="mx-auto text-solar-orange mb-4" size={36} />
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
              Not sure if your study is submission-ready?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
              Book a free 30-minute CDISC Readiness Assessment with our Swiss regulatory data specialists.
              We'll review your current approach and identify potential gaps before they become costly.
            </p>
            <a
              href="https://calendly.com/datametrixag/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-solar-orange text-accent-foreground font-semibold px-7 py-3.5 rounded-lg hover:brightness-110 transition-all group text-sm"
            >
              Book a Free Assessment
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── BOTTOM CTA + FORM ─── */}
      <section className="px-6 py-14 md:px-12 lg:px-24 bg-navy">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                Prepare Your Swissmedic Submission with Confidence
              </h2>
              <p className="text-primary-foreground/60 text-sm max-w-xl mx-auto">
                Download our comprehensive guide and avoid the most common — and most costly — submission mistakes.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <LeadForm containerRef={bottomFormRef} variant="dark" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-t border-teal/20 py-2.5 px-4 transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="hidden sm:block">
            <p className="text-primary-foreground font-display font-semibold text-sm">Swiss CDISC Submission Guide 2026</p>
            <p className="text-primary-foreground/50 text-[11px]">Free download · 19 pages</p>
          </div>
          <button
            onClick={scrollToForm}
            className="bg-teal text-accent-foreground font-semibold px-5 py-2 rounded-lg hover:brightness-110 transition-all flex items-center gap-2 text-sm"
          >
            <Download size={15} />
            Download Now
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SwissCdiscGuide;
