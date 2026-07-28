import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn what WrestleBros.xyz covers, who developed Wrestle Bros, and how this independent game guide handles ownership and embeds.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <p className="section-kicker">About this site</p>
        <h1 className="mt-2 font-heading text-4xl font-black tracking-tight text-ink">
          About {siteConfig.siteName}
        </h1>

        <div className="mt-7 space-y-5 text-base leading-8 text-slate-700">
          <p>
            Wrestle Bros is a browser wrestling game developed by{" "}
            <strong className="text-ink">Blue Wizard Digital</strong>. WrestleBros.xyz
            is an independent site where players can open the game and find a
            straightforward guide to its modes, controls, and pin mechanic.
          </p>

          <p>
            The guide is written around the version of the game embedded on the
            site. If a control or menu changes, we update the relevant instructions
            rather than keeping an outdated list for search traffic.
          </p>

          <h2 className="pt-3 font-heading text-2xl font-extrabold text-ink">
            Ownership and attribution
          </h2>
          <p>
            The game, its characters, trademarks, and original game assets belong
            to their respective owner. We do not present WrestleBros.xyz as the
            developer’s official website. The playable frame is loaded from the
            Wrestle Bros game domain and remains under the provider’s control.
          </p>

          <h2 className="pt-3 font-heading text-2xl font-extrabold text-ink">
            Corrections and broken links
          </h2>
          <p>
            If the game stops loading or a guide detail is wrong, please{" "}
            <Link
              href="/contact"
              className="font-bold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
            >
              send us a note
            </Link>
            . Browser and device details are useful when reporting a loading problem.
          </p>
        </div>
      </article>
    </div>
  );
}
