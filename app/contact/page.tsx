import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({ title: "Contact", path: "/contact" });

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-4">
        Contact Us
      </h1>
      <p className="text-text-dark/70 leading-relaxed mb-8">
        Got feedback? Found a bug with the embed? Want to report a broken game link?
        Drop us an email and we&rsquo;ll get back to you.
      </p>

      <div className="bg-[#f6f3fa] rounded-xl p-6 border border-[#e8e4ef]">
        <p className="text-sm text-text-dark/60 mb-2">Email us at:</p>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="text-primary font-medium text-lg hover:underline"
        >
          {siteConfig.contact.email}
        </a>
      </div>

      <p className="mt-6 text-sm text-text-dark/50">
        We try to respond within a couple of days. If you&rsquo;re reporting a
        specific issue, mentioning your browser and device helps us narrow things down faster.
      </p>
    </div>
  );
}
