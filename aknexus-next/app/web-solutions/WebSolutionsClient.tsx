"use client";
import { motion } from "framer-motion";
import { ArrowRight, Check, Zap, Users, Globe, Headphones } from "lucide-react";

const serviceCards = [
  { icon: "🌐", title: "Website Development", desc: "Fast, SEO-optimized, mobile-first websites for any business or industry." },
  { icon: "⛓️", title: "Blockchain & Web3", desc: "Smart contracts, DeFi, NFT platforms, and Web3 integrations." },
  { icon: "☁️", title: "SaaS Development", desc: "Scalable multi-tenant platforms with subscription billing and cloud infra." },
  { icon: "🛒", title: "Ecommerce Stores", desc: "Custom Shopify or headless commerce with UAE payment integrations." },
  { icon: "🤖", title: "AI Chatbots & Agents", desc: "GPT-powered agents for lead qualification, support, and automation." },
  { icon: "📋", title: "Custom Web Apps", desc: "Bespoke platforms from concept to production, tailored to your needs." },
];

const whyUs = [
  { icon: <Zap size={22} />, title: "Rapid Delivery", desc: "Agile sprints and quick turnarounds without sacrificing quality." },
  { icon: <Users size={22} />, title: "UAE & USA Team", desc: "Local expertise with global reach — offices in RAK and Sheridan, WY." },
  { icon: <Globe size={22} />, title: "Full-Stack Capability", desc: "Frontend, backend, cloud, mobile — we handle every layer." },
  { icon: <Headphones size={22} />, title: "Ongoing Support", desc: "We don't disappear after launch. Long-term partnerships are our standard." },
];

const processTimeline = [
  { num: 1, label: "Discover", desc: "Understand goals, audience, and requirements." },
  { num: 2, label: "Design", desc: "Wireframes, UI/UX design, and prototype review." },
  { num: 3, label: "Build", desc: "Agile development with bi-weekly demos." },
  { num: 4, label: "Launch", desc: "Deploy, test, and go live with confidence." },
  { num: 5, label: "Support", desc: "Maintenance, updates, and growth." },
];

const portfolio = [
  { title: "DeFi Trading Platform", category: "Blockchain", bg: "linear-gradient(135deg,#1e3a5f,#0a1628)", emoji: "⛓️", accent: "#3b82f6" },
  { title: "Enterprise SaaS ERP", category: "SaaS", bg: "linear-gradient(135deg,#0c4a6e,#0a1628)", emoji: "☁️", accent: "#06b6d4" },
  { title: "UAE Ecommerce Store", category: "Ecommerce", bg: "linear-gradient(135deg,#4a044e,#1a0030)", emoji: "🛒", accent: "#ec4899" },
];

const SectionHead = ({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) => (
  <div style={{ textAlign: "center", marginBottom: "3rem" }}>
    <span className="eyebrow">{eyebrow}</span>
    <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.6rem,3vw,2.25rem)", color: "#0a1628", marginTop: "0.25rem" }}>{title}</h2>
    <div className="gold-divider" />
    {sub && <p style={{ color: "#64748b", maxWidth: "500px", margin: "1.25rem auto 0", lineHeight: 1.7 }}>{sub}</p>}
  </div>
);

export default function WebSolutionsClient() {
  return (
    <div style={{ background: "#f4f6fb" }}>

      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg,#020818,#050d1f,#0a1628)", paddingTop: "7.5rem", paddingBottom: "5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-15%", right: "-8%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(201,168,76,0.14) 0%,transparent 65%)", pointerEvents: "none" }} />
        <div className="wrap" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "100px", padding: "0.45rem 1.25rem", marginBottom: "1.75rem" }}>
            <Zap size={14} style={{ color: "#c9a84c" }} />
            <span style={{ color: "#f5d88a", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em" }}>Blockchain · SaaS · AI · Ecommerce · Web</span>
          </motion.div>
          <motion.h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem,5vw,3.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: "1.25rem", letterSpacing: "-0.02em" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Custom Digital Solutions for <span className="gold-text">Modern Business</span>
          </motion.h1>
          <motion.p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", marginBottom: "2.5rem", lineHeight: 1.75 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            From your first website to complex blockchain infrastructure — AK Nexus FZ LLC builds the technology that powers your growth.
          </motion.p>
          <motion.div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <a href="https://wa.me/971526365585?text=Hi%20AK%20Nexus%2C%20I%27d%20like%20to%20discuss%20a%20web%20solution." target="_blank" rel="noopener noreferrer" className="btn-gold">Book Free Consultation <ArrowRight size={18} /></a>
            <a href="/#services" className="btn-ghost">Explore Services</a>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="wrap">
          <SectionHead eyebrow="What We Build" title="Our Services" sub="A complete suite of digital services to take your business from idea to scale." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }} className="three-col">
            {serviceCards.map((s, i) => (
              <motion.div key={s.title} className="glass-card" style={{ padding: "2rem" }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0a1628", fontSize: "1rem", marginBottom: "0.5rem" }}>{s.title}</h3>
                <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.65 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: "#f4f6fb", padding: "5rem 0" }}>
        <div className="wrap">
          <SectionHead eyebrow="Why AK Nexus" title="Built Different" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.25rem" }} className="four-col">
            {whyUs.map((w, i) => (
              <motion.div key={w.title} className="glass-card" style={{ padding: "1.75rem", textAlign: "center" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "0.875rem", background: "linear-gradient(135deg,#0a1628,#1e3a5f)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", color: "#c9a84c" }}>{w.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0a1628", fontSize: "0.9rem", marginBottom: "0.4rem" }}>{w.title}</h3>
                <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: 1.65 }}>{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="wrap">
          <SectionHead eyebrow="Our Process" title="How We Deliver" />
          <div style={{ display: "flex", gap: "0", maxWidth: "900px", margin: "0 auto" }} className="process-timeline">
            {processTimeline.map((step, i) => (
              <motion.div key={step.label} style={{ flex: 1, textAlign: "center", padding: "0 0.75rem", position: "relative" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                {i < processTimeline.length - 1 && (
                  <div style={{ position: "absolute", top: "20px", left: "calc(50% + 20px)", width: "calc(100% - 40px)", height: "2px", background: "rgba(201,168,76,0.25)" }} />
                )}
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg,#c9a84c,#f5d88a)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.875rem", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.85rem", color: "#020818", position: "relative", zIndex: 1 }}>{step.num}</div>
                <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0a1628", fontSize: "0.875rem", marginBottom: "0.35rem" }}>{step.label}</h4>
                <p style={{ color: "#64748b", fontSize: "0.78rem", lineHeight: 1.6 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section style={{ background: "#f4f6fb", padding: "5rem 0" }}>
        <div className="wrap">
          <SectionHead eyebrow="Our Work" title="Recent Projects" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }} className="three-col">
            {portfolio.map((p, i) => (
              <motion.div key={p.title} className="glass-card" style={{ overflow: "hidden" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div style={{ height: "140px", background: p.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "3.5rem", opacity: 0.5 }}>{p.emoji}</span>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, padding: "0.2rem 0.65rem", borderRadius: "100px", background: `${p.accent}18`, color: p.accent, marginBottom: "0.65rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{p.category}</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0a1628", fontSize: "1rem" }}>{p.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose checklist */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="wrap" style={{ maxWidth: "700px", margin: "0 auto" }}>
          <SectionHead eyebrow="Our Promise" title="What You Get With AK Nexus" />
          <div className="glass-card" style={{ padding: "2.5rem" }}>
            {["Clean, maintainable code with full documentation","Transparent timelines and regular progress updates","UAE-compliant payment and data handling","Post-launch support and iterative improvements","Direct communication — no ticket queues"].map((item, i, arr) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem", paddingBottom: i < arr.length - 1 ? "1.1rem" : 0, marginBottom: i < arr.length - 1 ? "1.1rem" : 0, borderBottom: i < arr.length - 1 ? "1px solid rgba(10,22,40,0.06)" : "none" }}>
                <Check size={18} style={{ color: "#c9a84c", flexShrink: 0, marginTop: "0.1rem" }} />
                <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.65 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#f4f6fb", padding: "5rem 0" }}>
        <div className="wrap">
          <motion.div style={{ borderRadius: "1.75rem", padding: "4rem 2rem", background: "linear-gradient(135deg,#050d1f,#0a1628,#1e3a5f)", textAlign: "center", position: "relative", overflow: "hidden" }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ position: "absolute", top: "-20%", right: "-5%", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle,rgba(201,168,76,0.15) 0%,transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(1.75rem,4vw,2.5rem)", color: "#fff", marginBottom: "1rem", letterSpacing: "-0.02em" }}>Ready to Build Something Amazing?</h2>
              <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>Book a free 30-minute consultation. No commitments — just expert advice on the best approach for your goals.</p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://wa.me/971526365585?text=Hi%20AK%20Nexus%2C%20I%27d%20like%20to%20book%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" className="btn-gold">Book Free Consultation <ArrowRight size={18} /></a>
                <a href="/#contact" className="btn-ghost">Send a Message</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .three-col { grid-template-columns: 1fr 1fr !important; }
          .four-col { grid-template-columns: 1fr 1fr !important; }
          .process-timeline { flex-direction: column !important; align-items: flex-start; }
        }
        @media (max-width: 560px) {
          .three-col { grid-template-columns: 1fr !important; }
          .four-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
