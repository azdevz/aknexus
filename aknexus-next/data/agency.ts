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
    price: "AED 2,500",
    setupFee: "$1,000 one-time setup",
    bestFor: "UAE service businesses that need a reliable enquiry and booking system",
    description: "Plug the leaks in your intake so every inquiry gets answered and tracked.",
    ctaText: "Book a Call",
    ctaHref: "/book",
    features: [
      "Website review & conversion optimisation",
      "Intake forms & online consultation booking",
      "CRM with defined 5-stage pipeline",
      "Automated email/SMS follow-up & reminders",
      "Review request workflow",
      "Monthly report: inquiries, consults & confirmed bookings",
      "Ongoing website updates & technical support",
    ],
    deliverables: [
      {
        category: "Website & Conversion",
        items: [
          "Mobile-first speed & layout optimization",
          "One clear call-to-action on every service page",
          "Fast SSL, hosting audit & security safeguards",
        ],
      },
      {
        category: "Intake & Automation",
        items: [
          "Custom intake forms (no sensitive customer details collected online)",
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
    price: "AED 5,000",
    setupFee: "$1,500 one-time setup",
    popular: true,
    bestFor: "Businesses that want more inquiries from local search and an active local profile",
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
          "Local citation building across industry & regional directories",
          "On-page service area optimization for local geographic terms",
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
    price: "AED 10,000",
    setupFee: "$2,000 one-time setup + ad spend",
    bestFor: "Businesses already spending on ads or ready to invest for rapid inbound client acquisition",
    description: "Full-funnel client acquisition with Google/Meta ads managed for cost per confirmed booking.",
    ctaText: "Book a Strategy Call",
    ctaHref: "/book",
    features: [
      "Everything in Growth, plus:",
      "Google Ads & Meta ads campaign management",
      "High-converting dedicated campaign landing pages",
      "Call tracking & keyword-to-booking attribution",
      "Cost-per-confirmed-booking reporting",
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
          "Google Ads search campaigns targeting high-intent service keywords",
          "Meta retargeting campaigns where appropriate for your sector and audience",
          "Conversion-focused custom landing pages built for high intent",
          "Ad spend paid directly by you to Google/Meta (no markup)",
        ],
      },
      {
        category: "Advanced Attribution",
        items: [
          "Dynamic call tracking number integration",
          "Keyword-to-consultation and cost-per-confirmed-booking tracking",
          "Weekly bid adjustments and negative keyword pruning",
          "Monthly executive strategy call with your dedicated lead",
        ],
      },
    ],
  },
  {
    id: "custom",
    name: "Custom",
    price: "Custom",
    setupFee: "Setup and scope quoted individually",
    bestFor: "UAE businesses with multiple locations or bespoke requirements",
    description: "A tailored combination of marketing, automation, and operational support.",
    ctaText: "Discuss Your Requirements",
    ctaHref: "/book",
    features: [
      "Tailored services and deliverables",
      "Multi-location marketing support",
      "Custom CRM integrations and automation",
      "Agreed reporting and support schedule",
    ],
    deliverables: [
      {
        category: "Tailored Scope",
        items: [
          "Services selected around your business goals and locations",
          "Custom integrations and workflows scoped together",
          "Delivery timeline, reporting, and support agreed in your proposal",
          "Pricing quoted in AED for your agreed scope",
        ],
      },
    ],
  },
];

export const ADD_ONS = [
  {
    title: "Bookkeeping & Accounts Support",
    description: "Monthly reconciliation and financial reporting for small UAE businesses.",
  },
  {
    title: "Virtual Assistant Hours",
    description: "Capped monthly bundles for administrative tasks, client scheduling, and document formatting.",
  },
  {
    title: "Project Management & Operations Support",
    description: "Workflow streamlining, technology migration assistance, and business operational audits.",
  },
];

export const COMPARISON_DATA = [
  { item: "Legal intake CRM software", cost: "~$200 to $300 / mo" },
  { item: "Answering or intake service", cost: "~$250+ / mo" },
  { item: "Marketing agency retainer", cost: "$1,500+ / mo" },
  { item: "Website care & hosting", cost: "Billed separately" },
  { item: "Total patchwork from multiple vendors", cost: "$1,950+ / mo (you manage all of it)" },
  { item: "AK Nexus Growth", cost: "AED 5,000 / mo (one team, one report, one contact)" },
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
      "A 45-minute kickoff to confirm your service areas, target geographic area, tone of voice, calendar rules, and approval workflow. We set up access to your accounts.",
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
      "A clear monthly report showing inquiries, consultations booked, and confirmed bookings by source. We hold a short review call to evaluate results and plan the next month.",
  },
];

export const AGENCY_FAQS = [
  { question: "Which UAE businesses do you work with?", answer: "Car rental, clinics, home maintenance, landscaping, HVAC, home movers, vehicle recovery, real estate, and laundry businesses. Other service businesses can request a custom scope." },
  { question: "Do you guarantee bookings or rankings?", answer: "No. Results depend on demand, competition, budget, and your team's response. We commit to agreed deliverables and transparent reporting." },
  { question: "Will this replace our existing business software?", answer: "We manage enquiry capture, follow-up, booking requests, and source tracking. Your operational systems continue to handle service delivery and billing. Integrations are scoped around your tools." },
  { question: "Who owns our website, accounts, and data?", answer: "You retain ownership of your website, domain, advertising accounts, business profiles, and customer data." },
  { question: "What are the contract terms?", answer: "An initial three-month commitment, followed by month-to-month service with 30 days' written notice." },
  { question: "How does ad spend work?", answer: "Scale includes campaign management. Ad spend is separate and paid directly to Google or Meta with no markup from us." },
  { question: "Who approves our content?", answer: "Your team approves service descriptions, offers, credentials, pages, and campaigns before publication. Sector-specific review and platform approvals are addressed in the agreed scope." },
];
