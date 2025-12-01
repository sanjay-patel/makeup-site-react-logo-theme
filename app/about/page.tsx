import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import FadeIn from '@/components/animations/FadeIn'
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer'

export const metadata: Metadata = {
  title: 'About Bhumi Patoliya | Top Makeup Artist in Surat, Gujarat',
  description: 'Meet Bhumi Patoliya, Surat\'s leading professional makeup artist with over 5 years of experience. Certified makeup artist specializing in bridal makeup, party looks, and photoshoots in Surat, Gujarat.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Bhumi Patoliya | Top Makeup Artist in Surat, Gujarat',
    description: 'Meet Bhumi Patoliya, Surat\'s leading professional makeup artist with over 5 years of experience serving Surat and Gujarat.',
    url: 'https://bhumimakeupartistry.com/about',
  },
}

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Surat's Premier Makeup Artist - Discover Our Passion for Beauty"
      />

      {/* About Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <FadeIn direction="left">
              <div className="about-image">
                <Image
                  src="/images/artist-photo.png"
                  alt="Bhumi Patoliya - Professional Makeup Artist in Surat, Gujarat"
                  width={400}
                  height={400}
                  className="artist-photo"
                  priority
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="about-text">
                <h2>Meet Your Makeup Artist</h2>
                <h3 style={{ color: '#d6a553', marginBottom: '1rem', fontSize: '1.5rem' }}>Bhumi Patoliya</h3>
                <p>
                  Hello! I&apos;m Bhumi Patoliya, a professional makeup artist based in Surat, Gujarat,
                  and I&apos;m passionate about bringing out the natural beauty in everyone. With over 5
                  years of experience in the makeup industry serving Surat and surrounding areas,
                  I&apos;ve had the privilege of working with many wonderful clients for their special occasions.
                </p>
                <p>
                  Based in Surat, my makeup studio offers a comfortable and professional environment
                  where you can relax and prepare for your special day. My journey as a makeup artist
                  began with a deep love for colors, textures, and the transformative power of makeup.
                  I believe that makeup is not just about applying products—it&apos;s about enhancing
                  confidence, celebrating individuality, and creating unforgettable moments.
                </p>
                <p>
                  As one of Surat&apos;s leading makeup artists, I specialize in bridal makeup, party looks,
                  photoshoots, and editorial work. Every client at my Surat makeup studio receives
                  personalized attention, and I work closely with you as your dedicated makeup artist to
                  understand your vision and bring it to life.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="qualifications">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Qualifications & Experience</h2>
          </FadeIn>
          <StaggerContainer className="qualifications-grid">
            <StaggerItem>
              <div className="qualification-card">
                <h3>Certified Professional</h3>
                <p>Certified Makeup Artist from International Makeup Academy</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="qualification-card">
                <h3>5+ Years Experience</h3>
                <p>Over 5 years of professional makeup artistry in Surat, Gujarat</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="qualification-card">
                <h3>20+ Happy Clients</h3>
                <p>Successfully served satisfied clients across Surat and Gujarat</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="qualification-card">
                <h3>Brand Collaborations</h3>
                <p>Worked with leading makeup and fashion brands</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Our Values */}
      <section className="values">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Our Values</h2>
          </FadeIn>
          <StaggerContainer className="values-grid" staggerDelay={0.15}>
            <StaggerItem>
              <div className="value-item">
                <h3>Quality</h3>
                <p>
                  We use only premium, high-quality makeup products that are
                  skin-friendly and long-lasting.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="value-item">
                <h3>Creativity</h3>
                <p>
                  Every look is uniquely crafted to match your personality and the
                  occasion.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="value-item">
                <h3>Professionalism</h3>
                <p>Punctual, reliable, and dedicated to providing exceptional service.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="value-item">
                <h3>Client Satisfaction</h3>
                <p>Your happiness and confidence are our top priorities.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
