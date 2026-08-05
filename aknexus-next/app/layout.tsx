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
  title: "AK Nexus | Enterprise AI & Digital Transformation Consulting",
  description:
    "AK Nexus helps organizations accelerate AI adoption, digital transformation, PMO excellence, and technology modernization through enterprise consulting services. Strategy First. AI Second. Business Outcomes Always.",
  keywords:
    "Enterprise AI Consulting, Digital Transformation, Project Management Consulting, PMO Consulting, Technology Advisory, AI Strategy, Business Transformation, Intelligent Automation, Enterprise Consulting",
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
    title: "AK Nexus | Enterprise AI & Digital Transformation Consulting",
    description:
      "AK Nexus helps organizations transform with confidence through AI strategy, digital transformation, PMO excellence, automation, and technology advisory.",
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
        <WhatsAppFloat phone="971526365585" />
      </body>
    </html>
  );
}
