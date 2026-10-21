"use client";

import { useEffect } from "react";

const ADSTERRA_SCRIPT_SRC =
  "https://bauval.org/21/e53e352f791ff702c8bc76ccfaaadeae";
const ADSTERRA_CONTAINER_ID = "container-e53e352f791ff702c8bc76ccfaaadeae";

interface AdsterraNativeProps {
  className?: string;
}

/**
 * Adsterra native banner.
 *
 * The loader is re-injected on every mount so the unit also renders after
 * Next.js client-side navigation (the container ID is fixed by Adsterra).
 */
export default function AdsterraNative({ className = "" }: AdsterraNativeProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = ADSTERRA_SCRIPT_SRC;
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <aside
      aria-label="Advertisement"
      className={`mx-auto w-full overflow-hidden rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm ${className}`}
    >
      <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
        Advertisement
      </p>
      <div id={ADSTERRA_CONTAINER_ID} className="min-h-[100px] w-full" />
    </aside>
  );
}
