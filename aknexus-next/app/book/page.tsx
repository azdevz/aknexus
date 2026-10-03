"use client";

import Script from "next/script";
import { Mail, Clock, Phone, ShieldCheck, CheckCircle2, ExternalLink, Calendar } from "lucide-react";

const CALENDLY_URL =
  "https://calendly.com/aknexus/20min?hide_gdpr_banner=1&background_color=020818&text_color=ffffff&primary_color=c9a84c";

export default function BookPage() {
  return (
    <div className="bg-[#020818] text-white selection:bg-[#c9a84c] selection:text-black min-h-screen">
      {/* Load Calendly widget script via Next.js Script — fires after page is interactive */}
      <Script
        id="calendly-widget-js"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          // Initialise the inline widget once the script is ready
          if (typeof (window as any).Calendly !== "undefined") {
            (window as any).Calendly.initInlineWidget({
              url: CALENDLY_URL,
              parentElement: document.getElementById("calendly-embed"),
            });
          }
        }}
      />

      <section className="pt-36 pb-24 md:pt-44 md:pb-28">
        <div className="wrap max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] mb-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
                Direct Discovery Session
              </span>
            </div>
            <h1
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white"
            >
              Book a <span className="gold-text">20-minute strategy call.</span>
            </h1>
            <p className="text-base sm:text-lg text-white/75 leading-relaxed">
              We'll walk through your current inquiry flow, speed-to-lead bottlenecks, and tell you
              honestly whether we're a fit. No sales pressure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Info Card */}
            <div className="lg:col-span-4 p-7 rounded-3xl border border-white/10 bg-white/[0.02]">
              <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
                <Calendar size={18} className="text-[#f5d88a]" />
                What to expect
              </h3>
              <ul className="space-y-4 text-xs sm:text-sm text-white/80 list-none p-0 mb-8">
                <li className="flex items-start gap-2.5">
                  <Clock size={16} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>20 Focused Minutes: </strong>Zero fluff. Dedicated analysis of your
                    client intake bottlenecks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Speed-to-Lead Audit: </strong>Review of after-hours leaks, missed
                    calls, and conversion friction.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Clear Roadmap: </strong>Direct recommendation on which plan matches
                    your firm's capacity.
                  </span>
                </li>
              </ul>

              <div className="p-4 rounded-2xl border border-white/10 bg-white/5 mb-6">
                <p className="text-xs text-white/70 mb-2">Can't see the calendar?</p>
                <a
                  href="https://calendly.com/aknexus/20min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f5d88a] hover:underline"
                >
                  <span>Open Calendly in new tab</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <p className="text-xs text-white/60">Prefer email or phone?</p>
                <div className="flex flex-col gap-1.5 text-xs">
                  <a
                    href="mailto:hello@aknexus.co"
                    className="text-white/80 hover:text-[#f5d88a] transition-colors flex items-center gap-2"
                  >
                    <Mail size={13} className="text-[#f5d88a]" /> hello@aknexus.co
                  </a>
                  <a
                    href="tel:+13074030755"
                    className="text-white/80 hover:text-[#f5d88a] transition-colors flex items-center gap-2"
                  >
                    <Phone size={13} className="text-[#f5d88a]" /> +1 307 403 0755
                  </a>
                </div>
              </div>
            </div>

            {/* Right Calendly Embed Container */}
            <div className="lg:col-span-8 p-4 sm:p-6 rounded-3xl border border-white/10 bg-white/[0.02] shadow-2xl overflow-hidden">
              {/* Target div for Calendly.initInlineWidget() */}
              <div
                id="calendly-embed"
                className="w-full rounded-2xl"
                style={{ minWidth: "320px", height: "700px" }}
              />

              <div className="text-center pt-4 border-t border-white/10">
                <a
                  href="https://calendly.com/aknexus/20min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold rounded-xl no-underline"
                >
                  <span>Open Calendly Direct Booking</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
