import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | AK Nexus",
  description: "Terms governing websites, intake systems, and marketing services provided by AK Nexus.",
  alternates: { canonical: "https://aknexus.co/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="These Terms of Service ('Terms') govern your access to our website, free audits, and marketing/technology agency services provided by AK NEXUS LLC ('AK Nexus', 'we', 'us')."
      sections={[
        {
          title: "1. Nature of Services (Not a Law Firm)",
          body: [
            "AK Nexus provides marketing, website development, intake automation, and technology operations services. We are NOT a law firm and do not provide legal advice, legal services, or legal representation.",
            "Nothing on this website or in our services constitutes legal advice or creates an attorney-client relationship.",
          ],
        },
        {
          title: "2. Client Responsibility for State Bar Advertising Compliance",
          body: [
            "You (the client attorney or law firm) maintain ultimate professional and regulatory responsibility for ensuring that all public marketing, websites, advertisements, copy, statements, and automated communications comply with the rules of professional conduct and attorney advertising regulations of your jurisdiction(s).",
            "You are required to review, verify, and approve all websites, landing pages, ad copy, and automated email/SMS templates prior to public release.",
          ],
        },
        {
          title: "3. Scope, Approvals & Turnaround",
          body: [
            "Service scope and deliverables are defined in your specific plan or service agreement. We work on a collaborative approval workflow. Turnaround times depend upon prompt client feedback, access provisioning, and approvals.",
          ],
        },
        {
          title: "4. Contract Commitment & Cancellation",
          items: [
            "Initial Term: All monthly plans require a 3-month initial commitment to allow adequate time for system setup, testing, and initial conversion optimization.",
            "Month-to-Month Continuation: Following the initial 3 months, service continues automatically on a month-to-month basis.",
            "Cancellation Notice: Either party may cancel ongoing monthly service by providing thirty (30) days' prior written notice.",
            "Setup Fees: One-time setup fees are earned upon commencement of onboarding and are non-refundable once work begins.",
          ],
        },
        {
          title: "5. Direct Ownership of Accounts, Domains & Data",
          body: [
            "Unlike traditional agencies, AK Nexus does not hold client assets hostage. You retain 100% ownership of your website files, domain name, hosting account, Google Business Profile, advertising accounts (Google Ads, Meta), and CRM client data.",
            "In the event of cancellation, all administrative permissions, accounts, and exported data remain completely with your firm.",
          ],
        },
        {
          title: "6. Ad Spend Responsibility",
          body: [
            "Our monthly agency fee covers management, optimization, and strategy. All advertising spend (Google Ads, Meta ads) is billed directly to your law firm's credit card by the respective ad platform without markup.",
          ],
        },
        {
          title: "7. No Guarantee of Specific Results",
          body: [
            "Marketing performance depends on market demand, regional competition, practice area, budget, and firm responsiveness. In strict adherence to ethical marketing standards, AK Nexus does NOT guarantee specific case outcomes, rankings, retainer volume, or revenue figures.",
          ],
        },
        {
          title: "8. Data Handling & Confidentiality",
          body: [
            "Both parties agree to treat all business information as confidential. Client intake forms must be configured exclusively to capture initial contact inquiries and must never collect confidential case matter details or privileged attorney-client narratives online.",
          ],
        },
        {
          title: "9. Governing Law",
          body: [
            "These Terms are governed by and construed in accordance with the laws of the State of Wyoming, USA, without regard to conflict of law principles.",
          ],
        },
      ]}
    />
  );
}
