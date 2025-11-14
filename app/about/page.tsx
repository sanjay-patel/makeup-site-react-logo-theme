import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet your professional makeup artist with over 10 years of experience. Certified professional specializing in bridal makeup, party looks, photoshoots, and editorial work.',
  openGraph: {
    title: 'About Us | Beauty by Artist',
    description: 'Meet your professional makeup artist with over 10 years of experience in beauty and makeup artistry.',
  },
}

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Discover our passion for beauty and artistry"
      />

      {/* About Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <div className="image-placeholder">
                <p>Artist Photo</p>
              </div>
            </div>
            <div className="about-text">
              <h2>Meet Your Makeup Artist</h2>
              <p>
                Hello! I&apos;m passionate about bringing out the natural beauty in
                everyone. With over 5 years of experience in the makeup
                industry, I&apos;ve had the privilege of working with hundreds of
                clients for their special occasions.
              </p>
              <p>
                My journey in makeup artistry began with a deep love for colors,
                textures, and the transformative power of makeup. I believe that
                makeup is not just about applying products—it&apos;s about enhancing
                confidence, celebrating individuality, and creating unforgettable
                moments.
              </p>
              <p>
                I specialize in bridal makeup, party looks, photoshoots, and
                editorial work. Every client receives personalized attention, and
                I work closely with you to understand your vision and bring it to
                life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="qualifications">
        <div className="container">
          <h2 className="section-title">Qualifications & Experience</h2>
          <div className="qualifications-grid">
            <div className="qualification-card">
              <h3>Certified Professional</h3>
              <p>Certified Makeup Artist from International Makeup Academy</p>
            </div>
            <div className="qualification-card">
              <h3>5+ Years Experience</h3>
              <p>Over 5 years of professional makeup artistry</p>
            </div>
            <div className="qualification-card">
              <h3>20+ Happy Clients</h3>
              <p>Successfully served satisfied clients</p>
            </div>
            <div className="qualification-card">
              <h3>Brand Collaborations</h3>
              <p>Worked with leading makeup and fashion brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Quality</h3>
              <p>
                We use only premium, high-quality makeup products that are
                skin-friendly and long-lasting.
              </p>
            </div>
            <div className="value-item">
              <h3>Creativity</h3>
              <p>
                Every look is uniquely crafted to match your personality and the
                occasion.
              </p>
            </div>
            <div className="value-item">
              <h3>Professionalism</h3>
              <p>Punctual, reliable, and dedicated to providing exceptional service.</p>
            </div>
            <div className="value-item">
              <h3>Client Satisfaction</h3>
              <p>Your happiness and confidence are our top priorities.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
