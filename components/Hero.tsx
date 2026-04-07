import { site } from "@/lib/site";

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
      <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="mb-3 font-display text-sm font-medium uppercase tracking-[0.2em] text-[var(--highlight)]">
          Resale · Local · Everyday deals
        </p>
        <h1 className="font-display max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
          {site.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--ink-muted)]">
          {site.description}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
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
