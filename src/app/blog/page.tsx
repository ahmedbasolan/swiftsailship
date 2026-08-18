import Link from "next/link";
import { Metadata } from "next";
import { NewsletterForm } from "@/components/newsletter-form";

export const metadata: Metadata = {
  title: "Dispatch Journal • Trade Intelligence | Swift Sail Shipping L.L.C.",
  description:
    "Authoritative analysis on Red Sea routing, UAE customs updates, GCC tariffs, freight rate indices, and maritime supply chain developments.",
  alternates: {
    canonical: "https://www.swiftsailship.com/blog",
  },
  openGraph: {
    type: "website",
    title: "Dispatch Journal • Trade Intelligence | Swift Sail Shipping L.L.C.",
    description:
      "Authoritative analysis on Red Sea routing, UAE customs updates, GCC tariffs, freight rate indices, and maritime supply chain developments.",
    url: "https://www.swiftsailship.com/blog",
    images: ["/assets/img/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dispatch Journal • Trade Intelligence | Swift Sail Shipping L.L.C.",
    description:
      "Authoritative analysis on Red Sea routing, UAE customs updates, GCC tariffs, freight rate indices, and maritime supply chain developments.",
    images: ["/assets/img/og-default.jpg"],
  },
};

const dispatches = [
  {
    id: "navigating-arabian-gulf-red-sea-maritime-corridors-2026",
    issue: "DISPATCH N° 48",
    title: "Navigating Arabian Gulf & Red Sea Maritime Corridors in 2026",
    date: "12 MARCH 2026",
    category: "MARITIME GEOPOLITICS",
    readTime: "7 MIN READ",
    author: "Capt. Tariq Al-Mansoor",
    excerpt:
      "A strategic operational assessment of Cape of Good Hope rerouting vs. convoy escorting through the Bab-el-Mandeb, with updated bunker fuel index impact on Jebel Ali container freight rates.",
  },
  {
    id: "mastering-moiat-industrial-duty-exemptions-uae-mirsal-2",
    issue: "DISPATCH N° 47",
    title: "Mastering MOIAT Industrial Duty Exemptions under UAE Mirsal 2",
    date: "28 FEBRUARY 2026",
    category: "CUSTOMS COMPLIANCE",
    readTime: "5 MIN READ",
    author: "Logistics Regulatory Desk",
    excerpt:
      "How UAE manufacturing entities can legally claim 0% customs duty waiver on imported machinery and raw industrial materials prior to port gate pass release.",
  },
  {
    id: "fob-vs-cif-mitigating-demurrage-risk-gcc-importers",
    issue: "DISPATCH N° 46",
    title: "FOB vs. CIF: Mitigating Demurrage Risk for GCC Importers",
    date: "14 FEBRUARY 2026",
    category: "TRADE LAW & CONTRACTS",
    readTime: "6 MIN READ",
    author: "Trade Advisory Group",
    excerpt:
      "Why relying blindly on CIF terms can expose buyers to uncoordinated carrier detention charges at Jebel Ali Port, and how FOB booking provides total demurrage transparency.",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col bg-[#FBF9F5]">
      {/* Editorial Header */}
      <header className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#070E18] text-white border-b border-[#C5A47E]/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="editorial-stamp text-[#C5A47E]">
              MARITIME CHRONICLE • ISSUE ARCHIVE
            </span>
            <span className="text-xs font-mono text-gray-400">
              TRADE INTELLIGENCE & ADVISORY
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight mb-6">
            Dispatch Journal & <br />
            <span className="gold-gradient-text">Trade Intelligence</span>
          </h1>

          <p className="text-lg text-gray-300 font-sans font-light max-w-3xl leading-relaxed">
            Essential operational briefings, regulatory breakdowns, and supply chain analysis written by practicing maritime and customs officers in Dubai.
          </p>
        </div>
      </header>

      {/* Main Journal Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="space-y-12">
          {dispatches.map((dispatch) => (
            <article
              key={dispatch.id}
              className="bg-white border border-gray-300 rounded-lg p-8 sm:p-12 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-200 mb-6 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <span className="text-[#A37F55] font-bold">{dispatch.issue}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{dispatch.category}</span>
                </div>
                <div className="text-gray-500">
                  <span>{dispatch.date}</span>
                  <span className="mx-2">•</span>
                  <span>{dispatch.readTime}</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mb-4">
                <Link
                  href={`/blog/${dispatch.id}`}
                  className="hover:text-[#A37F55] transition-colors"
                >
                  {dispatch.title}
                </Link>
              </h2>

              <p className="text-slate-700 font-sans text-sm sm:text-base leading-relaxed mb-6">
                {dispatch.excerpt}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 text-xs font-mono">
                <span className="text-gray-500">Author: {dispatch.author}</span>
                <Link
                  href={`/blog/${dispatch.id}`}
                  className="text-[#A37F55] font-bold uppercase tracking-wider hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Read Full Dispatch</span>
                  <i className="fa-solid fa-arrow-right text-[10px]" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter / Bulletin Subscription */}
        <div className="mt-20 p-8 sm:p-12 bg-[#070E18] text-white rounded-lg border border-[#C5A47E]/30 text-center space-y-6">
          <span className="editorial-stamp text-[#C5A47E]">
            MARITIME INTELLIGENCE CIRCULAR
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Receive Weekly Gulf Shipping & Regulatory Bulletins
          </h3>
          <p className="text-sm text-gray-300 max-w-xl mx-auto font-sans leading-relaxed">
            Directly to your inbox: fuel surcharges, port congestion indices, and UAE customs tariff notifications.
          </p>

          <NewsletterForm />
        </div>
      </main>
    </div>
  );
}
