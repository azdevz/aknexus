"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Clock,
  ShieldCheck,
  Calendar,
  Lock,
  Search,
  MessageSquareCheck,
  Target,
  BarChart3,
  TrendingUp,
  FileSearch,
  Sparkles,
  PhoneCall,
  Smartphone,
  Star,
  Users,
  Check,
} from "lucide-react";
import { IndustryPageContent } from "@/data/industries";
import { AGENCY_PLANS } from "@/data/agency";

export default function IndustryTemplate({ data }: { data: IndustryPageContent }) {
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
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#f5d88a] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              {data.badge}
            </span>
          </div>

          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 text-white"
          >
            {data.h1}
          </h1>

          <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
            {data.heroSubhead}
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
            {data.trustLine.split(" · ").map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#f5d88a]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. STATBAR SECTION */}
      <section className="border-y border-white/10 bg-[rgba(5,13,31,0.85)] py-8 relative z-20">
        <div className="wrap max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {data.stats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center"
              >
                <span
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#f5d88a] mb-1"
                >
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white/90">
                  {stat.label}
                </span>
                {stat.sublabel && (
                  <span className="text-[11px] text-white/50 mt-0.5">
                    {stat.sublabel}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM SECTION */}
      <section className="py-24 border-b border-white/10 bg-[rgba(5,13,31,0.5)]">
        <div className="wrap max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              The Core Breakdown
            </span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl sm:text-4xl font-bold mt-2 text-white"
            >
              {data.problemHeading}
            </h2>
            <p className="text-white/70 text-base mt-4 leading-relaxed max-w-2xl mx-auto">
              {data.problemIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.leaks.map((leak, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl border border-red-500/20 bg-red-500/[0.03] hover:border-red-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 text-red-400">
                    <Clock size={20} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">{leak.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{leak.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO / SETUP SECTION */}
      <section className="py-24 border-b border-white/10">
        <div className="wrap max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              Full Front-End Execution
            </span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl sm:text-4xl font-bold mt-2 text-white"
            >
              {data.setupHeading}
            </h2>
            <p className="text-white/65 text-base mt-3 max-w-2xl mx-auto">
              {data.setupSubhead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-[#c9a84c]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">{feature.name}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS / TIMELINE SECTION */}
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
              {data.howItWorksHeading}
            </h2>
            <p className="text-white/60 text-sm mt-3">
              Clear scope, tracked milestones, and regular reporting every step of the way.
            </p>
          </div>

          <div className="space-y-6">
            {data.howItWorksSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#c9a84c]/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] font-bold text-lg flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 self-start md:self-center">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-[#f5d88a] border border-white/10">
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RESULTS & ALL-IN-ONE COMPARISON SECTION */}
      <section className="py-24 border-b border-white/10">
        <div className="wrap max-w-5xl mx-auto">
          {/* Proof Metrics */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              Measurable Outcomes
            </span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl sm:text-4xl font-bold mt-2 text-white"
            >
              {data.resultsHeading}
            </h2>
            <p className="text-white/65 text-base mt-3">
              {data.resultsSubhead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {data.resultsMetrics.map((res, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-[#c9a84c]/20 bg-[rgba(201,168,76,0.03)] text-center flex flex-col justify-between"
              >
                <div>
                  <span
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-4xl font-extrabold text-[#f5d88a] mb-2 block"
                  >
                    {res.stat}
                  </span>
                  <h4 className="font-bold text-lg text-white mb-2">{res.label}</h4>
                  <p className="text-white/70 text-xs leading-relaxed">{res.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-[rgba(5,13,31,0.7)] shadow-2xl">
            <h3
              style={{ fontFamily: "var(--font-display)" }}
              className="text-2xl font-bold text-white mb-2 text-center"
            >
              {data.patchworkHeading}
            </h3>
            <p className="text-white/60 text-xs sm:text-sm text-center mb-8 max-w-xl mx-auto">
              {data.comparisonNote}
            </p>

            <div className="divide-y divide-white/10 border-y border-white/10 mb-6">
              {data.patchworkRows.map((row, idx) => (
                <div
                  key={idx}
                  className="py-3.5 flex items-center justify-between text-sm"
                >
                  <span className="text-white/80">{row.vendor}</span>
                  <span className="text-white/60 font-mono text-xs">{row.cost}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl border border-red-500/20 bg-red-500/[0.04] flex flex-col justify-between">
                <span className="text-xs uppercase font-semibold text-red-400">
                  Fragmented Subscriptions
                </span>
                <span className="font-bold text-base text-white mt-1">
                  {data.patchworkTotal}
                </span>
              </div>

              <div className="p-5 rounded-2xl border border-[#c9a84c]/40 bg-[rgba(201,168,76,0.08)] flex flex-col justify-between">
                <span className="text-xs uppercase font-semibold text-[#f5d88a]">
                  AK Nexus Unified Partner
                </span>
                <span className="font-bold text-base text-white mt-1">
                  {data.nexusPrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY US & OWNERSHIP / WHO THIS IS FOR */}
      <section className="py-24 border-b border-white/10 bg-[rgba(5,13,31,0.5)]">
        <div className="wrap max-w-5xl mx-auto">
          {/* Ownership Box */}
          <div className="mb-20 p-8 sm:p-10 rounded-3xl border border-[#c9a84c]/30 bg-gradient-to-br from-[rgba(201,168,76,0.08)] to-transparent">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/20 text-[#f5d88a] flex items-center justify-center">
                <ShieldCheck size={22} />
              </div>
              <h3
                style={{ fontFamily: "var(--font-display)" }}
                className="text-2xl font-bold text-white"
              >
                {data.ownershipHeading}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {data.ownershipPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check size={18} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Good Fit vs Not a Fit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03]">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 size={20} className="text-emerald-400" />
                <h4 className="font-bold text-lg text-white">Who This Is For</h4>
              </div>
              <ul className="space-y-4 text-sm text-white/80 list-none p-0">
                {data.goodFit.map((fit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-2" />
                    <span>{fit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/[0.03]">
              <div className="flex items-center gap-2 mb-6">
                <XCircle size={20} className="text-red-400" />
                <h4 className="font-bold text-lg text-white">Probably Not a Fit</h4>
              </div>
              <ul className="space-y-4 text-sm text-white/80 list-none p-0">
                {data.notFit.map((not, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                    <span>{not}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Regulatory & Client Info Note */}
          <div className="mt-12 p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h5 className="font-bold text-sm text-white mb-1.5">
                {data.complianceHeading}
              </h5>
              <p className="text-xs text-white/70 leading-relaxed">
                {data.complianceBody}
              </p>
            </div>
            <div className="flex-1 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <h5 className="font-bold text-sm text-white mb-1.5">
                {data.clientInfoHeading}
              </h5>
              <p className="text-xs text-white/70 leading-relaxed">
                {data.clientInfoBody}
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
            {data.faqs.map((faq, idx) => {
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

      {/* 9. FINAL CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="wrap text-center max-w-3xl mx-auto relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-[#c9a84c]/20 text-[#f5d88a] flex items-center justify-center mx-auto mb-6">
            <FileSearch size={28} />
          </div>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            {data.finalCtaHeading}
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl mx-auto">
            {data.finalCtaBody}
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
              href="/plans"
              className="px-6 py-4 rounded-xl text-base font-medium border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all"
            >
              View Plan Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
