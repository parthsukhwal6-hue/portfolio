import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.5 10h10m-4-4 4 4-4 4" />
    </svg>
  )
}

export function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M11 4.5h4.5V9M15.2 4.8 8.8 11.2" />
      <path d="M14 11v3.5a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1H9" />
    </svg>
  )
}

export function SectionLabel({ children }) {
  return (
    <p className="section-label">
      <span className="section-label__dot" />
      {children}
    </p>
  )
}

export function Layout({ children }) {
  return (
    <div className="portfolio-shell">
      <Navbar />

      <main>{children}</main>

      <footer className="site-footer section-wrap">
        <Link className="brand brand--footer" to="/">
          <span className="brand-mark">PS</span>
          <span className="brand-name">PARTH SUKHWAL</span>
        </Link>
        <p>Designed around curiosity. Built with React.</p>
        <Link className="back-to-top" to="/">
          BACK TO TOP ↑
        </Link>
      </footer>
    </div>
  )
}
