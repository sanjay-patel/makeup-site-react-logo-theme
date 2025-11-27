import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import FadeIn from '@/components/animations/FadeIn'
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ | Makeup Artist Questions Answered',
  description: 'Frequently asked questions about bridal makeup, party makeup, destination weddings, pricing, and booking with professional makeup artist in Surat, Gujarat.',
  keywords: ['makeup artist faq', 'bridal makeup questions', 'destination wedding makeup faq', 'makeup artist pricing Surat', 'how to book makeup artist'],
  openGraph: {
    title: 'FAQ | Professional Makeup Artist in Surat',
    description: 'Get answers to common questions about makeup services, pricing, and booking.',
  },
}

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Do you travel outside Surat for destination weddings?',
    answer: 'Yes! I provide destination wedding makeup services across India including Goa, Udaipur, Jaipur, Ahmedabad, Baroda, and other locations. I bring all professional equipment and premium products to your wedding venue.',
  },
  {
    question: 'How far in advance should I book for my wedding?',
    answer: 'I recommend booking 2-3 months in advance for weddings, especially during peak wedding season (October to March). For destination weddings, booking 3-4 months ahead is ideal to ensure availability.',
  },
  {
    question: 'Do you offer makeup trials?',
    answer: 'Yes, I highly recommend scheduling a makeup trial before your wedding day. This allows us to perfect your desired look, test products on your skin, and ensure you\'re completely happy with the final result.',
  },
  {
    question: 'What makeup brands do you use?',
    answer: 'I work exclusively with premium luxury makeup brands including MAC, Huda Beauty, NARS, Charlotte Tilbury, Pat McGrath Labs, Anastasia Beverly Hills, Giorgio Armani, Dior, and Fenty Beauty. All products are high-quality, long-lasting, and suitable for Indian skin tones.',
  },
  {
    question: 'How long does bridal makeup take?',
    answer: 'Bridal makeup typically takes 1.5 to 2 hours for a complete look including base makeup, eyes, contouring, and finishing touches. I always allocate extra time to ensure perfection without rushing.',
  },
  {
    question: 'Will my makeup last throughout the wedding day?',
    answer: 'Absolutely! I use professional techniques and long-lasting, waterproof products specifically designed to withstand tears, heat, humidity, and hours of celebration. Your makeup will stay fresh from the ceremony through the reception.',
  },
  {
    question: 'Do you provide touch-up services during the event?',
    answer: 'Yes, touch-up services are available for destination weddings and can be arranged for local events. I ensure you look perfect throughout your special day, especially for important photo sessions.',
  },
  {
    question: 'Can you do makeup for the entire bridal party?',
    answer: 'Yes! I offer makeup services for bridesmaids, mother of the bride, and the entire bridal party. I can coordinate looks for group photos while ensuring everyone has a personalized style that suits them.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 30 days or more before the event receive a full refund of the deposit. Cancellations within 30 days may be subject to a cancellation fee. Please contact me to discuss your specific situation.',
  },
  {
    question: 'Do you work with all skin types and tones?',
    answer: 'Yes! I have extensive experience working with all Indian skin tones from fair to deep complexions, and I\'m skilled at addressing different skin types including oily, dry, combination, and sensitive skin. I customize products and techniques for each client.',
  },
  {
    question: 'What should I do to prepare my skin before the makeup appointment?',
    answer: 'Start a basic skincare routine 2-3 weeks before your event: cleanse, moisturize, and use sunscreen daily. Stay hydrated, get enough sleep, and avoid trying new skincare products a week before. Arrive with clean, moisturized skin on the day.',
  },
  {
    question: 'Can you create both traditional and modern makeup looks?',
    answer: 'Absolutely! I specialize in both traditional Indian bridal makeup and contemporary, modern looks. Whether you want a classic red lip and dramatic eyes or a soft, natural glow, I customize the style to match your vision and outfit.',
  },
  {
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment by filling out the contact form on our website, calling +91 9712652262, or messaging me on WhatsApp. I\'ll respond within 24 hours to discuss your requirements and check availability.',
  },
  {
    question: 'What are your rates for bridal makeup?',
    answer: 'Bridal makeup packages start at competitive rates and vary based on the complexity of the look, location, and additional services required. Please contact me for a detailed quote customized to your specific needs.',
  },
  {
    question: 'Do you offer makeup services for photoshoots and editorial work?',
    answer: 'Yes! I provide professional makeup for photoshoots, fashion editorials, magazine shoots, and commercial projects. My techniques are specifically adapted for camera and lighting requirements.',
  },
  {
    question: 'What makes your service different from other makeup artists?',
    answer: 'I combine over 5 years of professional experience with exclusive use of premium luxury brands, personalized consultations, and a commitment to understanding each client\'s unique vision. I stay updated with latest trends while respecting timeless beauty principles.',
  },
]

export default function FAQ() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our makeup services"
      />

      <section className="about-content" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
        <div className="container">
          <FadeIn>
            <div className="about-text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p>
                Have questions about booking a makeup artist in Surat? Find answers to the most
                common questions about bridal makeup, destination weddings, pricing, and our services.
                Can&apos;t find what you&apos;re looking for? <Link href="/contact" style={{ color: '#d6a553' }}>Contact us</Link> directly!
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="services" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <StaggerContainer className="faq-container" staggerDelay={0.1}>
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <div className="faq-item">
                  <h3 className="faq-question">{faq.question}</h3>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="why-choose" style={{ paddingTop: '3rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <FadeIn>
            <h2 className="section-title">Still Have Questions?</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#666', maxWidth: '600px', margin: '0 auto 2rem' }}>
              I&apos;m here to help! Get in touch and I&apos;ll be happy to answer any questions
              about your makeup needs.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link href="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <a href="tel:+919712652262" className="btn btn-primary">
                Call Now
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
