import { business, onePoints, portfolioStats } from '../data/siteData.js'
import './GetPropertyReady.css'

const sidebarStats = [portfolioStats[0], portfolioStats[3]]

export default function GetPropertyReady() {
  const phoneDigits = business.phone.replace(/[^0-9+]/g, '')

  return (
    <>
      {/* Form */}
      <section id="form" className="section-divider">
        <div className="container gpr-form-layout">
          <div className="gpr-sidebar">
            <span className="eyebrow">Get property ready</span>
            <h2 className="gpr-sidebar__title">Send us the property.</h2>
            <p className="gpr-sidebar__lede">Walkthrough scheduled within 48 hours. One written proposal covering every trade.</p>

            <div className="gpr-stats">
              {sidebarStats.map((stat) => (
                <div key={stat.label} className="gpr-stats__item">
                  <div className={'gpr-stats__value' + (stat.accent ? ' gpr-stats__value--accent' : '')}>{stat.value}</div>
                  <div className="gpr-stats__label">{stat.label}</div>
                </div>
              ))}
            </div>

            <ul className="gpr-points">
              {onePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="gpr-contact">
              <a href={`tel:${phoneDigits}`} className="gpr-contact__row">
                <span className="gpr-contact__label">Call</span>
                <span className="gpr-contact__value">{business.phone}</span>
              </a>
              <a href={`sms:${phoneDigits}`} className="gpr-contact__row">
                <span className="gpr-contact__label">Text</span>
                <span className="gpr-contact__value">{business.phone}</span>
              </a>
              <a href={`mailto:${business.email}`} className="gpr-contact__row gpr-contact__row--last">
                <span className="gpr-contact__label">Email</span>
                <span className="gpr-contact__value">{business.email}</span>
              </a>
            </div>
          </div>

          <div className="gpr-form">
            <iframe
              aria-label="Contractor Website"
              className="gpr-form__iframe"
              frameBorder="0"
              style={{ width: '99%', border: 'none' }}
              src="https://forms.zohopublic.com/theonlycompany1/form/ContractorWebsite/formperma/Ujz0K3Hwdqp1LXwG6nanFQus-1ozwtoW-11-gq2PQ1w?zf_enablecamera=true"
              allow="camera;"
            />
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="section-divider">
        <div className="container gpr-hero">
          <span className="eyebrow">Get property ready</span>
          <h1 className="gpr-hero__title">
            Send us
            <br />
            the property.
          </h1>
          <div className="gpr-hero__row">
            <p className="gpr-hero__lede">Tell us the address and the date it has to be photo-ready. We&rsquo;ll do the rest.</p>
            <p className="gpr-hero__copy">
              Walkthrough scheduled within 48 hours. One written proposal covering every trade &mdash; no obligation.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
