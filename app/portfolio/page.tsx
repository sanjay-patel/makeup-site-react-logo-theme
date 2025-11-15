import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our stunning makeup transformations including bridal makeup, party looks, editorial work, and photoshoot makeup. View our professional portfolio.',
  openGraph: {
    title: 'Portfolio | Beauty by Artist',
    description: 'Explore our stunning makeup transformations and professional work.',
  },
}

const portfolioImages = [
  {
    id: 1,
    src: '/images/portfolio/portfolio_image_1.jpg',
    alt: 'Professional Makeup Work 1',
  },
  {
    id: 2,
    src: '/images/portfolio/portfolio_image_2.jpg',
    alt: 'Professional Makeup Work 2',
  },
  {
    id: 3,
    src: '/images/portfolio/porfolio_image_3.jpg',
    alt: 'Professional Makeup Work 3',
  },
  {
    id: 4,
    src: '/images/portfolio/portfolio_image_4.jpg',
    alt: 'Professional Makeup Work 4',
  },
  {
    id: 5,
    src: '/images/portfolio/portfolio_image_7.jpg',
    alt: 'Professional Makeup Work 5',
  },
  {
    id: 6,
    src: '/images/portfolio/portfolio_image_6.jpg',
    alt: 'Professional Makeup Work 6',
  },
]

export default function Portfolio() {
  return (
    <>
      <PageHeader
        title="Portfolio"
        subtitle="Explore our stunning makeup transformations"
      />

      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-grid">
            {portfolioImages.map((image) => (
              <div key={image.id} className="portfolio-item">
                <div className="portfolio-image">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={400}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
