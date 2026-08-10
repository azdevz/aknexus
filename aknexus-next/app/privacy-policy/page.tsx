import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | AK Nexus",
  description: "Read how AK Nexus collects, uses, and protects information submitted through our website.",
  alternates: { canonical: "https://aknexus.co/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This Privacy Policy explains how AK Nexus collects and handles personal information when you use our website or contact us about our consulting services."
      sections={[
        { title: "Information we collect", body: ["We may collect information you choose to provide, such as your name, email address, phone number, company, job title, and project or service enquiry. We may also collect limited technical information generated when you use our website, such as browser type, device information, IP address, and pages visited."] },
        { title: "How we use information", items: ["Respond to enquiries and discovery-call requests.", "Provide information about relevant AK Nexus services.", "Operate, secure, and improve our website and service delivery.", "Meet applicable legal, regulatory, and record-keeping requirements."] },
        { title: "How information is shared", body: ["We do not sell personal information. We may share information with trusted service providers that support our website, communications, analytics, or business operations, only where necessary for those purposes. We may also disclose information where required by applicable law or to protect our rights, users, or business."] },
        { title: "Cookies and analytics", body: ["Our website may use cookies and similar technologies to support core site functionality, understand how visitors use the site, and improve performance. You can manage cookies through your browser settings; disabling some cookies may affect certain website features."] },
        { title: "Data retention and security", body: ["We retain information only for as long as reasonably necessary for the purposes described in this policy, including legitimate business, legal, and operational requirements. We use reasonable organisational and technical safeguards to protect information, but no online service can guarantee absolute security."] },
        { title: "Your choices", body: ["You may contact us to request access to, correction of, or deletion of personal information we hold about you, subject to applicable requirements and limitations. You may also opt out of non-essential marketing communications at any time."] },
        { title: "Changes to this policy", body: ["We may update this Privacy Policy from time to time. The latest version will be posted on this page with its updated date."] },
      ]}
    />
  );
}
