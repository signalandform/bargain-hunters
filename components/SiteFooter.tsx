import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-[var(--paper)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-white/80">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="text-sm text-white/60">
          Demo by{" "}
          <a
            href="https://signalandform.net"
            className="text-white/90 underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Signal &amp; Form
          </a>
        </p>
      </div>
    </footer>
  );
}
