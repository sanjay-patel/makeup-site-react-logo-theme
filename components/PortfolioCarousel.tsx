'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PortfolioItem {
  id: number
  image: string
  title: string
  category: string
}

interface PortfolioCarouselProps {
  items: PortfolioItem[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export default function PortfolioCarousel({
  items,
  autoPlay = true,
  autoPlayInterval = 4000
}: PortfolioCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      )
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, items.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    )
  }

  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className="portfolio-carousel-container">
      <div className="portfolio-carousel">
        <div className="portfolio-carousel-wrapper">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`portfolio-slide ${
                index === currentIndex ? 'active' : ''
              }`}
            >
              <div className="portfolio-image-wrapper">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="portfolio-image"
                  priority={index === 0}
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-category">{item.category}</span>
                  <h3 className="portfolio-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="portfolio-carousel-button portfolio-prev"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className="portfolio-carousel-button portfolio-next"
          onClick={goToNext}
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Dots Navigation */}
        <div className="portfolio-dots">
          {items.map((_, index) => (
            <button
              key={index}
              className={`portfolio-dot ${
                index === currentIndex ? 'active' : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* View Full Portfolio CTA */}
      <div className="portfolio-cta">
        <Link href="/portfolio" className="view-portfolio-btn">
          View Full Portfolio
        </Link>
      </div>
    </div>
  )
}
