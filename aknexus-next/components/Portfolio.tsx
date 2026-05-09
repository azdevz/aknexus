"use client";

import { motion } from "framer-motion";
import { portfolioItems } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ background: "#fff", padding: "6rem 0" }}>
      <div className="wrap">
        <motion.div
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Our Work</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.8rem,4vw,2.75rem)", color: "#0a1628", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Projects We&apos;ve Powered
          </h2>
          <div className="gold-divider" />
          <p style={{ color: "#64748b", maxWidth: "520px", margin: "1.25rem auto 0", lineHeight: 1.7 }}>
            From crypto exchanges to AI platforms — real products built by real teams, trusted by clients across UAE, UK, and beyond.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="portfolio-grid">
          {portfolioItems.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{ overflow: "hidden", textDecoration: "none", display: "flex", flexDirection: "column" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              {/* Header */}
              <div style={{ height: "130px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "0.75rem", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", backdropFilter: "blur(8px)" }}>
                    {item.emoji}
                  </div>
                  <div>
                    <div style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem" }}>{item.title}</div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem", marginTop: "0.15rem" }}>{item.url.replace("https://","").replace("www.","").split("/")[0]}</div>
                  </div>
                </div>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, padding: "0.2rem 0.65rem", borderRadius: "100px", background: `${item.accent}18`, color: item.accent, marginBottom: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase", border: `1px solid ${item.accent}30` }}>
                  {item.category}
                </span>
                <p style={{ color: "#64748b", fontSize: "0.855rem", lineHeight: 1.65, flex: 1 }}>
                  {item.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .portfolio-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .portfolio-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
