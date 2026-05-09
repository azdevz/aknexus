import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AK Nexus FZ LLC — Blockchain, SaaS, AI & Fintech Solutions",
  description:
    "AK Nexus FZ LLC delivers cutting-edge technology services: Blockchain, Metaverse, SaaS Development, Agentic AI, Digital Banking UAE, and Ecommerce solutions for businesses worldwide.",
  keywords:
    "blockchain development UAE, SaaS development, digital banking UAE, agentic AI, metaverse development, ecommerce UAE, AK Nexus, fintech UAE",
  authors: [{ name: "AK Nexus FZ LLC" }],
  openGraph: {
    title: "AK Nexus FZ LLC — Build the Future with Expert Development",
    description:
      "From blockchain innovations to UAE-compliant digital banking, AK Nexus crafts digital solutions that drive business growth.",
    url: "https://aknexus.co",
    siteName: "AK Nexus",
    type: "website",
  },
};

const GA_ID = "AW-XXXXXXXXXX"; // TODO: Replace with your actual Google Ads ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        {/* Google Ads Tag */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat phone="971526365585" />
      </body>
    </html>
  );
}
