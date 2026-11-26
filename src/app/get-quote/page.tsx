import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import QuoteForm from "@/components/quote-form";
import { photos, site } from "@/lib/site";

const title = "Get a freight quote from Dubai";
const description =
  "Send your route, weight and volume and get an itemised quote for sea freight, air freight, UAE customs clearance or project cargo within two business hours.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/get-quote` },
  openGraph: { title, description, url: `${site.url}/get-quote` },
};

const faqs = [
  {
    q: "How quickly will I receive a freight quotation?",
    a: "Within two business hours during office hours: Monday to Friday 08:00 to 18:00 and Saturday 09:00 to 14:00, Dubai time.",
  },
  {
    q: "What information do I need to provide for a quote?",
    a: "The origin and destination, what the goods are, the total weight and volume (CBM), the number of packages, the Incoterm, and whether you need customs clearance or storage in the UAE.",
  },
  {
    q: "Do you handle UAE customs clearance and duty exemption?",
    a: "Yes. We file declarations through Dubai Customs' Mirsal 2 system, including free zone transfers and MOIAT industrial duty exemptions for manufacturers that qualify.",
  },
  {
    q: "What ports and airports do you work through?",
    a: "Jebel Ali Port, Port Khalid in Sharjah and Khalifa Port for sea freight, and Dubai International (DXB) and Dubai World Central (DWC) for air freight.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Get a quote", item: `${site.url}/get-quote` },
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
  ],
};

const contacts = [
  ["Phone", site.phone, site.phoneHref],
  ["WhatsApp", site.phone, site.whatsappHref],
  ["Email", site.email, site.emailHref],
] as const;

export default function GetQuotePage() {
  return (
    <>
      <PageHeader
        step={4}
        image={photos.air}
        title="Get a freight quote"
        lead="Tell us the route and the cargo. We reply within two business hours with an itemised price for freight, customs and delivery."
      />

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <Suspense fallback={<p className="text-ink-soft">Loading the form</p>}>
              <QuoteForm />
            </Suspense>
          </div>

          <aside className="self-start lg:col-span-4 lg:col-start-9 lg:rounded-[22px] lg:bg-surface lg:p-8">
            <h2 className="t-h3">Talk to us directly</h2>
            <dl className="rows mt-5">
              {contacts.map(([term, value, href]) => (
                <div key={term} className="py-4">
                  <dt className="t-label">{term}</dt>
                  <dd className="mt-1">
                    <a
                      href={href}
                      className="link break-all"
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {value}
                    </a>
                  </dd>
                </div>
              ))}
              <div className="py-4">
                <dt className="t-label">Office</dt>
                <dd className="mt-1">{site.address}</dd>
              </div>
              <div className="py-4">
                <dt className="t-label">Hours</dt>
                <dd className="mt-1">{site.hours}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section id="faq" className="section ground-surface">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-6">
          <h2 className="t-h2 lg:col-span-5">Questions about quotes</h2>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
