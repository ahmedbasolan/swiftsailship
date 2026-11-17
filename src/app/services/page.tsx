import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { NextStep } from "@/components/layout/journey";
import { PageHeader } from "@/components/layout/page-header";
import { Arrow } from "@/components/ui/arrow";
import { photos, site } from "@/lib/site";

const title = "Freight services in Dubai: sea, air and customs";
const description =
  "Freight services from Swift Sail Shipping in Dubai: FCL and LCL sea freight, air freight through DXB and DWC, UAE customs clearance and project cargo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/services` },
  openGraph: { title, description, url: `${site.url}/services` },
};

const catalogue = [
  {
    id: "ocean-freight",
    name: "Sea freight",
    quote: "ocean-freight",
    button: "Get a sea freight quote",
    intro:
      "Container shipping to and from Jebel Ali, Port Khalid in Sharjah and Khalifa Port in Abu Dhabi. We book the space with the shipping line, arrange the container and issue the bill of lading.",
    items: [
      ["Full container load (FCL)", "20ft and 40ft standard, 40ft high cube, flat rack and open top containers for your cargo alone."],
      ["Shared container (LCL)", "Smaller loads consolidated with other shippers, so you pay for the space you use."],
      ["Refrigerated containers", "Reefer containers for food, medicines and other goods that need a set temperature."],
      ["Port handling", "Terminal charges, delivery orders and trucking between the port and your warehouse."],
    ],
  },
  {
    id: "air-cargo",
    name: "Air freight",
    quote: "air-freight",
    button: "Get an air freight quote",
    intro:
      "Air cargo through Dubai International (DXB) and Dubai World Central (DWC) for goods that cannot wait for a vessel. We book the flight, prepare the air waybill and clear the cargo on arrival.",
    items: [
      ["Express air freight", "Space on the next available flight for urgent parts and documents."],
      ["Consolidated air freight", "A lower rate for cargo that can wait for a scheduled consolidation."],
      ["Temperature-controlled cargo", "Cool-chain handling for medicines and perishable food."],
      ["Dangerous goods", "Packing, labelling and the shipper's declaration to IATA rules."],
    ],
  },
  {
    id: "customs-clearance",
    name: "Customs clearance",
    quote: "customs-clearance",
    button: "Get a customs clearance quote",
    intro:
      "We file the declaration through Dubai Customs' Mirsal 2 system and deal with the inspections, so the cargo leaves the port without storage charges building up.",
    items: [
      ["Import for the local market", "The declaration, 5% duty and 5% VAT, and the gate pass."],
      ["Free zone and transit", "Transfers in and out of free zones such as JAFZA and DAFZA, and transit declarations."],
      ["Permits and inspections", "Approvals from Dubai Municipality, TDRA and MOIAT where the goods need them."],
      ["HS code classification", "The right tariff code before the cargo arrives, so the duty is correct the first time."],
    ],
  },
  {
    id: "breakbulk-project",
    name: "Project cargo",
    quote: "project-cargo",
    button: "Get a project cargo quote",
    intro:
      "Machinery, vehicles and other loads that do not fit a standard container. We plan the route, arrange the equipment and the road permits, and supervise the loading.",
    items: [
      ["Out-of-gauge containers", "Flat rack and open top containers for tall, wide or heavy pieces."],
      ["Roll-on, roll-off", "RoRo shipping for vehicles and wheeled machinery."],
      ["Heavy road transport", "Low-bed trailers, route surveys and road permits inside the UAE."],
      ["Lifting and lashing", "Crane hire and cargo securing checked before the vessel sails."],
    ],
  },
] as const;

const sectionPhoto: Record<string, { src: string; alt: string }> = {
  "ocean-freight": photos.aerial,
  "air-cargo": photos.air,
  "customs-clearance": photos.warehouse,
  "breakbulk-project": photos.gantry,
};

const faqs = [
  {
    q: "What is the difference between FCL and LCL sea freight?",
    a: "FCL (full container load) is a whole container for your cargo alone: 20ft, 40ft or 40ft high cube. LCL (less than container load) shares a container with other shippers, and usually suits loads under about 15 cubic metres because you pay only for the space you use.",
  },
  {
    q: "Do you handle air freight from Dubai and Sharjah?",
    a: "Yes. We book air cargo through Dubai International (DXB) and Dubai World Central (DWC), including express shipments, temperature-controlled cargo and dangerous goods packed to IATA rules.",
  },
  {
    q: "Can you clear customs and manage free zone transfers?",
    a: "Yes. We file import, export and transit declarations through Dubai Customs' Mirsal 2 system, handle transfers in and out of free zones, and apply for MOIAT industrial duty exemptions for manufacturers that qualify.",
  },
  {
    q: "What do you offer for cargo that does not fit a container?",
    a: "Flat rack and open top containers, roll-on roll-off shipping, low-bed trailers with the road permits, and crane hire for loading and unloading.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    ...catalogue.map((s) => ({
      "@type": "Service",
      "@id": `${site.url}/services#${s.id}`,
      name: s.name,
      serviceType: s.name,
      description: s.intro,
      url: `${site.url}/services#${s.id}`,
      provider: { "@id": `${site.url}/#business` },
      areaServed: ["AE", "GCC", "Middle East", "Africa", "Indian Subcontinent", "Europe"],
    })),
  ],
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        step={1}
        image={photos.ship}
        title="Freight services from Dubai"
        lead="Sea freight, air freight, customs clearance and project cargo, handled by one office in Abu Hail. Each service can be booked alone or as one door-to-door shipment."
      />

      {catalogue.map((s, i) => (
        <section key={s.id} id={s.id} className={`section ${i % 2 ? "ground-surface" : ""}`}>
          <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-5">
              <h2 className="t-h2">{s.name}</h2>
              <p className="t-lead muted mt-4 max-w-[46ch]">{s.intro}</p>
              <Link href={`/get-quote?service=${s.quote}`} className="btn btn--secondary mt-8">
                {s.button}
                <Arrow />
              </Link>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="photo aspect-[16/9]">
                <Image src={sectionPhoto[s.id].src} alt={sectionPhoto[s.id].alt} fill sizes="(min-width: 1024px) 628px, 100vw" />
              </div>
              <dl className="rows mt-6">
                {s.items.map(([term, text]) => (
                  <div key={term} className="py-5">
                    <dt className="t-h3 font-display">{term}</dt>
                    <dd className="mt-1.5 text-ink-soft">{text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      ))}

      <section id="faq" className="section">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-6">
          <h2 className="t-h2 lg:col-span-5">Questions about the services</h2>
          <dl className="rows lg:col-span-6 lg:col-start-7">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="t-h3 font-display">{f.q}</dt>
                <dd className="mt-2 text-ink-soft">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <NextStep step={1} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
