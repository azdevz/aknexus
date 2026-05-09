"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const services = [
  { label: "Blockchain Solutions", slug: "blockchain-solutions" },
  { label: "Metaverse Development", slug: "metaverse-development" },
  { label: "SaaS Development", slug: "saas-development" },
  { label: "Agentic AI Solutions", slug: "agentic-ai-solutions" },
  { label: "Ecommerce Business", slug: "ecommerce-business" },
  { label: "Digital Banking – UAE", slug: "digital-banking-solution-uae" },
];

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "How We Work", href: "/#how-it-works" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
  { label: "Digital Banking UAE", href: "/digital-banking" },
  { label: "Web Solutions", href: "/web-solutions" },
];

const contactInfo = [
  { icon: <MapPin size={14} />, lines: ["AK NEXUS FZ LLC", "RAKEZ Compass Coworking", "Ras Al Khaimah, UAE"] },
  { icon: <MapPin size={14} />, lines: ["AK NEXUS LLC", "30 N Gould St Ste R", "Sheridan, WY 82801"] },
  { icon: <Mail size={14} />, lines: ["info@aknexus.co", "hr@aknexus.co"] },
  { icon: <Phone size={14} />, lines: ["UAE: +971 66 78 3871", "USA: +1 307 403 0755"] },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-root {
          background: linear-gradient(160deg, #020818 0%, #050d1f 60%, #0a1628 100%);
          border-top: 1px solid rgba(201,168,76,0.14);
          color: #fff;
          font-family: var(--font-sans), system-ui, sans-serif;
        }
        .footer-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 4.5rem 1.5rem 2rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1.2fr 1.2fr 1.5fr;
          gap: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .footer-logo-box {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          margin-bottom: 1.25rem;
        }
        .footer-logo-icon {
          width: 36px;
          height: 36px;
          border-radius: 0.625rem;
          background: linear-gradient(135deg,#c9a84c,#f5d88a);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 0.8rem;
          color: #020818;
          font-family: var(--font-display), system-ui, sans-serif;
          flex-shrink: 0;
        }
        .footer-brand-name {
          font-family: var(--font-display), system-ui, sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          color: #fff;
          letter-spacing: -0.01em;
        }
        .footer-tagline {
          color: rgba(255,255,255,0.4);
          font-size: 0.855rem;
          line-height: 1.75;
          margin-bottom: 1.75rem;
          max-width: 240px;
        }
        .footer-col-title {
          font-family: var(--font-display), system-ui, sans-serif;
          font-weight: 700;
          color: #fff;
          font-size: 0.9rem;
          margin-bottom: 1.25rem;
          letter-spacing: 0.02em;
        }
        .footer-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .footer-link {
          color: rgba(255,255,255,0.42);
          text-decoration: none;
          font-size: 0.855rem;
          transition: color 0.2s;
          display: inline-block;
        }
        .footer-link:hover {
          color: #f5d88a;
        }
        .footer-contact-item {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .footer-contact-icon {
          color: #c9a84c;
          margin-top: 0.15rem;
          flex-shrink: 0;
        }
        .footer-contact-line {
          color: rgba(255,255,255,0.42);
          font-size: 0.82rem;
          line-height: 1.6;
        }
        .footer-bottom {
          padding-top: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .footer-copy {
          color: rgba(255,255,255,0.28);
          font-size: 0.8rem;
        }
        .footer-policy-link {
          color: rgba(255,255,255,0.28);
          font-size: 0.8rem;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-policy-link:hover {
          color: #c9a84c;
        }
        .footer-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: linear-gradient(135deg,#c9a84c,#f5d88a);
          color: #020818;
          font-weight: 700;
          font-size: 0.82rem;
          padding: 0.55rem 1.1rem;
          border-radius: 0.625rem;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
          box-shadow: 0 3px 14px rgba(201,168,76,0.35);
          font-family: var(--font-display), system-ui, sans-serif;
        }
        .footer-wa-btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
        @media (max-width: 1000px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-inner">
          <div className="footer-grid">

            {/* Brand */}
            <div>
              <div className="footer-logo-box">
                <div className="footer-logo-icon">AK</div>
                <span className="footer-brand-name">AK Nexus</span>
              </div>
              <p className="footer-tagline">
                Building the future, one line of code at a time. Blockchain, SaaS, AI & fintech solutions worldwide.
              </p>
              <a
                href="https://wa.me/971526365585"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-wa-btn"
              >
                WhatsApp Us <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Services */}
            <div>
              <p className="footer-col-title">Services</p>
              <ul className="footer-link-list">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="footer-link">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <p className="footer-col-title">Quick Links</p>
              <ul className="footer-link-list">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="footer-link">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="footer-col-title">Contact</p>
              {contactInfo.map((item, i) => (
                <div key={i} className="footer-contact-item">
                  <span className="footer-contact-icon">{item.icon}</span>
                  <div>
                    {item.lines.map((l) => (
                      <p key={l} className="footer-contact-line">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <p className="footer-copy">
              © {new Date().getFullYear()} AK Nexus FZ LLC. All rights reserved.
            </p>
            <Link href="/privacy-policy" className="footer-policy-link">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
