"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "@/lib/site";

const serviceModes = [
  ["ocean-fcl", "Sea freight, full container (FCL)"],
  ["ocean-lcl", "Sea freight, shared container (LCL)"],
  ["air-freight", "Air freight"],
  ["customs-clearance", "UAE customs clearance only"],
  ["project-cargo", "Project cargo"],
  ["warehousing-reexport", "Free zone storage and re-export"],
] as const;

const incoterms = [
  ["CIF", "CIF: cost, insurance and freight"],
  ["FOB", "FOB: free on board"],
  ["EXW", "EXW: ex works"],
  ["DDP", "DDP: delivered duty paid"],
  ["DAP", "DAP: delivered at place"],
  ["CFR", "CFR: cost and freight"],
  ["FCA", "FCA: free carrier"],
  ["unsure", "Not sure yet"],
] as const;

/** A service id from another page's link, mapped to this form's options. */
const serviceAlias: Record<string, string> = { "ocean-freight": "ocean-fcl" };

const fieldClass =
  "h-12 w-full rounded-lg border border-ink/25 bg-white px-3.5 text-base text-ink outline-none transition-colors focus:border-accent aria-[invalid=true]:border-[#b3261e]";
const labelClass = "mb-1.5 block text-sm font-medium text-ink";

type Field = "name" | "email" | "phone" | "origin" | "destination";

const required: Record<Field, string> = {
  name: "Write your name",
  email: "Write an email address with an @",
  phone: "Write a phone number with its country code",
  origin: "Write the port or city the cargo leaves from",
  destination: "Write the port or city the cargo goes to",
};

export default function QuoteForm() {
  const searchParams = useSearchParams();

  // Pre-filled from the link that brought the visitor here (a calculator result, a service page).
  const [formData, setFormData] = useState(() => {
    const get = (key: string) => searchParams.get(key) || "";
    const service = get("service");
    return {
      name: "",
      email: "",
      phone: "",
      company: "",
      serviceMode: service
        ? serviceAlias[service] || service
        : get("mode") === "air"
          ? "air-freight"
          : "ocean-fcl",
      incoterm: get("incoterm") || "CIF",
      origin: get("origin"),
      destination: get("destination"),
      cbm: get("cbm"),
      weight: get("weight"),
      readyDate: "",
      hsCodeOrCommodity: "",
      notes: "",
    };
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const next: Partial<Record<Field, string>> = {};
    (Object.keys(required) as Field[]).forEach((key) => {
      const value = formData[key].trim();
      if (!value || (key === "email" && !/^\S+@\S+\.\S+$/.test(value))) next[key] = required[key];
    });
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      document.getElementById(`quote-${first}`)?.focus();
      const count = Object.keys(next).length;
      setStatus(`${count} ${count === 1 ? "field needs" : "fields need"} a look before this can be sent.`);
      return false;
    }
    return true;
  };

  const label = (list: readonly (readonly [string, string])[], value: string) =>
    list.find(([v]) => v === value)?.[1] ?? value;

  const lines = [
    `Name: ${formData.name}`,
    formData.company && `Company: ${formData.company}`,
    `Email: ${formData.email}`,
    `Phone: ${formData.phone}`,
    `Service: ${label(serviceModes, formData.serviceMode)}`,
    `Incoterm: ${label(incoterms, formData.incoterm)}`,
    `From: ${formData.origin}`,
    `To: ${formData.destination}`,
    formData.cbm && `Volume: ${formData.cbm} CBM`,
    formData.weight && `Gross weight: ${formData.weight} kg`,
    formData.readyDate && `Cargo ready: ${formData.readyDate}`,
    formData.hsCodeOrCommodity && `Goods: ${formData.hsCodeOrCommodity}`,
    formData.notes && `Notes: ${formData.notes}`,
  ].filter(Boolean);

  // The request leaves through the visitor's own WhatsApp or mail app, so nothing
  // is shown as sent until they have sent it themselves.
  const send = (channel: "whatsapp" | "email") => {
    if (!validate()) return;
    const body = ["Freight quote request", "", ...lines].join("\n");
    if (channel === "whatsapp") {
      window.open(`${site.whatsappHref}?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer");
      setStatus("WhatsApp has opened with your request. Press send there to reach us.");
    } else {
      window.location.href = `${site.emailHref}?subject=${encodeURIComponent(
        `Freight quote request: ${formData.origin} to ${formData.destination}`
      )}&body=${encodeURIComponent(body)}`;
      setStatus("Your mail app has opened with your request. Press send there to reach us.");
    }
  };

  const text = (
    name: keyof typeof formData,
    labelText: string,
    props: React.InputHTMLAttributes<HTMLInputElement> = {}
  ) => {
    const error = errors[name as Field];
    return (
      <div>
        <label htmlFor={`quote-${name}`} className={labelClass}>
          {labelText}
        </label>
        <input
          id={`quote-${name}`}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `quote-${name}-error` : undefined}
          className={fieldClass}
          {...props}
        />
        {error && (
          <p id={`quote-${name}-error`} className="mt-1.5 text-sm text-[#b3261e]">
            {error}
          </p>
        )}
      </div>
    );
  };

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        send("whatsapp");
      }}
      className="space-y-10"
    >
      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="t-h3 mb-5 font-display">Your details</legend>
        {text("name", "Full name", { autoComplete: "name" })}
        {text("company", "Company (optional)", { autoComplete: "organization" })}
        {text("email", "Email", { type: "email", autoComplete: "email" })}
        {text("phone", "Phone, with country code", { type: "tel", autoComplete: "tel" })}
      </fieldset>

      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="t-h3 mb-5 font-display">The shipment</legend>
        <div>
          <label htmlFor="quote-serviceMode" className={labelClass}>
            Service
          </label>
          <select
            id="quote-serviceMode"
            name="serviceMode"
            value={formData.serviceMode}
            onChange={handleChange}
            className={fieldClass}
          >
            {serviceModes.map(([value, name]) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quote-incoterm" className={labelClass}>
            Incoterm
          </label>
          <select
            id="quote-incoterm"
            name="incoterm"
            value={formData.incoterm}
            onChange={handleChange}
            className={fieldClass}
          >
            {incoterms.map(([value, name]) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
          </select>
        </div>
        {text("origin", "From (port or city)")}
        {text("destination", "To (port or city)")}
      </fieldset>

      <fieldset className="grid gap-5 sm:grid-cols-3">
        <legend className="t-h3 mb-5 font-display">The cargo</legend>
        {text("cbm", "Volume in CBM (optional)", { inputMode: "decimal" })}
        {text("weight", "Gross weight in kg (optional)", { inputMode: "decimal" })}
        {text("readyDate", "Cargo ready date (optional)", { type: "date" })}
        <div className="sm:col-span-3">
          {text("hsCodeOrCommodity", "What the goods are, or the HS code (optional)")}
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="quote-notes" className={labelClass}>
            Anything else we should know (optional)
          </label>
          <textarea
            id="quote-notes"
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            className={`${fieldClass} h-auto py-3`}
          />
        </div>
      </fieldset>

      <div>
        <div className="btn-row flex flex-col gap-3 sm:flex-row">
          <button type="submit" className="btn btn--primary">
            Send the request on WhatsApp
          </button>
          <button type="button" onClick={() => send("email")} className="btn btn--secondary">
            Send the request by email
          </button>
        </div>
        <p role="status" className="mt-4 min-h-6 text-ink">
          {status}
        </p>
        <p className="mt-1 text-sm text-ink-soft">
          We reply within two business hours during office hours: {site.hours}, Dubai time.
        </p>
      </div>
    </form>
  );
}
