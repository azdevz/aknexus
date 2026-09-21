"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck,
  CalendarCheck,
  Cpu,
  BarChart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/data/agency";

export default function HowItWorksPage() {
  return (
    <div className="bg-[#020818] text-white selection:bg-[#c9a84c] selection:text-black">
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 text-center">
        <div className="wrap max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] mb-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              Process & Delivery
            </span>
          </div>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white"
          >
            From audit to launch in <span className="gold-text">weeks.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto font-normal mb-8">
            A disciplined, milestone-driven approach to upgrading your law firm's website, intake automations, and ongoing local marketing.
          </p>

          {/* Core Callout */}
          <div className="p-4 rounded-2xl border border-[#c9a84c]/30 bg-[rgba(201,168,76,0.06)] inline-flex items-center gap-3 text-sm text-[#f5d88a]">
            <ShieldCheck size={18} />
            <span>Every message, ad, and page is approved by your firm before it goes live.</span>
          </div>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="py-16">
        <div className="wrap max-w-4xl mx-auto">
        <div className="space-y-8">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] flex flex-col md:flex-row md:items-start gap-6 hover:border-[#c9a84c]/30 transition-all"
            >
              <div className="flex md:flex-col items-center justify-between md:justify-start gap-3 flex-shrink-0 md:w-36">
                <span
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-3xl sm:text-4xl font-black text-[#f5d88a]"
                >
                  {step.number}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/50 px-2.5 py-1 rounded-md bg-white/5">
                  {step.timeline}
                </span>
              </div>

              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#f5d88a]">
                    {step.phase}
                  </span>
                </div>
                <h3
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-xl sm:text-2xl font-bold text-white mb-3"
                >
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {idx === 0 && (
                  <Link
                    href="/free-audit"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f5d88a] hover:underline"
                  >
                    <span>Request Free Audit Now</span>
                    <ArrowRight size={13} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Ongoing Delivery Philosophy */}
      <section className="py-20 border-t border-white/10 bg-[rgba(5,13,31,0.6)]">
        <div className="wrap max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              Shared Visibility
            </span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-2xl sm:text-3xl font-bold mt-2 text-white"
            >
              Real PMO Discipline in Action
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <h4 className="font-bold text-white text-base mb-2">Live Status View</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                See exactly what tasks are completed, in progress, and planned next in a shared status dashboard.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <h4 className="font-bold text-white text-base mb-2">Strict Approval Gate</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Nothing publishes without your attorney sign-off. Compliance with state bar advertising ethics is non-negotiable.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <h4 className="font-bold text-white text-base mb-2">Attribution to Cases</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Monthly reports tie results back to actual consultation appointments and signed clients—not impressions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-white/10 text-center">
        <div className="wrap max-w-2xl mx-auto">
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            Start with Step 1: The Free Audit
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8">
            Tell us your website URL and state. We'll examine your mobile performance and intake flow and deliver a short written report.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/free-audit"
              className="btn-gold px-8 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-xl"
            >
              <span>Get Your Free Audit</span>
              <ArrowRight size={16} />
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
