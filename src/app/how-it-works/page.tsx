import type { Metadata } from "next";
import { NextStep } from "@/components/layout/journey";
import { PageHeader } from "@/components/layout/page-header";
import { photos, site } from "@/lib/site";

const title = "How freight forwarding works, in six stages";
const description =
  "The six stages of a shipment with Swift Sail Shipping: quote, booking, export documents, transit, UAE customs clearance and delivery to your door.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/how-it-works` },
  openGraph: { title, description, url: `${site.url}/how-it-works` },
};

const stages = [
  {
    title: "Quote and route",
    summary:
      "We look at the weight, the volume, the tariff code and any hazard class, then match the cargo to a carrier and a transit time.",
    details: [
      "Volume (CBM) and container plan",
      "Sea FCL, sea LCL and air compared",
      "Incoterm agreed: FOB, CIF, EXW or DDP",
      "An itemised quote",
    ],
  },
  {
    title: "Booking",
    summary: "We confirm the space with the shipping line or the airline and release the container.",
    details: [
      "Container release order",
      "Empty container collected from the depot",
      "Loading supervised at the factory or warehouse",
      "Verified gross mass (VGM) certificate",
    ],
  },
  {
    title: "Export documents",
    summary: "We prepare the documents the origin country and the UAE both ask for.",
    details: [
      "Export declaration at origin",
      "Bill of lading or air waybill draft",
      "Certificate of origin attested by the chamber of commerce",
      "Commercial invoice and packing list",
    ],
  },
  {
    title: "Transit",
    summary: "We track the vessel or the flight and tell you when the dates change.",
    details: [
      "Departure, transhipment and arrival updates",
      "Temperature records for reefer cargo",
      "Arrival notice sent to the consignee",
      "Documents sent ahead for pre-clearance",
    ],
  },
  {
    title: "UAE customs clearance",
    summary: "On arrival at Jebel Ali, Port Khalid or the air cargo terminal we file the declaration and pay the duty.",
    details: [
      "Declaration filed in Dubai Customs' Mirsal 2 system",
      "5% duty and 5% VAT settled",
      "Dubai Municipality or TDRA inspection arranged",
      "Customs gate pass issued",
    ],
  },
  {
    title: "Delivery",
    summary: "We collect the cargo from the terminal and deliver it anywhere in the UAE or onward into the GCC.",
    details: [
      "Delivery order and terminal charges settled",
      "Truck or low-bed trailer to your warehouse",
      "Unloading supervised",
      "Signed proof of delivery",
    ],
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Process", item: `${site.url}/how-it-works` },
      ],
    },
    {
      "@type": "HowTo",
      name: "How a shipment moves with Swift Sail Shipping",
      step: stages.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.title,
        text: s.summary,
      })),
    },
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        step={2}
        image={photos.gantry}
        title="Six stages from quote to delivery"
        lead="What happens to a shipment, in order, and what you receive from us at each stage."
      />

      <section className="section">
        <ol className="wrap rows">
          {stages.map((stage, i) => (
            <li key={stage.title} className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-6">
              <div className="lg:col-span-5">
                <span className="step-num">{i + 1}</span>
                <h2 className="t-h2 mt-3">{stage.title}</h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="t-lead">{stage.summary}</p>
                <ul className="mt-5 grid gap-x-6 gap-y-2 text-ink-soft sm:grid-cols-2">
                  {stage.details.map((d) => (
                    <li key={d} className="border-t border-line pt-2">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <NextStep step={2} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
