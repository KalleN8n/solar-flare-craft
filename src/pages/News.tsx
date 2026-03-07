import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const newsItems = [
  {
    title: "Going to the same events? Datametrix is looking forward to meeting you",
    excerpt: "We are attending several key industry events this year. Come meet our team and discover how we can support your data needs.",
    date: "2023",
  },
  {
    title: "SAS Programming",
    excerpt: "In this complex, fast-changing job market, just putting in the hours and being good at what you do may not be enough.",
    date: "2023",
  },
  {
    title: "Datametrix Academy",
    excerpt: "In a dynamic clinical research environment, it is vitally important to keep up with the constantly changing regulations, rules, and guidelines.",
    date: "2022",
  },
  {
    title: "Onboarding Process",
    excerpt: "In the era of social media, we often forget that socialization/familiarization with a new company is also vitally important for new comers.",
    date: "2022",
  },
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
              News
            </h1>
            <p className="text-primary-foreground/70 leading-relaxed max-w-3xl">
              Stay informed about our latest developments, insights, and industry news.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {newsItems.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-teal/30 transition-all group"
              >
                <span className="text-xs text-muted-foreground">{item.date}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-teal transition">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.excerpt}</p>
                <span className="text-xs text-teal inline-flex items-center gap-1">
                  Read more <ArrowRight size={12} />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-navy text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Read inspiring stories.</h2>
          <p className="text-primary-foreground/60 mb-8">
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
