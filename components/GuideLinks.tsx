import GuideCard from "./GuideCard";
import { guides } from "@/lib/guides";

export default function GuideLinks() {
  return (
    <section
      id="guides"
      className="content-section scroll-mt-24"
      aria-labelledby="guides-title"
    >
      <p className="section-kicker">Go deeper</p>
      <h2 id="guides-title" className="section-title">
        Wrestle Bros guides
      </h2>
      <p className="prose-copy mt-5 max-w-3xl">
        Short, focused pages for the questions players ask most: getting the game
        to load, learning the keyboard, and finishing a match with a pin.
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {guides.map((guide) => (
          <GuideCard key={guide.href} guide={guide} />
        ))}
      </div>
    </section>
  );
}
