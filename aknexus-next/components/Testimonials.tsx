"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/content";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #020818 0%, #050d1f 50%, #0a1628 100%)",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "0.75rem",
            }}
          >
            Testimonials
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              color: "#fff",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Trusted by Industry Leaders
          </h2>
          <div className="gold-divider" />
          <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: "480px", margin: "1.25rem auto 0", lineHeight: 1.7 }}>
            Don&apos;t just take our word for it. See what our clients say about working with AK Nexus.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="dark-card"
              style={{ padding: "2rem" }}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Quote size={28} style={{ color: "#c9a84c", marginBottom: "1.25rem" }} />
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontStyle: "italic",
                  lineHeight: 1.75,
                  fontSize: "0.925rem",
                  marginBottom: "1.75rem",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #c9a84c, #f5d88a)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    color: "#020818",
                    flexShrink: 0,
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>{t.name}</p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem" }}>{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
