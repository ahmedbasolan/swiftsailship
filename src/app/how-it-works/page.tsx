import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works  The Freight Lifecycle | Swift Sail Shipping L.L.C.",
  description:
    "Explore the rigorous 6-stage international freight forwarding process managed by Swift Sail Shipping - from cargo engineering and booking to UAE customs clearance and final consignee handover.",
  alternates: {
    canonical: "https://www.swiftsailship.com/how-it-works",
  },
  openGraph: {
    type: "website",
    title: "How It Works  The Freight Lifecycle | Swift Sail Shipping L.L.C.",
    description:
      "Explore the rigorous 6-stage international freight forwarding process managed by Swift Sail Shipping - from cargo engineering and booking to UAE customs clearance and final consignee handover.",
    url: "https://www.swiftsailship.com/how-it-works",
    images: ["/assets/img/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works  The Freight Lifecycle | Swift Sail Shipping L.L.C.",
    description:
      "Explore the rigorous 6-stage international freight forwarding process managed by Swift Sail Shipping - from cargo engineering and booking to UAE customs clearance and final consignee handover.",
    images: ["/assets/img/og-default.jpg"],
  },
};

const stages = [
  {
    number: "01",
    phase: "PHASE I: INITIATION & ROUTE ENGINEERING",
    title: "Consignment Analysis & Rate Structure",
    summary:
      "We review your cargo specifications (weight, volume, HS classification, hazardous class) and match them with optimal carrier loops and transit windows.",
    details: [
      "Volumetric CBM calculation & container stuffing optimization",
      "Route feasibility comparison (Sea FCL/LCL vs. Air Express)",
      "Incoterms® 2020 alignment (FOB, CIF, EXW, DDP)",
      "Transparent itemized commercial freight quotation",
    ],
  },
  {
    number: "02",
    phase: "PHASE II: BOOKING & CARRIER ALLOCATION",
    title: "Space Confirmation & Equipment Release",
    summary:
      "Securing priority vessel slot allocation with global shipping lines or airline freight charters.",
    details: [
      "Container Release Order (CRO) generation",
      "Empty container pickup from port depot",
      "Factory or warehouse stuffing supervision",
      "VGM (Verified Gross Mass) SOLAS compliance certification",
    ],
  },
  {
    number: "03",
    phase: "PHASE III: EXPORT DOCUMENTATION",
    title: "Regulatory Export Formalities",
    summary:
      "Precision preparation of all statutory export documents to ensure unhindered border crossings.",
    details: [
      "Export declaration filing with origin customs authorities",
      "Original Bill of Lading (B/L) or Master Air Waybill (MAWB) draft issuance",
      "Certificate of Origin (COO) Chamber of Commerce attestation",
      "Commercial Invoice and packing list notarization",
    ],
  },
  {
    number: "04",
    phase: "PHASE IV: TRANSIT & ACTIVE VOYAGE MONITORING",
    title: "Sea & Air Transit Execution",
    summary:
      "Continuous tracking throughout international waters or flight paths with 24/7 client telemetry updates.",
    details: [
      "Carrier milestone tracking (Origin Departure → Transshipment → ETA)",
      "Reefer temperature sensor monitoring for perishables",
      "Early arrival notices (NOA) sent to consignee",
      "Pre-clearance documentation dispatched to UAE customs broker",
    ],
  },
  {
    number: "05",
    phase: "PHASE V: UAE PORT CUSTOMS CLEARANCE",
    title: "Mirsal 2 Customs Declaration & Inspection",
    summary:
      "Immediate processing upon arrival at Jebel Ali Port, Port Khalid, or DXB Air Cargo Terminal.",
    details: [
      "Digital submission on Dubai Customs Mirsal 2 portal",
      "Duty assessment (5%) and 5% UAE VAT settlement",
      "Dubai Municipality Food Safety or TDRA inspection liaison",
      "Electronic Customs Gate Pass & VCC generation",
    ],
  },
  {
    number: "06",
    phase: "PHASE VI: TERMINAL RELEASE & LAST-MILE DELIVERY",
    title: "Consignee Handover & Final Proof of Delivery",
    summary:
      "Direct container haulage or palletized last-mile distribution across all UAE Emirates and GCC destinations.",
    details: [
      "Port delivery order (D/O) collection & terminal handling charges (THC) settlement",
      "Heavy-duty lowbed or curtain-side truck transport to client warehouse",
      "Unloading supervision and container de-stuffing",
      "Signed Proof of Delivery (POD) and commercial file archiving",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col bg-[#FBF9F5]">
      {/* Hero Header */}
      <header className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#070E18] text-white border-b border-[#C5A47E]/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="editorial-stamp text-[#C5A47E]">
              OPERATIONAL BLUEPRINT • REVISION 2026
            </span>
            <span className="text-xs font-mono text-gray-400">
              END-TO-END FREIGHT EXECUTION
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight mb-6">
            The Freight Lifecycle: <br />
            <span className="gold-gradient-text">6 Stages of Precision</span>
          </h1>

          <p className="text-lg text-gray-300 font-sans font-light max-w-3xl leading-relaxed">
            From initial cargo volumetric engineering to final UAE customs Gate Pass release, every single step is managed by dedicated logistics specialists.
          </p>
        </div>
      </header>

      {/* Main 6-Stage Visual Workflow */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="space-y-12">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className="bg-white border border-gray-300 rounded-lg p-8 sm:p-12 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                {/* Stage Badge & Header */}
                <div className="lg:w-1/3">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl sm:text-5xl font-serif font-bold text-[#A37F55]">
                      {stage.number}
                    </span>
                    <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest block">
                      {stage.phase}
                    </span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-slate-950 mt-2">
                    {stage.title}
                  </h2>
                </div>

                {/* Summary & Specific Operations */}
                <div className="lg:w-2/3 space-y-4">
                  <p className="text-slate-700 font-sans text-sm sm:text-base leading-relaxed">
                    {stage.summary}
                  </p>

                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-xs font-mono text-[#A37F55] uppercase tracking-wider block mb-2">
                      Key Deliverables & Protocols:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-700">
                      {stage.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <i className="fa-solid fa-check text-emerald-600 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-20 p-8 sm:p-12 bg-[#070E18] text-white rounded-lg border border-[#C5A47E]/30 text-center space-y-6">
          <span className="editorial-stamp text-[#C5A47E]">
            READY TO COMMENCE YOUR SHIPMENT?
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Partner with Swift Sail for Flawless Execution
          </h3>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Our operations team is available around the clock to calculate rates, review export paperwork, and manage customs clearance.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/get-quote"
              className="btn-editorial-gold px-8 py-3.5 rounded text-xs font-bold uppercase tracking-wider"
            >
              Get Your Custom Shipping Plan
            </Link>
            <a
              href="https://wa.me/971553424700"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold px-6 py-3.5 rounded uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <i className="fa-brands fa-whatsapp text-base" />
              <span>WhatsApp Operations</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
