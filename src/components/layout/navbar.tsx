"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/theme-provider";
import { AnimatedThemeToggle } from "@/components/ui/animated-theme-toggle";

const navLinks = [
  { name: "Home", href: "/", index: "01" },
  { name: "Services", href: "/services", index: "02" },
  { name: "How It Works", href: "/how-it-works", index: "03" },
  { name: "Trade Tools", href: "/#tools", index: "04" },
  { name: "About", href: "/about", index: "05" },
  { name: "Blog", href: "/blog", index: "06" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dubaiTime, setDubaiTime] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  // Live Dubai Time
  useEffect(() => {
    const updateTime = () => {
      setDubaiTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Dubai",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isDark
          ? "bg-[#070E18]/97 border-b border-[#C5A47E]/20"
          : "bg-white border-b border-slate-200"
        }
        ${scrolled ? (isDark ? "shadow-[0_4px_24px_rgba(0,0,0,0.5)]" : "shadow-[0_4px_20px_rgba(0,0,0,0.08)]") : ""}
      `}
    >
      {/* ── Top Telemetry Strip ─────────────────────────────── */}
      <div className={`hidden lg:block border-b text-[10.5px] font-mono tracking-wide transition-colors duration-300
        ${isDark ? "bg-[#04080F] border-white/5 text-slate-400" : "bg-slate-900 border-slate-700 text-slate-400"}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-8 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              DUBAI PORT SYSTEM: ACTIVE
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-500">JEBEL ALI &amp; SHARJAH TERMINALS OPERATIONAL</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-500">
              GST (UTC+4):{" "}
              <span className="text-white font-semibold tabular-nums">{dubaiTime || "—"}</span>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:+971553424700" className="flex items-center gap-1.5 text-slate-400 hover:text-[#C5A47E] transition-colors">
              <i className="fa-solid fa-phone text-[#C5A47E] text-[9px]" />
              +971 55 342 4700
            </a>
            <span className="text-slate-600">·</span>
            <a href="mailto:info@swiftsailship.com" className="text-slate-400 hover:text-[#C5A47E] transition-colors">
              info@swiftsailship.com
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Nav Row ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] gap-6">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/assets/img/logo.webp"
              alt="Swift Sail Shipping"
              width={44}
              height={44}
              loading="eager"
              decoding="async"
              className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col leading-none">
              <span className={`font-serif font-bold text-[1.35rem] uppercase tracking-tight transition-colors duration-300
                ${isDark ? "text-white" : "text-slate-900"}`}>
                Swift Sail
              </span>
              <span className="text-[9.5px] font-mono text-[#C5A47E] tracking-[0.22em] uppercase mt-[3px]">
                Shipping L.L.C. · Dubai
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative flex items-center gap-1 px-3.5 py-2 rounded-md text-[12.5px] font-mono tracking-wider transition-all duration-200
                    ${isActive
                      ? isDark
                        ? "text-[#C5A47E] bg-[#C5A47E]/8"
                        : "text-[#A37F55] bg-[#C5A47E]/8"
                      : isDark
                        ? "text-slate-300 hover:text-white hover:bg-white/5"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                >
                  <span className={`text-[9px] font-semibold tabular-nums
                    ${isActive ? "text-[#C5A47E]" : "text-[#C5A47E]/50"}`}>
                    {link.index}
                  </span>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] rounded-full bg-[#C5A47E]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* WhatsApp */}
            <a
              href="https://wa.me/971553424700"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp Operations"
              className={`hidden sm:inline-flex items-center gap-2 text-[12px] font-mono font-semibold px-3.5 py-2 rounded-md border transition-all duration-200
                ${isDark
                  ? "text-emerald-400 border-emerald-500/25 bg-emerald-950/30 hover:bg-emerald-900/40 hover:border-emerald-500/50"
                  : "text-emerald-700 border-emerald-600/30 bg-emerald-50 hover:bg-emerald-100 hover:border-emerald-600/50"
                }`}
            >
              <i className="fa-brands fa-whatsapp text-[14px]" />
              <span className="hidden xl:inline">Ops Desk</span>
            </a>

            {/* Animated Theme Toggle */}
            <AnimatedThemeToggle isDark={isDark} onToggle={toggleTheme} />

            {/* Get Quote CTA */}
            <Link
              href="/get-quote"
              className={`inline-flex items-center gap-2 text-[12px] font-mono font-bold px-5 py-2.5 rounded-md uppercase tracking-wider transition-all duration-200 hover:-translate-y-px
                ${isDark
                  ? "bg-gradient-to-br from-[#C5A47E] to-[#A37F55] text-[#070E18] shadow-[0_4px_14px_rgba(197,164,126,0.3)] hover:shadow-[0_6px_20px_rgba(197,164,126,0.4)]"
                  : "bg-slate-900 text-white shadow-md hover:bg-slate-800 hover:shadow-lg"
                }`}
            >
              Get Quote
              <i className="fa-solid fa-arrow-right text-[10px]" />
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className={`lg:hidden flex flex-col justify-center items-center w-9 h-9 rounded-md border transition-colors
                ${isDark ? "border-white/10 bg-white/5 hover:bg-white/10" : "border-slate-200 bg-slate-50 hover:bg-slate-100"}`}
            >
              {[
                isMenuOpen ? "rotate-45 translate-y-[5px]" : "-translate-y-[3px]",
                isMenuOpen ? "opacity-0 scale-x-0" : "",
                isMenuOpen ? "-rotate-45 -translate-y-[5px]" : "translate-y-[3px]",
              ].map((cls, i) => (
                <span
                  key={i}
                  className={`block w-[18px] h-[1.5px] transition-all duration-300 rounded-full
                    ${isDark ? "bg-[#C5A47E]" : "bg-slate-700"} ${cls}`}
                />
              ))}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Drawer ─────────────────────────────────────── */}
      {isMenuOpen && (
        <div className={`lg:hidden border-t px-5 py-5 space-y-4
          ${isDark ? "bg-[#070E18] border-[#C5A47E]/20" : "bg-white border-slate-200"}`}
        >
          {/* Status row */}
          <div className={`flex items-center justify-between text-[10.5px] font-mono pb-3 border-b
            ${isDark ? "text-slate-500 border-white/5" : "text-slate-400 border-slate-100"}`}
          >
            <span className="text-emerald-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              DUBAI OPS ACTIVE
            </span>
            <span className="tabular-nums">{dubaiTime}</span>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm font-mono tracking-wide transition-colors
                  ${pathname === link.href
                    ? isDark ? "text-[#C5A47E] bg-[#C5A47E]/8" : "text-[#A37F55] bg-[#C5A47E]/8"
                    : isDark ? "text-slate-300 hover:text-white hover:bg-white/5" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
              >
                <span className="text-[10px] text-[#C5A47E]/50 w-5">{link.index}</span>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex flex-col gap-2.5 pt-1">
            <a
              href="https://wa.me/971553424700"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-mono text-xs font-bold py-3 rounded-md uppercase tracking-wider transition-colors"
            >
              <i className="fa-brands fa-whatsapp text-base" />
              WhatsApp Operations Desk
            </a>
            <Link
              href="/get-quote"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center justify-center gap-2 text-xs font-mono font-bold py-3 rounded-md uppercase tracking-wider transition-colors
                ${isDark
                  ? "bg-gradient-to-r from-[#C5A47E] to-[#A37F55] text-[#070E18]"
                  : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
            >
              Request Freight Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
