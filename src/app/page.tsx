import Link from "next/link";
import { Metadata } from "next";
import { CargoCalculator } from "@/components/tools/cargo-calculator";
import { CustomsDutyGuide } from "@/components/tools/customs-duty-guide";
import { IncotermsMatrix } from "@/components/tools/incoterms-matrix";
import { TradeCorridors } from "@/components/tools/trade-corridors";

export const metadata: Metadata = {
  title: "Swift Sail Shipping L.L.C. | Sovereign Freight Forwarding & Logistics UAE",
  description:
    "Publication-grade freight forwarding, ocean charters, air cargo velocity, and UAE customs brokerage operating from Dubai Maritime City, Jebel Ali Port, and Port Khalid.",
  alternates: {
    canonical: "https://swiftsailship.com",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col bg-[#FBF9F5]">
      {/* 1. BROADSHEET EDITORIAL HERO */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 bg-[#070E18] text-white overflow-hidden border-b border-[#C5A47E]/30">
        {/* Subtle Background Maritime Image & Grain */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/img/cargo_ship_port_uae_1776336267613.png"
            alt="UAE Maritime Port & Cargo Vessel"
            className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070E18] via-[#070E18]/80 to-[#070E18]/90" />
          <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Issue & Publication Stamp */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#C5A47E]/30 pb-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="editorial-stamp text-[#C5A47E]">
                VOL. XXIV • MARITIME EDITION
              </span>
              <span className="text-xs font-mono text-gray-400">
                DUBAI MARITIME CITY • JEBEL ALI • SHARJAH
              </span>
            </div>
            <div className="text-xs font-mono text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CUSTOMS BROKERAGE LICENSED • UAE MIRSAL 2</span>
            </div>
          </div>

          {/* Main Broadsheet Headline */}
          <div className="max-w-5xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.08] tracking-tight mb-6">
              The Artery of <br />
              <span className="gold-gradient-text">Global Commerce.</span>
            </h1>

            <p className="text-lg sm:text-xl font-sans text-gray-300 font-light leading-relaxed max-w-3xl mb-10">
              Navigating global supply chain complexities with sovereign precision. Swift Sail Shipping L.L.C. delivers publication-grade ocean freight, air velocity logistics, customs clearance, and GCC trade solutions.
            </p>

            {/* Direct Action Hub */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#calculator"
                className="btn-editorial-gold px-7 py-4 rounded text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
              >
                <i className="fa-solid fa-calculator text-sm" />
                <span>Open Cargo Calculator</span>
              </a>

              <Link
                href="/get-quote"
                className="bg-[#112236] hover:bg-[#1A3350] text-white border border-[#C5A47E]/40 px-7 py-4 rounded text-xs font-mono uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>Request Official Rate</span>
                <i className="fa-solid fa-arrow-right text-[11px]" />
              </Link>

              <a
                href="https://wa.me/971553424700"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-2 px-4 py-3 border border-emerald-500/30 rounded bg-emerald-950/30 transition-colors"
              >
                <i className="fa-brands fa-whatsapp text-base" />
                <span>Direct Ops Hotline: +971 55 342 4700</span>
              </a>
            </div>
          </div>

          {/* Key Maritime Ledger Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-16 border-t border-[#C5A47E]/20 text-xs font-mono">
            <div className="space-y-1">
              <span className="text-gray-400 uppercase tracking-widest block">UAE Heritage</span>
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#C5A47E]">15+ Years</span>
              <p className="text-gray-400 text-[11px]">Gulf Maritime Experience</p>
            </div>

            <div className="space-y-1">
              <span className="text-gray-400 uppercase tracking-widest block">Global Coverage</span>
              <span className="text-2xl sm:text-3xl font-serif font-bold text-white">50+ Hubs</span>
              <p className="text-gray-400 text-[11px]">Direct Sovereign Port Corridors</p>
            </div>

            <div className="space-y-1">
              <span className="text-gray-400 uppercase tracking-widest block">Customs Clearance</span>
              <span className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400">Mirsal 2</span>
              <p className="text-gray-400 text-[11px]">Direct Digital Port Integration</p>
            </div>

            <div className="space-y-1">
              <span className="text-gray-400 uppercase tracking-widest block">Operational Support</span>
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#C5A47E]">24 / 7</span>
              <p className="text-gray-400 text-[11px]">Dedicated Cargo Desk</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REAL MATHEMATICAL CARGO CALCULATOR SECTION */}
      <section id="calculator" className="py-20 lg:py-28 bg-[#04080F] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="editorial-stamp text-[#C5A47E] mb-3 inline-block">
              PRECISION LOGISTICS TOOLING
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Calculate Your Exact Cargo Volumetrics & Container Fit
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-sans leading-relaxed">
              No guesswork. Input your package dimensions to compute official CBM, CFT, Gross vs. Volumetric Chargeable Weight, and recommended container configuration.
            </p>
          </div>

          <CargoCalculator />
        </div>
      </section>

      {/* 3. VERIFIED TRADE CORRIDORS & PORT BENCHMARKS */}
      <section id="corridors" className="py-20 lg:py-28 bg-[#070E18] border-t border-[#C5A47E]/20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="editorial-stamp text-[#C5A47E] mb-3 inline-block">
              GLOBAL TRADE DIRECTORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Sovereign Trade Corridors & Port Transit Schedules
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-sans leading-relaxed">
              Verified maritime sailing frequencies and air freight velocity windows connecting Jebel Ali (AEJEA) and Sharjah with leading international industrial hubs.
            </p>
          </div>

          <TradeCorridors />
        </div>
      </section>

      {/* 4. THE 4 SOVEREIGN FREIGHT PILLARS (EDITORIAL DOSSIERS) */}
      <section id="services" className="py-20 lg:py-28 bg-[#FBF9F5] text-slate-900 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-300 mb-16">
            <div>
              <span className="editorial-stamp text-[#A37F55] border-[#A37F55] mb-2 inline-block">
                CAPABILITIES & SPECIALIZATIONS
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 tracking-tight">
                The Four Pillars of Swift Sail Logistics
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-mono font-bold uppercase tracking-wider text-[#A37F55] hover:text-[#070E18] flex items-center gap-1.5 transition-colors"
            >
              <span>Explore Complete Service Catalog</span>
              <i className="fa-solid fa-arrow-right text-[10px]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Pillar 1: Ocean Freight */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-gray-500 mb-4 pb-3 border-b border-gray-100">
                  <span className="text-[#A37F55] font-bold">PILLAR 01 // MARITIME</span>
                  <span>FCL & LCL CONSOLIDATION</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950 mb-3 group-hover:text-[#A37F55] transition-colors">
                  Ocean Freight & Vessel Chartering
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Priority allocation on leading global shipping lines calling Jebel Ali Port, Port Khalid, and Khalifa Port. Handling dry standard containers, high cubes, flat racks, open tops, and refrigerated (reefer) cargo with complete bill of lading issuance.
                </p>
                <ul className="space-y-2 text-xs font-mono text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-[#A37F55]" />
                    <span>20&apos; GP / 40&apos; GP / 40&apos; HC / 45&apos; Pallet Wide Containers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-[#A37F55]" />
                    <span>LCL Groupage Consolidation with weekly deconsolidation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-[#A37F55]" />
                    <span>Vessel agency, port handling, and stevedoring supervision</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/services#ocean-freight"
                className="text-xs font-mono font-bold uppercase tracking-wider text-[#A37F55] hover:underline inline-flex items-center gap-1 mt-4"
              >
                Review Ocean Specs <i className="fa-solid fa-arrow-right text-[10px]" />
              </Link>
            </div>

            {/* Pillar 2: Air Cargo */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-gray-500 mb-4 pb-3 border-b border-gray-100">
                  <span className="text-[#A37F55] font-bold">PILLAR 02 // AVIATION</span>
                  <span>DXB & DWC HUBS</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950 mb-3 group-hover:text-[#A37F55] transition-colors">
                  Air Cargo Velocity & Charters
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  When transit velocity is paramount, our aviation desk coordinates scheduled freighter allocations and full/part charter flights via Dubai International (DXB) and Dubai World Central (DWC) to all primary global destinations.
                </p>
                <ul className="space-y-2 text-xs font-mono text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-[#A37F55]" />
                    <span>Next-Flight-Out (NFO) priority express booking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-[#A37F55]" />
                    <span>Temperature-controlled pharma & perishable logistics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-[#A37F55]" />
                    <span>IATA compliant packaging, dangerous goods (DGR) handling</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/services#air-cargo"
                className="text-xs font-mono font-bold uppercase tracking-wider text-[#A37F55] hover:underline inline-flex items-center gap-1 mt-4"
              >
                Review Air Specs <i className="fa-solid fa-arrow-right text-[10px]" />
              </Link>
            </div>

            {/* Pillar 3: UAE Customs Clearance */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-gray-500 mb-4 pb-3 border-b border-gray-100">
                  <span className="text-[#A37F55] font-bold">PILLAR 03 // COMPLIANCE</span>
                  <span>MIRSAL 2 CUSTOMS DESK</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950 mb-3 group-hover:text-[#A37F55] transition-colors">
                  UAE Customs Brokerage & Free Zone Entry
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  In-house licensed customs brokers directly connected to Dubai Customs Mirsal 2 and Sharjah Customs. Managing import for local consumption, transit declarations, free zone inward/outward transfers, and customs duty exemptions.
                </p>
                <ul className="space-y-2 text-xs font-mono text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-[#A37F55]" />
                    <span>Fast electronic customs declaration & VCC issuance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-[#A37F55]" />
                    <span>MOIAT industrial duty exemption clearance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-[#A37F55]" />
                    <span>Food inspection, ESMA, and TDRA regulatory coordination</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/services#customs-clearance"
                className="text-xs font-mono font-bold uppercase tracking-wider text-[#A37F55] hover:underline inline-flex items-center gap-1 mt-4"
              >
                Review Customs Specs <i className="fa-solid fa-arrow-right text-[10px]" />
              </Link>
            </div>

            {/* Pillar 4: Project Cargo & Heavy Lift */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-gray-500 mb-4 pb-3 border-b border-gray-100">
                  <span className="text-[#A37F55] font-bold">PILLAR 04 // ENGINEERING</span>
                  <span>OUT-OF-GAUGE & BREAKBULK</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950 mb-3 group-hover:text-[#A37F55] transition-colors">
                  Project Cargo & Heavy Lift Operations
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Specialized logistics engineering for oversized industrial components, oilfield equipment, manufacturing plant relocations, and superyachts. Comprehensive route surveys, police escorts, and mobile crane loading.
                </p>
                <ul className="space-y-2 text-xs font-mono text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-[#A37F55]" />
                    <span>Flat rack, open top, and roll-on/roll-off (RoRo) transport</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-[#A37F55]" />
                    <span>Route feasibility studies, bridge load calculations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-[#A37F55]" />
                    <span>On-site marine surveyor and rigging supervision</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/services#breakbulk-project"
                className="text-xs font-mono font-bold uppercase tracking-wider text-[#A37F55] hover:underline inline-flex items-center gap-1 mt-4"
              >
                Review Project Specs <i className="fa-solid fa-arrow-right text-[10px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. UAE CUSTOMS DUTY & REGULATORY GUIDE */}
      <section id="customs-guide" className="py-20 lg:py-28 bg-[#04080F] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="editorial-stamp text-[#C5A47E] mb-3 inline-block">
              REGULATORY TRADE INTELLIGENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              UAE Customs Tariff & Document Clearance Guide
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-sans leading-relaxed">
              Understand exact duty percentages, 5% UAE VAT obligations, and documentary requirements before your cargo berths at UAE ports.
            </p>
          </div>

          <CustomsDutyGuide />
        </div>
      </section>

      {/* 6. INCOTERMS 2020 RISK MATRIX */}
      <section id="incoterms" className="py-20 lg:py-28 bg-[#070E18] border-t border-[#C5A47E]/20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="editorial-stamp text-[#C5A47E] mb-3 inline-block">
              COMMERCIAL CONTRACT STANDARD
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Incoterms® 2020 Buyer & Seller Responsibility
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-sans leading-relaxed">
              Verify freight payment boundaries, marine insurance coverage, and risk transfer points for your international supplier agreements.
            </p>
          </div>

          <IncotermsMatrix />
        </div>
      </section>

      {/* 7. THE DUBAI ADVANTAGE & STRATEGIC GATEWAY */}
      <section className="py-20 lg:py-28 bg-[#FBF9F5] text-slate-900 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="editorial-stamp text-[#A37F55] border-[#A37F55]">
                STRATEGIC GEOGRAPHIC VANTAGE
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 leading-tight">
                Operating at the Crossroads of East & West
              </h2>
              <p className="text-slate-700 leading-relaxed font-sans text-base">
                Headquartered in Dubai with operational presence at Jebel Ali Port (the largest marine terminal in the Middle East) and Port Khalid Sharjah, Swift Sail Shipping connects 2.4 billion consumers across the GCC, Africa, Indian Subcontinent, and Europe.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-200 text-xs font-mono">
                <div className="space-y-1">
                  <strong className="text-slate-950 text-sm block">Jebel Ali Port (DP World)</strong>
                  <p className="text-slate-600">Immediate access to 150+ direct shipping line connections</p>
                </div>
                <div className="space-y-1">
                  <strong className="text-slate-950 text-sm block">Dubai World Central (DWC)</strong>
                  <p className="text-slate-600">Seamless Sea-Air multi-modal corridor integration</p>
                </div>
                <div className="space-y-1">
                  <strong className="text-slate-950 text-sm block">Sharjah Port Khalid</strong>
                  <p className="text-slate-600">Specialized bulk, breakbulk & re-export gateways</p>
                </div>
                <div className="space-y-1">
                  <strong className="text-slate-950 text-sm block">Free Zone Bonded Storage</strong>
                  <p className="text-slate-600">Duty-free transit storage and value-added sorting</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="btn-editorial-gold px-7 py-3.5 rounded text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>Explore Company Heritage</span>
                  <i className="fa-solid fa-arrow-right text-[10px]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-lg overflow-hidden border border-gray-300 shadow-2xl relative">
                <img
                  src="/assets/img/dubai_skyline_containers_1776336296901.png"
                  alt="Dubai Maritime City and Container Port"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white text-xs font-mono">
                  <span className="text-[#C5A47E] font-bold block">SOVEREIGN UAE GATEWAY:</span>
                  <span>DUBAI MARITIME CITY & JEBEL ALI FREE ZONE (JAFZA)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DIRECT DISPATCH & QUOTE CTA */}
      <section className="py-20 lg:py-24 bg-[#04080F] text-white border-t border-[#C5A47E]/30 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <span className="editorial-stamp text-[#C5A47E]">
            DIRECT LOGISTICS CONSULTATION
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
            Ready to Move Your Consignment?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Connect with an authorized Swift Sail cargo officer today. We provide transparent freight quotations, customs classification, and dedicated route coordination.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/get-quote"
              className="w-full sm:w-auto btn-editorial-gold px-8 py-4 rounded text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2"
            >
              <span>Submit Request for Quotation</span>
              <i className="fa-solid fa-arrow-right text-[11px]" />
            </Link>

            <a
              href="https://wa.me/971553424700"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider px-8 py-4 rounded transition-colors inline-flex items-center justify-center gap-2"
            >
              <i className="fa-brands fa-whatsapp text-lg" />
              <span>Instant WhatsApp Desk</span>
            </a>

            <a
              href="tel:+971553424700"
              className="w-full sm:w-auto bg-[#112236] hover:bg-[#1A3350] border border-gray-700 text-white font-mono text-xs uppercase tracking-wider px-6 py-4 rounded transition-colors inline-flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-phone text-[#C5A47E]" />
              <span>+971 55 342 4700</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
