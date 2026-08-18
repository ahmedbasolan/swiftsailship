"use client";

import { useState } from "react";
import Link from "next/link";

interface CommodityInfo {
  category: string;
  hsChapter: string;
  dutyRate: string;
  vatRate: string;
  specialPermit: string | null;
  mandatoryDocs: string[];
  notes: string;
}

const COMMODITIES: CommodityInfo[] = [
  {
    category: "Industrial Machinery & Capital Equipment",
    hsChapter: "HS Chapter 84 & 85",
    dutyRate: "0% to 5% (Customs Duty Exemption available for licensed industrial manufacturing)",
    vatRate: "5% Standard",
    specialPermit: "MOIAT Industrial Exemption Permit (if eligible)",
    mandatoryDocs: [
      "Original Attested Commercial Invoice",
      "Attested Certificate of Origin (Chamber of Commerce)",
      "Detailed Technical Packing List",
      "Original Ocean Bill of Lading / Master AWB",
      "Valid UAE Trade License with matching activity",
    ],
    notes: "Industrial entities registered with UAE Ministry of Industry & Advanced Technology (MOIAT) can apply for 0% customs duty waiver prior to port clearance.",
  },
  {
    category: "Automotive Vehicles & Spare Parts",
    hsChapter: "HS Chapter 87",
    dutyRate: "5% on CIF Value",
    vatRate: "5% Standard",
    specialPermit: "ESMA / GSO Conformity Certificate for brand new vehicles; RTA inspection for registration",
    mandatoryDocs: [
      "Original Commercial Invoice with VIN numbers",
      "Certificate of Origin from manufacturing country",
      "Packing List with chassis/engine numbers",
      "Bill of Lading",
      "VCC (Vehicle Clearance Certificate) issued by Dubai Customs upon release",
    ],
    notes: "Swift Sail generates electronic VCCs directly through Dubai Customs Mirsal 2 integration for instant RTA registration.",
  },
  {
    category: "Electronics, Hardware & Semiconductors",
    hsChapter: "HS Chapter 85",
    dutyRate: "0% (ITA Agreement items) to 5%",
    vatRate: "5% Standard",
    specialPermit: "TDRA (Telecommunications and Digital Government Regulatory Authority) for telecom/wireless devices",
    mandatoryDocs: [
      "Commercial Invoice with serial breakdown",
      "Certificate of Origin",
      "TDRA Equipment Approval Certificate (for Wi-Fi/GSM modules)",
      "Airway Bill / Ocean Bill of Lading",
    ],
    notes: "Many computing and information technology products enter duty-free under the Information Technology Agreement (ITA).",
  },
  {
    category: "Foodstuffs, Beverages & Perishables",
    hsChapter: "HS Chapter 01 to 24",
    dutyRate: "0% to 5% (Basic food items often 0% or essential exempt)",
    vatRate: "0% (Basic staple foods) or 5%",
    specialPermit: "Dubai Municipality Food Safety Department (FIRS / Food Import and Re-export System)",
    mandatoryDocs: [
      "Original Health Certificate / Phytosanitary Certificate",
      "Halal Certificate (for meat/poultry products)",
      "Certificate of Origin & Attested Invoice",
      "Product Label Approval Certificate from Dubai Municipality",
      "Temperature Log Report (for Reefer containers)",
    ],
    notes: "Strict cold-chain inspection at Jebel Ali Port and Port Khalid. Swift Sail arranges priority physical inspections to prevent demurrage on perishable reefer cargo.",
  },
  {
    category: "Textiles, Garments & Footwear",
    hsChapter: "HS Chapter 50 to 64",
    dutyRate: "5% on CIF Value",
    vatRate: "5% Standard",
    specialPermit: "None for standard commercial fabric; Conformity check for children's wear",
    mandatoryDocs: [
      "Commercial Invoice with fabric composition %",
      "Certificate of Origin",
      "Packing List with carton and piece breakdown",
      "Bill of Lading",
    ],
    notes: "Composition labeling (e.g. 100% Cotton, 80/20 Poly-Cotton) must match invoice descriptions precisely to prevent customs laboratory testing holds.",
  },
  {
    category: "Chemicals & Dangerous Goods (DG)",
    hsChapter: "HS Chapter 28, 29, 38",
    dutyRate: "5% on CIF Value",
    vatRate: "5% Standard",
    specialPermit: "Ministry of Climate Change and Environment (MOCCAE) & Dubai Civil Defense",
    mandatoryDocs: [
      "Material Safety Data Sheet (MSDS - 16 Sections)",
      "Dangerous Goods Declaration (DGD)",
      "UN Packaging Approval Certificate",
      "Attested Commercial Invoice & COO",
      "Civil Defense Hazmat Transport Approval",
    ],
    notes: "Swift Sail handles IMO Class 2 through 9 hazmat container movements directly through specialized Jebel Ali chemical gates.",
  },
];

export function CustomsDutyGuide() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filtered = COMMODITIES.filter(
    (c) =>
      c.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.hsChapter.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.notes.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const active = filtered[selectedIdx] || COMMODITIES[0];

  return (
    <div className="bg-[#070E18] text-white border border-[#C5A47E]/30 rounded-lg p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#C5A47E]/20 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="editorial-stamp text-[#C5A47E]">
                UAE CUSTOMS COMPLIANCE • GCC COMMON TARIFF
              </span>
              <span className="text-xs font-mono text-gray-400">MIRSAL 2 BROKERAGE DESK</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              UAE Customs Tariff & Document Clearance Guide
            </h3>
            <p className="text-sm text-gray-300 mt-1">
              Official duty benchmarks, VAT application, and mandatory documentary prerequisites for seamless UAE port clearance.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search commodity or HS chapter..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSelectedIdx(0);
              }}
              className="w-full bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-3 py-2 text-xs font-mono text-white placeholder-gray-500 outline-none pr-8"
            />
            <i className="fa-solid fa-magnifying-glass absolute right-3 top-2.5 text-xs text-gray-400" />
          </div>
        </div>

        {/* 2-Column Editorial Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Left Column: Commodity Selectors */}
          <div className="lg:col-span-5 space-y-2 max-h-[480px] overflow-y-auto pr-1">
            {filtered.map((item, idx) => {
              const isSelected = item.category === active.category;
              return (
                <button
                  key={item.category}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left p-4 rounded border transition-all text-xs font-mono ${
                    isSelected
                      ? "bg-[#112236] border-[#C5A47E] text-white shadow-lg"
                      : "bg-[#0A1320] border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[#C5A47E] font-bold">{item.hsChapter}</span>
                    <span className="text-[10px] text-gray-500 uppercase">Tariff Schedule</span>
                  </div>
                  <div className="font-serif font-bold text-sm text-white line-clamp-1">
                    {item.category}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Regulatory Breakdown */}
          <div className="lg:col-span-7 bg-[#0D1B2A] border border-[#C5A47E]/30 rounded-lg p-6 space-y-6">
            <div className="border-b border-[#C5A47E]/20 pb-4">
              <span className="text-xs font-mono text-[#C5A47E] uppercase tracking-wider block mb-1">
                {active.hsChapter} • OFFICIAL UAE GCC TARIFF
              </span>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {active.category}
              </h4>
            </div>

            {/* Duty & VAT Rates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 bg-[#112236] rounded border border-gray-800">
                <span className="text-[11px] font-mono uppercase text-gray-400 block mb-1">
                  Customs Duty Rate
                </span>
                <span className="text-lg font-serif font-bold text-emerald-400">
                  {active.dutyRate}
                </span>
              </div>
              <div className="p-3.5 bg-[#112236] rounded border border-gray-800">
                <span className="text-[11px] font-mono uppercase text-gray-400 block mb-1">
                  UAE Value Added Tax (VAT)
                </span>
                <span className="text-lg font-serif font-bold text-[#C5A47E]">
                  {active.vatRate}
                </span>
              </div>
            </div>

            {/* Special Regulatory Permit */}
            {active.specialPermit && (
              <div className="p-3.5 bg-amber-950/20 border border-amber-500/30 rounded text-xs font-mono text-amber-200 flex items-start gap-2.5">
                <i className="fa-solid fa-triangle-exclamation text-amber-400 mt-0.5" />
                <div>
                  <strong className="block text-white font-bold mb-0.5">
                    Special Authority Approval Required:
                  </strong>
                  {active.specialPermit}
                </div>
              </div>
            )}

            {/* Mandatory Documentation Checklist */}
            <div>
              <span className="text-xs font-mono text-[#C5A47E] uppercase tracking-wider block mb-2.5">
                Mandatory Clearance Documentation Checklist:
              </span>
              <ul className="space-y-2 text-xs font-mono text-gray-300">
                {active.mandatoryDocs.map((doc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <i className="fa-solid fa-circle-check text-emerald-400 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Operational Notes */}
            <div className="text-xs font-sans text-gray-300 bg-[#070E18] p-3.5 rounded border border-gray-800 leading-relaxed">
              <strong className="text-white font-mono text-xs uppercase block mb-1">
                Customs Brokerage Insight:
              </strong>
              {active.notes}
            </div>
          </div>
        </div>

        {/* Footer Support Desk */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#C5A47E]/20 text-xs font-mono text-gray-400">
          <div>
            <span>Need Custom HS Classification or Duty Exemption Advice? </span>
            <span className="text-white font-bold">Contact Swift Sail Customs Desk</span>
          </div>

          <Link
            href="/get-quote?service=customs-clearance"
            className="btn-editorial-gold px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
          >
            Consult Customs Broker <i className="fa-solid fa-arrow-right text-[10px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
