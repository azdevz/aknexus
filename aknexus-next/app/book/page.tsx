"use client";

import Link from "next/link";
import { Mail, Clock, Phone, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function BookPage() {
  return (
    <div className="bg-[#020818] text-white selection:bg-[#c9a84c] selection:text-black min-h-screen">
      <section className="pt-36 pb-24 md:pt-44 md:pb-28">
        <div className="wrap max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] mb-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
                Direct Consultation
              </span>
            </div>
            <h1
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white"
            >
              Book a <span className="gold-text">20-minute call.</span>
            </h1>
            <p className="text-base sm:text-lg text-white/75 leading-relaxed">
              We'll walk through your firm's situation and tell you honestly whether we're a fit. No pressure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Info Card */}
            <div className="md:col-span-4 p-6 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h3 className="font-bold text-lg text-white mb-4">What to expect</h3>
              <ul className="space-y-4 text-xs sm:text-sm text-white/80 list-none p-0 mb-6">
                <li className="flex items-start gap-2.5">
                  <Clock size={16} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                  <span>20 minutes focused specifically on your practice goals.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                  <span>Review of your current inquiry follow-up and website bottlenecks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                  <span>Clear answer on which plan matches your firm's current capacity.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-white/60 mb-2">Prefer email?</p>
                <a
                  href="mailto:hello@aknexus.co"
                  className="text-sm font-semibold text-[#f5d88a] hover:underline flex items-center gap-1.5"
                >
                  <Mail size={14} /> hello@aknexus.co
                </a>
              </div>
            </div>

            {/* Calendar Embed Container */}
            <div className="md:col-span-8 p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.02] shadow-2xl">
              <div className="min-h-[480px] flex flex-col items-center justify-center text-center p-6 border border-dashed border-white/15 rounded-2xl bg-white/[0.01]">
                <div className="w-14 h-14 rounded-2xl bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center mb-4">
                  <Phone size={26} />
                </div>
                <h4 className="font-bold text-lg text-white mb-2">Schedule Your 20-Minute Strategy Call</h4>
                <p className="text-xs sm:text-sm text-white/60 max-w-md mb-6 leading-relaxed">
                  Connect directly with our practice growth lead. Choose a time slot that matches your court schedule and availability.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                  <a
                    href="mailto:hello@aknexus.co?subject=Discovery%20Call%20Request%20-%20Law%20Firm"
                    className="btn-gold w-full py-3.5 text-center text-sm font-semibold rounded-xl"
                  >
                    Request Time Slot via Email
                  </a>
                </div>
                
                <p className="text-[11px] text-white/40 mt-6">
                  Or call directly: <a href="tel:+13074030755" className="text-white/60 hover:text-white underline">+1 307 403 0755</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
