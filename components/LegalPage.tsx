import { siteConfig } from "@/lib/site.config";

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

/**
 * Shared layout for Privacy Policy and Terms & Conditions pages.
 */
export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <h1 className="mb-2 font-heading text-3xl font-black text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mb-8 text-sm text-slate-600">
          Last updated: {siteConfig.legal.lastUpdated}
        </p>
        <div className="space-y-4 leading-7 text-slate-700">
          {children}
        </div>
      </article>
    </div>
  );
}
