import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import Image from 'next/image'
import FadeIn from '@/components/animations/FadeIn'
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer'

export const metadata: Metadata = {
  title: 'Destination Wedding Makeup Services',
  description: 'Professional destination wedding makeup services across India. Travel to Goa, Udaipur, Jaipur, Ahmedabad, Baroda, and more. Expert bridal makeup artist available for destination weddings throughout India.',
  keywords: ['destination wedding makeup India', 'travel makeup artist India', 'wedding makeup services India', 'bridal makeup Goa', 'destination bridal artist India', 'wedding makeup Udaipur', 'wedding makeup Ahmedabad', 'wedding makeup Baroda', 'bridal makeup Gujarat'],
  openGraph: {
    title: 'Destination Wedding Makeup Artist in India | Bhumi Patoliya',
    description: 'Professional destination makeup artist available for weddings across India. Make your dream wedding perfect with expert bridal makeup services.',
  },
}

export default function DestinationWedding() {
  return (
    <>
      <PageHeader
        title="Destination Wedding Services"
        subtitle="Professional destination wedding makeup artist serving all of India"
      />

      {/* Introduction Section */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <FadeIn direction="left">
              <div className="about-image">
                <Image
                  src="/images/destination-wedding.png"
                  alt="Destination Wedding Makeup Services"
                  width={400}
                  height={400}
                  className="destination-wedding-photo"
                  priority
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="about-text">
                <h2>Your Perfect Wedding, Anywhere</h2>
                <p>
                  Planning a destination wedding in India? As an experienced destination makeup artist,
                  I bring professional makeup services to your special location. Whether it&apos;s a beach
                  wedding in Goa, a palace wedding in Udaipur, a heritage celebration in Jaipur, or a
                  luxurious venue in Ahmedabad or Baroda, I&apos;ll be there to make you look absolutely
                  stunning on your big day.
                </p>
                <p>
                  With over 5 years of experience and extensive travel portfolio across India as a
                  destination makeup artist, I understand the unique challenges and requirements of
                  destination weddings. I bring premium products, professional equipment, and expertise
                  to ensure flawless makeup that lasts throughout your celebration, from traditional
                  ceremonies to contemporary receptions.
                </p>
                <p>
                  Our destination wedding services are tailored to accommodate different climates,
                  regional customs, and venue requirements across India, ensuring you look perfect
                  from the mehendi and sangeet through the wedding ceremony and reception.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="services">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">What&apos;s Included</h2>
          </FadeIn>
          <StaggerContainer className="services-grid">
            <StaggerItem>
              <div className="service-card">
                <div className="service-icon">✈️</div>
                <h3>Travel Across India</h3>
                <p>
                  We travel to your destination wedding location anywhere in India, bringing
                  all necessary professional equipment and products.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="service-card">
                <div className="service-icon">💄</div>
                <h3>Bridal Makeup</h3>
                <p>
                  Complete bridal makeup service with premium
                  products and long-lasting application techniques.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="service-card">
                <div className="service-icon">👰</div>
                <h3>Bridal Party</h3>
                <p>
                  Makeup services for bridesmaids, mother of the bride, and entire
                  bridal party with coordinated looks.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="service-card">
                <div className="service-icon">🌴</div>
                <h3>Climate Adapted</h3>
                <p>
                  Specialized techniques and products for different climates -
                  tropical, humid, cold, or dry conditions.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="service-card">
                <div className="service-icon">⏰</div>
                <h3>Multi-Day Events</h3>
                <p>
                  Available for all your wedding functions including mehendi, sangeet,
                  haldi, and the main wedding ceremony.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="service-card">
                <div className="service-icon">🎨</div>
                <h3>Touch-Up Service</h3>
                <p>
                  On-site touch-up services throughout your wedding day to ensure you
                  look perfect in every photo.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Packages */}
      <section className="qualifications">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Destination Wedding Packages</h2>
          </FadeIn>
          <div className="qualifications-grid">
            <div className="qualification-card">
              <h3>Essential Package</h3>
              <p>
                Bride makeup, travel to destination, premium
                products, and basic touch-up kit.
              </p>
            </div>
            <div className="qualification-card">
              <h3>Deluxe Package</h3>
              <p>
                Bride + 4 bridesmaids, multi-day availability,
                on-site touch-ups, and emergency kit.
              </p>
            </div>
            <div className="qualification-card">
              <h3>Premium Package</h3>
              <p>
                Full bridal party (up to 10 people),
                dedicated artist for entire event, touch-up services all day.
              </p>
            </div>
            <div className="qualification-card">
              <h3>Custom Package</h3>
              <p>
                Tailored to your specific needs, including pre-wedding events,
                extended services, and multiple locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="values">
        <div className="container">
          <h2 className="section-title">Why Choose Us for Your Destination Wedding</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Extensive Travel Experience</h3>
              <p>
                We&apos;ve worked at destination weddings across India, from
                tropical beaches to royal palaces and heritage properties.
              </p>
            </div>
            <div className="value-item">
              <h3>Climate Expertise</h3>
              <p>
                Specialized knowledge in makeup techniques for different weather
                conditions - humidity, heat, cold, or altitude.
              </p>
            </div>
            <div className="value-item">
              <h3>Professional Reliability</h3>
              <p>
                We arrive early, prepared for any situation, with backup products
                and equipment to ensure nothing goes wrong.
              </p>
            </div>
            <div className="value-item">
              <h3>Long-Lasting Results</h3>
              <p>
                Using premium, waterproof, and long-wear products that withstand
                tears, heat, humidity, and hours of celebration.
              </p>
            </div>
            <div className="value-item">
              <h3>Complete Peace of Mind</h3>
              <p>
                Comprehensive insurance, professional contracts, and clear
                communication throughout the planning process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      {/* <section className="about-content" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-title">Popular Destination Wedding Locations in India</h2>
          <div className="about-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p>
              We&apos;ve had the privilege of working at beautiful destination weddings
              across India in various stunning locations including:
            </p>
            <ul style={{ marginLeft: '2rem', marginTop: '1rem', lineHeight: '2' }}>
              <li><strong>Goa</strong> - Tropical beach weddings with stunning sunset ceremonies and beachside receptions</li>
              <li><strong>Udaipur, Rajasthan</strong> - Royal palace weddings at heritage hotels and lakeside venues</li>
              <li><strong>Jaipur, Rajasthan</strong> - Majestic fort and palace weddings with traditional Rajasthani grandeur</li>
              <li><strong>Ahmedabad, Gujarat</strong> - Luxurious hotel and resort weddings with vibrant Gujarati celebrations</li>
              <li><strong>Baroda (Vadodara), Gujarat</strong> - Elegant palace and heritage venue weddings with cultural richness</li>
              <li><strong>Rishikesh & Mussoorie</strong> - Mountain and riverside weddings with scenic Himalayan backdrops</li>
              <li><strong>Jim Corbett</strong> - Wildlife resort weddings surrounded by nature and luxury</li>
              <li><strong>Alibaug & Lonavala</strong> - Beach and hill station weddings near Mumbai</li>
              <li><strong>Jodhpur, Rajasthan</strong> - Blue city heritage weddings in magnificent forts and palaces</li>
              <li><strong>Shimla & Manali</strong> - Hill station weddings with mountain views and pine forests</li>
            </ul>
            <p style={{ marginTop: '2rem' }}>
              No matter where in India your dream wedding takes you, we&apos;re ready to travel and
              ensure you look absolutely breathtaking on your special day.
            </p>
          </div>
        </div>
      </section> */}

      {/* Booking Process */}
      <section className="services" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">1️⃣</div>
              <h3>Initial Consultation</h3>
              <p>
                Contact us with your wedding date, location, and requirements. We&apos;ll
                discuss your vision and provide a custom quote.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">2️⃣</div>
              <h3>Contract & Deposit</h3>
              <p>
                Once details are confirmed, we&apos;ll send a contract and secure your
                date with a deposit.
              </p>
            </div>
            {/* <div className="service-card">
              <div className="service-icon">3️⃣</div>
              <h3>Trial Session</h3>
              <p>
                Schedule a trial session (virtual or in-person) to perfect your
                bridal makeup look before the big day.
              </p>
            </div> */}
            <div className="service-card">
              <div className="service-icon">3️⃣</div>
              <h3>Wedding Day Magic</h3>
              <p>
                We arrive at your destination, create your perfect look, and provide
                touch-up services throughout your celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="why-choose">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Ready to Book Your Destination Wedding?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#666' }}>
            Let&apos;s discuss your dream destination wedding and create a customized
            package that fits your needs perfectly.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/contact" className="btn btn-primary">
              Book Consultation
            </Link>
            <Link href="/portfolio" className="btn btn-primary">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
