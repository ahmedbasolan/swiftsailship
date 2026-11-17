import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { RouteBoard } from "@/components/route-board";
import { Arrow } from "@/components/ui/arrow";
import { site, tools } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Swift Sail Shipping: freight forwarder in Dubai, UAE" },
  description:
    "Sea freight, air freight, UAE customs clearance and project cargo from Dubai. Send your cargo details and get an itemised quote within two business hours.",
  alternates: { canonical: site.url },
};

const serviceCards = [
  {
    id: "ocean-freight",
    name: "Sea freight",
    line: "Full and shared containers through Jebel Ali, Port Khalid and Khalifa Port.",
    image: "/assets/img/container-ship-aerial-1920.webp",
    alt: "A loaded container ship under way, seen from the air",
  },
  {
    id: "air-cargo",
    name: "Air freight",
    line: "Express and scheduled cargo through Dubai International and Dubai World Central.",
    image: "/assets/img/air-freighter-loading-1600.webp",
    alt: "A freighter aircraft with its nose open beside a cargo loader",
  },
  {
    id: "customs-clearance",
    name: "Customs clearance",
    line: "Declarations filed through Dubai Customs' Mirsal 2 system, with storage if you need it.",
    image: "/assets/img/warehouse-pallet-racks-1600.webp",
    alt: "Palletised cargo and racking inside a freight warehouse",
  },
  {
    id: "breakbulk-project",
    name: "Project cargo",
    line: "Oversized and heavy loads on flat racks, open tops and low-bed trailers.",
    image: "/assets/img/jebel-ali-gantry-cranes-1600.webp",
    alt: "Rows of container gantry cranes at Jebel Ali Port",
  },
];

const steps = [
  { title: "Send the cargo details", body: "Tell us the route, the weight, the volume and what the goods are." },
  { title: "Get an itemised quote", body: "Freight, port charges, customs fees and delivery, each on its own line." },
  { title: "We book and document", body: "Carrier space, the bill of lading or air waybill, and the certificate of origin." },
  { title: "Cleared and delivered", body: "We file the customs declaration, settle the duty and truck the cargo to your door." },
];

const audiences = [
  ["Importers", "Selling in the UAE and need the cargo cleared, taxed and delivered."],
  ["Exporters and re-exporters", "Shipping to the GCC, East Africa, the Indian Subcontinent or Europe."],
  ["Manufacturers", "Importing machinery and materials, with MOIAT duty exemptions where they apply."],
];

const documents = [
  "Bill of lading",
  "Air waybill",
  "Certificate of origin",
  "Commercial invoice",
  "Packing list",
  "Customs declaration",
  "Gate pass",
  "Delivery order",
];

const faqs = [
  {
    q: "How fast do I get a quote?",
    a: "Within two business hours during office hours, Monday to Friday 08:00 to 18:00 and Saturday 09:00 to 14:00, Dubai time.",
  },
  {
    q: "What do you need from me to quote?",
    a: "The origin and destination, what the goods are, the total weight and volume, the number of packages and the Incoterm you are buying or selling on.",
  },
  {
    q: "Do you clear customs in the UAE?",
    a: "Yes. We file import, export, transit and free zone declarations through Dubai Customs' Mirsal 2 system, and arrange the inspections some goods need.",
  },
  {
    q: "What is the difference between FCL and LCL?",
    a: "FCL is a full container for your cargo alone. LCL shares a container with other shippers, so you pay for the space you use. LCL usually suits loads under about 15 cubic metres.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const facts = [
  ["Since", `${site.founded}, in Abu Hail, Dubai`],
  ["Quotes", "Within two business hours"],
  ["Services", "Sea, air, customs and project cargo"],
  ["Office", "Monday to Saturday, Dubai time"],
];

export default function Home() {
  return (
    <>
      {/* 1. Hero: words on the left, one large photograph on the right */}
      <section data-enter className="section !pb-12 !pt-10 lg:!pt-14">
        <div className="wrap">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-6">
              <h1 className="t-h1 enter-1">Freight forwarding and customs clearance in Dubai</h1>
              <p className="t-lead enter-2 mt-6 max-w-[48ch] text-ink/80">
                We book the carrier, prepare the documents and clear your cargo through UAE customs, then deliver it to
                your door. One office in Abu Hail, and a quote within two business hours.
              </p>
              <div className="btn-row enter-3 mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={site.ctaHref} className="btn btn--primary">
                  {site.cta}
                  <Arrow />
                </Link>
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                  Send a WhatsApp message
                </a>
              </div>
            </div>

            <div className="hero-photo enter-frame lg:col-span-6">
              <div className="photo aspect-[4/3] lg:aspect-[5/4]">
                <Image
                  src="/assets/img/container-terminal-ship-1600.webp"
                  alt="A container ship berthed under gantry cranes at a container terminal"
                  fill
                  priority
                  sizes="(min-width: 1024px) 628px, 100vw"
                />
              </div>
            </div>
          </div>

          <dl className="facts enter-3 mt-12 lg:mt-16">
            {facts.map(([term, value]) => (
              <div key={term}>
                <dt className="t-label">{term}</dt>
                <dd className="mt-1 font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 2. Services as photograph cards */}
      <section id="services" className="section">
        <div className="wrap">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="t-h2">Freight services</h2>
              <p className="t-lead muted measure mt-4">
                One office books the carrier, prepares the documents and clears the cargo at the UAE border.
              </p>
            </div>
            <Link href="/services" className="link self-start lg:self-auto">
              See all services
            </Link>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((s) => (
              <li key={s.id}>
                <Link href={`/services#${s.id}`} className="card service-card group h-full">
                  <div className="photo">
                    <Image src={s.image} alt={s.alt} fill sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="t-h3 flex items-center justify-between gap-3">
                      {s.name}
                      <Arrow className="text-accent transition-transform duration-200 group-hover:translate-x-1" />
                    </h3>
                    <p className="mt-2 text-ink-soft">{s.line}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Where we ship: the route board on the sea ground */}
      <section id="routes" className="section ground-sea">
        <div className="wrap">
          <h2 className="t-h2">Where we ship from Dubai</h2>
          <p className="t-lead muted measure mt-4">
            Six of the lanes our customers ask about most. Point at one to see the sea and air times.
          </p>
          <div className="mt-12">
            <RouteBoard />
          </div>
        </div>
      </section>

      {/* 4. How a shipment moves */}
      <section id="process" className="section">
        <div className="wrap">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="t-h2">How a shipment moves</h2>
              <p className="t-lead muted measure mt-4">Four steps from your first message to the delivery note.</p>
            </div>
            <Link href="/how-it-works" className="link self-start lg:self-auto">
              Read the full process
            </Link>
          </div>

          <ol className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t border-ink/25 pt-5">
                <span className="step-num">{i + 1}</span>
                <h3 className="t-h3 mt-4">{step.title}</h3>
                <p className="mt-2 text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Who we ship for, and the paperwork we take off your hands */}
      <section id="customers" className="section ground-surface">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-6">
          <div className="lg:col-span-6">
            <div className="photo aspect-[4/3]">
              <Image
                src="/assets/img/container-terminal-berth-1600.webp"
                alt="A container ship berthed alongside gantry cranes at a port terminal"
                fill
                sizes="(min-width: 1024px) 628px, 100vw"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <h2 className="t-h2">Who we ship for</h2>
            <dl className="rows mt-8">
              {audiences.map(([term, text]) => (
                <div key={term} className="py-5">
                  <dt className="t-h3 font-display">{term}</dt>
                  <dd className="mt-1.5 text-ink-soft">{text}</dd>
                </div>
              ))}
            </dl>
            <h3 className="mt-10 font-sans text-base font-medium">Paperwork we prepare and file</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {documents.map((d) => (
                <li key={d} className="doc-chip">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Tools */}
      <section id="tools" className="section">
        <div className="wrap">
          <h2 className="t-h2">Free shipping calculators</h2>
          <p className="t-lead muted measure mt-4">
            Work out the volume, the duty and the transit time before you ask for a price.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {tools.map((tool) => (
              <Link key={tool.id} href={`/tools#${tool.id}`} className="card group flex flex-col p-6 sm:p-8">
                <dl className="rounded-xl bg-surface p-5" aria-hidden="true">
                  <dt className="t-label">{tool.sample[0]}</dt>
                  <dd className="mt-1 font-display text-[1.75rem] leading-tight tracking-tight">{tool.sample[1]}</dd>
                  <dd className="mt-1 text-ink-soft">{tool.sample[2]}</dd>
                </dl>
                <h3 className="t-h3 mt-6 flex items-center justify-between gap-4">
                  {tool.title}
                  <Arrow className="text-accent transition-transform duration-200 group-hover:translate-x-1" />
                </h3>
                <p className="mt-2 text-ink-soft">{tool.line}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. The company and the questions */}
      <section id="about" className="section ground-surface">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-6">
              <h2 className="t-h2">A Dubai forwarder since {site.founded}</h2>
              <p className="t-lead muted mt-4 max-w-[52ch]">
                Swift Sail Shipping L.L.C. started as a customs and freight desk in Abu Hail. The same office now
                handles cargo for importers, exporters and re-exporters across the GCC, East Africa, the Indian
                Subcontinent and Europe.
              </p>
              <Link href="/about" className="link mt-6 inline-block">
                Read about the company
              </Link>
            </div>

            <dl className="rows lg:col-span-6">
              {[
                ["Office", site.addressShort],
                ["Hours", site.hours],
                ["Sea ports", "Jebel Ali, Port Khalid Sharjah, Khalifa Port"],
                ["Airports", "Dubai International (DXB), Dubai World Central (DWC)"],
              ].map(([term, value]) => (
                <div key={term} className="grid grid-cols-[112px_1fr] gap-4 py-5 sm:grid-cols-[160px_1fr]">
                  <dt className="t-label pt-0.5">{term}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div id="questions" className="mt-24 grid gap-10 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-6">
              <h2 className="t-h2">Questions importers ask first</h2>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="link mt-6 inline-block">
                Send another question on WhatsApp
              </a>
            </div>
            <dl className="rows lg:col-span-6">
              {faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="t-h3 font-display">{f.q}</dt>
                  <dd className="mt-2 text-ink-soft">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 8. The close */}
      <section className="section ground-sea on-dark">
        <div className="wrap grid items-end gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-8">
            <h2 className="t-h1 max-w-[16ch]">Quotes within two business hours</h2>
            <p className="t-lead muted measure mt-6">
              Send the route, the weight and the volume. We reply with an itemised price for freight, customs and
              delivery.
            </p>
          </div>
          <div className="btn-row flex flex-col gap-4 lg:col-span-4 lg:items-end">
            <Link href={site.ctaHref} className="btn btn--primary btn--xl">
              {site.cta}
              <Arrow />
            </Link>
            <a href={site.phoneHref} className="link">
              Or call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
