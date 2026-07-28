"use client";

import { useRef, useState } from "react";
import { siteConfig } from "@/lib/site.config";

export default function GameEmbed() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [fullscreenError, setFullscreenError] = useState("");

  async function enterFullscreen() {
    if (!frameRef.current?.requestFullscreen) {
      setFullscreenError("Fullscreen is not available in this browser.");
      return;
    }

    try {
      await frameRef.current.requestFullscreen();
      setFullscreenError("");
    } catch {
      setFullscreenError("Your browser blocked fullscreen. Use the game’s fullscreen icon instead.");
    }
  }

  return (
    <div id="play" className="scroll-mt-24">
      <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#070b1c] shadow-2xl shadow-black/40">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-3 py-2.5 sm:px-4">
          <div className="flex min-w-0 items-center gap-2 text-xs font-bold text-slate-300 sm:text-sm">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            <span className="truncate">Wrestle Bros game</span>
          </div>
          <button
            type="button"
            onClick={enterFullscreen}
            className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-extrabold text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:text-sm"
            aria-label="Open Wrestle Bros in fullscreen"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
            </svg>
            Fullscreen
          </button>
        </div>

        <div
          ref={frameRef}
          className="relative aspect-[4/3] w-full bg-black sm:aspect-video"
        >
          <iframe
            src={siteConfig.game.embedUrl}
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; fullscreen; gamepad"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Play Wrestle Bros online"
            loading="eager"
          />
        </div>
      </div>

      <div className="mt-3 flex flex-col justify-between gap-2 text-xs text-slate-300 sm:flex-row sm:items-center sm:text-sm">
        <p>Click inside the game before using the keyboard.</p>
        <p className="sm:text-right">On a phone, use fullscreen and turn the device sideways.</p>
      </div>
      {fullscreenError && (
        <p role="status" className="mt-2 text-sm font-bold text-orange-200">
          {fullscreenError}
        </p>
      )}
    </div>
  );
}
