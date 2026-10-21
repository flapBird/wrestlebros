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
      ? title.includes(siteConfig.siteName)
        ? title
        : `${title} | ${siteConfig.siteName}`
      : siteConfig.siteName;
  const pageDescription = description ?? siteConfig.seo.description;
  // Keep absolute URLs as strings so Next preserves the homepage's trailing slash.
  const canonical = isHome
    ? `${siteConfig.domain}/`
    : `${siteConfig.domain}${path}`;
  const socialImage = `${siteConfig.domain}${siteConfig.seo.ogImage}`;

  return {
    title: pageTitle,
    description: pageDescription,
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
    url: `${siteConfig.domain}/`,
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

export function buildBreadcrumbJsonLd(
  items: readonly { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.domain}${item.path}`,
    })),
  };
}

export function buildArticleJsonLd({
  path,
  title,
  description,
  updated,
}: {
  path: string;
  title: string;
  description: string;
  updated: string;
}) {
  const url = `${siteConfig.domain}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    datePublished: updated,
    dateModified: updated,
    image: `${siteConfig.domain}${siteConfig.seo.ogImage}`,
    author: {
      "@type": "Organization",
      name: siteConfig.siteName,
      url: `${siteConfig.domain}/`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.siteName,
      url: `${siteConfig.domain}/`,
    },
  };
}
