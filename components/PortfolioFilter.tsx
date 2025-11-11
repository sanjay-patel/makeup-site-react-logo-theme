'use client'

import { useState } from 'react'

interface PortfolioItem {
  id: number
  category: string
  title: string
  description: string
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, category: 'bridal', title: 'Classic Bridal', description: 'Elegant bridal makeup' },
  { id: 2, category: 'bridal', title: 'Modern Bride', description: 'Contemporary bridal style' },
  { id: 3, category: 'party', title: 'Glamorous Evening', description: 'Party makeup with shimmer' },
  { id: 4, category: 'party', title: 'Bold & Beautiful', description: 'Statement party look' },
  { id: 5, category: 'editorial', title: 'Fashion Forward', description: 'Editorial fashion shoot' },
  { id: 6, category: 'editorial', title: 'Artistic Vision', description: 'Creative editorial makeup' },
  { id: 7, category: 'photoshoot', title: 'Natural Glow', description: 'Soft photoshoot makeup' },
  { id: 8, category: 'photoshoot', title: 'Studio Perfect', description: 'Professional photoshoot look' },
  { id: 9, category: 'bridal', title: 'Royal Bride', description: 'Luxurious bridal makeup' },
]

export default function PortfolioFilter() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedItem(null)
  }

  return (
    <>
      {/* Portfolio Filter */}
      <div className="portfolio-filters">
        <button
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${activeFilter === 'bridal' ? 'active' : ''}`}
          onClick={() => setActiveFilter('bridal')}
        >
          Bridal
        </button>
        <button
          className={`filter-btn ${activeFilter === 'party' ? 'active' : ''}`}
          onClick={() => setActiveFilter('party')}
        >
          Party
        </button>
        <button
          className={`filter-btn ${activeFilter === 'editorial' ? 'active' : ''}`}
          onClick={() => setActiveFilter('editorial')}
        >
          Editorial
        </button>
        <button
          className={`filter-btn ${activeFilter === 'photoshoot' ? 'active' : ''}`}
          onClick={() => setActiveFilter('photoshoot')}
        >
          Photoshoot
        </button>
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="portfolio-item"
            data-category={item.category}
            onClick={() => openModal(item)}
          >
            <div className="portfolio-image">
              <div className="image-placeholder">{item.title}</div>
            </div>
            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedItem && (
        <div className="modal active" onClick={closeModal}>
          <span className="modal-close">&times;</span>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image">
              <div className="portfolio-image">
                <div className="image-placeholder">{selectedItem.title}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
