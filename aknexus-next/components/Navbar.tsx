"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Scale, Stethoscope, Building2, Sparkles, Calculator, Wrench, Hammer, ExternalLink } from "lucide-react";

const industriesList = [
  { name: "Family Law", href: "/family-law", icon: Scale, tag: "Divorce & Custody" },
  { name: "Roofing Companies", href: "/industries/roofers", icon: Hammer, tag: "Roof Repair & Replacement" },
  { name: "Dental Practices", href: "/industries/dental", icon: Stethoscope, tag: "Clinics & Orthodontics" },
  { name: "Real Estate", href: "/industries/real-estate", icon: Building2, tag: "Agents & Brokerages" },
  { name: "Salons & Med Spas", href: "/industries/salons", icon: Sparkles, tag: "Aesthetics & Clinics" },
  { name: "Accounting & CPA", href: "/industries/accounting", icon: Calculator, tag: "Tax & Advisory" },
  { name: "Home Services", href: "/industries/home-services", icon: Wrench, tag: "HVAC, Plumbing & Trades" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const hasSolidBackground = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: hasSolidBackground ? "rgba(2,8,24,0.95)" : "rgba(2,8,24,0.6)",
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors no-underline ${
              pathname === "/" ? "text-[#f5d88a]" : "text-white/80 hover:text-[#f5d88a]"
            }`}
          >
            Home
          </Link>

          {/* Industries Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors bg-transparent border-none cursor-pointer p-0 ${
                pathname.startsWith("/industries") || pathname === "/family-law"
                  ? "text-[#f5d88a]"
                  : "text-white/80 hover:text-[#f5d88a]"
              }`}
            >
              <span>Industries</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-[#f5d88a]" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute top-full left-0 mt-3 w-72 rounded-2xl p-3 shadow-2xl border border-[rgba(201,168,76,0.25)] bg-[rgba(2,8,24,0.98)] backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150 z-50"
              >
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#f5d88a] px-3 py-1.5 border-b border-white/10 mb-1">
                  Dedicated Systems
                </div>
                <div className="space-y-1">
                  {industriesList.map((ind) => {
                    const Icon = ind.icon;
                    const isActive = pathname === ind.href;
                    return (
                      <Link
                        key={ind.name}
                        href={ind.href}
                        onClick={() => setDropdownOpen(false)}
                        className={`flex items-center gap-3 p-2.5 rounded-xl no-underline transition-all ${
                          isActive
                            ? "bg-[rgba(201,168,76,0.15)] text-[#f5d88a]"
                            : "text-white/80 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#c9a84c]/15 text-[#f5d88a] flex items-center justify-center flex-shrink-0">
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{ind.name}</div>
                          <div className="text-[10px] text-white/50">{ind.tag}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="pt-2 mt-2 border-t border-white/10 px-2">
                  <Link
                    href="/industries"
                    onClick={() => setDropdownOpen(false)}
                    className="text-[11px] font-semibold text-[#f5d88a] hover:underline block text-center py-1"
                  >
                    View All Industries Overview →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/plans"
            className={`text-sm font-medium transition-colors no-underline ${
              pathname === "/plans" ? "text-[#f5d88a]" : "text-white/80 hover:text-[#f5d88a]"
            }`}
          >
            Plans
          </Link>

          <Link
            href="/how-it-works"
            className={`text-sm font-medium transition-colors no-underline ${
              pathname === "/how-it-works" ? "text-[#f5d88a]" : "text-white/80 hover:text-[#f5d88a]"
            }`}
          >
            How It Works
          </Link>

          <Link
            href="/about"
            className={`text-sm font-medium transition-colors no-underline ${
              pathname === "/about" ? "text-[#f5d88a]" : "text-white/80 hover:text-[#f5d88a]"
            }`}
          >
            About
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://dashboard.aknexus.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider font-semibold text-white/75 hover:text-[#f5d88a] no-underline transition-colors px-2 py-1 flex items-center gap-1.5"
          >
            <span>Client Portal</span>
            <ExternalLink size={13} />
          </a>
          <Link
            href="/free-audit"
            className="text-xs uppercase tracking-wider font-semibold text-white/75 hover:text-white no-underline transition-colors px-2 py-1"
          >
            Free Audit
          </Link>
          <Link
            href="/book"
            className="btn-gold text-xs"
            style={{ padding: "0.6rem 1.4rem" }}
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-white bg-white/10 border-none cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
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
            <Link
              href="/"
              className={`text-sm font-medium no-underline ${pathname === "/" ? "text-[#f5d88a]" : "text-white/80"}`}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <div className="py-2 border-y border-white/10">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#f5d88a] block mb-2">
                Industries
              </span>
              <div className="grid grid-cols-2 gap-2">
                {industriesList.map((ind) => (
                  <Link
                    key={ind.name}
                    href={ind.href}
                    className="text-xs text-white/75 hover:text-[#f5d88a] py-1 block no-underline"
                    onClick={() => setOpen(false)}
                  >
                    {ind.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/plans"
              className={`text-sm font-medium no-underline ${pathname === "/plans" ? "text-[#f5d88a]" : "text-white/80"}`}
              onClick={() => setOpen(false)}
            >
              Plans
            </Link>

            <Link
              href="/how-it-works"
              className={`text-sm font-medium no-underline ${pathname === "/how-it-works" ? "text-[#f5d88a]" : "text-white/80"}`}
              onClick={() => setOpen(false)}
            >
              How It Works
            </Link>

            <Link
              href="/about"
              className={`text-sm font-medium no-underline ${pathname === "/about" ? "text-[#f5d88a]" : "text-white/80"}`}
              onClick={() => setOpen(false)}
            >
              About
            </Link>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://dashboard.aknexus.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-2.5 rounded-lg font-medium text-sm bg-white/5 border border-white/10 text-white no-underline flex items-center justify-center gap-2 hover:text-[#f5d88a]"
                onClick={() => setOpen(false)}
              >
                <span>Client Portal</span>
                <ExternalLink size={14} />
              </a>
              <Link
                href="/free-audit"
                className="text-center py-2.5 rounded-lg font-medium text-sm bg-white/5 border border-white/10 text-white no-underline"
                onClick={() => setOpen(false)}
              >
                Get Free Audit
              </Link>
              <Link
                href="/book"
                className="btn-gold text-center justify-center"
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
