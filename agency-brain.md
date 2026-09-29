# AK Nexus: Website & Family Law Landing Page Content (v1)

**Purpose:** Build-ready copy and page specs for the agency website and the first vertical landing page (Family Law). Hand this to Next.js as the content source.

**Conventions**
- `[BRACKETS]` = fill in before launch.
- `[VERIFY]` = a number or claim to confirm before publishing.
- `[DECISION]` = open choice for the founder.
- CTA labels are final unless marked otherwise.
- No testimonials, case studies, or results claims until real, named, approved ones exist.

---

## 0. Decisions & guardrails

| Item | Current default | Status |
|---|---|---|
| Brand name | AK Nexus (alt: "AK Nexus Growth") | `[DECISION]` |
| Enterprise content | Move existing consulting content to `/consulting`, link from footer only | Recommended |
| Primary CTA (all pages) | Free website & intake audit, then book a call | Final |
| Contract terms | 3-month minimum, then month-to-month, 30 days' notice | Final |
| Ownership | Client owns website, domain, ad accounts, and CRM data | Final (this is a key differentiator) |
| Pricing display | "From" prices shown on `/plans` | Final |
| Outcome claims | None. No guaranteed cases, rankings, or lead counts | Final |
| Legal review | Have ethics counsel review client-facing templates per state | Required before client launch |

**Tone:** Calm, professional, plain English. Prospects of your clients are often in a stressful moment, and your buyer (the attorney) is busy and skeptical of agencies. Lead with the problem, avoid hype and jargon.

---

## 1. Sitemap

```
/                          Agency home
/family-law                Family law landing page (main campaign page)
/plans                     Three plans + add-ons
/how-it-works              Onboarding + monthly delivery + reporting
/free-audit                Lead magnet form
/book                      Calendar booking (GHL embed)
/about                     Founder + approach
/consulting                Existing enterprise content (moved)
/privacy  /terms           Existing pages, with additions (see section 10)
/industries/[slug]         Future: dental, real estate, salons (data-driven route)
```

---

## 2. Global elements

### Navigation
`Home` · `Family Law` · `Plans` · `How It Works` · `About` · **[Book a Call]** (button)

### Footer
- **Column 1:** AK Nexus logo + one line: *"Websites, intake systems and marketing for small law firms."*
- **Column 2, Services:** Family Law · Plans · How It Works · Free Audit
- **Column 3, Company:** About · Consulting · Privacy Policy · Terms
- **Column 4, Contact:** hello@aknexus.co · +1 307 403 0755 · AK NEXUS LLC, 30 N Gould St Ste R, Sheridan, WY 82801
- **Legal line:** *AK Nexus provides marketing and technology services and is not a law firm. We do not provide legal advice and cannot guarantee case outcomes, rankings, or lead volume.*
- © 2026 AK Nexus.

### Sticky mobile CTA
`Get Free Audit`

---

## 3. Home (`/`)

**SEO title:** AK Nexus | Websites, Intake & Marketing for Small Law Firms
**Meta description:** One team and one monthly fee for your law firm's website, client intake system, local SEO and ads. You own everything. Built for solo and small firms.

### Hero
**Headline:** Turn more inquiries into signed clients.
**Subhead:** AK Nexus runs your website, intake system and marketing for one monthly fee, so nothing gets missed between the first click and the signed retainer.
**Primary CTA:** Get Your Free Website & Intake Audit
**Secondary CTA:** Book a 20-Minute Call
**Trust line:** Built for solo attorneys and firms with 1 to 3 staff · Month-to-month after 3 months · You own everything

### Section: The problem
**Heading:** Most small firms don't have a marketing problem. They have a follow-up problem.

- **Slow responses.** An inquiry that waits a day for a reply often hires someone else.
- **Scattered tools.** A website in one place, forms in another, texts on a personal phone, spreadsheets for leads.
- **No visibility.** You can't tell which marketing produced a signed case, only how many clicks or calls came in.
- **Agency lock-in.** Long contracts, and a website that isn't really yours.

### Section: What we do
**Heading:** One team for the whole front end of your practice.

| Card | Copy |
|---|---|
| **Website** | A fast, mobile-first site built to turn visitors into consultation requests. |
| **Intake & CRM** | Every inquiry captured, tracked and followed up automatically, from first contact to signed retainer. |
| **Local SEO** | Get found when people nearby search for a family lawyer. |
| **Ads** | Google and Meta campaigns managed for cost per signed case, not just clicks. |
| **Reporting** | A clear monthly report showing leads, consultations and signed cases by source. |

### Section: Why AK Nexus
- **You own everything.** Website, domain, ad accounts and client data. If you leave, you take it all.
- **No long lock-in.** 3-month minimum, then month-to-month.
- **Signed cases, not vanity metrics.** We report on what turns into revenue.
- **Built for small firms.** Priced and scoped for solo and 1-3 staff practices, not 50-attorney firms.

### Section: Plans preview
Show 3 cards (summary only) with a link to `/plans`. Use the prices from section 5.

### Section: Founder strip
**Ayaz Chishti, Founder.** 15+ years leading technology and delivery programmes across fintech, SaaS and PMO. AK Nexus applies the same discipline (clear scope, tracked delivery, regular reporting) to small business marketing operations.
`[DECISION: keep the founder claim short, or add a photo and a two-line bio]`

### Final CTA band
**Heading:** See where your firm is losing inquiries.
**Body:** Get a free audit of your website and intake process. You'll get a short written report, even if we never work together.
**CTA:** Get Your Free Audit

---

## 4. Family Law Landing Page (`/family-law`)

**Slug:** `/family-law`
**SEO title:** Marketing & Intake Systems for Family Law Firms | AK Nexus
**Meta description:** Website, client intake automation, local SEO and ads for solo and small family law firms. One monthly fee, no long-term lock-in, you own everything.
**H1 is the hero headline below.** Keep exactly one H1.

### Hero
**Eyebrow:** For solo and small family law firms
**Headline:** Never lose a divorce or custody inquiry to a slow reply.
**Subhead:** We build and run your website, intake system and marketing for one monthly fee. Every inquiry is captured and followed up with care, from first contact to signed retainer, and you own everything we build.
**Primary CTA:** Get Your Free Website & Intake Audit
**Secondary CTA:** Book a 20-Minute Call
**Trust line:** Month-to-month after 3 months · You own your website, ad accounts and data · Built around attorney advertising rules

### Section: Why inquiries slip away
**Heading:** Family law inquiries are urgent, emotional and time-sensitive.

People searching for a divorce or custody lawyer are usually in a hard moment and often contact more than one firm. The firm that answers first, clearly and kindly usually wins the consultation. For a small firm, that's difficult while you're in court, in meetings, or with clients.

Common leaks we see and fix:
1. **After-hours and in-court inquiries** that wait until the next day.
2. **Website forms** that ask too much, or too little, and go to a shared inbox.
3. **No follow-up** after the first call, so interested people go quiet.
4. **Consultations that don't show** because there are no reminders.
5. **No source tracking**, so you don't know which marketing actually signs clients.

### Section: What we set up
**Heading:** A front office that works while you work.

| Feature | What it does for your firm |
|---|---|
| **Consultation-focused website** | Clear practice pages, fast on mobile, with one obvious next step. |
| **Sensitive-topic-aware intake forms** | Minimal fields, plain-language privacy notice, no case details collected online. |
| **Instant acknowledgement** | Every inquiry gets a prompt, courteous email or text (with consent). |
| **Online consultation booking** | Prospects choose a time that fits your calendar. |
| **Missed-call text-back** `[VERIFY setup/telephony]` | If you can't answer, they hear from you within minutes. |
| **Follow-up sequences** | Polite check-ins for people who haven't booked. |
| **Appointment reminders** | Fewer no-shows. |
| **Review requests** | Ask for reviews at the right moment, within your state's rules. |
| **Pipeline & reporting** | See every lead's status and which source produced each signed case. |

> **Note for the page:** We set up the system and automations. We don't read your clients' case details, and we don't provide legal advice. Every message template is reviewed and approved by you before it goes live.

### Section: Plans (summary)

| | **Foundation** | **Growth** | **Scale** |
|---|---|---|---|
| **Best for** | Solo attorneys with steady referrals who need a system | Firms that want more inquiries from local search | Firms already spending on ads who want them managed |
| **Monthly** | From **$1,000** | From **$2,000** | From **$3,500** + ad spend |
| **One-time setup** | $1,000 | $1,500 | $2,000 |
| Website optimisation | ✓ | ✓ | ✓ |
| Intake CRM, forms and booking | ✓ | ✓ | ✓ |
| Automated follow-up & reminders | ✓ | ✓ | ✓ |
| Monthly report | ✓ | ✓ | ✓ |
| Local SEO & Google Business Profile | | ✓ | ✓ |
| Social media (up to 12 posts/month) | | ✓ | ✓ |
| Google & Meta ads management | | | ✓ |
| Call & source tracking, cost per signed case | | | ✓ |

*Ad spend is paid directly by you to Google/Meta and is separate from our fee. Prices shown are starting points; final scope is confirmed on your audit call.*
**CTA under table:** See Full Plan Details (`/plans`)

### Section: The all-in-one comparison
**Heading:** What you'd otherwise piece together.

| Typical patchwork | Approx. monthly cost `[VERIFY before publishing]` |
|---|---|
| Legal intake CRM | ~$200 to $300 |
| Answering or intake service | ~$250+ |
| Marketing agency retainer | $1,500+ |
| Website care/hosting | separate |
| **Total, from several vendors** | **$1,950+ and you coordinate all of it** |
| **AK Nexus Growth** | **From $2,000 as one team, one report, one point of contact** |

*Figures are typical market ranges and vary by vendor, firm size and scope.*

### Section: How it works
**Heading:** Live in weeks, with a clear path.

1. **Free audit.** We review your website and intake process and send a short written report.
2. **Kickoff (Week 1).** Confirm your services, service area, tone and approval workflow.
3. **Build (Weeks 1 to 3).** Website updates, intake forms, CRM, calendar and follow-up sequences, all approved by you.
4. **Launch & test.** Every form, text, email and booking path tested before go-live.
5. **Monthly cycle.** Ongoing delivery, plus a report and a short review call.

### Section: What you own, and what happens if you leave
**Heading:** Nothing here is held hostage.

- Your website, domain and hosting account belong to you.
- Your Google Business Profile and ad accounts are set up in your name.
- Your client and lead data can be exported at any time.
- After the 3-month minimum, cancel with 30 days' notice.

### Section: Built with attorney advertising rules in mind
**Heading:** Legal marketing has rules. We build with them in mind.

State bar rules on attorney advertising vary. Our templates avoid outcome guarantees, restrict testimonial and results claims, and include clear disclaimers. You approve every page, ad and message before it publishes, and we recommend your own ethics counsel review anything specific to your state.

### Section: Your clients' information
**Heading:** Handled with care.

Family law inquiries can involve sensitive information. We keep online forms minimal, keep intake data inside your firm's own CRM account, limit team access by role, and use multi-factor authentication. `[CONFIRM exact wording with your security setup and delivery team model before publishing]`

### Section: Who this is for
**Good fit:**
- Solo attorneys and firms with 1 to 3 staff.
- Firms that want a steady flow of consultations and a tidy intake process.
- Attorneys who want clear reporting and no long lock-in.

**Probably not a fit:**
- Firms wanting guaranteed case volume or rankings. No honest agency can promise that.
- Large multi-attorney firms with in-house marketing teams.

### Section: FAQ

**Do you guarantee results?**
No. Results depend on your market, competition, budget and how quickly inquiries are handled. We commit to specific deliverables and transparent reporting, not guarantees.

**Are you a law firm or do you give legal advice?**
No. AK Nexus is a marketing and technology company. We don't provide legal advice or contact your clients' matters.

**Will this replace Clio, MyCase, or my case management system?**
No. We handle the front end: inquiry, follow-up, booking and source tracking. When a prospect becomes a client, your practice management system takes over.

**Who owns the website, ad accounts and data?**
You do.

**What's the contract?**
A 3-month minimum, then month-to-month with 30 days' notice.

**How does ad pricing work?**
Our management fee is separate from your ad budget. Ad spend goes directly from your card to Google or Meta. Family law clicks can be expensive, so we'll talk through a realistic budget on the call.

**How long until I see results?**
Intake improvements (faster replies, reminders, tracking) show up within weeks. SEO usually takes several months to build. We'll set expectations by plan.

**Who will work on my account?**
A named account lead plus a delivery team of specialists. `[CONFIRM wording about remote/international team]`

**Is my clients' information safe?**
See "Your clients' information" above. We recommend keeping forms minimal and never asking for case details online.

**Can you handle bilingual markets?**
`[DECISION: include only if you can deliver real Spanish content from native speakers]`

### Final CTA band
**Heading:** Find out where inquiries are slipping away.
**Body:** Get a free audit of your website and intake process. No obligation, and you keep the report either way.
**CTA:** Get Your Free Audit

---

## 5. Plans page (`/plans`)

**SEO title:** Plans & Pricing for Law Firm Marketing and Intake | AK Nexus
**Meta description:** Three plans for solo and small law firms: website and intake systems, local SEO and social, and managed ads. Month-to-month after 3 months.

### Intro
**Headline:** Simple plans. No lock-in.
**Body:** Pick the level of support that fits your firm. All plans include a 3-month minimum, then month-to-month with 30 days' notice. You own your website, accounts and data.

### Plan 1: Foundation. From $1,000/month + $1,000 setup
**Who it's for:** Solo attorneys with steady referrals who need a reliable system behind them.
**Includes:**
- Website review and conversion optimisation (speed, mobile, clear calls to action)
- Intake forms and online consultation booking
- CRM with a defined pipeline: New → Contacted → Consult Booked → Proposal → Signed / Lost
- Automated email/SMS acknowledgement, follow-up and reminders (with consent)
- Review request workflow
- Monthly report: inquiries, consultations, signed cases, by source
- Up to `[X]` hours/month of website updates and support
**CTA:** Book a Call

### Plan 2: Growth. From $2,000/month + $1,500 setup
**Everything in Foundation, plus:**
- Google Business Profile setup and optimisation
- Local SEO: citations, on-page updates, `[X]` new pages or posts per month
- Social media management, up to 12 posts per month
- Review generation and monitoring
**CTA:** Book a Call

### Plan 3: Scale. From $3,500/month + $2,000 setup + ad spend
**Everything in Growth, plus:**
- Google Ads and/or Meta ads management
- Dedicated landing pages for campaigns
- Call and form source tracking
- Cost-per-signed-case reporting
- Weekly optimisation and monthly strategy call
**Requires:** an ad budget agreed on the call. Ad spend is billed directly by Google/Meta.
**CTA:** Book a Strategy Call

### Add-ons (quote on request)
- Bookkeeping and accounts support
- Virtual assistant hours (capped monthly bundles)
- Project management and operations support
**CTA:** Ask About Add-Ons

### Terms summary
- 3-month minimum, then month-to-month, 30 days' notice.
- One-time setup fee due before work begins.
- Subscriptions billed monthly via Stripe. Card updates and invoices available through the customer portal.
- Ad spend, software licences (if any), and third-party fees are separate unless stated.
- Scope details are confirmed in the service agreement.

### Plans FAQ
Reuse the Family Law FAQ items on ownership, contract, ad pricing, and guarantees.

---

## 6. How It Works (`/how-it-works`)

**SEO title:** How AK Nexus Works | Onboarding, Monthly Delivery & Reporting
**Meta description:** See how we onboard your firm, build your intake system, and report on signed cases each month.

### Sections
1. **Audit.** A short written review of your website and intake process.
2. **Onboarding (Week 1).** Kickoff call, access setup, brand and tone, approvals process.
3. **Build (Weeks 1 to 3).** Website updates, forms, CRM, calendar, automations, drafts for your approval.
4. **Test & launch.** End-to-end testing, then go-live.
5. **Monthly delivery.** Deliverables tracked in a shared status view. You can see what's done, in progress, and next.
6. **Monthly report + review call.** Inquiries, consultations, signed cases, source performance, next steps.

**Callout:** *"Every message and page is approved by you before it goes live."*
**CTA:** Get Your Free Audit

---

## 7. Free Audit page (`/free-audit`)

**SEO title:** Free Website & Intake Audit for Law Firms | AK Nexus
**Meta description:** Get a short written audit of your law firm's website and inquiry follow-up process. No obligation.

**Headline:** Get your free website & intake audit.
**Subhead:** Tell us about your firm. We'll review your website and how inquiries are handled, and send you a short written report with the top fixes.

**What you'll get:**
- Website speed and mobile check
- Review of how your site turns visitors into inquiries
- Notes on inquiry follow-up and booking
- Three priority fixes

**Form fields:** see section 9.
**Submit button:** Send My Free Audit
**Thank-you message:** Thanks, we've got it. You'll receive your audit within `[2 business days]`. Want to talk it through sooner? [Book a call].
**Privacy note under form:** *Please don't include details about any legal matter or client in this form.*

---

## 8. Book page (`/book`)

**Headline:** Book a 20-minute call.
**Body:** We'll walk through your firm's situation and tell you honestly whether we're a fit. No pressure.
**Embed:** GHL calendar `[INSERT EMBED]`
**Fallback line:** Prefer email? hello@aknexus.co

---

## 9. Forms & data spec

### Free audit / contact form
| Field | Type | Required | Notes |
|---|---|---|---|
| Full name | text | Yes | |
| Work email | email | Yes | |
| Phone | tel | No | Needed for SMS |
| Firm name | text | Yes | |
| Website URL | url | Yes | Used for the audit |
| State | select | Yes | For compliance context |
| Firm size | select | Yes | Solo / 2 to 3 / 4+ |
| Biggest challenge | select | No | More inquiries / Slow follow-up / Website / Reporting / Other |
| Consent | checkbox | Yes | See wording below |

**Consent wording (draft, have counsel review):**
> ☐ I agree to receive emails and, if I provided a phone number, text messages from AK Nexus about my audit and our services. Message and data rates may apply. Reply STOP to opt out. See our [Privacy Policy] and [Terms].

Keep email consent and SMS consent as clear opt-ins. Do not pre-check the box.

### Hidden fields (auto-captured)
`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `landing_page`, `referrer`, `industry` (= `family-law`), `submitted_at`

### Integration
- POST to GHL webhook → create/update contact, apply tag `industry:family-law`, add to pipeline stage **New Lead**, start acknowledgement sequence.
- Fire a conversion event on submit and on calendar booking (GA4 + GHL).
- Do **not** collect case details, spouse names, children, or any matter information.

---

## 10. Legal page additions

**Privacy Policy, add sections on:**
- Data collected via forms, tracking and calendar
- Email/SMS communications and opt-out
- Analytics and advertising tags
- Third-party processors (CRM, email, payments)
- Data retention and deletion requests
- Statement that forms must not contain confidential case information

**Terms, add sections on:**
- Service scope, approvals and turnaround
- 3-month minimum and cancellation
- Ownership of accounts, domains and data
- Ad spend responsibility
- No guarantee of results
- Client responsibility for compliance with their jurisdiction's attorney advertising rules
- Data handling and confidentiality

---

## 11. SEO & technical notes

- **Schema:** `ProfessionalService` (Organization) on the home page; `FAQPage` on `/family-law` and `/plans`.
- **Headings:** One H1 per page; H2/H3 hierarchy as above.
- **Performance:** Target strong Core Web Vitals; your site is your best demo of the speed you sell.
- **`robots.txt`:** Do not block AI search crawlers (ChatGPT-User, PerplexityBot, ClaudeBot) unless you deliberately want to.
- **Sitemap:** Auto-generate; submit to Search Console.
- **Analytics:** GA4, Vercel Analytics, GHL tracking script.
- **Content model:** Store industry pages in `industries.ts` (headline, pains, features, FAQs, compliance note, form fields) so future verticals reuse one route.

---

## 12. Pre-launch checklist

- [ ] Brand name decided (AK Nexus vs AK Nexus Growth)
- [ ] Enterprise content moved to `/consulting`
- [ ] All `[VERIFY]` numbers confirmed or removed
- [ ] All `[DECISION]` items resolved
- [ ] Hours and scope limits filled in for each plan (`[X]`)
- [ ] Anonymous testimonials removed from any page targeting law firms
- [ ] Forms post to GHL; test lead reaches pipeline and triggers acknowledgement
- [ ] Calendar booking tested end-to-end
- [ ] SMS/email consent wording reviewed by counsel
- [ ] Privacy and Terms updated
- [ ] Service agreement template drafted (scope, 3-month minimum, ownership, data handling)
- [ ] Mobile and desktop QA on all pages
- [ ] GA4 and conversion events verified
- [ ] Stripe products and payment links created (Foundation, Growth, Scale + setup fees)