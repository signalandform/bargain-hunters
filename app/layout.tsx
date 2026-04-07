import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bargainhunters.signalandform.net"),
  title: {
    default: `${site.name} · ${site.locationLabel}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} · ${site.locationLabel}`,
    description: site.description,
    url: "https://bargainhunters.signalandform.net",
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[var(--paper)] text-[var(--ink)] font-sans">
        {children}
      </body>
    </html>
  );
}
