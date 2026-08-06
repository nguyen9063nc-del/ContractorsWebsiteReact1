import { services } from '../data/siteData.js'
import './Services.css'

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="eyebrow">What We Do</span>
            <h2 className="section-header__title">Our Services</h2>
          </div>
          <a href="#services" className="section-header__link">
            All Services &rarr;
          </a>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-card__icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21h18M5 21V9l7-6 7 6v12M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
