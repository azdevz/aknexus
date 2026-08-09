"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CalendarClock,
  Check,
  CircleAlert,
  FileText,
  Gauge,
  KanbanSquare,
  MapPin,
  MessageCircle,
  Network,
  ShieldCheck,
  Timer,
  UsersRound,
} from "lucide-react";

const phone = "971526365585";

const problemPoints = [
  "Projects moving forward without clear governance",
  "Technical and business teams working in silos",
  "Delayed decisions and unresolved dependencies",
  "Weak RAID and risk management",
  "Poor executive reporting and vendor coordination",
  "Jira and Confluence environments lacking structure",
];

const serviceCards = [
  {
    icon: <KanbanSquare size={23} />,
    title: "Technical Project Management",
    description: "End-to-end delivery ownership across scope, schedule, dependencies, releases, vendors, and executive escalations.",
    items: ["Sprint & release planning", "Technical team coordination", "Delivery tracking"],
  },
  {
    icon: <ShieldCheck size={23} />,
    title: "PMO Setup & Governance",
    description: "Put an operating rhythm around complex delivery with clear controls, accountability, and decision-making.",
    items: ["RAID & RACI", "Steering governance", "Health dashboards"],
  },
  {
    icon: <Gauge size={23} />,
    title: "Agile Delivery",
    description: "Make agile ceremonies and tools useful for delivery—not simply more process for teams to maintain.",
    items: ["Backlog governance", "Capacity planning", "Jira & Confluence"],
  },
  {
    icon: <Bot size={23} />,
    title: "AI & Digital Transformation",
    description: "Coordinate AI, GenAI, data, automation, and technology roadmap initiatives with disciplined programme delivery.",
    items: ["AI project governance", "Vendor management", "Roadmap execution"],
  },
  {
    icon: <BarChart3 size={23} />,
    title: "Executive Reporting",
    description: "Turn delivery data into concise management decisions, risks, actions, and next steps.",
    items: ["Weekly reports", "Portfolio dashboards", "SteerCo packs"],
  },
];

const engagementModels = [
  ["Short-Term PMO", "Delivery gaps, project recovery, PMO setup"],
  ["3–6 Month Contract", "Transformation initiatives and major projects"],
  ["6–12 Month Contract", "Enterprise technology programmes"],
  ["Project-Based", "Defined implementation or delivery outcome"],
  ["Part-Time / Fractional", "Senior leadership for smaller organisations"],
  ["Remote or On-Site PMO", "Distributed or UAE-based teams"],
];

const contractReasons = [
  { Icon: Timer, title: "Faster deployment", copy: "Avoid months of recruitment for a delivery requirement that exists today." },
  { Icon: BriefcaseBusiness, title: "Lower employment overhead", copy: "No visa sponsorship, benefits, air tickets, relocation, or permanent employment cost." },
  { Icon: CalendarClock, title: "Flexible engagement", copy: "Scale support around your actual delivery needs—from a recovery sprint to a major programme." },
  { Icon: UsersRound, title: "Senior delivery leadership", copy: "Bring in practical technical delivery experience without adding permanent headcount." },
];

const skillGroups = [
  {
    title: "Delivery & PMO expertise",
    description: "The operating discipline that keeps programmes moving and leaders informed.",
    items: ["Agile & Scrum", "Sprint planning", "Backlog governance", "Capacity planning", "Resource forecasting", "RAID & risk management", "Budget tracking", "Executive reporting"],
  },
  {
    title: "AI & automation",
    description: "Practical AI-assisted delivery practices that reduce reporting effort and surface risk sooner.",
    items: ["Microsoft Copilot", "ChatGPT", "Claude", "Notion AI", "AI PMO Copilot", "Sprint-report automation", "Risk dashboards", "Roadmap forecasting"],
  },
  {
    title: "Technical fluency",
    description: "Enough technical depth to connect executive priorities with engineering execution.",
    items: ["AI / LLM & RAG", "SaaS architecture", "REST APIs", "Cloud: AWS & Azure", "CI/CD", "Python scripting", "Web3 & DeFi", "KYC / AML & VARA"],
  },
];

const toolGroups = [
  ["Project delivery", "Jira", "Confluence", "ClickUp", "Asana", "Trello", "MS Project"],
  ["Collaboration", "Slack", "Microsoft Teams", "Notion", "Google Drive", "Google Sheets"],
  ["Reporting & oversight", "Power BI", "Jira dashboards", "Figma (review)", "GitHub (oversight)"],
];

function WhatsappLink({ children, className = "btn-gold", message }: { children: React.ReactNode; className?: string; message: string }) {
  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function TechnicalPMOLanding() {
  return (
    <div style={{ background: "#f4f6fb" }}>
      <section
        id="technical-pmo"
        style={{
          minHeight: "760px",
          padding: "9.5rem 0 5rem",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #020818 0%, #07152b 53%, #0c2b46 100%)",
        }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.38, backgroundImage: "linear-gradient(rgba(201,168,76,.07) 1px, transparent 1px),linear-gradient(90deg, rgba(201,168,76,.07) 1px, transparent 1px)", backgroundSize: "88px 88px", maskImage: "linear-gradient(to bottom, black, transparent)" }} />
        <div style={{ position: "absolute", width: "680px", height: "680px", right: "-220px", top: "-200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,.16), transparent 66%)" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <div className="pmo-hero-grid">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: ".55rem", padding: ".45rem .9rem", border: "1px solid rgba(245,216,138,.34)", borderRadius: 999, color: "#f5d88a", background: "rgba(201,168,76,.1)", fontSize: ".7rem", fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase" }}>
              <MapPin size={14} /> UAE Contract Delivery Support
            </div>
            <h1 style={{ color: "white", fontSize: "clamp(2.55rem, 5.3vw, 4.65rem)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-.05em", maxWidth: "760px", margin: "1.5rem 0 1.35rem" }}>
              Need a Technical PMO <span className="gold-text">without the cost</span> of a permanent hire?
            </h1>
            <p style={{ maxWidth: "680px", color: "rgba(255,255,255,.72)", fontSize: "1.05rem", lineHeight: 1.8 }}>
              For established UAE companies that need delivery leadership quickly: hire an experienced Technical Project Manager / PMO Lead on a contract basis. Get hands-on governance, technical oversight, and executive reporting without a long permanent-hiring cycle.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "2.2rem" }}>
              <WhatsappLink message="Hi AK Nexus, I would like to book a free 30-minute Technical PMO discovery call.">
                Book a Free 30-Minute Discovery Call <ArrowRight size={17} />
              </WhatsappLink>
              <WhatsappLink className="btn-ghost" message="Hi AK Nexus, please share the Technical PMO profile.">
                Request Technical PMO Profile <FileText size={17} />
              </WhatsappLink>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem 2rem", marginTop: "3.25rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,.12)", color: "rgba(255,255,255,.72)", fontSize: ".88rem" }}>
              {["No visa sponsorship", "No employee benefits", "No relocation package", "Flexible engagement"].map((item) => <span key={item} style={{ display: "inline-flex", alignItems: "center", gap: ".45rem" }}><Check size={15} color="#f5d88a" /> {item}</span>)}
            </div>
            </motion.div>
            <motion.aside className="pmo-delivery-card" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.14 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.8rem" }}>
                <span style={{ color: "rgba(255,255,255,.55)", fontSize: ".68rem", letterSpacing: ".14em", fontWeight: 600, textTransform: "uppercase" }}>Delivery readiness</span>
                <span style={{ display: "flex", alignItems: "center", gap: ".35rem", color: "#bfe9ca", fontSize: ".72rem" }}><span className="pmo-status-dot" /> Available</span>
              </div>
              <p style={{ color: "white", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.22rem", lineHeight: 1.35, marginBottom: "1.5rem" }}>A practical operating rhythm for complex delivery.</p>
              <div className="pmo-delivery-line"><span>Project control</span><strong>Governance & RAID</strong></div>
              <div className="pmo-delivery-line"><span>Team alignment</span><strong>Technical & business</strong></div>
              <div className="pmo-delivery-line"><span>Executive clarity</span><strong>Reporting & actions</strong></div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,.11)", marginTop: "1.4rem", paddingTop: "1rem", color: "#f5d88a", fontSize: ".78rem", fontWeight: 600 }}>On-site · Hybrid · Remote</div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 0", background: "#fff" }}>
        <div className="wrap pmo-two-col">
          <div>
            <span className="eyebrow">The delivery gap</span>
            <h2 className="pmo-heading">Experienced delivery leadership—right when the project needs it.</h2>
            <p className="pmo-copy">Enterprise technology projects in the UAE do not always need another permanent headcount. They need someone who can step in quickly, establish control, and take ownership of delivery.</p>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0a1628", marginTop: "1.35rem" }}>You may not need another employee. You may need experienced delivery leadership now.</p>
          </div>
          <div className="glass-card" style={{ padding: "1.8rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: ".65rem", color: "#a8872f", fontWeight: 700, marginBottom: "1rem", fontFamily: "var(--font-display)" }}><CircleAlert size={19} /> Common challenges</div>
            <div style={{ display: "grid", gap: ".8rem" }}>
              {problemPoints.map((point) => <div key={point} style={{ display: "flex", gap: ".7rem", color: "#526174", fontSize: ".9rem" }}><span style={{ color: "#c9a84c", fontWeight: 900 }}>—</span>{point}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 0", background: "#eef2f8" }}>
        <div className="wrap">
          <div className="pmo-hiring-cta">
            <div>
              <span className="eyebrow" style={{ marginBottom: ".45rem" }}>Hiring made practical</span>
              <h2 style={{ color: "#0a1628", fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 700, letterSpacing: "-.025em", marginBottom: ".6rem" }}>A delivery hire for companies that need momentum—not another lengthy recruitment process.</h2>
              <p style={{ color: "#64748b", maxWidth: "670px", fontSize: ".95rem" }}>In 30 minutes, we can clarify the delivery gap, recommended engagement model, start timing, and the PMO outcomes your leadership team needs.</p>
            </div>
            <WhatsappLink message="Hi AK Nexus, our company is considering contract Technical PMO support. I would like to book a free 30-minute discovery call.">Book a Discovery Call <ArrowRight size={17} /></WhatsappLink>
          </div>
        </div>
      </section>

      <section id="capabilities" style={{ padding: "6rem 0" }}>
        <div className="wrap">
          <div className="pmo-capability-intro">
            <div>
              <span className="eyebrow">Contract-based Technical PMO</span>
              <h2 className="pmo-heading">Execution that brings structure to complex technology delivery.</h2>
              <p className="pmo-copy">Engage for a defined period, transformation programme, delivery gap, or project outcome. Available on-site in the UAE, remote, or hybrid.</p>
            </div>
            <aside className="pmo-capability-summary">
              <span style={{ color: "#a8872f", fontSize: ".7rem", letterSpacing: ".12em", fontWeight: 700, textTransform: "uppercase" }}>Where support starts</span>
              <div className="pmo-summary-list">
                <span><Check size={15} /> Project recovery</span>
                <span><Check size={15} /> PMO setup</span>
                <span><Check size={15} /> Programme governance</span>
                <span><Check size={15} /> Transformation delivery</span>
              </div>
              <p>Flexible terms for a clear delivery need.</p>
            </aside>
          </div>
          <div className="pmo-services-grid">
            {serviceCards.map((card, index) => (
              <motion.article key={card.title} className="glass-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .35, delay: index * .06 }} style={{ padding: "1.75rem" }}>
                <div style={{ width: 46, height: 46, borderRadius: ".8rem", display: "grid", placeItems: "center", color: "#f5d88a", background: "linear-gradient(135deg,#0a1628,#1e3a5f)", marginBottom: "1.15rem" }}>{card.icon}</div>
                <h3 style={{ color: "#0a1628", fontSize: "1.13rem", fontWeight: 800, marginBottom: ".65rem" }}>{card.title}</h3>
                <p style={{ fontSize: ".88rem", color: "#64748b", lineHeight: 1.65, minHeight: "70px" }}>{card.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: ".45rem", marginTop: "1.2rem" }}>{card.items.map((item) => <span key={item} className="pmo-pill">{item}</span>)}</div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="technical-skills" style={{ padding: "6rem 0", background: "#fff" }}>
        <div className="wrap">
          <div style={{ maxWidth: "720px", marginBottom: "3rem" }}>
            <span className="eyebrow">Technical skills, expertise & tools</span>
            <h2 className="pmo-heading">A delivery leader who can work comfortably across the business, the PMO, and the technology team.</h2>
            <p className="pmo-copy">Hands-on expertise across delivery governance, AI-assisted PMO operations, and the tools that keep modern technology programmes aligned.</p>
          </div>
          <div className="pmo-skills-grid">
            {skillGroups.map((group, index) => (
              <article key={group.title} className="glass-card" style={{ padding: "1.7rem" }}>
                <div className="pmo-skill-number">0{index + 1}</div>
                <h3 style={{ color: "#0a1628", fontSize: "1.15rem", fontWeight: 700, margin: ".7rem 0 .55rem" }}>{group.title}</h3>
                <p style={{ color: "#64748b", fontSize: ".86rem", lineHeight: 1.65, minHeight: "68px" }}>{group.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: ".45rem", marginTop: "1.15rem" }}>{group.items.map((item) => <span key={item} className="pmo-pill">{item}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="pmo-tools-strip">
            {toolGroups.map(([label, ...tools]) => <div key={label} className="pmo-tools-group"><span>{label}</span><p>{tools.join(" · ")}</p></div>)}
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 0", background: "#071426", color: "white", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 85% 10%, rgba(201,168,76,.18), transparent 35%)" }} />
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.3rem" }}>
            <span className="eyebrow">Why contract-based PMO</span>
            <h2 style={{ fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 800 }}>More control, less employment overhead.</h2>
          </div>
          <div className="pmo-reasons-grid">
            {contractReasons.map(({ Icon, title, copy }) => <div key={title} className="dark-card" style={{ padding: "1.65rem" }}><div style={{ color: "#f5d88a", marginBottom: ".9rem" }}><Icon size={22} /></div><h3 style={{ fontSize: "1.05rem", marginBottom: ".55rem" }}>{title}</h3><p style={{ color: "rgba(255,255,255,.63)", fontSize: ".88rem", lineHeight: 1.65 }}>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 0", background: "#fff" }}>
        <div className="wrap pmo-two-col">
          <div>
            <span className="eyebrow">Engagement models</span>
            <h2 className="pmo-heading">Support shaped around the programme, not a fixed hiring plan.</h2>
            <p className="pmo-copy">Choose an engagement that gives your organisation the precise level of delivery support it needs.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".55rem", marginTop: "1.5rem" }}>
              {["On-site / In-house", "Remote", "Hybrid", "Immediate availability*"].map((item) => <span key={item} className="pmo-pill">{item}</span>)}
            </div>
          </div>
          <div style={{ border: "1px solid rgba(10,22,40,.1)", borderRadius: "1rem", overflow: "hidden" }}>
            {engagementModels.map(([model, bestFor], index) => <div key={model} style={{ display: "grid", gridTemplateColumns: "minmax(130px, .9fr) 1.4fr", gap: "1rem", padding: "1rem 1.2rem", background: index % 2 ? "#f7f9fc" : "#fff", borderBottom: index === engagementModels.length - 1 ? "none" : "1px solid rgba(10,22,40,.07)" }}><strong style={{ color: "#0a1628", fontSize: ".84rem" }}>{model}</strong><span style={{ color: "#64748b", fontSize: ".83rem" }}>{bestFor}</span></div>)}
          </div>
        </div>
      </section>

      <section style={{ padding: "5.5rem 0" }}>
        <div className="wrap pmo-audience-grid">
          <div>
            <span className="eyebrow">Who this is for</span>
            <h2 className="pmo-heading">For teams with meaningful technology delivery at stake.</h2>
            <div className="pmo-list-grid" style={{ marginTop: "1.5rem" }}>
              {["Technology & SaaS", "FinTech & financial services", "AI & digital transformation", "Government & semi-government", "System integrators", "Enterprise technology programmes"].map((item) => <div key={item}><Check size={15} />{item}</div>)}
            </div>
          </div>
          <div style={{ borderLeft: "2px solid #c9a84c", paddingLeft: "2rem" }}>
            <span className="eyebrow">When to engage</span>
            <h3 style={{ color: "#0a1628", fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem" }}>A clear delivery trigger</h3>
            <div style={{ display: "grid", gap: ".7rem", color: "#526174", fontSize: ".9rem" }}>
              {["A Project Manager has left unexpectedly", "A major project is behind schedule", "A transformation programme is starting", "Multiple vendors need centralised coordination", "Your CTO or CIO needs stronger delivery governance", "You need more capacity without permanent headcount"].map((item) => <div key={item} style={{ display: "flex", gap: ".6rem" }}><Network size={16} color="#c9a84c" />{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "5.5rem 0", background: "linear-gradient(135deg,#c9a84c,#f5d88a)" }}>
        <div className="wrap" style={{ textAlign: "center", maxWidth: "860px" }}>
          <span style={{ color: "#55400a", fontSize: ".76rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".15em" }}>Ready when delivery cannot wait</span>
          <h2 style={{ color: "#020818", fontSize: "clamp(2rem,4vw,3.25rem)", fontWeight: 900, letterSpacing: "-.035em", margin: ".8rem 0 1rem" }}>Bring experienced delivery leadership into the programme.</h2>
          <p style={{ color: "#273344", fontSize: "1.05rem", maxWidth: "620px", margin: "0 auto 1.8rem" }}>Book a no-obligation discovery call to discuss your project, delivery gap, or PMO requirement.</p>
          <WhatsappLink className="pmo-dark-button" message="Hi AK Nexus, I would like to book a free 30-minute Technical PMO discovery call."><MessageCircle size={18} /> Book a Free Discovery Call</WhatsappLink>
          <p style={{ color: "#55400a", fontSize: ".76rem", marginTop: "1rem" }}>* Subject to contract confirmation and working-day availability.</p>
        </div>
      </section>

      <style>{`
        .pmo-heading { color:#0a1628; font-size:clamp(1.9rem,3.4vw,2.8rem); font-weight:800; letter-spacing:-.03em; margin-bottom:1.1rem; }
        .pmo-hero-grid { display:grid; grid-template-columns:minmax(0,1.45fr) minmax(290px,.55fr); align-items:center; gap:3.5rem; }
        .pmo-delivery-card { padding:1.7rem; border:1px solid rgba(245,216,138,.2); background:linear-gradient(145deg,rgba(255,255,255,.09),rgba(255,255,255,.035)); border-radius:1.15rem; box-shadow:0 24px 60px rgba(0,0,0,.18); backdrop-filter:blur(14px); }
        .pmo-status-dot { width:7px; height:7px; border-radius:50%; background:#70d18a; box-shadow:0 0 0 4px rgba(112,209,138,.12); }
        .pmo-delivery-line { display:flex; flex-direction:column; gap:.2rem; padding:.8rem 0; border-top:1px solid rgba(255,255,255,.09); }.pmo-delivery-line span{color:rgba(255,255,255,.48);font-size:.7rem;letter-spacing:.07em;text-transform:uppercase}.pmo-delivery-line strong{color:rgba(255,255,255,.88);font-size:.85rem;font-weight:500}
        .pmo-hiring-cta { display:grid; grid-template-columns:minmax(0,1fr) auto; gap:2rem; align-items:center; padding:2rem 2.2rem; background:#fff; border:1px solid rgba(10,22,40,.08); border-radius:1.15rem; box-shadow:0 12px 34px rgba(10,22,40,.06); }.pmo-hiring-cta .btn-gold{white-space:nowrap;flex-shrink:0;min-width:max-content}
        .pmo-capability-intro { display:grid; grid-template-columns:minmax(0,1.2fr) minmax(280px,.8fr); gap:3rem; align-items:end; margin-bottom:3rem; }.pmo-capability-summary{padding:1.35rem 1.5rem;border-left:2px solid #c9a84c;background:rgba(255,255,255,.55)}.pmo-summary-list{display:grid;grid-template-columns:1fr 1fr;gap:.65rem;margin:1rem 0}.pmo-summary-list span{display:flex;align-items:center;gap:.4rem;color:#405069;font-size:.82rem;font-weight:600}.pmo-summary-list svg{color:#c9a84c}.pmo-capability-summary p{color:#718096;font-size:.78rem;margin:0}
        .pmo-skills-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}.pmo-skill-number{color:#c9a84c;font-size:.72rem;font-weight:700;letter-spacing:.12em}.pmo-tools-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:1.3rem;padding:1.3rem 1.5rem;border:1px solid rgba(10,22,40,.08);border-radius:1rem;background:#f8fafc}.pmo-tools-group+ .pmo-tools-group{border-left:1px solid rgba(10,22,40,.09);padding-left:1.25rem}.pmo-tools-group span{color:#a8872f;font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase}.pmo-tools-group p{color:#506078;font-size:.82rem;line-height:1.65;margin-top:.45rem}
        .pmo-copy { color:#64748b; max-width:590px; font-size:1rem; line-height:1.75; }
        .pmo-two-col { display:grid; grid-template-columns:1.05fr .95fr; gap:5rem; align-items:center; }
        .pmo-services-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.25rem; }
        .pmo-services-grid > :last-child { grid-column:2 / span 1; }
        .pmo-pill { display:inline-flex; align-items:center; color:#a8872f; background:rgba(201,168,76,.11); border:1px solid rgba(201,168,76,.2); padding:.3rem .65rem; border-radius:999px; font-size:.72rem; font-weight:700; }
        .pmo-reasons-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1.15rem; }
        .pmo-audience-grid { display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:start; }
        .pmo-list-grid { display:grid; grid-template-columns:1fr 1fr; gap:.8rem; color:#526174; font-size:.88rem; }
        .pmo-list-grid div { display:flex; gap:.5rem; align-items:center; }.pmo-list-grid svg { color:#c9a84c; flex:none; }
        .pmo-dark-button { display:inline-flex; align-items:center; gap:.55rem; padding:.9rem 1.6rem; border-radius:.8rem; background:#020818; color:#fff; font-family:var(--font-display); font-size:.9rem; font-weight:700; text-decoration:none; box-shadow:0 6px 20px rgba(2,8,24,.24); transition:transform .2s ease; }.pmo-dark-button:hover{transform:translateY(-2px)}
        @media(max-width:1000px) { .pmo-hero-grid,.pmo-capability-intro{grid-template-columns:1fr}.pmo-delivery-card{max-width:560px}.pmo-capability-summary{max-width:620px}.pmo-services-grid{grid-template-columns:repeat(2,1fr)}.pmo-skills-grid{grid-template-columns:1fr}.pmo-services-grid > :last-child{grid-column:auto}.pmo-reasons-grid{grid-template-columns:repeat(2,1fr)}.pmo-tools-strip{grid-template-columns:1fr}.pmo-tools-group+.pmo-tools-group{border-left:0;border-top:1px solid rgba(10,22,40,.09);padding:1rem 0 0}.pmo-two-col,.pmo-audience-grid{gap:2.5rem} }
        @media(max-width:650px) { .pmo-two-col,.pmo-audience-grid,.pmo-services-grid,.pmo-reasons-grid,.pmo-list-grid{grid-template-columns:1fr}.pmo-hiring-cta{grid-template-columns:1fr;padding:1.6rem}.pmo-hiring-cta .btn-gold{min-width:0;width:100%;justify-content:center}.pmo-summary-list{grid-template-columns:1fr}.pmo-audience-grid>div:last-child{border-left:0;border-top:2px solid #c9a84c;padding:2rem 0 0}.pmo-two-col{gap:2.3rem} }
      `}</style>
    </div>
  );
}
