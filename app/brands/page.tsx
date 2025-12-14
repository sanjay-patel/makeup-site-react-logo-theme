import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import Link from 'next/link'
import { brands } from '@/data/brands'
import BrandCarousel from '@/components/BrandCarousel'

export const metadata: Metadata = {
  title: 'Premium Makeup Brands | Top Makeup Artist in Surat',
  description: 'Discover the luxury makeup brands used at Bhumi Makeup Artistry in Surat. From Giorgio Armani to Fenty Beauty, we use only authentic, high-quality products for stunning bridal looks.',
  alternates: {
    canonical: '/brands',
  },
  openGraph: {
    title: 'Premium Makeup Brands | Professional Makeup Artist in Surat',
    description: 'Luxury makeup brands including Giorgio Armani, DIOR, Pat McGrath Labs, Charlotte Tilbury, and more. Professional bridal makeup in Surat.',
    url: 'https://bhumimakeupartistry.com/brands',
  },
}

export default function BrandsPage() {
  // Group brands by category
  const brandsByCategory = brands.reduce((acc, brand) => {
    const category = brand.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(brand)
    return acc
  }, {} as Record<string, typeof brands>)

  return (
    <>
      <PageHeader
        title="Premium Brands We Use"
        subtitle="Only the finest luxury makeup products for your special day"
      />

      {/* Introduction Section */}
      <section className="brands-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Our Commitment to Quality</h2>
            <p>
              At Bhumi Makeup Artistry, we believe that exceptional results start with exceptional products.
              That&apos;s why we exclusively work with the world&apos;s most prestigious luxury makeup brands.
              Each product in our kit has been carefully selected for its performance, longevity, and ability
              to create stunning looks that photograph beautifully.
            </p>
            <p>
              All our products are 100% authentic, sourced directly from authorized retailers, and chosen
              specifically for their compatibility with diverse skin types and tones. From the red carpet
              to your wedding day, these are the same premium products used by celebrity makeup artists worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Brands by Category */}
      {Object.entries(brandsByCategory).map(([category, categoryBrands]) => (
        <section key={category} className="brands-category-section">
          <div className="container">
            <h2 className="category-title">{category}</h2>
            <div className="brands-detailed-grid">
              {categoryBrands.map((brand) => (
                <div key={brand.name} className="brand-detail-card">
                  <div className="brand-detail-header">
                    <div className="brand-detail-logo">
                      <Image
                        src={brand.logo || '/images/brands/placeholder.svg'}
                        alt={`${brand.name} logo`}
                        width={180}
                        height={60}
                        style={{ objectFit: 'contain' }}
                        unoptimized
                      />
                    </div>
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brand-website-link"
                    >
                      Visit Website →
                    </a>
                  </div>

                  {brand.carouselImages && brand.carouselImages.length > 0 && (
                    <BrandCarousel
                      brandName={brand.name}
                      images={brand.carouselImages}
                    />
                  )}

                  <div className="brand-detail-content">
                    <h3>{brand.name}</h3>
                    <p className="brand-description">{brand.description}</p>
                    {brand.bestFor && (
                      <div className="brand-best-for">
                        <strong>Best For:</strong>
                        <p>{brand.bestFor}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why Premium Products Matter */}
      <section className="why-premium">
        <div className="container">
          <h2 className="section-title">Why Premium Products Matter</h2>
          <div className="premium-benefits-grid">
            <div className="premium-benefit">
              <div className="benefit-icon">✨</div>
              <h3>Long-Lasting Wear</h3>
              <p>
                Luxury formulas stay flawless for 12+ hours, through tears, hugs,
                and celebrations—no touch-ups needed.
              </p>
            </div>
            <div className="premium-benefit">
              <div className="benefit-icon">📸</div>
              <h3>Camera-Ready Results</h3>
              <p>
                High-definition formulas photograph beautifully without flashback,
                ensuring stunning photos and videos.
              </p>
            </div>
            <div className="premium-benefit">
              <div className="benefit-icon">🌿</div>
              <h3>Skin-Safe & Gentle</h3>
              <p>
                Premium ingredients are gentle on sensitive skin and include
                beneficial skincare properties.
              </p>
            </div>
            <div className="premium-benefit">
              <div className="benefit-icon">🎨</div>
              <h3>Superior Pigmentation</h3>
              <p>
                Rich, buildable color payoff means less product needed and
                more natural-looking results.
              </p>
            </div>
            <div className="premium-benefit">
              <div className="benefit-icon">💧</div>
              <h3>Weather-Resistant</h3>
              <p>
                Formulated to withstand heat, humidity, and tears—perfect for
                Indian wedding conditions.
              </p>
            </div>
            <div className="premium-benefit">
              <div className="benefit-icon">🌈</div>
              <h3>Inclusive Shade Ranges</h3>
              <p>
                Extensive shade selections ensure a perfect match for every
                skin tone and undertone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="brands-faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Are all your products 100% authentic?</h3>
              <p>
                Yes, absolutely. All products are sourced directly from authorized retailers
                and official brand counters. We never use counterfeit or expired products.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I request specific brands or products?</h3>
              <p>
                Of course! If you have a favorite product or brand preference, let us know
                during your consultation. We&apos;ll do our best to incorporate it into your look.
              </p>
            </div>
            {/* <div className="faq-item">
              <h3>What if I have sensitive skin or allergies?</h3>
              <p>
                We carry hypoallergenic and dermatologist-tested options from brands like
                Hourglass and Charlotte Tilbury. Always inform us of any allergies during booking.
              </p>
            </div> */}
            <div className="faq-item">
              <h3>Do you sanitize all products?</h3>
              <p>
                Yes, hygiene is our top priority. All brushes are cleaned and sanitized after
                every use, and we follow strict hygiene protocols for all cream and liquid products.
              </p>
            </div>
            {/* <div className="faq-item">
              <h3>Why don&apos;t you use drugstore makeup brands?</h3>
              <p>
                While some drugstore brands are good, professional luxury makeup offers superior
                longevity, pigmentation, and performance essential for special occasions like weddings.
              </p>
            </div> */}
            {/* <div className="faq-item">
              <h3>Can I purchase the products you use on me?</h3>
              <p>
                We&apos;re happy to share product names and where to purchase them. We can also
                create a personalized product list for you to recreate your look at home.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="brands-cta">
        <div className="container">
          <div className="cta-content">
            <h2>See These Products in Action</h2>
            <p>
              Explore our portfolio to see the stunning results we achieve with these premium brands
            </p>
            <div className="cta-buttons">
              <Link href="/portfolio" className="btn btn-primary">
                View Portfolio
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
