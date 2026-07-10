import { buildMetadata, buildVideoGameJsonLd } from "@/lib/seo";
import Hero from "@/components/Hero";
import GameContent from "@/components/GameContent";
import SidebarLayout from "@/components/SidebarLayout";
import SchemaMarkup from "@/components/SchemaMarkup";
import AdSlot from "@/components/AdSlot";

export const metadata = buildMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <SchemaMarkup jsonLd={buildVideoGameJsonLd()} />
      <Hero />
      <SidebarLayout>
        {/* Game content sections (intro, gameplay, controls, features, FAQ) */}
        <GameContent />

        {/* Bottom banner ad */}
        <AdSlot type="banner" className="my-8" />
      </SidebarLayout>
    </>
  );
}
