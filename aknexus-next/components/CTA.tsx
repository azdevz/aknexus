"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
              Ready to Start?
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(1.75rem,4vw,2.75rem)", color: "#fff", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
              Let&apos;s Build Something Amazing Together
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: "520px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
              Book a free 30-minute consultation. No commitments — just expert advice on the best approach for your business goals.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://wa.me/971526365585?text=Hi%20AK%20Nexus%2C%20I%27d%20like%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" className="btn-gold">
                Chat on WhatsApp <ArrowRight size={18} />
              </a>
              <a href="/#contact" className="btn-ghost">
                Send a Message
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
