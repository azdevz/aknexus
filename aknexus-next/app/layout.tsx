import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
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
  metadataBase: new URL("https://aknexus.co"),
  title: "AK Nexus | Websites, Intake & Marketing for Small Law Firms",
  description:
    "One team and one monthly fee for your law firm's website, client intake system, local SEO and ads. You own everything. Built for solo and small firms.",
  keywords:
    "Law firm marketing, legal intake automation, family law marketing, law firm website design, local SEO for lawyers, attorney advertising",
  authors: [{ name: "AK Nexus" }],
  icons: {
    icon: [
      { url: "/logo-square.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo-square.png",
  },
  openGraph: {
    title: "AK Nexus | Websites, Intake & Marketing for Small Law Firms",
    description:
      "One team and one monthly fee for your law firm's website, client intake system, local SEO and ads. You own everything. Built for solo and small firms.",
    url: "https://aknexus.co",
    siteName: "AK Nexus",
    type: "website",
    images: [{ url: "/logo-512.png", width: 512, height: 512, alt: "AK Nexus" }],
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
        <StickyMobileCTA />

        {/* GHL LeadConnector Chat Widget */}
        <Script
          id="lc-chat-widget"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6abe8b0dcdeb03a6d5e2d21b"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
