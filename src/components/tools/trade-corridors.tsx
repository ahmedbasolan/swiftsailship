"use client";

import { useState } from "react";
import Link from "next/link";

interface Corridor {
  id: string;
  origin: string;
  originCode: string;
  destination: string;
  destCode: string;
  region: "Europe & UK" | "East Asia & China" | "South Asia & India" | "North America" | "Middle East & GCC";
  seaTransitDays: string;
  airTransitHours: string;
  frequency: string;
  routing: string;
  keyCommodities: string[];
}

const CORRIDORS: Corridor[] = [
  {
    id: "jebelali-rotterdam",
    origin: "Dubai / Jebel Ali Port",
    originCode: "AEJEA",
    destination: "Rotterdam, Netherlands",
    destCode: "NLRTM",
    region: "Europe & UK",
    seaTransitDays: "24 – 30 Days (via Cape) / 18 – 22 Days (Direct Suez)",
    airTransitHours: "7 – 9 Hours (Direct DXB → AMS/RTM)",
    frequency: "3x Weekly Direct Vessel Calls",
    routing: "Arabian Gulf → Indian Ocean → Red Sea/Suez or Cape of Good Hope → North Sea",
    keyCommodities: ["Chemicals & Polymers", "Re-export Electronics", "Luxury Goods", "Machinery"],
  },
  {
    id: "jebelali-singapore",
    origin: "Dubai / Jebel Ali Port",
    originCode: "AEJEA",
    destination: "Port of Singapore",
    destCode: "SGSIN",
    region: "East Asia & China",
    seaTransitDays: "9 – 12 Days",
    airTransitHours: "7.5 Hours (Direct DXB → SIN)",
    frequency: "Daily Feeder & Mainline Sailings",
    routing: "Arabian Gulf → Strait of Hormuz → Bay of Bengal → Malacca Strait",
    keyCommodities: ["High-tech Components", "Bunker Supplies", "Transshipment Containers", "Raw Materials"],
  },
  {
    id: "jebelali-shanghai",
    origin: "Dubai / Jebel Ali Port",
    originCode: "AEJEA",
    destination: "Shanghai / Ningbo, China",
    destCode: "CNSHA",
    region: "East Asia & China",
    seaTransitDays: "14 – 18 Days",
    airTransitHours: "8 – 10 Hours (DXB → PVG)",
    frequency: "5x Weekly Container Vessels",
    routing: "Direct Silk Maritime Route via South China Sea",
    keyCommodities: ["Consumer Electronics", "Solar & Renewable Equipment", "Automotive Parts", "Textiles"],
  },
  {
    id: "jebelali-nhavasheva",
    origin: "Dubai / Jebel Ali / Sharjah",
    originCode: "AEJEA",
    destination: "Nhava Sheva (JNPT) / Mundra, India",
    destCode: "INNSA",
    region: "South Asia & India",
    seaTransitDays: "3 – 5 Days",
    airTransitHours: "3.5 Hours (DXB → BOM)",
    frequency: "Daily Direct Feeders & Express Shuttles",
    routing: "Direct Arabian Sea Express Corridor",
    keyCommodities: ["Precious Metals & Gems", "Agricultural Spices", "Industrial Castings", "Pharmaceuticals"],
  },
  {
    id: "jebelali-hamburg",
    origin: "Dubai / Jebel Ali Port",
    originCode: "AEJEA",
    destination: "Hamburg / Bremerhaven, Germany",
    destCode: "DEHAM",
    region: "Europe & UK",
    seaTransitDays: "26 – 32 Days",
    airTransitHours: "6.5 – 8 Hours (DXB → FRA/HAM)",
    frequency: "2x Weekly Direct Services",
    routing: "Arabian Gulf → Atlantic Gateway → Elbe River / North Sea",
    keyCommodities: ["Precision Engineering Equipment", "Automotive Assemblies", "Green Energy Tech"],
  },
  {
    id: "jebelali-houston",
    origin: "Dubai / Jebel Ali Port",
    originCode: "AEJEA",
    destination: "Houston / New York, USA",
    destCode: "USHOU",
    region: "North America",
    seaTransitDays: "32 – 40 Days",
    airTransitHours: "14 – 16 Hours (DXB → IAH/JFK)",
    frequency: "Weekly Dedicated Loops",
    routing: "Arabian Gulf → Transatlantic Mainline Corridor",
    keyCommodities: ["Oilfield Machinery (OCTG)", "Heavy Industrial Breakbulk", "Aviation Parts"],
  },
];

export function TradeCorridors() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [activeCorridorId, setActiveCorridorId] = useState<string>("jebelali-rotterdam");

  const regions = ["All", "Europe & UK", "East Asia & China", "South Asia & India", "North America"];

  const filtered = CORRIDORS.filter(
    (c) => selectedRegion === "All" || c.region === selectedRegion
  );

  const active = CORRIDORS.find((c) => c.id === activeCorridorId) || CORRIDORS[0];

  return (
    <div className="bg-[#070E18] text-white border border-[#C5A47E]/30 rounded-lg p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#C5A47E]/20 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="editorial-stamp text-[#C5A47E]">
                PORT & CORRIDOR DIRECTORY • MARITIME SCHEDULES
              </span>
              <span className="text-xs font-mono text-gray-400">VERIFIED TRANSIT BENCHMARKS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Major Trade Corridors & Port Transit Benchmarks
            </h3>
            <p className="text-sm text-gray-300 mt-1">
              Commercial sailing schedules and air freight transit windows connecting UAE sovereign gateways with the world.
            </p>
          </div>

          {/* Region Filter */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-auto">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded transition-all ${
                  selectedRegion === region
                    ? "bg-[#C5A47E] text-[#070E18] font-bold"
                    : "bg-[#112236] text-gray-300 hover:text-white border border-gray-800"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Corridor Selection List */}
          <div className="lg:col-span-5 space-y-2">
            {filtered.map((c) => {
              const isSelected = c.id === active.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCorridorId(c.id)}
                  className={`w-full text-left p-4 rounded border transition-all ${
                    isSelected
                      ? "bg-[#112236] border-[#C5A47E] text-white shadow-lg"
                      : "bg-[#0A1320] border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-[#C5A47E] mb-1">
                    <span>{c.originCode} ⇄ {c.destCode}</span>
                    <span className="text-[10px] text-gray-500 uppercase">{c.region}</span>
                  </div>
                  <div className="font-serif font-bold text-sm text-white line-clamp-1">
                    {c.destination}
                  </div>
                  <div className="text-xs font-mono text-emerald-400 mt-1 flex items-center gap-1.5">
                    <i className="fa-solid fa-ship text-[10px]" />
                    <span>Sea: {c.seaTransitDays.split("(")[0]}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Corridor Dossier */}
          <div className="lg:col-span-7 bg-[#0D1B2A] border border-[#C5A47E]/30 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="border-b border-[#C5A47E]/20 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C5A47E] mb-1">
                <span>TRADE LANE DOSSIER: {active.originCode} → {active.destCode}</span>
              </div>
              <h4 className="text-2xl font-serif font-bold text-white">
                {active.origin} ⇄ {active.destination}
              </h4>
            </div>

            {/* Transit Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#112236] rounded border border-gray-800">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-1">
                  <i className="fa-solid fa-ship text-[#C5A47E]" />
                  <span>Ocean Freight Transit</span>
                </div>
                <span className="text-lg font-serif font-bold text-emerald-400 block">
                  {active.seaTransitDays}
                </span>
                <span className="text-[11px] font-mono text-gray-400 mt-1 block">
                  FCL & LCL Consolidated Containers
                </span>
              </div>

              <div className="p-4 bg-[#112236] rounded border border-gray-800">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-1">
                  <i className="fa-solid fa-plane text-[#C5A47E]" />
                  <span>Air Cargo Velocity</span>
                </div>
                <span className="text-lg font-serif font-bold text-white block">
                  {active.airTransitHours}
                </span>
                <span className="text-[11px] font-mono text-gray-400 mt-1 block">
                  Direct Daily Cargo Freighters
                </span>
              </div>
            </div>

            {/* Sailing Frequency & Routing */}
            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 bg-[#070E18] rounded border border-gray-800">
                <span className="text-[#C5A47E] block uppercase mb-0.5">Carrier Sailing Frequency:</span>
                <span className="text-gray-200">{active.frequency}</span>
              </div>

              <div className="p-3 bg-[#070E18] rounded border border-gray-800">
                <span className="text-[#C5A47E] block uppercase mb-0.5">Navigational Routing Protocol:</span>
                <span className="text-gray-200">{active.routing}</span>
              </div>
            </div>

            {/* Key Commodities */}
            <div>
              <span className="text-xs font-mono text-[#C5A47E] uppercase tracking-wider block mb-2">
                Typical Commodity Flow on this Corridor:
              </span>
              <div className="flex flex-wrap gap-2">
                {active.keyCommodities.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono bg-[#112236] border border-gray-700 text-gray-300 px-3 py-1 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#C5A47E]/20 text-xs font-mono text-gray-400">
          <span>Looking for project breakbulk, chartering, or custom route rates?</span>
          <Link
            href={`/get-quote?origin=${encodeURIComponent(active.origin)}&destination=${encodeURIComponent(active.destination)}`}
            className="btn-editorial-gold px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
          >
            Inquire for this Corridor <i className="fa-solid fa-arrow-right text-[10px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
