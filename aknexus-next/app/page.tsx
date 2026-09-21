"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Layout,
  MessageSquareCheck,
  Search,
  Target,
  BarChart3,
  CheckCircle2,
  Calendar,
  Lock,
  TrendingUp,
  FileSearch,
} from "lucide-react";
import { AGENCY_PLANS } from "@/data/agency";

export default function AgencyHomePage() {
  return (
    <div className="bg-[#020818] text-white selection:bg-[#c9a84c] selection:text-black">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Ambient background glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none opacity-20 blur-[130px] rounded-full"
          style={{ background: "linear-gradient(135deg, #c9a84c, #0984e3)" }}
        />

        <div className="wrap relative z-10 text-center max-w-4xl mx-auto">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#f5d88a] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              For Solo & Small Law Firms
            </span>
          </div>

          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 text-white"
          >
            Turn more inquiries into{" "}
            <span className="gold-text">signed clients.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
            AK Nexus runs your website, intake system and marketing for one monthly fee,
            so nothing gets missed between the first click and the signed retainer.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/free-audit"
              className="btn-gold w-full sm:w-auto px-8 py-3.5 text-base font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              <span>Get Your Free Website & Intake Audit</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/book"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-base font-medium border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all text-center"
            >
              Book a 20-Minute Call
            </Link>
          </div>

          {/* Trust line */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#f5d88a]" />
              Built for solo & 1–3 staff firms
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#f5d88a]" />
              Month-to-month after 3 months
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#f5d88a]" />
              You own everything
            </span>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 border-t border-white/10 bg-[rgba(5,13,31,0.6)]">
        <div className="wrap max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              The Core Breakdown
            </span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-white"
            >
              Most small firms don't have a marketing problem.
              <br className="hidden sm:inline" />
              <span className="text-[#f5d88a]"> They have a follow-up problem.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl border border-red-500/20 bg-red-500/[0.03] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 text-red-400">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1.5 text-white">Slow responses</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  An inquiry that waits a day for a reply often hires someone else. In legal matters, the firm that answers first and clearly usually gets the consultation.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white/80">
                <Layout size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1.5 text-white">Scattered tools</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  A website in one place, contact forms dumping to an inbox, follow-up texts sent from personal cell phones, and leads tracked in spreadsheets.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white/80">
                <BarChart3 size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1.5 text-white">No visibility</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  You cannot tell which marketing generated an actual signed retainer versus vanity clicks, leaving you guessing where your marketing dollars go.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl border border-red-500/20 bg-red-500/[0.03] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 text-red-400">
                <Lock size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1.5 text-white">Agency lock-in</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Year-long restrictive contracts with marketing agencies who hold your website, domain, and ad accounts hostage if you decide to leave.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 border-t border-white/10">
        <div className="wrap">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              Full Front-End Execution
            </span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl sm:text-4xl font-bold mt-2 text-white"
            >
              One team for the whole front end of your practice.
            </h2>
            <p className="text-white/60 text-sm mt-3">
              We connect the dots between your public website, intake automation, local discovery, and paid client acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-[#c9a84c]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Layout size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Conversion Website</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                A fast, mobile-first site specifically built to convert visitors into consultation requests without clutter or confusing legal jargon.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-[#c9a84c]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <MessageSquareCheck size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Intake & CRM</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Every inquiry is captured, tracked and followed up automatically with instant email and SMS acknowledgements, from first contact to signed retainer.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-[#c9a84c]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Search size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Local SEO</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Get found when people in your county and city search for a family lawyer. Google Business Profile setup, citation building, and on-page optimization.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-[#c9a84c]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Target size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Managed Ads</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Google and Meta campaigns managed specifically for cost per signed case, not just clicks. Ad spend is billed directly by Google/Meta to your firm.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-[#c9a84c]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <BarChart3 size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Clear Reporting</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                A clear monthly report showing leads, consultation bookings, and signed retainers by source, followed by a regular review call.
              </p>
            </div>

            {/* Card 6 / Vertical Callout */}
            <div className="p-8 rounded-2xl border border-[#c9a84c]/30 bg-[rgba(201,168,76,0.06)] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#f5d88a]">Specialized Vertical</span>
                <h3 className="font-bold text-xl mt-2 mb-3 text-white">Family Law Practice Growth</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Explore our dedicated workflow tailored specifically for divorce, child custody, and family law client intake.
                </p>
              </div>
              <Link
                href="/family-law"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#f5d88a] hover:underline mt-6"
              >
                <span>View Family Law System</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why AK Nexus */}
      <section className="py-20 border-t border-white/10 bg-[rgba(5,13,31,0.5)]">
        <div className="wrap max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">The Differentiators</span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl font-bold mt-2 text-white"
            >
              Why attorneys choose AK Nexus
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#c9a84c]/20 text-[#f5d88a] flex items-center justify-center flex-shrink-0 mt-1">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 className="font-bold text-white text-base mb-1">You own everything</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Website, domain, Google Business Profile, ad accounts and CRM data are set up in your name. If you ever leave, you take it all.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#c9a84c]/20 text-[#f5d88a] flex items-center justify-center flex-shrink-0 mt-1">
                <Calendar size={18} />
              </div>
              <div>
                <h4 className="font-bold text-white text-base mb-1">No long lock-in</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  3-month minimum to build, test and optimize, then month-to-month with 30 days' notice. We keep your business through performance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#c9a84c]/20 text-[#f5d88a] flex items-center justify-center flex-shrink-0 mt-1">
                <TrendingUp size={18} />
              </div>
              <div>
                <h4 className="font-bold text-white text-base mb-1">Signed cases, not vanity metrics</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  We don't brag about impressions or clicks. We track and report on consultations booked and retainers signed.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#c9a84c]/20 text-[#f5d88a] flex items-center justify-center flex-shrink-0 mt-1">
                <Target size={18} />
              </div>
              <div>
                <h4 className="font-bold text-white text-base mb-1">Built for small firms</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Priced and scoped for solo practitioners and 1 to 3 staff practices, not 50-attorney enterprise law corporations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Preview */}
      <section className="py-24 border-t border-white/10">
        <div className="wrap">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">Transparent Pricing</span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl sm:text-4xl font-bold mt-2 text-white"
            >
              Simple plans. No lock-in.
            </h2>
            <p className="text-white/60 text-sm mt-3">
              Month-to-month after 3 months. You own your website, accounts, and client data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {AGENCY_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`p-8 rounded-2xl border flex flex-col justify-between transition-all ${
                  plan.popular
                    ? "border-[#c9a84c] bg-gradient-to-b from-[rgba(201,168,76,0.12)] to-[rgba(2,8,24,0.8)] shadow-xl relative"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c9a84c] text-black">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="font-bold text-2xl text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-extrabold text-[#f5d88a]">{plan.price}</span>
                    <span className="text-white/60 text-sm"> / month</span>
                    <p className="text-xs text-white/50 mt-1">{plan.setupFee}</p>
                  </div>
                  <p className="text-xs text-white/70 mb-6 leading-relaxed bg-white/5 p-3 rounded-lg">
                    <span className="font-semibold text-white">Best for: </span>
                    {plan.bestFor}
                  </p>
                  <ul className="space-y-3 mb-8 text-sm list-none p-0">
                    {plan.features.slice(0, 5).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/80">
                        <CheckCircle2 size={16} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link
                    href={plan.ctaHref}
                    className={`w-full py-3 rounded-xl text-center block text-sm font-semibold transition-all ${
                      plan.popular
                        ? "btn-gold"
                        : "border border-white/20 bg-white/5 hover:bg-white/10 text-white"
                    }`}
                  >
                    {plan.ctaText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/plans"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#f5d88a] hover:underline"
            >
              <span>See Full Plan Details & Deliverables Breakdown</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Strip */}
      <section className="py-16 border-t border-white/10 bg-[rgba(5,13,31,0.7)]">
        <div className="wrap max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c9a84c] to-[#f5d88a] text-black font-extrabold flex items-center justify-center text-xl flex-shrink-0 shadow-lg">
              AC
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-lg text-white">Ayaz Chishti</h4>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-white/70">
                  Founder
                </span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                15+ years leading technology and delivery programmes across fintech, SaaS and PMO. AK Nexus applies the exact same discipline—clear scope, tracked delivery, and regular transparent reporting—to small business marketing and client intake operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-24 border-t border-white/10 relative overflow-hidden">
        <div className="wrap text-center max-w-3xl mx-auto relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-[#c9a84c]/20 text-[#f5d88a] flex items-center justify-center mx-auto mb-6">
            <FileSearch size={28} />
          </div>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            See where your firm is losing inquiries.
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl mx-auto">
            Get a free audit of your website and intake process. You'll receive a short, actionable written report, even if we never work together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/free-audit"
              className="btn-gold px-8 py-4 text-base font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xl"
            >
              <span>Get Your Free Audit</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/family-law"
              className="px-6 py-4 rounded-xl text-base font-medium border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all"
            >
              Explore Family Law Focus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
