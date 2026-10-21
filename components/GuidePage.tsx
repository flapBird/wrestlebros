import Link from "next/link";
import type { ReactNode } from "react";
import FaqList from "./FaqList";
import GameEmbed from "./GameEmbed";
import GuideCard from "./GuideCard";
import SchemaMarkup from "./SchemaMarkup";
import { guideUpdated, guides } from "@/lib/guides";
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/lib/seo";

interface GuidePageProps {
  kicker: string;
  title: string;
  description: string;
  path: string;
  intro: string;
  faqs: readonly { question: string; answer: string }[];
  faqTitle: string;
  children: ReactNode;
  playFirst?: boolean;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-");
  return `${months[Number(month) - 1]} ${Number(day)}, ${year}`;
}

export default function GuidePage({
  kicker,
  title,
  description,
  path,
  intro,
  faqs,
  faqTitle,
  children,
  playFirst = false,
}: GuidePageProps) {
  const related = guides.filter((guide) => guide.href !== path);

  return (
    <>
      <SchemaMarkup jsonLd={buildFaqJsonLd(faqs)} />
      <SchemaMarkup
        jsonLd={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: title, path },
        ])}
      />
      <SchemaMarkup
        jsonLd={buildArticleJsonLd({
          path,
          title,
          description,
          updated: guideUpdated,
        })}
      />

      <section
        className={`hero-arena relative overflow-hidden px-4 pt-10 sm:pt-12 ${
          playFirst ? "pb-10 sm:pb-12" : "pb-12 sm:pb-16"
        }`}
      >
        <div className="hero-spotlight hero-spotlight--left" aria-hidden="true" />
        <div className="hero-spotlight hero-spotlight--right" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex flex-wrap items-center gap-2 text-xs font-bold text-slate-300"
          >
            <Link href="/" className="rounded transition-colors hover:text-white">
              Home
            </Link>
            <span aria-hidden="true" className="text-slate-500">
              /
            </span>
            <span className="text-orange-300" aria-current="page">
              {title}
            </span>
          </nav>

          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-orange-300">
            {kicker}
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base">
            {intro}
          </p>
          <p className="mt-3 text-xs text-slate-400">
            Updated {formatDate(guideUpdated)}
          </p>

          {playFirst && (
            <div className="mt-8">
              <GameEmbed />
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 pb-14 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          {children}

          <section
            id="faq"
            className="mt-12 scroll-mt-24 border-t border-slate-200 pt-10"
          >
            <p className="section-kicker">Common questions</p>
            <h2 className="section-title">{faqTitle}</h2>
            <div className="mt-6">
              <FaqList faqs={faqs} />
            </div>
          </section>

          <section className="mt-12 border-t border-slate-200 pt-10">
            <p className="section-kicker">Keep reading</p>
            <h2 className="section-title">More Wrestle Bros guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((guide) => (
                <GuideCard key={guide.href} guide={guide} />
              ))}
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
