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
    description: "The buyer carries the most responsibility. Buyer arranges pickup, export clearance, ocean/air carriage, and import clearance.",
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
    description: "The seller arranges everything: transport, export and import clearance, duty, the 5% UAE VAT and delivery to the door.",
  },
];

export function IncotermsMatrix() {
  const [selectedTerm, setSelectedTerm] = useState<string>("CIF");

  const active = INCOTERMS.find((t) => t.code === selectedTerm) || INCOTERMS[4];

  const duties: [string, string][] = [
    ["Pays the main freight", active.freightPayer],
    ["Clears export customs", active.exportCustoms],
    ["Clears import customs", active.importCustoms],
    ["Insures the cargo", active.insurance],
  ];

  return (
    <div className="tool">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Incoterm">
        {INCOTERMS.map((term) => (
          <button
            key={term.code}
            type="button"
            className="chip"
            aria-pressed={term.code === selectedTerm}
            onClick={() => setSelectedTerm(term.code)}
          >
            {term.code}
          </button>
        ))}
      </div>

      <div key={active.code} className="swap mt-8 grid gap-8 lg:grid-cols-12 lg:gap-6" aria-live="polite">
        <div className="lg:col-span-5">
          <p className="t-label">
            {active.category === "Any Mode" ? "Any mode of transport" : "Sea and inland waterway only"}
          </p>
          <h3 className="t-h2 mt-1">{active.code}</h3>
          <p className="t-h3 mt-1 font-display">{active.name}</p>
          <p className="mt-4 text-ink-soft">{active.description}</p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <dl className="rows">
            {duties.map(([term, who]) => (
              <div key={term} className="grid grid-cols-[1fr_auto] items-baseline gap-4 py-4">
                <dt className="text-ink-soft">{term}</dt>
                <dd className="text-right font-medium">{who}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 rounded-lg bg-surface p-6">
            <p className="t-label">Risk passes to the buyer</p>
            <p className="mt-1 font-medium">{active.riskTransferPoint}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-ink-soft">Incoterms is a registered trademark of the International Chamber of Commerce.</p>
        <Link href={`/get-quote?incoterm=${active.code}`} className="btn btn--primary">
          Get a quote on {active.code} terms
        </Link>
      </div>
    </div>
  );
}
