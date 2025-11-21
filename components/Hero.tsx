'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface HeroProps {
  title: string
  subtitle: string
  showButton?: boolean
}

export default function Hero({ title, subtitle, showButton = true }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h2
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/contact" className="btn btn-primary">
              Book Appointment
            </Link>
          </motion.div>
        )}
      </div>
      <div className="hero-overlay"></div>
    </section>
  )
}
