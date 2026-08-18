import { Suspense } from "react";
import { Metadata } from "next";
import QuoteForm from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Request a Quotation • Logistics Desk | Swift Sail Shipping L.L.C.",
  description:
    "Request an itemized freight forwarding quotation for ocean FCL/LCL, air express velocity, UAE customs clearance, or project breakbulk cargo.",
  alternates: {
    canonical: "https://swiftsailship.com/get-quote",
  },
};

export default function GetQuotePage() {
  return (
    <div className="flex flex-col bg-[#FBF9F5]">
      {/* Editorial Header */}
      <header className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#070E18] text-white border-b border-[#C5A47E]/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="editorial-stamp text-[#C5A47E]">
              COMMERCIAL INTAKE • CARGO DESK
            </span>
            <span className="text-xs font-mono text-gray-400">
              DUBAI TIME GST (UTC+4)
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight mb-6">
            Commercial Quotation & <br />
            <span className="gold-gradient-text">Consignment Inquiries</span>
          </h1>

          <p className="text-lg text-gray-300 font-sans font-light max-w-3xl leading-relaxed">
            Provide your route details and cargo specifications below. Our certified freight specialists analyze vessel availability and provide guaranteed rates within two business hours.
          </p>
        </div>
      </header>

      {/* Main Intake Form & Operational Info */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-8 bg-[#070E18] text-white border border-[#C5A47E]/30 rounded-lg p-8 sm:p-12 shadow-2xl">
            <div className="border-b border-[#C5A47E]/20 pb-6 mb-8">
              <span className="editorial-stamp text-[#C5A47E] mb-2 block">
                INTAKE PROTOCOL 2026
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Cargo Dossier & Quotation Intake
              </h2>
            </div>

            <Suspense fallback={<div className="text-white text-xs font-mono">Loading cargo intake form...</div>}>
              <QuoteForm />
            </Suspense>
          </div>

          {/* Right Column: Direct Contact & Office Dossier */}
          <div className="lg:col-span-4 space-y-8">
            {/* Direct Ops Desk */}
            <div className="bg-[#070E18] text-white border border-[#C5A47E]/30 rounded-lg p-8 space-y-6">
              <div>
                <span className="editorial-stamp text-[#C5A47E] mb-2 block">
                  DIRECT DESK HOTLINE
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  Speak Directly With Operations
                </h3>
              </div>

              <div className="space-y-4 text-xs font-mono text-gray-300">
                <div className="p-3.5 bg-[#112236] rounded border border-gray-800">
                  <span className="text-gray-400 block mb-1">Telephone (24/7):</span>
                  <a
                    href="tel:+971553424700"
                    className="text-white hover:text-[#C5A47E] font-bold text-sm"
                  >
                    +971 55 342 4700
                  </a>
                </div>

                <div className="p-3.5 bg-[#112236] rounded border border-gray-800">
                  <span className="text-gray-400 block mb-1">WhatsApp Dedicated Line:</span>
                  <a
                    href="https://wa.me/971553424700"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-bold"
                  >
                    +971 55 342 4700 (Chat Now)
                  </a>
                </div>

                <div className="p-3.5 bg-[#112236] rounded border border-gray-800">
                  <span className="text-gray-400 block mb-1">Corporate Communications:</span>
                  <a
                    href="mailto:info@swiftsailship.com"
                    className="text-white hover:text-[#C5A47E]"
                  >
                    info@swiftsailship.com
                  </a>
                </div>
              </div>
            </div>

            {/* Dubai HQ Address */}
            <div className="bg-white border border-gray-300 rounded-lg p-8 space-y-4 text-slate-900">
              <span className="editorial-stamp text-[#A37F55] border-[#A37F55]">
                PHYSICAL HEADQUARTERS
              </span>
              <h4 className="text-lg font-serif font-bold text-slate-950">
                Dubai Operating Office
              </h4>
              <p className="text-xs font-mono text-slate-600 leading-relaxed">
                Tanvi Business Centre, M - 101, Abu Hail, Dubai, United Arab Emirates
              </p>
              <div className="pt-2 text-xs font-mono text-gray-500">
                <span>Working Hours: Mon – Fri: 08:00 – 18:00 GST</span>
                <br />
                <span>Port Clearance Desk: Active 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
