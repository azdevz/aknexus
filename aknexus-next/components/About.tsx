"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Globe, Clock, ArrowRight } from "lucide-react";

const processSteps = [
  { number: "01", title: "Discovery", description: "We deep-dive into your business goals, challenges, and competitive landscape through focused consultation." },
  { number: "02", title: "Strategy", description: "We craft a comprehensive technology roadmap and project plan tailored to your requirements." },
  { number: "03", title: "Build", description: "Our expert team executes using agile sprints with bi-weekly demos and full transparency." },
  { number: "04", title: "Support", description: "We provide ongoing maintenance, optimization, and scaling support for long-term success." },
];

const highlights = [
  { icon: <Users size={18} />, text: "15+ Technology Experts" },
  { icon: <CheckCircle size={18} />, text: "100+ Projects Delivered" },
  { icon: <Globe size={18} />, text: "UAE & USA Presence" },
  { icon: <Clock size={18} />, text: "24/7 Support" },
];

export default function About() {
  return (
    <section id="about" style={{ background: "#fff", padding: "6rem 0" }}>
      <div className="wrap">
        {/* Top two-column */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
            marginBottom: "6rem",
          }}
          className="about-grid"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">About Us</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                color: "#0a1628",
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
              }}
            >
              We Are{" "}
              <span className="gold-text">AK Nexus</span>
            </h2>
            <p style={{ color: "#64748b", lineHeight: 1.75, marginBottom: "1rem", fontSize: "0.975rem" }}>
              Founded with a vision to bridge cutting-edge technology and business needs, AK Nexus FZ LLC is a leading technology services provider based in the UAE — specializing in Blockchain, SaaS, Agentic AI, and UAE-compliant Digital Banking.
            </p>
            <p style={{ color: "#64748b", lineHeight: 1.75, marginBottom: "2rem", fontSize: "0.975rem" }}>
              With 15+ years of engineering excellence, our team delivers solutions that drive digital transformation and create measurable business value for clients across the Middle East, UK, and USA.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              {highlights.map((h) => (
                <div
                  key={h.text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    background: "#f4f6fb",
                    borderRadius: "0.875rem",
                    padding: "0.75rem 1rem",
                  }}
                >
                  <span style={{ color: "#c9a84c" }}>{h.icon}</span>
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#0a1628" }}>{h.text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <a href="/#contact" className="btn-gold">
                Work With Us <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/971526365585"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-navy"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Visual right panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              style={{
                borderRadius: "1.5rem",
                padding: "2px",
                background: "linear-gradient(135deg, #c9a84c, #1e3a5f)",
              }}
            >
              <div
                style={{
                  borderRadius: "calc(1.5rem - 2px)",
                  background: "linear-gradient(160deg, #050d1f 0%, #0a1628 100%)",
                  padding: "2.5rem",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {[
                    { label: "Blockchain", icon: "⛓️" },
                    { label: "Metaverse", icon: "🌐" },
                    { label: "SaaS", icon: "☁️" },
                    { label: "Agentic AI", icon: "🤖" },
                    { label: "Ecommerce", icon: "🛒" },
                    { label: "Fintech UAE", icon: "🏦" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "0.875rem",
                        padding: "1rem",
                        textAlign: "center",
                        transition: "border-color 0.2s",
                        cursor: "default",
                      }}
                    >
                      <div style={{ fontSize: "1.75rem", marginBottom: "0.4rem" }}>{item.icon}</div>
                      <div style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 600 }}>{item.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ textAlign: "center", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="gold-text" style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 900 }}>
                    15+
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                    Years Engineering Excellence
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="eyebrow">How We Work</span>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "#0a1628",
                marginTop: "0.25rem",
              }}
            >
              Our Process
            </h3>
            <div className="gold-divider" />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem",
            }}
            className="process-grid"
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                className="glass-card"
                style={{ padding: "2rem", textAlign: "center" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #0a1628, #1e3a5f)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                    color: "#c9a84c",
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "1rem",
                  }}
                >
                  {step.number}
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    color: "#0a1628",
                    marginBottom: "0.5rem",
                    fontSize: "1rem",
                  }}
                >
                  {step.title}
                </h4>
                <p style={{ color: "#64748b", fontSize: "0.83rem", lineHeight: 1.65 }}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .process-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
