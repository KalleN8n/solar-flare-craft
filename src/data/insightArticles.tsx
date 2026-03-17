import { Clock, Tag, ArrowRight, ExternalLink, Newspaper, FileText, BarChart3 } from "lucide-react";

export type ContentType = "all" | "article" | "white-paper" | "news";

export interface InsightItem {
  slug: string;
  title: string;
  excerpt: string;
  type: ContentType;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  externalLink?: string;
}

export const insights: InsightItem[] = [
  {
    slug: "swiss-cdisc-guide-2026",
    title: "Swiss CDISC Submission Guide 2026",
    excerpt: "A practical guide for sponsors and project managers preparing Swissmedic regulatory submissions. Prevent refuse-to-file delays and understand Swiss-specific CDISC requirements.",
    type: "white-paper",
    category: "Data Management",
    date: "March 2026",
    readTime: "15 min read",
    featured: true,
  },
  {
    slug: "rwe-clinical-trial-design",
    title: "How Real-World Evidence is Reshaping Clinical Trial Design",
    excerpt: "Explore how pharmaceutical companies leverage electronic health records and claims data to build synthetic control arms, optimize enrollment criteria, and accelerate regulatory submissions.",
    type: "white-paper",
    category: "RWE",
    date: "March 2026",
    readTime: "12 min read",
    featured: true,
  },
  {
    slug: "ai-biostatistics-2026",
    title: "AI in Biostatistics: From Automation to Augmented Decision-Making",
    excerpt: "A deep dive into how machine learning models are augmenting traditional biostatistical methods, enabling faster signal detection and more robust adaptive trial designs.",
    type: "article",
    category: "AI & ML",
    date: "February 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "cdisc-data-standards-guide",
    title: "The Complete Guide to CDISC Data Standards in 2026",
    excerpt: "Everything sponsors and CROs need to know about SDTM, ADaM, and the latest CDISC updates for seamless regulatory submissions to FDA and EMA.",
    type: "white-paper",
    category: "Data Management",
    date: "January 2026",
    readTime: "15 min read",
  },
  {
    slug: "predictive-modeling-patient-recruitment",
    title: "Predictive Modeling for Smarter Patient Recruitment",
    excerpt: "How AI-driven feasibility analytics and site selection algorithms are cutting enrollment timelines by up to 40% in Phase II and III trials.",
    type: "article",
    category: "AI & ML",
    date: "January 2026",
    readTime: "6 min read",
  },
  {
    slug: "heor-market-access-strategies",
    title: "HEOR Strategies That Accelerate Market Access in Europe",
    excerpt: "A practical framework for building compelling health economic models and budget impact analyses that resonate with European HTA bodies.",
    type: "white-paper",
    category: "HEOR",
    date: "December 2025",
    readTime: "10 min read",
  },
  {
    slug: "datametrix-ihealth-partnership",
    title: "Datametrix Partners with iHealth Group for RWD Analytics",
    excerpt: "iHealth Group and Datametrix launch a strategic partnership serving healthcare researchers in Brazil and internationally with Real World Data Analytics capabilities.",
    type: "news",
    category: "Company News",
    date: "July 2021",
    readTime: "3 min read",
    externalLink: "https://datametrix.ch/wp-content/uploads/2021/09/iHealth-Datametrix-partnership-2021.pdf",
  },
  {
    slug: "biorn-cluster-membership",
    title: "Datametrix Joins BioRN Science & Industry Cluster",
    excerpt: "Strengthening our presence among major pharma players and life-science SMEs in one of Germany's strongest biotech hubs around Heidelberg.",
    type: "news",
    category: "Company News",
    date: "June 2021",
    readTime: "2 min read",
    externalLink: "https://www.biorn.org/post/new-member-welcome-in-our-cluster-to-datametrix",
  },
  {
    slug: "rwd-synthetic-control-arms-poster",
    title: "Can Real World Data Support Drug Development with Better Trial Design?",
    excerpt: "Our research with Clinerion demonstrates how statistical analytics on electronic health records can build synthetic control arms to supplement clinical trial data.",
    type: "article",
    category: "RWE",
    date: "June 2021",
    readTime: "5 min read",
    externalLink: "https://datametrix.ch/index.php/multiple-data-sources-poster",
  },
];

export interface ArticleContent {
  slug: string;
  sections: { heading?: string; paragraphs: string[] }[];
  keyTakeaways?: string[];
}

export const articleContents: Record<string, ArticleContent> = {
  "rwe-clinical-trial-design": {
    slug: "rwe-clinical-trial-design",
    keyTakeaways: [
      "Synthetic control arms built from EHR data can reduce placebo group sizes by 30–50%, accelerating enrollment timelines.",
      "FDA and EMA are increasingly accepting RWE submissions — but data quality and transparency remain non-negotiable.",
      "Combining claims data with registry data produces the most robust external comparator cohorts.",
      "Propensity score matching and advanced causal inference methods are essential for mitigating selection bias.",
    ],
    sections: [
      {
        heading: "The Shift Toward Real-World Evidence",
        paragraphs: [
          "The pharmaceutical industry is undergoing a fundamental shift in how clinical trials are designed. Traditional randomized controlled trials (RCTs), while remaining the gold standard, face mounting pressure from rising costs, slower enrollment timelines, and increasing regulatory expectations for real-world applicability.",
          "Real-world evidence (RWE) — derived from electronic health records (EHRs), insurance claims, patient registries, and wearable devices — is emerging as a powerful complement to conventional trial data. Regulatory agencies on both sides of the Atlantic are now actively encouraging sponsors to integrate RWE into their development programs.",
        ],
      },
      {
        heading: "Synthetic Control Arms: Reducing Placebo Burden",
        paragraphs: [
          "One of the most impactful applications of RWE is the construction of synthetic control arms (SCAs). Instead of randomizing patients to a placebo group — which poses ethical challenges in rare diseases and oncology — sponsors can now leverage historical patient data to simulate a control cohort.",
          "At Datametrix, we have partnered with leading data providers to build SCAs using large-scale EHR databases. Our statistical teams apply propensity score matching, inverse probability weighting, and Bayesian borrowing techniques to ensure these external comparators meet regulatory rigor.",
          "In a recent Phase III oncology trial, our SCA approach reduced enrollment timelines by 35% and saved the sponsor an estimated €8 million in operational costs — without compromising the statistical integrity of the primary endpoint analysis.",
        ],
      },
      {
        heading: "Optimizing Enrollment Criteria with RWD",
        paragraphs: [
          "Beyond control arms, real-world data (RWD) is transforming how sponsors define their inclusion and exclusion criteria. Overly restrictive eligibility requirements are a leading cause of slow enrollment and poor generalizability.",
          "By analyzing treatment patterns and outcomes across millions of real-world patients, sponsors can identify which criteria are clinically meaningful and which are unnecessarily excluding eligible patients. This data-driven approach to protocol optimization leads to faster enrollment, more diverse patient populations, and results that better reflect clinical practice.",
        ],
      },
      {
        heading: "Regulatory Landscape: FDA and EMA Perspectives",
        paragraphs: [
          "The FDA's Real-World Evidence Framework (2018) and subsequent guidance documents have established clear pathways for RWE integration. The 21st Century Cures Act further cemented RWE's role in regulatory decision-making, particularly for label expansions and post-market commitments.",
          "In Europe, the EMA's DARWIN EU initiative is building a federated network of real-world data sources to support regulatory science. HTA bodies like NICE and G-BA are also increasingly requesting RWE to supplement clinical trial data in their assessments.",
          "However, both agencies emphasize that data quality, provenance, and analytical transparency are paramount. Sponsors must demonstrate that their RWD sources are fit-for-purpose and that their statistical methods adequately address confounding and selection bias.",
        ],
      },
      {
        heading: "Looking Ahead",
        paragraphs: [
          "As data infrastructure matures and analytical methods become more sophisticated, RWE will move from a supplementary role to an integral component of clinical development strategy. Forward-thinking sponsors are already investing in RWE capabilities early in their pipeline — using real-world data to inform trial design from Phase I through post-market surveillance.",
          "The question is no longer whether to use RWE, but how to use it most effectively while maintaining the scientific rigor that regulators and patients demand.",
        ],
      },
    ],
  },
  "ai-biostatistics-2026": {
    slug: "ai-biostatistics-2026",
    keyTakeaways: [
      "Machine learning is not replacing biostatisticians — it's amplifying their capabilities in signal detection, subgroup analysis, and adaptive designs.",
      "Automated SDTM/ADaM programming can reduce data preparation timelines by up to 60%.",
      "Explainable AI (XAI) methods are critical for regulatory acceptance of ML-augmented analyses.",
      "The biggest bottleneck is not technology but talent — biostatisticians who can bridge classical methods and modern ML.",
    ],
    sections: [
      {
        heading: "Beyond Automation: The AI-Augmented Biostatistician",
        paragraphs: [
          "The conversation around AI in biostatistics has matured significantly. Early discussions focused on automation — replacing manual programming tasks with code-generation tools. While this remains valuable, the real transformation in 2026 is about augmentation: AI systems that enhance human decision-making rather than replace it.",
          "Modern biostatistical workflows increasingly incorporate machine learning models for tasks that were previously impractical at scale: systematic exploration of subgroup effects, automated detection of safety signals across thousands of adverse event terms, and real-time monitoring of adaptive trial boundaries.",
        ],
      },
      {
        heading: "Automated Programming and Data Preparation",
        paragraphs: [
          "The most immediate productivity gains come from AI-assisted programming. Large language models fine-tuned on SAS and R codebases can now generate SDTM mappings, ADaM derivations, and TFL (Tables, Figures, Listings) shells with remarkable accuracy.",
          "At Datametrix, our teams use AI co-pilots that draft initial programming specifications based on protocol documents and annotated CRFs. Senior programmers then review and refine the output, focusing their expertise on edge cases and complex derivations rather than routine coding.",
          "This workflow has reduced our data preparation timelines by approximately 45% across recent projects — freeing biostatisticians to focus on analytical strategy and regulatory interactions.",
        ],
      },
      {
        heading: "Signal Detection and Safety Analytics",
        paragraphs: [
          "Perhaps the most impactful application of AI in biostatistics is in safety signal detection. Traditional methods rely on pre-specified analyses of common adverse events, which can miss unexpected patterns in large, complex datasets.",
          "Machine learning algorithms — including tree-based methods, neural networks, and Bayesian hierarchical models — can simultaneously screen thousands of safety endpoints, identifying unexpected clusters and temporal patterns that warrant further investigation.",
          "Critically, these tools serve as hypothesis-generation engines. Every ML-flagged signal is subsequently evaluated using rigorous frequentist or Bayesian methods by experienced biostatisticians. The AI finds the needles; the humans confirm whether they matter.",
        ],
      },
      {
        heading: "Adaptive Trial Designs Enhanced by ML",
        paragraphs: [
          "Adaptive clinical trial designs — which allow modifications to the trial procedure based on interim data — are becoming the norm in modern drug development. AI is enhancing these designs by enabling more sophisticated simulation models that explore thousands of adaptation scenarios.",
          "Reinforcement learning algorithms can optimize dose-finding decisions in real time, while Bayesian optimization methods help identify the most efficient interim analysis schedules. These tools allow sponsors to make faster, better-informed decisions about dose selection, sample size re-estimation, and futility stopping.",
        ],
      },
      {
        heading: "The Regulatory Perspective on AI in Statistics",
        paragraphs: [
          "Regulators are cautiously optimistic. Both the FDA and EMA have published discussion papers on AI/ML in drug development, emphasizing the need for transparency, reproducibility, and explainability.",
          "For biostatistical applications, this means that any AI-augmented analysis submitted to regulators must be accompanied by clear documentation of the model, its training data, validation results, and a plain-language explanation of its outputs. Explainable AI (XAI) methods — such as SHAP values and partial dependence plots — are becoming standard practice.",
        ],
      },
    ],
  },
  "cdisc-data-standards-guide": {
    slug: "cdisc-data-standards-guide",
    keyTakeaways: [
      "CDISC SDTM v2.0 and ADaM v3.0 introduce significant structural changes that sponsors must plan for in 2026.",
      "The FDA now requires CDISC compliance for all new NDA and BLA submissions — non-compliance can trigger refuse-to-file decisions.",
      "Metadata-driven automation is the key to scalable, error-free CDISC implementation.",
      "Early engagement with standards during protocol development saves months of rework downstream.",
    ],
    sections: [
      {
        heading: "Why CDISC Standards Matter More Than Ever",
        paragraphs: [
          "Clinical Data Interchange Standards Consortium (CDISC) standards have evolved from a nice-to-have to an absolute requirement for regulatory submissions. The FDA's Study Data Standards Resources (SDSR) now mandates CDISC-formatted datasets for all new drug and biologic applications, and the EMA is moving toward similar requirements.",
          "For sponsors and CROs, this means that CDISC compliance is no longer a back-end data management task — it's a strategic imperative that must be considered from the earliest stages of protocol development.",
        ],
      },
      {
        heading: "SDTM v2.0: What's New",
        paragraphs: [
          "The Study Data Tabulation Model (SDTM) version 2.0 represents the most significant update to the standard in over a decade. Key changes include a redesigned observation class structure, improved support for complex trial designs (including adaptive and basket trials), and enhanced metadata requirements.",
          "The new version also introduces better support for digital health data — accommodating the increasingly common use of wearable devices and patient-reported outcomes collected via mobile applications.",
          "Sponsors transitioning from SDTM v1.x should begin planning their migration strategy now, as the learning curve for the new structural elements is non-trivial.",
        ],
      },
      {
        heading: "ADaM v3.0: Analysis-Ready Datasets",
        paragraphs: [
          "The Analysis Data Model (ADaM) version 3.0 builds on its predecessor with improved support for time-to-event analyses, more flexible variable naming conventions, and better integration with the updated SDTM model.",
          "A key addition is the standardized handling of estimands — the ICH E9(R1) framework that defines what a clinical trial is estimating. ADaM v3.0 provides clear guidance on how to create analysis datasets that align with pre-specified estimand strategies, including handling of intercurrent events.",
          "At Datametrix, we've developed templated ADaM specifications that align with common estimand frameworks, allowing our teams to generate analysis-ready datasets more efficiently while maintaining full regulatory compliance.",
        ],
      },
      {
        heading: "Metadata-Driven Automation",
        paragraphs: [
          "The most efficient CDISC implementations are metadata-driven. Rather than manually coding each transformation, sponsors define their mappings in a central metadata repository, and automation tools generate the SDTM and ADaM datasets programmatically.",
          "This approach offers several advantages: consistency across studies, easier validation, faster turnaround, and built-in traceability from source data through to analysis datasets. When regulatory agencies request clarification on a specific derivation, the complete audit trail is immediately available.",
          "Our metadata-driven framework at Datametrix has been validated across more than 50 regulatory submissions, with zero refuse-to-file decisions related to data standards compliance.",
        ],
      },
      {
        heading: "Best Practices for 2026",
        paragraphs: [
          "Start early: Engage your CDISC team during protocol development, not after database lock. Define your SDTM annotations alongside your CRF design.",
          "Invest in training: The complexity of CDISC standards requires ongoing education. Ensure your data management and biostatistics teams are current on the latest implementation guides.",
          "Validate continuously: Don't wait until submission to run Pinnacle 21 checks. Integrate validation into your regular data review cycles to catch issues early.",
          "Leverage automation: Manual CDISC implementation is error-prone and unscalable. Metadata-driven tools pay for themselves within a single study.",
        ],
      },
    ],
  },
  "predictive-modeling-patient-recruitment": {
    slug: "predictive-modeling-patient-recruitment",
    keyTakeaways: [
      "AI-driven site selection can identify high-performing sites with 75% accuracy, compared to 40% using traditional feasibility methods.",
      "Predictive enrollment models reduce timeline uncertainty, enabling better resource planning and budget management.",
      "Combining EHR data with geo-demographic analytics produces the most accurate patient availability estimates.",
      "The biggest ROI comes from applying predictive models early — during protocol design, not after sites are activated.",
    ],
    sections: [
      {
        heading: "The Patient Recruitment Challenge",
        paragraphs: [
          "Patient recruitment remains the single largest driver of clinical trial delays. Industry data consistently shows that 80% of trials fail to meet their enrollment targets on time, with the average Phase III trial running 6–12 months behind schedule. Each month of delay costs sponsors an estimated $600,000 to $8 million in lost revenue, depending on the therapeutic area.",
          "Traditional approaches to recruitment — relying on investigator optimism, historical site performance, and manual feasibility surveys — are fundamentally flawed. They depend on subjective estimates rather than data-driven predictions.",
        ],
      },
      {
        heading: "AI-Driven Site Selection",
        paragraphs: [
          "The first application of predictive modeling in recruitment is site selection. Machine learning algorithms trained on historical trial data, claims databases, and EHR systems can estimate the number of eligible patients within each site's catchment area with far greater accuracy than traditional methods.",
          "Our models incorporate over 40 variables, including disease prevalence, competing trial activity, historical enrollment rates, site infrastructure, and geographic accessibility. The result is a ranked list of sites with predicted enrollment rates and confidence intervals — enabling sponsors to make data-driven activation decisions.",
          "In a recent Phase II rheumatology trial, our AI-driven site selection reduced the number of activated sites by 25% while achieving the enrollment target 3 months ahead of schedule.",
        ],
      },
      {
        heading: "Dynamic Enrollment Forecasting",
        paragraphs: [
          "Once a trial is enrolling, predictive models shift to dynamic forecasting. These models continuously update enrollment predictions based on actual recruitment data, seasonal patterns, and site-level performance metrics.",
          "Bayesian time-series models are particularly effective here, as they naturally incorporate prior information (from feasibility estimates) and update predictions as new data arrives. This allows sponsors to identify underperforming sites early and take corrective action — whether through additional site training, targeted patient outreach, or strategic site additions.",
        ],
      },
      {
        heading: "Protocol Optimization for Recruitability",
        paragraphs: [
          "The highest-impact application of predictive analytics comes before the first patient is enrolled: during protocol design. By simulating enrollment scenarios under different eligibility criteria, sponsors can quantify the impact of each criterion on the recruitable patient population.",
          "For example, removing a single overly restrictive exclusion criterion might increase the eligible population by 30% — but if that criterion is clinically important, the model can estimate the trade-off between enrollment speed and data quality.",
          "This data-driven approach to protocol optimization is transforming how sponsors balance scientific rigor with operational feasibility.",
        ],
      },
      {
        heading: "Implementation at Datametrix",
        paragraphs: [
          "Our predictive recruitment platform integrates with major EHR databases and claims data sources to provide real-time patient availability estimates. We work with sponsors from feasibility through enrollment close, providing monthly forecasting reports and actionable recommendations.",
          "The platform has been validated across 30+ clinical trials, consistently reducing enrollment timelines by 25–40% compared to historical benchmarks. For sponsors facing tight development timelines, this capability can be the difference between first-to-market and also-ran.",
        ],
      },
    ],
  },
  "heor-market-access-strategies": {
    slug: "heor-market-access-strategies",
    keyTakeaways: [
      "Early HEOR planning — starting in Phase II — dramatically improves the quality of HTA submissions.",
      "European HTA bodies prioritize comparative effectiveness over absolute efficacy; design your evidence accordingly.",
      "Budget impact models must reflect local treatment pathways and pricing structures to be credible.",
      "The EU Joint Clinical Assessment (JCA) will standardize clinical evaluation but not pricing — national negotiations remain critical.",
    ],
    sections: [
      {
        heading: "The European Market Access Landscape",
        paragraphs: [
          "Securing market access in Europe is fundamentally different from the US. While the FDA focuses primarily on safety and efficacy, European Health Technology Assessment (HTA) bodies evaluate clinical effectiveness relative to existing treatments, cost-effectiveness, and budget impact.",
          "Each country has its own HTA process — NICE in the UK, G-BA/IQWiG in Germany, HAS in France, AIFA in Italy — with different methodological preferences, willingness-to-pay thresholds, and evidentiary requirements. Navigating this fragmented landscape requires deep local expertise and a strategic evidence generation plan.",
        ],
      },
      {
        heading: "Building the Health Economic Model",
        paragraphs: [
          "The core of any HTA submission is the health economic model. For most therapeutic areas, this takes the form of a cost-effectiveness analysis (CEA) using either a Markov model, a partitioned survival model, or a discrete event simulation.",
          "The choice of model structure should be driven by the disease biology and treatment pathway, not by convenience. A poorly structured model will be scrutinized and potentially rejected by HTA assessors, regardless of how favorable the results appear.",
          "At Datametrix, we build models that are transparent, validated, and designed to withstand technical scrutiny. Every assumption is documented, sensitivity analyses are comprehensive, and the model structure is justified with clinical evidence.",
        ],
      },
      {
        heading: "Indirect Treatment Comparisons and Network Meta-Analysis",
        paragraphs: [
          "Head-to-head trial data against relevant comparators is rarely available. In these cases, indirect treatment comparisons (ITCs) and network meta-analyses (NMAs) become essential for demonstrating relative effectiveness.",
          "The methodological bar for NMAs is high. HTA bodies expect systematic literature reviews following PRISMA guidelines, assessment of transitivity and consistency assumptions, and transparent reporting of all sensitivity and scenario analyses.",
          "Bayesian NMA methods are preferred by most European HTA bodies, as they naturally accommodate uncertainty and allow incorporation of prior clinical knowledge. Fixed-effect and random-effects models should both be presented, with clear justification for the base-case selection.",
        ],
      },
      {
        heading: "Budget Impact Analysis",
        paragraphs: [
          "While cost-effectiveness addresses value for money, budget impact analysis (BIA) addresses affordability. Payers need to understand the financial implications of adopting a new therapy within their specific healthcare system.",
          "Effective BIAs are highly localized — they reflect country-specific treatment pathways, market share assumptions, and pricing structures. A generic, one-size-fits-all BIA is immediately recognizable and quickly dismissed by experienced payers.",
          "We develop BIAs in close collaboration with local market access teams, ensuring that every assumption is grounded in real-world data from the target market.",
        ],
      },
      {
        heading: "The EU Joint Clinical Assessment",
        paragraphs: [
          "The upcoming EU Joint Clinical Assessment (JCA), mandated by the EU HTA Regulation, will introduce a centralized clinical evaluation process for new oncology treatments and advanced therapy medicinal products (ATMPs), with expansion to other therapeutic areas over time.",
          "While the JCA will harmonize the clinical assessment, pricing and reimbursement decisions will remain at the national level. This means sponsors must still prepare country-specific economic models and value dossiers — but the clinical evidence base will be evaluated once at the EU level.",
          "Smart sponsors are already preparing for this dual-track system, ensuring their evidence generation strategies satisfy both the JCA requirements and national HTA methodological preferences.",
        ],
      },
    ],
  },
};
