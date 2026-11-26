"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

/**
 * Phones only: the main action slides up from the foot of the screen once the
 * reader has scrolled past the first screen, and slides away again at the top.
 */
export function ActionBar() {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement>(null);
  const hidden = pathname === site.ctaHref;

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const update = () => {
      const show = window.scrollY > window.innerHeight * 0.8;
      bar.dataset.show = String(show);
      bar.inert = !show;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  if (hidden) return null;

  return (
    <div ref={barRef} data-show="false" className="action-bar sm:hidden">
      <Link href={site.ctaHref} className="btn btn--primary flex-1">
        {site.cta}
      </Link>
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send a WhatsApp message"
        className="btn btn--secondary w-12 px-0"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M3.5 16.5l.9-3.2A6.5 6.5 0 1 1 7 15.6l-3.5.9z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
