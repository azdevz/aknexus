"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, Settings, Zap } from "lucide-react";

const reasons = [
  { icon: <Lightbulb size={22} />, title: "Innovative Approach", description: "We embrace cutting-edge technologies to solve complex business challenges with modern, forward-thinking solutions." },
  { icon: <Users size={22} />, title: "Expert Team", description: "Seasoned professionals with deep expertise in blockchain, AI, fintech, cloud, and enterprise software." },
  { icon: <Settings size={22} />, title: "Customized Solutions", description: "No templates. Every solution is architected from scratch to meet your exact requirements and objectives." },
  { icon: <Zap size={22} />, title: "Rapid Delivery", description: "Agile sprints, weekly demos, and a bias for action ensure you get to market faster than competitors." },
];

const statsRight = [
  { num: "100+", label: "Projects Delivered", emoji: "🚀" },
  { num: "40%+", label: "Avg. Conversion Uplift", emoji: "📈" },
  { num: "15+", label: "Tech Experts", emoji: "👨‍💻" },
  { num: "2", label: "Global Offices", emoji: "🌍" },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      style={{
        background: "linear-gradient(160deg, #f4f6fb 0%, #eef1f8 100%)",
        padding: "6rem 0",
      }}
    >
      <div className="wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="why-grid"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Why Choose Us</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                color: "#0a1628",
                marginBottom: "0.75rem",
                letterSpacing: "-0.02em",
              }}
            >
              Your Partner in
              <br />
              <span className="gold-text">Digital Transformation</span>
            </h2>
            <div className="gold-divider" style={{ margin: "0 0 1.5rem" }} />
            <p style={{ color: "#64748b", lineHeight: 1.75, marginBottom: "2.5rem", fontSize: "0.975rem" }}>
              AK Nexus combines technical expertise with strategic thinking to deliver technology solutions that give you a genuine competitive advantage — especially in the fast-growing UAE market.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  style={{ display: "flex", gap: "1rem" }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "0.875rem",
                      background: "linear-gradient(135deg, #0a1628, #1e3a5f)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#c9a84c",
                      flexShrink: 0,
                      boxShadow: "0 4px 16px rgba(10,22,40,0.15)",
                    }}
                  >
                    {reason.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        color: "#0a1628",
                        fontSize: "1rem",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {reason.title}
                    </h3>
                    <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.65 }}>
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
                marginBottom: "1.25rem",
              }}
            >
              {statsRight.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card"
                  style={{ padding: "2rem 1.5rem", textAlign: "center" }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{stat.emoji}</div>
                  <div
                    className="gold-text"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.8rem",
                      fontWeight: 900,
                      lineHeight: 1,
                      marginBottom: "0.35rem",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div style={{ color: "#64748b", fontSize: "0.78rem" }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* UAE highlight card */}
            <div
              style={{
                borderRadius: "1.25rem",
                padding: "1.75rem",
                background: "linear-gradient(135deg, #0a1628, #1e3a5f)",
                color: "#fff",
              }}
            >
              <div style={{ color: "#f5d88a", fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                🇦🇪 UAE Market Expertise
              </div>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem", lineHeight: 1.65 }}>
                Offices in Ras Al Khaimah and Sheridan, USA — we serve UAE startups, SMEs, and financial institutions with deep local knowledge and a global perspective.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
