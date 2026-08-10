import Link from "next/link";

type LegalSection = {
  title: string;
  body?: string[];
  items?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export default function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <section style={{ background: "#f4f6fb", minHeight: "70vh", padding: "9rem 0 6rem" }}>
      <div className="wrap" style={{ maxWidth: "900px" }}>
        <div style={{ marginBottom: "3rem" }}>
          <span className="eyebrow">{eyebrow}</span>
          <h1 style={{ color: "#0a1628", fontSize: "clamp(2.3rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-.045em", marginBottom: "1rem" }}>{title}</h1>
          <p style={{ color: "#64748b", maxWidth: "720px", fontSize: "1.05rem", lineHeight: 1.75 }}>{intro}</p>
          <p style={{ color: "#94a3b8", fontSize: ".78rem", marginTop: "1rem" }}>Last updated: 10 August 2026</p>
        </div>

        <article className="glass-card" style={{ padding: "clamp(1.5rem, 4vw, 3rem)" }}>
          {sections.map((section) => (
            <section key={section.title} style={{ paddingBottom: "1.8rem", marginBottom: "1.8rem", borderBottom: "1px solid rgba(10,22,40,.08)" }}>
              <h2 style={{ color: "#0a1628", fontSize: "1.2rem", fontWeight: 700, marginBottom: ".7rem" }}>{section.title}</h2>
              {section.body?.map((paragraph) => <p key={paragraph} style={{ color: "#64748b", fontSize: ".92rem", lineHeight: 1.75, marginTop: ".65rem" }}>{paragraph}</p>)}
              {section.items && <ul style={{ color: "#64748b", fontSize: ".92rem", lineHeight: 1.75, margin: ".8rem 0 0 1.2rem" }}>{section.items.map((item) => <li key={item} style={{ marginTop: ".35rem" }}>{item}</li>)}</ul>}
            </section>
          ))}
          <section style={{ paddingBottom: 0 }}>
            <h2 style={{ color: "#0a1628", fontSize: "1.2rem", fontWeight: 700, marginBottom: ".7rem" }}>Contact us</h2>
            <p style={{ color: "#64748b", fontSize: ".92rem", lineHeight: 1.75 }}>For questions about this page, please contact AK Nexus at <a href="mailto:hello@aknexus.co" style={{ color: "#a8872f", fontWeight: 700 }}>hello@aknexus.co</a>.</p>
          </section>
        </article>

        <p style={{ color: "#94a3b8", fontSize: ".78rem", lineHeight: 1.65, marginTop: "1.4rem" }}>This page provides general information about AK Nexus&apos;s website practices and is not legal advice.</p>
        <Link href="/" style={{ display: "inline-flex", marginTop: "1.4rem", color: "#1e3a5f", fontSize: ".88rem", fontWeight: 700, textDecoration: "none" }}>← Return to AK Nexus</Link>
      </div>
    </section>
  );
}
