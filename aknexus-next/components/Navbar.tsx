"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled
          ? "rgba(2,8,24,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
        padding: scrolled ? "0.75rem 0" : "1.25rem 0",
      }}
    >
      <div className="wrap flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black"
            style={{
              background: "linear-gradient(135deg, #c9a84c, #f5d88a)",
              color: "#020818",
              fontFamily: "var(--font-display)",
            }}
          >
            AK
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.15rem",
              color: "#fff",
              letterSpacing: "-0.01em",
            }}
          >
            Nexus
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5d88a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/971526365585"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ padding: "0.6rem 1.5rem", fontSize: "0.85rem" }}
          >
            Free Consultation
          </a>
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
            background: "rgba(2,8,24,0.97)",
            border: "1px solid rgba(201,168,76,0.2)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontWeight: 500 }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/971526365585"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ marginTop: "0.5rem", justifyContent: "center" }}
            >
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
