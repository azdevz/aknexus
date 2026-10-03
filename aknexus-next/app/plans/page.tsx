"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  CreditCard,
  Calendar,
  HelpCircle,
} from "lucide-react";
import { AGENCY_PLANS, ADD_ONS, AGENCY_FAQS } from "@/data/agency";

export default function PlansPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#020818] text-white selection:bg-[#c9a84c] selection:text-black">
      {/* Header */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 text-center">
        <div className="wrap max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] mb-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              Predictable Investment
            </span>
          </div>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white"
          >
            Simple plans. <span className="gold-text">No lock-in.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto font-normal mb-8">
            Pick the level of support that fits your firm. All plans include a 3-month minimum, then month-to-month with 30 days' notice. You own your website, accounts and data.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-[#f5d88a]" />
              You own 100% of accounts & data
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={16} className="text-[#f5d88a]" />
              Month-to-month after 3 months
            </span>
            <span className="flex items-center gap-1.5">
              <CreditCard size={16} className="text-[#f5d88a]" />
              Billed monthly via Stripe
            </span>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-12">
        <div className="wrap max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AGENCY_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                plan.popular
                  ? "border-[#c9a84c] bg-gradient-to-b from-[rgba(201,168,76,0.12)] via-[rgba(2,8,24,0.85)] to-[#020818] shadow-2xl relative"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c9a84c] text-black">
                  Recommended For Growth
                </span>
              )}

              <div>
                <h3 className="font-bold text-2xl text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#f5d88a]">
                    {plan.price}
                  </span>
                  <span className="text-white/60 text-sm"> / month</span>
                  <p className="text-xs text-white/50 mt-1 font-medium">{plan.setupFee}</p>
                </div>

                <div className="text-xs text-white/70 mb-6 bg-white/5 p-3.5 rounded-xl leading-relaxed">
                  <strong className="text-white">Best for: </strong>
                  {plan.bestFor}
                </div>

                <div className="space-y-6 mb-8">
                  {plan.deliverables.map((cat, idx) => (
                    <div key={idx}>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-[#f5d88a] mb-2.5">
                        {cat.category}
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-white/80 list-none p-0">
                        {cat.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] text-white/40 mb-4 text-center">
                  {plan.id === "scale"
                    ? "Ad budget agreed on call and billed directly by Google/Meta."
                    : "Prices shown are starting points confirmed on your audit call."}
                </p>
                <Link
                  href={plan.ctaHref}
                  className={`w-full py-3.5 rounded-xl text-center block text-sm font-semibold transition-all ${
                    plan.popular
                      ? "btn-gold shadow-lg"
                      : "border border-white/20 bg-white/5 hover:bg-white/10 text-white"
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-20 border-t border-white/10 bg-[rgba(5,13,31,0.6)]">
        <div className="wrap max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              Flexible Support
            </span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-2xl sm:text-3xl font-bold mt-2 text-white"
            >
              Practice Operations Add-Ons
            </h2>
            <p className="text-white/60 text-sm mt-2">
              Available as dedicated add-ons to any monthly plan (quoted on request).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {ADD_ONS.map((addon, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-lg text-white mb-2">{addon.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{addon.description}</p>
                </div>
                <Link
                  href="/book"
                  className="mt-6 text-xs font-semibold text-[#f5d88a] inline-flex items-center gap-1 hover:underline"
                >
                  Ask About Add-Ons <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Summary */}
      <section className="py-16 border-t border-white/10">
        <div className="wrap max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.01]">
            <h3
              style={{ fontFamily: "var(--font-display)" }}
              className="text-xl font-bold text-white mb-4 flex items-center gap-2"
            >
              <ShieldCheck size={20} className="text-[#f5d88a]" />
              Clear & Honest Terms
            </h3>
            <ul className="space-y-3 text-sm text-white/70 list-none p-0">
              <li className="flex items-start gap-2">
                <span className="text-[#f5d88a]">•</span>
                <span><strong>Commitment: </strong>3-month minimum to establish and optimize systems, then month-to-month with 30 days' written notice.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f5d88a]">•</span>
                <span><strong>Setup Fee: </strong>One-time setup fee due prior to onboarding kickoff and build phase.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f5d88a]">•</span>
                <span><strong>Billing: </strong>Monthly subscriptions processed securely via Stripe. Invoices, receipts, and card updates available via the customer portal.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f5d88a]">•</span>
                <span><strong>Pass-Through Costs: </strong>Ad spend is paid directly by your firm to Google/Meta. Third-party telephony or specialized software licenses are billed directly without markup.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f5d88a]">•</span>
                <span><strong>Deliverables: </strong>Exact deliverables, response SLAs, and scope details are confirmed transparently in your service agreement.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-white/10 bg-[rgba(5,13,31,0.5)]">
        <div className="wrap max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl font-bold text-white"
            >
              Plans & Billing FAQ
            </h2>
          </div>

          <div className="space-y-3">
            {AGENCY_FAQS.slice(0, 6).map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
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

      {/* Final Callout */}
      <section className="py-20 border-t border-white/10 text-center">
        <div className="wrap max-w-2xl mx-auto">
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl font-bold text-white mb-4"
          >
            Ready to confirm the right plan?
          </h2>
          <p className="text-white/70 text-base mb-8">
            Book a 20-minute call. We'll review your current website, intake flow, and target market to confirm the exact scope.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="btn-gold px-8 py-3.5 rounded-xl font-semibold text-sm">
              Book a 20-Minute Call
            </Link>
            <Link
              href="/free-audit"
              className="px-7 py-3.5 rounded-xl font-medium text-sm border border-white/20 hover:bg-white/10 transition-colors text-white"
            >
              Get Free Audit First
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
