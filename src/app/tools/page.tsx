import type { Metadata } from "next";
import { NextStep } from "@/components/layout/journey";
import { PageHeader } from "@/components/layout/page-header";
import { CargoCalculator } from "@/components/tools/cargo-calculator";
import { CustomsDutyGuide } from "@/components/tools/customs-duty-guide";
import { IncotermsMatrix } from "@/components/tools/incoterms-matrix";
import { TradeCorridors } from "@/components/tools/trade-corridors";
import { photos, site, tools } from "@/lib/site";

const title = "CBM calculator, UAE duty guide and Incoterms";
const description =
  "Free shipping tools: a CBM and container calculator, a UAE customs duty and VAT guide, an Incoterms 2020 comparison and transit times from Jebel Ali.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/tools` },
  openGraph: { title, description, url: `${site.url}/tools` },
};

const sections = [
  {
    id: "calculator",
    heading: "CBM and container calculator",
    lead: "Enter the size, weight and number of your packages. You get the volume in cubic metres, the chargeable weight for air freight and the container that fits.",
    tool: <CargoCalculator />,
  },
  {
    id: "customs-guide",
    heading: "UAE customs duty and VAT guide",
    lead: "The duty rate, the 5% VAT and the documents Dubai Customs asks for, by type of goods.",
    tool: <CustomsDutyGuide />,
  },
  {
    id: "incoterms",
    heading: "Incoterms 2020 comparison",
    lead: "Who pays the freight and the insurance, and where the risk passes from seller to buyer, for each term.",
    tool: <IncotermsMatrix />,
  },
  {
    id: "corridors",
    heading: "Transit times from Jebel Ali",
    lead: "Typical sea and air transit times between the UAE and the main trade lanes. Carriers change schedules, so ask us for the current sailing.",
    tool: <TradeCorridors />,
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${site.url}/tools` },
      ],
    },
    {
      "@type": "WebApplication",
      name: "CBM and container calculator",
      url: `${site.url}/tools#calculator`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "AED" },
      provider: { "@id": `${site.url}/#business` },
    },
  ],
};

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        step={3}
        image={photos.berth}
        title="Shipping calculators and trade guides"
        lead="Four free tools for importers and exporters in the UAE. Work out the volume, the duty and the transit time, then send the result to us for a price."
      />

      <nav aria-label="Tools on this page" className="border-b border-line">
        <ul className="wrap flex flex-wrap gap-x-8 gap-y-1 py-4">
          {tools.map((t) => (
            <li key={t.id}>
              <a href={`#${t.id}`} className="link inline-flex h-11 items-center">
                {t.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {sections.map((s, i) => (
        <section key={s.id} id={s.id} className={`section ${i % 2 ? "ground-surface" : ""}`}>
          <div className="wrap">
            <h2 className="t-h2">{s.heading}</h2>
            <p className="t-lead muted measure mb-10 mt-4">{s.lead}</p>
            {s.tool}
          </div>
        </section>
      ))}

      <NextStep step={3} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
