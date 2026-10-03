export interface Plan {
  id: string;
  name: string;
  price: string;
  setupFee: string;
  bestFor: string;
  description: string;
  popular?: boolean;
  ctaText: string;
  ctaHref: string;
  features: string[];
  deliverables: { category: string; items: string[] }[];
}

export const AGENCY_PLANS: Plan[] = [
  {
    id: "foundation",
    name: "Foundation",
    price: "From $1,000",
    setupFee: "$1,000 one-time setup",
    bestFor: "Solo attorneys with steady referrals who need a reliable system behind them",
    description: "Plug the leaks in your intake so every inquiry gets answered and tracked.",
    ctaText: "Book a Call",
    ctaHref: "/book",
    features: [
      "Website review & conversion optimisation",
      "Intake forms & online consultation booking",
      "CRM with defined 5-stage pipeline",
      "Automated email/SMS follow-up & reminders",
      "Review request workflow",
      "Monthly report: inquiries, consults & signed cases",
      "Ongoing website updates & technical support",
    ],
    deliverables: [
      {
        category: "Website & Conversion",
        items: [
          "Mobile-first speed & layout optimization",
          "One clear call-to-action on every practice page",
          "Fast SSL, hosting audit & security safeguards",
        ],
      },
      {
        category: "Intake & Automation",
        items: [
          "Custom intake forms (no sensitive case details collected online)",
          "Direct online consultation scheduling sync with your calendar",
          "Automated instant acknowledgement via email and SMS",
          "Pre-consultation reminders to reduce no-shows",
          "Follow-up sequences for inquiries that haven't booked",
        ],
      },
      {
        category: "Reporting & Ownership",
        items: [
          "Full CRM setup with clear pipeline tracking",
          "Monthly source tracking (referrals, direct, web)",
          "You own 100% of your website, domain & CRM data",
        ],
      },
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "From $2,000",
    setupFee: "$1,500 one-time setup",
    popular: true,
    bestFor: "Firms that want more inquiries from local search and an active local profile",
    description: "Everything in Foundation plus local visibility, SEO, and review generation.",
    ctaText: "Book a Call",
    ctaHref: "/book",
    features: [
      "Everything in Foundation, plus:",
      "Google Business Profile setup & optimisation",
      "Local SEO: citations, directory cleanup & on-page updates",
      "Social media management (up to 12 posts/month)",
      "Systematic review generation & monitoring",
      "Local search ranking reports",
    ],
    deliverables: [
      {
        category: "All Foundation Features Included",
        items: [
          "Complete intake CRM, website optimization & automations",
          "Calendar booking, reminder sequences & review workflows",
        ],
      },
      {
        category: "Local SEO & Presence",
        items: [
          "Full Google Business Profile optimization",
          "Local citation building across legal & regional directories",
          "On-page practice area optimization for local geographic terms",
          "Monthly content updates targeting high-intent local queries",
        ],
      },
      {
        category: "Reputation & Social",
        items: [
          "Rule-compliant client review request automation",
          "Public review monitoring & alert workflow",
          "Up to 12 curated social posts per month",
        ],
      },
    ],
  },
  {
    id: "scale",
    name: "Scale",
    price: "From $3,500",
    setupFee: "$2,000 one-time setup + ad spend",
    bestFor: "Firms already spending on ads or ready to invest for rapid inbound client acquisition",
    description: "Full-funnel client acquisition with Google/Meta ads managed for cost per signed case.",
    ctaText: "Book a Strategy Call",
    ctaHref: "/book",
    features: [
      "Everything in Growth, plus:",
      "Google Ads & Meta ads campaign management",
      "High-converting dedicated campaign landing pages",
      "Call tracking & keyword-to-case attribution",
      "Cost-per-signed-case reporting",
      "Weekly campaign optimisation & monthly strategy call",
    ],
    deliverables: [
      {
        category: "All Foundation & Growth Features",
        items: [
          "Complete website, CRM, automations, local SEO & social",
        ],
      },
      {
        category: "Paid Acquisition (PPC)",
        items: [
          "Google Ads search campaigns targeting high-intent legal keywords",
          "Meta retargeting campaigns (where compliant with state bar rules)",
          "Conversion-focused custom landing pages built for high intent",
          "Ad spend paid directly by you to Google/Meta (no markup)",
        ],
      },
      {
        category: "Advanced Attribution",
        items: [
          "Dynamic call tracking number integration",
          "Keyword-to-consultation and cost-per-signed-case tracking",
          "Weekly bid adjustments and negative keyword pruning",
          "Monthly executive strategy call with your dedicated lead",
        ],
      },
    ],
  },
];

export const ADD_ONS = [
  {
    title: "Bookkeeping & Accounts Support",
    description: "Monthly reconciliation and financial reporting for solo and small law practices.",
  },
  {
    title: "Virtual Assistant Hours",
    description: "Capped monthly bundles for administrative tasks, client scheduling, and document formatting.",
  },
  {
    title: "Project Management & Operations Support",
    description: "Workflow streamlining, technology migration assistance, and practice operational audits.",
  },
];

export const COMPARISON_DATA = [
  { item: "Legal intake CRM software", cost: "~$200 to $300 / mo" },
  { item: "Answering or intake service", cost: "~$250+ / mo" },
  { item: "Marketing agency retainer", cost: "$1,500+ / mo" },
  { item: "Website care & hosting", cost: "Billed separately" },
  { item: "Total patchwork from multiple vendors", cost: "$1,950+ / mo (you manage all of it)" },
  { item: "AK Nexus Growth", cost: "From $2,000 / mo (one team, one report, one contact)" },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    phase: "Free Audit",
    timeline: "Days 1–2",
    title: "Review & Findings",
    description:
      "We review your existing website, mobile experience, and inquiry follow-up flow. You receive a concise written report with the top fixes—whether we work together or not.",
  },
  {
    number: "02",
    phase: "Kickoff",
    timeline: "Week 1",
    title: "Align & Scope",
    description:
      "A 45-minute kickoff to confirm your practice areas, target geographic area, tone of voice, calendar rules, and approval workflow. We set up access to your accounts.",
  },
  {
    number: "03",
    phase: "Build",
    timeline: "Weeks 1–3",
    title: "Systems & Conversion Setup",
    description:
      "We optimize your website, install fast intake forms, configure the CRM pipeline, connect your booking calendar, and draft follow-up email/SMS templates for your approval.",
  },
  {
    number: "04",
    phase: "Test & Launch",
    timeline: "Week 3",
    title: "End-to-End Verification",
    description:
      "Every form, auto-responder, SMS, calendar invite, and tracking script is tested thoroughly before go-live. Nothing publishes without your sign-off.",
  },
  {
    number: "05",
    phase: "Monthly Delivery",
    timeline: "Ongoing",
    title: "Execution & Monitoring",
    description:
      "Ongoing local SEO, content updates, review monitoring, and ads management. All deliverables are tracked in a shared view so you always know what's in progress.",
  },
  {
    number: "06",
    phase: "Monthly Review",
    timeline: "Monthly",
    title: "Transparent Reporting",
    description:
      "A clear monthly report showing inquiries, consultations booked, and signed cases by source. We hold a short review call to evaluate results and plan the next month.",
  },
];

export const AGENCY_FAQS = [
  {
    question: "Do you guarantee case outcomes or lead volume?",
    answer:
      "No. Legitimate marketing and legal ethics rules prevent guarantees on cases, rankings, or lead counts. Results depend on your practice area, local market, competition, and how quickly your firm responds. We commit to defined deliverables, disciplined execution, and transparent reporting.",
  },
  {
    question: "Are you a law firm or do you provide legal advice?",
    answer:
      "No. AK Nexus provides marketing, website development, and technology operations services. We are not a law firm and never provide legal advice or communicate regarding confidential client legal matters.",
  },
  {
    question: "Will this replace Clio, MyCase, or our practice management software?",
    answer:
      "No. We manage the front-end journey: capture, immediate follow-up, consultation booking, and source attribution. Once an inquiry becomes a retained client, your practice management system (Clio, MyCase, PracticePanther, etc.) takes over for case management and billing.",
  },
  {
    question: "Who owns our website, ad accounts, and client data?",
    answer:
      "You own 100% of everything. Your website files, domain, hosting, Google Business Profile, ad accounts, and CRM data remain in your name. If you ever leave, you take everything with you.",
  },
  {
    question: "What are the contract terms?",
    answer:
      "All plans have an initial 3-month commitment to allow sufficient time to build, test, and generate traction. After 3 months, service continues on a month-to-month basis with 30 days' written notice to cancel.",
  },
  {
    question: "How does ad spend work?",
    answer:
      "Ad spend is paid directly by your firm to Google or Meta with zero markup from us. Our monthly fee covers campaign strategy, copywriting, landing page development, conversion tracking, and ongoing bid optimization.",
  },
  {
    question: "How long until we see results?",
    answer:
      "Intake improvements (instant auto-replies, appointment booking, reminder sequences) stop lead leakage in the first weeks. Local SEO typically takes 3 to 6 months to build sustained local search authority. Paid ads can drive traffic within days of launch.",
  },
  {
    question: "Is our clients' confidential information protected?",
    answer:
      "Yes. We design our intake forms strictly to capture contact details and general practice interest—never sensitive case details, spouse names, or confidential case notes. Intake data lives in your firm's private CRM account protected by multi-factor authentication.",
  },
  {
    question: "How do you handle state bar advertising compliance?",
    answer:
      "We build strictly around legal marketing ethics guidelines: no deceptive claims, no outcome promises, clear service disclaimers, and mandatory attorney review. You approve every page, ad, and message template prior to publication.",
  },
];
