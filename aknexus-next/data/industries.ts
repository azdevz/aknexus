export interface LeakItem {
  title: string;
  desc: string;
}

export interface FeatureItem {
  name: string;
  description: string;
}

export interface StatItem {
  number: string;
  label: string;
  sublabel?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface IndustryPageContent {
  slug: string;
  name: string;
  badge: string;
  industryTag: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubhead: string;
  trustLine: string;
  stats: StatItem[];
  problemHeading: string;
  problemSubhead: string;
  problemIntro: string;
  leaks: LeakItem[];
  setupHeading: string;
  setupSubhead: string;
  features: FeatureItem[];
  patchworkHeading: string;
  patchworkRows: { vendor: string; cost: string }[];
  patchworkTotal: string;
  nexusPrice: string;
  comparisonNote: string;
  howItWorksHeading: string;
  howItWorksSteps: { step: string; title: string; desc: string; duration: string }[];
  resultsHeading: string;
  resultsSubhead: string;
  resultsMetrics: { stat: string; label: string; detail: string }[];
  ownershipHeading: string;
  ownershipPoints: string[];
  complianceHeading: string;
  complianceBody: string;
  clientInfoHeading: string;
  clientInfoBody: string;
  goodFit: string[];
  notFit: string[];
  faqs: FaqItem[];
  finalCtaHeading: string;
  finalCtaBody: string;
}

export const FAMILY_LAW_CONTENT: IndustryPageContent = {
  slug: "family-law",
  name: "Family Law",
  badge: "For Solo & Small Family Law Firms",
  industryTag: "Family Law & Divorce",
  metaTitle: "Marketing & Intake Systems for Family Law Firms | AK Nexus",
  metaDescription:
    "Website, client intake automation, local SEO and ads for solo and small family law firms. One monthly fee, no long-term lock-in, you own everything.",
  h1: "Never lose a divorce or custody inquiry to a slow reply.",
  heroSubhead:
    "We build and run your website, intake system and marketing for one monthly fee. Every inquiry is captured and followed up with care, from first contact to signed retainer, and you own everything we build.",
  trustLine:
    "Month-to-month after 3 months · You own your website, ad accounts & data · Built around attorney advertising rules",
  stats: [
    { number: "< 5 Min", label: "Automated Intake Reply", sublabel: "Instant respectful SMS/email" },
    { number: "100%", label: "Client Account Ownership", sublabel: "Domain, site, CRM & ad accounts" },
    { number: "3-Month", label: "Initial Commitment", sublabel: "Month-to-month thereafter" },
    { number: "1–3 Staff", label: "Practice Specialization", sublabel: "Built specifically for small firms" },
  ],
  problemHeading: "Family law inquiries are urgent, emotional and time-sensitive.",
  problemSubhead: "Most family law practices don't have a marketing problem. They have a follow-up problem.",
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
    {
      title: "Hostage agency lock-in",
      desc: "Traditional marketing agencies lock you into 12-month retainers and keep your website or CRM data when you leave.",
    },
  ],
  setupHeading: "A front office that works while you work.",
  setupSubhead: "Everything you need to turn local searchers into signed retainers without adding administrative overhead.",
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
    {
      name: "Local SEO & Google Business Profile",
      description: "Optimized local pack visibility for divorce, child custody, and family mediation queries.",
    },
  ],
  patchworkHeading: "What you'd otherwise piece together.",
  patchworkRows: [
    { vendor: "Legal intake CRM subscription", cost: "$200 – $300 / mo" },
    { vendor: "Answering / virtual intake service", cost: "$250 – $500 / mo" },
    { vendor: "Marketing agency retainer", cost: "$1,500 – $3,000 / mo" },
    { vendor: "Website maintenance & hosting", cost: "$150 – $300 / mo" },
    { vendor: "SEO & local citation software", cost: "$100 – $200 / mo" },
  ],
  patchworkTotal: "$2,200+ / mo (and you manage 5 different vendors)",
  nexusPrice: "From $1,000 to $2,000 / mo as one unified team & single report",
  comparisonNote: "Typical market rates based on separate subscriptions versus a unified, dedicated operations team.",
  howItWorksHeading: "Live in weeks, with a clear path.",
  howItWorksSteps: [
    {
      step: "01",
      title: "Free Intake & Website Audit",
      desc: "We review your current website speed, mobile layout, and secret-shop your inquiry follow-up. You receive a concise written report.",
      duration: "Within 48 hours",
    },
    {
      step: "02",
      title: "Kickoff & Practice Alignment",
      desc: "We confirm your exact practice areas, target jurisdiction, fee structure, voice, and approval protocols.",
      duration: "Week 1",
    },
    {
      step: "03",
      title: "Build & Workflow Automation",
      desc: "We build your mobile-first website, CRM pipelines, booking calendar, and message sequences. Every copy draft is approved by you.",
      duration: "Weeks 1 – 3",
    },
    {
      step: "04",
      title: "End-to-End Testing & Go-Live",
      desc: "We rigorously test every form, automated email, SMS, and booking calendar before switching DNS and launching campaigns.",
      duration: "Week 3",
    },
    {
      step: "05",
      title: "Monthly Optimization & Delivery",
      desc: "Ongoing Local SEO, review generation, ad management, and monthly performance reviews reporting on signed retainers.",
      duration: "Ongoing monthly",
    },
  ],
  resultsHeading: "Real consultations. Real rankings. Real growth.",
  resultsSubhead: "We focus on the metrics that actually impact practice revenue, not vanity clicks.",
  resultsMetrics: [
    {
      stat: "4.2x",
      label: "Faster Intake Response",
      detail: "Reducing response times from 18+ hours to under 3 minutes dramatically lifts consultation booking rates.",
    },
    {
      stat: "38%",
      label: "Reduction in No-Shows",
      detail: "Automated multi-channel calendar reminders ensure prospective clients arrive prepared for their consults.",
    },
    {
      stat: "100%",
      label: "Direct Source Attribution",
      detail: "Know exactly which Google search, ad campaign, or referral source generated each signed retainer.",
    },
  ],
  ownershipHeading: "Nothing here is held hostage.",
  ownershipPoints: [
    "Your website, domain, and hosting account belong 100% to your firm.",
    "Your Google Business Profile and ad accounts are registered in your firm's name.",
    "Your client and lead database can be exported at any moment in standard CSV format.",
    "After the 3-month initial commitment, cancel anytime with 30 days' notice.",
  ],
  complianceHeading: "Legal marketing has rules. We build with them in mind.",
  complianceBody:
    "State bar rules on attorney advertising vary across jurisdictions. Our templates scrupulously avoid outcome guarantees, restrict results claims, and include prominent service disclaimers. You approve every page, ad, and message before it publishes.",
  clientInfoHeading: "Your clients' information: Handled with utmost care.",
  clientInfoBody:
    "Family law inquiries involve sensitive circumstances. We keep online forms strictly minimal, never collect case facts online, keep data isolated inside your firm's private CRM account, and enforce multi-factor authentication.",
  goodFit: [
    "Solo attorneys and boutique family law firms with 1 to 3 staff members.",
    "Firms seeking a steady, predictable flow of consultations and an organized intake pipeline.",
    "Attorneys who value clear reporting, direct ownership, and no long-term vendor lock-in.",
  ],
  notFit: [
    "Firms demanding guaranteed case volume or immediate #1 Google rankings. No ethical agency can guarantee that.",
    "Large 50-partner law corporations with existing in-house marketing departments.",
  ],
  faqs: [
    {
      question: "Do you guarantee case volume or rankings?",
      answer:
        "No. Results depend on your geographic market, practice competition, ad budget, and firm responsiveness. We commit to defined deliverables, rapid technical turnaround, and transparent reporting—never misleading guarantees.",
    },
    {
      question: "Are you a law firm or do you provide legal advice?",
      answer:
        "No. AK Nexus is a marketing and technology company. We do not provide legal advice, draft legal documents, or participate in attorney-client representation.",
    },
    {
      question: "Will this replace Clio, MyCase, or PracticePanther?",
      answer:
        "No. AK Nexus handles the front end of your practice: inquiry capture, speed-to-lead follow-up, consultation scheduling, and marketing attribution. When a prospect signs a retainer, your practice management system takes over case work.",
    },
    {
      question: "Who owns the website, ad accounts, and intake data?",
      answer:
        "You do. Everything is created under your firm's credentials. If you ever decide to leave after the 3-month onboarding period, you retain complete ownership of all digital assets.",
    },
    {
      question: "What is the contract term?",
      answer:
        "A 3-month minimum to build, test, and optimize your systems, followed by flexible month-to-month service with 30 days' notice.",
    },
    {
      question: "How does ad pricing work?",
      answer:
        "Our management fee is transparent and separate from your advertising budget. Ad spend is billed directly to your credit card by Google or Meta.",
    },
  ],
  finalCtaHeading: "Find out where inquiries are slipping away.",
  finalCtaBody:
    "Get a free audit of your family law website and intake process. No obligation, and you keep the comprehensive written report either way.",
};

export const DENTAL_CONTENT: IndustryPageContent = {
  slug: "dental",
  name: "Dental Practices",
  badge: "For General, Cosmetic & Orthodontic Practices",
  industryTag: "Dental & Orthodontics",
  metaTitle: "Patient Acquisition & Intake Systems for Dental Practices | AK Nexus",
  metaDescription:
    "Modern websites, automated appointment scheduling, local SEO and high-intent patient ads for solo and private dental practices. You own everything.",
  h1: "Fill your hygiene chairs and high-value treatment calendar.",
  heroSubhead:
    "We run your dental website, online appointment booking, local map rankings, and patient follow-up for one predictable monthly fee. Stop losing new patient calls to voicemail.",
  trustLine:
    "Month-to-month after 3 months · Direct online booking · HIPAA-conscious systems · You own your domain & patient data",
  stats: [
    { number: "< 2 Min", label: "New Patient Response", sublabel: "Automated booking & text-back" },
    { number: "100%", label: "Practice Asset Ownership", sublabel: "Domain, website, reviews & accounts" },
    { number: "24/7", label: "Online Appointment Flow", sublabel: "Direct calendar synchronization" },
    { number: "0 Lock-in", label: "Month-to-Month", sublabel: "After 90-day onboarding phase" },
  ],
  problemHeading: "Most dental practices lose 30% of new patient inquiries to missed calls and clunky websites.",
  problemSubhead: "Patients searching for a dentist or cosmetic treatment pick the first practice with easy online booking and glowing reviews.",
  problemIntro:
    "When a prospective patient has a toothache, needs Invisalign, or is looking for a family dentist, they search on their phone during lunch or after work. If your phone rings to voicemail or your site forces them to fill out a 15-field PDF form, they click the next practice on Google Maps.",
  leaks: [
    {
      title: "Missed calls during busy front-desk hours",
      desc: "When receptionists are checking in patients or answering insurance questions, incoming new patient calls go straight to voicemail and are lost.",
    },
    {
      title: "No instant online booking",
      desc: "Modern patients expect to select appointment times directly from their phone at 9 PM without waiting for business hours.",
    },
    {
      title: "Uncollected 5-star Google reviews",
      desc: "Happy patients leave without leaving a review, while local competitors with automated review requests climb ahead on Google Maps.",
    },
    {
      title: "High-value case drop-off",
      desc: "Inquiries for implants, veneers, and clear aligners require thoughtful follow-up that busy front desks simply don't have time to do.",
    },
    {
      title: "High cancellation and no-show rates",
      desc: "Without automated multi-channel SMS reminders, valuable chair time is wasted on missed appointments.",
    },
    {
      title: "Expensive, opaque marketing retainers",
      desc: "Dental marketing agencies charging $3,000/mo without showing how many booked new patients actually showed up.",
    },
  ],
  setupHeading: "A high-converting patient acquisition engine.",
  setupSubhead: "From local Google Maps dominance to seamless online booking and automated review generation.",
  features: [
    {
      name: "High-converting dental website",
      description: "Fast, mobile-optimized site showcasing treatments, doctor bios, transparent insurance info, and instant booking buttons.",
    },
    {
      name: "Direct online appointment scheduling",
      description: "Allow new and existing patients to self-schedule hygiene checkups and treatment consultations 24/7.",
    },
    {
      name: "Instant missed-call text-back",
      description: "Automatically text callers when the front desk is busy, keeping prospective patients engaged before they call a competitor.",
    },
    {
      name: "Automated patient review system",
      description: "Post-appointment SMS triggers asking happy patients for Google reviews, steadily climbing your local 3-Pack rank.",
    },
    {
      name: "High-value treatment nurture",
      description: "Educational email and SMS sequences for cosmetic dentistry, dental implants, and clear aligner consultations.",
    },
    {
      name: "Local Google Maps (GBP) optimization",
      description: "Hyper-local optimization ensuring your clinic appears at the top when patients search 'dentist near me'.",
    },
    {
      name: "Multi-channel appointment reminders",
      description: "Automated SMS and email reminders with 2-way confirmation to slash no-show rates to under 5%.",
    },
    {
      name: "Patient acquisition reporting",
      description: "Monthly dashboard showing calls, online bookings, acquired patients, and return on marketing spend.",
    },
  ],
  patchworkHeading: "What dental clinics otherwise piece together.",
  patchworkRows: [
    { vendor: "Online scheduling software", cost: "$150 – $300 / mo" },
    { vendor: "Automated review generation tool", cost: "$200 – $400 / mo" },
    { vendor: "Dental marketing agency retainer", cost: "$2,000 – $4,000 / mo" },
    { vendor: "Website hosting & maintenance", cost: "$150 – $300 / mo" },
    { vendor: "Local SEO & citation services", cost: "$200 – $400 / mo" },
  ],
  patchworkTotal: "$2,700+ / mo (with fragmented software & separate logins)",
  nexusPrice: "From $1,000 to $2,000 / mo as one unified, dedicated growth team",
  comparisonNote: "Eliminate vendor fragmentation with a single team managing your entire patient acquisition pipeline.",
  howItWorksHeading: "Live in weeks, with zero disruption to your staff.",
  howItWorksSteps: [
    {
      step: "01",
      title: "Patient Journey & Website Audit",
      desc: "We analyze your website, booking flow, Google Business profile, and review volume compared to top local competitors.",
      duration: "Within 48 hours",
    },
    {
      step: "02",
      title: "Practice Strategy & Customization",
      desc: "We define your core treatment priorities (hygiene, cosmetic, emergency, implants) and staff booking workflows.",
      duration: "Week 1",
    },
    {
      step: "03",
      title: "Website, Booking & Automation Build",
      desc: "We craft your conversion-optimized dental website, online booking calendar, review request sequences, and SMS automations.",
      duration: "Weeks 1 – 3",
    },
    {
      step: "04",
      title: "Staff Walkthrough & Launch",
      desc: "We test every appointment notification and train your front desk on the unified patient inbox before going live.",
      duration: "Week 3",
    },
    {
      step: "05",
      title: "Monthly Local SEO & Growth Review",
      desc: "Continuous Google Maps ranking optimization, review acceleration, ad management, and monthly patient attribution reviews.",
      duration: "Ongoing monthly",
    },
  ],
  resultsHeading: "Full hygiene schedules. Consistent new patients.",
  resultsSubhead: "Real systems delivering predictable patient growth for private dental practices.",
  resultsMetrics: [
    {
      stat: "+35%",
      label: "Increase in New Patient Bookings",
      detail: "Enabling friction-free after-hours online booking captures patients who browse when your office is closed.",
    },
    {
      stat: "4.9★",
      label: "Google Review Acceleration",
      detail: "Automated post-visit SMS requests build an insurmountable review advantage in your local radius.",
    },
    {
      stat: "< 4%",
      label: "Appointment No-Show Rate",
      detail: "Smart 2-way SMS reminder flows keep chairs filled and allow rapid rebooking of cancelled slots.",
    },
  ],
  ownershipHeading: "You own 100% of your practice digital assets.",
  ownershipPoints: [
    "Your dental website, custom code, domain, and media belong entirely to your practice.",
    "Your Google Business Profile, review history, and ad accounts remain in your practice name.",
    "Patient contact lists and CRM history can be exported whenever you need.",
    "Flexible month-to-month agreement after the initial 90-day onboarding period.",
  ],
  complianceHeading: "HIPAA-conscious workflows and healthcare advertising integrity.",
  complianceBody:
    "We design online booking and intake forms that collect only necessary contact and scheduling information, keeping sensitive protected health information (PHI) within your certified practice management and EHR software.",
  clientInfoHeading: "Patient privacy is paramount.",
  clientInfoBody:
    "We enforce role-based access, encrypted form submissions, multi-factor authentication, and strict privacy protocols to safeguard all practice inquiry data.",
  goodFit: [
    "Private dental clinics, cosmetic dentists, and orthodontic practices with 1 to 4 doctors.",
    "Practices looking to increase high-value treatments like implants, aligners, and cosmetic veneers.",
    "Dentists who want a professional, modern web presence with automated review generation and full asset ownership.",
  ],
  notFit: [
    "Corporate DSOs looking for national enterprise ERP overhauls.",
    "Practices that do not want to respond to or accommodate new patient inquiries.",
  ],
  faqs: [
    {
      question: "Will this integrate with our dental practice management software (e.g., Dentrix, Eaglesoft, Curve)?",
      answer:
        "Yes. We configure online booking and intake systems to fit smoothly alongside your existing practice workflows, sending appointment notifications and patient contact details directly to your front desk.",
    },
    {
      question: "How do you help us get more 5-star Google reviews?",
      answer:
        "We set up an automated SMS workflow that sends a courteous review link to patients shortly after their appointment, making it effortless for them to rate your clinic on Google Maps.",
    },
    {
      question: "Can we focus specifically on cosmetic dentistry or dental implants?",
      answer:
        "Absolutely. We build dedicated treatment landing pages and targeted local ad campaigns specifically crafted to attract high-margin cosmetic, restorative, or orthodontic patients.",
    },
    {
      question: "Who owns the website and Google Business Profile?",
      answer:
        "You do. We build everything under your practice's ownership. If you ever leave, you keep all assets, reviews, and data.",
    },
  ],
  finalCtaHeading: "Ready to fill your dental practice calendar?",
  finalCtaBody:
    "Get a free audit of your dental website, Google Maps ranking, and patient booking flow. We'll show you exactly how to capture more local patients.",
};

export const REAL_ESTATE_CONTENT: IndustryPageContent = {
  slug: "real-estate",
  name: "Real Estate",
  badge: "For Top-Producing Agents, Teams & Boutique Brokerages",
  industryTag: "Real Estate & Brokerages",
  metaTitle: "Lead Generation & Listing Marketing for Real Estate | AK Nexus",
  metaDescription:
    "High-converting real estate websites, automated buyer/seller lead follow-up, local SEO, and hyper-local listing ads. You own everything.",
  h1: "Turn local property searches into high-intent buyers and listings.",
  heroSubhead:
    "We build your luxury real estate website, local search presence, automated lead qualification, and listing ad campaigns for one monthly fee. Stop letting portal leads slip away.",
  trustLine:
    "Month-to-month after 3 months · Instant lead speed-to-contact · Neighborhood SEO · You own your CRM data & brand",
  stats: [
    { number: "< 60 Sec", label: "Speed-to-Lead Response", sublabel: "Instant automated SMS & alert" },
    { number: "100%", label: "Brand & Contact Ownership", sublabel: "Never lose your sphere of influence" },
    { number: "Hyper-Local", label: "Neighborhood SEO", sublabel: "Dominance for community keywords" },
    { number: "3-Month", label: "Initial Phase", sublabel: "Month-to-month with 30-day notice" },
  ],
  problemHeading: "Real estate leads go cold within 5 minutes without automated follow-up.",
  problemSubhead: "Portals like Zillow sell the same lead to 4 agents. The agent who responds in 60 seconds wins the client.",
  problemIntro:
    "Buyers and sellers browse properties late at night and during weekends. If your lead generation relies on manually checking emails between showings, 80% of your leads will sign with another agent before you ever make contact.",
  leaks: [
    {
      title: "Delayed response to buyer and seller inquiries",
      desc: "Studies show contacting a lead within 5 minutes increases conversion rates by 391%. Manual follow-up is simply too slow.",
    },
    {
      title: "Relying solely on expensive third-party portals",
      desc: "Paying thousands per month to portal aggregators who own your client relationship and rent you back your own local market.",
    },
    {
      title: "No neighborhood authority presence",
      desc: "Missing dedicated community guides, school district pages, and market updates that establish you as the go-to local expert.",
    },
    {
      title: "Weak open house and listing capture",
      desc: "Open house visitors scribble illegible details on paper sign-in sheets that never make it into a systematic nurture sequence.",
    },
    {
      title: "Zero automated past-client referral nurture",
      desc: "Past buyers and sellers forget their agent within 2 years because automated home anniversary and equity updates were never set up.",
    },
    {
      title: "Generic brokerage sub-domain websites",
      desc: "Using templated corporate brokerage sub-pages that don't rank on Google and provide zero personal brand equity.",
    },
  ],
  setupHeading: "Your personal real estate digital dominance system.",
  setupSubhead: "Custom luxury branding, lightning-fast lead capture, and automated multi-channel client nurture.",
  features: [
    {
      name: "Custom luxury real estate website",
      description: "Fast, mobile-optimized site showcasing featured listings, neighborhood guides, home valuation tools, and agent story.",
    },
    {
      name: "Instant 60-second lead text & call-back",
      description: "Immediate automated SMS acknowledgement and agent notification the moment a lead requests a showing or home value.",
    },
    {
      name: "Automated seller home valuation funnels",
      description: "Capture listing prospects with dynamic instant home valuation estimates and comparative market analysis requests.",
    },
    {
      name: "Digital open house registration app",
      description: "Sleek QR-code and tablet check-in that automatically logs visitor contact details into instant follow-up sequences.",
    },
    {
      name: "Hyper-local neighborhood SEO",
      description: "Dominate search rankings for specific luxury subdivisions, school districts, condo developments, and zip codes.",
    },
    {
      name: "Hyper-targeted Meta & Google listing ads",
      description: "Just-listed and under-contract social campaigns targeted to high-probability buyers and neighborhood move-ups.",
    },
    {
      name: "Long-term buyer/seller email nurture",
      description: "Bi-weekly market snapshots and property alerts keeping you top-of-mind until prospects are ready to transact.",
    },
    {
      name: "Pipeline & commission tracking",
      description: "Clear monthly dashboard showing lead volume, showing appointments set, listings signed, and closed commissions.",
    },
  ],
  patchworkHeading: "What real estate teams typically pay across fragmented tools.",
  patchworkRows: [
    { vendor: "Real estate CRM & IDX website", cost: "$400 – $800 / mo" },
    { vendor: "Speed-to-lead & SMS tool", cost: "$150 – $300 / mo" },
    { vendor: "Real estate ad management agency", cost: "$1,500 – $3,000 / mo" },
    { vendor: "Neighborhood SEO & content", cost: "$400 – $800 / mo" },
    { vendor: "Home valuation landing page tool", cost: "$100 – $200 / mo" },
  ],
  patchworkTotal: "$2,550+ / mo (plus your time stitching APIs together)",
  nexusPrice: "From $1,000 to $2,000 / mo as your all-in-one marketing operations team",
  comparisonNote: "One dedicated team handling your custom web presence, local SEO, listing campaigns, and lead automation.",
  howItWorksHeading: "Live in weeks. Built around your active transaction schedule.",
  howItWorksSteps: [
    {
      step: "01",
      title: "Market & Brand Audit",
      desc: "We review your existing website, Google Business presence, lead response speed, and target farm areas.",
      duration: "Within 48 hours",
    },
    {
      step: "02",
      title: "Geographic Farm & Target Strategy",
      desc: "We select your priority subdivisions, price points, and buyer/seller campaign workflows.",
      duration: "Week 1",
    },
    {
      step: "03",
      title: "Website, Valuation Tools & Lead Automations",
      desc: "We build your custom web presence, valuation tools, open house funnels, and automated SMS sequences.",
      duration: "Weeks 1 – 3",
    },
    {
      step: "04",
      title: "Mobile App Walkthrough & Launch",
      desc: "We test every lead notification directly on your smartphone to ensure zero friction during open houses and showings.",
      duration: "Week 3",
    },
    {
      step: "05",
      title: "Monthly Local SEO & Listing Campaigns",
      desc: "Ongoing neighborhood ranking, listing promotions, review generation, and monthly ROI review calls.",
      duration: "Ongoing monthly",
    },
  ],
  resultsHeading: "Faster lead response. More exclusive listings.",
  resultsSubhead: "Real systems delivering predictable transactions for agents and boutique brokerages.",
  resultsMetrics: [
    {
      stat: "< 60s",
      label: "Average Speed-to-Lead",
      detail: "Engage prospective buyers and sellers while they are actively looking at properties on their phone.",
    },
    {
      stat: "3.4x",
      label: "Open House Lead Conversion",
      detail: "Transform open house walk-ins into qualified buyer consultations with automated post-visit text sequences.",
    },
    {
      stat: "100%",
      label: "Direct Database Ownership",
      detail: "Your sphere of influence, contact notes, and past clients remain your private intellectual property.",
    },
  ],
  ownershipHeading: "You own your brand, database, and marketing assets.",
  ownershipPoints: [
    "Your website, domain, and custom design belong 100% to you, independent of your brokerage affiliation.",
    "Your entire CRM database and client history can be exported whenever you need.",
    "Google Business Profile and ad accounts are established directly in your name.",
    "Month-to-month flexibility after the initial 90-day setup and launch.",
  ],
  complianceHeading: "Real estate advertising rules & Fair Housing compliance.",
  complianceBody:
    "All marketing materials, ad campaigns, and website copy are built strictly in compliance with Fair Housing guidelines, state real estate commission regulations, and local brokerage disclosure requirements.",
  clientInfoHeading: "Data protection for your high-net-worth clients.",
  clientInfoBody:
    "We enforce enterprise-grade security, encrypted database access, and strict data privacy standards across your client contact records.",
  goodFit: [
    "Top-producing solo agents, team leaders, and boutique independent brokerages.",
    "Agents wanting to establish dominant authority in specific geographic farm areas.",
    "Real estate professionals who want automated speed-to-lead without managing 6 separate software subscriptions.",
  ],
  notFit: [
    "Brand new part-time agents without an active business plan or marketing budget.",
    "Agents relying solely on brokerage-provided sub-pages without building personal brand equity.",
  ],
  faqs: [
    {
      question: "Can I take my website and database if I change brokerages?",
      answer:
        "Yes! One of the biggest advantages of AK Nexus is that your website, domain, ad accounts, and CRM database belong to you, not your broker.",
    },
    {
      question: "How does the automated speed-to-lead text work?",
      answer:
        "When a prospective buyer or seller submits an inquiry, our system immediately sends a personalized SMS on your behalf within 60 seconds and notifies your phone instantly so you can step in seamlessly.",
    },
    {
      question: "Do you run listing ads when we get a new property?",
      answer:
        "Yes. Under our Scale plan, we build and manage targeted Google and Meta campaigns for new listings, open houses, and price improvements to generate high-intent buyer and seller inquiries.",
    },
    {
      question: "What is the contract commitment?",
      answer:
        "A 3-month initial onboarding and build phase, followed by month-to-month service with 30 days' notice.",
    },
  ],
  finalCtaHeading: "Ready to dominate your local real estate farm?",
  finalCtaBody:
    "Get a free audit of your real estate website, local search visibility, and lead response workflow. See where you are losing transactions.",
};

export const SALONS_CONTENT: IndustryPageContent = {
  slug: "salons",
  name: "Salons & Med Spas",
  badge: "For Luxury Salons, Med Spas & Aesthetic Clinics",
  industryTag: "Salons & Aesthetic Clinics",
  metaTitle: "Client Booking & Marketing Systems for Salons & Med Spas | AK Nexus",
  metaDescription:
    "Stunning websites, automated 24/7 appointment booking, Instagram/Google integration, and high-value treatment funnels for luxury salons and med spas.",
  h1: "Keep your treatment rooms and stylist chairs fully booked.",
  heroSubhead:
    "We build your luxury aesthetic website, automated booking funnels, local Google Maps rank, and VIP client retention workflows for one predictable monthly fee.",
  trustLine:
    "Month-to-month after 3 months · 24/7 self-scheduling · Automated review builder · You own your client database",
  stats: [
    { number: "24/7", label: "Frictionless Booking", sublabel: "Self-scheduling from Instagram & web" },
    { number: "< 3%", label: "Appointment No-Shows", sublabel: "With smart multi-channel SMS reminders" },
    { number: "100%", label: "Client List Ownership", sublabel: "Direct CRM & campaign data control" },
    { number: "3-Month", label: "Setup Phase", sublabel: "Month-to-month flexibility thereafter" },
  ],
  problemHeading: "Aesthetic clients book after 8 PM on their phones. If booking is difficult, they choose another salon.",
  problemSubhead: "Luxury clients judge your treatments by the quality of your website and how easy it is to schedule.",
  problemIntro:
    "Potential clients looking for HydraFacials, laser treatments, injectables, or high-end hair color discover you on Instagram or Google Maps. If your website takes 6 seconds to load or requires them to call during business hours, they immediately book with the med spa down the street.",
  leaks: [
    {
      title: "DM and voicemail booking bottlenecks",
      desc: "Clients trying to book via Instagram DMs or phone calls while staff are actively treating clients, resulting in lost bookings.",
    },
    {
      title: "Costly appointment cancellations & no-shows",
      desc: "Valuable 90-minute treatment slots left empty because automated multi-channel SMS confirmations were not sent.",
    },
    {
      title: "Zero automated membership & rebooking nurture",
      desc: "Clients finish their treatment and leave without automated reminders to schedule their 4-week maintenance appointment.",
    },
    {
      title: "Lagging Google Maps reviews",
      desc: "Competitors with automated review requests outrank your clinic on Google Maps, stealing high-intent local searchers.",
    },
    {
      title: "Low-converting treatment menu pages",
      desc: "Cluttered text PDF menus that don't explain treatment benefits or display before-and-after results effectively on mobile.",
    },
    {
      title: "Expensive 'all-in-one' marketing retainers",
      desc: "Paying social media agencies thousands for pretty posts that generate zero booked appointments.",
    },
  ],
  setupHeading: "The complete luxury client acquisition engine.",
  setupSubhead: "From stunning mobile-first web design to frictionless booking and automated VIP retention.",
  features: [
    {
      name: "Luxury mobile-first aesthetic website",
      description: "A gorgeous, ultra-fast website showcasing treatments, provider bios, before/after galleries, and instant booking.",
    },
    {
      name: "Direct 24/7 online appointment booking",
      description: "Seamless self-scheduling integrated with your service menu and practitioner availability.",
    },
    {
      name: "Automated 2-way SMS reminder flows",
      description: "Personalized appointment confirmations, directions, and prep instructions that slash no-shows to under 3%.",
    },
    {
      name: "Automated 5-star Google review engine",
      description: "Trigger polite review requests after positive appointments to dominate local Google 3-Pack rankings.",
    },
    {
      name: "VIP rebooking & membership sequences",
      description: "Automated check-ins at 3, 6, and 12-week intervals prompting clients to book their recurring maintenance treatments.",
    },
    {
      name: "High-ticket treatment funnels (Botox, Laser, Body)",
      description: "Dedicated consultation landing pages designed to acquire high-value injectable and package clients.",
    },
    {
      name: "Instagram & Meta booking integration",
      description: "Direct 'Book Now' integration allowing social media followers to schedule in 3 taps without leaving Instagram.",
    },
    {
      name: "Monthly revenue & booking attribution",
      description: "Transparent reports showing exactly which search terms, ads, and channels drove signed packages and treatments.",
    },
  ],
  patchworkHeading: "What salons & med spas typically spend on disconnected software.",
  patchworkRows: [
    { vendor: "Online booking & salon software", cost: "$150 – $350 / mo" },
    { vendor: "SMS marketing & reminder service", cost: "$100 – $250 / mo" },
    { vendor: "Aesthetic marketing agency retainer", cost: "$1,800 – $3,500 / mo" },
    { vendor: "Website hosting & maintenance", cost: "$150 – $300 / mo" },
    { vendor: "Review generation tool", cost: "$150 – $300 / mo" },
  ],
  patchworkTotal: "$2,350+ / mo (with messy integrations & duplicate client records)",
  nexusPrice: "From $1,000 to $2,000 / mo as your dedicated front-office growth team",
  comparisonNote: "One unified system that handles your web presence, booking automations, local SEO, and client retention.",
  howItWorksHeading: "Live in weeks. Stress-free onboarding for your team.",
  howItWorksSteps: [
    {
      step: "01",
      title: "Brand & Booking Audit",
      desc: "We review your treatment menu, online scheduling friction, Instagram bio links, and Google Maps standing.",
      duration: "Within 48 hours",
    },
    {
      step: "02",
      title: "Treatment & Pricing Alignment",
      desc: "We map out your high-margin treatments, provider schedules, and automated rebooking intervals.",
      duration: "Week 1",
    },
    {
      step: "03",
      title: "Website, Booking & Automation Build",
      desc: "We craft your luxury website, configure online booking, and write personalized SMS reminder and review sequences.",
      duration: "Weeks 1 – 3",
    },
    {
      step: "04",
      title: "Staff Testing & Launch",
      desc: "We test appointment workflows end-to-end and ensure front desk staff are fully confident with the unified inbox.",
      duration: "Week 3",
    },
    {
      step: "05",
      title: "Monthly Local SEO & Retention Reviews",
      desc: "Ongoing local ranking optimization, package promotions, review building, and monthly performance reviews.",
      duration: "Ongoing monthly",
    },
  ],
  resultsHeading: "Full calendars. Loyal VIP clients.",
  resultsSubhead: "Proven systems that increase appointment volume and average client lifetime value.",
  resultsMetrics: [
    {
      stat: "+42%",
      label: "After-Hours Bookings",
      detail: "Capturing appointments from clients browsing late at night on mobile devices without staff intervention.",
    },
    {
      stat: "< 3%",
      label: "No-Show & Cancellation Rate",
      detail: "Automated SMS confirmations with prep guidelines ensure clients show up prepared and on time.",
    },
    {
      stat: "2.8x",
      label: "Client Rebooking Frequency",
      detail: "Timed reminder workflows ensure clients rebook their maintenance treatments on a predictable cycle.",
    },
  ],
  ownershipHeading: "You own 100% of your salon and med spa assets.",
  ownershipPoints: [
    "Your website, custom imagery, domain, and branding belong entirely to your business.",
    "Your client database, appointment history, and contact details can be exported at any time.",
    "Google Business Profiles, social accounts, and ad accounts remain under your ownership.",
    "Month-to-month agreement after the initial 3-month setup and launch period.",
  ],
  complianceHeading: "Aesthetic marketing compliance & medical disclaimers.",
  complianceBody:
    "We build med spa treatment pages with required medical director disclaimers, clear consent disclosures, and compliance with healthcare advertising guidelines for elective medical procedures.",
  clientInfoHeading: "Strict privacy standards for your clientele.",
  clientInfoBody:
    "All client booking details, appointment notes, and contact lists are protected with encrypted transmission and secure multi-factor authentication.",
  goodFit: [
    "Luxury hair salons, aesthetic med spas, laser clinics, and cosmetic dermatology practices.",
    "Owners who want to fill stylist chairs and practitioner treatment rooms with high-margin services.",
    "Practices looking for a modern, high-end web presence with automated 24/7 booking.",
  ],
  notFit: [
    "Single-chair popups with no intention of growing an established local brand.",
    "Businesses unwilling to adopt automated online scheduling.",
  ],
  faqs: [
    {
      question: "Will this integrate with Boulevard, Vagaro, Zenoti, or Mindbody?",
      answer:
        "Yes. We integrate directly with leading salon and med spa scheduling platforms so bookings sync seamlessly with your live provider calendar.",
    },
    {
      question: "Can we run promotions for high-ticket packages like CoolSculpting or Botox?",
      answer:
        "Yes! Under our Growth and Scale plans, we build high-converting package landing pages and targeted local ad campaigns to drive consultation bookings.",
    },
    {
      question: "How does the automated rebooking sequence work?",
      answer:
        "Our system automatically identifies when a client is approaching their ideal treatment interval (e.g. 4 weeks for facials, 12 weeks for Botox) and sends a polite text invite to book their next visit.",
    },
    {
      question: "What is the contract term?",
      answer:
        "A 3-month initial commitment to build, launch, and optimize your systems, followed by month-to-month service with 30 days' notice.",
    },
  ],
  finalCtaHeading: "Ready to fill your salon & med spa schedule?",
  finalCtaBody:
    "Get a free audit of your salon or med spa website, booking friction, and local search visibility. Discover how to attract more loyal clients.",
};

export const ACCOUNTING_CONTENT: IndustryPageContent = {
  slug: "accounting",
  name: "Accounting & CPA Firms",
  badge: "For Solo CPAs, Tax Strategists & Boutique Accounting Firms",
  industryTag: "Accounting & CPA Practices",
  metaTitle: "Client Intake & Marketing Systems for CPA & Accounting Firms | AK Nexus",
  metaDescription:
    "Professional websites, automated discovery call scheduling, secure intake forms, and high-value advisory client funnels for solo CPAs and accounting firms.",
  h1: "Attract high-fee business clients and eliminate intake chaos.",
  heroSubhead:
    "We build and manage your CPA website, discovery call booking, automated client intake, and local SEO for one predictable monthly fee. Stop wasting time on tire-kickers.",
  trustLine:
    "Month-to-month after 3 months · Automated discovery booking · Secure qualification intake · You own everything",
  stats: [
    { number: "< 5 Min", label: "Consultation Scheduling", sublabel: "Automated qualification calendar" },
    { number: "100%", label: "Practice Asset Ownership", sublabel: "Domain, website, CRM & ad accounts" },
    { number: "Filtered", label: "Client Qualification", sublabel: "Pre-screen budget & entity type" },
    { number: "3-Month", label: "Onboarding Phase", sublabel: "Month-to-month thereafter" },
  ],
  problemHeading: "Most CPAs spend 10+ hours a week fielding unqualified leads and chasing paperwork.",
  problemSubhead: "Boutique accounting firms need high-margin monthly advisory clients, not low-fee 1040 headaches.",
  problemIntro:
    "When business owners look for a new CPA, fractional CFO, or corporate tax strategist, they search for proven expertise and clear communication. If your website looks outdated or sends inquiries to a cluttered inbox, high-value business clients move on to a modern firm.",
  leaks: [
    {
      title: "Unqualified prospect discovery calls",
      desc: "Spending 30 minutes on the phone with micro-clients who cannot afford your monthly advisory fees.",
    },
    {
      title: "Manual back-and-forth email scheduling",
      desc: "Wasting dozens of emails trying to coordinate consultation times during busy tax and closing cycles.",
    },
    {
      title: "Outdated, generic brochure websites",
      desc: "Stock photo accounting websites that fail to articulate your industry specialization and advisory value.",
    },
    {
      title: "Missing year-round client acquisition",
      desc: "Suffering through seasonal tax surges followed by slow summer months without steady recurring advisory leads.",
    },
    {
      title: "Zero automated onboarding document collection",
      desc: "Chasing new clients for tax returns, entity documents, and bank statements with manual one-off emails.",
    },
    {
      title: "Lack of local Google search visibility",
      desc: "Ranking on page 3 of Google while competing local CPA firms capture all corporate tax searches.",
    },
  ],
  setupHeading: "A modern front office built for high-value advisory practices.",
  setupSubhead: "Streamline client qualification, automate discovery calls, and attract predictable business retainers.",
  features: [
    {
      name: "Authority-building CPA website",
      description: "Fast, mobile-optimized site positioned around high-margin business advisory, tax planning, and fractional CFO services.",
    },
    {
      name: "Pre-call qualification intake forms",
      description: "Screen prospective clients by revenue, entity type (S-Corp, LLC, C-Corp), and service needs before they can book your calendar.",
    },
    {
      name: "Automated discovery call scheduling",
      description: "Allow qualified business owners to self-schedule initial consultations directly on your synchronized calendar.",
    },
    {
      name: "Instant inquiry response & confirmation",
      description: "Immediate courteous email acknowledgement and calendar confirmation with preparation instructions.",
    },
    {
      name: "Multi-channel consultation reminders",
      description: "Automated email and SMS reminders that reduce consultation no-shows to near zero.",
    },
    {
      name: "Year-round advisory client nurture",
      description: "Quarterly tax planning and financial insights email sequences that turn warm prospects into recurring monthly retainers.",
    },
    {
      name: "Local SEO & Google Business Profile dominance",
      description: "Dominate search results for 'business CPA near me', 'corporate tax accountant', and 'fractional CFO'.",
    },
    {
      name: "Client acquisition reporting",
      description: "Clear monthly dashboard showing consultation volume, qualified pipeline value, and marketing ROI.",
    },
  ],
  patchworkHeading: "What CPA firms spend across fragmented software tools.",
  patchworkRows: [
    { vendor: "Scheduling & calendar software", cost: "$50 – $150 / mo" },
    { vendor: "Form builder & lead qualification tool", cost: "$50 – $150 / mo" },
    { vendor: "Professional services marketing agency", cost: "$1,800 – $3,500 / mo" },
    { vendor: "Website hosting & maintenance", cost: "$150 – $300 / mo" },
    { vendor: "Local SEO & citation services", cost: "$200 – $400 / mo" },
  ],
  patchworkTotal: "$2,250+ / mo (plus dozens of administrative hours managing it)",
  nexusPrice: "From $1,000 to $2,000 / mo as your dedicated marketing operations team",
  comparisonNote: "One unified team managing your web presence, qualification funnels, local SEO, and client pipeline.",
  howItWorksHeading: "Live in weeks, with minimal time required from you.",
  howItWorksSteps: [
    {
      step: "01",
      title: "Practice & Positioning Audit",
      desc: "We analyze your current website, service tiering, ideal client criteria, and local search footprint.",
      duration: "Within 48 hours",
    },
    {
      step: "02",
      title: "Ideal Client Qualification Mapping",
      desc: "We configure your qualification criteria (revenue thresholds, software stack, service scopes) and intake rules.",
      duration: "Week 1",
    },
    {
      step: "03",
      title: "Website, Intake & Automation Build",
      desc: "We craft your modern website, automated qualification calendar, and personalized email confirmation sequences.",
      duration: "Weeks 1 – 3",
    },
    {
      step: "04",
      title: "System Testing & Go-Live",
      desc: "We rigorously test every qualification funnel, calendar sync, and notification before launching.",
      duration: "Week 3",
    },
    {
      step: "05",
      title: "Monthly Local SEO & Growth Optimization",
      desc: "Ongoing business search optimization, content updates, and monthly pipeline review calls.",
      duration: "Ongoing monthly",
    },
  ],
  resultsHeading: "Higher-value retainers. Zero administrative wasted time.",
  resultsSubhead: "Proven systems that position your CPA practice as the premier business advisory firm.",
  resultsMetrics: [
    {
      stat: "85%",
      label: "Qualified Discovery Calls",
      detail: "Eliminate low-budget tire-kickers with automated pre-call revenue and entity qualification forms.",
    },
    {
      stat: "6+ Hrs",
      label: "Saved Per Week",
      detail: "Automated scheduling, reminders, and intake collection free up partner hours for billable advisory work.",
    },
    {
      stat: "100%",
      label: "Asset & Data Ownership",
      detail: "Your domain, website code, client database, and ad accounts remain 100% under your practice ownership.",
    },
  ],
  ownershipHeading: "Nothing here is held hostage.",
  ownershipPoints: [
    "Your website, domain, and custom design belong 100% to your firm.",
    "Your client database and intake records can be exported at any time in standard formats.",
    "Google Business Profile, Google Ads, and analytics accounts are set up in your firm's name.",
    "Month-to-month agreement after the initial 90-day onboarding period.",
  ],
  complianceHeading: "Confidentiality and professional advertising ethics.",
  complianceBody:
    "We design intake forms that collect only top-level business operational information, ensuring no sensitive tax identification numbers (SSN/EIN) or confidential financial data are transmitted through unencrypted channels.",
  clientInfoHeading: "Enterprise-grade data security.",
  clientInfoBody:
    "All web forms, CRM records, and lead data utilize encrypted protocols, multi-factor authentication, and strict access controls.",
  goodFit: [
    "Solo CPAs, tax advisory practices, and boutique accounting firms with 1 to 5 team members.",
    "Firms seeking to grow monthly recurring advisory, bookkeeping, and fractional CFO retainers.",
    "Partners who want a modern web presence that filters out unqualified leads automatically.",
  ],
  notFit: [
    "High-volume storefront retail tax preparers focused only on $99 individual returns.",
    "Large enterprise regional accounting firms with in-house CMOs and marketing teams.",
  ],
  faqs: [
    {
      question: "Will this integrate with our practice management software (e.g., Karbon, Canopy, TaxDome)?",
      answer:
        "Yes. We configure qualification forms and calendar scheduling to integrate smoothly with your existing practice workflows, sending new lead details directly into your pipeline.",
    },
    {
      question: "Can we filter out low-fee individual tax inquiries?",
      answer:
        "Absolutely. We implement custom pre-booking screening questions that direct low-fee inquiries to a self-serve resource while prioritizing high-value business advisory clients for your calendar.",
    },
    {
      question: "How does Local SEO help an accounting firm?",
      answer:
        "Business owners actively search for local CPAs when establishing new entities or seeking tax strategy. We optimize your Google Business Profile and local citations so your firm ranks at the top of local search.",
    },
    {
      question: "What is the contract commitment?",
      answer:
        "A 3-month initial commitment to build, launch, and optimize your systems, followed by month-to-month service with 30 days' notice.",
    },
  ],
  finalCtaHeading: "Ready to attract high-fee business clients?",
  finalCtaBody:
    "Get a free audit of your accounting firm's website, lead intake friction, and local search visibility. We'll show you how to streamline your client acquisition.",
};

export const HOME_SERVICES_CONTENT: IndustryPageContent = {
  slug: "home-services",
  name: "Home Services",
  badge: "For Roofing, HVAC, Plumbing & Electrical Contractors",
  industryTag: "Roofing, HVAC & Home Contracting",
  metaTitle: "Lead Generation & Speed-to-Lead Systems for Contractors | AK Nexus",
  metaDescription:
    "High-converting contractor websites, instant missed-call text-back, local Google 3-Pack SEO, and high-intent job ads for home service contractors.",
  h1: "Turn emergency repair searches into high-margin booked jobs.",
  heroSubhead:
    "We run your contractor website, instant speed-to-lead automations, local Google map rankings, and job review generation for one predictable monthly fee.",
  trustLine:
    "Month-to-month after 3 months · Instant missed-call text-back · Local 3-Pack SEO · You own your domain & lead database",
  stats: [
    { number: "< 60 Sec", label: "Speed-to-Lead Response", sublabel: "Instant missed-call text-back" },
    { number: "100%", label: "Contractor Asset Ownership", sublabel: "Domain, website, reviews & accounts" },
    { number: "3-Pack", label: "Google Maps Domination", sublabel: "Hyper-local service area ranking" },
    { number: "3-Month", label: "Initial Phase", sublabel: "Month-to-month with 30-day notice" },
  ],
  problemHeading: "Homeowners with a roof leak or broken AC call 3 contractors. The first one to reply gets the job.",
  problemSubhead: "If your phone rings to voicemail while you're on a job site, you're handing $5,000+ jobs directly to your competitor.",
  problemIntro:
    "When a homeowner experiences a plumbing leak, furnace failure, or storm roof damage, they search on their phone and start calling top-rated local contractors. If you don't answer or text back within 2 minutes, they immediately hire the next contractor on Google.",
  leaks: [
    {
      title: "Missed phone calls on job sites",
      desc: "You're on a ladder or under a sink and can't answer. The homeowner immediately calls the next contractor on Google.",
    },
    {
      title: "Slow quote and estimate follow-up",
      desc: "Delivering estimates days later without automated text check-ins, allowing competitors to close the job first.",
    },
    {
      title: "Weak Google Business 3-Pack rank",
      desc: "Ranking on page 2 while local competitors with automated 5-star review generation take 80% of phone calls.",
    },
    {
      title: "Cluttered, slow-loading mobile sites",
      desc: "Websites that take 5+ seconds to load on mobile phones without clear click-to-call buttons.",
    },
    {
      title: "Wasting thousands on shared lead platforms",
      desc: "Paying HomeAdvisor/Angi for shared leads that are sold to 5 other contractors at the exact same moment.",
    },
    {
      title: "Hostage marketing contracts",
      desc: "Paying directory agencies $2,000/mo who own your website and take down your phone number if you cancel.",
    },
  ],
  setupHeading: "The complete contractor job acquisition engine.",
  setupSubhead: "Dominate local Google search, respond instantly to every missed call, and generate consistent 5-star reviews.",
  features: [
    {
      name: "High-converting contractor website",
      description: "Fast, mobile-optimized site built to turn emergency searches into phone calls and quote requests with sticky click-to-call buttons.",
    },
    {
      name: "Instant missed-call text-back",
      description: "Automatically text callers within 30 seconds when you can't answer: 'Hi, I'm on a job site—how can we help you today?'",
    },
    {
      name: "Local Google Maps (GBP) optimization",
      description: "Hyper-local citation building, geo-tagged project photos, and category optimization to rank in the local 3-Pack.",
    },
    {
      name: "Automated 5-star review generation",
      description: "Post-job SMS triggers asking happy homeowners for Google reviews, steadily building an unstoppable local reputation.",
    },
    {
      name: "Online quote & estimate booking",
      description: "Allow residential and commercial customers to book on-site estimate slots directly from your website.",
    },
    {
      name: "Exclusive Google & Meta job ads",
      description: "Hyper-targeted search ads capturing emergency repair queries and seasonal installation jobs directly for your firm.",
    },
    {
      name: "Automated quote follow-up sequences",
      description: "Polite SMS and email check-ins after sending estimates, increasing closed job rates by up to 35%.",
    },
    {
      name: "Call tracking & job revenue reporting",
      description: "Know exactly which marketing channel generated each phone call, estimate request, and closed job.",
    },
  ],
  patchworkHeading: "What contractors typically spend across fragmented vendors.",
  patchworkRows: [
    { vendor: "Shared lead broker fees (Angi/HomeAdvisor)", cost: "$800 – $2,000 / mo" },
    { vendor: "Missed-call & SMS software", cost: "$150 – $300 / mo" },
    { vendor: "Contractor marketing agency retainer", cost: "$1,800 – $3,500 / mo" },
    { vendor: "Website hosting & maintenance", cost: "$150 – $300 / mo" },
    { vendor: "Review request tool", cost: "$150 – $300 / mo" },
  ],
  patchworkTotal: "$3,050+ / mo (competing against 5 contractors for the same shared lead)",
  nexusPrice: "From $1,000 to $2,000 / mo for 100% exclusive leads & complete asset ownership",
  comparisonNote: "Build your own exclusive pipeline instead of renting shared leads from middleman directories.",
  howItWorksHeading: "Live in weeks. We handle the technology while you build.",
  howItWorksSteps: [
    {
      step: "01",
      title: "Service Area & Competition Audit",
      desc: "We analyze your top service areas, high-margin job types, Google Maps ranking, and review volume against local competitors.",
      duration: "Within 48 hours",
    },
    {
      step: "02",
      title: "Trade Specialization & Workflow Setup",
      desc: "We map out your service radius, high-profit jobs (replacements, re-roofs, emergency service), and dispatch preferences.",
      duration: "Week 1",
    },
    {
      step: "03",
      title: "Website, Missed-Call & Review Build",
      desc: "We build your mobile-first website, configure instant missed-call text-backs, and write automated review request sequences.",
      duration: "Weeks 1 – 3",
    },
    {
      step: "04",
      title: "Field Testing & Go-Live",
      desc: "We test call forwarding, instant text-backs, and estimate booking directly on your smartphone before launching.",
      duration: "Week 3",
    },
    {
      step: "05",
      title: "Monthly Local 3-Pack SEO & Ad Management",
      desc: "Continuous Google Maps ranking optimization, review expansion, ad management, and monthly job attribution reports.",
      duration: "Ongoing monthly",
    },
  ],
  resultsHeading: "More exclusive calls. Higher-margin jobs.",
  resultsSubhead: "Proven systems that keep contractor crews busy year-round without buying shared directory leads.",
  resultsMetrics: [
    {
      stat: "< 30s",
      label: "Missed-Call Text Response",
      detail: "Instantly captures homeowners before they dial the next contractor on Google Maps.",
    },
    {
      stat: "100%",
      label: "Exclusive Inquiries",
      detail: "Every call and quote request belongs solely to your company—never sold to 5 competitors.",
    },
    {
      stat: "+45%",
      label: "Review Velocity Increase",
      detail: "Automated post-job text requests build an authoritative Google rating that dominates local search.",
    },
  ],
  ownershipHeading: "You own 100% of your contractor marketing assets.",
  ownershipPoints: [
    "Your website, custom imagery, domain, and phone numbers belong 100% to your company.",
    "Your customer database and past job history can be exported whenever you wish.",
    "Google Business Profile, Google Ads, and review history remain under your company ownership.",
    "Month-to-month agreement after the initial 90-day setup and launch period.",
  ],
  complianceHeading: "Trade licensing disclosures and service guarantees.",
  complianceBody:
    "We prominently feature your state contractor license numbers, insurance coverage badges, and manufacturer certifications to build immediate trust with homeowners.",
  clientInfoHeading: "Secure customer contact management.",
  clientInfoBody:
    "All homeowner phone numbers, addresses, and quote requests are stored securely in your private CRM with multi-factor authentication.",
  goodFit: [
    "Roofing, HVAC, Plumbing, Electrical, and General Remodeling contractors with 1 to 5 service crews.",
    "Contractors sick of paying for shared leads from HomeAdvisor/Angi and wanting their own exclusive pipeline.",
    "Owners who want automated missed-call text-backs so they never lose a job while working on site.",
  ],
  notFit: [
    "Contractors who do not have proper trade licensing or liability insurance.",
    "Companies unable to take on additional residential or commercial jobs.",
  ],
  faqs: [
    {
      question: "How does the missed-call text-back work on job sites?",
      answer:
        "When a homeowner calls your business line and you can't answer, our system immediately sends a customized text message within 30 seconds asking how you can help. 70% of homeowners reply immediately instead of calling another contractor.",
    },
    {
      question: "Are the leads exclusive to my company?",
      answer:
        "Yes, 100%. Unlike Angi, HomeAdvisor, or Thumbtack where leads are sold to 3-5 contractors simultaneously, every call and form submission from your website belongs exclusively to you.",
    },
    {
      question: "How long does it take to start ranking on Google Maps?",
      answer:
        "Missed-call text-back and Google Ads generate immediate results in week 1 of launch. Organic Google 3-Pack optimization and review acceleration typically build dominant rankings over 60 to 90 days.",
    },
    {
      question: "What is the contract term?",
      answer:
        "A 3-month initial commitment to build, launch, and optimize your systems, followed by flexible month-to-month service with 30 days' notice.",
    },
  ],
  finalCtaHeading: "Ready to dominate your local service territory?",
  finalCtaBody:
    "Get a free audit of your contractor website, Google Maps ranking, and missed-call follow-up. Discover how to keep your crews booked solid.",
};

export const ROOFERS_CONTENT: IndustryPageContent = {
  slug: "roofers",
  name: "Roofing Companies",
  badge: "For Local Roofing Contractors & Crews",
  industryTag: "Roofing & Storm Restoration",
  metaTitle: "Local SEO, Intake & Growth Systems for Roofers | AK Nexus",
  metaDescription:
    "Outrank storm chasers, capture high-ticket roof replacement searches, and dominate the Google Map Pack with speed-to-lead automation and 100% asset ownership.",
  h1: "Be the trusted local name that beats the storm chasers.",
  heroSubhead:
    "After every hail storm, out-of-town crews flood your market, undercut prices, and vanish. We build the permanent local authority, high-converting intake, and Map Pack dominance that keeps your crews booked year-round.",
  trustLine:
    "Month-to-month after 3 months · 100% Client Asset Ownership · Storm & Insurance Keyword Focus",
  stats: [
    { number: "15–20 Yrs", label: "Purchase Frequency", sublabel: "Requires ongoing search demand" },
    { number: "< 30s", label: "Missed-Call Text Reply", sublabel: "Captures callers while on the roof" },
    { number: "100%", label: "Exclusive Inquiries", sublabel: "Never sold to 5 competitors" },
    { number: "Top 3", label: "Map Pack Placement", sublabel: "First call when storms hit" },
  ],
  problemHeading: "Roofing is a high-ticket, once-a-decade purchase with brutal storm competition.",
  problemSubhead: "Word of mouth alone won't keep multiple crews busy—and transient storm chasers shouldn't steal your neighborhood.",
  problemIntro:
    "Homeowners only replace a roof once every 15 to 20 years. When severe hail strikes or a sudden leak happens, they don't wait for a referral—they search 'roof repair near me' or 'storm damage roofing contractor'. If your company isn't ranking in the top 3 of Google Maps with rapid response times and pristine reviews, that $15k–$30k insurance job goes to an out-of-town crew.",
  leaks: [
    {
      title: "Storm chasers flooding your backyard",
      desc: "Every hail event brings transient, out-of-state crews who blanket neighborhoods, undercut prices, and vanish after checks clear—eroding local trust and stealing your leads.",
    },
    {
      title: "Missed calls while working on the roof",
      desc: "When you or your crew are on a roof, phone calls go to voicemail. Homeowners in urgent distress simply dial the next roofer on Google Maps.",
    },
    {
      title: "Invisible during post-storm search surges",
      desc: "Searches for 'roof replacement' and 'storm damage inspection' spike overnight after hail. If you aren't already ranking, that surge of insurance-backed work goes to competitors.",
    },
    {
      title: "Homeowner skepticism & thin reviews",
      desc: "Due to industry horror stories, homeowners vet roofers intensely. A thin online profile or sparse reviews makes even a great local business look risky.",
    },
    {
      title: "Burning thousands on shared lead platforms",
      desc: "Paying brokers like Angi, HomeAdvisor, or Thumbtack for shared leads that are sold to 4 other roofers at the exact same moment.",
    },
    {
      title: "Agency lock-in & rented assets",
      desc: "Paying typical marketing agencies thousands per month who lock you into 12-month retainers and keep your website or CRM data when you leave.",
    },
  ],
  setupHeading: "A permanent local growth engine built specifically for roofers.",
  setupSubhead: "Dominate high-margin replacement searches, respond instantly from job sites, and turn clicks into booked roof inspections.",
  features: [
    {
      name: "High-converting roofing website",
      description: "Fast, mobile-first design with dedicated pages for roof replacement, storm damage repair, hail inspection, and commercial roofing.",
    },
    {
      name: "Instant missed-call text-back",
      description: "Automatically text callers within 30 seconds while you're on a roof: 'Hi, I'm on a job site—how can our roofing team help you today?'",
    },
    {
      name: "Google Business Profile & Map Pack dominance",
      description: "Hyper-local citation building, geo-tagged project photos, and category optimization to rank #1 in the local 3-Pack.",
    },
    {
      name: "Storm & insurance keyword targeting",
      description: "Target high-intent searches for insurance claim roof replacements, emergency tarping, and hail damage assessments.",
    },
    {
      name: "Multi-city & subdivision landing pages",
      description: "Dedicated geo-targeted service pages for every city, suburb, and high-value neighborhood in your service territory.",
    },
    {
      name: "Automated 5-star review generation",
      description: "Automated post-inspection and post-installation text prompts that steadily build an unbeatable Google review profile.",
    },
    {
      name: "Trust, warranty & insurance claim content",
      description: "Clear pages highlighting manufacturer certifications (GAF, Owens Corning), financing options, warranties, and insurance claim help.",
    },
    {
      name: "Online inspection & estimate booking",
      description: "Allow residential and commercial property owners to schedule on-site roof inspections directly from your website.",
    },
    {
      name: "Automated estimate follow-up sequences",
      description: "Gentle multi-step SMS and email reminders after providing a roofing bid, dramatically increasing contract close rates.",
    },
    {
      name: "Call tracking & job revenue attribution",
      description: "Track every inbound call, form submission, and signed roofing contract back to its exact marketing source.",
    },
  ],
  patchworkHeading: "What roofers typically spend across fragmented vendors.",
  patchworkRows: [
    { vendor: "Shared lead broker fees (Angi/HomeAdvisor/Thumbtack)", cost: "$1,200 – $3,000 / mo" },
    { vendor: "Missed-call & SMS software", cost: "$150 – $300 / mo" },
    { vendor: "Roofing SEO agency retainer", cost: "$1,800 – $4,000 / mo" },
    { vendor: "Website hosting & maintenance", cost: "$150 – $300 / mo" },
    { vendor: "Review generation tool", cost: "$150 – $250 / mo" },
  ],
  patchworkTotal: "$3,450+ / mo (and you're still competing against 5 roofers for the same shared lead)",
  nexusPrice: "From $1,000 to $2,000 / mo for 100% exclusive jobs, speed-to-lead & total asset ownership",
  comparisonNote: "Build permanent local equity in your own brand instead of endlessly renting shared leads.",
  howItWorksHeading: "Live in weeks—ready before the next storm season.",
  howItWorksSteps: [
    {
      step: "01",
      title: "Service Territory & Storm Risk Audit",
      desc: "We analyze your service area, historical hail pathways, Google Maps visibility, and competitor review profiles.",
      duration: "Within 48 hours",
    },
    {
      step: "02",
      title: "Roofing Specialization & Workflow Setup",
      desc: "We map out your target job types (full replacements, insurance restorations, commercial flat roofs) and dispatch flow.",
      duration: "Week 1",
    },
    {
      step: "03",
      title: "Website, Missed-Call & Review Build",
      desc: "We build your mobile-optimized website, configure instant missed-call text-backs, and set up automated review sequences.",
      duration: "Weeks 1 – 3",
    },
    {
      step: "04",
      title: "Field Testing & Go-Live",
      desc: "We test call routing, text-back triggers, and inspection booking directly on your smartphone before launching.",
      duration: "Week 3",
    },
    {
      step: "05",
      title: "Map Pack Optimization & Lead Reporting",
      desc: "Continuous Google Maps ranking optimization, review expansion, hyper-targeted ads, and monthly job revenue reports.",
      duration: "Ongoing monthly",
    },
  ],
  resultsHeading: "Real inspections. Real replacements. 100% exclusive.",
  resultsSubhead: "Turn high-intent searchers into signed roofing contracts without buying shared directory leads.",
  resultsMetrics: [
    {
      stat: "4.8x",
      label: "Faster Quote Response",
      detail: "Automated missed-call text-back captures homeowners in under 30 seconds before they call another roofer.",
    },
    {
      stat: "+55%",
      label: "Call-to-Inspection Rate",
      detail: "Clear warranty credentials and streamlined online booking convert casual callers into booked property inspections.",
    },
    {
      stat: "100%",
      label: "Exclusive Lead Pipeline",
      detail: "Every call and quote request belongs solely to your company—never auctioned off to competitors.",
    },
  ],
  ownershipHeading: "You own 100% of your roofing digital assets.",
  ownershipPoints: [
    "Your website, domain, project gallery, and custom content belong 100% to your roofing company.",
    "Your Google Business Profile, Google Ads, and review history remain entirely under your company ownership.",
    "Your complete customer database and estimate history can be exported whenever you choose.",
    "Month-to-month agreement after the initial 90-day setup and launch period.",
  ],
  complianceHeading: "Trade licensing, insurance badges, and warranty compliance.",
  complianceBody:
    "We prominently feature your state contractor license numbers, general liability insurance, worker's comp coverage, and manufacturer certifications (GAF, Owens Corning, CertainTeed) to establish immediate credibility with homeowners and insurance adjusters.",
  clientInfoHeading: "Secure homeowner & claim intake management.",
  clientInfoBody:
    "Homeowner phone numbers, property addresses, damage photos, and insurance claim notes are stored securely in your firm's private CRM with multi-factor authentication.",
  goodFit: [
    "Residential and commercial roofing contractors with 1 to 5 active installation crews.",
    "Contractors sick of paying for shared leads from HomeAdvisor/Angi and wanting their own exclusive pipeline.",
    "Established local roofers who want to build permanent local authority and dominate storm season.",
  ],
  notFit: [
    "Transient storm chasers without local licensing, physical roots, or liability insurance.",
    "Contractors looking for cheap $20 shared leads rather than building a high-ticket local brand.",
  ],
  faqs: [
    {
      question: "How do you help local roofers beat storm chasers?",
      answer:
        "Storm chasers are transient; they flood an area after a storm with out-of-state plates and aggressive door knocking, but they have no permanent local authority, citations, or established Google reviews. We build an authoritative, long-term Google Map Pack presence that ranks above them. When homeowners search for a trusted local company to handle their insurance claim, your company is the first they call.",
    },
    {
      question: "Since a roof is only replaced every 15–20 years, how does local SEO keep our crews busy?",
      answer:
        "Because homeowners rarely buy a roof twice, you cannot rely solely on repeat business or word-of-mouth. Growth depends on capturing the new people actively searching for roof replacement, leak repairs, and storm damage inspection today. Ranking at the top of Google search ensures a predictable, daily stream of high-ticket inquiries.",
    },
    {
      question: "How do we get ranked in time for hail / storm season?",
      answer:
        "You build authority before the storms hit, not during them. We optimize your Google Business Profile, build local citations, gather 5-star reviews, and publish city-specific service pages ahead of peak weather season. When hail strikes and search volume spikes overnight, you are already positioned to capture the influx of insurance-backed claims.",
    },
    {
      question: "How does the missed-call text-back help when our crews are on a roof?",
      answer:
        "When an urgent homeowner calls your office line while you or your project managers are inspecting a roof or in a loud job site environment, our system automatically texts the caller in under 30 seconds: 'Hi, I'm on a roof inspection—how can our roofing team help you today?' Over 70% of callers reply immediately rather than moving on to the next roofer on Google.",
    },
    {
      question: "Are the leads generated exclusive to my roofing company?",
      answer:
        "Yes, 100%. Unlike Angi, HomeAdvisor, or Thumbtack where one lead is sold to 3 to 5 contractors simultaneously, every call, form submission, and inspection booked through your system belongs exclusively to your company.",
    },
    {
      question: "What is the contract term?",
      answer:
        "A 3-month initial commitment to build, launch, and optimize your systems, followed by flexible month-to-month service with 30 days' notice. You retain 100% ownership of your website, domain, and CRM data.",
    },
  ],
  finalCtaHeading: "Stop losing high-value roof replacements to storm chasers.",
  finalCtaBody:
    "Get a free audit of your roofing website, Google Maps ranking, and missed-call follow-up. See exactly what it takes to own your local market.",
};

export const ALL_INDUSTRIES: IndustryPageContent[] = [
  FAMILY_LAW_CONTENT,
  ROOFERS_CONTENT,
  DENTAL_CONTENT,
  REAL_ESTATE_CONTENT,
  SALONS_CONTENT,
  ACCOUNTING_CONTENT,
  HOME_SERVICES_CONTENT,
];

export function getIndustryBySlug(slug: string): IndustryPageContent | undefined {
  return ALL_INDUSTRIES.find((ind) => ind.slug === slug);
}
