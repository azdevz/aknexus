"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(160deg, #020818 0%, #050d1f 60%, #0a1628 100%)",
        borderTop: "1px solid rgba(201,168,76,0.18)",
        color: "#fff",
      }}
      className="pt-16 pb-12"
    >
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 no-underline">
              <Image
                src="/logo-square.png"
                alt="AK Nexus"
                width={36}
                height={36}
                style={{ borderRadius: "0.625rem" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "1.45rem",
                  color: "#fff",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                NEXUS
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Websites, speed-to-lead intake automation, and full-funnel marketing for small law firms, dental clinics, real estate teams, and appointment-driven practices.
            </p>
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#f5d88a] hover:underline"
            >
              Get Free Website & Intake Audit <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Column 2: Industries */}
          <div>
            <h4
              style={{ fontFamily: "var(--font-display)" }}
              className="text-white font-bold text-sm uppercase tracking-wider mb-4"
            >
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm list-none p-0 m-0">
              <li>
                <Link
                  href="/family-law"
                  className="text-white/70 hover:text-[#f5d88a] transition-colors no-underline"
                >
                  Family Law
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/roofers"
                  className="text-white/70 hover:text-[#f5d88a] transition-colors no-underline"
                >
                  Roofing Companies
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/dental"
                  className="text-white/70 hover:text-[#f5d88a] transition-colors no-underline"
                >
                  Dental Practices
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/real-estate"
                  className="text-white/70 hover:text-[#f5d88a] transition-colors no-underline"
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/salons"
                  className="text-white/70 hover:text-[#f5d88a] transition-colors no-underline"
                >
                  Salons & Med Spas
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/accounting"
                  className="text-white/70 hover:text-[#f5d88a] transition-colors no-underline"
                >
                  Accounting & CPAs
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/home-services"
                  className="text-white/70 hover:text-[#f5d88a] transition-colors no-underline"
                >
                  Home Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform */}
          <div>
            <h4
              style={{ fontFamily: "var(--font-display)" }}
              className="text-white font-bold text-sm uppercase tracking-wider mb-4"
            >
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm list-none p-0 m-0">
              <li>
                <a
                  href="https://dashboard.aknexus.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5d88a] font-semibold hover:underline transition-colors no-underline inline-flex items-center gap-1"
                >
                  <span>Client Portal</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <Link
                  href="/plans"
                  className="text-white/70 hover:text-[#f5d88a] transition-colors no-underline"
                >
                  Plans & Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-white/70 hover:text-[#f5d88a] transition-colors no-underline"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-[#f5d88a] transition-colors no-underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/consulting"
                  className="text-white/70 hover:text-[#f5d88a] transition-colors no-underline"
                >
                  Enterprise Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/70 hover:text-[#f5d88a] transition-colors no-underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-white/70 hover:text-[#f5d88a] transition-colors no-underline"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4
              style={{ fontFamily: "var(--font-display)" }}
              className="text-white font-bold text-sm uppercase tracking-wider mb-4"
            >
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70 list-none p-0 m-0">
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-[#f5d88a] flex-shrink-0" />
                <a
                  href="mailto:hello@aknexus.co"
                  className="text-white/70 hover:text-[#f5d88a] transition-colors no-underline"
                >
                  hello@aknexus.co
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-[#f5d88a] flex-shrink-0" />
                <a
                  href="tel:+13074030755"
                  className="text-white/70 hover:text-[#f5d88a] transition-colors no-underline"
                >
                  +1 307 403 0755
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs leading-relaxed text-white/60">
                <MapPin size={15} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                <span>
                  AK NEXUS LLC<br />
                  30 N Gould St Ste R<br />
                  Sheridan, WY 82801, USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/50">
          <p className="max-w-2xl leading-relaxed m-0">
            AK Nexus provides marketing and technology services and is not a law firm. We do not provide legal advice and cannot guarantee case outcomes, rankings, or lead volume.
          </p>
          <div className="flex-shrink-0">
            © {new Date().getFullYear()} AK Nexus. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
