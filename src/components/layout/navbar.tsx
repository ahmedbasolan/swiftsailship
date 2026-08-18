"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/", index: "01" },
  { name: "Services", href: "/services", index: "02" },
  { name: "How It Works", href: "/how-it-works", index: "03" },
  { name: "Trade Tools", href: "/#tools", index: "04" },
  { name: "About", href: "/about", index: "05" },
  { name: "Dispatch Journal", href: "/blog", index: "06" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dubaiTime, setDubaiTime] = useState<string>("");
  const pathname = usePathname();

  // Live Dubai Time (GST UTC+4)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setDubaiTime(new Intl.DateTimeFormat("en-GB", options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#070E18]/95 backdrop-blur-md border-b border-[#C5A47E]/20 transition-all">
      {/* Top Editorial Telemetry Strip */}
      <div className="hidden lg:block bg-[#04080F] border-b border-white/5 py-1.5 px-4 sm:px-6 lg:px-8 text-[11px] font-mono text-gray-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              DUBAI PORT SYSTEM: ACTIVE
            </span>
            <span className="text-gray-600">•</span>
            <span>JEBEL ALI & SHARJAH TERMINALS OPERATIONAL</span>
            <span className="text-gray-600">•</span>
            <span>
              DUBAI TIME (GST UTC+4): <strong className="text-white">{dubaiTime || "12:00:00"}</strong>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+971553424700"
              className="text-gray-300 hover:text-[#C5A47E] transition-colors flex items-center gap-1.5"
            >
              <i className="fa-solid fa-phone text-[#C5A47E] text-[10px]" />
              <span>+971 55 342 4700</span>
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="mailto:info@swiftsailship.com"
              className="text-gray-300 hover:text-[#C5A47E] transition-colors"
            >
              info@swiftsailship.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Masthead Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Masthead */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <img
              src="/assets/img/logo.webp"
              alt="Swift Sail Shipping Logo"
              width={48}
              height={48}
              loading="eager"
              decoding="async"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl sm:text-2xl text-white tracking-tight uppercase leading-none">
                Swift Sail
              </span>
              <span className="text-[10px] font-mono text-[#C5A47E] tracking-[0.25em] uppercase mt-0.5">
                Shipping L.L.C. • Dubai
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-mono tracking-wider transition-colors py-1 relative ${
                    isActive
                      ? "text-[#C5A47E] font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span className="text-[10px] text-[#C5A47E]/60 mr-1">{link.index}</span>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A47E]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/971553424700"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3.5 py-2.5 rounded hover:bg-emerald-900/40 transition-colors"
              title="Chat directly on WhatsApp"
            >
              <i className="fa-brands fa-whatsapp text-sm" />
              <span className="font-bold">Ops Desk</span>
            </a>

            <Link
              href="/get-quote"
              className="btn-editorial-gold text-xs px-5 py-2.5 rounded inline-flex items-center gap-2"
            >
              <span>Get Quote</span>
              <i className="fa-solid fa-arrow-right text-[10px]" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 border border-gray-800 rounded bg-[#112236] text-white"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-[#C5A47E] transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#C5A47E] transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "my-0.5"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#C5A47E] transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#070E18] border-b border-[#C5A47E]/30 px-6 py-6 space-y-4">
          <div className="text-[11px] font-mono text-gray-400 pb-3 border-b border-gray-800 flex justify-between items-center">
            <span className="text-emerald-400">● DUBAI OPERATIONS ACTIVE</span>
            <span>GST: {dubaiTime}</span>
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-mono tracking-wider py-2 border-b border-gray-900 ${
                  pathname === link.href ? "text-[#C5A47E] font-bold" : "text-gray-300"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-xs text-[#C5A47E]/60 mr-2">{link.index}</span>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="https://wa.me/971553424700"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-700 text-white font-mono text-xs font-bold py-3 rounded uppercase tracking-wider"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fa-brands fa-whatsapp text-base" /> WhatsApp Operations
            </a>

            <Link
              href="/get-quote"
              className="w-full text-center btn-editorial-gold text-xs font-bold py-3 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Freight Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
