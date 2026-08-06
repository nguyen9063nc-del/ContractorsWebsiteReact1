import { Link } from 'react-router-dom'
import { business, navLinks } from '../data/siteData.js'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__logo">
          <span className="site-header__logo-main">RIDGELINE</span>
          <span className="site-header__logo-sub">CONTRACTING</span>
        </Link>

        <nav className="site-header__nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <a href={`tel:${business.phone.replace(/[^\d+]/g, '')}`} className="btn btn-primary site-header__cta">
          {business.phone}
        </a>
      </div>
    </header>
  )
}
