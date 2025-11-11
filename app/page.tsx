import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Transform your beauty with professional makeup artistry for every occasion. Bridal, party, photoshoot, and editorial makeup services.',
  openGraph: {
    title: 'Home | Beauty by Artist',
    description: 'Transform your beauty with professional makeup artistry for every occasion.',
  },
}

export default function Home() {
  return (
    <>
      <Hero
        title="Transform Your Beauty"
        subtitle="Professional Makeup Artistry for Every Occasion"
      />

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💄</div>
              <h3>Bridal Makeup</h3>
              <p>
                Make your special day unforgettable with our stunning bridal
                makeup services.
              </p>
            </div>
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
            <div className="service-card">
              <div className="service-icon">✨</div>
              <h3>Party Makeup</h3>
              <p>Stand out at any event with our glamorous party makeup looks.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📸</div>
              <h3>Photoshoot Makeup</h3>
              <p>Camera-ready makeup that looks flawless in every shot.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎭</div>
              <h3>Editorial Makeup</h3>
              <p>Creative and artistic makeup for fashion and editorial work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Professional Experience</h3>
              <p>Over 10 years of experience in makeup artistry</p>
            </div>
            <div className="feature">
              <h3>Premium Products</h3>
              <p>We use only high-quality, luxury makeup brands</p>
            </div>
            <div className="feature">
              <h3>Personalized Service</h3>
              <p>Customized makeup looks tailored to your style</p>
            </div>
            <div className="feature">
              <h3>On-Time Service</h3>
              <p>Punctual and reliable for all your events</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
