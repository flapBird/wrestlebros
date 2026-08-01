import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";
import EmailAddress from "@/components/EmailAddress";
import LegalPage from "@/components/LegalPage";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read the WrestleBros.xyz privacy policy, including information about logs, cookies, analytics, advertising, and the embedded game.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          1. What We Collect
        </h2>
        <p>
          When you visit <strong>{siteConfig.siteName}</strong>, we may automatically
          collect basic stuff like your IP address, browser type, operating system, which
          pages you look at, and where you came from. This is pretty standard — most sites
          do this through server logs and analytics.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          2. Cookies
        </h2>
        <p>
          We use cookies and similar tracking tools to make the site work better, understand
          how people use it, and (if ads are running) show relevant ads. You can turn cookies
          off in your browser settings if you prefer — the game will still work fine.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          3. Third-Party Services
        </h2>
        <p>
          We use services like Google Analytics to understand traffic patterns. If ads
          are enabled, Google AdSense may also collect data according to their own{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            privacy policy
          </a>
          .
        </p>
        <p className="mt-3">
          The game itself is hosted by a third-party provider. We don&rsquo;t control
          what data they collect inside the game, so it&rsquo;s worth keeping that in mind.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          4. Advertising
        </h2>
        <p>
          This site may show ads served by Google AdSense or other ad networks. These
          partners may use cookies to show you ads based on sites you&rsquo;ve visited.
          You can opt out of personalized ads through{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Google Ads Settings
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          5. Kids&rsquo; Privacy
        </h2>
        <p>
          We don&rsquo;t knowingly collect personal info from anyone under 13. If you
          think a child has shared personal data with us, let us know and we&rsquo;ll
          sort it out right away.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          6. Changes
        </h2>
        <p>
          If we update this policy, we&rsquo;ll post the changes here with a new
          &ldquo;Last updated&rdquo; date. Keep using the site and we&rsquo;ll take
          that as acceptance.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          7. Questions
        </h2>
        <p>
          If anything here is unclear, just email{" "}
          <EmailAddress email={siteConfig.contact.email} className="text-primary" />
          .
        </p>
      </section>
    </LegalPage>
  );
}
