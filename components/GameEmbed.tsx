"use client";

import { siteConfig } from "@/lib/site.config";

export default function GameEmbed() {
  const aspectRatio = siteConfig.game.aspectRatio;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        className="relative w-full rounded-xl2 overflow-hidden shadow-lg bg-gray-100"
        style={{ aspectRatio }}
      >
        <iframe
          src={siteConfig.game.embedUrl}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          title={siteConfig.game.name}
          loading="lazy"
        />
      </div>
    </div>
  );
}
