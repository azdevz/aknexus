"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  FileSearch,
  Lock,
  Calendar,
} from "lucide-react";

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
];

export default function FreeAuditPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phone: "",
    firmName: "",
    websiteUrl: "",
    state: "",
    firmSize: "Solo",
    biggestChallenge: "Slow follow-up",
    consent: false,
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    landing_page: "",
    referrer: "",
    industry: "family-law",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      setFormData((prev) => ({
        ...prev,
        utm_source: urlParams.get("utm_source") || "",
        utm_medium: urlParams.get("utm_medium") || "",
        utm_campaign: urlParams.get("utm_campaign") || "",
        utm_term: urlParams.get("utm_term") || "",
        utm_content: urlParams.get("utm_content") || "",
        landing_page: window.location.pathname,
        referrer: document.referrer || "",
      }));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please agree to the communications terms to receive your audit.");
      return;
    }

    setLoading(true);

    // Simulate sending data or POST to webhook
    try {
      // In production: await fetch("/api/audit-submit", { method: "POST", body: JSON.stringify({ ...formData, submitted_at: new Date().toISOString() }) });
      await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#020818] text-white selection:bg-[#c9a84c] selection:text-black min-h-screen">
      <section className="pt-36 pb-24 md:pt-44 md:pb-28">
        <div className="wrap max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] mb-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a]">
              No Obligation Audit
            </span>
          </div>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white"
          >
            Get your free <span className="gold-text">website & intake audit.</span>
          </h1>
          <p className="text-base sm:text-lg text-white/75 leading-relaxed">
            Tell us about your firm. We'll review your website and how inquiries are handled, and send you a short written report with the top fixes.
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
                <span><strong>Website speed & mobile check: </strong>Real performance tests on mobile devices.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                <span><strong>Conversion path audit: </strong>Review of how easily visitors turn into consultation requests.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                <span><strong>Inquiry follow-up evaluation: </strong>Notes on response speed and calendar booking.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
                <span><strong>Three priority fixes: </strong>Specific, actionable recommendations you can implement immediately.</span>
              </li>
            </ul>

            <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-xs text-white/60 leading-relaxed flex items-start gap-2">
              <Lock size={15} className="text-[#f5d88a] flex-shrink-0 mt-0.5" />
              <span>
                Zero sales pressure. You receive a concise PDF report, whether we work together or not.
              </span>
            </div>
          </div>

          {/* Form container */}
          <div className="lg:col-span-7 p-8 rounded-3xl border border-white/10 bg-white/[0.02] shadow-2xl">
            {submitted ? (
              <div className="py-10 text-center">
                <div className="w-16 h-16 rounded-full bg-[#c9a84c]/20 text-[#f5d88a] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={36} />
                </div>
                <h3
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-2xl font-bold text-white mb-3"
                >
                  Thanks, we've got it.
                </h3>
                <p className="text-white/75 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                  You'll receive your written audit report within <strong>2 business days</strong> at <span className="text-[#f5d88a]">{formData.workEmail}</span>.
                </p>
                <div className="p-5 rounded-2xl border border-white/10 bg-white/5 max-w-md mx-auto">
                  <p className="text-xs text-white/70 mb-4">
                    Want to talk through your firm's intake process sooner?
                  </p>
                  <Link
                    href="/book"
                    className="btn-gold w-full text-center py-3 text-sm font-semibold rounded-xl block"
                  >
                    Book a 20-Minute Call
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe, Esq."
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c9a84c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@doefamilylaw.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c9a84c]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                      Firm Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Doe Family Law LLC"
                      value={formData.firmName}
                      onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c9a84c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                      Phone Number (for SMS)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c9a84c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                    Website URL *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://www.doefamilylaw.com"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#c9a84c]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                      State *
                    </label>
                    <select
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#071329] text-white text-sm focus:outline-none focus:border-[#c9a84c]"
                    >
                      <option value="" disabled>Select jurisdiction state</option>
                      {US_STATES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                      Firm Size *
                    </label>
                    <select
                      required
                      value={formData.firmSize}
                      onChange={(e) => setFormData({ ...formData, firmSize: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#071329] text-white text-sm focus:outline-none focus:border-[#c9a84c]"
                    >
                      <option value="Solo">Solo Attorney</option>
                      <option value="2 to 3">2 to 3 Staff Members</option>
                      <option value="4+">4+ Staff Members</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                    Biggest Challenge
                  </label>
                  <select
                    value={formData.biggestChallenge}
                    onChange={(e) => setFormData({ ...formData, biggestChallenge: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#071329] text-white text-sm focus:outline-none focus:border-[#c9a84c]"
                  >
                    <option value="Slow follow-up">Slow follow-up to inquiries</option>
                    <option value="More inquiries">Need more high-intent inquiries</option>
                    <option value="Website conversion">Website isn't converting visitors</option>
                    <option value="Reporting & attribution">No clear reporting or attribution</option>
                    <option value="Other">Other practice front-office need</option>
                  </select>
                </div>

                {/* Consent checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer text-xs text-white/70 leading-relaxed">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 rounded border-white/30 text-[#c9a84c] focus:ring-0 focus:outline-none"
                    />
                    <span>
                      I agree to receive emails and, if I provided a phone number, text messages from AK Nexus about my audit and our services. Message and data rates may apply. Reply STOP to opt out. See our{" "}
                      <Link href="/privacy-policy" className="text-[#f5d88a] underline" target="_blank">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link href="/terms-of-service" className="text-[#f5d88a] underline" target="_blank">
                        Terms
                      </Link>.
                    </span>
                  </label>
                </div>

                {/* Privacy Warning */}
                <p className="text-[11px] text-white/40 italic pt-1">
                  * Please don't include details about any specific legal matter or client in this form.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full py-4 text-base font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xl cursor-pointer disabled:opacity-50"
                >
                  <span>{loading ? "Preparing your request..." : "Send My Free Audit"}</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
