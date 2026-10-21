import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

const navLinks = [
  { href: "/#how-to-play", label: "How to Play" },
  { href: "/wrestle-bros-controls", label: "Controls" },
  { href: "/#guides", label: "Guides" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-white shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-white/20">
            <img
              src="/favicon.png"
              alt=""
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </span>
          <span className="truncate font-heading text-lg font-extrabold tracking-tight transition-colors group-hover:text-orange-300">
            {siteConfig.siteName}
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded text-sm font-bold text-slate-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#play"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-extrabold text-white shadow-sm transition hover:bg-orange-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          Play now
        </Link>
      </div>
    </header>
  );
}
