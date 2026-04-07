import { Stars } from "@/components/Stars";
import { site } from "@/lib/site";

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-24 border-b border-[var(--border)]">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
          What shoppers say
        </h2>
        <p className="mt-3 max-w-xl text-[var(--ink-muted)]">
          A few words from people who’ve visited—swap in real reviews anytime.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.testimonials.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
            >
              <Stars className="mb-4" />
              <blockquote className="flex-1 text-[var(--ink)] leading-relaxed">
                “{t.quote}”
              </blockquote>
              <footer className="mt-6 border-t border-[var(--border)] pt-4">
                <p className="font-semibold text-[var(--ink)]">{t.name}</p>
                <p className="text-sm text-[var(--ink-muted)]">{t.detail}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
