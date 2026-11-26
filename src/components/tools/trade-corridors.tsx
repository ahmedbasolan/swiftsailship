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
    <div className="tool">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Region">
        {regions.map((region) => (
          <button
            key={region}
            type="button"
            className="chip"
            aria-pressed={selectedRegion === region}
            onClick={() => setSelectedRegion(region)}
          >
            {region === "All" ? "All regions" : region}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-6">
        {/* Routes */}
        <ul className="rows lg:col-span-5">
          {filtered.map((c) => {
            const isSelected = c.id === active.id;
            return (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => setActiveCorridorId(c.id)}
                  aria-pressed={isSelected}
                  className="group flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span>
                    <span className={`block font-medium ${isSelected ? "text-accent" : "text-ink"}`}>
                      {c.destination}
                    </span>
                    <span className="t-label">{c.seaTransitDays.split("(")[0].trim().toLowerCase()} by sea</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 shrink-0 rounded-full ${isSelected ? "bg-accent" : "bg-transparent group-hover:bg-ink/20"}`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Detail */}
        <div key={active.id} className="swap lg:col-span-6 lg:col-start-7" aria-live="polite">
          <p className="t-label">
            {active.originCode} to {active.destCode}
          </p>
          <h3 className="t-h3 mt-1">
            {active.origin} to {active.destination}
          </h3>

          <dl className="mt-6 grid gap-6 rounded-lg bg-surface p-6 sm:grid-cols-2">
            <div>
              <dt className="t-label">By sea</dt>
              <dd className="mt-1 font-medium">{active.seaTransitDays}</dd>
            </div>
            <div>
              <dt className="t-label">By air, flying time</dt>
              <dd className="mt-1 font-medium">{active.airTransitHours}</dd>
            </div>
          </dl>

          <dl className="rows mt-6">
            <div className="py-4">
              <dt className="t-label">Sailings</dt>
              <dd className="mt-1">{active.frequency}</dd>
            </div>
            <div className="py-4">
              <dt className="t-label">Route</dt>
              <dd className="mt-1">{active.routing}</dd>
            </div>
            <div className="py-4">
              <dt className="t-label">Typical cargo</dt>
              <dd className="mt-1">{active.keyCommodities.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-ink-soft">Typical times. Carriers change schedules, so ask us for the current sailing.</p>
        <Link
          href={`/get-quote?origin=${encodeURIComponent(active.origin)}&destination=${encodeURIComponent(active.destination)}`}
          className="btn btn--primary"
        >
          Get a quote for this route
        </Link>
      </div>
    </div>
  );
}
