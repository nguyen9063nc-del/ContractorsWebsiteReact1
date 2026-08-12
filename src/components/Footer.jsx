import { useLocation } from 'react-router-dom'
import { business } from '../data/siteData.js'
import './Footer.css'

const HEADINGS = {
  '/portfolio': 'Want your listing on this page?',
  '/get-property-ready': 'Have a listing that needs work?',
}

export default function Footer() {
  const { pathname } = useLocation()
  const heading = HEADINGS[pathname] ?? 'Have a listing that needs work?'
  const ctaHref = pathname === '/get-property-ready' ? '#form' : '/get-property-ready'
  const phoneDigits = business.phone.replace(/[^0-9+]/g, '')
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <h2 className="site-footer__heading">{heading}</h2>
        <p className="site-footer__subtext">Send us the property. We&rsquo;ll handle the rest.</p>

        <div className="site-footer__actions">
          <a href={ctaHref} className="btn btn-primary">
            Get my property ready
          </a>
          <a href={`tel:${phoneDigits}`} className="btn btn-outline btn-outline--on-dark">
            Call<span className="site-footer__phone">&nbsp;{business.phone}</span>
          </a>
        </div>

        <div className="site-footer__bar">
          <div className="site-footer__brand">
            <span className="site-footer__mark" />
            <span>{business.name}</span>
          </div>
          <div className="site-footer__meta">
            <span>{business.market}</span>
            <a href={`tel:${phoneDigits}`}>{business.phone}</a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
            <span>Licensed &amp; insured</span>
            <span>&copy; {year}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
