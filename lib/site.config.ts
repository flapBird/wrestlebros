/**
 * Site configuration — the single source of truth for the entire game site.
 * When creating a new game site, only edit this file and replace images in /public.
 */
export const siteConfig = {
  /** Display name shown in header, footer, and browser title. */
  siteName: "Wrestle Bros",

  /** Canonical domain, no trailing slash. Used for sitemap, OG URLs, etc. */
  domain: "https://wrestlebros.xyz",

  seo: {
    /** Homepage <title>. Used as-is on the homepage. */
    title: "Play Wrestle Bros Online Free | Wrestling Bros Game",

    /**
     * Homepage meta description, keep under 160 characters.
     * Describe what the game is and that it's free to play online.
     */
    description:
      "Play Wrestle Bros (also called Wrestling Bros), a physics-based fighting game with multiple modes and custom characters. Free online, no download needed.",

    /** Comma-separated keywords for the homepage. */
    keywords: ["wrestle bros", "wrestling game", "2 player wrestling game", "free online wrestling game", "wrestle bros online", "physics wrestling game", "multiplayer wrestling browser game"],

    /** Social sharing image, 1200x630px. Replace /public/og-image.png. */
    ogImage: "/og-image.png",

    /** Twitter/X handle, can be left empty. */
    twitterHandle: "",
  },

  game: {
    /** Name of the game, shown in Hero, JSON-LD, etc. */
    name: "Wrestle Bros",

    /** Genre(s) for JSON-LD VideoGame.genre. e.g. ["Sports", "Basketball"]. */
    genre: ["Fighting", "Sports", "Wrestling"],

    /** iframe embed URL — must be manually replaced with the real embeddable URL. */
    embedUrl: "https://wrestlebros.io/?v=20241120221222",

    /** Aspect ratio of the embedded game, used to prevent CLS. */
    aspectRatio: "16 / 9",

    /** Cover image shown on the idle/launch screen. Replace /public/cover.jpg. */
    coverImage: "/wrestlebros-desc-1.jpeg",

    /** Age rating for the game. */
    ageRating: "Everyone",

    /** Attribution displayed below the game and in the footer. */
    sourceAttribution: "Game by Blue Wizard Digital · Official embed",
  },

  theme: {
    /**
     * Bright & playful color palette.
     * Adjust per-game to match its visual style, but keep the overall bright tone.
     */
    primary: "#e85d2c",
    secondary: "#009bb8",
    background: "#f0ecf5",
    surface: "#f6f3fa",
    textDark: "#292524",
    fontHeading: "'Nunito', sans-serif",
    fontBody: "'Quicksand', sans-serif",
  },

  contact: {
    /** Contact email shown on /contact and in legal pages. */
    email: "hello@wrestlebros.xyz",
  },

  legal: {
    /** Last updated date for Privacy / Terms pages. */
    lastUpdated: "2026-07-09",
  },

  ads: {
    /**
     * Keep false until AdSense is approved and real ad code is added.
     * When true, sidebar and rectangle ad slots appear on the page.
     */
    enabled: false,
    /** AdSense publisher ID from env, e.g. ca-pub-xxxxxxxxxxxxxx. Empty when unset. */
    clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "",
  },

  analytics: {
    /** Google Analytics 4 measurement ID, e.g. G-XXXXXXXX. Leave empty to skip GA. */
    gaId: process.env.NEXT_PUBLIC_GA_ID || "",
    /** Google Search Console verification code. Leave empty to skip. */
    gscVerification: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;