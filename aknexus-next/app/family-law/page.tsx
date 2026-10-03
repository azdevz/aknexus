import type { Metadata } from "next";
import { FAMILY_LAW_CONTENT } from "@/data/industries";
import IndustryTemplate from "@/components/IndustryTemplate";

export const metadata: Metadata = {
  title: FAMILY_LAW_CONTENT.metaTitle,
  description: FAMILY_LAW_CONTENT.metaDescription,
  openGraph: {
    title: FAMILY_LAW_CONTENT.metaTitle,
    description: FAMILY_LAW_CONTENT.metaDescription,
    url: "https://aknexus.co/family-law",
    siteName: "AK Nexus",
    type: "website",
  },
};

export default function FamilyLawPage() {
  return <IndustryTemplate data={FAMILY_LAW_CONTENT} />;
}
