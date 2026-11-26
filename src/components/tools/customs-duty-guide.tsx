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
    notes: "Dubai Customs issues the vehicle clearance certificate (VCC) through Mirsal 2 once the vehicle is released. The RTA needs it for registration.",
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
    notes: "Chilled and frozen cargo is inspected at the port. Book the inspection early so the container does not sit on storage charges.",
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
    notes: "Dangerous goods need their approvals in place before the cargo arrives. The IMO class decides which authority signs off.",
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
    <div className="tool">
      <label htmlFor="duty-search" className="mb-1.5 block text-sm font-medium">
        Search by type of goods or HS chapter
      </label>
      <input
        id="duty-search"
        type="search"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setSelectedIdx(0);
        }}
        className="input max-w-md"
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-6">
        {/* Goods */}
        <ul className="rows lg:col-span-5">
          {filtered.map((item, idx) => {
            const isSelected = item.category === active.category;
            return (
              <li key={item.category}>
                <button
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  aria-pressed={isSelected}
                  className="group flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span>
                    <span className={`block font-medium ${isSelected ? "text-accent" : "text-ink"}`}>
                      {item.category}
                    </span>
                    <span className="t-label">{item.hsChapter}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 shrink-0 rounded-full ${isSelected ? "bg-accent" : "bg-transparent group-hover:bg-ink/20"}`}
                  />
                </button>
              </li>
            );
          })}
          {filtered.length === 0 && <li className="py-4 text-ink-soft">No goods match that search.</li>}
        </ul>

        {/* Detail */}
        <div key={active.category} className="swap lg:col-span-6 lg:col-start-7" aria-live="polite">
          <p className="t-label">{active.hsChapter}</p>
          <h3 className="t-h3 mt-1">{active.category}</h3>

          <dl className="mt-6 grid gap-6 rounded-lg bg-surface p-6 sm:grid-cols-2">
            <div>
              <dt className="t-label">Customs duty</dt>
              <dd className="mt-1 font-medium">{active.dutyRate}</dd>
            </div>
            <div>
              <dt className="t-label">VAT</dt>
              <dd className="mt-1 font-medium">{active.vatRate}</dd>
            </div>
            {active.specialPermit && (
              <div className="sm:col-span-2">
                <dt className="t-label">Permit or approval</dt>
                <dd className="mt-1">{active.specialPermit}</dd>
              </div>
            )}
          </dl>

          <h4 className="mt-8 font-sans text-base font-medium">Documents customs asks for</h4>
          <ul className="rows mt-3">
            {active.mandatoryDocs.map((doc) => (
              <li key={doc} className="py-3 text-ink-soft">
                {doc}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-ink-soft">{active.notes}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-ink-soft">Rates are a guide. The HS code of your goods decides the duty.</p>
        <Link href="/get-quote?service=customs-clearance" className="btn btn--primary">
          Get a customs clearance quote
        </Link>
      </div>
    </div>
  );
}
