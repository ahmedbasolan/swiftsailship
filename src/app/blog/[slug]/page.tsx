import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Arrow } from "@/components/ui/arrow";
import { postPhotos, site } from "@/lib/site";

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
  "sea-freight-vs-air-freight-cost-decision-framework": {
    slug: "sea-freight-vs-air-freight-cost-decision-framework",
    title: "Sea Freight vs Air Freight: A Cost & Time Decision Framework for UAE Importers",
    description:
      "A practical cost-per-kilo, transit-time, and cash-flow framework for choosing between sea freight and air freight into Dubai, Jebel Ali, and DWC — including when air is actually cheaper.",
    issue: "DISPATCH N° 45",
    date: "30 JANUARY 2026",
    dateISO: "2026-01-30",
    author: "Cargo Economics Desk",
    readTime: "7 MIN READ",
    category: "FREIGHT ECONOMICS",
    content: `
      <p class="text-lg leading-relaxed mb-8 font-light text-slate-800">
        The sea-versus-air decision is rarely about the headline rate. For UAE importers, the real question is total landed cost per unit of time — freight, terminal handling, customs clearance, warehousing, and the cost of capital tied up in transit inventory.
      </p>

      <h2 class="text-2xl md:text-3xl font-serif font-bold text-slate-950 mt-12 mb-4">The Economics, Plainly</h2>
      <p class="text-slate-700 leading-relaxed mb-6 font-sans">As a rule of thumb, sea freight costs a fraction of air freight per kilo but adds two to six weeks of transit. That comparison only holds when your cargo can wait. For high-value, time-sensitive, or perishable goods — electronics, pharma, fashion, fresh food — air freight into DXB or DWC can be the cheaper option once financing, stockout, and spoilage costs are priced in.</p>

      <ul class="list-disc pl-6 mb-8 space-y-2 text-slate-700 font-sans text-sm">
        <li><strong>High volume, low value, no rush</strong> → ocean FCL or LCL via Jebel Ali (Khalifa and Port Khalid as alternatives)</li>
        <li><strong>High value per kilo or urgent</strong> → air freight via DXB/DWC, with Next-Flight-Out options</li>
        <li><strong>Mid-range and flexible</strong> → Sea-Air via Dubai World Central: the UAE&apos;s signature multimodal compromise</li>
        <li><strong>Seasonal or stockout risk</strong> → model the cost of lost sales, not just the freight rate</li>
      </ul>

      <h2 class="text-2xl md:text-3xl font-serif font-bold text-slate-950 mt-12 mb-4">Build the Decision Model</h2>
      <p class="text-slate-700 leading-relaxed mb-6 font-sans">Compare total landed cost: freight + insurance + terminal handling + customs brokerage + UAE storage + working-capital cost of transit days. Our cargo desk runs this model against live carrier loops and freighter allocations before recommending a routing — so the recommendation is economic, not habitual.</p>

      <div class="border-l-4 border-[#C5A47E] pl-6 my-8 italic text-slate-800 bg-[#FBF9F5] p-6 rounded-r">
        "Air is not expensive when the alternative is a lost sale. Sea is not cheap when the cargo sits in JAFZA accruing storage. Model the outcome, not the rate."
      </div>
    `,
  },
  "choosing-the-right-container-type-uae-shipment": {
    slug: "choosing-the-right-container-type-uae-shipment",
    title: "20ft GP, 40ft HC, Reefer, Flat Rack: Choosing the Right Container for Your UAE Shipment",
    description:
      "A plain-language guide to container types available at Jebel Ali and Port Khalid — 20' GP, 40' GP, 40' HC, reefer, flat rack, open top, and RoRo — with the cargo each is built for.",
    issue: "DISPATCH N° 44",
    date: "16 JANUARY 2026",
    dateISO: "2026-01-16",
    author: "Equipment & Packing Desk",
    readTime: "6 MIN READ",
    category: "CONTAINER EQUIPMENT",
    content: `
      <p class="text-lg leading-relaxed mb-8 font-light text-slate-800">
        Choosing the wrong container type is one of the most common—and most expensive—mistakes in UAE imports. It drives up freight cost per cubic meter, wastes usable volume, and can force an entire shipment onto a flat rack or open top you never budgeted for.
      </p>

      <h2 class="text-2xl md:text-3xl font-serif font-bold text-slate-950 mt-12 mb-4">The Standard Fleet</h2>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-slate-700 font-sans text-sm">
        <li><strong>20&apos; GP (General Purpose):</strong> ~33 CBM, ~28-ton payload. The workhorse for dense, heavy cargo.</li>
        <li><strong>40&apos; GP:</strong> ~67 CBM. Best for voluminous but lighter general cargo.</li>
        <li><strong>40&apos; HC (High Cube):</strong> ~76 CBM with ~30cm extra height. For tall pallets and racks.</li>
        <li><strong>45&apos; Pallet Wide:</strong> wider interior fits 33 Euro-pallets. Premium space, premium slots.</li>
        <li><strong>Reefer:</strong> temperature-controlled 20&apos; and 40&apos;. For pharma, food, and temperature-critical freight.</li>
        <li><strong>Flat rack &amp; open top:</strong> for out-of-gauge, machinery, and breakbulk cargo that cannot fit a box.</li>
      </ul>

      <h2 class="text-2xl md:text-3xl font-serif font-bold text-slate-950 mt-12 mb-4">Match the Box to the Cargo</h2>
      <p class="text-slate-700 leading-relaxed mb-6 font-sans">General rule: if your cargo weighs out before it fills — steel, stone, machinery — a 20&apos; GP is almost always right. If it fills before it weighs — furniture, plastics, garments — a 40&apos; HC maximizes volume. If it is tall, wide, or needs power, neither standard box works and you should flag the shipment to your forwarder before booking, so equipment and route engineering happen up front.</p>

      <div class="border-l-4 border-[#C5A47E] pl-6 my-8 italic text-slate-800 bg-[#FBF9F5] p-6 rounded-r">
        "A container booked by weight when the cargo is volumetric is money left on the carrier&apos;s table. Match the box to the cargo, not to the habit."
      </div>
    `,
  },
  "uae-customs-import-process-guide": {
    slug: "uae-customs-import-process-guide",
    title: "UAE Customs Import Process: A Step-by-Step Guide to Clearing Cargo at Jebel Ali",
    description:
      "From bill of lading to Mirsal 2 declaration and gate pass release — the exact sequence UAE importers follow to clear ocean cargo at Jebel Ali, with the documents customs actually checks.",
    issue: "DISPATCH N° 43",
    date: "02 JANUARY 2026",
    dateISO: "2026-01-02",
    author: "Logistics Regulatory Desk",
    readTime: "8 MIN READ",
    category: "CUSTOMS COMPLIANCE",
    content: `
      <p class="text-lg leading-relaxed mb-8 font-light text-slate-800">
        Clearing cargo through Dubai Customs at Jebel Ali is procedural, but the sequence matters. Get the order wrong and every step stalls — the vessel berths, the gate pass waits, and the importer pays for the delay. Here is the sequence our brokers execute daily.
      </p>

      <h2 class="text-2xl md:text-3xl font-serif font-bold text-slate-950 mt-12 mb-4">The Clearance Sequence</h2>
      <ul class="list-disc pl-6 mb-8 space-y-2 text-slate-700 font-sans text-sm">
        <li><strong>1. Pre-arrival documents:</strong> original Bill of Lading, commercial invoice, packing list, certificate of origin, HS classification confirmed</li>
        <li><strong>2. Mirsal 2 declaration:</strong> lodged electronically with Dubai Customs using your licensed broker&apos;s code</li>
        <li><strong>3. Duty &amp; VAT assessment:</strong> 5% VAT plus any applicable customs duty, or exemption proof (e.g., MOIAT) attached at lodgement</li>
        <li><strong>4. Inspection (if triggered):</strong> physical or document inspection coordinated to avoid demurrage windows</li>
        <li><strong>5. Gate pass &amp; release:</strong> VCC issuance and container collection from the terminal, with onward delivery or bonded storage</li>
      </ul>

      <h2 class="text-2xl md:text-3xl font-serif font-bold text-slate-950 mt-12 mb-4">What Actually Causes Holds</h2>
      <p class="text-slate-700 leading-relaxed mb-6 font-sans">In our experience, holds are rarely about the cargo — they are about the paperwork: mismatched HS codes between the invoice and the declaration, consignee name misalignment, missing certificate of origin, or a late-attached exemption reference. Each correction consumes terminal free time. That is why documentation vetting happens before the vessel berths, not after.</p>

      <div class="border-l-4 border-[#C5A47E] pl-6 my-8 italic text-slate-800 bg-[#FBF9F5] p-6 rounded-r">
        "Customs clearance is 90% preparation and 10% declaration. Prepare the file before the berth, and the gate pass follows the vessel off the quay."
      </div>
    `,
  },
};

/** Search results show about 155 characters; cut on a word and close the sentence. */
const clip = (text: string) =>
  text.length <= 158 ? text : text.slice(0, 155).replace(/[\s,;:—-]+\S*$/, "") + "...";

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
    title: { absolute: article.title },
    description: clip(article.description),
    alternates: {
      canonical: `https://www.swiftsailship.com/blog/${article.slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `https://www.swiftsailship.com/blog/${article.slug}`,
      publishedTime: article.dateISO,
      authors: [article.author],
      images: ["/assets/img/og-ship.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["/assets/img/og-ship.jpg"],
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
    author: { "@type": "Organization", name: "Swift Sail Shipping L.L.C.", url: site.url },
    publisher: { "@id": `${site.url}/#business` },
    mainEntityOfPage: `https://www.swiftsailship.com/blog/${article.slug}`,
    image: "https://www.swiftsailship.com/assets/img/og-ship.jpg",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${site.url}/blog/${article.slug}` },
    ],
  };

  const sentence = (text: string) => text.charAt(0) + text.slice(1).toLowerCase();
  const dateLabel = article.date.replace(/^0/, "").replace(/[A-Z]+/, (m) => m.charAt(0) + m.slice(1).toLowerCase());

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article>
        <header className="border-b border-line">
          <div className="wrap pb-14 pt-12 lg:pb-20 lg:pt-16">
            <Link href="/blog" className="link">
              All guides
            </Link>
            <h1 className="t-h1 mt-8 max-w-[24ch] !text-[clamp(2rem,2.4vw+1.2rem,3.5rem)]">{article.title}</h1>
            <p className="t-label mt-6">
              {sentence(article.category)} · <time dateTime={article.dateISO}>{dateLabel}</time> ·{" "}
              {article.readTime.toLowerCase()}
            </p>
          </div>
        </header>

        <div className="wrap pt-12 lg:pt-16">
          <div className="photo aspect-[16/9] sm:aspect-[21/9]">
            <Image
              src={postPhotos[article.slug].src}
              alt={postPhotos[article.slug].alt}
              fill
              priority
              sizes="(min-width: 1440px) 1280px, 100vw"
            />
          </div>
        </div>

        <div className="wrap pb-24 pt-12 lg:pt-16">
          <div className="article max-w-[68ch]" dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      </article>

      <section className="section ground-surface">
        <div className="wrap">
          <h2 className="t-h2">Prices for your shipment</h2>
          <p className="t-lead muted measure mt-4">
            Send the route, the weight and the volume. We reply with an itemised price within two business hours.
          </p>
          <Link href={site.ctaHref} className="btn btn--primary mt-8">
            {site.cta}
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
