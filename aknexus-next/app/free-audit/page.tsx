"use client";

import Link from "next/link";
import {
  CheckCircle2,
  FileSearch,
  Lock,
  ExternalLink,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";

export default function FreeAuditPage() {
  return (
    <div className="bg-[#020818] text-white selection:bg-[#c9a84c] selection:text-black min-h-screen">
      <section className="pt-36 pb-24 md:pt-44 md:pb-28">
        <div className="wrap max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] mb-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
                100% Free • No Obligation Audit
              </span>
            </div>
            <h1
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white"
            >
              Get your free <span className="gold-text">website &amp; intake audit.</span>
            </h1>
            <p className="text-base sm:text-lg text-white/75 leading-relaxed">
              Tell us about your business. We'll analyze your website, speed-to-lead follow-up, and
              conversion friction, and deliver an actionable written report within 48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* What you'll get side card */}
            <div className="lg:col-span-5 p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h3
                style={{ fontFamily: "var(--font-display)" }}
                className="text-lg font-bold text-white mb-4 flex items-center gap-2"
              >
                <FileSearch size={20} className="text-[#f5d88a]" />
                What you'll get:
              </h3>
              <ul className="space-y-4 text-sm text-white/80 list-none p-0 mb-8">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Website Speed &amp; Mobile Test: </strong>Real performance benchmarking
                    across mobile devices.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Conversion Path Audit: </strong>Review of how easily visitors turn into
                    booked consultations or calls.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Speed-to-Lead Assessment: </strong>Analysis of missed calls, after-hours
                    leaks, and booking friction.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Top 3 Priority Fixes: </strong>Actionable fixes you can immediately
                    implement to win more clients.
                  </span>
                </li>
              </ul>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-xs text-white/60 leading-relaxed flex items-start gap-2 mb-6">
                <Lock size={15} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                <span>
                  Zero sales pressure. You receive a concise report and retain full ownership of
                  your data, whether we work together or not.
                </span>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-xs text-white/60 mb-3">Want to speak with us right away?</p>
                <a
                  href="https://calendly.com/aknexus/20min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f5d88a] hover:underline"
                >
                  <span>Schedule 20-Min Strategy Call Directly</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Lead Form */}
            <div className="lg:col-span-7">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
