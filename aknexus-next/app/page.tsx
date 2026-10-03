"use client";

import { useState } from "react";
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
  ChevronDown,
  Building2,
  Scale,
  Sparkles,
  Stethoscope,
  Wrench,
  Calculator,
  Check,
} from "lucide-react";
import { AGENCY_PLANS, AGENCY_FAQS } from "@/data/agency";
import { ALL_INDUSTRIES } from "@/data/industries";

export default function AgencyHomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-[#020818] text-white selection:bg-[#c9a84c] selection:text-black">
      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Ambient background glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] pointer-events-none opacity-20 blur-[140px] rounded-full"
          style={{ background: "linear-gradient(135deg, #c9a84c, #1e3a5f)" }}
        />

        <div className="wrap relative z-10 text-center max-w-4xl mx-auto">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#f5d88a] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              For Solo & Small Practice Firms
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
              Built for solo & 1–3 staff practices
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#f5d88a]" />
              Month-to-month after 3 months
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#f5d88a]" />
              You own 100% of accounts & data
            </span>
          </div>
        </div>
      </section>

      {/* 2. STATBAR SECTION */}
      <section className="border-y border-white/10 bg-[rgba(5,13,31,0.85)] py-8 relative z-20">
        <div className="wrap max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center">
              <span
                style={{ fontFamily: "var(--font-display)" }}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f5d88a] mb-1"
              >
                15+ Yrs
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white/90">
                Technology Leadership
              </span>
              <span className="text-[11px] text-white/50 mt-0.5">
                Fintech & SaaS delivery discipline
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center">
              <span
                style={{ fontFamily: "var(--font-display)" }}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f5d88a] mb-1"
              >
                &lt; 5 Min
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white/90">
                Speed-to-Lead Response
              </span>
              <span className="text-[11px] text-white/50 mt-0.5">
                Automated intake SMS & email
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center">
              <span
                style={{ fontFamily: "var(--font-display)" }}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f5d88a] mb-1"
              >
                100%
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white/90">
                Client Asset Ownership
              </span>
              <span className="text-[11px] text-white/50 mt-0.5">
                You own your site, CRM & ad accounts
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center">
              <span
                style={{ fontFamily: "var(--font-display)" }}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f5d88a] mb-1"
              >
                3-Month
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white/90">
                Initial Term
              </span>
              <span className="text-[11px] text-white/50 mt-0.5">
                Month-to-month with 30-day notice
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM SECTION */}
      <section className="py-24 border-b border-white/10 bg-[rgba(5,13,31,0.5)]">
        <div className="wrap max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              The Core Breakdown
            </span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl sm:text-4xl font-bold mt-2 text-white"
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
                  An inquiry that waits a day for a reply often hires someone else. In legal and appointment-driven matters, the business that answers first and clearly usually wins the consultation.
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
                  A website in one place, contact forms dumping to an inbox, follow-up texts sent from personal cell phones, and leads tracked in messy spreadsheets.
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
                  You cannot tell which marketing generated an actual signed client versus vanity clicks, leaving you guessing where your marketing budget goes.
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
                  Year-long restrictive contracts with marketing agencies who hold your website, domain, and ad accounts hostage if you ever decide to leave.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO / FULL FRONT-END EXECUTION */}
      <section className="py-24 border-b border-white/10">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-[#c9a84c]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Layout size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Conversion Website</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                A fast, mobile-first site specifically built to convert visitors into consultation requests without clutter or confusing technical jargon.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-[#c9a84c]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <MessageSquareCheck size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Intake CRM & Automations</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Every inquiry is captured, tracked and followed up automatically with instant email and SMS acknowledgements, from first contact to signed retainer.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-[#c9a84c]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Search size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Local SEO & Google Maps</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Get found when people in your city search for your practice. Google Business Profile setup, citation building, and on-page optimization.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-[#c9a84c]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Target size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Managed Ad Campaigns</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Google and Meta campaigns managed specifically for cost per signed client, not just clicks. Ad spend is billed directly by Google/Meta to you.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-[#c9a84c]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <BarChart3 size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Clear Monthly Reporting</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                A clear monthly report showing leads, consultation bookings, and signed retainers by source, followed by a regular review call.
              </p>
            </div>

            {/* Card 6: Industry Hub Callout */}
            <div className="p-8 rounded-2xl border border-[#c9a84c]/40 bg-[rgba(201,168,76,0.06)] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#f5d88a]">
                  Industry Specialization
                </span>
                <h3 className="font-bold text-xl mt-2 mb-3 text-white">
                  Tailored Practice Systems
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Explore dedicated workflows for Family Law, Dental, Real Estate, Salons, Accounting, and Home Services.
                </p>
              </div>
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#f5d88a] hover:underline mt-6"
              >
                <span>Browse All Industries</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Industry Spotlight Quick Selector */}
          <div className="p-8 rounded-3xl border border-white/10 bg-[rgba(5,13,31,0.6)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
                  Dedicated Industry Systems
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Engineered for your exact client journey
                </h3>
              </div>
              <Link
                href="/industries"
                className="text-sm font-semibold text-[#f5d88a] hover:underline flex items-center gap-1.5"
              >
                <span>View all industry systems</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {ALL_INDUSTRIES.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#c9a84c]/40 hover:bg-white/[0.05] transition-all text-center no-underline flex flex-col items-center justify-center group"
                >
                  <span className="text-xs font-semibold text-white/90 group-hover:text-[#f5d88a] transition-colors">
                    {ind.name}
                  </span>
                  <span className="text-[10px] text-white/50 mt-1">
                    {ind.industryTag}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS / DELIVERY TIMELINE */}
      <section className="py-24 border-b border-white/10 bg-[rgba(5,13,31,0.6)]">
        <div className="wrap max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              Step-by-Step Delivery
            </span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl sm:text-4xl font-bold mt-2 text-white"
            >
              Live in weeks, with a clear path.
            </h2>
            <p className="text-white/60 text-sm mt-3">
              Every message template and web page is approved by you before it goes live.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#c9a84c]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] font-bold text-lg flex items-center justify-center flex-shrink-0">
                  01
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">Free Intake & Website Audit</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
                    We review your current website speed, mobile responsiveness, and secret-shop your inquiry follow-up. You receive a concise written report.
                  </p>
                </div>
              </div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-[#f5d88a] border border-white/10 flex-shrink-0">
                Within 48 hours
              </span>
            </div>

            <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#c9a84c]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] font-bold text-lg flex items-center justify-center flex-shrink-0">
                  02
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">Kickoff & Alignment Call</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
                    Confirm your exact services, target service area, brand voice, and client approval workflows.
                  </p>
                </div>
              </div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-[#f5d88a] border border-white/10 flex-shrink-0">
                Week 1
              </span>
            </div>

            <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#c9a84c]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] font-bold text-lg flex items-center justify-center flex-shrink-0">
                  03
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">Build & System Setup</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
                    Website updates, intake forms, CRM pipelines, calendar scheduling, and automated follow-up sequences—all drafted for your approval.
                  </p>
                </div>
              </div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-[#f5d88a] border border-white/10 flex-shrink-0">
                Weeks 1 – 3
              </span>
            </div>

            <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#c9a84c]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] font-bold text-lg flex items-center justify-center flex-shrink-0">
                  04
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">End-to-End Testing & Launch</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
                    Every form, text, email, and booking calendar is thoroughly tested before switching DNS and launching campaigns.
                  </p>
                </div>
              </div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-[#f5d88a] border border-white/10 flex-shrink-0">
                Week 3
              </span>
            </div>

            <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#c9a84c]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] font-bold text-lg flex items-center justify-center flex-shrink-0">
                  05
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">Monthly Delivery & Review</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
                    Ongoing delivery (SEO, social, ads, updates) tracked in a transparent shared view with a monthly report and short review call.
                  </p>
                </div>
              </div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-[#f5d88a] border border-white/10 flex-shrink-0">
                Monthly Cycle
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS & ALL-IN-ONE COMPARISON */}
      <section className="py-24 border-b border-white/10">
        <div className="wrap max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              The Real Comparison
            </span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl sm:text-4xl font-bold mt-2 text-white"
            >
              What you'd otherwise piece together.
            </h2>
            <p className="text-white/60 text-sm mt-3">
              Typical market ranges from multiple fragmented vendors versus one unified, accountable partner.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-[rgba(5,13,31,0.7)] shadow-2xl mb-16">
            <div className="divide-y divide-white/10 border-y border-white/10 mb-6">
              <div className="py-3.5 flex items-center justify-between text-sm">
                <span className="text-white/80">Specialized Intake CRM Software</span>
                <span className="text-white/60 font-mono text-xs">~$200 to $300 / mo</span>
              </div>
              <div className="py-3.5 flex items-center justify-between text-sm">
                <span className="text-white/80">Answering or Virtual Intake Service</span>
                <span className="text-white/60 font-mono text-xs">~$250+ / mo</span>
              </div>
              <div className="py-3.5 flex items-center justify-between text-sm">
                <span className="text-white/80">Marketing Agency Monthly Retainer</span>
                <span className="text-white/60 font-mono text-xs">$1,500+ / mo</span>
              </div>
              <div className="py-3.5 flex items-center justify-between text-sm">
                <span className="text-white/80">Website Care, Hosting & Security</span>
                <span className="text-white/60 font-mono text-xs">$150+ / mo</span>
              </div>
              <div className="py-3.5 flex items-center justify-between text-sm">
                <span className="text-white/80">Local SEO & Review Generation Tool</span>
                <span className="text-white/60 font-mono text-xs">$100+ / mo</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl border border-red-500/20 bg-red-500/[0.04] flex flex-col justify-between">
                <span className="text-xs uppercase font-semibold text-red-400">
                  Total From Several Vendors
                </span>
                <span className="font-bold text-base text-white mt-1">
                  $2,200+ / mo and you coordinate all of it
                </span>
              </div>

              <div className="p-5 rounded-2xl border border-[#c9a84c]/40 bg-[rgba(201,168,76,0.08)] flex flex-col justify-between">
                <span className="text-xs uppercase font-semibold text-[#f5d88a]">
                  AK Nexus All-In-One Partner
                </span>
                <span className="font-bold text-base text-white mt-1">
                  From $1,000 to $2,000 / mo as one team, one report
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY US & OWNERSHIP / PLANS PREVIEW */}
      <section className="py-24 border-b border-white/10 bg-[rgba(5,13,31,0.5)]">
        <div className="wrap max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              The Differentiators
            </span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl font-bold mt-2 text-white"
            >
              Why practice owners choose AK Nexus
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
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
                  Priced and scoped for solo practitioners and 1 to 3 staff practices, not 50-attorney enterprise corporations.
                </p>
              </div>
            </div>
          </div>

          {/* Founder Strip */}
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

      {/* 8. FAQ SECTION */}
      <section className="py-24 border-b border-white/10">
        <div className="wrap max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              Common Questions
            </span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl sm:text-4xl font-bold mt-2 text-white"
            >
              No jargon. No runaround.
            </h2>
            <p className="text-white/60 text-sm mt-3">
              Clear answers on contracts, integrations, ownership, and operations.
            </p>
          </div>

          <div className="space-y-4">
            {AGENCY_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-white hover:text-[#f5d88a] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`text-[#f5d88a] flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA BAND */}
      <section className="py-24 relative overflow-hidden">
        <div className="wrap text-center max-w-3xl mx-auto relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-[#c9a84c]/20 text-[#f5d88a] flex items-center justify-center mx-auto mb-6">
            <FileSearch size={28} />
          </div>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Ready to own your local market?
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
              href="/industries"
              className="px-6 py-4 rounded-xl text-base font-medium border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all"
            >
              Explore All Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
