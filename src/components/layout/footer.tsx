import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#04080F] text-white border-t border-[#C5A47E]/20 pt-16 pb-12 relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C5A47E]/20">
          {/* Brand Colophon */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/img/logo.webp"
                alt="Swift Sail Shipping"
                width={48}
                height={48}
                loading="lazy"
                decoding="async"
                className="h-12 w-auto"
              />
              <div>
                <span className="font-serif font-bold text-xl text-white tracking-tight uppercase block leading-none">
                  Swift Sail
                </span>
                <span className="text-[10px] font-mono text-[#C5A47E] tracking-[0.2em] uppercase">
                  Shipping L.L.C. • UAE
                </span>
              </div>
            </div>

            <p className="text-xs font-sans text-gray-400 leading-relaxed max-w-sm">
              Sovereign freight forwarding, ocean charters, customs brokerage, and multi-modal logistics connecting the UAE with global trade corridors.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="editorial-stamp text-[#C5A47E] text-[10px]">
                UAE CUSTOMS LICENSED
              </span>
              <span className="editorial-stamp text-gray-400 text-[10px]">
                JEBEL ALI PORT OPERATOR
              </span>
            </div>
          </div>

          {/* Core Services */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#C5A47E] uppercase tracking-wider">
              Freight Solutions
            </h4>
            <ul className="space-y-2 text-xs font-mono text-gray-400">
              <li>
                <Link href="/services#ocean-freight" className="hover:text-white transition-colors">
                  • Ocean Freight (FCL / LCL)
                </Link>
              </li>
              <li>
                <Link href="/services#air-cargo" className="hover:text-white transition-colors">
                  • Air Cargo Velocity & Charters
                </Link>
              </li>
              <li>
                <Link href="/services#customs-clearance" className="hover:text-white transition-colors">
                  • UAE Customs Clearance (Mirsal 2)
                </Link>
              </li>
              <li>
                <Link href="/services#breakbulk-project" className="hover:text-white transition-colors">
                  • Project Cargo & Heavy Lift
                </Link>
              </li>
              <li>
                <Link href="/services#warehousing-reexport" className="hover:text-white transition-colors">
                  • Free Zone Storage & Re-Export
                </Link>
              </li>
            </ul>
          </div>

          {/* Shippers Resources & Tools */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#C5A47E] uppercase tracking-wider">
              Trade Tools
            </h4>
            <ul className="space-y-2 text-xs font-mono text-gray-400">
              <li>
                <Link href="/#calculator" className="hover:text-white transition-colors">
                  • CBM & Container Planner
                </Link>
              </li>
              <li>
                <Link href="/#customs-guide" className="hover:text-white transition-colors">
                  • UAE Tariff & Duty Guide
                </Link>
              </li>
              <li>
                <Link href="/#incoterms" className="hover:text-white transition-colors">
                  • Incoterms® 2020 Matrix
                </Link>
              </li>
              <li>
                <Link href="/#corridors" className="hover:text-white transition-colors">
                  • Global Trade Corridors
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  • 6-Stage Process Workflow
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  • Dispatch Intelligence Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Operational Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#C5A47E] uppercase tracking-wider">
              Direct Operations Desk
            </h4>
            <div className="space-y-2.5 text-xs font-mono text-gray-400">
              <div className="flex items-start gap-2">
                <i className="fa-solid fa-location-dot text-[#C5A47E] mt-1" />
                <span>Tanvi Business Centre, M - 101, Abu Hail, Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-[#C5A47E]" />
                <a href="tel:+971553424700" className="text-white hover:text-[#C5A47E] transition-colors">
                  +971 55 342 4700
                </a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-brands fa-whatsapp text-emerald-400" />
                <a
                  href="https://wa.me/971553424700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  WhatsApp Operations (24/7)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-[#C5A47E]" />
                <a href="mailto:info@swiftsailship.com" className="text-white hover:text-[#C5A47E] transition-colors">
                  info@swiftsailship.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-gray-500">
          <div>
            © {currentYear} Swift Sail Shipping L.L.C. All rights reserved. Registered under Dubai Economic Department & Port Authorities.
          </div>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span>GST UTC+4 DUBAI</span>
            <span>•</span>
            <Link href="/terms" className="text-gray-400 hover:text-[#C5A47E]">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/privacy" className="text-gray-400 hover:text-[#C5A47E]">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/get-quote" className="text-gray-400 hover:text-[#C5A47E]">
              Request Quotation
            </Link>
            <span>•</span>
            <Link href="/about" className="text-gray-400 hover:text-[#C5A47E]">
              Company Registry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
