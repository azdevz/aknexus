"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  User,
  Building2,
  Sparkles,
  AlertCircle,
  Loader2,
  Calendar,
  ExternalLink,
} from "lucide-react";

const INDUSTRY_OPTIONS = [
  { id: "HOME & TRADE (Roofers, Plumber, etc.)", label: "Home & Trade", desc: "Roofers, HVAC, Plumbers, Contractors" },
  { id: "HEALTH & WELLNESS (Dentists, Salons, etc.)", label: "Health & Wellness", desc: "Dentists, Med Spas, Clinics, Salons" },
  { id: "PROPERTY & PROFESSIONAL (Law Firms, Auto Repairs, etc.)", label: "Professional & Legal", desc: "Law Firms, CPAs, Real Estate, Auto" },
];

const SERVICE_OPTIONS = [
  "Local SEO",
  "CRM(Leads & Ops)",
  "AI Automation",
  "Social Media Management",
  "PPC Management",
  "SEO",
];

interface LeadFormProps {
  className?: string;
  onSuccess?: () => void;
}

export default function LeadForm({ className = "", onSuccess }: LeadFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [industry, setIndustry] = useState(INDUSTRY_OPTIONS[2].id);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);

  // Errors & submission state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Ref for scrolling to the first invalid field (scoped to this form instance)
  const formRef = useRef<HTMLFormElement>(null);

  const toggleService = (srv: string) => {
    const updated = selectedServices.includes(srv)
      ? selectedServices.filter((s) => s !== srv)
      : [...selectedServices, srv];
    setSelectedServices(updated);

    if (errors.services) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.services;
        return next;
      });
    }
  };

  // Per-field validators — single source of truth for validation rules
  const fieldValidators: Record<string, () => string | undefined> = {
    fullName: () => {
      const v = fullName.trim();
      if (!v) return "Full name is required";
      if (v.length < 2) return "Please enter your full name (min. 2 characters)";
      return undefined;
    },
    email: () => {
      const v = email.trim();
      if (!v) return "Email address is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))
        return "Please enter a valid email address (e.g. name@domain.com)";
      return undefined;
    },
    phone: () => {
      const v = phone.trim();
      const digits = v.replace(/\D/g, "");
      if (!v) return "Phone number is required";
      if (digits.length < 7 || digits.length > 15)
        return "Please enter a valid phone number with area code";
      return undefined;
    },
  };

  // Validate a single field (used on blur) without clearing other errors
  const validateField = (field: string) => {
    const validator = fieldValidators[field];
    if (!validator) return;
    const message = validator();
    setErrors((prev) => {
      if (message) {
        return prev[field] === message ? prev : { ...prev, [field]: message };
      }
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  // Full validation — returns the errors map (also applied to state)
  const validateForm = () => {
    const errs: { [key: string]: string } = {};

    for (const [field, validator] of Object.entries(fieldValidators)) {
      const message = validator();
      if (message) errs[field] = message;
    }

    // Services validation — at least one option must be selected
    if (selectedServices.length === 0) {
      errs.services = "Please select at least one service of interest";
    }

    // Consent — opt-in must be explicitly given
    if (!consent) {
      errs.consent = "Please agree to receive communications to proceed";
    }

    setErrors(errs);
    return errs;
  };

  const handleInputChange = (
    field: string,
    val: string,
    setter: (v: string) => void
  ) => {
    setter(val);
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (submitting) return;
    setServerError(null);

    const errs = validateForm();
    if (Object.keys(errs).length > 0) {
      // Scroll to first invalid field, scoped to this form instance
      setTimeout(() => {
        const form = formRef.current;
        if (!form) return;
        const firstError =
          form.querySelector(".border-red-400") ||
          (errs.services ? form.querySelector("[data-services-group]") : null) ||
          (errs.consent ? form.querySelector("[data-consent-row]") : null);
        firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        industry,
        services: selectedServices,
        consent,
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
        referrer: typeof document !== "undefined" ? document.referrer : "",
      };

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data: { error?: string } = {};
      try {
        data = await res.json();
      } catch {
        // Non-JSON response — handled by the res.ok check below
      }

      if (!res.ok) {
        throw new Error(
          data?.error || "Failed to submit form. Please check your details."
        );
      }

      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Lead form submit error:", err);
      const message = err instanceof Error ? err.message : "";
      setServerError(
        message || "There was an issue submitting your request. Please try again or reach out directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl border border-[rgba(201,168,76,0.35)] bg-[rgba(5,13,31,0.95)] backdrop-blur-2xl shadow-2xl text-center animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-2xl bg-[#c9a84c]/20 text-[#f5d88a] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#c9a84c]/10">
          <CheckCircle2 size={36} />
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 text-[#f5d88a] text-xs font-semibold uppercase tracking-wider mb-4">
          Request Received
        </div>
        <h3
          style={{ fontFamily: "var(--font-display)" }}
          className="text-2xl sm:text-3xl font-extrabold text-white mb-3"
        >
          Thank you{fullName ? `, ${fullName.split(" ")[0]}` : ""}!
        </h3>
        <p className="text-white/75 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
          Your details have been registered. Our team will review your business and deliver your audit to{" "}
          <strong className="text-[#f5d88a]">{email}</strong> within 24–48 hours.
        </p>

        {/* Calendar Fast-Track */}
        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] max-w-md mx-auto text-left">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f5d88a] mb-2">
            <Calendar size={15} />
            <span>Fast-Track Your Discovery</span>
          </div>
          <h4 className="font-bold text-base text-white mb-1">
            Want to review your audit live on a call?
          </h4>
          <p className="text-xs text-white/70 mb-4 leading-relaxed">
            Lock in a 20-minute strategy call with our founder to review high-impact fixes for your firm.
          </p>
          <a
            href="https://calendly.com/aknexus/20min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full text-center py-3 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 no-underline shadow-lg"
          >
            <span>Book 20-Min Call on Calendly</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`p-6 sm:p-10 rounded-3xl border border-[rgba(201,168,76,0.25)] bg-[rgba(5,13,31,0.9)] backdrop-blur-2xl shadow-2xl ${className}`}
    >
      <div className="mb-8">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#f5d88a]">
            <Sparkles size={13} />
            Free Website & Intake Audit
          </span>
          <span className="text-xs text-white/40">* Required</span>
        </div>
        <h3
          style={{ fontFamily: "var(--font-display)" }}
          className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
        >
          Request your <span className="gold-text">intake & growth audit</span>
        </h3>
        <p className="text-xs sm:text-sm text-white/60 mt-1.5">
          Tell us about your practice and which growth systems you want to improve.
        </p>
      </div>

      {serverError && (
        <div className="mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-xs flex items-center gap-3">
          <AlertCircle size={18} className="flex-shrink-0 text-red-400" />
          <span>{serverError}</span>
        </div>
      )}

      {Object.keys(errors).length > 0 && (
        <div className="mb-6 p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-200 text-xs flex items-center gap-2.5">
          <AlertCircle size={16} className="flex-shrink-0 text-amber-400" />
          <span>Please fix the highlighted fields below to submit your request.</span>
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action="#"
        method="post"
        noValidate
        className="space-y-5"
      >
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
            Full Name <span className="text-[#f5d88a]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
              <User size={16} />
            </div>
            <input
              type="text"
              value={fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value, setFullName)}
              onBlur={() => validateField("fullName")}
              aria-invalid={!!errors.fullName}
              placeholder="e.g. John Doe"
              className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-[#071329] text-white placeholder-white/30 text-sm focus:outline-none transition-all ${
                errors.fullName
                  ? "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400"
                  : "border-white/15 focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]"
              }`}
            />
          </div>
          {errors.fullName && (
            <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-medium">
              <AlertCircle size={12} className="flex-shrink-0" /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Email & Phone Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
              Email Address <span className="text-[#f5d88a]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                <Mail size={16} />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => handleInputChange("email", e.target.value, setEmail)}
                onBlur={() => validateField("email")}
                aria-invalid={!!errors.email}
                placeholder="your@email.com"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-[#071329] text-white placeholder-white/30 text-sm focus:outline-none transition-all ${
                  errors.email
                    ? "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400"
                    : "border-white/15 focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-medium">
                <AlertCircle size={12} className="flex-shrink-0" /> {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
              Phone Number <span className="text-[#f5d88a]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                <Phone size={16} />
              </div>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => handleInputChange("phone", e.target.value, setPhone)}
                onBlur={() => validateField("phone")}
                aria-invalid={!!errors.phone}
                placeholder="+1 (555) 000-0000"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-[#071329] text-white placeholder-white/30 text-sm focus:outline-none transition-all ${
                  errors.phone
                    ? "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400"
                    : "border-white/15 focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-medium">
                <AlertCircle size={12} className="flex-shrink-0" /> {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Industry dropdown */}
        <div>
          <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
            Industry / Category
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
              <Building2 size={16} />
            </div>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-xl border border-white/15 bg-[#071329] text-white text-sm focus:outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c] transition-all appearance-none cursor-pointer"
            >
              {INDUSTRY_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id} className="bg-[#020818] text-white py-2">
                  {opt.label} — ({opt.desc})
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-white/40">
              ▼
            </div>
          </div>
        </div>

        {/* Services Multi-Select Chips */}
        <div data-services-group>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider">
              Services of Interest <span className="text-[#f5d88a]">*</span>
            </label>
            <span className="text-[11px] text-white/50">Select all that apply</span>
          </div>

          <div
            role="group"
            aria-label="Services of interest"
            className={`grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-2.5 -m-2.5 rounded-xl border transition-all ${
              errors.services
                ? "border-red-400/60 bg-red-500/[0.04]"
                : "border-transparent"
            }`}
          >
            {SERVICE_OPTIONS.map((srv) => {
              const isSelected = selectedServices.includes(srv);
              const inputId = `svc-${srv.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "")}`;
              return (
                // Nested checkbox: the <label> implicitly controls the input inside it.
                // Do NOT add htmlFor here — pointing htmlFor at a nested control can
                // double-fire the toggle and break add/remove in some browsers.
                <label
                  key={srv}
                  className={`p-3 rounded-xl border text-xs font-medium cursor-pointer select-none transition-all duration-150 flex items-center gap-2.5 ${
                    isSelected
                      ? "border-[#c9a84c] bg-[#c9a84c]/15 text-[#f5d88a] shadow-sm shadow-[#c9a84c]/20"
                      : "border-white/10 bg-white/[0.02] text-white/60 hover:border-white/25 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {/* Native checkbox — handles the toggle */}
                  <input
                    type="checkbox"
                    id={inputId}
                    checked={isSelected}
                    onChange={() => toggleService(srv)}
                    className="sr-only"
                  />
                  {/* Visual checkbox */}
                  <span
                    className={`w-4 h-4 rounded-[4px] border flex-shrink-0 flex items-center justify-center transition-all ${
                      isSelected
                        ? "bg-[#c9a84c] border-[#c9a84c]"
                        : "border-white/30 bg-transparent"
                    }`}
                  >
                    {isSelected && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span className="truncate">{srv}</span>
                </label>
              );
            })}
          </div>
          {errors.services && (
            <p className="text-[11px] text-red-400 mt-2 flex items-center gap-1 font-medium">
              <AlertCircle size={12} className="flex-shrink-0" /> {errors.services}
            </p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div className="pt-1" data-consent-row>
          <label className="flex items-start gap-3 cursor-pointer text-xs text-white/70 leading-relaxed group">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                if (errors.consent) {
                  setErrors((prev) => {
                    const next = { ...prev };
                    delete next.consent;
                    return next;
                  });
                }
              }}
              className="mt-1 w-4 h-4 rounded border-white/30 text-[#c9a84c] focus:ring-0 focus:outline-none accent-[#c9a84c] cursor-pointer flex-shrink-0"
            />
            <span className="group-hover:text-white/90 transition-colors">
              By checking this box, I consent to receive marketing and promotional messages including
              special offers, discounts, new product updates among others, from{" "}
              <strong className="text-white">AK NEXUS</strong> at the phone number provided. Frequency
              may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.
            </span>
          </label>
          {errors.consent && (
            <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1 font-medium">
              <AlertCircle size={12} className="flex-shrink-0" /> {errors.consent}
            </p>
          )}
        </div>

        {/* Legal Links */}
        <div className="text-[11px] text-white/50 text-center pt-2 border-t border-white/10">
          <Link
            href="/privacy-policy"
            target="_blank"
            className="text-white/60 hover:text-[#f5d88a] transition-colors underline"
          >
            Privacy Policy
          </Link>
          <span className="mx-2 text-white/30">•</span>
          <Link
            href="/terms-of-service"
            target="_blank"
            className="text-white/60 hover:text-[#f5d88a] transition-colors underline"
          >
            Terms of Service
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className="btn-gold w-full py-4 text-sm sm:text-base font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xl cursor-pointer disabled:opacity-50 transition-all hover:scale-[1.01]"
        >
          {submitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Submitting Your Details...</span>
            </>
          ) : (
            <>
              <span>Submit & Receive Free Audit</span>
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
