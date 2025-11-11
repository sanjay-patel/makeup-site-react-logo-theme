# Beauty by Artist - Next.js Website

A professional makeup artist website built with Next.js, React, and TypeScript. This is a modern, SEO-friendly conversion of the original static HTML site.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **SEO Optimized** with:
  - Meta tags and Open Graph
  - Structured Data (JSON-LD)
  - Dynamic sitemap
  - Robots.txt
  - Semantic HTML
- **Responsive Design** - Mobile-first approach
- **Client-side Interactions**:
  - Mobile navigation menu
  - Portfolio filtering
  - Contact form validation
  - Modal image viewer
- **Performance Optimized**:
  - Server Components by default
  - Client Components only where needed
  - Optimized CSS

## Project Structure

```
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── portfolio/
│   │   └── page.tsx          # Portfolio page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with SEO
│   ├── page.tsx              # Home page
│   ├── robots.ts             # Robots.txt generator
│   └── sitemap.ts            # Sitemap generator
├── components/
│   ├── ContactForm.tsx       # Contact form with validation
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero section
│   ├── Navbar.tsx            # Navigation with mobile menu
│   ├── PageHeader.tsx        # Page header component
│   ├── PortfolioFilter.tsx   # Portfolio filter & modal
│   └── StructuredData.tsx    # Schema.org JSON-LD
├── public/                   # Static assets
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies
└── tsconfig.json             # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## SEO Features

### Metadata
Each page includes comprehensive metadata:
- Title and description
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs

### Structured Data
The site includes Schema.org structured data for:
- BeautySalon business type
- Contact information
- Opening hours
- Location data

### Sitemap & Robots
- Automatically generated sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`

## Pages

### Home (`/`)
- Hero section with CTA
- Services showcase
- Why Choose Us section

### About (`/about`)
- Artist biography
- Qualifications & experience
- Core values

### Portfolio (`/portfolio`)
- Filterable portfolio items
- Categories: Bridal, Party, Editorial, Photoshoot
- Modal image viewer

### Contact (`/contact`)
- Contact form with validation
- Business information
- Social media links

## Customization

### Updating Content
- Edit page content in `app/*/page.tsx` files
- Modify portfolio items in `components/PortfolioFilter.tsx`
- Update business information in `components/StructuredData.tsx`

### Styling
- Global styles: `app/globals.css`
- Color scheme uses CSS variables for easy theming
- Primary brand color: `#d4a5a5`

### SEO
- Update site URL in `app/layout.tsx` (metadataBase)
- Modify sitemap URLs in `app/sitemap.ts`
- Add Google verification code in `app/layout.tsx`

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## Performance

- Server-side rendering for optimal SEO
- Client components only for interactive features
- Optimized images and assets
- Minimal JavaScript payload

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement approach

## License

This project is private and proprietary.

## Contact

For questions or support, contact info@beautybyartist.com
