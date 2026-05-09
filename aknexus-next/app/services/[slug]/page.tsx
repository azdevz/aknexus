import { notFound } from "next/navigation";
import { services } from "@/data/services";
import ServiceDetailClient from "./ServiceDetailClient";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — AK Nexus FZ LLC`,
    description: `${service.description} Learn how AK Nexus can help with ${service.title.toLowerCase()}.`,
    openGraph: {
      title: `${service.title} — AK Nexus FZ LLC`,
      description: service.description,
      url: `https://aknexus.co/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return <ServiceDetailClient service={service} />;
}
