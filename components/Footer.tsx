import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Bhumi Makeup Artistry</h3>
            <p>Professional makeup artistry for all occasions</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/destination-wedding">Destination Wedding</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/bhumimakeupartistry/" target='_new' aria-label="Instagram">
                Instagram
              </a>
              {/* <a href="#" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" aria-label="Twitter">
                Twitter
              </a> */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Bhumi Makeup Artistry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
