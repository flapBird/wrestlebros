import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";
import AdsterraNative from "@/components/AdsterraNative";
import EmailAddress from "@/components/EmailAddress";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact WrestleBros.xyz to report a broken game embed, incorrect control guide, or other site issue.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <p className="section-kicker">Get in touch</p>
        <h1 className="mt-2 font-heading text-4xl font-black tracking-tight text-ink">
          Contact WrestleBros.xyz
        </h1>
        <p className="mb-8 mt-5 leading-8 text-slate-700">
          Use the address below to report a broken game frame, an incorrect control,
          or a problem with the site.
        </p>

        <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
          <p className="mb-2 text-sm font-bold text-slate-700">Email</p>
          <EmailAddress
            email={siteConfig.contact.email}
            className="break-all text-lg font-extrabold text-primary"
          />
        </div>

        <p className="mt-6 text-sm leading-6 text-slate-600">
          For loading problems, include the browser, device, and any message shown
          inside the game frame. Please do not send passwords or other sensitive information.
        </p>

        <AdsterraNative className="mt-8" />
      </div>
    </div>
  );
}
