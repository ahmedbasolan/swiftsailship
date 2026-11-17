import Image from "next/image";
import { JourneySteps } from "@/components/layout/journey";

/**
 * The head of every inner page: the h1 and one or two sentences, with one photograph
 * beside them. Pages on the way to a quote pass their step and show where the reader is.
 */
export function PageHeader({
  title,
  lead,
  step,
  image,
}: {
  title: string;
  lead: string;
  step?: number;
  image?: { src: string; alt: string };
}) {
  return (
    <header className="border-b border-line" data-enter>
      <div className="wrap pb-14 pt-12 lg:pb-16 lg:pt-16">
        <div className={image ? "grid items-center gap-10 lg:grid-cols-12 lg:gap-6" : ""}>
          <div className={image ? "lg:col-span-7" : ""}>
            <h1 className="t-h1 enter-1 max-w-[20ch]">{title}</h1>
            <p className="t-lead muted enter-2 measure mt-6">{lead}</p>
            {step && (
              <div className="enter-3">
                <JourneySteps step={step} />
              </div>
            )}
          </div>
          {image && (
            <div className="enter-frame lg:col-span-5">
              <div className="photo aspect-[4/3]">
                <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 520px, 100vw" />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
