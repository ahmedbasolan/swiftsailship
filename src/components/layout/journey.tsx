import Link from "next/link";
import { Arrow } from "@/components/ui/arrow";
import { journey } from "@/lib/site";

/** Where the reader is on the way to a quote: four linked steps under a page's heading. */
export function JourneySteps({ step }: { step: number }) {
  return (
    <nav aria-label="Steps to a quote" className="mt-10">
      <ol className="journey">
        {journey.map((s, i) => {
          const n = i + 1;
          const state = n < step ? "done" : n === step ? "current" : "ahead";
          return (
            <li key={s.href} data-state={state} className="journey__step">
              <Link href={s.href} aria-current={state === "current" ? "step" : undefined} className="journey__link">
                <span className="journey__dot" aria-hidden="true">
                  {n}
                </span>
                <span className="journey__name">{s.name}</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** The foot of a page: one large link on to the next step. */
export function NextStep({ step }: { step: number }) {
  const next = journey[step];
  if (!next) return null;

  return (
    <section className="ground-surface">
      <Link href={next.href} className="next-step group block">
        <div className="wrap flex flex-col gap-6 py-16 sm:flex-row sm:items-end sm:justify-between lg:py-24">
          <div>
            <p className="t-label">
              Next, step {step + 1} of {journey.length}
            </p>
            <h2 className="t-h1 next-step__title mt-3 max-w-[18ch]">{next.invite}</h2>
            <p className="t-lead muted measure mt-4">{next.line}</p>
          </div>
          <span className="next-step__disc" aria-hidden="true">
            <Arrow />
          </span>
        </div>
      </Link>
    </section>
  );
}
