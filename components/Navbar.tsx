'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const navMenu = document.querySelector('.nav-menu')
      const hamburger = document.querySelector('.hamburger')

      if (
        isMenuOpen &&
        navMenu &&
        hamburger &&
        !navMenu.contains(target) &&
        !hamburger.contains(target)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  const isActive = (path: string) => pathname === path

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="nav-brand">
          <Image
            src="/logo.jpg"
            alt="Bhumi Makeup Artistry Logo"
            width={40}
            height={40}
            priority
          />
          <h1>Bhumi Makeup Artistry</h1>
        </Link>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link
              href="/"
              className={isActive('/') ? 'active' : ''}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={isActive('/about') ? 'active' : ''}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className={isActive('/portfolio') ? 'active' : ''}
              onClick={closeMenu}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/destination-wedding"
              className={isActive('/destination-wedding') ? 'active' : ''}
              onClick={closeMenu}
            >
              Destination Wedding
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className={isActive('/faq') ? 'active' : ''}
              onClick={closeMenu}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={isActive('/contact') ? 'active' : ''}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
