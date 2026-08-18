import Link from "next/link";
import { notFound } from "next/navigation";

interface Article {
  title: string;
  issue: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  content: string;
}

const articles: Record<string, Article> = {
  "navigating-global-shipping-challenges-2026": {
    title: "Navigating Global Shipping Challenges in 2026: Strategies for Resilient Supply Chains",
    issue: "DISPATCH N° 48",
    date: "March 24, 2026",
    author: "Capt. Tariq Al-Mansoor",
    readTime: "8 min read",
    category: "MARITIME GEOPOLITICS",
    content: `
      <p class="text-lg leading-relaxed mb-8 font-light text-slate-800">
        The global shipping industry in 2026 faces a convergence of challenges that would have seemed improbable just a decade ago. From tariff volatility and Red Sea rerouting to environmental compliance pressures, enterprise cargo owners must adapt with precision.
      </p>

      <h2 class="text-2xl md:text-3xl font-serif font-bold text-slate-950 mt-12 mb-4">The 2026 Shipping Landscape: Strategic Realities</h2>
      <p class="text-slate-700 leading-relaxed mb-6 font-sans">The container shipping industry is grappling with extended transit times, bunker fuel adjustments, and stricter customs clearance audits across GCC and Western ports.</p>
      
      <ul class="list-disc pl-6 mb-8 space-y-2 text-slate-700 font-sans text-sm">
        <li><strong>Red Sea rerouting</strong> adding 10 to 14 days around the Cape of Good Hope for European loops</li>
        <li><strong>Stricter UAE customs audits</strong> requiring precise HS code classifications under Mirsal 2</li>
        <li><strong>Environmental IMO 2030 targets</strong> driving fleet modernization surcharges</li>
        <li><strong>Warehouse capacity pressures</strong> in Jebel Ali Free Zone (JAFZA) and Dubai South</li>
      </ul>

      <h2 class="text-2xl md:text-3xl font-serif font-bold text-slate-950 mt-12 mb-4">The UAE Advantage: Sovereign Gateways</h2>
      <p class="text-slate-700 leading-relaxed mb-6 font-sans">For UAE-based importers and re-exporters, Dubai Maritime City and Jebel Ali Port offer unmatched multi-modal agility. By maintaining bonded warehousing and leveraging automated Sea-Air connections through DWC, shippers bypass maritime bottlenecks effectively.</p>

      <div class="border-l-4 border-[#C5A47E] pl-6 my-8 italic text-slate-800 bg-[#FBF9F5] p-6 rounded-r">
        "Resilient supply chains are not built on hope—they are built on verified documentation accuracy, dual-corridor redundancy, and direct on-ground brokerage presence at major maritime terminals."
      </div>
    `,
  },
};

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const article = articles[resolvedParams.slug] || articles["navigating-global-shipping-challenges-2026"];

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col bg-[#FBF9F5]">
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
              {article.issue || "DISPATCH N° 48"} • {article.category}
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
