export default function StructuredData() {
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Bhumi Makeup Artistry',
    description: 'Professional makeup artistry for all occasions',
    url: 'https://beautybyartist.com',
    telephone: '+1-555-123-4567',
    email: 'info@beautybyartist.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Beauty Street',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7128',
      longitude: '-74.0060',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    priceRange: '$$',
    image: 'https://beautybyartist.com/og-image.jpg',
    sameAs: [
      'https://instagram.com/beautybyartist',
      'https://facebook.com/beautybyartist',
      'https://twitter.com/beautybyartist',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  )
}
