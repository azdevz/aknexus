"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Globe, Award, ArrowRight } from "lucide-react";

const processSteps = [
  { number: "01", title: "Discover", description: "Understand your business objectives, challenges, and what's driving the need for transformation." },
  { number: "02", title: "Assess", description: "Evaluate current capabilities, technology maturity, and organizational readiness." },
  { number: "03", title: "Strategize", description: "Develop a practical transformation roadmap aligned to business priorities." },
  { number: "04", title: "Implement", description: "Execute with disciplined programme management, governance, and full executive visibility." },
  { number: "05", title: "Adopt & Scale", description: "Enable change, build capability, and expand successful initiatives across the enterprise." },
];

const highlights = [
  { icon: <Users size={18} />, text: "15+ Years of Enterprise Experience" },
  { icon: <CheckCircle size={18} />, text: "Business-First Consulting Approach" },
  { icon: <Globe size={18} />, text: "International Client Engagements" },
  { icon: <Award size={18} />, text: "PMO & AI Advisory Excellence" },
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
            <span className="eyebrow">About AK Nexus</span>
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
              Enterprise Consulting,{" "}
              <span className="gold-text">Built on Strategy</span>
            </h2>
            <p style={{ color: "#64748b", lineHeight: 1.75, marginBottom: "1rem", fontSize: "0.975rem" }}>
              AK Nexus is an Enterprise AI & Digital Transformation Consulting firm helping organizations navigate complex business and technology change.
            </p>
            <p style={{ color: "#64748b", lineHeight: 1.75, marginBottom: "1rem", fontSize: "0.975rem" }}>
              Our expertise combines strategic consulting, enterprise project management, digital transformation, AI advisory, and technology delivery to help organizations improve performance and create sustainable business value.
            </p>
            <p style={{ color: "#64748b", lineHeight: 1.75, marginBottom: "2rem", fontSize: "0.975rem" }}>
              We believe successful transformation requires the right balance of strategy, governance, people, processes, and technology.
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
                {/* Founder card */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #c9a84c, #f5d88a)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 900,
                        fontSize: "0.9rem",
                        color: "#020818",
                        fontFamily: "var(--font-display)",
                        flexShrink: 0,
                      }}
                    >
                      AC
                    </div>
                    <div>
                      <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", fontFamily: "var(--font-display)" }}>
                        Ayaz Chishti
                      </div>
                      <div style={{ color: "#c9a84c", fontSize: "0.75rem", fontWeight: 600 }}>
                        Founder & Principal Consultant
                      </div>
                    </div>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", lineHeight: 1.65 }}>
                    15+ years leading enterprise technology initiatives across project management, digital transformation, AI strategy, fintech, SaaS, and PMO leadership.
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {[
                    { label: "AI Strategy", icon: "🧠" },
                    { label: "PMO", icon: "🏛️" },
                    { label: "Digital Transformation", icon: "⚡" },
                    { label: "Technology Advisory", icon: "🔭" },
                    { label: "Automation", icon: "⚙️" },
                    { label: "Change Management", icon: "🤝" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "0.875rem",
                        padding: "0.875rem",
                        textAlign: "center",
                        cursor: "default",
                      }}
                    >
                      <div style={{ fontSize: "1.5rem", marginBottom: "0.3rem" }}>{item.icon}</div>
                      <div style={{ color: "#fff", fontSize: "0.72rem", fontWeight: 600 }}>{item.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ textAlign: "center", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="gold-text" style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 900 }}>
                    15+
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                    Years of Enterprise Consulting
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Transformation Framework */}
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
              Our Transformation Framework
            </h3>
            <div className="gold-divider" />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "1.25rem",
            }}
            className="process-grid"
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                className="glass-card"
                style={{ padding: "1.75rem", textAlign: "center" }}
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
                <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.65 }}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .process-grid { grid-template-columns: 1fr 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .process-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
