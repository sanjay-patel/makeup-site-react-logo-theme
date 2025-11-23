import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import ContactForm from '@/components/ContactForm'
import FadeIn from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'Contact | Book Makeup Artist in Surat',
  description: 'Get in touch to book your makeup appointment. Contact Bhumi Makeup Artistry for bridal makeup, party makeup, photoshoot, and editorial makeup services.',
  openGraph: {
    title: 'Contact | Book Makeup Artist in Surat',
    description: 'Get in touch to book your makeup appointment with our professional makeup artist.',
  },
}

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch to book your appointment"
      />

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <FadeIn direction="left">
              <ContactForm />
            </FadeIn>

            {/* Contact Info */}
            <FadeIn direction="right" delay={0.2}>
              <div className="contact-info">
              <h2>Get in Touch</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h3>Address</h3>
                    <p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Shop+No.+7,+1st+floor,+Marutidham+Row-house,+ABC+circle,+Sarathana+Jakatnaka,+Surat+-+395006"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#d6a553', textDecoration: 'none', cursor: 'pointer' }}
                      >
                        Shop No. 7, 1st floor, Marutidham Row-house, ABC circle
                        <br />
                        Sarathana Jakatnaka, Surat - 395006
                        <br />
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>+91 9712652262</p>
                  </div>
                </div>
                {/* <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>info@bhumimakeupartistry.com</p>
                  </div>
                </div> */}
                <div className="contact-item">
                  <div className="contact-icon">🕐</div>
                  <div className="contact-text">
                    <h3>Working Hours</h3>
                    <p>
                      Mon - Sat: 10:00 AM - 6:00 PM
                      <br />
                      Sun: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="social-media">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="https://www.instagram.com/bhumimakeupartistry/" target='_new' aria-label="Instagram">
                    📷 Instagram
                  </a>
                  {/* <a href="#" aria-label="Facebook">
                    👍 Facebook
                  </a>
                  <a href="#" aria-label="Twitter">
                    🐦 Twitter
                  </a> */}
                </div>
              </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
