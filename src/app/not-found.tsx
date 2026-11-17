import Link from "next/link";
import type { Metadata } from "next";
import { Arrow } from "@/components/ui/arrow";
import { journey, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <h1 className="t-h1 max-w-[16ch]">This page is not on the site</h1>
        <p className="t-lead muted measure mt-6">
          The address may be old or mistyped. These are the pages most visitors are looking for.
        </p>
        <ul className="rows mt-10 max-w-xl">
          {journey.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="group flex items-center justify-between gap-6 py-5">
                <span className="t-h3 font-display">{s.invite}</span>
                <Arrow className="text-accent transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-ink-soft">
          Or call{" "}
          <a href={site.phoneHref} className="link">
            {site.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
