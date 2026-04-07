import { site } from "@/lib/site";

export function LocationSection() {
  return (
    <section id="visit" className="scroll-mt-24 border-b border-[var(--border)] bg-[var(--card)]">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:py-24">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
            Visit us
          </h2>
          <p className="mt-3 text-[var(--ink-muted)]">
            Stop by the shop—we’re easy to find in Haltom City.
          </p>
          <address className="mt-8 not-italic">
            {site.address.lines.map((line) => (
              <p key={line} className="text-lg font-medium text-[var(--ink)]">
                {line}
              </p>
            ))}
          </address>
          <a
            href={site.address.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
          >
            Open in Google Maps →
          </a>
          <div className="mt-10">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
              Hours
            </h3>
            <ul className="mt-3 space-y-2">
              {site.hours.map((row) => (
                <li
                  key={row.label}
                  className="flex max-w-xs justify-between gap-6 border-b border-[var(--border)] pb-2 text-[var(--ink)] last:border-0"
                >
                  <span>{row.label}</span>
                  <span className="tabular-nums text-[var(--ink-muted)]">{row.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-[var(--ink-muted)]">
              Hours may change on holidays—check{" "}
              <a
                href={site.social.facebook}
                className="font-medium text-[var(--accent)] underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>{" "}
              for updates.
            </p>
          </div>
        </div>
        <div className="min-h-[280px] overflow-hidden rounded-2xl border border-[var(--border)] shadow-[0_20px_50px_-20px_rgba(28,25,20,0.25)] sm:min-h-[360px]">
          <iframe
            title="Map: Bargain Hunter, Haltom City"
            src={site.address.mapsEmbedSrc}
            className="h-full min-h-[280px] w-full sm:min-h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
