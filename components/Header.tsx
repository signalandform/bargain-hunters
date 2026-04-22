import Image from "next/image";
import Link from "next/link";
import { brand, site } from "@/lib/site";

const logoPanelClass =
  "inline-flex rounded-xl bg-black shadow-[0_12px_36px_-14px_rgba(0,0,0,0.45)] ring-1 ring-white/15";

const nav = [
  { href: "#visit", label: "Visit" },
  { href: "#reviews", label: "Reviews" },
  { href: "#connect", label: "Connect" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--paper)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5">
        <Link
          href="/"
          className={`${logoPanelClass} p-2.5 sm:p-3.5`}
          aria-label={`${site.name} — ${site.locationLabel}, home`}
        >
          <Image
            src={brand.logoSrc}
            alt=""
            width={brand.logoWidth}
            height={brand.logoHeight}
            priority
            className="h-12 w-auto max-w-[min(220px,70vw)] object-contain object-left sm:h-14 sm:max-w-[260px]"
          />
        </Link>
        <nav className="flex items-center gap-1 sm:gap-4" aria-label="Page sections">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1.5 text-sm font-medium text-[var(--ink-muted)] transition hover:bg-[var(--accent)]/10 hover:text-[var(--ink)] sm:px-3"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
