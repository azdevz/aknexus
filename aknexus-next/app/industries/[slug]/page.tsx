import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ALL_INDUSTRIES, getIndustryBySlug } from "@/data/industries";
import IndustryTemplate from "@/components/IndustryTemplate";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ALL_INDUSTRIES.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry Page | AK Nexus",
    };
  }

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `https://aknexus.co/industries/${industry.slug}`,
      siteName: "AK Nexus",
      type: "website",
    },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return <IndustryTemplate data={industry} />;
}
