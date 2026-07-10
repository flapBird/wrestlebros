import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";
import Link from "next/link";

export const metadata = buildMetadata({ title: "About", path: "/about" });

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-6">
        About {siteConfig.siteName}
      </h1>
      <div className="space-y-4 text-text-dark/80 leading-relaxed">

        <p>
          <strong>{siteConfig.siteName}</strong> is a free online browser game that brings
          physics-based wrestling fights straight to your screen. No downloads, no sign-ups,
          no waiting around — just pick a wrestler and jump into the ring.
        </p>

        <p>
          The game is powered by a proper physics engine, so every suplex, body slam, and
          ring-out feels different. You can play solo against the AI, or grab a friend and
          battle it out on the same keyboard. It&rsquo;s chaotic, it&rsquo;s fast, and it&rsquo;s
          the kind of game you end up playing "just one more round" for an hour.
        </p>

        <p>
          Wrestle Bros was created by <strong>Blue Wizard Digital</strong>, the same team
          behind Basket Bros and Soccer Bros. If you&rsquo;ve played those, you already know
          the deal — simple controls, ridiculous physics, and a surprising amount of strategy
          once you get past the button mashing.
        </p>

        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          Why This Site?
        </h2>

        <p>
          I put this site together because most wrestling games online are either
          behind a paywall, require a plugin, or just aren&rsquo;t any fun. Wrestle Bros
          is free, works on any device with a browser, and actually has real gameplay depth.
          It deserves a place where people can find it, play it, and share it with friends
          without jumping through hoops.
        </p>

        <p>
          Everything on {siteConfig.domain} is free. If you run into a bug, have a
          suggestion, or just want to say hi, feel free to{" "}
          <Link href="/contact" className="text-primary underline">reach out</Link>.
        </p>

      </div>
    </div>
  );
}
