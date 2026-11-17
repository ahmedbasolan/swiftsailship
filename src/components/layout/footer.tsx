import Image from "next/image";
import Link from "next/link";
import { services, site, tools } from "@/lib/site";

const company = [
  { name: "About", href: "/about" },
  { name: "Process", href: "/how-it-works" },
  { name: "Blog", href: "/blog" },
  { name: "Get a quote", href: "/get-quote" },
];

const credits = [
  {
    title: "Aerial photograph of a cargo ship",
    by: "Wilfredor",
    licence: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Aerial_photograph_of_a_cargo_ship.jpg",
  },
  {
    title: "Container ship at the Hai Phong International Container Terminal",
    by: "Nathan.cima",
    licence: "CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Container_Ship_at_the_Hai_Phong_International_Container_Terminal_01.jpg",
  },
  {
    title: "Modern warehouse with pallet rack storage system",
    by: "Axisadman",
    licence: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Modern_warehouse_with_pallet_rack_storage_system.jpg",
  },
  {
    title: "Cargo-In-Cargo-Out",
    by: "Lance Cheung, U.S. Air Force",
    licence: "public domain",
    href: "https://commons.wikimedia.org/wiki/File:Cargo-In-Cargo-Out_DVIDS171688.jpg",
  },
  {
    title: "Jebel Ali Free Zone 11",
    by: "Bjoertvedt",
    licence: "CC BY-SA 3.0",
    href: "https://commons.wikimedia.org/wiki/File:Jebel_Ali_Free_Zone_11.jpg",
  },
  {
    title: "Baltic Container Terminal in Gdynia",
    by: "Zalasem1",
    licence: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Baltic_Container_Terminal_in_Gdynia.jpg",
  },
];

function Column({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h3 className="t-label mb-4 font-sans">{title}</h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

const linkClass = "text-ink/85 transition-colors hover:text-accent";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper pb-16 sm:pb-0">
      <div className="wrap py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label={`${site.name}, home`}>
              <Image src="/assets/img/logo.webp" alt="" width={64} height={64} className="-my-2 h-16 w-16 object-contain" />
              <span className="font-display text-2xl font-medium tracking-tight">Swift Sail Shipping</span>
            </Link>
            <p className="mt-5 max-w-xs text-ink-soft">
              Freight forwarder and customs broker in Dubai. Sea freight, air freight, customs clearance and project
              cargo.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-8">
            <Column title="Services">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} className={linkClass}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </Column>

            <Column title="Tools">
              {tools.map((t) => (
                <li key={t.id}>
                  <Link href={`/tools#${t.id}`} className={linkClass}>
                    {t.name}
                  </Link>
                </li>
              ))}
            </Column>

            <Column title="Company">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className={linkClass}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </Column>

            <Column title="Contact" className="col-span-2 sm:col-span-1">
              <li>
                <a href={site.phoneHref} className={linkClass}>
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={site.emailHref} className={`${linkClass} sm:break-all`}>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.mapHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {site.addressShort}
                </a>
              </li>
            </Column>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-6 text-sm text-ink-soft md:flex-row md:items-start md:justify-between">
          <p>
            © {year} {site.legalName}
          </p>
          <div className="flex flex-wrap items-start gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ink">
              Terms
            </Link>
            <details className="group">
              <summary className="cursor-pointer list-none hover:text-ink">Photographs via Wikimedia Commons</summary>
              <ul className="mt-3 max-w-md space-y-2">
                {credits.map((c) => (
                  <li key={c.href}>
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                      {c.title}
                    </a>
                    , {c.by}, {c.licence}
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </div>
    </footer>
  );
}
