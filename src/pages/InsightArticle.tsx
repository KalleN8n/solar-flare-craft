import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag, FileText, Newspaper } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { insights, articleContents } from "@/data/insightArticles";

const InsightArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = insights.find((i) => i.slug === slug);
  const content = slug ? articleContents[slug] : undefined;

  if (!item || !content) {
    return <Navigate to="/insights" replace />;
  }

  const typeLabel = item.type === "white-paper" ? "White Paper" : "Article";

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`${item.title} | Datametrix AG`}
        description={item.excerpt}
        canonical={`/insights/${item.slug}`}
      />
      <Navbar />

      {/* Header */}
      <section className="bg-navy pt-48 pb-16 section-padding">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm text-teal hover:text-teal/80 transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Back to Insights
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] uppercase tracking-wider font-bold text-teal bg-teal/10 px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                {item.type === "white-paper" ? <FileText size={10} /> : <Newspaper size={10} />}
                {typeLabel}
              </span>
              <span className="text-xs text-primary-foreground/40 flex items-center gap-1">
                <Tag size={10} /> {item.category}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-5 leading-tight">
              {item.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-primary-foreground/50">
              <span>{item.date}</span>
              <span className="flex items-center gap-1"><Clock size={13} /> {item.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <article className="section-padding bg-background">
        <div className="max-w-3xl mx-auto">
          {/* Excerpt / Lead */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-10 border-l-2 border-teal pl-6"
          >
            {item.excerpt}
          </motion.p>

          {/* Key Takeaways */}
          {content.keyTakeaways && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border rounded-2xl p-6 mb-12"
            >
              <h2 className="font-display text-sm uppercase tracking-[0.15em] text-teal font-semibold mb-4">
                Key Takeaways
              </h2>
              <ul className="space-y-3">
                {content.keyTakeaways.map((t, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                    <span className="text-teal font-bold mt-0.5">→</span>
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Sections */}
          {content.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-10"
            >
              {section.heading && (
                <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </motion.div>
          ))}

          {/* CTA */}
          <div className="border-t border-border pt-10 mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Want to discuss this topic with our experts?</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-teal text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default InsightArticle;
