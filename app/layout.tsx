import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://beautybyartist.com'),
  title: {
    default: 'Bhumi Makeup Artistry | Professional Makeup Artist Services',
    template: '%s | Bhumi Makeup Artistry'
  },
  description: 'Professional makeup artistry for all occasions including bridal makeup, party makeup, photoshoots, and editorial work. Over 10 years of experience with premium products.',
  keywords: ['makeup artist', 'bridal makeup', 'party makeup', 'professional makeup', 'photoshoot makeup', 'editorial makeup', 'beauty services'],
  authors: [{ name: 'Bhumi Makeup Artistry' }],
  creator: 'Bhumi Makeup Artistry',
  publisher: 'Bhumi Makeup Artistry',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://beautybyartist.com',
    siteName: 'Bhumi Makeup Artistry',
    title: 'Bhumi Makeup Artistry | Professional Makeup Artist Services',
    description: 'Professional makeup artistry for all occasions including bridal makeup, party makeup, photoshoots, and editorial work.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bhumi Makeup Artistry - Professional Makeup Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhumi Makeup Artistry | Professional Makeup Artist Services',
    description: 'Professional makeup artistry for all occasions including bridal makeup, party makeup, photoshoots, and editorial work.',
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
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://beautybyartist.com" />
        <StructuredData />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
