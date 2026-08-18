"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  if (subscribed) {
    return (
      <div className="p-4 bg-emerald-950/50 border border-emerald-500/40 rounded text-xs font-mono text-emerald-400">
        <i className="fa-solid fa-check mr-2" />
        Subscription confirmed. You will receive the next Gulf Shipping & Customs Bulletin.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="procurement@company.com"
        className="flex-1 bg-[#112236] border border-gray-700 focus:border-[#C5A47E] rounded px-4 py-3 text-xs font-mono text-white outline-none"
      />
      <button
        type="submit"
        className="btn-editorial-gold px-6 py-3 rounded text-xs font-bold uppercase tracking-wider"
      >
        Subscribe
      </button>
    </form>
  );
}
