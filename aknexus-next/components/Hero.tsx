"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Zap, ChevronDown } from "lucide-react";

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "15+", label: "Tech Experts" },
  { value: "UAE & USA", label: "Global Presence" },
  { value: "24/7", label: "Support" },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #020818 0%, #050d1f 40%, #0a1628 70%, #0f2040 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Geometric background shapes */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        {/* Large gold orb top right */}
        <div
          style={{
            position: "absolute",
            top: "-15%",
            right: "-10%",
            width: "650px",
            height: "650px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.04) 50%, transparent 70%)",
          }}
        />
        {/* Small gold orb bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "-5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 65%)",
          }}
        />
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Floating geometric circles */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "5%",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            border: "1px solid rgba(201,168,76,0.12)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "60%",
            right: "8%",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "1px solid rgba(201,168,76,0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "15%",
            width: "50px",
            height: "50px",
            border: "1px solid rgba(201,168,76,0.15)",
            transform: "rotate(45deg)",
          }}
        />
      </div>

      <div className="wrap" style={{ paddingTop: "7rem", paddingBottom: "5rem", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "100px",
              padding: "0.45rem 1.25rem",
              marginBottom: "2rem",
            }}
          >
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c9a84c" }} />
            <span style={{ color: "#f5d88a", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em" }}>
              UAE · ADGM · FSRA · Central Bank Compliant
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Build the Future with
            <br />
            <span className="gold-text">Expert Development</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: "1.15rem",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "580px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            From blockchain innovations to UAE-compliant digital banking and agentic AI —
            AK Nexus FZ LLC crafts digital solutions that power business growth across the Middle East and beyond.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "4rem" }}
          >
            <a
              href="https://wa.me/971526365585?text=Hi%20AK%20Nexus%2C%20I%27d%20like%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Get Free Consultation <ArrowRight size={18} />
            </a>
            <a href="/#services" className="btn-ghost">
              Explore Services
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "1rem",
                  padding: "1.25rem 0.75rem",
                  textAlign: "center",
                }}
              >
                <div
                  className="gold-text"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    marginBottom: "0.35rem",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
              marginTop: "3.5rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {[
              { icon: <Shield size={15} />, text: "UAE Central Bank Compliant" },
              { icon: <Globe size={15} />, text: "UAE & USA Offices" },
              { icon: <Zap size={15} />, text: "Agile & Rapid Delivery" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "0.8rem",
                }}
              >
                <span style={{ color: "#c9a84c" }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.3)",
          zIndex: 10,
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
