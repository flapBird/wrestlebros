import { siteConfig } from "@/lib/site.config";
import AdSlot from "./AdSlot";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pt-12 lg:px-8">
      <div className="flex justify-center gap-8">
        {siteConfig.ads.enabled && (
          <aside aria-label="Advertisement" className="hidden shrink-0 flex-col gap-6 xl:flex">
            <AdSlot type="sidebar" />
          </aside>
        )}

        <div className="min-w-0 max-w-5xl flex-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {children}
        </div>

        {siteConfig.ads.enabled && (
          <aside aria-label="Advertisements" className="hidden shrink-0 flex-col gap-6 xl:flex">
            <AdSlot type="sidebar" />
            <AdSlot type="rectangle" />
          </aside>
        )}
      </div>
    </div>
  );
}
