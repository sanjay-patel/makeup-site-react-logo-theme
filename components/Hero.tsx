import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  showButton?: boolean
}

export default function Hero({ title, subtitle, showButton = true }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">{title}</h2>
        <p className="hero-subtitle">{subtitle}</p>
        {showButton && (
          <Link href="/contact" className="btn btn-primary">
            Book Appointment
          </Link>
        )}
      </div>
      <div className="hero-overlay"></div>
    </section>
  )
}
