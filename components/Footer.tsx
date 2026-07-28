import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-ink text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
        <div className="max-w-xl">
          <p className="font-heading text-lg font-extrabold text-white">
            {siteConfig.siteName}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {siteConfig.game.sourceAttribution}. This is an independent play-and-guide
            site and is not the game developer.
          </p>
          <p className="mt-3 text-xs text-slate-400">
            © {new Date().getFullYear()} WrestleBros.xyz
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded text-sm font-bold text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
