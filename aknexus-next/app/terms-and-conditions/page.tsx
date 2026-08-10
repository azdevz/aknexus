import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | AK Nexus",
  description: "Terms and conditions for use of the AK Nexus website and its content.",
  alternates: { canonical: "https://aknexus.co/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="These Terms & Conditions govern your use of the AK Nexus website. By accessing or using this website, you agree to these terms."
      sections={[
        { title: "Website purpose", body: ["This website provides general information about AK Nexus and its consulting services. It is intended for business and informational purposes only and does not create a client-consultant relationship, commitment, or obligation unless confirmed in a separate written agreement."] },
        { title: "No professional advice", body: ["Website content is provided for general information and should not be relied on as legal, financial, regulatory, technical, or other professional advice. You should obtain independent advice appropriate to your circumstances before making decisions based on any information provided on this website."] },
        { title: "Intellectual property", body: ["Unless otherwise stated, the website content, branding, design, text, graphics, and other materials are owned by or licensed to AK Nexus. You may not copy, reproduce, modify, distribute, or use these materials for commercial purposes without our prior written permission."] },
        { title: "Acceptable use", items: ["Use the website only for lawful purposes.", "Do not attempt to interfere with the website, its security, or its availability.", "Do not misuse contact forms, submit misleading information, or impersonate another person or organisation.", "Do not use automated means to access or extract website content without permission."] },
        { title: "Third-party services and links", body: ["This website may link to third-party websites or services. Those third parties operate independently, and AK Nexus is not responsible for their content, availability, privacy practices, or terms."] },
        { title: "Limitation of liability", body: ["To the extent permitted by applicable law, AK Nexus is not liable for any loss or damage arising from use of, or inability to use, this website or reliance on its content. Nothing in these terms excludes liability that cannot lawfully be excluded."] },
        { title: "Changes and applicable requirements", body: ["We may update, suspend, or withdraw any part of this website and these terms at any time. Your continued use of the website after changes are posted indicates acceptance of the updated terms. These terms are subject to applicable laws and requirements."] },
      ]}
    />
  );
}
