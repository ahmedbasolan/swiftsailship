import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Article {
  slug: string;
  title: string;
  description: string;
  issue: string;
  date: string;
  dateISO: string;
  author: string;
  readTime: string;
  category: string;
  content: string;
}

const articles: Record<string, Article> = {
  "navigating-arabian-gulf-red-sea-maritime-corridors-2026": {
    slug: "navigating-arabian-gulf-red-sea-maritime-corridors-2026",
    title: "Navigating Arabian Gulf & Red Sea Maritime Corridors in 2026",
    description:
      "A strategic operational assessment of Cape of Good Hope rerouting vs. convoy escorting through the Bab-el-Mandeb, with bunker fuel index impact on Jebel Ali container freight rates.",
    issue: "DISPATCH N° 48",
    date: "12 MARCH 2026",
    dateISO: "2026-03-12",
    author: "Capt. Tariq Al-Mansoor",
    readTime: "7 MIN READ",
    category: "MARITIME GEOPOLITICS",
    content: `
      <p class="text-lg leading-relaxed mb-8 font-light text-slate-800">
        The Red Sea corridor in 2026 remains the single most volatile choke point in global container shipping. Between sustained Bab-el-Mandeb disruption and the structural shift toward longer Cape of Good Hope routings, cargo owners must reassess their transit assumptions for Gulf and European trade lanes.
      </p>

      <h2 class="text-2xl md:text-3xl font-serif font-bold text-slate-950 mt-12 mb-4">The 2026 Routing Reality</h2>
      <p class="text-slate-700 leading-relaxed mb-6 font-sans">Extended Cape of Good Hope diversions add roughly 10 to 14 days per European loop, directly inflating transit times and repositioning costs into Jebel Ali, Port Khalid, and Khalifa Port. This is no longer a contingency—it is the operative baseline.</p>

      <ul class="list-disc pl-6 mb-8 space-y-2 text-slate-700 font-sans text-sm">
        <li><strong>Red Sea rerouting</strong> adding 10 to 14 days around the Cape of Good Hope for European loops</li>
        <li><strong>Bunker fuel index pressure</strong> translating into higher BAF surcharges applied at UAE ports</li>
        <li><strong>Convoy escorting</strong> under active assessment but subject to persistent security volatility</li>
        <li><strong>Warehouse capacity pressures</strong> in Jebel Ali Free Zone (JAFZA) and Dubai South as dwell times lengthen</li>
      </ul>

      <h2 class="text-2xl md:text-3xl font-serif font-bold text-slate-950 mt-12 mb-4">What Shippers Should Do Now</h2>
      <p class="text-slate-700 leading-relaxed mb-6 font-sans">For UAE-based importers and re-exporters, the mitigation is dual-corridor redundancy: pre-book space on both direct Gulf loops and Cape-routed alternatives, maintain bonded warehousing in JAFZA, and leverage Sea-Air connections through Dubai World Central (DWC) to recover schedule slack.</p>

      <div class="border-l-4 border-[#C5A47E] pl-6 my-8 italic text-slate-800 bg-[#FBF9F5] p-6 rounded-r">
        "Resilient supply chains are not built on hope—they are built on verified documentation accuracy, dual-corridor redundancy, and direct on-ground brokerage presence at major maritime terminals."
      </div>
    `,
  },
  "mastering-moiat-industrial-duty-exemptions-uae-mirsal-2": {
    slug: "mastering-moiat-industrial-duty-exemptions-uae-mirsal-2",
    title: "Mastering MOIAT Industrial Duty Exemptions under UAE Mirsal 2",
    description:
      "How UAE manufacturing entities can legally claim 0% customs duty waiver on imported machinery and raw industrial materials prior to port gate pass release.",
    issue: "DISPATCH N° 47",
    date: "28 FEBRUARY 2026",
    dateISO: "2026-02-28",
    author: "Logistics Regulatory Desk",
    readTime: "5 MIN READ",
    category: "CUSTOMS COMPLIANCE",
    content: `
      <p class="text-lg leading-relaxed mb-8 font-light text-slate-800">
        UAE manufacturers frequently overpay customs duty on imported machinery and raw materials that are legally eligible for 0% industrial exemption. Under the Mirsal 2 digital platform, the exemption is procedural—but only when documentation is prepared before the vessel berths.
      </p>

      <h2 class="text-2xl md:text-3xl font-serif font-bold text-slate-950 mt-12 mb-4">How MOIAT Exemption Works</h2>
      <p class="text-slate-700 leading-relaxed mb-6 font-sans">The Ministry of Industry and Advanced Technology (MOIAT) issues industrial exemption certificates for capital equipment, production machinery, spare parts, and raw materials imported for licensed manufacturing. Once approved and registered in Mirsal 2, the importer is entitled to a full customs duty waiver—provided the exemption reference is attached to the customs declaration at lodgement time.</p>

      <ul class="list-disc pl-6 mb-8 space-y-2 text-slate-700 font-sans text-sm">
        <li><strong>Timing is critical:</strong> exemption must be linked to the declaration before gate pass release</li>
        <li><strong>Documentation:</strong> industrial license, purchase invoices, packing list, and certificate of origin</li>
        <li><strong>Free zone nuance:</strong> inward/outward transfers require separate filing within Mirsal 2</li>
        <li><strong>Post-clearance audits:</strong> retain records for potential FCA verification</li>
      </ul>

      <h2 class="text-2xl md:text-3xl font-serif font-bold text-slate-950 mt-12 mb-4">Avoiding the Rejection Trap</h2>
      <p class="text-slate-700 leading-relaxed mb-6 font-sans">Most exemption claims are rejected on procedural grounds: mismatched HS codes between the certificate and the declaration, late attachment, or missing consignee alignment. Working with an in-house licensed customs broker directly connected to Mirsal 2 minimizes these rejection cycles and protects your duty refund window.</p>

      <div class="border-l-4 border-[#C5A47E] pl-6 my-8 italic text-slate-800 bg-[#FBF9F5] p-6 rounded-r">
        "A duty exemption that is filed late is a duty exemption that is lost. The Mirsal 2 declaration must carry the MOIAT reference at lodgement—not after the gate pass."
      </div>
    `,
  },
  "fob-vs-cif-mitigating-demurrage-risk-gcc-importers": {
    slug: "fob-vs-cif-mitigating-demurrage-risk-gcc-importers",
    title: "FOB vs. CIF: Mitigating Demurrage Risk for GCC Importers",
    description:
      "Why relying blindly on CIF terms can expose buyers to uncoordinated carrier detention charges at Jebel Ali Port, and how FOB booking provides total demurrage transparency.",
    issue: "DISPATCH N° 46",
    date: "14 FEBRUARY 2026",
    dateISO: "2026-02-14",
    author: "Trade Advisory Group",
    readTime: "6 MIN READ",
    category: "TRADE LAW & CONTRACTS",
    content: `
      <p class="text-lg leading-relaxed mb-8 font-light text-slate-800">
        CIF terms transfer risk at the port of origin, but they transfer control of the shipping process to the seller. For GCC importers, that division of responsibility frequently surfaces as uncoordinated detention and demurrage charges at Jebel Ali and other UAE terminals.
      </p>

      <h2 class="text-2xl md:text-3xl font-serif font-bold text-slate-950 mt-12 mb-4">The CIF Blind Spot</h2>
      <p class="text-slate-700 leading-relaxed mb-6 font-sans">Under CIF, the seller selects the carrier, books the vessel, and manages the freight—yet the buyer bears the risk of late container release and the resulting terminal charges. When seller-controlled carriers operate on schedules the buyer never approved, detention liability accrues against the importer's customs code.</p>

      <ul class="list-disc pl-6 mb-8 space-y-2 text-slate-700 font-sans text-sm">
        <li><strong>Carrier selection:</strong> FOB lets the buyer contract directly with vetted lines serving Jebel Ali</li>
        <li><strong>Free time:</strong> negotiated at booking, not inherited from a seller's cost-optimized routing</li>
        <li><strong>Visibility:</strong> direct bill of lading control and real-time customs integration</li>
        <li><strong>Demurrage:</strong> fully attributable and negotiable when you own the booking</li>
      </ul>

      <h2 class="text-2xl md:text-3xl font-serif font-bold text-slate-950 mt-12 mb-4">Why FOB Booking Wins for GCC Importers</h2>
      <p class="text-slate-700 leading-relaxed mb-6 font-sans">FOB booking restores three things CIF erodes: choice of carrier, control of free time, and accountability for charges. With an in-house brokerage filing the Mirsal 2 declaration the same day the vessel berths, free-time utilization becomes a managed metric rather than a lottery.</p>

      <div class="border-l-4 border-[#C5A47E] pl-6 my-8 italic text-slate-800 bg-[#FBF9F5] p-6 rounded-r">
        "Every day of unmanaged terminal dwell is a direct charge against the importer's margin. Own the booking, own the timeline, own the cost."
      </div>
    `,
  },
};

export function generateStaticParams() {
  return Object.values(articles).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `https://www.swiftsailship.com/blog/${article.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${article.title} | Swift Sail Shipping L.L.C.`,
      description: article.description,
      url: `https://www.swiftsailship.com/blog/${article.slug}`,
      publishedTime: article.dateISO,
      authors: [article.author],
      images: ["/assets/img/og-default.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Swift Sail Shipping L.L.C.`,
      description: article.description,
      images: ["/assets/img/og-default.jpg"],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const article = articles[resolvedParams.slug];

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.dateISO,
    author: { "@type": "Organization", name: article.author },
    publisher: { "@type": "Organization", name: "Swift Sail Shipping L.L.C." },
    mainEntityOfPage: `https://www.swiftsailship.com/blog/${article.slug}`,
    image: "https://www.swiftsailship.com/assets/img/og-default.jpg",
  };

  return (
    <div className="flex flex-col bg-[#FBF9F5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Article Header */}
      <header className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-[#070E18] text-white border-b border-[#C5A47E]/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-xs font-mono text-[#C5A47E] mb-6 hover:text-white transition-colors"
          >
            <i className="fa-solid fa-arrow-left mr-2" /> Back to Dispatch Journal
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="editorial-stamp text-[#C5A47E]">
              {article.issue} • {article.category}
            </span>
            <span className="text-gray-400 text-xs font-mono">
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-6">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-xs font-mono text-gray-400 pt-2 border-t border-gray-800">
            <span>Date: {article.date}</span>
            <span>•</span>
            <span>Author: {article.author}</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <article className="bg-white border border-gray-300 rounded-lg p-8 sm:p-14 shadow-sm">
          <div
            className="prose prose-slate max-w-none font-sans"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <span className="text-slate-600">
              Published by Swift Sail Trade Intelligence Desk, Dubai
            </span>
            <Link
              href="/get-quote"
              className="btn-editorial-gold px-6 py-3 rounded text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
            >
              <span>Consult Our Trade Officers</span>
              <i className="fa-solid fa-arrow-right text-[10px]" />
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}