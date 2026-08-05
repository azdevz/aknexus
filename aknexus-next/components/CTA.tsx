"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section style={{ background: "#f4f6fb", padding: "5rem 0" }}>
      <div className="wrap">
        <motion.div
          style={{
            borderRadius: "1.75rem",
            padding: "4rem 3rem",
            background: "linear-gradient(135deg, #050d1f 0%, #0a1628 50%, #1e3a5f 100%)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ position: "absolute", top: "-20%", right: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-20%", left: "-5%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>
              Ready to Transform?
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(1.75rem,4vw,2.75rem)", color: "#fff", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
              Ready to Transform Your Business?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: "560px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
              Whether you&apos;re planning an AI initiative, modernizing operations, strengthening programme governance, or delivering enterprise transformation — AK Nexus is ready to help.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/#contact" className="btn-gold">
                <Calendar size={18} /> Book a Discovery Call
              </a>
              <a href="/#services" className="btn-ghost">
                Explore Our Services <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
