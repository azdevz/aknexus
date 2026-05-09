"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft, Check,
  Link as LinkIcon, Laptop, Cloud, ListTodo,
  Brain, ShoppingCart, CreditCard, ArrowRight, ArrowUpRight,
} from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Link: <LinkIcon size={30} />,
  Laptop: <Laptop size={30} />,
  Cloud: <Cloud size={30} />,
  ListTodo: <ListTodo size={30} />,
  Brain: <Brain size={30} />,
  ShoppingCart: <ShoppingCart size={30} />,
  CreditCard: <CreditCard size={30} />,
};

const gradients: Record<string, string> = {
  Link: "linear-gradient(135deg,#3b82f6,#6366f1)",
  Laptop: "linear-gradient(135deg,#8b5cf6,#ec4899)",
  Cloud: "linear-gradient(135deg,#06b6d4,#3b82f6)",
  ListTodo: "linear-gradient(135deg,#10b981,#14b8a6)",
  Brain: "linear-gradient(135deg,#f97316,#ef4444)",
  ShoppingCart: "linear-gradient(135deg,#ec4899,#f43f5e)",
  CreditCard: "linear-gradient(135deg,#c9a84c,#f5d88a)",
};

type Service = (typeof services)[0];

export default function ServiceDetailClient({ service }: { service: Service }) {
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div style={{ background: "#f4f6fb", minHeight: "100vh" }}>
      {/* Page hero */}
      <div
        style={{
          background: "linear-gradient(160deg,#020818 0%,#050d1f 50%,#0a1628 100%)",
          paddingTop: "7rem",
          paddingBottom: "4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "-20%", right: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle,rgba(201,168,76,0.12) 0%,transparent 65%)", pointerEvents: "none" }} />
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <Link
            href="/#services"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              color: "rgba(255,255,255,0.5)", textDecoration: "none",
              fontSize: "0.875rem", marginBottom: "2rem", transition: "color 0.2s",
            }}
          >
            <ArrowLeft size={16} /> Back to Services
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <div
              style={{
                width: "64px", height: "64px", borderRadius: "1.25rem",
                background: gradients[service.icon] || "#1e3a5f",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", flexShrink: 0,
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
            >
              {iconMap[service.icon]}
            </div>
            <div>
              <p style={{ color: "#c9a84c", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.35rem" }}>
                {service.subtitle}
              </p>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(1.75rem,4vw,2.75rem)", color: "#fff", letterSpacing: "-0.02em" }}>
                {service.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="wrap" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "2.5rem", alignItems: "start" }} className="service-detail-grid">

          {/* Main */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {/* Description */}
              <div style={{ background: "#fff", borderRadius: "1.25rem", padding: "2.5rem", marginBottom: "2rem", border: "1px solid rgba(10,22,40,0.07)" }}>
                <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: "1.05rem" }}>{service.description}</p>
              </div>

              {/* Key Features */}
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#0a1628", fontSize: "1.5rem", marginBottom: "1.5rem" }}>
                Key Features
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2.5rem" }} className="features-grid">
                {service.features.map((feature) => (
                  <div key={feature.title} className="glass-card" style={{ padding: "1.5rem", display: "flex", gap: "1rem" }}>
                    <div
                      style={{
                        width: "38px", height: "38px", borderRadius: "0.75rem",
                        background: gradients[service.icon] || "#1e3a5f",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Check size={18} color="#fff" />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0a1628", fontSize: "0.9rem", marginBottom: "0.35rem" }}>
                        {feature.title}
                      </h3>
                      <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.6 }}>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why AK Nexus */}
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#0a1628", fontSize: "1.5rem", marginBottom: "1.25rem" }}>
                Why Choose AK Nexus
              </h2>
              <div style={{ background: "#fff", borderRadius: "1.25rem", padding: "2rem", marginBottom: "2.5rem", border: "1px solid rgba(10,22,40,0.07)" }}>
                {service.whyUs.map((why) => (
                  <div key={why} style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem", marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(10,22,40,0.05)" }}>
                    <Check size={18} style={{ color: "#c9a84c", flexShrink: 0, marginTop: "0.1rem" }} />
                    <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.65 }}>{why}</p>
                  </div>
                ))}
              </div>

              {/* CTA Banner */}
              <div
                style={{
                  borderRadius: "1.5rem", padding: "3rem", textAlign: "center",
                  background: "linear-gradient(135deg,#050d1f,#0a1628,#1e3a5f)",
                  position: "relative", overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: "-30%", right: "-5%", width: "250px", height: "250px", borderRadius: "50%", background: "radial-gradient(circle,rgba(201,168,76,0.15) 0%,transparent 65%)" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#fff", fontSize: "1.4rem", marginBottom: "0.75rem" }}>
                    Ready to get started?
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", marginBottom: "1.75rem", lineHeight: 1.65 }}>
                    Let&apos;s discuss your {service.title} project and build something exceptional.
                  </p>
                  <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <a href={`https://wa.me/971526365585?text=Hi%20AK%20Nexus%2C%20I%27m%20interested%20in%20${encodeURIComponent(service.title)}.`} target="_blank" rel="noopener noreferrer" className="btn-gold">
                      Chat on WhatsApp <ArrowRight size={16} />
                    </a>
                    <a href="/#contact" className="btn-ghost">Send a Message</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div style={{ position: "sticky", top: "7rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              {/* Quick contact */}
              <div className="glass-card" style={{ padding: "1.75rem", marginBottom: "1.25rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0a1628", fontSize: "1rem", marginBottom: "0.75rem" }}>
                  Get Started Today
                </h3>
                <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "1.25rem", lineHeight: 1.65 }}>
                  Contact us to discuss how we can help your business with {service.title}.
                </p>
                {["Customized solutions", "Expert team", "Transparent pricing", "Ongoing support"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                    <Check size={14} style={{ color: "#c9a84c", flexShrink: 0 }} />
                    <span style={{ color: "#64748b", fontSize: "0.82rem" }}>{item}</span>
                  </div>
                ))}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1.5rem" }}>
                  <a href="https://wa.me/971526365585" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ justifyContent: "center", fontSize: "0.85rem", padding: "0.75rem 1.5rem" }}>
                    WhatsApp Us
                  </a>
                  <a href="/#contact" className="btn-outline-navy" style={{ justifyContent: "center", fontSize: "0.85rem", padding: "0.75rem 1.5rem" }}>
                    Contact Form
                  </a>
                </div>
              </div>

              {/* Other services */}
              <div className="glass-card" style={{ padding: "1.75rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0a1628", fontSize: "0.95rem", marginBottom: "1rem" }}>
                  Other Services
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      style={{
                        display: "flex", alignItems: "center", gap: "0.5rem",
                        color: "#64748b", textDecoration: "none", fontSize: "0.855rem",
                        padding: "0.5rem 0.75rem", borderRadius: "0.625rem",
                        transition: "all 0.2s",
                        border: "1px solid transparent",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#0a1628"; e.currentTarget.style.background = "#f4f6fb"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "#64748b"; e.currentTarget.style.background = "transparent"; }}
                    >
                      <ArrowRight size={14} style={{ color: "#c9a84c", flexShrink: 0 }} />
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .service-detail-grid { grid-template-columns: 1fr !important; }
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
