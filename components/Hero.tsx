import Image from "next/image";
import { brand, site } from "@/lib/site";

const heroLogoPanelClass =
  "rounded-2xl bg-black p-5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.4)] ring-1 ring-white/15 sm:p-7";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 15% 35%, rgba(0, 173, 239, 0.12), transparent),
            radial-gradient(ellipse 55% 45% at 85% 65%, rgba(140, 198, 63, 0.14), transparent)
          `,
        }}
      />
      <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex w-full shrink-0 justify-center lg:w-auto lg:justify-start">
            <div className={`${heroLogoPanelClass} w-full max-w-[min(92vw,560px)]`}>
              <Image
                src={brand.logoSrc}
                alt=""
                width={brand.logoWidth}
                height={brand.logoHeight}
                priority
                className="mx-auto h-auto w-full max-w-full object-contain object-center"
              />
            </div>
          </div>
          <div className="flex w-full min-w-0 flex-1 flex-col justify-center text-center lg:text-left">
            <p className="mb-3 font-display text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              Resale · Local · Everyday deals
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--ink-muted)] lg:max-w-none">
              {site.description}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href={site.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--accent-hover)]"
              >
                Get directions
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-[var(--accent-secondary)] bg-[var(--card)] px-7 py-3.5 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--accent-secondary)]/12"
              >
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
