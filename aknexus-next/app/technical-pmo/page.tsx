import type { Metadata } from "next";
import TechnicalPMOLanding from "@/components/TechnicalPMOLanding";

export const metadata: Metadata = {
  metadataBase: new URL("https://aknexus.co"),
  title: "Hire a Contract Technical PMO in UAE | AK Nexus",
  description:
    "Hire experienced contract Technical PMO and Project Management support for UAE technology programmes. Fast deployment, flexible contracts, and a free discovery call.",
  keywords: [
    "contract technical PMO UAE",
    "hire technical project manager UAE",
    "technical project manager UAE",
    "contract project manager Dubai",
    "PMO consultant Dubai",
    "project delivery support UAE",
  ],
  alternates: { canonical: "https://aknexus.co/technical-pmo" },
  openGraph: {
    title: "Hire a Contract Technical PMO in UAE | AK Nexus",
    description: "Flexible, experienced Technical PMO leadership for UAE technology programmes. Book a free 30-minute discovery call.",
    url: "https://aknexus.co/technical-pmo",
    siteName: "AK Nexus",
    type: "website",
    images: [{ url: "/logo-512.png", width: 512, height: 512, alt: "AK Nexus" }],
  },
  twitter: {
    card: "summary",
    title: "Hire a Contract Technical PMO in UAE | AK Nexus",
    description: "Experienced Technical PMO leadership for UAE technology programmes.",
  },
};

export default function TechnicalPMOPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Contract Technical PMO Services in UAE",
        description: "Contract-based Technical Project Management and PMO support for UAE technology programmes, including governance, delivery management, executive reporting, and digital transformation coordination.",
        provider: {
          "@type": "Organization",
          name: "AK Nexus",
          url: "https://aknexus.co",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ras Al Khaimah",
            addressCountry: "AE",
          },
        },
        areaServed: { "@type": "Country", name: "United Arab Emirates" },
        serviceType: "Technical Project Management and PMO Consulting",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can I hire a Technical PMO on a contract basis in the UAE?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. AK Nexus provides contract-based Technical Project Management and PMO support for defined delivery gaps, transformation programmes, project recovery, and longer-term enterprise initiatives." },
          },
          {
            "@type": "Question",
            name: "What engagement models are available?",
            acceptedAnswer: { "@type": "Answer", text: "Engagements can be short-term, project-based, part-time or fractional, or structured as 3–6 month and 6–12 month contracts. Support can be on-site in the UAE, hybrid, or remote." },
          },
          {
            "@type": "Question",
            name: "How quickly can a contract Technical PMO start?",
            acceptedAnswer: { "@type": "Answer", text: "Subject to contract confirmation and working-day availability, support can begin as early as the next working day." },
          },
        ],
      },
    ],
  };

  return (
    <>
      <TechnicalPMOLanding />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
