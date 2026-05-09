import type { Metadata } from "next";
import WebSolutionsClient from "./WebSolutionsClient";

export const metadata: Metadata = {
  title: "Custom Web & Tech Solutions — AK Nexus FZ LLC",
  description:
    "AK Nexus builds custom websites, SaaS platforms, blockchain apps, ecommerce stores, and AI chatbots. UAE & USA based. Book a free consultation.",
  openGraph: {
    title: "Custom Web & Tech Solutions — AK Nexus",
    description:
      "Blockchain, SaaS, AI, ecommerce, and web development from UAE and USA offices.",
    url: "https://aknexus.co/web-solutions",
  },
};

export default function WebSolutionsPage() {
  return <WebSolutionsClient />;
}
