# Wrestle Bros

Website: https://wrestlebros.xyz/

Wrestle Bros is an online wrestling game site built with Next.js. It embeds a physics-based wrestling game by Blue Wizard Digital, supporting single-player AI matches and local two-player battles — no downloads or sign-up required, just open the browser and play.

## Tech Stack

- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Fonts: Nunito + Quicksand (Google Fonts)
- Deployment: Vercel

## Project Structure

```
├── app/                      # Page routes
│   ├── layout.tsx            # Global layout (Header, Footer, GA, AdSense)
│   ├── page.tsx              # Homepage (game embed + content)
│   ├── about/                # About page
│   ├── contact/              # Contact page
│   ├── privacy/              # Privacy policy
│   ├── terms/                # Terms of service
│   ├── robots.ts             # robots.txt config
│   ├── sitemap.ts            # sitemap.xml config
│   └── globals.css           # Global styles
├── components/               # UI components
│   ├── Header.tsx            # Top navbar
│   ├── Hero.tsx              # Game embed section
│   ├── GameEmbed.tsx         # Game iframe wrapper
│   ├── GameContent.tsx       # Game description, features, FAQ
│   ├── Footer.tsx            # Footer
│   ├── SidebarLayout.tsx     # Content layout with ad slots
│   ├── AdSlot.tsx            # Ad placeholder component
│   ├── LegalPage.tsx         # Legal page layout
│   └── SchemaMarkup.tsx      # JSON-LD structured data
├── lib/
│   ├── site.config.ts        # Site configuration (domain, game info, theme)
│   └── seo.ts                # SEO utilities
├── public/                   # Static assets
│   ├── favicon.ico
│   ├── og-image.png
│   ├── wrestlebros-desc-1.jpeg
│   ├── wrestlebros-desc-2.jpeg
│   └── wrestlebros-desc-3.jpeg
└── .env.example              # Environment variable template
```

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Preview at http://localhost:3000.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in as needed:

```
NEXT_PUBLIC_GA_ID=            # Google Analytics 4 Measurement ID
NEXT_PUBLIC_ADSENSE_CLIENT_ID= # Google AdSense Publisher ID
```

## Deployment

Recommended: Vercel.

1. Import the repository into Vercel
2. Framework Preset auto-detects Next.js
3. Add environment variables in project settings
4. Bind your domain and deploy

## Customization

### Theme Colors

Edit the `theme` section in `lib/site.config.ts`:

- `primary` — Main accent color (buttons, links)
- `secondary` — Secondary accent
- `background` — Page background
- `surface` — Content panel background
- `textDark` — Body text color

### Images

Replace files in `public/` and update the `coverImage` path in `lib/site.config.ts`.

### Game Content

The game description, controls, features, and FAQ live in `components/GameContent.tsx`.

## License

MIT
