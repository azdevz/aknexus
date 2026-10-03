import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Scale,
  Sparkles,
  Stethoscope,
  Wrench,
  Calculator,
  Hammer,
  CheckCircle2,
} from "lucide-react";
import { ALL_INDUSTRIES } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industry Solutions & Dedicated Practice Systems | AK Nexus",
  description:
    "Tailored websites, speed-to-lead automation, local SEO, and client acquisition systems built for small practices and high-ticket service businesses.",
};

const iconMap: Record<string, React.ReactNode> = {
  "family-law": <Scale size={28} className="text-[#f5d88a]" />,
  "roofers": <Hammer size={28} className="text-[#f5d88a]" />,
  "dental": <Stethoscope size={28} className="text-[#f5d88a]" />,
  "real-estate": <Building2 size={28} className="text-[#f5d88a]" />,
  "salons": <Sparkles size={28} className="text-[#f5d88a]" />,
  "accounting": <Calculator size={28} className="text-[#f5d88a]" />,
  "home-services": <Wrench size={28} className="text-[#f5d88a]" />,
};

export default function IndustriesIndexPage() {
  return (
    <div className="bg-[#020818] text-white selection:bg-[#c9a84c] selection:text-black">
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden text-center">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none opacity-20 blur-[130px] rounded-full"
          style={{ background: "linear-gradient(135deg, #c9a84c, #1e3a5f)" }}
        />

        <div className="wrap max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f5d88a] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              Dedicated Practice Verticals
            </span>
          </div>

          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white"
          >
            Specialized systems for <span className="gold-text">your industry.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto font-normal mb-8">
            Every vertical has unique intake patterns, customer urgency, and compliance rules. We build dedicated front-end systems tailored to how your clients search and buy.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#f5d88a]" />
              Industry-compliant messaging
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#f5d88a]" />
              Speed-to-lead automations
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-[#f5d88a]" />
              100% Client Asset Ownership
            </span>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 border-t border-white/10">
        <div className="wrap max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_INDUSTRIES.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-[#c9a84c]/50 transition-all flex flex-col justify-between group no-underline"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    {iconMap[ind.slug] || <ShieldCheck size={28} className="text-[#f5d88a]" />}
                  </div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#f5d88a] block mb-2">
                    {ind.industryTag}
                  </span>
                  <h3 className="font-bold text-2xl text-white mb-3 group-hover:text-[#f5d88a] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {ind.heroSubhead.length > 150
                      ? ind.heroSubhead.slice(0, 150) + "..."
                      : ind.heroSubhead}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-sm font-semibold text-[#f5d88a]">
                  <span>Explore {ind.name} System</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-white/10 text-center">
        <div className="wrap max-w-3xl mx-auto">
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            Don't see your specific industry?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Our core operating model—high-converting websites, automated speed-to-lead, and transparent reporting—adapts perfectly to any appointment-driven business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/free-audit" className="btn-gold px-8 py-4 text-base font-semibold rounded-xl">
              Get Your Free Audit
            </Link>
            <Link
              href="/book"
              className="px-6 py-4 rounded-xl text-base font-medium border border-white/20 bg-white/5 hover:bg-white/10 text-white"
            >
              Book a 20-Minute Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
