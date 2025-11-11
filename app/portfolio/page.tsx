import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import PortfolioFilter from '@/components/PortfolioFilter'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our stunning makeup transformations including bridal makeup, party looks, editorial work, and photoshoot makeup. View our professional portfolio.',
  openGraph: {
    title: 'Portfolio | Beauty by Artist',
    description: 'Explore our stunning makeup transformations and professional work.',
  },
}

export default function Portfolio() {
  return (
    <>
      <PageHeader
        title="Portfolio"
        subtitle="Explore our stunning makeup transformations"
      />

      <section className="portfolio-section">
        <div className="container">
          <PortfolioFilter />
        </div>
      </section>
    </>
  )
}
