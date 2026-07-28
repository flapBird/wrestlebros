import { Metadata } from "next";
import { siteConfig } from "./site.config";

interface PageSeoInput {
  /** Page-specific title (without site name suffix). If omitted, uses seo.title for home or siteName fallback. */
  title?: string;
  /** Page-specific description. If omitted, falls back to seo.description. */
  description?: string;
  /** Path starting with '/', e.g. '/', '/about'. */
  path: string;
}

export function buildMetadata({ title, description, path }: PageSeoInput): Metadata {
  const isHome = path === "/";
  const pageTitle = isHome
    ? siteConfig.seo.title
    : title
      ? `${title} | ${siteConfig.siteName}`
      : siteConfig.siteName;
  const pageDescription = description ?? siteConfig.seo.description;
  const canonical = `${siteConfig.domain}${path}`;
  const socialImage = `${siteConfig.domain}${siteConfig.seo.ogImage}`;

  return {
    metadataBase: new URL(siteConfig.domain),
    title: pageTitle,
    description: pageDescription,
    keywords: [...siteConfig.seo.keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonical,
      siteName: siteConfig.siteName,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "Wrestle Bros browser wrestling game",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [socialImage],
    },
    // Google Search Console verification
    ...(siteConfig.analytics.gscVerification
      ? { verification: { google: siteConfig.analytics.gscVerification } }
      : {}),
  };
}

/**
 * Build a VideoGame JSON-LD object for the homepage.
 * Validate at https://search.google.com/test/rich-results after deployment.
 */
export function buildVideoGameJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: siteConfig.game.name,
    genre: siteConfig.game.genre,
    applicationCategory: "Game",
    operatingSystem: "Web Browser",
    gamePlatform: "Web browser",
    playMode: ["SinglePlayer", "MultiPlayer"],
    isAccessibleForFree: true,
    contentRating: siteConfig.game.ageRating,
    description: siteConfig.seo.description,
    url: siteConfig.domain,
    image: `${siteConfig.domain}${siteConfig.seo.ogImage}`,
    author: {
      "@type": "Organization",
      name: "Blue Wizard Digital",
    },
  };
}

export function buildFaqJsonLd(
  faqs: readonly { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
