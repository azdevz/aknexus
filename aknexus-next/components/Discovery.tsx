"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/content";
import { ArrowRight } from "lucide-react";

export default function Discovery() {
  return (
    <section
      id="how-it-works"
      style={{
        background: "linear-gradient(160deg, #020818 0%, #050d1f 50%, #0a1628 100%)",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decoration */}
      <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          style={{ textAlign: "center", marginBottom: "4rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "0.75rem" }}>
            How We Work
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.8rem,4vw,2.75rem)", color: "#fff", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            A Clear, Proven Process
          </h2>
          <div className="gold-divider" />
          <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: "520px", margin: "1.25rem auto 0", lineHeight: 1.7 }}>
            From idea to launch — and beyond. A clear, collaborative process that keeps you informed at every step.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "780px", margin: "0 auto 4rem" }}>
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              className="dark-card"
              style={{ padding: "1.75rem 2rem", display: "flex", alignItems: "flex-start", gap: "1.5rem" }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {/* Number */}
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", border: "2px solid rgba(201,168,76,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.85rem", color: "#c9a84c" }}>
                  {step.number}
                </div>
                {i < processSteps.length - 1 && (
                  <div style={{ width: "1px", height: "1.5rem", background: "rgba(201,168,76,0.2)" }} />
                )}
              </div>
              {/* Content */}
              <div style={{ paddingTop: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "1.3rem" }}>{step.icon}</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", fontSize: "1.05rem" }}>{step.title}</h3>
                </div>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.7 }}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          style={{ textAlign: "center" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
            No commitment required · 30 minutes, on us
          </p>
          <a
            href="https://wa.me/971526365585?text=Hi%20AK%20Nexus%2C%20I%27d%20like%20to%20book%20a%20free%20discovery%20call."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Book Free Discovery Call <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
