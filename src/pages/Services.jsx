import { Link } from 'react-router-dom'
import { services } from '../data/siteData.js'
import './Services.css'

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="section-divider">
        <div className="container services-hero">
          <span className="eyebrow">Services</span>
          <h1 className="services-hero__title">
            Everything a listing
            <br />
            needs, under
            <br />
            one contract.
          </h1>
          <div className="services-hero__row">
            <p className="services-hero__lede">If it stands between the property and a clean set of listing photos, it&rsquo;s in scope.</p>
            <p className="services-hero__copy">
              You never hire the trades separately. We scope the work, schedule the crews, supply the materials and hand
              the property back photo-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Full services grid */}
      <section id="list" className="section-divider">
        <div className="container services-intro">
          <div>
            <span className="eyebrow">Services</span>
            <h2 className="services-intro__title">Everything a listing needs, under one contract.</h2>
          </div>
          <p className="services-intro__lede">If it stands between the property and a clean set of listing photos, it&rsquo;s in scope.</p>
        </div>
        <div className="container services-grid-wrap">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.number} className="services-card">
                <div className="services-card__number">{service.number}</div>
                <h3 className="services-card__title">{service.title}</h3>
                <p className="services-card__copy">{service.description}</p>
              </div>
            ))}
            <div className="services-card services-card--accent">
              <div className="services-card__number">08</div>
              <div>
                <h3 className="services-card__title">Not on the list?</h3>
                <p className="services-card__copy">If it&rsquo;s needed to list the property, we coordinate it.</p>
                <Link to="/get-property-ready" className="services-card__ask">
                  Ask us &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
