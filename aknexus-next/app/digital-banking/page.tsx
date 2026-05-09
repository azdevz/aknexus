import type { Metadata } from "next";
import DigitalBankingClient from "./DigitalBankingClient";

export const metadata: Metadata = {
  title: "Digital Banking Solutions UAE — AK Nexus FZ LLC",
  description:
    "Launch your UAE-compliant digital bank with AK Nexus. IBAN issuance, KYC/AML, ADGM/FSRA licensing guidance, fiat on/off ramp, and white-label banking apps.",
  openGraph: {
    title: "Digital Banking Solutions UAE — AK Nexus",
    description:
      "UAE Central Bank compliant fintech platforms. From IBAN issuance to payment gateway integration.",
    url: "https://aknexus.co/digital-banking",
  },
};

export default function DigitalBankingPage() {
  return <DigitalBankingClient />;
}
