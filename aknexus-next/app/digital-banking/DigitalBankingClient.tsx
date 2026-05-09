"use client";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Check, Building, CreditCard, Globe, Zap } from "lucide-react";

const painPoints = [
  { icon: "😰", title: "Complex Licensing", desc: "Navigating UAE Central Bank, ADGM, and FSRA regulations alone is time-consuming and costly." },
  { icon: "⏳", title: "Slow Onboarding", desc: "Traditional KYC processes lose customers before they even start." },
  { icon: "🔧", title: "No Compliant Tech Partner", desc: "Generic platforms don't meet UAE fintech standards — you need a specialist." },
];
const features = [
  { icon: <Building size={22} />, title: "IBAN Accounts", desc: "Instant onboarding with integrated KYC/AML and biometric verification." },
  { icon: <CreditCard size={22} />, title: "Fiat On/Off-Ramp", desc: "AED, USD, EUR via PayTabs, Network International, Stripe UAE." },
  { icon: <Shield size={22} />, title: "Licensing Guidance", desc: "Central Bank, ADGM, FSRA — we guide every regulatory step." },
  { icon: <Globe size={22} />, title: "Payment Gateway APIs", desc: "Connect all major UAE and global payment processors." },
  { icon: <Zap size={22} />, title: "White-Label Banking Apps", desc: "Multi-language, biometric login, real-time push notifications." },
];
const steps = [
  { num: "01", title: "Free Consultation", desc: "We understand your fintech vision and regulatory landscape." },
  { num: "02", title: "Build & Comply", desc: "We develop your platform meeting all UAE Central Bank standards." },
  { num: "03", title: "Launch & Scale", desc: "Go live with full support and ongoing maintenance." },
];
const SectionHead = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div style={{ textAlign: "center", marginBottom: "3rem" }}>
    <span className="eyebrow">{eyebrow}</span>
    <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.6rem,3vw,2.25rem)", color: "#0a1628", marginTop: "0.25rem" }}>{title}</h2>
    <div className="gold-divider" />
  </div>
);
export default function DigitalBankingClient() {
  return (
    <div style={{ background: "#f4f6fb" }}>
      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg,#020818,#050d1f,#0a1628)", paddingTop: "7.5rem", paddingBottom: "5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-15%", right: "-8%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(201,168,76,0.14) 0%,transparent 65%)", pointerEvents: "none" }} />
        <div className="wrap" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "100px", padding: "0.45rem 1.25rem", marginBottom: "1.75rem" }}>
            <Shield size={14} style={{ color: "#c9a84c" }} />
            <span style={{ color: "#f5d88a", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em" }}>UAE Central Bank · ADGM · FSRA Compliant</span>
          </motion.div>
          <motion.h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem,5vw,3.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: "1.25rem", letterSpacing: "-0.02em" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Launch Your <span className="gold-text">UAE-Compliant Digital Bank</span>
          </motion.h1>
          <motion.p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", marginBottom: "2.5rem", lineHeight: 1.75 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            From IBAN issuance to regulatory licensing — AK Nexus handles the entire fintech lifecycle so you can focus on growth.
          </motion.p>
          <motion.div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <a href="https://wa.me/971526365585?text=Hi%20AK%20Nexus%2C%20I%20want%20to%20discuss%20Digital%20Banking%20UAE." target="_blank" rel="noopener noreferrer" className="btn-gold">Start Your Banking Journey <ArrowRight size={18} /></a>
            <a href="/#contact" className="btn-ghost">Book Free Consultation</a>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="wrap"><SectionHead eyebrow="Common Challenges" title="The Problems We Solve" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }} className="three-col">
            {painPoints.map((p, i) => (
              <motion.div key={p.title} className="glass-card" style={{ padding: "2rem", textAlign: "center" }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{p.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0a1628", marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.65 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: "#f4f6fb", padding: "5rem 0" }}>
        <div className="wrap"><SectionHead eyebrow="What We Build" title="Everything You Need to Launch" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }} className="three-col">
            {features.map((f, i) => (
              <motion.div key={f.title} className="glass-card" style={{ padding: "1.75rem", display: "flex", gap: "1rem" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                <div style={{ width: "46px", height: "46px", borderRadius: "0.875rem", background: "linear-gradient(135deg,#c9a84c,#f5d88a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#020818", flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0a1628", fontSize: "0.9rem", marginBottom: "0.4rem" }}>{f.title}</h3>
                  <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="wrap"><SectionHead eyebrow="The Process" title="How It Works" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem", maxWidth: "700px", margin: "0 auto" }} className="three-col">
            {steps.map((step, i) => (
              <motion.div key={step.num} style={{ textAlign: "center" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "linear-gradient(135deg,#c9a84c,#f5d88a)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.1rem", color: "#020818" }}>{step.num}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0a1628", marginBottom: "0.5rem" }}>{step.title}</h3>
                <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.65 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AK Nexus */}
      <section style={{ background: "#f4f6fb", padding: "5rem 0" }}>
        <div className="wrap" style={{ maxWidth: "700px", margin: "0 auto" }}>
          <SectionHead eyebrow="Why AK Nexus" title="Local Expertise. Global Standards." />
          <div className="glass-card" style={{ padding: "2.5rem" }}>
            {[
              { title: "Local Expertise", desc: "Deep understanding of UAE fintech regulations and market dynamics." },
              { title: "End-to-End Service", desc: "From legal setup and licensing to platform launch and maintenance." },
              { title: "Scalable Technology", desc: "Future-proof architecture ready to expand as your users grow." },
              { title: "Rapid Deployment", desc: "Agile delivery to get you to market faster than competitors." },
            ].map((item, i, arr) => (
              <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", paddingBottom: i < arr.length - 1 ? "1.25rem" : 0, marginBottom: i < arr.length - 1 ? "1.25rem" : 0, borderBottom: i < arr.length - 1 ? "1px solid rgba(10,22,40,0.06)" : "none" }}>
                <Check size={19} style={{ color: "#c9a84c", flexShrink: 0, marginTop: "0.1rem" }} />
                <div><span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0a1628" }}>{item.title}: </span><span style={{ color: "#64748b", fontSize: "0.9rem" }}>{item.desc}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="wrap">
          <motion.div style={{ borderRadius: "1.75rem", padding: "4rem 2rem", background: "linear-gradient(135deg,#050d1f,#0a1628,#1e3a5f)", textAlign: "center", position: "relative", overflow: "hidden" }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ position: "absolute", top: "-20%", right: "-5%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle,rgba(201,168,76,0.15) 0%,transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(1.75rem,4vw,2.5rem)", color: "#fff", marginBottom: "1rem", letterSpacing: "-0.02em" }}>Start Your UAE Digital Banking Journey</h2>
              <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>Let&apos;s build your compliant, secure banking solution. Our team responds within 24 hours.</p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://wa.me/971526365585?text=Hi%20AK%20Nexus%2C%20I%20want%20to%20discuss%20Digital%20Banking%20UAE." target="_blank" rel="noopener noreferrer" className="btn-gold">Chat on WhatsApp <ArrowRight size={18} /></a>
                <a href="/#contact" className="btn-ghost">Send a Message</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <style>{`@media(max-width:800px){.three-col{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}
