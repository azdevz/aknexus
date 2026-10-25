"use client";

import { ArrowUpRight, CheckCircle2, Clock3, ShieldCheck } from "lucide-react";
import LeadForm from "@/components/LeadForm";

const auditItems = [
  { title: "Website & mobile experience", description: "Find the slow pages and usability issues that cost you enquiries." },
  { title: "Your enquiry journey", description: "See where customers drop off between their first visit and a booking." },
  { title: "Follow-up & response times", description: "Spot missed calls, unanswered messages, and gaps in your process." },
  { title: "Three practical improvements", description: "Get a clear set of priorities your team can act on." },
];

export default function FreeAuditPage() {
  return (
    <div className="min-h-screen bg-[#020818] text-white selection:bg-[#c9a84c] selection:text-black">
      <section className="pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
        <div className="wrap max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-start">
          <div className="lg:pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f5d88a] mb-5">A fresh look at your business</p>
            <h1 style={{ fontFamily: "var(--font-display)" }} className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-5">
              More enquiries.<br /><span className="gold-text">Fewer missed opportunities.</span>
            </h1>
            <p className="text-base sm:text-lg text-white/65 leading-relaxed max-w-lg">
              Get a free website and enquiry audit, with practical steps to turn more visitors into customers.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-3 mt-6 text-xs sm:text-sm text-white/75">
              <span className="inline-flex items-center gap-2"><Clock3 size={16} className="text-[#f5d88a]" />Report within 48 hours</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck size={16} className="text-[#f5d88a]" />Free, with no obligation</span>
            </div>
            <div className="hidden lg:block mt-10 pt-8 border-t border-white/10">
              <h2 className="text-sm font-semibold text-white mb-6">What your audit covers</h2>
              <ul className="space-y-5 list-none p-0">
                {auditItems.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#c9a84c] shrink-0 mt-0.5" />
                    <div><h3 className="text-sm font-semibold mb-1">{item.title}</h3><p className="text-sm leading-relaxed text-white/55">{item.description}</p></div>
                  </li>
                ))}
              </ul>
            </div>
            <p className="hidden lg:block mt-8 text-sm text-white/55">
              Prefer a conversation? <a href="https://calendly.com/aknexus/20min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#f5d88a] hover:underline">Book a 20-minute call <ArrowUpRight size={14} /></a>
            </p>
          </div>
          <div className="min-w-0">
            <LeadForm />
          </div>
          <div className="lg:hidden border-t border-white/10 pt-6">
            <h2 className="font-semibold mb-4">What your audit covers</h2>
            <ul className="grid sm:grid-cols-2 gap-3 list-none p-0 text-sm text-white/70">
              {auditItems.map((item) => <li key={item.title} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#c9a84c] shrink-0" />{item.title}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
