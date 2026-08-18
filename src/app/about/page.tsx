import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us  Corporate Heritage & Infrastructure | Swift Sail Shipping L.L.C.",
  description:
    "Founded in Dubai, Swift Sail Shipping L.L.C. provides premier international freight forwarding, ocean charters, customs brokerage, and supply chain logistics across the UAE and GCC.",
  alternates: {
    canonical: "https://www.swiftsailship.com/about",
  },
  openGraph: {
    type: "website",
    title: "About Us  Corporate Heritage & Infrastructure | Swift Sail Shipping L.L.C.",
    description:
      "Founded in Dubai, Swift Sail Shipping L.L.C. provides premier international freight forwarding, ocean charters, customs brokerage, and supply chain logistics across the UAE and GCC.",
    url: "https://www.swiftsailship.com/about",
    images: ["/assets/img/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us  Corporate Heritage & Infrastructure | Swift Sail Shipping L.L.C.",
    description:
      "Founded in Dubai, Swift Sail Shipping L.L.C. provides premier international freight forwarding, ocean charters, customs brokerage, and supply chain logistics across the UAE and GCC.",
    images: ["/assets/img/og-default.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-[#FBF9F5]">
      {/* Editorial Header */}
      <header className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#070E18] text-white border-b border-[#C5A47E]/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="editorial-stamp text-[#C5A47E]">
              CORPORATE MONOGRAPH • ESTABLISHED IN DUBAI
            </span>
            <span className="text-xs font-mono text-gray-400">
              UAE LICENSED FREIGHT OPERATOR
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight mb-6">
            The Maritime Heritage of <br />
            <span className="gold-gradient-text">Swift Sail Shipping</span>
          </h1>

          <p className="text-lg text-gray-300 font-sans font-light max-w-3xl leading-relaxed">
            Forged at the epicenter of international commerce in Dubai, we unite deep local customs mastery with seamless global ocean and air networks.
          </p>
        </div>
      </header>

      {/* Main Editorial Story */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 space-y-20">
        {/* Monograph Lead Story */}
        <section className="bg-white border border-gray-300 rounded-lg p-8 sm:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="editorial-stamp text-[#A37F55] border-[#A37F55]">
                HISTORICAL VANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
                Architects of Resilient Gulf Trade Flows
              </h2>
              <p className="text-slate-700 leading-relaxed font-sans text-base broadsheet-dropcap">
                Swift Sail Shipping L.L.C. was established with an uncompromising mandate: to eliminate the friction, opacity, and regulatory delays that so often impede international commerce in the Middle East. Over more than 15 years of operational excellence, our teams have anchored supply chains connecting major manufacturers in Asia and Europe with rapidly growing markets across the GCC and East Africa.
              </p>
              <p className="text-slate-700 leading-relaxed font-sans text-sm sm:text-base">
                Operating with direct electronic access to Dubai Customs’ Mirsal 2 system and maintaining active terminal operations at Jebel Ali Port, Port Khalid Sharjah, and Dubai World Central, we provide our enterprise clients with immediate priority clearance and unhindered onward delivery.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-gray-300 shadow-xl relative">
                <img
                  src="/assets/img/office_image_1776261439512.webp"
                  alt="Swift Sail Shipping Executive Logistics Desk"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-[#070E18] text-white text-xs font-mono">
                  <span className="text-[#C5A47E] font-bold block">DUBAI OPERATIONS COMMAND:</span>
                  <span>Tanvi Business Centre, Abu Hail, Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 3 Core Tenets */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="editorial-stamp text-[#A37F55] border-[#A37F55] mb-2 inline-block">
              FOUNDATIONAL ETHOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              The Sovereign Tenets of Swift Sail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-300 rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#070E18] rounded text-[#C5A47E] flex items-center justify-center text-xl mb-6 font-mono font-bold">
                01
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-950 mb-3">
                Absolute Documentation Rigor
              </h3>
              <p className="text-slate-600 text-sm font-sans leading-relaxed">
                In logistics, paperwork accuracy is speed. We rigorously review Bills of Lading, Certificates of Origin, and commercial invoices before goods arrive to eliminate customs holds.
              </p>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#070E18] rounded text-[#C5A47E] flex items-center justify-center text-xl mb-6 font-mono font-bold">
                02
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-950 mb-3">
                Transparent Itemized Economics
              </h3>
              <p className="text-slate-600 text-sm font-sans leading-relaxed">
                No hidden destination surcharges or unexpected detention penalties. Every quote clearly specifies ocean/air carriage, terminal handling, customs brokerage, and local delivery.
              </p>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#070E18] rounded text-[#C5A47E] flex items-center justify-center text-xl mb-6 font-mono font-bold">
                03
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-950 mb-3">
                Direct On-Ground Presence
              </h3>
              <p className="text-slate-600 text-sm font-sans leading-relaxed">
                We are not a distant call center. Our licensed brokers and operations staff are physically on-site at Jebel Ali Port, Sharjah Port Khalid, and DXB Air Cargo terminals daily.
              </p>
            </div>
          </div>
        </section>

        {/* Official Credentials Ledger */}
        <section className="bg-[#070E18] text-white rounded-lg p-8 sm:p-12 border border-[#C5A47E]/30">
          <div className="border-b border-[#C5A47E]/20 pb-6 mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="editorial-stamp text-[#C5A47E] mb-1 block">
                STATUTORY ACCREDITATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Official Licensing & Compliance Register
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-400">
              ● GOOD STANDING WITH UAE AUTHORITIES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-mono">
            <div className="p-4 bg-[#112236] rounded border border-gray-800 space-y-1">
              <span className="text-gray-400 block">Commercial Entity</span>
              <strong className="text-white text-sm block">Swift Sail Shipping L.L.C.</strong>
              <span className="text-[#C5A47E]">Dubai Economic Department</span>
            </div>

            <div className="p-4 bg-[#112236] rounded border border-gray-800 space-y-1">
              <span className="text-gray-400 block">Customs Authority</span>
              <strong className="text-white text-sm block">Licensed Brokerage</strong>
              <span className="text-emerald-400">Mirsal 2 Port Gate Pass Code</span>
            </div>

            <div className="p-4 bg-[#112236] rounded border border-gray-800 space-y-1">
              <span className="text-gray-400 block">Terminal Access</span>
              <strong className="text-white text-sm block">DP World Jebel Ali</strong>
              <span className="text-gray-300">Sharjah Port Khalid & Khalifa Port</span>
            </div>

            <div className="p-4 bg-[#112236] rounded border border-gray-800 space-y-1">
              <span className="text-gray-400 block">Operating Headquarters</span>
              <strong className="text-white text-sm block">Tanvi Business Centre</strong>
              <span className="text-gray-300">M - 101, Abu Hail, Dubai, UAE</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link
            href="/get-quote"
            className="btn-editorial-gold px-8 py-4 rounded text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
          >
            <span>Consult Our Logistics Officers</span>
            <i className="fa-solid fa-arrow-right text-[10px]" />
          </Link>
        </div>
      </main>
    </div>
  );
}
