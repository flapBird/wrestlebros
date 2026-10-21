/** Shared guide index used by the homepage, footer, and guide pages. */
export const guideUpdated = "2026-10-22";

export const guides = [
  {
    href: "/wrestle-bros-unblocked",
    label: "Play & troubleshoot",
    title: "Wrestle Bros Unblocked",
    short:
      "Open the game in a browser, choose a mode, and fix the common reasons the frame does not load.",
  },
  {
    href: "/wrestle-bros-controls",
    label: "Keyboard guide",
    title: "Wrestle Bros Controls",
    short:
      "Solo and local two-player key maps, plus what to check when the game ignores your keys.",
  },
  {
    href: "/wrestle-bros-how-to-pin",
    label: "Winning guide",
    title: "How to Pin in Wrestle Bros",
    short:
      "The three-step pin sequence, the timing window, and the mistakes that let opponents escape.",
  },
] as const;

export type Guide = (typeof guides)[number];
