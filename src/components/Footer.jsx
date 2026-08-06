import { Link } from 'react-router-dom'
import { business, navLinks, services } from '../data/siteData.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <div className="site-footer__logo">
            <span className="site-footer__logo-main">RIDGELINE</span>
            <span className="site-footer__logo-sub">CONTRACTING</span>
          </div>
          <p className="site-footer__blurb">
            Full-service general contractor for residential and commercial projects.
            Licensed, insured, and building in Millbrook for over 20 years.
          </p>
        </div>

        <div>
          <h4 className="site-footer__heading">Quick Links</h4>
          <ul className="site-footer__list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="site-footer__heading">Services</h4>
          <ul className="site-footer__list">
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="site-footer__heading">Contact</h4>
          <ul className="site-footer__list">
            <li>{business.address}</li>
            <li>
              <a href={`tel:${business.phone.replace(/[^\d+]/g, '')}`}>{business.phone}</a>
            </li>
            <li>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__divider" />

      <div className="container site-footer__bottom">
        <span>
          &copy; {year} {business.name}. All rights reserved.
        </span>
        <span>{business.license}</span>
      </div>
    </footer>
  )
}
