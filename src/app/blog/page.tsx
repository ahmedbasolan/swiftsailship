import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import Image from "next/image";
import { Arrow } from "@/components/ui/arrow";
import { postPhotos, site } from "@/lib/site";

const title = "Freight and customs guides for UAE importers";
const description =
  "Plain guides to shipping through the UAE: customs clearance at Jebel Ali, FOB and CIF, sea freight against air freight, container types and duty exemptions.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/blog` },
  openGraph: { title, description, url: `${site.url}/blog` },
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
  {
    id: "sea-freight-vs-air-freight-cost-decision-framework",
    issue: "DISPATCH N° 45",
    title: "Sea Freight vs Air Freight: A Cost & Time Decision Framework for UAE Importers",
    date: "30 JANUARY 2026",
    category: "FREIGHT ECONOMICS",
    readTime: "7 MIN READ",
    author: "Cargo Economics Desk",
    excerpt:
      "A practical cost-per-kilo, transit-time, and cash-flow framework for choosing between sea freight and air freight into Dubai, Jebel Ali, and DWC — including when air is actually cheaper.",
  },
  {
    id: "choosing-the-right-container-type-uae-shipment",
    issue: "DISPATCH N° 44",
    title: "20ft GP, 40ft HC, Reefer, Flat Rack: Choosing the Right Container for Your UAE Shipment",
    date: "16 JANUARY 2026",
    category: "CONTAINER EQUIPMENT",
    readTime: "6 MIN READ",
    author: "Equipment & Packing Desk",
    excerpt:
      "A plain-language guide to container types available at Jebel Ali and Port Khalid — 20' GP, 40' GP, 40' HC, reefer, flat rack, open top, and RoRo — with the cargo each is built for.",
  },
  {
    id: "uae-customs-import-process-guide",
    issue: "DISPATCH N° 43",
    title: "UAE Customs Import Process: A Step-by-Step Guide to Clearing Cargo at Jebel Ali",
    date: "02 JANUARY 2026",
    category: "CUSTOMS COMPLIANCE",
    readTime: "8 MIN READ",
    author: "Logistics Regulatory Desk",
    excerpt:
      "From bill of lading to Mirsal 2 declaration and gate pass release — the exact sequence UAE importers follow to clear ocean cargo at Jebel Ali, with the documents customs actually checks.",
  },
];


/** "12 MARCH 2026" and "CUSTOMS COMPLIANCE" are stored in capitals; show them in sentence case. */
const sentence = (text: string) => text.charAt(0) + text.slice(1).toLowerCase();
const dateLabel = (text: string) => text.replace(/^0/, "").replace(/[A-Z]+/, (m) => m.charAt(0) + m.slice(1).toLowerCase());

const schema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
  ],
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Freight and customs guides"
        lead="Practical answers to the questions importers and exporters ask us most: how customs clearance works, which Incoterm to buy on, and when air freight beats sea."
      />

      <section className="section">
        <ul className="wrap rows">
          {dispatches.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blog/${post.id}`}
                className="group grid items-center gap-6 py-10 lg:grid-cols-12 lg:gap-6"
              >
                <div className="photo aspect-[4/3] lg:col-span-4">
                  <Image
                    src={postPhotos[post.id].src}
                    alt={postPhotos[post.id].alt}
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                  />
                </div>
                <div className="lg:col-span-7">
                  <p className="t-label">
                    {sentence(post.category)} · {dateLabel(post.date)}
                  </p>
                  <h2 className="t-h3 mt-3 font-display text-[1.5rem] lg:text-[1.75rem]">{post.title}</h2>
                  <p className="mt-3 text-ink-soft">{post.excerpt}</p>
                </div>
                <Arrow className="hidden justify-self-end text-accent transition-transform duration-200 group-hover:translate-x-1 lg:col-span-1 lg:block" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
