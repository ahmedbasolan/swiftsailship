import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Arrow } from "@/components/ui/arrow";
import { photos, site } from "@/lib/site";

const title = "About Swift Sail Shipping, Dubai freight forwarder";
const description =
  "Swift Sail Shipping L.L.C. is a freight forwarder and customs broker in Abu Hail, Dubai, moving sea and air cargo to and from the UAE since 2011.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${site.url}/about` },
  openGraph: { title, description, url: `${site.url}/about` },
};

const principles = [
  {
    title: "Documents checked before the cargo lands",
    body: "We review the bill of lading, the certificate of origin, the commercial invoice and the tariff code before arrival. Most customs holds start with a document that does not match.",
  },
  {
    title: "Itemised prices",
    body: "Every quote lists sea or air freight, terminal handling, customs brokerage and local delivery on separate lines, so you can see what each part costs.",
  },
  {
    title: "One point of contact",
    body: "The office that quotes your shipment also books it, clears it and arranges the delivery.",
  },
];

const checks = [
  "Bills of lading, certificates of origin, commercial invoices and HS codes vetted before arrival",
  "Declarations filed through Dubai Customs' Mirsal 2 system",
  "MOIAT industrial duty exemptions for manufacturers that qualify",
  "Packing and paperwork for dangerous goods to IATA rules",
  "Verified gross mass (VGM) certificates for every export container",
];

const facts = [
  ["Company", site.legalName],
  ["Founded", `${site.founded}, in Abu Hail, Dubai`],
  ["Office", site.address],
  ["Hours", site.hours],
  ["Sea ports", "Jebel Ali, Port Khalid Sharjah, Khalifa Port"],
  ["Airports", "Dubai International (DXB), Dubai World Central (DWC)"],
] as const;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "About", item: `${site.url}/about` },
      ],
    },
    {
      "@type": "AboutPage",
      url: `${site.url}/about`,
      name: title,
      mainEntity: { "@id": `${site.url}/#business` },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        image={photos.warehouse}
        title={`A Dubai freight forwarder since ${site.founded}`}
        lead="Swift Sail Shipping L.L.C. started as a customs and freight desk in Abu Hail. It now handles sea freight, air freight, customs clearance and project cargo for importers, exporters and re-exporters."
      />

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-6">
            <h2 className="t-h2">What the company does</h2>
            <div className="mt-6 max-w-[58ch] space-y-5 text-ink-soft">
              <p>
                Most of our work is cargo coming into or passing through the UAE. We book the space with the shipping
                line or the airline, prepare the documents and file the customs declaration when the cargo arrives at
                Jebel Ali, Port Khalid, Khalifa Port or one of Dubai&apos;s two cargo airports.
              </p>
              <p>
                Customers are importers selling in the UAE, exporters shipping to the GCC, East Africa, the Indian
                Subcontinent and Europe, and traders who store goods in a free zone and re-export them.
              </p>
              <p>
                Outside the UAE we work with partner agents at the other end of each route, and stay your contact for
                the whole shipment.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="photo aspect-[4/3]">
              <Image
                src="/assets/img/jebel-ali-gantry-cranes-1600.webp"
                alt="Rows of container gantry cranes at Jebel Ali Port"
                fill
                sizes="(min-width: 1024px) 628px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section ground-surface">
        <div className="wrap">
          <h2 className="t-h2">How we work</h2>
          <div className="mt-12 grid gap-x-6 gap-y-10 lg:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p.title} className="border-t border-ink/25 pt-5">
                <span className="step-num">{i + 1}</span>
                <h3 className="t-h3 mt-4">{p.title}</h3>
                <p className="mt-3 text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <h2 className="t-h2">Customs and compliance checks</h2>
            <p className="t-lead muted mt-4">
              UAE imports pass through Dubai Customs and, for some goods, Dubai Municipality, TDRA or MOIAT. These are
              the checks we run on every shipment.
            </p>
          </div>
          <ul className="rows lg:col-span-6 lg:col-start-7">
            {checks.map((c) => (
              <li key={c} className="py-5">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section ground-surface">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <h2 className="t-h2">Company details</h2>
            <Link href={site.ctaHref} className="btn btn--primary mt-8">
              {site.cta}
              <Arrow />
            </Link>
          </div>
          <dl className="rows lg:col-span-6 lg:col-start-7">
            {facts.map(([term, value]) => (
              <div key={term} className="grid grid-cols-[112px_1fr] gap-4 py-5 sm:grid-cols-[160px_1fr]">
                <dt className="t-label pt-0.5">{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
