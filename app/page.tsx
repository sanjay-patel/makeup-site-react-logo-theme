import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Link from 'next/link'
import Image from 'next/image'
import { brands } from '@/data/brands'
import FadeIn from '@/components/animations/FadeIn'
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer'
import ScaleIn from '@/components/animations/ScaleIn'

export const metadata: Metadata = {
  title: 'Professional Makeup Artist in Surat | Bridal & Party Makeup Studio',
  description: 'Transform your beauty with professional makeup artistry in Surat, Gujarat for every occasion. Bridal, party, photoshoot, and editorial makeup services.',
  openGraph: {
    title: 'Professional Makeup Artist in Surat | Bridal & Party Makeup Studio',
    description: 'Transform your beauty with professional makeup artistry in Surat, Gujarat for every occasion.',
  },
}

export default function Home() {
  return (
    <>
      <Hero
        title="Transform Your Beauty"
        subtitle="Professional Makeup Artist for Every Occasion"
      />

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Our Services</h2>
          </FadeIn>
          <StaggerContainer className="services-grid">
            <StaggerItem>
              <div className="service-card">
                <div className="service-icon">💄</div>
                <h3>Bridal Makeup</h3>
                <p>
                  Make your special day unforgettable with our stunning bridal
                  makeup services.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="service-card">
                <div className="service-icon">✈️</div>
                <h3>
                  <Link href="/destination-wedding" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Destination Wedding
                  </Link>
                </h3>
                <p>
                  <Link href="/destination-wedding" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Travel anywhere in India for your dream wedding with professional makeup services.
                  </Link>
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="service-card">
                <div className="service-icon">✨</div>
                <h3>Party Makeup</h3>
                <p>Stand out at any event with our glamorous party makeup looks.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="service-card">
                <div className="service-icon">📸</div>
                <h3>Photoshoot Makeup</h3>
                <p>Camera-ready makeup that looks flawless in every shot.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="service-card">
                <div className="service-icon">🎭</div>
                <h3>Editorial Makeup</h3>
                <p>Creative and artistic makeup for fashion and editorial work.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Premium Brands We Use</h2>
            <p className="brands-subtitle">
              We work exclusively with luxury and high-performance makeup brands to ensure flawless results
            </p>
          </FadeIn>
          <StaggerContainer className="brands-grid" staggerDelay={0.05}>
            {brands.map((brand, index) => (
              <StaggerItem key={brand.name}>
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-card"
                >
                  <div className="brand-logo">
                    <Image
                      src={brand.logo || '/images/brands/placeholder.svg'}
                      alt={`${brand.name} - Premium Luxury Makeup Brand used by professional makeup artist`}
                      width={200}
                      height={80}
                      style={{ objectFit: 'contain' }}
                      unoptimized
                    />
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Why Choose Us</h2>
          </FadeIn>
          <StaggerContainer className="features-grid" staggerDelay={0.15}>
            <StaggerItem>
              <div className="feature">
                <h3>Professional Experience</h3>
                <p>Over 5 years of experience in makeup artistry</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="feature">
                <h3>Premium Products</h3>
                <p>We use only high-quality, luxury makeup brands</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="feature">
                <h3>Personalized Service</h3>
                <p>Customized makeup looks tailored to your style</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="feature">
                <h3>On-Time Service</h3>
                <p>Punctual and reliable for all your events</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
