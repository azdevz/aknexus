"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  Target,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#020818] text-white selection:bg-[#c9a84c] selection:text-black">
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 text-center">
        <div className="wrap max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] mb-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              About AK Nexus
            </span>
          </div>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white"
          >
            Delivery discipline applied to <span className="gold-text">legal marketing.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto font-normal">
            We bring enterprise-grade PMO and technology discipline to solo attorneys and small law practices.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 border-t border-white/10">
        <div className="wrap max-w-4xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-start gap-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#c9a84c] to-[#f5d88a] text-black font-black flex items-center justify-center text-2xl flex-shrink-0 shadow-xl">
            AC
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-white">Ayaz Chishti</h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-[#f5d88a] font-medium">
                Founder & Technical Lead
              </span>
            </div>
            <p className="text-white/80 text-base leading-relaxed mb-4">
              With 15+ years leading technology and delivery programmes across fintech, SaaS platforms, and enterprise PMO, Ayaz founded AK Nexus to solve a widespread problem in professional services: <strong>the breakdown between marketing clicks and actual signed clients.</strong>
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Small law firms don't have the time or overhead to manage four different subscriptions, babysit a web agency, and chase leads on their personal phones while in court. We apply rigorous engineering and PMO principles—defined scope, automated handoffs, tracked delivery, and transparent reporting—to give solo and small firms an institutional front office.
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              We operate under a simple principle: <strong>You own everything we touch.</strong> Your website, your Google Business Profile, your CRM data, and your ad accounts remain 100% yours.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 border-t border-white/10 bg-[rgba(5,13,31,0.6)]">
        <div className="wrap max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">Our Approach</span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl font-bold mt-2 text-white"
            >
              How we work differently
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02]">
              <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center mb-4">
                <Target size={20} />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Outcome-Centric</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We measure what matters to your bank account: consultations booked and signed retainers, not hollow vanity metrics like impressions or impressions.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02]">
              <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Zero Lock-In</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We don't trap clients in 12-month handcuffs. After an initial 3-month setup phase, agreements are month-to-month with 30 days' notice.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02]">
              <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center mb-4">
                <Briefcase size={20} />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Compliance-First</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We build around attorney advertising rules and confidential information boundaries. You review and approve all messaging before publication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/10 text-center">
        <div className="wrap max-w-2xl mx-auto">
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            Let's examine your firm's intake.
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8">
            Start with our free website and intake audit to see where prospective clients are falling through the cracks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/free-audit" className="btn-gold px-8 py-3.5 rounded-xl font-semibold text-sm">
              Get Your Free Audit
            </Link>
            <Link
              href="/book"
              className="px-7 py-3.5 rounded-xl font-medium text-sm border border-white/20 hover:bg-white/10 text-white transition-colors"
            >
              Book a 20-Minute Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
