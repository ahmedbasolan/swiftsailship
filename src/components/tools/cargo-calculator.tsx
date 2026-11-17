"use client";

import { useState } from "react";
import Link from "next/link";

interface CargoItem {
  id: string;
  units: number;
  length: number; // in cm
  width: number; // in cm
  height: number; // in cm
  weightPerUnit: number; // in kg
}

export function CargoCalculator() {
  const [items, setItems] = useState<CargoItem[]>([
    { id: "1", units: 10, length: 120, width: 80, height: 100, weightPerUnit: 150 },
  ]);

  const [freightMode, setFreightMode] = useState<"sea" | "air">("sea");
  const [airDivisor, setAirDivisor] = useState<5000 | 6000>(6000); // 6000 is the IATA standard, 5000 is used by express carriers

  const addItem = () => {
    setItems([
      ...items,
      {
        id: Math.random().toString(36).substring(7),
        units: 1,
        length: 100,
        width: 100,
        height: 100,
        weightPerUnit: 50,
      },
    ]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof CargoItem, value: number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: Math.max(0, value) } : item))
    );
  };

  // Calculations
  const totalGrossWeight = items.reduce(
    (acc, curr) => acc + curr.units * curr.weightPerUnit,
    0
  );

  // Volume in CBM: (L * W * H in cm / 1,000,000) * units
  const totalCBM = items.reduce(
    (acc, curr) => acc + ((curr.length * curr.width * curr.height) / 1000000) * curr.units,
    0
  );

  // Volume in CFT (1 CBM = 35.3147 CFT)
  const totalCFT = totalCBM * 35.3147;

  // Air Volumetric Weight = (L * W * H in cm / airDivisor) * units
  const airVolumetricWeight = items.reduce(
    (acc, curr) => acc + ((curr.length * curr.width * curr.height) / airDivisor) * curr.units,
    0
  );

  const chargeableAirWeight = Math.max(totalGrossWeight, airVolumetricWeight);
  const isAirVolumetricChargeable = airVolumetricWeight > totalGrossWeight;

  // Container Estimation (20' GP: 33 CBM, 28,000 kg; 40' GP: 67 CBM, 28,500 kg; 40' HC: 76 CBM, 28,500 kg)
  const getContainerRecommendation = () => {
    if (totalCBM <= 15 && totalGrossWeight <= 10000) {
      return {
        type: "Shared container (LCL)",
        desc: "Under 15 CBM, sharing a container usually costs less than booking one.",
        containersNeeded: "1x LCL Consignment",
        utilizationPct: Math.min(100, (totalCBM / 15) * 100),
      };
    }
    if (totalCBM <= 28 && totalGrossWeight <= 24000) {
      const util = (totalCBM / 33.2) * 100;
      return {
        type: "One 20ft standard container",
        desc: "Holds about 28 to 31 CBM and up to 28,200 kg.",
        containersNeeded: "1x 20' GP",
        utilizationPct: Math.min(100, util),
      };
    }
    if (totalCBM <= 58 && totalGrossWeight <= 26500) {
      const util = (totalCBM / 67.7) * 100;
      return {
        type: "One 40ft standard container",
        desc: "Holds about 58 to 62 CBM and up to 28,750 kg.",
        containersNeeded: "1x 40' GP",
        utilizationPct: Math.min(100, util),
      };
    }
    if (totalCBM <= 68 && totalGrossWeight <= 26500) {
      const util = (totalCBM / 76.3) * 100;
      return {
        type: "One 40ft high cube container",
        desc: "Holds about 68 to 72 CBM and up to 28,600 kg.",
        containersNeeded: "1x 40' HC",
        utilizationPct: Math.min(100, util),
      };
    }
    const count40HC = Math.ceil(Math.max(totalCBM / 68, totalGrossWeight / 26500));
    return {
      type: `${count40HC} 40ft high cube containers`,
      desc: "Too much volume or weight for one container.",
      containersNeeded: `${count40HC}x 40' HC`,
      utilizationPct: 100,
    };
  };

  const containerRec = getContainerRecommendation();

  // WhatsApp Message Pre-filled text
  const whatsappText = encodeURIComponent(
    `Hello Swift Sail Shipping, here are my cargo figures from your calculator:\n` +
      `• Total Packages: ${items.reduce((a, b) => a + b.units, 0)} units\n` +
      `• Total Gross Weight: ${totalGrossWeight.toLocaleString()} kg\n` +
      `• Total Volume: ${totalCBM.toFixed(2)} CBM (${totalCFT.toFixed(1)} CFT)\n` +
      `• Mode: ${freightMode === "sea" ? containerRec.type : `Air freight (chargeable weight ${chargeableAirWeight.toFixed(0)} kg)`}\n` +
      `Please send me a freight quote.`
  );

  const columns: { field: keyof CargoItem; label: string }[] = [
    { field: "units", label: "Packages" },
    { field: "length", label: "Length (cm)" },
    { field: "width", label: "Width (cm)" },
    { field: "height", label: "Height (cm)" },
    { field: "weightPerUnit", label: "Weight each (kg)" },
  ];

  return (
    <div className="tool">
      {/* Sea or air */}
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Freight mode">
        <button type="button" className="chip" aria-pressed={freightMode === "sea"} onClick={() => setFreightMode("sea")}>
          Sea freight
        </button>
        <button type="button" className="chip" aria-pressed={freightMode === "air"} onClick={() => setFreightMode("air")}>
          Air freight
        </button>
        {freightMode === "air" && (
          <span className="flex flex-wrap items-center gap-2 sm:ml-6" role="group" aria-label="Volumetric divisor">
            <span className="t-label">Divisor</span>
            <button type="button" className="chip" aria-pressed={airDivisor === 6000} onClick={() => setAirDivisor(6000)}>
              6000 (standard)
            </button>
            <button type="button" className="chip" aria-pressed={airDivisor === 5000} onClick={() => setAirDivisor(5000)}>
              5000 (express)
            </button>
          </span>
        )}
      </div>

      {/* Package rows: a labelled grid that stacks on a phone */}
      <ul className="rows mt-8">
        {items.map((item, index) => {
          const itemCBM = ((item.length * item.width * item.height) / 1000000) * item.units;
          return (
            <li
              key={item.id}
              className="grid grid-cols-2 items-end gap-x-3 gap-y-4 py-5 sm:grid-cols-3 lg:grid-cols-[repeat(5,minmax(0,1fr))_128px_44px]"
            >
              {columns.map((c) => (
                <label key={c.field} className="block">
                  <span className="t-label mb-1.5 block">{c.label}</span>
                  <input
                    type="number"
                    min="0"
                    inputMode="decimal"
                    value={item[c.field] || ""}
                    onChange={(e) => updateItem(item.id, c.field, parseFloat(e.target.value) || 0)}
                    className="input"
                  />
                </label>
              ))}
              <p className="lg:text-right">
                <span className="t-label mb-1.5 block">Volume</span>
                <span className="flex h-11 items-center tabular-nums lg:justify-end">{itemCBM.toFixed(3)} CBM</span>
              </p>
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                disabled={items.length <= 1}
                aria-label={`Remove package size ${index + 1}`}
                className="col-span-2 inline-flex h-11 items-center justify-center gap-2 justify-self-start rounded-lg px-3 text-ink-soft transition-colors hover:bg-surface hover:text-ink disabled:opacity-30 disabled:hover:bg-transparent sm:col-span-3 lg:col-span-1 lg:w-11 lg:justify-self-end lg:px-0"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <span className="lg:hidden">Remove</span>
              </button>
            </li>
          );
        })}
      </ul>

      <button type="button" onClick={addItem} className="link mt-4 inline-flex h-11 items-center">
        Add another package size
      </button>

      {/* Results */}
      <dl className="mt-8 grid gap-6 rounded-lg bg-surface p-6 sm:grid-cols-3" aria-live="polite">
        <div>
          <dt className="t-label">Total volume</dt>
          <dd className="stat mt-1">{totalCBM.toFixed(2)} CBM</dd>
          <dd className="text-ink-soft">{totalCFT.toFixed(1)} cubic feet</dd>
        </div>
        <div>
          <dt className="t-label">Gross weight</dt>
          <dd className="stat mt-1">{totalGrossWeight.toLocaleString()} kg</dd>
          <dd className="text-ink-soft">{(totalGrossWeight / 1000).toFixed(2)} tonnes</dd>
        </div>
        <div>
          <dt className="t-label">{freightMode === "air" ? "Chargeable weight" : "Charged as"}</dt>
          <dd className="stat mt-1">
            {freightMode === "air"
              ? `${chargeableAirWeight.toFixed(0)} kg`
              : totalCBM >= 15
                ? "Full container"
                : `${Math.max(totalCBM, totalGrossWeight / 1000).toFixed(2)} revenue tons`}
          </dd>
          <dd className="text-ink-soft">
            {freightMode === "air"
              ? isAirVolumetricChargeable
                ? `Charged on volume (${airVolumetricWeight.toFixed(0)} kg volumetric)`
                : "Charged on gross weight"
              : totalCBM >= 15
                ? "Enough cargo to book a container"
                : "The larger of CBM and tonnes"}
          </dd>
        </div>
      </dl>

      {/* Container fit */}
      {freightMode === "sea" && (
        <div className="mt-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className="t-h3 font-display">{containerRec.type}</p>
            <p className="text-ink-soft">{containerRec.utilizationPct.toFixed(0)}% full</p>
          </div>
          <div
            className="mt-3 h-2 overflow-hidden rounded-full bg-surface"
            role="img"
            aria-label={`${containerRec.utilizationPct.toFixed(0)}% of the space used`}
          >
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-300"
              style={{ width: `${Math.min(100, Math.max(3, containerRec.utilizationPct))}%` }}
            />
          </div>
          <p className="mt-3 text-ink-soft">{containerRec.desc}</p>
        </div>
      )}

      <div className="btn-row mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row">
        <Link
          href={`/get-quote?cbm=${totalCBM.toFixed(2)}&weight=${totalGrossWeight}&mode=${freightMode}`}
          className="btn btn--primary"
        >
          Get a quote for this cargo
        </Link>
        <a
          href={`https://wa.me/971553424700?text=${whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--secondary"
        >
          Send these figures on WhatsApp
        </a>
      </div>
    </div>
  );
}
