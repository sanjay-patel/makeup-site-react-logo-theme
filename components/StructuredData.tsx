export default function StructuredData() {
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Bhumi Makeup Artistry',
    description: 'Professional makeup artist in Surat, Gujarat for bridal makeup, party makeup, photoshoots, and editorial work',
    url: 'https://bhumimakeupartistry.com',
    telephone: '+91-9712652262',
    email: 'info@bhumimakeupartistry.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No. 7, 1st floor, Marutidham Row-house, ABC circle Sarathana Jakatnaka',
      addressLocality: 'Surat',
      addressRegion: 'Gujarat',
      postalCode: '395006',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '21.1702',
      longitude: '72.8311',
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
    image: 'https://bhumimakeupartistry.com/og-image.jpg',
    sameAs: [
      'https://www.instagram.com/bhumimakeupartistry/',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  )
}
