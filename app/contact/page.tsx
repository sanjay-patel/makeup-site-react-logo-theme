import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch to book your makeup appointment. Contact Beauty by Artist for bridal makeup, party makeup, photoshoot, and editorial makeup services.',
  openGraph: {
    title: 'Contact Us | Beauty by Artist',
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
            <ContactForm />

            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h3>Address</h3>
                    <p>
                      123 Beauty Street
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>info@beautybyartist.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🕐</div>
                  <div className="contact-text">
                    <h3>Working Hours</h3>
                    <p>
                      Mon - Sat: 9:00 AM - 7:00 PM
                      <br />
                      Sun: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              <div className="social-media">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" aria-label="Instagram">
                    📷 Instagram
                  </a>
                  <a href="#" aria-label="Facebook">
                    👍 Facebook
                  </a>
                  <a href="#" aria-label="Twitter">
                    🐦 Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
