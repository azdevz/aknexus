"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send, MapPin, Mail, Phone } from "lucide-react";

const services = [
  "Blockchain Solutions", "Metaverse Development", "SaaS Development",
  "Project Management", "Agentic AI Solutions", "Ecommerce Business",
  "Digital Banking – UAE", "Other",
];

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name");
    const email = fd.get("email");
    const service = fd.get("service");
    const message = fd.get("message");
    const msg = encodeURIComponent(
      `Hi AK Nexus! I'm ${name} (${email}).\nService: ${service}\n\n${message}`
    );
    window.open(`https://wa.me/971526365585?text=${msg}`, "_blank");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" style={{ background: "#f4f6fb", padding: "6rem 0" }}>
      <div className="wrap">
        <motion.div
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Contact Us</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.8rem,4vw,2.75rem)", color: "#0a1628", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Get In Touch
          </h2>
          <div className="gold-divider" />
          <p style={{ color: "#64748b", maxWidth: "480px", margin: "1.25rem auto 0", lineHeight: 1.7 }}>
            Have a project in mind? Our team responds within 24 hours.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: "2.5rem", alignItems: "start" }} className="contact-grid">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {[
              { icon: <MapPin size={18} />, title: "UAE Office", lines: ["AK NEXUS FZ LLC", "RAKEZ Compass Coworking", "Ras Al Khaimah, UAE", "+971 66 78 3871"] },
              { icon: <MapPin size={18} />, title: "USA Office", lines: ["AK NEXUS LLC", "30 N Gould St Ste R", "Sheridan, WY 82801", "+1 307 403 0755"] },
              { icon: <Mail size={18} />, title: "Email", lines: ["info@aknexus.co", "hr@aknexus.co"] },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", gap: "1rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "0.75rem", background: "linear-gradient(135deg,#0a1628,#1e3a5f)", display: "flex", alignItems: "center", justifyContent: "center", color: "#c9a84c", flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0a1628", fontSize: "0.875rem", marginBottom: "0.35rem" }}>{item.title}</p>
                  {item.lines.map((l) => <p key={l} style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.6 }}>{l}</p>)}
                </div>
              </div>
            ))}

            <a href="https://wa.me/971526365585" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ marginTop: "0.5rem", width: "fit-content" }}>
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            className="glass-card"
            style={{ padding: "2.5rem" }}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0a1628", fontSize: "1.25rem", marginBottom: "1.75rem" }}>
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-row">
                {[
                  { name: "name", label: "Full Name", placeholder: "Your Name", type: "text" },
                  { name: "email", label: "Email Address", placeholder: "your@email.com", type: "email" },
                ].map((f) => (
                  <div key={f.name}>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#0a1628", marginBottom: "0.5rem" }}>{f.label} <span style={{ color: "#ef4444" }}>*</span></label>
                    <input name={f.name} type={f.type} required placeholder={f.placeholder} style={{ width: "100%", border: "1.5px solid rgba(10,22,40,0.1)", borderRadius: "0.75rem", padding: "0.75rem 1rem", fontSize: "0.875rem", outline: "none", background: "#fff", color: "#0a1628", transition: "border-color 0.2s" }} onFocus={(e) => (e.target.style.borderColor = "#c9a84c")} onBlur={(e) => (e.target.style.borderColor = "rgba(10,22,40,0.1)")} />
                  </div>
                ))}
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#0a1628", marginBottom: "0.5rem" }}>Service of Interest</label>
                <select name="service" style={{ width: "100%", border: "1.5px solid rgba(10,22,40,0.1)", borderRadius: "0.75rem", padding: "0.75rem 1rem", fontSize: "0.875rem", outline: "none", background: "#fff", color: "#0a1628" }}>
                  <option value="">Select a Service</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#0a1628", marginBottom: "0.5rem" }}>Message <span style={{ color: "#ef4444" }}>*</span></label>
                <textarea name="message" required rows={5} placeholder="Tell us about your project..." style={{ width: "100%", border: "1.5px solid rgba(10,22,40,0.1)", borderRadius: "0.75rem", padding: "0.75rem 1rem", fontSize: "0.875rem", outline: "none", background: "#fff", color: "#0a1628", resize: "none", fontFamily: "inherit", transition: "border-color 0.2s" }} onFocus={(e) => (e.target.style.borderColor = "#c9a84c")} onBlur={(e) => (e.target.style.borderColor = "rgba(10,22,40,0.1)")} />
              </div>

              <button type="submit" className="btn-gold" style={{ justifyContent: "center", width: "100%" }}>
                <Send size={17} /> Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
