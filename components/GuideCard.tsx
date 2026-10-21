import Link from "next/link";
import type { Guide } from "@/lib/guides";

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={guide.href}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-primary/40 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <span className="section-kicker">{guide.label}</span>
      <h3 className="mt-2 font-heading text-lg font-extrabold text-ink group-hover:text-primary">
        {guide.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{guide.short}</p>
      <span className="mt-4 text-sm font-extrabold text-primary">
        Read guide <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
