"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function QuoteForm() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceMode: "ocean-fcl",
    incoterm: "CIF",
    origin: "",
    destination: "",
    cbm: "",
    weight: "",
    readyDate: "",
    hsCodeOrCommodity: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-fill from URL query parameters (e.g. from Calculator or Corridor click)
  useEffect(() => {
    const cbm = searchParams.get("cbm");
    const weight = searchParams.get("weight");
    const mode = searchParams.get("mode");
    const incoterm = searchParams.get("incoterm");
    const origin = searchParams.get("origin");
    const destination = searchParams.get("destination");
    const service = searchParams.get("service");

    setFormData((prev) => ({
      ...prev,
      cbm: cbm || prev.cbm,
      weight: weight || prev.weight,
      serviceMode: service || (mode === "air" ? "air-freight" : prev.serviceMode),
      incoterm: incoterm || prev.incoterm,
      origin: origin || prev.origin,
      destination: destination || prev.destination,
    }));
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `*Swift Sail Shipping Quotation Request*\n\n` +
      `• *Client Name:* ${formData.name || "N/A"}\n` +
      `• *Company:* ${formData.company || "N/A"}\n` +
      `• *Phone:* ${formData.phone || "N/A"}\n` +
      `• *Service Mode:* ${formData.serviceMode}\n` +
      `• *Incoterm:* ${formData.incoterm}\n` +
      `• *Origin:* ${formData.origin || "Not specified"}\n` +
      `• *Destination:* ${formData.destination || "Not specified"}\n` +
      `• *Cargo Volume:* ${formData.cbm ? `${formData.cbm} CBM` : "N/A"}\n` +
      `• *Gross Weight:* ${formData.weight ? `${formData.weight} kg` : "N/A"}\n` +
      `• *Commodity/HS Code:* ${formData.hsCodeOrCommodity || "General Cargo"}\n` +
      `• *Additional Notes:* ${formData.notes || "None"}`
  );

  if (isSubmitted) {
    return (
      <div className="bg-[#070E18] border border-[#C5A47E]/40 rounded-lg p-8 text-center text-white space-y-4">
        <div className="w-16 h-16 bg-emerald-950/80 border border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400 text-2xl">
          <i className="fa-solid fa-check" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-white">
          Quotation Request Dispatched
        </h3>
        <p className="text-sm font-sans text-gray-300 max-w-md mx-auto leading-relaxed">
          Thank you. Your cargo dossier has been assigned to our on-duty Dubai logistics desk. We will respond with an itemized commercial rate sheet within 2 business hours.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={`https://wa.me/971553424700?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3 rounded"
          >
            <i className="fa-brands fa-whatsapp text-base" /> Expedite on WhatsApp
          </a>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-xs font-mono text-gray-400 hover:text-white px-4 py-3"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-xs font-mono">
      {/* Client Identity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300 uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Captain Tariq Al-Mansoor"
            className="w-full bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-3.5 py-3 text-white outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-300 uppercase tracking-wider mb-1.5">
            Company / Trading Entity
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Gulf Petrochemical FZE"
            className="w-full bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-3.5 py-3 text-white outline-none"
          />
        </div>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300 uppercase tracking-wider mb-1.5">
            Corporate Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="procurement@company.com"
            className="w-full bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-3.5 py-3 text-white outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-300 uppercase tracking-wider mb-1.5">
            Phone / Mobile (with country code) *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+971 50 123 4567"
            className="w-full bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-3.5 py-3 text-white outline-none"
          />
        </div>
      </div>

      {/* Service Mode & Incoterm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300 uppercase tracking-wider mb-1.5">
            Required Service Mode *
          </label>
          <select
            name="serviceMode"
            value={formData.serviceMode}
            onChange={handleChange}
            className="w-full bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-3.5 py-3 text-white outline-none"
          >
            <option value="ocean-fcl">Ocean Freight — Full Container (FCL)</option>
            <option value="ocean-lcl">Ocean Freight — LCL Consolidation</option>
            <option value="air-freight">Air Cargo Velocity & Charters</option>
            <option value="customs-clearance">UAE Customs Clearance Only (Mirsal 2)</option>
            <option value="project-cargo">Project Cargo & Heavy Lift</option>
            <option value="warehousing-reexport">Free Zone Storage & Re-Export</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-300 uppercase tracking-wider mb-1.5">
            Incoterms® 2020 Protocol
          </label>
          <select
            name="incoterm"
            value={formData.incoterm}
            onChange={handleChange}
            className="w-full bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-3.5 py-3 text-white outline-none"
          >
            <option value="CIF">CIF — Cost, Insurance & Freight (Standard GCC)</option>
            <option value="FOB">FOB — Free On Board</option>
            <option value="EXW">EXW — Ex Works (Door Pickup)</option>
            <option value="DDP">DDP — Delivered Duty Paid (Turnkey Door)</option>
            <option value="DAP">DAP — Delivered At Place</option>
            <option value="CFR">CFR — Cost and Freight</option>
            <option value="FCA">FCA — Free Carrier</option>
          </select>
        </div>
      </div>

      {/* Origin & Destination */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300 uppercase tracking-wider mb-1.5">
            Port / City of Origin *
          </label>
          <input
            type="text"
            name="origin"
            required
            value={formData.origin}
            onChange={handleChange}
            placeholder="e.g. Shanghai, China (CNSHA)"
            className="w-full bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-3.5 py-3 text-white outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-300 uppercase tracking-wider mb-1.5">
            Port / City of Destination *
          </label>
          <input
            type="text"
            name="destination"
            required
            value={formData.destination}
            onChange={handleChange}
            placeholder="e.g. Jebel Ali Port, Dubai (AEJEA)"
            className="w-full bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-3.5 py-3 text-white outline-none"
          />
        </div>
      </div>

      {/* Cargo Dimensions (CBM & Weight) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-300 uppercase tracking-wider mb-1.5">
            Total Volume (CBM)
          </label>
          <input
            type="number"
            step="any"
            name="cbm"
            value={formData.cbm}
            onChange={handleChange}
            placeholder="e.g. 28.5"
            className="w-full bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-3.5 py-3 text-white outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-300 uppercase tracking-wider mb-1.5">
            Gross Weight (kg)
          </label>
          <input
            type="number"
            step="any"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="e.g. 18500"
            className="w-full bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-3.5 py-3 text-white outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-300 uppercase tracking-wider mb-1.5">
            Cargo Readiness Date
          </label>
          <input
            type="date"
            name="readyDate"
            value={formData.readyDate}
            onChange={handleChange}
            className="w-full bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-3.5 py-3 text-white outline-none"
          />
        </div>
      </div>

      {/* Commodity & Notes */}
      <div>
        <label className="block text-gray-300 uppercase tracking-wider mb-1.5">
          Commodity Description / HS Code
        </label>
        <input
          type="text"
          name="hsCodeOrCommodity"
          value={formData.hsCodeOrCommodity}
          onChange={handleChange}
          placeholder="e.g. Industrial Valves & Pumps (HS 8481.80) - Non-Hazmat"
          className="w-full bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-3.5 py-3 text-white outline-none"
        />
      </div>

      <div>
        <label className="block text-gray-300 uppercase tracking-wider mb-1.5">
          Special Handling / Storage Instructions
        </label>
        <textarea
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="e.g. Reefer temperature set at +4°C, requires Jebel Ali bonded warehousing for 14 days before re-export..."
          className="w-full bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-3.5 py-3 text-white outline-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row gap-4">
        <button
          type="submit"
          className="flex-1 btn-editorial-gold py-4 rounded text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2"
        >
          <span>Transmit Quotation Request</span>
          <i className="fa-solid fa-paper-plane text-[11px]" />
        </button>

        <a
          href={`https://wa.me/971553424700?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-4 rounded transition-colors inline-flex items-center justify-center gap-2"
        >
          <i className="fa-brands fa-whatsapp text-lg" />
          <span>Send via WhatsApp Desk</span>
        </a>
      </div>
    </form>
  );
}
