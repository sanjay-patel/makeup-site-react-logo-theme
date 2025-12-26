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
  const [slidesToShow, setSlidesToShow] = useState(1)

  // Determine slides to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesToShow(3)
      } else {
        setSlidesToShow(1)
      }
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = items.length - slidesToShow
        return prevIndex >= maxIndex ? 0 : prevIndex + 1
      })
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, items.length, slidesToShow])

  const goToSlide = (index: number) => {
    const maxIndex = items.length - slidesToShow
    setCurrentIndex(Math.min(index, maxIndex))
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - slidesToShow : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = items.length - slidesToShow
      return prevIndex >= maxIndex ? 0 : prevIndex + 1
    })
  }

  if (!items || items.length === 0) {
    return null
  }

  // Calculate number of dots for desktop view
  const totalDots = slidesToShow > 1 ? items.length - slidesToShow + 1 : items.length

  return (
    <div className="portfolio-carousel-container">
      <div className="portfolio-carousel">
        <div className="portfolio-carousel-wrapper">
          <div
            className="portfolio-slides-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className="portfolio-slide"
                style={{
                  width: `${100 / slidesToShow}%`,
                }}
              >
                <div className="portfolio-image-wrapper">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="portfolio-image"
                    priority={index === 0 || index === 1}
                  />
                  {/* <div className="portfolio-overlay">
                    <span className="portfolio-category">{item.category}</span>
                    <h3 className="portfolio-title">{item.title}</h3>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
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
          {Array.from({ length: totalDots }).map((_, index) => (
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
