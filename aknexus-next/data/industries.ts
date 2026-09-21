export interface IndustryPageContent {
  slug: string;
  name: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubhead: string;
  trustLine: string;
  problemHeading: string;
  problemIntro: string;
  leaks: { title: string; desc: string }[];
  setupHeading: string;
  features: { name: string; description: string }[];
  patchworkHeading: string;
  comparisonNote: string;
  howItWorksHeading: string;
  ownershipHeading: string;
  ownershipPoints: string[];
  advertisingRulesHeading: string;
  advertisingRulesBody: string;
  clientInfoHeading: string;
  clientInfoBody: string;
  goodFit: string[];
  notFit: string[];
  finalCtaHeading: string;
  finalCtaBody: string;
}

export const FAMILY_LAW_CONTENT: IndustryPageContent = {
  slug: "family-law",
  name: "Family Law",
  badge: "For solo and small family law firms",
  metaTitle: "Marketing & Intake Systems for Family Law Firms | AK Nexus",
  metaDescription:
    "Website, client intake automation, local SEO and ads for solo and small family law firms. One monthly fee, no long-term lock-in, you own everything.",
  h1: "Never lose a divorce or custody inquiry to a slow reply.",
  heroSubhead:
    "We build and run your website, intake system and marketing for one monthly fee. Every inquiry is captured and followed up with care, from first contact to signed retainer, and you own everything we build.",
  trustLine:
    "Month-to-month after 3 months · You own your website, ad accounts and data · Built around attorney advertising rules",
  problemHeading: "Family law inquiries are urgent, emotional and time-sensitive.",
  problemIntro:
    "People searching for a divorce or custody lawyer are usually in a hard moment and often contact more than one firm. The firm that answers first, clearly and kindly usually wins the consultation. For a small firm, that's difficult while you're in court, in meetings, or with clients.",
  leaks: [
    {
      title: "After-hours & in-court inquiries",
      desc: "Inquiries submitted while you're in court or after 5 PM wait until the next day—by which time they've retained someone else.",
    },
    {
      title: "Cluttered website forms",
      desc: "Forms that ask too much or too little and dump submissions into an unmonitored shared inbox.",
    },
    {
      title: "Zero follow-up after the first call",
      desc: "Warm prospects who attended a consultation or had a quick phone chat go cold because nobody reached back out.",
    },
    {
      title: "Consultations that don't show",
      desc: "Prospective clients forget, miss appointments, or get cold feet because automated reminders were never sent.",
    },
    {
      title: "No source attribution",
      desc: "You have no idea which marketing channel produced which signed retainer, so money is wasted on guessing.",
    },
  ],
  setupHeading: "A front office that works while you work.",
  features: [
    {
      name: "Consultation-focused website",
      description: "Clear practice area pages, ultra-fast on mobile, with one simple, reassuring next step.",
    },
    {
      name: "Sensitive-topic-aware intake forms",
      description: "Minimal fields, plain-language privacy notice, and zero confidential case details collected online.",
    },
    {
      name: "Instant inquiry acknowledgement",
      description: "Every inquiry receives an immediate, courteous email or SMS (with express consent) within seconds.",
    },
    {
      name: "Online consultation booking",
      description: "Qualified prospects can directly select a time that matches your practice calendar.",
    },
    {
      name: "Missed-call text-back",
      description: "When you cannot answer the phone, prospects immediately receive a polite text letting them know you'll assist them shortly.",
    },
    {
      name: "Gentle follow-up sequences",
      description: "Thoughtful check-ins for individuals who inquired but have not yet scheduled a consultation.",
    },
    {
      name: "Pre-consultation reminders",
      description: "Automated calendar invites and SMS reminders that dramatically reduce consultation no-shows.",
    },
    {
      name: "Rule-compliant review requests",
      description: "Prompt satisfied clients for Google reviews at the optimal time, strictly within your state bar's advertising guidelines.",
    },
    {
      name: "Pipeline tracking & revenue reporting",
      description: "A clear view of every lead's status and exactly which source produced each signed retainer.",
    },
  ],
  patchworkHeading: "What you'd otherwise piece together.",
  comparisonNote: "Typical market rates based on separate subscriptions versus a unified team.",
  howItWorksHeading: "Live in weeks, with a clear path.",
  ownershipHeading: "Nothing here is held hostage.",
  ownershipPoints: [
    "Your website, domain and hosting account belong 100% to you.",
    "Your Google Business Profile and ad accounts are created in your firm's name.",
    "Your client and lead data can be exported at any moment.",
    "After the 3-month initial commitment, cancel anytime with 30 days' notice.",
  ],
  advertisingRulesHeading: "Legal marketing has rules. We build with them in mind.",
  advertisingRulesBody:
    "State bar rules on attorney advertising vary across jurisdictions. Our templates scrupulously avoid outcome guarantees, restrict results claims, and include prominent service disclaimers. You approve every page, ad, and message before it publishes.",
  clientInfoHeading: "Your clients' information: Handled with care.",
  clientInfoBody:
    "Family law inquiries can involve deeply sensitive information. We keep online forms minimal, keep intake data inside your firm's own CRM account, limit team access by role, and use multi-factor authentication.",
  goodFit: [
    "Solo attorneys and law firms with 1 to 3 staff members.",
    "Firms seeking a steady, predictable flow of consultations and an organized intake pipeline.",
    "Attorneys who value clear reporting, direct ownership, and no long-term vendor lock-in.",
  ],
  notFit: [
    "Firms demanding guaranteed case volume or immediate #1 Google rankings. No ethical agency can guarantee that.",
    "Large multi-partner firms with established in-house marketing departments.",
  ],
  finalCtaHeading: "Find out where inquiries are slipping away.",
  finalCtaBody:
    "Get a free audit of your website and intake process. No obligation, and you keep the written report either way.",
};

export const INDUSTRIES = [FAMILY_LAW_CONTENT];
