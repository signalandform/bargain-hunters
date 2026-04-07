import Image from "next/image";
import Link from "next/link";
import { brand, site } from "@/lib/site";

const nav = [
  { href: "#visit", label: "Visit" },
  { href: "#reviews", label: "Reviews" },
  { href: "#connect", label: "Connect" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--paper)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-4">
        <Link
          href="/"
          className="relative flex shrink-0 items-center overflow-visible py-1"
          aria-label={`${site.name} — ${site.locationLabel}, home`}
        >
          <Image
            src={brand.logoSrc}
            alt=""
            width={brand.logoWidth}
            height={brand.logoHeight}
            priority
            className="h-11 w-auto object-contain object-left sm:h-12"
          />
        </Link>
        <nav className="flex items-center gap-1 sm:gap-4" aria-label="Page sections">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1.5 text-sm font-medium text-[var(--ink-muted)] transition hover:bg-black/[0.04] hover:text-[var(--ink)] sm:px-3"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
