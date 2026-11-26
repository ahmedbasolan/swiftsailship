"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Arrow } from "@/components/ui/arrow";

/** Typical transit times from the Jebel Ali corridor list. Carriers change schedules. */
const lanes = [
  { id: "rotterdam", to: "Rotterdam", region: "Europe", sea: "24 to 30 days", air: "7 to 9 hours", full: "Rotterdam, Netherlands" },
  { id: "hamburg", to: "Hamburg", region: "Europe", sea: "26 to 32 days", air: "6.5 to 8 hours", full: "Hamburg, Germany" },
  { id: "houston", to: "Houston", region: "North America", sea: "32 to 40 days", air: "14 to 16 hours", full: "Houston, USA" },
  { id: "shanghai", to: "Shanghai", region: "East Asia", sea: "14 to 18 days", air: "8 to 10 hours", full: "Shanghai, China" },
  { id: "singapore", to: "Singapore", region: "Southeast Asia", sea: "9 to 12 days", air: "7.5 hours", full: "Singapore" },
  { id: "nhava-sheva", to: "Nhava Sheva", region: "India", sea: "3 to 5 days", air: "3.5 hours", full: "Nhava Sheva (JNPT), India" },
] as const;

const ROW = 64;
const GAP = 12;
const HEIGHT = lanes.length * ROW + (lanes.length - 1) * GAP;

/** Six lanes out of Dubai. Pointing at one (or tabbing to it) lights its line and shows its times. */
export function RouteBoard() {
  const [active, setActive] = useState<string>(lanes[0].id);
  const ref = useRef<HTMLDivElement>(null);
  const current = lanes.find((l) => l.id === active) ?? lanes[0];

  // The lines draw once, when the board scrolls into view. Without script, or with
  // reduced motion, they are simply there.
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.6) return;
    el.dataset.phase = "waiting";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.phase = "drawn";
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
      <div className="lg:col-span-5">
        <p className="t-label !text-paper/70">From Jebel Ali to {current.full}</p>
        <dl key={current.id} className="swap mt-6 grid grid-cols-2 gap-6" aria-live="polite">
          <div>
            <dt className="t-label !text-paper/70">By sea</dt>
            <dd className="stat mt-1">{current.sea}</dd>
          </div>
          <div>
            <dt className="t-label !text-paper/70">By air</dt>
            <dd className="stat mt-1">{current.air}</dd>
          </div>
        </dl>
        <p className="mt-6 max-w-[40ch] text-paper/75">
          Typical times. Carriers change schedules, so we confirm the current sailing or flight when we quote.
        </p>
        <Link
          href={`/get-quote?origin=${encodeURIComponent("Jebel Ali, Dubai")}&destination=${encodeURIComponent(current.full)}`}
          className="btn btn--primary mt-8"
        >
          Get a quote for this route
          <Arrow />
        </Link>
      </div>

      <div ref={ref} className="route lg:col-span-7" style={{ ["--route-h" as string]: `${HEIGHT}px` }}>
        <div className="route__origin" aria-hidden="true">
          <span className="route__origin-dot" />
          <span className="route__origin-name">Jebel Ali</span>
        </div>

        <svg className="route__lines" viewBox={`0 0 200 ${HEIGHT}`} preserveAspectRatio="none" aria-hidden="true">
          {lanes.map((lane, i) => {
            const y = ROW / 2 + i * (ROW + GAP);
            return (
              <path
                key={lane.id}
                d={`M0 ${HEIGHT / 2} C 100 ${HEIGHT / 2}, 100 ${y}, 200 ${y}`}
                pathLength={1}
                data-active={lane.id === active}
                style={{ ["--d" as string]: `${i * 90}ms` }}
              />
            );
          })}
        </svg>

        <ul className="route__list">
          {lanes.map((lane) => (
            <li key={lane.id}>
              <button
                type="button"
                data-active={lane.id === active}
                aria-pressed={lane.id === active}
                onMouseEnter={() => setActive(lane.id)}
                onFocus={() => setActive(lane.id)}
                onClick={() => setActive(lane.id)}
                className="route__stop"
              >
                <span className="route__stop-dot" aria-hidden="true" />
                <span>
                  <span className="block font-display text-xl tracking-tight">{lane.to}</span>
                  <span className="block text-sm text-paper/65">{lane.region}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
