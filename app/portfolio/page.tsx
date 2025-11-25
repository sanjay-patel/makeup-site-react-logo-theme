import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer'

export const metadata: Metadata = {
  title: 'Makeup Portfolio | Best Makeup Artist in Surat',
  description: 'Explore our stunning makeup transformations including bridal makeup, party looks, editorial work, and photoshoot makeup. View our professional portfolio.',
  openGraph: {
    title: 'Makeup Portfolio | Professional Makeup Artist in Surat',
    description: 'Explore our stunning makeup transformations and professional work.',
  },
}

const portfolioImages = [
  {
    id: 1,
    src: '/images/portfolio/portfolio_image_1.jpg',
    alt: 'Bridal makeup artist in Surat - Professional wedding makeup with flawless finish',
  },
  {
    id: 2,
    src: '/images/portfolio/portfolio_image_2.jpg',
    alt: 'Indian bridal makeup look - Traditional wedding makeup by Bhumi Makeup Artistry Surat',
  },
  {
    id: 3,
    src: '/images/portfolio/porfolio_image_3.jpg',
    alt: 'Destination wedding makeup artist - Professional bridal makeup for destination weddings in India',
  },
  {
    id: 4,
    src: '/images/portfolio/portfolio_image_4.jpg',
    alt: 'Party makeup artist Surat - Glamorous evening makeup look for special occasions',
  },
  {
    id: 5,
    src: '/images/portfolio/portfolio_image_7.jpg',
    alt: 'Professional photoshoot makeup - Camera ready makeup by certified makeup artist in Surat',
  },
  {
    id: 6,
    src: '/images/portfolio/portfolio_image_6.jpg',
    alt: 'Editorial makeup artist Gujarat - Creative makeup for fashion and editorial photoshoots',
  },
]

export default function Portfolio() {
  return (
    <>
      <PageHeader
        title="Portfolio"
        subtitle="Explore our stunning makeup transformations"
      />

      {/* Introduction Text */}
      <section className="about-content" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div className="about-text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p>
              View my work as a professional makeup artist in Surat, Gujarat. This portfolio features
              bridal makeup, party looks, destination weddings, and editorial photoshoots using premium
              makeup brands for clients across Surat and India.
            </p>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="container">
          <StaggerContainer className="portfolio-grid" staggerDelay={0.1}>
            {portfolioImages.map((image) => (
              <StaggerItem key={image.id}>
                <div className="portfolio-item">
                  <div className="portfolio-image">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={500}
                      height={500}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
