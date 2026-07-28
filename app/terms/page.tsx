import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";
import LegalPage from "@/components/LegalPage";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "Terms for using WrestleBros.xyz, including game ownership, embedded content, availability, and liability.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms &amp; Conditions">
      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">1. Using This Site</h2>
        <p>By visiting <strong>{siteConfig.siteName}</strong>, you&rsquo;re agreeing to these terms. If you don&rsquo;t agree, that&rsquo;s fine — just don&rsquo;t use the site. Simple.</p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">2. What You Can Expect</h2>
        <p>This site offers free browser games, nothing more. We provide them &ldquo;as is&rdquo; — we don&rsquo;t guarantee they&rsquo;ll work perfectly on every device, but we do our best to keep things running smoothly. Use the site responsibly, don&rsquo;t try to break it, and don&rsquo;t do anything shady.</p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">3. Who Owns What</h2>
        <p>The games themselves belong to their original creators. {siteConfig.game.sourceAttribution}. We don&rsquo;t claim ownership of any game content, trademarks, or assets. The site design and written content here belong to us, so please don&rsquo;t copy it without asking.</p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">4. Embedded Content</h2>
        <p>Games on this site are embedded from third-party providers. We don&rsquo;t control those services and aren&rsquo;t responsible if something breaks on their end. If a game stops working, let us know and we&rsquo;ll look into it.</p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">5. No Warranty</h2>
        <p>The site is provided free of charge, so there&rsquo;s no warranty. We can&rsquo;t promise it&rsquo;ll be up 100% of the time or that every embedded game will run flawlessly. You use it at your own risk.</p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">6. Liability</h2>
        <p>We&rsquo;re not liable for any damages that come from using this site. If a game crashes your browser or you lose an important fight because of lag, that&rsquo;s on the nature of browser games, not on us.</p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">7. Updates</h2>
        <p>We may change these terms if needed. If we do, we&rsquo;ll update the date and keep the new version here. By continuing to use the site, you&rsquo;re okay with whatever changed.</p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">8. Contact</h2>
        <p>Questions about these terms? Email{" "}<a href={`mailto:${siteConfig.contact.email}`} className="text-primary underline">{siteConfig.contact.email}</a>.</p>
      </section>
    </LegalPage>
  );
}
