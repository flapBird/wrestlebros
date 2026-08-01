/** Shared site, SEO, game, and integration settings. */
export const siteConfig = {
  /** Display name shown in header, footer, and browser title. */
  siteName: "Wrestle Bros",

  /** Canonical domain, no trailing slash. Used for sitemap, OG URLs, etc. */
  domain: "https://wrestlebros.xyz",

  seo: {
    /** Homepage <title>. Used as-is on the homepage. */
    title: "Wrestle Bros Online – Free Browser Wrestling Game",

    /**
     * Homepage meta description, keep under 160 characters.
     * Describe what the game is and that it's free to play online.
     */
    description:
      "Play Wrestle Bros online for free. Check the controls, learn how to pin an opponent, and use tournament, local two-player, or online game modes.",

    /** Social sharing image, 1200x630px. */
    ogImage: "/og-image-v2.jpg",

    /** Twitter/X handle, can be left empty. */
    twitterHandle: "",
  },

  game: {
    /** Name of the game, shown in Hero, JSON-LD, etc. */
    name: "Wrestle Bros",

    /** Genre(s) for JSON-LD VideoGame.genre. e.g. ["Sports", "Basketball"]. */
    genre: ["Fighting", "Sports", "Wrestling"],

    /** Game embed served by the developer's Wrestle Bros domain. */
    embedUrl: "https://wrestlebros.io/?v=20241120221222",

    /** Age rating for the game. */
    ageRating: "Everyone",

    sourceAttribution: "Wrestle Bros is developed by Blue Wizard Digital",
  },

  contact: {
    /** Contact email shown on /contact and in legal pages. */
    email: "contact@wrestlebros.xyz",
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
