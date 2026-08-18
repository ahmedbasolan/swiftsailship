"use client";

import { useState, useId } from "react";
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
  const defaultId = useId();
  const [items, setItems] = useState<CargoItem[]>([
    { id: "1", units: 10, length: 120, width: 80, height: 100, weightPerUnit: 150 },
  ]);

  const [freightMode, setFreightMode] = useState<"sea" | "air">("sea");
  const [airDivisor, setAirDivisor] = useState<5000 | 6000>(5000); // 5000 is IATA standard, 6000 for some express

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

  // Sea Chargeable Weight: In ocean freight, 1 CBM is conventionally 1000 kg (1 Ton) for LCL (W/M rule)
  const seaVolumetricWeight = totalCBM * 1000;

  const chargeableAirWeight = Math.max(totalGrossWeight, airVolumetricWeight);
  const isAirVolumetricChargeable = airVolumetricWeight > totalGrossWeight;

  // Container Estimation (20' GP: 33 CBM, 28,000 kg; 40' GP: 67 CBM, 28,500 kg; 40' HC: 76 CBM, 28,500 kg)
  const getContainerRecommendation = () => {
    if (totalCBM <= 15 && totalGrossWeight <= 10000) {
      return {
        type: "LCL Consolidation (Less than Container Load)",
        desc: "Ideal & most cost-effective for cargo under 15 CBM.",
        containersNeeded: "1x LCL Consignment",
        utilizationPct: Math.min(100, (totalCBM / 15) * 100),
      };
    }
    if (totalCBM <= 28 && totalGrossWeight <= 24000) {
      const util = (totalCBM / 33.2) * 100;
      return {
        type: "20ft Standard Dry Container (20' GP)",
        desc: `Max Payload: 28,200 kg | Usable Vol: ~28-31 CBM`,
        containersNeeded: "1x 20' GP",
        utilizationPct: Math.min(100, util),
      };
    }
    if (totalCBM <= 58 && totalGrossWeight <= 26500) {
      const util = (totalCBM / 67.7) * 100;
      return {
        type: "40ft Standard Dry Container (40' GP)",
        desc: `Max Payload: 28,750 kg | Usable Vol: ~58-62 CBM`,
        containersNeeded: "1x 40' GP",
        utilizationPct: Math.min(100, util),
      };
    }
    if (totalCBM <= 68 && totalGrossWeight <= 26500) {
      const util = (totalCBM / 76.3) * 100;
      return {
        type: "40ft High Cube Container (40' HC)",
        desc: `Max Payload: 28,600 kg | Usable Vol: ~68-72 CBM (High volume / lightweight)`,
        containersNeeded: "1x 40' HC",
        utilizationPct: Math.min(100, util),
      };
    }
    const count40HC = Math.ceil(Math.max(totalCBM / 68, totalGrossWeight / 26500));
    return {
      type: `Multi-Container Shipment (${count40HC}x 40' HC Containers)`,
      desc: "High volume or heavy industrial cargo requiring multi-unit FCL dispatch.",
      containersNeeded: `${count40HC}x 40' HC`,
      utilizationPct: 100,
    };
  };

  const containerRec = getContainerRecommendation();

  // WhatsApp Message Pre-filled text
  const whatsappText = encodeURIComponent(
    `Hello Swift Sail Operations, I calculated my cargo specifications on your portal:\n` +
      `• Total Packages: ${items.reduce((a, b) => a + b.units, 0)} units\n` +
      `• Total Gross Weight: ${totalGrossWeight.toLocaleString()} kg\n` +
      `• Total Volume: ${totalCBM.toFixed(2)} CBM (${totalCFT.toFixed(1)} CFT)\n` +
      `• Recommended Mode: ${freightMode === "sea" ? containerRec.type : `Air Express (Chargeable: ${chargeableAirWeight.toFixed(0)} kg)`}\n` +
      `Please provide an official freight quote.`
  );

  return (
    <div className="bg-[#070E18] text-white border border-[#C5A47E]/30 rounded-lg p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#C5A47E]/20 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="editorial-stamp text-[#C5A47E]">
                TECHNICAL TOOL • REVISION 2026.4
              </span>
              <span className="text-xs font-mono text-gray-400">IATA & IMO STANDARDS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Cargo CBM & Container Load Planner
            </h3>
            <p className="text-sm text-gray-300 mt-1">
              Accurate mathematical volume, chargeable weight, and container capacity calculator for global shippers.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="inline-flex p-1 bg-[#112236] border border-[#C5A47E]/30 rounded-md self-start md:self-auto">
            <button
              onClick={() => setFreightMode("sea")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-all ${
                freightMode === "sea"
                  ? "bg-[#C5A47E] text-[#070E18] font-bold shadow-md"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <i className="fa-solid fa-ship mr-1.5" /> Ocean FCL / LCL
            </button>
            <button
              onClick={() => setFreightMode("air")}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-all ${
                freightMode === "air"
                  ? "bg-[#C5A47E] text-[#070E18] font-bold shadow-md"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <i className="fa-solid fa-plane mr-1.5" /> Air Freight
            </button>
          </div>
        </div>

        {/* Dynamic Package Dimensions Table */}
        <div className="mb-8 overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b border-[#C5A47E]/30 text-[#C5A47E] uppercase tracking-wider">
                <th className="py-2.5 px-3">#</th>
                <th className="py-2.5 px-3">Units (Qty)</th>
                <th className="py-2.5 px-3">Length (cm)</th>
                <th className="py-2.5 px-3">Width (cm)</th>
                <th className="py-2.5 px-3">Height (cm)</th>
                <th className="py-2.5 px-3">Unit Wt (kg)</th>
                <th className="py-2.5 px-3 text-right">Subtotal CBM</th>
                <th className="py-2.5 px-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#C5A47E]/10">
              {items.map((item, index) => {
                const itemCBM = ((item.length * item.width * item.height) / 1000000) * item.units;
                return (
                  <tr key={item.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-3 text-gray-400 font-bold">{index + 1}</td>
                    <td className="py-3 px-3">
                      <input
                        type="number"
                        min="1"
                        value={item.units || ""}
                        onChange={(e) => updateItem(item.id, "units", parseFloat(e.target.value) || 0)}
                        className="w-20 bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-2 py-1 text-white text-right outline-none"
                      />
                    </td>
                    <td className="py-3 px-3">
                      <input
                        type="number"
                        min="1"
                        value={item.length || ""}
                        onChange={(e) => updateItem(item.id, "length", parseFloat(e.target.value) || 0)}
                        className="w-20 bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-2 py-1 text-white text-right outline-none"
                      />
                    </td>
                    <td className="py-3 px-3">
                      <input
                        type="number"
                        min="1"
                        value={item.width || ""}
                        onChange={(e) => updateItem(item.id, "width", parseFloat(e.target.value) || 0)}
                        className="w-20 bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-2 py-1 text-white text-right outline-none"
                      />
                    </td>
                    <td className="py-3 px-3">
                      <input
                        type="number"
                        min="1"
                        value={item.height || ""}
                        onChange={(e) => updateItem(item.id, "height", parseFloat(e.target.value) || 0)}
                        className="w-20 bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-2 py-1 text-white text-right outline-none"
                      />
                    </td>
                    <td className="py-3 px-3">
                      <input
                        type="number"
                        min="0"
                        value={item.weightPerUnit || ""}
                        onChange={(e) => updateItem(item.id, "weightPerUnit", parseFloat(e.target.value) || 0)}
                        className="w-20 bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-2 py-1 text-white text-right outline-none"
                      />
                    </td>
                    <td className="py-3 px-3 text-right text-emerald-400 font-bold">
                      {itemCBM.toFixed(3)} m³
                    </td>
                    <td className="py-3 px-3 text-center">
                      <button
                        onClick={() => removeItem(item.id)}
                        disabled={items.length <= 1}
                        className={`text-xs px-2 py-1 rounded ${
                          items.length <= 1
                            ? "text-gray-600 cursor-not-allowed"
                            : "text-red-400 hover:bg-red-950/40"
                        }`}
                        title="Remove Line"
                      >
                        <i className="fa-solid fa-trash-can" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <button
            onClick={addItem}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#C5A47E] hover:text-[#E0C7A8] bg-[#112236] border border-[#C5A47E]/40 px-3.5 py-2 rounded hover:bg-[#C5A47E]/10 transition-colors"
          >
            <i className="fa-solid fa-plus text-xs" /> Add Package Row
          </button>

          {freightMode === "air" && (
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <span>IATA Air Volumetric Divisor:</span>
              <button
                onClick={() => setAirDivisor(5000)}
                className={`px-2 py-1 rounded border ${
                  airDivisor === 5000
                    ? "bg-[#C5A47E] text-[#070E18] border-[#C5A47E] font-bold"
                    : "border-gray-700 text-gray-400"
                }`}
              >
                1:5000 (Standard)
              </button>
              <button
                onClick={() => setAirDivisor(6000)}
                className={`px-2 py-1 rounded border ${
                  airDivisor === 6000
                    ? "bg-[#C5A47E] text-[#070E18] border-[#C5A47E] font-bold"
                    : "border-gray-700 text-gray-400"
                }`}
              >
                1:6000 (Express)
              </button>
            </div>
          )}
        </div>

        {/* Live Mathematical Results Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-[#0D1B2A] border border-[#C5A47E]/30 rounded-lg mb-8">
          {/* Total Volume */}
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
              Total Volume (CBM / CFT)
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#C5A47E]">
                {totalCBM.toFixed(2)}
              </span>
              <span className="text-sm font-mono text-gray-300">CBM (m³)</span>
            </div>
            <p className="text-xs font-mono text-gray-400">
              ≈ {totalCFT.toFixed(1)} Cubic Feet (CFT)
            </p>
          </div>

          {/* Gross Weight */}
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-[#C5A47E]/20 pt-4 md:pt-0 md:pl-6">
            <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
              Actual Gross Weight
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-white">
                {totalGrossWeight.toLocaleString()}
              </span>
              <span className="text-sm font-mono text-gray-300">KG</span>
            </div>
            <p className="text-xs font-mono text-gray-400">
              ≈ {(totalGrossWeight / 1000).toFixed(2)} Metric Tonnes
            </p>
          </div>

          {/* Chargeable Weight / Optimization */}
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-[#C5A47E]/20 pt-4 md:pt-0 md:pl-6">
            <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
              {freightMode === "air" ? "Air Chargeable Weight" : "Ocean W/M Rule"}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-emerald-400">
                {freightMode === "air"
                  ? `${chargeableAirWeight.toFixed(0)} kg`
                  : totalCBM >= 15
                  ? "Full Container"
                  : `${Math.max(totalCBM, totalGrossWeight / 1000).toFixed(2)} Revenue Tons`}
              </span>
            </div>
            <p className="text-xs font-mono text-gray-400">
              {freightMode === "air"
                ? isAirVolumetricChargeable
                  ? `Volume is dominant (${airVolumetricWeight.toFixed(0)} kg vol. wt)`
                  : `Gross weight is dominant`
                : totalCBM >= 15
                ? "Optimal for FCL Booking"
                : "Charged on Volume (CBM) vs Weight (Ton)"}
            </p>
          </div>
        </div>

        {/* Container Recommendation / Space Gauge */}
        <div className="p-6 bg-[#112236] border border-[#C5A47E]/20 rounded-lg mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="editorial-stamp text-[#C5A47E] mb-1">
                CONTAINER SPECIFICATION ANALYSIS
              </span>
              <h4 className="text-lg font-serif font-bold text-white mt-1">
                {containerRec.type}
              </h4>
            </div>
            <span className="text-xs font-mono text-gray-300 bg-[#070E18] px-3 py-1.5 rounded border border-gray-700">
              {containerRec.desc}
            </span>
          </div>

          {/* Progress / Utilization Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-xs font-mono text-gray-300 mb-1.5">
              <span>Container Volume Utilization</span>
              <span className="text-[#C5A47E] font-bold">
                {containerRec.utilizationPct.toFixed(1)}% Fill
              </span>
            </div>
            <div className="w-full bg-[#070E18] h-3 rounded-full overflow-hidden border border-gray-700 p-0.5">
              <div
                className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-[#C5A47E] to-emerald-400"
                style={{ width: `${Math.min(100, Math.max(5, containerRec.utilizationPct))}%` }}
              />
            </div>
          </div>
        </div>

        {/* Direct Action Ledger */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#C5A47E]/20">
          <div className="text-xs text-gray-400 font-mono text-center sm:text-left">
            <span>Direct Operations Desk: </span>
            <strong className="text-white">+971 55 342 4700</strong> (Dubai Maritime City & Jebel Ali)
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/971553424700?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider px-5 py-3 rounded transition-colors"
            >
              <i className="fa-brands fa-whatsapp text-base" /> WhatsApp Specs
            </a>

            <Link
              href={`/get-quote?cbm=${totalCBM.toFixed(2)}&weight=${totalGrossWeight}&mode=${freightMode}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 btn-editorial-gold px-6 py-3 rounded text-xs font-bold uppercase tracking-wider"
            >
              Request Official Quote <i className="fa-solid fa-arrow-right ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
