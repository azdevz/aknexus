import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | AK Nexus",
  description: "Read how AK Nexus collects, uses, and protects information submitted through our website and audit forms.",
  alternates: { canonical: "https://aknexus.co/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This Privacy Policy explains how AK Nexus LLC ('AK Nexus', 'we', 'us') collects, uses, and safeguards information when you visit our website, submit an inquiry or audit request, or engage our services."
      sections={[
        {
          title: "1. Prohibition on Confidential Case Information",
          body: [
            "AK Nexus provides marketing, website, and front-office technology services. We are NOT a law firm and do not provide legal advice or representation.",
            "IMPORTANT: Do not submit any confidential case details, privileged communications, specific dispute narratives, spouse or child names, or sensitive legal matter documents through our website forms or booking calendars. All inquiries are limited strictly to practice marketing and operations.",
          ],
        },
        {
          title: "2. Information We Collect",
          items: [
            "Contact & Firm Details: Full name, work email, phone number, law firm name, website URL, state jurisdiction, and firm size submitted via our audit, inquiry, or booking forms.",
            "Communications & Calendar Booking: Information provided when scheduling a consultation or corresponding with our team.",
            "Technical & Tracking Data: IP address, browser type, device information, operating system, referrer URL, pages visited, and UTM campaign tracking parameters auto-captured via analytics scripts.",
          ],
        },
        {
          title: "3. Email & SMS Communications (Opt-Out)",
          body: [
            "When you provide your email or phone number and consent to communications, we may send you written audit reports, scheduling updates, service notifications, and practice growth insights.",
            "You may opt out of SMS communications at any time by replying 'STOP'. You may opt out of marketing emails by clicking the 'Unsubscribe' link in any email or by contacting hello@aknexus.co. Message and data rates may apply.",
          ],
        },
        {
          title: "4. Third-Party Service Processors",
          body: [
            "We do not sell personal information. We share information only with authorized third-party vendors who assist us in operating our services, including: CRM and marketing automation platforms (e.g., GoHighLevel), email and SMS service providers, cloud infrastructure, payment processors (Stripe), and analytics providers (Google Analytics, Meta). All processors are bound by confidentiality obligations.",
          ],
        },
        {
          title: "5. Analytics, Cookies & Advertising Tags",
          body: [
            "We utilize cookies, Google Analytics, and conversion tags to evaluate site performance and measure campaign effectiveness. You may disable cookies through your browser settings, though certain site features may be affected.",
          ],
        },
        {
          title: "6. Data Retention, Security & Deletion Requests",
          body: [
            "We retain inquiry information only as long as necessary for legitimate business, legal, and operational purposes. We implement administrative, physical, and technical safeguards including encryption and multi-factor authentication.",
            "You have the right to request access to, correction of, or permanent deletion of your personal data by emailing hello@aknexus.co.",
          ],
        },
        {
          title: "7. Contact Information",
          body: [
            "AK NEXUS LLC",
            "30 N Gould St Ste R, Sheridan, WY 82801, USA",
            "Email: hello@aknexus.co | Phone: +1 307 403 0755",
          ],
        },
      ]}
    />
  );
}
