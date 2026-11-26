"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Process", href: "/how-it-works" },
  { name: "Tools", href: "/tools" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  // One marker under the words. It slides to the word under the pointer or the
  // keyboard focus, and rests under the current page.
  const moveMarker = useCallback((target?: HTMLElement | null) => {
    const marker = markerRef.current;
    const nav = navRef.current;
    if (!marker || !nav) return;
    const el = target ?? nav.querySelector<HTMLElement>('[aria-current="page"]');
    if (!el) {
      marker.style.opacity = "0";
      return;
    }
    // The first placement has nowhere to slide from, so it only fades in.
    if (marker.style.opacity !== "1") {
      marker.style.transitionProperty = "opacity";
      requestAnimationFrame(() => (marker.style.transitionProperty = ""));
    }
    marker.style.opacity = "1";
    marker.style.width = `${el.offsetWidth}px`;
    marker.style.transform = `translateX(${el.offsetLeft}px)`;
  }, []);

  useEffect(() => {
    moveMarker();
    const rest = () => moveMarker();
    window.addEventListener("resize", rest);
    document.fonts?.ready.then(rest);
    return () => window.removeEventListener("resize", rest);
  }, [pathname, moveMarker]);

  // The sheet closes on any tap and on Escape, and the page behind it stays still.
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[72px] border-b border-line bg-paper">
      <div className="wrap relative flex h-full items-center justify-between gap-6">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-3 focus:z-10 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>

        {/* Words on the left */}
        <nav
          ref={navRef}
          aria-label="Main"
          className="relative hidden h-full flex-1 items-center gap-8 lg:flex"
          onMouseLeave={() => moveMarker()}
          onBlur={() => moveMarker()}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              onMouseEnter={(e) => moveMarker(e.currentTarget)}
              onFocus={(e) => moveMarker(e.currentTarget)}
              className="py-2 text-[15px] font-medium text-ink/70 transition-colors duration-200 hover:text-ink aria-[current=page]:text-ink"
            >
              {link.name}
            </Link>
          ))}
          <span ref={markerRef} aria-hidden="true" className="nav-marker" />
        </nav>

        {/* The name in the middle (on the left under 1024px) */}
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className="group flex shrink-0 items-center gap-2.5 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        >
          <Image
            src="/assets/img/logo.webp"
            alt=""
            width={56}
            height={56}
            priority
            className="-my-2 h-14 w-14 object-contain transition-transform duration-300 ease-out group-hover:translate-x-0.5"
          />
          <span className="font-display text-xl font-medium tracking-tight text-ink">
            Swift Sail <span className="hidden text-ink-soft sm:inline">Shipping</span>
          </span>
        </Link>

        {/* The one action on the right */}
        <div className="flex flex-1 items-center justify-end gap-3">
          <a
            href={site.phoneHref}
            className="hidden text-[15px] font-medium text-ink/70 transition-colors duration-200 hover:text-ink xl:inline"
          >
            {site.phone}
          </a>
          <Link href={site.ctaHref} className="btn btn--primary hidden sm:inline-flex">
            {site.cta}
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="btn btn--secondary menu-toggle w-12 px-0 lg:hidden"
          >
            <span aria-hidden="true" className="menu-toggle__bars">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {/* How far down the page the reader is */}
      <span aria-hidden="true" className="scroll-progress" />

      {/* Full-screen sheet under 1024px. It stays mounted so it can ease out as well as in. */}
      <div id="site-menu" data-open={isMenuOpen} inert={!isMenuOpen} className="menu-sheet lg:hidden">
        <nav aria-label="Menu" className="wrap flex flex-col py-4" onClick={() => setIsMenuOpen(false)}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              style={{ "--i": i } as React.CSSProperties}
              className="menu-sheet__item group flex h-14 items-center justify-between border-b border-line font-display text-2xl tracking-tight text-ink aria-[current=page]:text-accent"
            >
              {link.name}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
                className="text-accent transition-transform duration-200 ease-out group-hover:translate-x-1 group-active:translate-x-1"
              >
                <path
                  d="M3 9h12M10 4l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}
          <div
            className="menu-sheet__item btn-row mt-8 flex flex-col gap-3"
            style={{ "--i": navLinks.length } as React.CSSProperties}
          >
            <Link href={site.ctaHref} className="btn btn--primary">
              {site.cta}
            </Link>
            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
              Send a WhatsApp message
            </a>
          </div>
          <p className="menu-sheet__item mt-8 text-ink-soft" style={{ "--i": navLinks.length + 1 } as React.CSSProperties}>
            <a href={site.phoneHref} className="link">
              {site.phone}
            </a>
            <br />
            {site.addressShort}
            <br />
            {site.hours}
          </p>
        </nav>
      </div>
    </header>
  );
}
