"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Family Law", href: "/family-law" },
  { label: "Plans", href: "/plans" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const hasSolidBackground = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: hasSolidBackground
          ? "rgba(2,8,24,0.95)"
          : "rgba(2,8,24,0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(201,168,76,0.18)",
        padding: hasSolidBackground ? "0.75rem 0" : "1.1rem 0",
      }}
    >
      <div className="wrap flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image
            src="/logo-square.png"
            alt="AK Nexus"
            width={36}
            height={36}
            style={{ borderRadius: "0.625rem", display: "block" }}
            priority
          />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "1.45rem",
              color: "#fff",
              letterSpacing: "0.08em",
              lineHeight: 1,
              textTransform: "uppercase",
            }}
          >
            NEXUS
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  color: isActive ? "#f5d88a" : "rgba(255,255,255,0.78)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "color 0.2s",
                  borderBottom: isActive ? "2px solid #f5d88a" : "2px solid transparent",
                  paddingBottom: "2px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f5d88a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#f5d88a" : "rgba(255,255,255,0.78)")}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/free-audit"
            className="text-xs uppercase tracking-wider font-semibold"
            style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
          >
            Free Audit
          </Link>
          <Link
            href="/book"
            className="btn-gold"
            style={{ padding: "0.6rem 1.4rem", fontSize: "0.875rem" }}
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "#fff", background: "rgba(255,255,255,0.1)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden mt-2 mx-4 rounded-2xl p-5"
          style={{
            background: "rgba(2,8,24,0.98)",
            border: "1px solid rgba(201,168,76,0.25)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  color: pathname === link.href ? "#f5d88a" : "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/free-audit"
                className="text-center py-2.5 rounded-lg font-medium text-sm"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.12)",
                  textDecoration: "none",
                }}
                onClick={() => setOpen(false)}
              >
                Get Free Audit
              </Link>
              <Link
                href="/book"
                className="btn-gold"
                style={{ justifyContent: "center" }}
                onClick={() => setOpen(false)}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
