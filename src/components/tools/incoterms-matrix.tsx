"use client";

import { useState } from "react";
import Link from "next/link";

interface IncotermData {
  code: string;
  name: string;
  category: "Any Mode" | "Sea & Inland Waterway Only";
  riskTransferPoint: string;
  freightPayer: "Buyer" | "Seller";
  exportCustoms: "Buyer" | "Seller";
  importCustoms: "Buyer" | "Seller";
  insurance: string;
  description: string;
}

const INCOTERMS: IncotermData[] = [
  {
    code: "EXW",
    name: "Ex Works",
    category: "Any Mode",
    riskTransferPoint: "Seller's factory / warehouse floor",
    freightPayer: "Buyer",
    exportCustoms: "Buyer",
    importCustoms: "Buyer",
    insurance: "Buyer",
    description: "Maximum responsibility on Buyer. Buyer arranges pickup, export clearance, ocean/air carriage, and import clearance.",
  },
  {
    code: "FCA",
    name: "Free Carrier",
    category: "Any Mode",
    riskTransferPoint: "When handed to the carrier nominated by buyer at named place",
    freightPayer: "Buyer",
    exportCustoms: "Seller",
    importCustoms: "Buyer",
    insurance: "Buyer",
    description: "Seller handles export clearance and delivers cargo to the designated freight forwarder / terminal.",
  },
  {
    code: "FOB",
    name: "Free On Board",
    category: "Sea & Inland Waterway Only",
    riskTransferPoint: "On board the vessel at departure port (e.g., Jebel Ali Port)",
    freightPayer: "Buyer",
    exportCustoms: "Seller",
    importCustoms: "Buyer",
    insurance: "Buyer",
    description: "Standard maritime term. Seller delivers goods loaded on board the vessel. Main international ocean freight is paid by Buyer.",
  },
  {
    code: "CFR",
    name: "Cost and Freight",
    category: "Sea & Inland Waterway Only",
    riskTransferPoint: "On board the vessel at origin port",
    freightPayer: "Seller",
    exportCustoms: "Seller",
    importCustoms: "Buyer",
    insurance: "Buyer",
    description: "Seller pays ocean freight to destination port, but risk transfers to Buyer once goods are loaded on vessel.",
  },
  {
    code: "CIF",
    name: "Cost, Insurance and Freight",
    category: "Sea & Inland Waterway Only",
    riskTransferPoint: "On board the vessel at origin port",
    freightPayer: "Seller",
    exportCustoms: "Seller",
    importCustoms: "Buyer",
    insurance: "Seller (Minimum Institute Cargo Clauses C)",
    description: "Most popular for GCC sea imports. Seller pays international freight + marine insurance to destination port. Buyer clears import customs.",
  },
  {
    code: "DAP",
    name: "Delivered at Place",
    category: "Any Mode",
    riskTransferPoint: "At destination, ready for unloading at buyer's facility",
    freightPayer: "Seller",
    exportCustoms: "Seller",
    importCustoms: "Buyer",
    insurance: "Seller",
    description: "Seller delivers cargo right to the buyer's door/warehouse. Buyer is only responsible for import customs clearance & duties/VAT.",
  },
  {
    code: "DDP",
    name: "Delivered Duty Paid",
    category: "Any Mode",
    riskTransferPoint: "At destination facility with all import taxes & duties paid",
    freightPayer: "Seller",
    exportCustoms: "Seller",
    importCustoms: "Seller",
    insurance: "Seller",
    description: "Turnkey luxury logistics. Seller & Swift Sail handle end-to-end transport, export/import duties, 5% UAE VAT, and door delivery.",
  },
];

export function IncotermsMatrix() {
  const [selectedTerm, setSelectedTerm] = useState<string>("CIF");

  const active = INCOTERMS.find((t) => t.code === selectedTerm) || INCOTERMS[4];

  return (
    <div className="bg-[#070E18] text-white border border-[#C5A47E]/30 rounded-lg p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        <div className="pb-6 border-b border-[#C5A47E]/20 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="editorial-stamp text-[#C5A47E]">
              INTERNATIONAL CHAMBER OF COMMERCE • ICC RULES
            </span>
            <span className="text-xs font-mono text-gray-400">GLOBAL TRADE STANDARD</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Incoterms® 2020 Risk & Cost Responsibility Matrix
          </h3>
          <p className="text-sm text-gray-300 mt-1">
            Understand exactly where cargo risk transfers and who pays international freight, insurance, and UAE customs duties.
          </p>
        </div>

        {/* Incoterm Quick Select Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {INCOTERMS.map((term) => (
            <button
              key={term.code}
              onClick={() => setSelectedTerm(term.code)}
              className={`px-4 py-2 text-xs font-mono font-bold rounded border transition-all ${
                term.code === selectedTerm
                  ? "bg-[#C5A47E] text-[#070E18] border-[#C5A47E] shadow-lg shadow-[#C5A47E]/20"
                  : "bg-[#112236] text-gray-300 border-gray-700 hover:border-gray-500 hover:text-white"
              }`}
            >
              {term.code}
            </button>
          ))}
        </div>

        {/* Term Deep Dive Card */}
        <div className="bg-[#0D1B2A] border border-[#C5A47E]/30 rounded-lg p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-800 mb-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-serif font-bold text-[#C5A47E]">
                  {active.code}
                </span>
                <span className="text-lg font-serif text-white font-medium">
                  {active.name}
                </span>
              </div>
              <span className="text-xs font-mono text-gray-400 mt-1 block">
                Transport Applicability: {active.category}
              </span>
            </div>

            <span className="editorial-stamp text-emerald-400 bg-emerald-950/30 border-emerald-500/40">
              OFFICIAL INCOTERMS 2020
            </span>
          </div>

          <p className="text-sm font-sans text-gray-300 leading-relaxed mb-6">
            {active.description}
          </p>

          {/* Responsibility Breakdown Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div className="bg-[#112236] p-3.5 rounded border border-gray-800">
              <span className="text-gray-400 block mb-1">Freight Transport Payer</span>
              <strong className={active.freightPayer === "Seller" ? "text-emerald-400" : "text-[#C5A47E]"}>
                {active.freightPayer}
              </strong>
            </div>

            <div className="bg-[#112236] p-3.5 rounded border border-gray-800">
              <span className="text-gray-400 block mb-1">Export Clearance</span>
              <strong className={active.exportCustoms === "Seller" ? "text-emerald-400" : "text-amber-400"}>
                {active.exportCustoms}
              </strong>
            </div>

            <div className="bg-[#112236] p-3.5 rounded border border-gray-800">
              <span className="text-gray-400 block mb-1">Import Clearance (UAE)</span>
              <strong className={active.importCustoms === "Seller" ? "text-emerald-400" : "text-amber-400"}>
                {active.importCustoms}
              </strong>
            </div>

            <div className="bg-[#112236] p-3.5 rounded border border-gray-800">
              <span className="text-gray-400 block mb-1">Marine Cargo Insurance</span>
              <strong className="text-white">{active.insurance}</strong>
            </div>
          </div>

          {/* Risk Transfer Point */}
          <div className="mt-4 p-3.5 bg-[#070E18] border border-gray-800 rounded text-xs font-mono text-gray-300">
            <strong className="text-[#C5A47E] uppercase block mb-0.5">Critical Risk Transfer Point:</strong>
            {active.riskTransferPoint}
          </div>
        </div>

        {/* Footer Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#C5A47E]/20 text-xs font-mono text-gray-400">
          <span>Unsure which Incoterm is best for your supplier contract?</span>
          <Link
            href={`/get-quote?incoterm=${active.code}`}
            className="btn-editorial-gold px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
          >
            Quote Under {active.code} Terms <i className="fa-solid fa-arrow-right text-[10px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
