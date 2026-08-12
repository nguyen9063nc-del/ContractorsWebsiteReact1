import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { business, navLinks } from '../data/siteData.js'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__brand" onClick={closeMenu}>
          <span className="site-header__mark" />
          <span className="site-header__wordmark">{business.name}</span>
        </Link>

        <nav className="site-header__nav">
          {navLinks.map((link) =>
            link.to.includes('#') ? (
              <Link key={link.label} to={link.to} className="site-header__link">
                {link.label}
              </Link>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) => 'site-header__link' + (isActive ? ' site-header__link--active' : '')}
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="site-header__right">
          <Link to="/get-property-ready" className="site-header__cta" onClick={closeMenu}>
            Get in Contact now
          </Link>
          <button
            type="button"
            className="site-header__toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="site-header__mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={closeMenu}
              className={'site-header__mobile-link' + (location.pathname === link.to ? ' site-header__mobile-link--active' : '')}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/get-property-ready" onClick={closeMenu} className="site-header__mobile-link site-header__mobile-link--cta">
            Get in Contact now
          </Link>
        </nav>
      )}
    </header>
  )
}
