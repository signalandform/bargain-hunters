import Image from "next/image";
import { brand, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(196, 92, 58, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(45, 74, 62, 0.12), transparent)
          `,
        }}
      />
      <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-10 flex justify-center sm:mb-12 sm:justify-start">
          <div className="rounded-2xl bg-gradient-to-b from-[#1a1814] to-[#0c0b09] p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/10 sm:p-8 sm:pr-10">
            <Image
              src={brand.logoSrc}
              alt=""
              width={brand.logoWidth}
              height={brand.logoHeight}
              priority
              className="mx-auto h-auto max-h-[min(52vw,220px)] w-auto max-w-[min(92vw,420px)] object-contain sm:max-h-[260px] sm:max-w-[480px]"
            />
          </div>
        </div>
        <p className="mb-3 text-center font-display text-sm font-medium uppercase tracking-[0.2em] text-[var(--highlight)] sm:text-left">
          Resale · Local · Everyday deals
        </p>
        <h1 className="font-display mx-auto max-w-2xl text-center text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--ink)] sm:mx-0 sm:text-left sm:text-5xl md:text-6xl">
          {site.tagline}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-[var(--ink-muted)] sm:mx-0 sm:text-left">
          {site.description}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:justify-start">
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
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] px-7 py-3.5 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--ink)]/20"
          >
            Follow on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
