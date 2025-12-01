import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import WhatsAppButton from '@/components/WhatsAppButton'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://bhumimakeupartistry.com'),
  title: {
    default: 'Bhumi Makeup Artistry | Professional Makeup Artist in Surat, Gujarat',
    template: '%s | Bhumi Makeup Artistry'
  },
  description: 'Professional makeup artist in Surat, Gujarat for all occasions including bridal makeup, party makeup, photoshoots, and editorial work. Over 10 years of experience with premium products.',
  keywords: [
    'makeup artist surat',
    'bridal makeup surat',
    'party makeup surat',
    'professional makeup artist gujarat',
    'makeup artist in surat',
    'wedding makeup surat',
    'photoshoot makeup surat',
    'editorial makeup surat',
    'beauty services surat',
    'bridal makeup artist surat',
    'best makeup artist surat'
  ],
  authors: [{ name: 'Bhumi Makeup Artistry' }],
  creator: 'Bhumi Makeup Artistry',
  publisher: 'Bhumi Makeup Artistry',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bhumimakeupartistry.com',
    siteName: 'Bhumi Makeup Artistry',
    title: 'Bhumi Makeup Artistry | Professional Makeup Artist in Surat, Gujarat',
    description: 'Professional makeup artist in Surat, Gujarat for all occasions including bridal makeup, party makeup, photoshoots, and editorial work.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bhumi Makeup Artistry - Professional Makeup Services in Surat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhumi Makeup Artistry | Makeup Artist in Surat, Gujarat',
    description: 'Professional makeup artist in Surat, Gujarat for all occasions including bridal makeup, party makeup, photoshoots, and editorial work.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-RCWCMCWC90'

  return (
    <html lang="en">
      <head>
        <StructuredData />
        <GoogleAnalytics gaId={gaId} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
