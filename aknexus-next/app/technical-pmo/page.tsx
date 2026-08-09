import type { Metadata } from "next";
import TechnicalPMOLanding from "@/components/TechnicalPMOLanding";

export const metadata: Metadata = {
  title: "Contract Technical PMO Services UAE | AK Nexus",
  description:
    "Experienced contract Technical Project Management and PMO delivery support for UAE technology programmes. Available on-site, remote, or hybrid.",
  keywords: [
    "contract technical PMO UAE",
    "technical project manager UAE",
    "PMO consultant Dubai",
    "project delivery support UAE",
  ],
};

export default function TechnicalPMOPage() {
  return <TechnicalPMOLanding />;
}
