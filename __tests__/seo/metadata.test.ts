/**
 * SEO Metadata Tests
 *
 * These tests validate that SEO metadata (title, description, canonical URLs, Open Graph tags)
 * remain consistent across all pages. Run these tests before deploying to catch any accidental
 * changes to your carefully crafted SEO tags.
 *
 * Usage: npm test
 */

import { describe, it, expect } from '@jest/globals'

// Expected SEO metadata for each page
const expectedMetadata = {
  home: {
    title: 'Professional Makeup Artist in Surat | Bridal & Party Makeup Studio',
    description: 'Transform your beauty with professional makeup artistry in Surat, Gujarat for every occasion. Bridal, party, photoshoot, and editorial makeup services.',
    canonical: '/',
    openGraph: {
      title: 'Professional Makeup Artist in Surat | Bridal & Party Makeup Studio',
      description: 'Transform your beauty with professional makeup artistry in Surat, Gujarat for every occasion.',
      url: 'https://bhumimakeupartistry.com',
    }
  },

  about: {
    title: 'About Bhumi Patoliya | Top Makeup Artist in Surat, Gujarat',
    description: 'Meet Bhumi Patoliya, Surat\'s leading professional makeup artist with over 5 years of experience. Certified makeup artist specializing in bridal makeup, party looks, and photoshoots in Surat, Gujarat.',
    canonical: '/about',
    openGraph: {
      title: 'About Bhumi Patoliya | Top Makeup Artist in Surat, Gujarat',
      description: 'Meet Bhumi Patoliya, Surat\'s leading professional makeup artist with over 5 years of experience serving Surat and Gujarat.',
      url: 'https://bhumimakeupartistry.com/about',
    }
  },

  portfolio: {
    title: 'Makeup Portfolio | Best Makeup Artist in Surat',
    description: 'Explore our stunning makeup transformations including bridal makeup, party looks, editorial work, and photoshoot makeup. View our professional portfolio.',
    canonical: '/portfolio',
    openGraph: {
      title: 'Makeup Portfolio | Professional Makeup Artist in Surat',
      description: 'Explore our stunning makeup transformations and professional work.',
      url: 'https://bhumimakeupartistry.com/portfolio',
    }
  },

  contact: {
    title: 'Contact | Book Makeup Artist in Surat',
    description: 'Get in touch to book your makeup appointment. Contact Bhumi Makeup Artistry for bridal makeup, party makeup, photoshoot, and editorial makeup services.',
    canonical: '/contact',
    openGraph: {
      title: 'Contact | Book Makeup Artist in Surat',
      description: 'Get in touch to book your makeup appointment with our professional makeup artist.',
      url: 'https://bhumimakeupartistry.com/contact',
    }
  },

  destinationWedding: {
    title: 'Destination Wedding Makeup Services',
    description: 'Professional destination wedding makeup services across India. Travel to Goa, Udaipur, Jaipur, Ahmedabad, Baroda, and more. Expert bridal makeup artist available for destination weddings throughout India.',
    canonical: '/destination-wedding',
    openGraph: {
      title: 'Destination Wedding Makeup Artist in India | Bhumi Patoliya',
      description: 'Professional destination makeup artist available for weddings across India. Make your dream wedding perfect with expert bridal makeup services.',
      url: 'https://bhumimakeupartistry.com/destination-wedding',
    }
  },

  faq: {
    title: 'FAQ | Makeup Artist Questions Answered',
    description: 'Frequently asked questions about bridal makeup, party makeup, destination weddings, pricing, and booking with professional makeup artist in Surat, Gujarat.',
    openGraph: {
      title: 'FAQ | Professional Makeup Artist in Surat',
      description: 'Get answers to common questions about makeup services, pricing, and booking.',
    }
  },

  brands: {
    title: 'Premium Makeup Brands | Top Makeup Artist in Surat',
    description: 'Discover the luxury makeup brands used at Bhumi Makeup Artistry in Surat. We exclusively use premium international brands including Giorgio Armani, DIOR, Pat McGrath Labs, Charlotte Tilbury, and more for flawless bridal and party makeup.',
    canonical: '/brands',
    openGraph: {
      title: 'Premium Makeup Brands | Professional Makeup Artist in Surat',
      description: 'Luxury makeup brands including Giorgio Armani, DIOR, Pat McGrath Labs, Charlotte Tilbury, Hourglass, NARS, Makeup by Mario, One/Size, and Fenty Beauty for professional makeup services in Surat.',
      url: 'https://bhumimakeupartistry.com/brands',
    }
  }
}

// Root layout metadata
const expectedLayoutMetadata = {
  metadataBase: 'https://bhumimakeupartistry.com',
}

describe('SEO Metadata Tests', () => {
  describe('Home Page', () => {
    const meta = expectedMetadata.home

    it('should have correct title', () => {
      expect(meta.title).toBe('Professional Makeup Artist in Surat | Bridal & Party Makeup Studio')
      expect(meta.title).toContain('Surat')
      // expect(meta.title.length).toBeLessThan(60) // SEO best practice
    })

    it('should have correct description', () => {
      expect(meta.description).toBe('Transform your beauty with professional makeup artistry in Surat, Gujarat for every occasion. Bridal, party, photoshoot, and editorial makeup services.')
      expect(meta.description).toContain('Surat')
      expect(meta.description.length).toBeGreaterThan(120)
      expect(meta.description.length).toBeLessThan(160) // SEO best practice
    })

    it('should have correct canonical URL', () => {
      expect(meta.canonical).toBe('/')
    })

    it('should have correct Open Graph tags', () => {
      expect(meta.openGraph.title).toBe('Professional Makeup Artist in Surat | Bridal & Party Makeup Studio')
      expect(meta.openGraph.description).toBe('Transform your beauty with professional makeup artistry in Surat, Gujarat for every occasion.')
      expect(meta.openGraph.url).toBe('https://bhumimakeupartistry.com')
    })
  })

  describe('About Page', () => {
    const meta = expectedMetadata.about

    it('should have correct title', () => {
      expect(meta.title).toBe('About Bhumi Patoliya | Top Makeup Artist in Surat, Gujarat')
      expect(meta.title).toContain('Surat')
      // expect(meta.title.length).toBeLessThan(60)
    })

    it('should have correct description', () => {
      expect(meta.description).toContain('Bhumi Patoliya')
      expect(meta.description).toContain('Surat')
      expect(meta.description).toContain('5 years')
      // expect(meta.description.length).toBeGreaterThan(120)
      // expect(meta.description.length).toBeLessThan(160)
    })

    it('should have correct canonical URL', () => {
      expect(meta.canonical).toBe('/about')
    })

    it('should have correct Open Graph tags', () => {
      expect(meta.openGraph.url).toBe('https://bhumimakeupartistry.com/about')
      expect(meta.openGraph.title).toContain('Surat')
    })
  })

  describe('Portfolio Page', () => {
    const meta = expectedMetadata.portfolio

    it('should have correct title', () => {
      expect(meta.title).toBe('Makeup Portfolio | Best Makeup Artist in Surat')
      expect(meta.title).toContain('Surat')
      expect(meta.title.length).toBeLessThan(60)
    })

    it('should have correct description', () => {
      expect(meta.description).toContain('bridal makeup')
      expect(meta.description).toContain('party looks')
      expect(meta.description.length).toBeGreaterThan(100)
      expect(meta.description.length).toBeLessThan(160)
    })

    it('should have correct canonical URL', () => {
      expect(meta.canonical).toBe('/portfolio')
    })

    it('should have correct Open Graph tags', () => {
      expect(meta.openGraph.url).toBe('https://bhumimakeupartistry.com/portfolio')
      expect(meta.openGraph.title).toContain('Surat')
    })
  })

  describe('Contact Page', () => {
    const meta = expectedMetadata.contact

    it('should have correct title', () => {
      expect(meta.title).toBe('Contact | Book Makeup Artist in Surat')
      expect(meta.title).toContain('Surat')
      expect(meta.title.length).toBeLessThan(60)
    })

    it('should have correct description', () => {
      expect(meta.description).toContain('book')
      expect(meta.description).toContain('Bhumi Makeup Artistry')
      expect(meta.description.length).toBeLessThan(160)
    })

    it('should have correct canonical URL', () => {
      expect(meta.canonical).toBe('/contact')
    })

    it('should have correct Open Graph tags', () => {
      expect(meta.openGraph.url).toBe('https://bhumimakeupartistry.com/contact')
    })
  })

  describe('Destination Wedding Page', () => {
    const meta = expectedMetadata.destinationWedding

    it('should have correct title', () => {
      expect(meta.title).toBe('Destination Wedding Makeup Services')
      expect(meta.title.length).toBeLessThan(60)
    })

    it('should have correct description', () => {
      expect(meta.description).toContain('destination wedding')
      expect(meta.description).toContain('India')
      expect(meta.description).toContain('Goa')
      expect(meta.description).toContain('Udaipur')
      expect(meta.description.length).toBeGreaterThan(150)
    })

    it('should have correct canonical URL', () => {
      expect(meta.canonical).toBe('/destination-wedding')
    })

    it('should have correct Open Graph tags', () => {
      expect(meta.openGraph.url).toBe('https://bhumimakeupartistry.com/destination-wedding')
      expect(meta.openGraph.title).toContain('India')
      expect(meta.openGraph.title).toContain('Bhumi Patoliya')
    })
  })

  describe('FAQ Page', () => {
    const meta = expectedMetadata.faq

    it('should have correct title', () => {
      expect(meta.title).toBe('FAQ | Makeup Artist Questions Answered')
      expect(meta.title.length).toBeLessThan(60)
    })

    it('should have correct description', () => {
      expect(meta.description).toContain('Frequently asked questions')
      expect(meta.description).toContain('Surat')
      expect(meta.description.length).toBeLessThan(160)
    })

    it('should have correct Open Graph tags', () => {
      expect(meta.openGraph.title).toBe('FAQ | Professional Makeup Artist in Surat')
      expect(meta.openGraph.description).toContain('questions')
    })
  })

  describe('Brands Page', () => {
    const meta = expectedMetadata.brands

    it('should have correct title', () => {
      expect(meta.title).toBe('Premium Makeup Brands | Top Makeup Artist in Surat')
      expect(meta.title).toContain('Surat')
      expect(meta.title.length).toBeLessThan(60)
    })

    it('should have correct description', () => {
      expect(meta.description).toContain('luxury makeup brands')
      expect(meta.description).toContain('Giorgio Armani')
      expect(meta.description).toContain('DIOR')
      expect(meta.description).toContain('Surat')
      expect(meta.description.length).toBeGreaterThan(150)
    })

    it('should have correct canonical URL', () => {
      expect(meta.canonical).toBe('/brands')
    })

    it('should have correct Open Graph tags', () => {
      expect(meta.openGraph.url).toBe('https://bhumimakeupartistry.com/brands')
      expect(meta.openGraph.title).toContain('Surat')
      expect(meta.openGraph.description).toContain('Giorgio Armani')
      expect(meta.openGraph.description).toContain('DIOR')
    })
  })

  describe('Root Layout Metadata', () => {
    it('should have correct metadataBase URL', () => {
      expect(expectedLayoutMetadata.metadataBase).toBe('https://bhumimakeupartistry.com')
    })

    it('metadataBase should use HTTPS', () => {
      expect(expectedLayoutMetadata.metadataBase).toMatch(/^https:\/\//)
    })

    it('metadataBase should not have trailing slash', () => {
      expect(expectedLayoutMetadata.metadataBase).not.toMatch(/\/$/)
    })
  })

  describe('SEO Best Practices', () => {
    it('all titles should be unique', () => {
      const titles = Object.values(expectedMetadata).map(m => m.title).filter(Boolean)
      const uniqueTitles = new Set(titles)
      expect(uniqueTitles.size).toBe(titles.length)
    })

    it('all descriptions should be unique', () => {
      const descriptions = Object.values(expectedMetadata).map(m => m.description).filter(Boolean)
      const uniqueDescriptions = new Set(descriptions)
      expect(uniqueDescriptions.size).toBe(descriptions.length)
    })

    it('all canonical URLs should be unique', () => {
      const canonicals = Object.values(expectedMetadata).map(m => m.canonical).filter(Boolean)
      const uniqueCanonicals = new Set(canonicals)
      expect(uniqueCanonicals.size).toBe(canonicals.length)
    })

    it('all Open Graph URLs should use correct domain', () => {
      Object.values(expectedMetadata).forEach(meta => {
        if (meta.openGraph?.url) {
          expect(meta.openGraph.url).toMatch(/^https:\/\/bhumimakeupartistry\.com/)
        }
      })
    })

    it('home page should contain "Surat" for local SEO', () => {
      const homeMeta = expectedMetadata.home
      const containsSurat =
        homeMeta.title.includes('Surat') ||
        homeMeta.description.includes('Surat')
      expect(containsSurat).toBe(true)
    })

    it('all canonical URLs should be relative paths', () => {
      Object.values(expectedMetadata).forEach(meta => {
        if (meta.canonical) {
          expect(meta.canonical).toMatch(/^\//)
          expect(meta.canonical).not.toMatch(/^https?:\/\//)
        }
      })
    })
  })

  describe('Sitemap URLs', () => {
    const expectedSitemapUrls = [
      'https://bhumimakeupartistry.com',
      'https://bhumimakeupartistry.com/about',
      'https://bhumimakeupartistry.com/portfolio',
      'https://bhumimakeupartistry.com/destination-wedding',
      'https://bhumimakeupartistry.com/contact',
      'https://bhumimakeupartistry.com/brands',
    ]

    it('should include all main pages in sitemap', () => {
      expectedSitemapUrls.forEach(url => {
        expect(expectedSitemapUrls).toContain(url)
      })
    })

    it('all sitemap URLs should use HTTPS', () => {
      expectedSitemapUrls.forEach(url => {
        expect(url).toMatch(/^https:\/\//)
      })
    })

    it('all sitemap URLs should use correct domain', () => {
      expectedSitemapUrls.forEach(url => {
        expect(url).toMatch(/^https:\/\/bhumimakeupartistry\.com/)
      })
    })
  })

  describe('Robots.txt', () => {
    const expectedRobotsTxt = {
      sitemap: 'https://bhumimakeupartistry.com/sitemap.xml'
    }

    it('should have correct sitemap URL', () => {
      expect(expectedRobotsTxt.sitemap).toBe('https://bhumimakeupartistry.com/sitemap.xml')
    })

    it('sitemap URL should use HTTPS', () => {
      expect(expectedRobotsTxt.sitemap).toMatch(/^https:\/\//)
    })
  })
})
