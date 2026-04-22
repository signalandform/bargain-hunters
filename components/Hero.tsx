import { site } from "@/lib/site";

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
        <p className="mb-3 text-center font-display text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)] lg:text-left">
          Resale · Local · Everyday deals
        </p>
        <h1 className="font-display mx-auto max-w-3xl text-center text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl lg:mx-0 lg:max-w-3xl lg:text-left">
          {site.tagline}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-[var(--ink-muted)] lg:mx-0 lg:text-left">
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
    </section>
  );
}
