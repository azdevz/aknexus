"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StickyMobileCTA() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3"
      style={{
        background: "rgba(2,8,24,0.95)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(201,168,76,0.25)",
      }}
    >
      <Link
        href="/free-audit"
        className="btn-gold w-full text-center flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-xl"
        style={{ textDecoration: "none" }}
      >
        <span>Get Free Audit</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
