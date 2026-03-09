import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import teamAhmed from "@/assets/team-ahmed.png";
import teamDominik from "@/assets/team-dominik.jpg";
import teamLeon from "@/assets/team-leon.png";
import teamAmira from "@/assets/team-amira.png";

const teamMembers = [
  {
    name: "Ahmed El Rhali",
    role: "CEO",
    image: teamAhmed,
    alt: "Ahmed El Rhali, CEO of Datametrix AG — expert in data science and clinical trials",
    bio: [
      "Ahmed El Rhali is an expert in Data Science, Clinical Trials and Biotechnology. Since 2015 he is President and CEO of datametrix AG, supporting companies in generating the information they need, for making better and faster decisions driving business and clinical benefits and results.",
      "With extensive knowledge and experience in those fields thanks to the numerous years he spent working in senior positions (MD, VP) for large pharma organizations and CRO's, Ahmed knows your challenges as a decision maker and knows the importance of data to help taking the best, most informed decisions, accelerate timelines and save money to a business unit and even to your organization as a whole.",
    ],
    imagePosition: "left" as const,
  },
  {
    name: "Dominik Pfluger",
    role: "Expert Statistician",
    image: teamDominik,
    alt: "Dominik Pfluger, expert biostatistician specializing in clinical trials and SAS programming",
    bio: [
      "Dominik is a biostatistician with long term experience in clinical trials (pharmaceutical and medical devices studies). Statistical theory, applied computer science and a strong medical background build the basis of his activities.",
      "As a passionate SAS programmer Dominik is also involved in BI (Business Intelligence), specialized in data mining and reporting systems that is automated reporting using SAS macros.",
    ],
    imagePosition: "right" as const,
  },
  {
    name: "Leon Van Wouwe",
    role: "Clinical Operations & BD",
    image: teamLeon,
    alt: "Leon Van Wouwe, clinical operations leader with experience in oncology and autoimmune diseases",
    bio: [
      "Léon is a versatile clinical operations leader with broad experience across a wide range of TA's (including oncology and autoimmune diseases). He has a strong cross functional focus and deep understanding of project functional requirements of organisations. He has worked in a variety of organisations, including large, midsize and small biotech and also in the health technology space.",
      "Léon likes to build the bridges for wellbeing, between biotech, health tech, clinical researchers, clinicians and patients.",
    ],
    imagePosition: "left" as const,
  },
  {
    name: "Amira Bouattour",
    role: "Quality Assurance and Compliance",
    image: teamAmira,
    alt: "Amira Bouattour, quality assurance and compliance manager for ICH-GCP standards",
    bio: [
      "Amira is a Quality Assurance and Compliance Manager with an extensive experience in leading the development and implementation of Quality Management System in compliance with international standards (such as ISO 9001, ICH-GCP…) and providing thorough and skillful support to all team members.",
      "An organized and conscientious self-starter, able to establish the Quality Roadmap within the company, conduct internal audits and root cause analysis and put in place corrective and preventives action plans to grant continual improvement.",
    ],
    imagePosition: "right" as const,
  },
];

const OurTeam = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Our Team – Datametrix AG Leadership"
        description="Meet the senior data scientists, biostatisticians, and clinical operations leaders driving Datametrix AG's 20+ years of life sciences expertise."
        canonical="/team"
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy pt-48 pb-20 section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-teal font-semibold mb-4">Who We Are</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Team
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-3xl">
              Discover a team of passionate experts who want to make a difference for you, through hard work, innovation, and the magic of data analysis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet our Leaders */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-teal mb-14"
          >
            Meet our Leaders.
          </motion.h2>

          <div className="space-y-16">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col ${member.imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-start`}
              >
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shrink-0 bg-muted">
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {member.name}, <span className="text-teal">{member.role}</span>
                  </h3>
                  <div className="space-y-3 mt-4">
                    {member.bio.map((paragraph, j) => (
                      <p key={j} className="text-sm text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Want to join our team?</h2>
          <p className="text-primary-foreground/60 mb-8">We're always looking for talented data professionals. Reach out to us.</p>
          <a
            href="https://calendly.com/julienmnd/15min"
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

export default OurTeam;
