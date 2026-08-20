import Link from "next/link";
import { Metadata } from "next";
import { ShimmerButton } from "@/components/ui/shimmer-button";

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
    <div className="flex flex-col bg-[#FBF9F5] dark:bg-[#070E18]">
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
        <section className="bg-white dark:bg-[#0D1B2A] border border-gray-300 dark:border-[#C5A47E]/20 rounded-lg p-8 sm:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="editorial-stamp text-[#A37F55] border-[#A37F55]">
                HISTORICAL VANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 dark:text-white">
                Architects of Resilient Gulf Trade Flows
              </h2>
              <p className="text-slate-700 dark:text-gray-300 leading-relaxed font-sans text-base broadsheet-dropcap">
                Swift Sail Shipping L.L.C. was established with an uncompromising mandate: to eliminate the friction, opacity, and regulatory delays that so often impede international commerce in the Middle East. Over more than 15 years of operational excellence, our teams have anchored supply chains connecting major manufacturers in Asia and Europe with rapidly growing markets across the GCC and East Africa.
              </p>
              <p className="text-slate-700 leading-relaxed font-sans text-sm sm:text-base">
                Operating with direct electronic access to Dubai Customs’ Mirsal 2 system and maintaining active terminal operations at Jebel Ali Port, Port Khalid Sharjah, and Dubai World Central, we provide our enterprise clients with immediate priority clearance and unhindered onward delivery.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-gray-300 dark:border-[#C5A47E]/20 shadow-xl relative">
                <img
                  src="/assets/img/office_image_1776261439512.webp"
                  alt="Swift Sail Shipping Executive Logistics Desk"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-[#070E18] dark:bg-[#04080F] text-white text-xs font-mono">
                  <span className="text-[#C5A47E] font-bold block">DUBAI OPERATIONS COMMAND:</span>
                  <span>Tanvi Business Centre, Abu Hail, Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Heritage, Network & Expertise */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="editorial-stamp text-[#A37F55] border-[#A37F55] mb-2 inline-block">
              OPERATIONAL FOOTPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              A Network Built Around the UAE&apos;s Sovereign Gateways
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-[#0D1B2A] border border-gray-300 dark:border-[#C5A47E]/20 rounded-lg p-8 sm:p-10 shadow-sm">
              <span className="editorial-stamp text-[#A37F55] border-[#A37F55] mb-3 inline-block">
                NETWORK & INFRASTRUCTURE
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-950 dark:text-white mb-4">
                From a Single Desk in Abu Hail to 50+ Direct Port Corridors
              </h3>
              <p className="text-slate-700 dark:text-gray-300 leading-relaxed font-sans text-sm sm:text-base mb-4">
                Swift Sail Shipping was founded in Abu Hail, Dubai as a specialist customs brokerage and freight coordination desk. From that single operating office, we grew into a full-service freight forwarder with active terminal operations at Jebel Ali Port — the largest marine terminal in the Middle East — as well as Port Khalid Sharjah and Khalifa Port, and air cargo hubs at Dubai International (DXB) and Dubai World Central (DWC).
              </p>
              <p className="text-slate-700 dark:text-gray-300 leading-relaxed font-sans text-sm sm:text-base mb-4">
                Our agent and partner network spans 50+ direct sovereign port corridors across Asia, the Indian Subcontinent, Africa, and Europe. Every corridor is supported by vetted overseas co-loaders and destination agents, so consignments retain a single accountable operator from origin stuffing to final consignee handover — never a hand-off to an unknown third party mid-transit.
              </p>
              <p className="text-slate-700 leading-relaxed font-sans text-sm sm:text-base">
                For UAE importers and re-exporters, this footprint translates directly into practical advantages: bonded warehousing options in Jebel Ali Free Zone (JAFZA) and Dubai South, automated Sea-Air transfers through DWC for schedule recovery, and a 24/7 port clearance desk that files Mirsal 2 declarations the same day a vessel berths.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0D1B2A] border border-gray-300 dark:border-[#C5A47E]/20 rounded-lg p-8 sm:p-10 shadow-sm">
              <span className="editorial-stamp text-[#A37F55] border-[#A37F55] mb-3 inline-block">
                LEADERSHIP & EXPERTISE
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-950 dark:text-white mb-4">
                Practitioners, Not Intermediaries
              </h3>
              <p className="text-slate-700 dark:text-gray-300 leading-relaxed font-sans text-sm sm:text-base mb-4">
                Our operations are led by licensed customs brokers, marine surveyors, and logistics engineers who have spent their careers at UAE terminals — not by sales desks. Team leadership holds direct certifications in UAE customs brokerage under Mirsal 2, IATA dangerous goods (DGR) handling, SOLAS Verified Gross Mass (VGM) compliance, and project cargo route engineering.
              </p>
              <p className="text-slate-700 dark:text-gray-300 leading-relaxed font-sans text-sm sm:text-base mb-4">
                This hands-on pedigree is the reason our trade intelligence desk publishes operational guidance — on Red Sea routing, MOIAT industrial duty exemptions, and Incoterms risk allocation — rather than generic marketing. Every dispatch is written by the same officers who execute the clearances and book the vessels.
              </p>
              <p className="text-slate-700 leading-relaxed font-sans text-sm sm:text-base">
                Because we operate our own brokerage licenses and maintain direct carrier allocations, clients receive transparent, itemized economics: ocean or air carriage, terminal handling, customs brokerage, and local delivery, each priced separately and none buried in a bundled margin.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0D1B2A] border border-gray-300 dark:border-[#C5A47E]/20 rounded-lg p-8 sm:p-10 shadow-sm">
              <span className="editorial-stamp text-[#A37F55] border-[#A37F55] mb-3 inline-block">
                INDUSTRY PROTOCOLS
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-950 mb-4">
                Compliance-First Operating Standards
              </h3>
              <p className="text-slate-700 leading-relaxed font-sans text-sm sm:text-base mb-4">
                Freight in the UAE is governed by a dense regulatory environment: Dubai Customs Mirsal 2 electronic declarations, ESMA and food-safety inspections, TDRA approvals, MOIAT industrial exemptions, and DP World terminal rules. Our standard operating procedures encode each of these requirements so documentation is prepared before cargo arrives — eliminating the holds, fines, and demurrage that arise from reactive compliance.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-gray-300 font-sans text-sm">
                <li>Pre-arrival document vetting: Bills of Lading, Certificates of Origin, commercial invoices, HS classification</li>
                <li>Mirsal 2 declarations lodged on the day of berthing, with VCC issuance for priority gate release</li>
                <li>MOIAT industrial duty exemption management for qualifying manufacturers</li>
                <li>IATA-compliant packaging and dangerous goods (DGR) coordination</li>
                <li>SOLAS VGM certification and container stuffing supervision</li>
              </ul>
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
            <div className="bg-white dark:bg-[#0D1B2A] border border-gray-300 dark:border-[#C5A47E]/20 rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#070E18] dark:bg-[#C5A47E]/20 rounded text-[#C5A47E] flex items-center justify-center text-xl mb-6 font-mono font-bold">
                01
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-950 dark:text-white mb-3">
                Absolute Documentation Rigor
              </h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm font-sans leading-relaxed">
                In logistics, paperwork accuracy is speed. We rigorously review Bills of Lading, Certificates of Origin, and commercial invoices before goods arrive to eliminate customs holds.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0D1B2A] border border-gray-300 dark:border-[#C5A47E]/20 rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#070E18] dark:bg-[#C5A47E]/20 rounded text-[#C5A47E] flex items-center justify-center text-xl mb-6 font-mono font-bold">
                02
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-950 dark:text-white mb-3">
                Transparent Itemized Economics
              </h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm font-sans leading-relaxed">
                No hidden destination surcharges or unexpected detention penalties. Every quote clearly specifies ocean/air carriage, terminal handling, customs brokerage, and local delivery.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0D1B2A] border border-gray-300 dark:border-[#C5A47E]/20 rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#070E18] dark:bg-[#C5A47E]/20 rounded text-[#C5A47E] flex items-center justify-center text-xl mb-6 font-mono font-bold">
                03
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-950 dark:text-white mb-3">
                Direct On-Ground Presence
              </h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm font-sans leading-relaxed">
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
          <Link href="/get-quote" className="inline-block">
            <ShimmerButton
              shimmerColor="#F5E6D3"
              background="linear-gradient(135deg, #C5A47E 0%, #A37F55 100%)"
              borderRadius="6px"
              className="px-8 py-4 text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              <span className="flex items-center gap-2 text-[#070E18]">
                <span>Consult Our Logistics Officers</span>
                <i className="fa-solid fa-arrow-right text-[10px]" />
              </span>
            </ShimmerButton>
          </Link>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.swiftsailship.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://www.swiftsailship.com/about"
              }
            ]
          })
        }}
      />
    </div>
  );
}
