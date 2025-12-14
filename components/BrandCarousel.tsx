'use client'

import { useState } from 'react'
import Image from 'next/image'

interface BrandCarouselProps {
  brandName: string
  images: string[]
}

export default function BrandCarousel({ brandName, images }: BrandCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="brand-carousel">
      <div className="carousel-container">
        <button
          className="carousel-button carousel-button-prev"
          onClick={prevSlide}
          aria-label="Previous image"
        >
          ‹
        </button>

        <div className="carousel-image-wrapper">
          <Image
            src={images[currentIndex]}
            alt={`${brandName} product ${currentIndex + 1}`}
            width={600}
            height={400}
            className="carousel-image"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <button
          className="carousel-button carousel-button-next"
          onClick={nextSlide}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
