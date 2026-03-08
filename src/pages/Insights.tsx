import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag, FileText, Newspaper, BarChart3, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { insights, articleContents, type ContentType } from "@/data/insightArticles";

const typeFilters: { value: ContentType; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All", icon: null },
  { value: "article", label: "Articles", icon: <Newspaper size={14} /> },
  { value: "white-paper", label: "White Papers", icon: <FileText size={14} /> },
  { value: "news", label: "Company News", icon: <BarChart3 size={14} /> },
];

const categories = ["All", "RWE", "AI & ML", "Data Management", "HEOR", "Biostatistics", "Company News"];

const Insights = () => {
  const [activeType, setActiveType] = useState<ContentType>("all");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = insights.filter((item) => {
    const typeMatch = activeType === "all" || item.type === activeType;
    const catMatch = activeCategory === "All" || item.category === activeCategory;
    return typeMatch && catMatch;
  });

  const featured = insights.filter((i) => i.featured);

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Insights | Datametrix AG – Articles, White Papers & News"
        description="Expert insights on AI-driven biostatistics, real-world evidence, clinical data management, and HEOR from Datametrix AG."
        canonical="/insights"
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 section-padding">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm uppercase tracking-[0.2em] text-teal font-semibold mb-4">Knowledge Hub</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Insights & White Papers
            </h1>
            <p className="text-primary-foreground/70 leading-relaxed max-w-3xl">
              Thought leadership on data science, AI, and regulatory analytics in life sciences — helping you turn complex data challenges into strategic advantages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-sm uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-8">Featured</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {featured.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-2xl bg-navy border border-teal/20 hover:border-teal/40 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-teal bg-teal/10 px-2.5 py-1 rounded-full">
                    {item.type === "white-paper" ? "White Paper" : "Article"}
                  </span>
                  <span className="text-xs text-primary-foreground/40">{item.category}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3 group-hover:text-teal transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed mb-6">{item.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-primary-foreground/40">
                    <span>{item.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {item.readTime}</span>
                  </div>
                  <span className="text-teal text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {typeFilters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveType(f.value)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeType === f.value
                      ? "bg-teal text-accent-foreground"
                      : "bg-card border border-border text-muted-foreground hover:border-teal/30"
                  }`}
                >
                  {f.icon}
                  {f.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.article
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-teal/30 transition-all group flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                    item.type === "white-paper"
                      ? "text-teal bg-teal/10"
                      : item.type === "news"
                      ? "text-solar-orange bg-solar-orange/10"
                      : "text-foreground bg-muted/30"
                  }`}>
                    {item.type === "white-paper" ? "White Paper" : item.type === "news" ? "News" : "Article"}
                  </span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Tag size={10} /> {item.category}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2 group-hover:text-teal transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{item.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{item.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {item.readTime}</span>
                  </div>
                  {item.externalLink ? (
                    <a href={item.externalLink} target="_blank" rel="noopener noreferrer" className="text-teal text-xs font-medium flex items-center gap-1">
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="text-teal text-xs font-medium flex items-center gap-1 group-hover:gap-1.5 transition-all">
                      Read <ArrowRight size={12} />
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No insights match your current filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-navy">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Stay ahead of the curve
            </h2>
            <p className="text-primary-foreground/60 mb-8 max-w-xl mx-auto">
              Get our latest white papers, articles, and industry insights delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:info@datametrix.ch?subject=Subscribe%20to%20Datametrix%20Insights&body=I%20would%20like%20to%20receive%20monthly%20insights%20on%20data%20science%20in%20life%20sciences."
                className="inline-flex items-center gap-2 bg-teal text-accent-foreground px-8 py-3.5 rounded-lg font-semibold hover:brightness-110 transition group"
              >
                Subscribe to Monthly Insights
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
