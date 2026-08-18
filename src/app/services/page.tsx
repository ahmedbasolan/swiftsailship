import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Freight Solutions | Swift Sail Shipping L.L.C.",
  description:
    "Comprehensive maritime freight forwarding, ocean container charters, aviation express velocity, UAE customs brokerage (Mirsal 2), and project cargo handling.",
  alternates: {
    canonical: "https://www.swiftsailship.com/services",
  },
  openGraph: {
    type: "website",
    title: "Services & Freight Solutions | Swift Sail Shipping L.L.C.",
    description:
      "Comprehensive maritime freight forwarding, ocean container charters, aviation express velocity, UAE customs brokerage (Mirsal 2), and project cargo handling.",
    url: "https://www.swiftsailship.com/services",
    images: ["/assets/img/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Freight Solutions | Swift Sail Shipping L.L.C.",
    description:
      "Comprehensive maritime freight forwarding, ocean container charters, aviation express velocity, UAE customs brokerage (Mirsal 2), and project cargo handling.",
    images: ["/assets/img/og-default.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-[#FBF9F5]">
      {/* Editorial Header */}
      <header className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#070E18] text-white border-b border-[#C5A47E]/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="editorial-stamp text-[#C5A47E]">
              SERVICE DOSSIER • VOLUME XXIV
            </span>
            <span className="text-xs font-mono text-gray-400">
              CORE FREIGHT SPECIALIZATIONS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight mb-6">
            Logistics Capabilities & <br />
            <span className="gold-gradient-text">Trade Infrastructure</span>
          </h1>

          <p className="text-lg text-gray-300 font-sans font-light max-w-3xl leading-relaxed">
            From single-pallet LCL consolidation to full vessel chartering and complex UAE customs clearance, our specialized desks deliver uncompromised precision across global trade lanes.
          </p>
        </div>
      </header>

      {/* Services Detailed Editorial Catalog */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 space-y-24">
        {/* Service 1: Ocean Freight */}
        <section id="ocean-freight" className="scroll-mt-28">
          <div className="bg-white border border-gray-300 rounded-lg p-8 sm:p-12 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200 mb-8">
              <span className="text-xs font-mono font-bold text-[#A37F55] uppercase tracking-wider">
                01 // MARITIME LOGISTICS
              </span>
              <span className="editorial-stamp text-gray-600 text-[10px]">
                FCL • LCL • VESSEL CHARTER
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl font-serif font-bold text-slate-950">
                  Ocean Freight & Container Shipping
                </h2>
                <p className="text-slate-700 leading-relaxed font-sans text-sm sm:text-base">
                  Operating with direct carrier contracts across major global alliances, Swift Sail provides guaranteed equipment availability and space allocation through Dubai’s Jebel Ali Port, Port Khalid Sharjah, and Khalifa Port Abu Dhabi.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 bg-[#FBF9F5] rounded border border-gray-200">
                    <strong className="text-slate-950 block mb-1">Full Container Load (FCL)</strong>
                    <p className="text-slate-600">20&apos; GP, 40&apos; GP, 40&apos; High Cube, Flat Racks & Open Top containers with carrier seal integrity.</p>
                  </div>
                  <div className="p-4 bg-[#FBF9F5] rounded border border-gray-200">
                    <strong className="text-slate-950 block mb-1">LCL Consolidation</strong>
                    <p className="text-slate-600">Cost-effective groupage consolidation for smaller shipments with weekly scheduled CFS de-stuffing.</p>
                  </div>
                  <div className="p-4 bg-[#FBF9F5] rounded border border-gray-200">
                    <strong className="text-slate-950 block mb-1">Reefer Temperature Control</strong>
                    <p className="text-slate-600">Precision refrigerated containers for perishables, dairy, pharmaceuticals, and sensitive chemicals.</p>
                  </div>
                  <div className="p-4 bg-[#FBF9F5] rounded border border-gray-200">
                    <strong className="text-slate-950 block mb-1">Vessel Husbandry & Agency</strong>
                    <p className="text-slate-600">Complete port agency services, bunkering coordination, stevedoring, and marine documentation.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between bg-[#070E18] text-white p-8 rounded-lg border border-[#C5A47E]/30">
                <div>
                  <span className="text-xs font-mono text-[#C5A47E] uppercase block mb-2">
                    Key Maritime Hubs:
                  </span>
                  <ul className="space-y-2 text-xs font-mono text-gray-300 mb-6">
                    <li>• Jebel Ali Port (AEJEA) — Gate of the Middle East</li>
                    <li>• Port Khalid Sharjah (AESHJ) — Breakbulk & GCC Shuttles</li>
                    <li>• Port of Rotterdam (NLRTM) — European Gateway</li>
                    <li>• Port of Singapore (SGSIN) — Southeast Asian Hub</li>
                    <li>• Shanghai Port (CNSHA) — East Asia Manufacturing</li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <Link
                    href="/get-quote?service=ocean-freight"
                    className="w-full btn-editorial-gold text-center py-3 rounded text-xs font-bold uppercase tracking-wider block"
                  >
                    Request Ocean Freight Rate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Air Cargo Velocity */}
        <section id="air-cargo" className="scroll-mt-28">
          <div className="bg-white border border-gray-300 rounded-lg p-8 sm:p-12 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200 mb-8">
              <span className="text-xs font-mono font-bold text-[#A37F55] uppercase tracking-wider">
                02 // AVIATION LOGISTICS
              </span>
              <span className="editorial-stamp text-gray-600 text-[10px]">
                IATA • SCHEDULED FREIGHT • CHARTER
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl font-serif font-bold text-slate-950">
                  Air Cargo Velocity & Charters
                </h2>
                <p className="text-slate-700 leading-relaxed font-sans text-sm sm:text-base">
                  Leveraging Dubai International Airport (DXB) and Al Maktoum International Airport (DWC) as primary global transshipment super-hubs, our air desk guarantees speed, security, and real-time flight tracking for high-value and time-critical consignments.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 bg-[#FBF9F5] rounded border border-gray-200">
                    <strong className="text-slate-950 block mb-1">Priority Express Air (NFO)</strong>
                    <p className="text-slate-600">Next-Flight-Out dispatch with minimal dwell time for emergency parts and critical documents.</p>
                  </div>
                  <div className="p-4 bg-[#FBF9F5] rounded border border-gray-200">
                    <strong className="text-slate-950 block mb-1">Standard Consolidated Air</strong>
                    <p className="text-slate-600">Balanced cost and transit efficiency with weekly consolidations to major world capitals.</p>
                  </div>
                  <div className="p-4 bg-[#FBF9F5] rounded border border-gray-200">
                    <strong className="text-slate-950 block mb-1">Full & Part Aircraft Charters</strong>
                    <p className="text-slate-600">Dedicated B747, B777, and AN-124 charters for outsized machinery and humanitarian missions.</p>
                  </div>
                  <div className="p-4 bg-[#FBF9F5] rounded border border-gray-200">
                    <strong className="text-slate-950 block mb-1">Dangerous Goods (DGR)</strong>
                    <p className="text-slate-600">IATA certified packing, UN certified fiberboard drums, and complete shipper DGD certification.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between bg-[#070E18] text-white p-8 rounded-lg border border-[#C5A47E]/30">
                <div>
                  <span className="text-xs font-mono text-[#C5A47E] uppercase block mb-2">
                    Aviation Capabilities:
                  </span>
                  <ul className="space-y-2 text-xs font-mono text-gray-300 mb-6">
                    <li>• Direct tarmac transfer and customs transit</li>
                    <li>• ULD Building (PMC, PAG, LD3 containers)</li>
                    <li>• Temperature-controlled active cool containers (Envirotainer)</li>
                    <li>• Valuables & bullion vault security handling</li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <Link
                    href="/get-quote?service=air-freight"
                    className="w-full btn-editorial-gold text-center py-3 rounded text-xs font-bold uppercase tracking-wider block"
                  >
                    Request Air Cargo Rate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: Customs Clearance */}
        <section id="customs-clearance" className="scroll-mt-28">
          <div className="bg-white border border-gray-300 rounded-lg p-8 sm:p-12 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200 mb-8">
              <span className="text-xs font-mono font-bold text-[#A37F55] uppercase tracking-wider">
                03 // REGULATORY BROKERAGE
              </span>
              <span className="editorial-stamp text-gray-600 text-[10px]">
                MIRSAL 2 • DUBAI CUSTOMS LICENSED
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl font-serif font-bold text-slate-950">
                  UAE Customs Clearance & Brokerage
                </h2>
                <p className="text-slate-700 leading-relaxed font-sans text-sm sm:text-base">
                  Avoid costly port demurrage and customs fines. Swift Sail’s licensed brokerage team operates on-site across Dubai, Sharjah, and Abu Dhabi ports with direct Mirsal 2 digital integration.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 bg-[#FBF9F5] rounded border border-gray-200">
                    <strong className="text-slate-950 block mb-1">Import for Local Market</strong>
                    <p className="text-slate-600">Standard 5% duty assessment, 5% UAE VAT declaration, and swift Gate Pass release.</p>
                  </div>
                  <div className="p-4 bg-[#FBF9F5] rounded border border-gray-200">
                    <strong className="text-slate-950 block mb-1">Free Zone Transit & Transfers</strong>
                    <p className="text-slate-600">JAFZA, DAFZA, HFZA, and KIZAD transit bills with customs deposit management.</p>
                  </div>
                  <div className="p-4 bg-[#FBF9F5] rounded border border-gray-200">
                    <strong className="text-slate-950 block mb-1">Regulatory Approvals</strong>
                    <p className="text-slate-600">Dubai Municipality (Food/Cosmetics), TDRA (Telecoms), and MOIAT (Industrial exemptions).</p>
                  </div>
                  <div className="p-4 bg-[#FBF9F5] rounded border border-gray-200">
                    <strong className="text-slate-950 block mb-1">Vehicle Clearance Certificates</strong>
                    <p className="text-slate-600">Instant VCC generation for imported automobiles, trucks, and specialized equipment.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between bg-[#070E18] text-white p-8 rounded-lg border border-[#C5A47E]/30">
                <div>
                  <span className="text-xs font-mono text-[#C5A47E] uppercase block mb-2">
                    Customs Clearance Guarantee:
                  </span>
                  <ul className="space-y-2 text-xs font-mono text-gray-300 mb-6">
                    <li>• Rapid pre-clearance prior to vessel berthing</li>
                    <li>• Accurate HS code classification to prevent penalties</li>
                    <li>• Duty waiver processing under GCC Unified Economic Agreement</li>
                    <li>• Dedicated physical inspection accompaniment</li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <Link
                    href="/get-quote?service=customs-clearance"
                    className="w-full btn-editorial-gold text-center py-3 rounded text-xs font-bold uppercase tracking-wider block"
                  >
                    Inquire for Customs Clearance
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 4: Project Cargo & Heavy Lift */}
        <section id="breakbulk-project" className="scroll-mt-28">
          <div className="bg-white border border-gray-300 rounded-lg p-8 sm:p-12 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200 mb-8">
              <span className="text-xs font-mono font-bold text-[#A37F55] uppercase tracking-wider">
                04 // INDUSTRIAL ENGINEERING
              </span>
              <span className="editorial-stamp text-gray-600 text-[10px]">
                OUT-OF-GAUGE • HEAVY LIFT • OIL & GAS
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl font-serif font-bold text-slate-950">
                  Project Cargo & Heavy Lift Transport
                </h2>
                <p className="text-slate-700 leading-relaxed font-sans text-sm sm:text-base">
                  When cargo exceeds standard container envelopes, our specialized logistics engineers execute custom multi-modal transport plans. We handle complex oilfield drilling rigs, transformers, industrial kilns, and luxury yachts.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 bg-[#FBF9F5] rounded border border-gray-200">
                    <strong className="text-slate-950 block mb-1">Route & Bridge Feasibility</strong>
                    <p className="text-slate-600">Detailed route surveys, overhead obstacle clearances, and UAE Ministry road permits.</p>
                  </div>
                  <div className="p-4 bg-[#FBF9F5] rounded border border-gray-200">
                    <strong className="text-slate-950 block mb-1">Multi-Axle Hydraulic Trailers</strong>
                    <p className="text-slate-600">Heavy haulage modular transporters (SPMT) capable of handling 500+ tonne payloads.</p>
                  </div>
                  <div className="p-4 bg-[#FBF9F5] rounded border border-gray-200">
                    <strong className="text-slate-950 block mb-1">Lashing & Marine Survey</strong>
                    <p className="text-slate-600">Certified marine warranty surveyors, lashing calculation reports, and lifting plans.</p>
                  </div>
                  <div className="p-4 bg-[#FBF9F5] rounded border border-gray-200">
                    <strong className="text-slate-950 block mb-1">Port Crane & Barge Operations</strong>
                    <p className="text-slate-600">Tandem mobile crane lifts and coastal barge transfers across UAE maritime facilities.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between bg-[#070E18] text-white p-8 rounded-lg border border-[#C5A47E]/30">
                <div>
                  <span className="text-xs font-mono text-[#C5A47E] uppercase block mb-2">
                    Key Project Sectors:
                  </span>
                  <ul className="space-y-2 text-xs font-mono text-gray-300 mb-6">
                    <li>• Oil & Gas Drilling and Refinery Infrastructure</li>
                    <li>• Power Generation, Turbines & Transformers</li>
                    <li>• Renewable Energy & Wind Blade Transport</li>
                    <li>• Marine Craft & Commercial Tug Towage</li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <Link
                    href="/get-quote?service=project-cargo"
                    className="w-full btn-editorial-gold text-center py-3 rounded text-xs font-bold uppercase tracking-wider block"
                  >
                    Consult Project Logistics Desk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pt-8" id="faq">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="editorial-stamp text-[#A37F55] border-[#A37F55] mb-2 inline-block">
              SERVICE FREQUENTLY ASKED
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              Freight Services, Explained
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h3 className="font-serif font-bold text-slate-950 text-lg mb-2">
                What is the difference between FCL and LCL sea freight?
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                FCL (Full Container Load) means your cargo occupies an entire container — 20&apos; GP, 40&apos; GP, or 40&apos; HC — with dedicated space and faster port handling. LCL (Less than Container Load) consolidates your goods with other shippers in a shared container, ideal for smaller volumes under roughly 15 CBM where you pay only for the space you use.
              </p>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h3 className="font-serif font-bold text-slate-950 text-lg mb-2">
                Do you handle air freight from Dubai and Sharjah?
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Yes. Our aviation desk coordinates scheduled freighter allocations and full or part charter flights via Dubai International (DXB) and Dubai World Central (DWC), including Next-Flight-Out priority booking, temperature-controlled pharma, and IATA dangerous goods handling.
              </p>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h3 className="font-serif font-bold text-slate-950 text-lg mb-2">
                Can you clear customs and manage free zone transfers?
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Yes. In-house licensed brokers file directly through Dubai Customs Mirsal 2, covering import-for-consumption declarations, transit filings, free zone inward and outward transfers, and MOIAT industrial duty exemptions for qualifying manufacturers.
              </p>
            </div>
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h3 className="font-serif font-bold text-slate-950 text-lg mb-2">
                What containers do you offer for project and breakbulk cargo?
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                For out-of-gauge and heavy-lift consignments we arrange flat rack and open top containers, roll-on/roll-off (RoRo) transport, multi-axle hydraulic trailers (SPMT) for 500+ tonne payloads, and tandem mobile crane lifts across UAE maritime facilities.
              </p>
            </div>
          </div>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the difference between FCL and LCL sea freight?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FCL (Full Container Load) means your cargo occupies an entire container — 20' GP, 40' GP, or 40' HC — with dedicated space and faster port handling. LCL (Less than Container Load) consolidates your goods with other shippers in a shared container, ideal for smaller volumes under roughly 15 CBM where you pay only for the space you use."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle air freight from Dubai and Sharjah?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Our aviation desk coordinates scheduled freighter allocations and full or part charter flights via Dubai International (DXB) and Dubai World Central (DWC), including Next-Flight-Out priority booking, temperature-controlled pharma, and IATA dangerous goods handling."
                }
              },
              {
                "@type": "Question",
                "name": "Can you clear customs and manage free zone transfers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. In-house licensed brokers file directly through Dubai Customs Mirsal 2, covering import-for-consumption declarations, transit filings, free zone inward and outward transfers, and MOIAT industrial duty exemptions for qualifying manufacturers."
                }
              },
              {
                "@type": "Question",
                "name": "What containers do you offer for project and breakbulk cargo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For out-of-gauge and heavy-lift consignments we arrange flat rack and open top containers, roll-on/roll-off (RoRo) transport, multi-axle hydraulic trailers (SPMT) for 500+ tonne payloads, and tandem mobile crane lifts across UAE maritime facilities."
                }
              }
            ]
          })
        }}
      />

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
                "name": "Services & Freight Solutions",
                "item": "https://www.swiftsailship.com/services"
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Freight Forwarding, Customs Brokerage & Logistics",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Swift Sail Shipping L.L.C.",
              "url": "https://www.swiftsailship.com",
              "telephone": "+971553424700",
              "email": "info@swiftsailship.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Tanvi Business Centre, M - 101, Abu Hail",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              }
            },
            "areaServed": ["AE", "GCC", "Middle East", "Africa", "Indian Subcontinent", "Europe"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Swift Sail Shipping Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ocean Freight & Vessel Chartering",
                    "description": "FCL/LCL consolidation, reefer, flat rack, open top containers calling Jebel Ali, Port Khalid, and Khalifa Port."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Air Cargo Velocity & Charters",
                    "description": "Next-Flight-Out express booking, temperature-controlled pharma logistics, and IATA dangerous goods handling via DXB and DWC."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UAE Customs Brokerage & Free Zone Entry",
                    "description": "Mirsal 2 electronic declarations, MOIAT industrial duty exemptions, and free zone inward/outward transfers."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Project Cargo & Heavy Lift Operations",
                    "description": "Out-of-gauge and breakbulk transport, route surveys, police escorts, and mobile crane loading."
                  }
                }
              ]
            }
          })
        }}
      />
    </div>
  );
}
