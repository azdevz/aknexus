"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ShieldAlert,
  ChevronDown,
  Calendar,
  Lock,
  PhoneCall,
  Check,
  X,
  FileCheck,
  Scale,
  ShieldCheck,
  Users,
  Timer,
} from "lucide-react";
import { FAMILY_LAW_CONTENT } from "@/data/industries";
import { AGENCY_PLANS, COMPARISON_DATA, AGENCY_FAQS } from "@/data/agency";

export default function FamilyLawPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#020818] text-white selection:bg-[#c9a84c] selection:text-black">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Glow orb */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] pointer-events-none opacity-25 blur-[120px] rounded-full"
          style={{ background: "linear-gradient(135deg, #c9a84c, #0984e3)" }}
        />

        <div className="wrap relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(201,168,76,0.35)] bg-[rgba(201,168,76,0.08)] mb-6">
            <Scale size={14} className="text-[#f5d88a]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              {FAMILY_LAW_CONTENT.badge}
            </span>
          </div>

          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 text-white"
          >
            Never lose a divorce or custody inquiry to a{" "}
            <span className="gold-text">slow reply.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
            {FAMILY_LAW_CONTENT.heroSubhead}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/free-audit"
              className="btn-gold w-full sm:w-auto px-8 py-3.5 text-base font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg"
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

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#f5d88a]" />
              Month-to-month after 3 months
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#f5d88a]" />
              You own your website, ad accounts & data
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#f5d88a]" />
              Built around attorney advertising rules
            </span>
          </div>
        </div>
      </section>

      {/* Why Inquiries Slip Away */}
      <section className="py-20 border-t border-white/10 bg-[rgba(5,13,31,0.6)]">
        <div className="wrap max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              The Reality of Family Law
            </span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-white"
            >
              {FAMILY_LAW_CONTENT.problemHeading}
            </h2>
            <p className="text-white/70 text-base leading-relaxed mt-4">
              {FAMILY_LAW_CONTENT.problemIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FAMILY_LAW_CONTENT.leaks.map((leak, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex items-start gap-4 hover:border-red-400/30 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-base text-white mb-1">{leak.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{leak.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Set Up */}
      <section className="py-24 border-t border-white/10">
        <div className="wrap max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              Complete Front-Office Architecture
            </span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl sm:text-4xl font-bold mt-2 text-white"
            >
              A front office that works while you work.
            </h2>
            <p className="text-white/60 text-sm mt-3">
              Automated intake workflows that respect the sensitivity of family law clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {FAMILY_LAW_CONTENT.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#c9a84c]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 rounded-md bg-[#c9a84c]/20 text-[#f5d88a] flex items-center justify-center font-bold text-xs mb-4">
                    ✓
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">{feat.name}</h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Note Box */}
          <div className="p-6 rounded-2xl border border-[#c9a84c]/30 bg-[rgba(201,168,76,0.06)] flex items-start gap-4">
            <AlertCircle size={22} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-white/80 leading-relaxed m-0">
              <strong className="text-white font-semibold">Important note: </strong>
              We configure the system and client-facing automations. We do not read your clients' case details, and we do not provide legal advice. Every message and email template is reviewed and approved by your firm before it goes live.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Summary Table */}
      <section className="py-20 border-t border-white/10 bg-[rgba(5,13,31,0.5)]">
        <div className="wrap max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">Pricing Overview</span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl font-bold mt-2 text-white"
            >
              Choose the tier that fits your firm.
            </h2>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-2xl bg-white/[0.01]">
            <table className="w-full text-left text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-4 font-semibold text-white/60">Features</th>
                  <th className="p-4 font-bold text-white">Foundation</th>
                  <th className="p-4 font-bold text-[#f5d88a]">Growth (Popular)</th>
                  <th className="p-4 font-bold text-white">Scale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-4 font-medium text-white/80">Monthly Fee</td>
                  <td className="p-4 font-semibold text-white">From $1,000</td>
                  <td className="p-4 font-semibold text-[#f5d88a]">From $2,000</td>
                  <td className="p-4 font-semibold text-white">From $3,500 + ads</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white/80">One-time Setup</td>
                  <td className="p-4 text-white/70">$1,000</td>
                  <td className="p-4 text-white/70">$1,500</td>
                  <td className="p-4 text-white/70">$2,000</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white/80">Website & Conversion Optimisation</td>
                  <td className="p-4 text-[#f5d88a]">✓</td>
                  <td className="p-4 text-[#f5d88a]">✓</td>
                  <td className="p-4 text-[#f5d88a]">✓</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white/80">Intake CRM, Forms & Calendar Sync</td>
                  <td className="p-4 text-[#f5d88a]">✓</td>
                  <td className="p-4 text-[#f5d88a]">✓</td>
                  <td className="p-4 text-[#f5d88a]">✓</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white/80">Automated Follow-up & Reminders</td>
                  <td className="p-4 text-[#f5d88a]">✓</td>
                  <td className="p-4 text-[#f5d88a]">✓</td>
                  <td className="p-4 text-[#f5d88a]">✓</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white/80">Local SEO & Google Business Profile</td>
                  <td className="p-4 text-white/30">—</td>
                  <td className="p-4 text-[#f5d88a]">✓</td>
                  <td className="p-4 text-[#f5d88a]">✓</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white/80">Social Media (up to 12 posts/mo)</td>
                  <td className="p-4 text-white/30">—</td>
                  <td className="p-4 text-[#f5d88a]">✓</td>
                  <td className="p-4 text-[#f5d88a]">✓</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white/80">Managed Google & Meta Ads</td>
                  <td className="p-4 text-white/30">—</td>
                  <td className="p-4 text-white/30">—</td>
                  <td className="p-4 text-[#f5d88a]">✓</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white/80">Cost-per-Signed-Case Attribution</td>
                  <td className="p-4 text-white/30">—</td>
                  <td className="p-4 text-white/30">—</td>
                  <td className="p-4 text-[#f5d88a]">✓</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
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

      {/* The All-in-One Comparison */}
      <section className="py-20 border-t border-white/10">
        <div className="wrap max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              The Vendor Patchwork
            </span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-2xl sm:text-3xl font-bold mt-2 text-white"
            >
              What you'd otherwise piece together.
            </h2>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="space-y-4 mb-6">
              {COMPARISON_DATA.slice(0, 4).map((row, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 text-sm">
                  <span className="text-white/70">{row.item}</span>
                  <span className="text-white font-medium">{row.cost}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex justify-between items-center text-sm mb-4">
              <span className="text-red-300 font-semibold">Typical Patchwork Total</span>
              <span className="text-red-300 font-bold">$1,950+ / mo & you coordinate all of it</span>
            </div>

            <div className="p-5 rounded-xl bg-[#c9a84c]/15 border border-[#c9a84c]/40 flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#f5d88a]" />
                <span className="text-white font-bold">AK Nexus Growth</span>
              </div>
              <span className="text-[#f5d88a] font-extrabold text-base">From $2,000 / mo (one team, one report)</span>
            </div>
            <p className="text-xs text-white/40 mt-4 text-center">
              Figures are typical market ranges and vary by vendor, firm size, and scope.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-white/10 bg-[rgba(5,13,31,0.6)]">
        <div className="wrap max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">Onboarding & Delivery</span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl font-bold mt-2 text-white"
            >
              Live in weeks, with a clear path.
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.02]">
              <span className="w-8 h-8 rounded-lg bg-[#c9a84c]/20 text-[#f5d88a] font-bold flex items-center justify-center flex-shrink-0 text-sm">1</span>
              <div>
                <h4 className="font-bold text-white text-base">Free Audit</h4>
                <p className="text-white/70 text-sm mt-1">We review your website and intake process and deliver a short written report on priority fixes.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.02]">
              <span className="w-8 h-8 rounded-lg bg-[#c9a84c]/20 text-[#f5d88a] font-bold flex items-center justify-center flex-shrink-0 text-sm">2</span>
              <div>
                <h4 className="font-bold text-white text-base">Kickoff (Week 1)</h4>
                <p className="text-white/70 text-sm mt-1">Confirm your practice areas, local geography, firm voice, and approval workflow.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.02]">
              <span className="w-8 h-8 rounded-lg bg-[#c9a84c]/20 text-[#f5d88a] font-bold flex items-center justify-center flex-shrink-0 text-sm">3</span>
              <div>
                <h4 className="font-bold text-white text-base">Build (Weeks 1 to 3)</h4>
                <p className="text-white/70 text-sm mt-1">Website updates, intake forms, CRM, booking calendar, and follow-up templates drafted for your sign-off.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.02]">
              <span className="w-8 h-8 rounded-lg bg-[#c9a84c]/20 text-[#f5d88a] font-bold flex items-center justify-center flex-shrink-0 text-sm">4</span>
              <div>
                <h4 className="font-bold text-white text-base">Launch & Test</h4>
                <p className="text-white/70 text-sm mt-1">Every form, auto-responder, calendar link, and tracking tag is verified end-to-end before go-live.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.02]">
              <span className="w-8 h-8 rounded-lg bg-[#c9a84c]/20 text-[#f5d88a] font-bold flex items-center justify-center flex-shrink-0 text-sm">5</span>
              <div>
                <h4 className="font-bold text-white text-base">Monthly Cycle</h4>
                <p className="text-white/70 text-sm mt-1">Ongoing campaign delivery, monthly performance report on signed cases, and a short review call.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Own & Advertising Rules */}
      <section className="py-20 border-t border-white/10">
        <div className="wrap max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Ownership */}
          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center mb-5">
              <ShieldCheck size={22} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Nothing here is held hostage.</h3>
            <ul className="space-y-3 text-sm text-white/75 list-none p-0">
              <li className="flex items-start gap-2">
                <Check size={16} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                <span>Your website files, domain and hosting account belong entirely to you.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                <span>Google Business Profile and ad accounts are established directly in your name.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                <span>Your client and pipeline data can be exported at any time.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                <span>After the initial 3-month commitment, cancel anytime with 30 days' notice.</span>
              </li>
            </ul>
          </div>

          {/* Ethics & Privacy */}
          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center mb-5">
              <Scale size={22} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Built around legal marketing rules.</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              State bar rules on attorney advertising vary. Our templates avoid outcome guarantees, restrict results claims, and include required jurisdictional disclaimers.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Family law inquiries involve sensitive situations. We keep online forms minimal, keep data in your private CRM, restrict team access, and use multi-factor authentication.
            </p>
          </div>
        </div>
      </section>

      {/* Good Fit vs Not Fit */}
      <section className="py-20 border-t border-white/10 bg-[rgba(5,13,31,0.5)]">
        <div className="wrap max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-2xl sm:text-3xl font-bold text-white"
            >
              Is AK Nexus a fit for your practice?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-2xl border border-[#c9a84c]/30 bg-[rgba(201,168,76,0.04)]">
              <h4 className="font-bold text-white text-base flex items-center gap-2 mb-4">
                <CheckCircle2 size={18} className="text-[#f5d88a]" />
                Good Fit
              </h4>
              <ul className="space-y-3 text-sm text-white/75 list-none p-0">
                {FAMILY_LAW_CONTENT.goodFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#f5d88a] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02]">
              <h4 className="font-bold text-white text-base flex items-center gap-2 mb-4 text-white/80">
                <X size={18} className="text-white/40" />
                Probably Not a Fit
              </h4>
              <ul className="space-y-3 text-sm text-white/60 list-none p-0">
                {FAMILY_LAW_CONTENT.notFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white/30 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ */}
      <section className="py-24 border-t border-white/10">
        <div className="wrap max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">Direct Answers</span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl font-bold mt-2 text-white"
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {AGENCY_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-semibold text-white text-base">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#f5d88a] flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-white/10 bg-gradient-to-b from-transparent to-[rgba(5,13,31,0.8)]">
        <div className="wrap text-center max-w-2xl mx-auto">
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            {FAMILY_LAW_CONTENT.finalCtaHeading}
          </h2>
          <p className="text-base sm:text-lg text-white/70 mb-8 leading-relaxed">
            {FAMILY_LAW_CONTENT.finalCtaBody}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/free-audit"
              className="btn-gold px-8 py-3.5 text-base font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xl"
            >
              <span>Get Your Free Audit</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/book"
              className="px-7 py-3.5 rounded-xl text-base font-medium border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all text-center"
            >
              Book a 20-Minute Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
