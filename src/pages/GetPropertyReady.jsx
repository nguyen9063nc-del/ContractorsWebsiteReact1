import { useState } from 'react'
import { business, needLabels } from '../data/siteData.js'
import './GetPropertyReady.css'

export default function GetPropertyReady() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedNeeds, setSelectedNeeds] = useState([])

  const phoneDigits = business.phone.replace(/[^0-9+]/g, '')

  const toggleNeed = (label) => {
    setSelectedNeeds((prev) => (prev.includes(label) ? prev.filter((n) => n !== label) : [...prev, label]))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
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

      {/* Form */}
      <section id="form" className="section-divider">
        <div className="container gpr-form-layout">
          <div className="gpr-sidebar">
            <span className="eyebrow">Get property ready</span>
            <h2 className="gpr-sidebar__title">Send us the property.</h2>
            <p className="gpr-sidebar__lede">Walkthrough scheduled within 48 hours. One written proposal covering every trade.</p>
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

          {submitted ? (
            <div className="gpr-confirm">
              <div className="gpr-confirm__mark" />
              <h3 className="gpr-confirm__title">Property received.</h3>
              <p className="gpr-confirm__copy">
                We&rsquo;ll text you within one business day to set the walkthrough &mdash; and we&rsquo;ll confirm whether
                your photo-ready date is achievable before you commit to anything.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="gpr-form">
              <div className="gpr-field gpr-field--full">
                <label htmlFor="f-address">Property address</label>
                <input id="f-address" name="address" required placeholder="123 Main Street" />
              </div>
              <div className="gpr-field">
                <label htmlFor="f-name">Agent or owner</label>
                <input id="f-name" name="name" required placeholder="Full name" />
              </div>
              <div className="gpr-field">
                <label htmlFor="f-broker">
                  Brokerage <span className="gpr-field__optional">(optional)</span>
                </label>
                <input id="f-broker" name="brokerage" placeholder="Brokerage name" />
              </div>
              <div className="gpr-field">
                <label htmlFor="f-phone">Phone</label>
                <input id="f-phone" name="phone" type="tel" required placeholder="(000) 000-0000" />
              </div>
              <div className="gpr-field">
                <label htmlFor="f-email">Email</label>
                <input id="f-email" name="email" type="email" required placeholder="you@brokerage.com" />
              </div>

              <div className="gpr-field gpr-field--full gpr-dates">
                <div className="gpr-dates__heading">When does the property need to be photo-ready?</div>
                <div className="gpr-dates__row">
                  <div className="gpr-field">
                    <label htmlFor="f-photo">Target photography date</label>
                    <input id="f-photo" name="photoDate" type="date" required />
                  </div>
                  <div className="gpr-field">
                    <label htmlFor="f-list">Target listing date</label>
                    <input id="f-list" name="listDate" type="date" />
                  </div>
                </div>
              </div>

              <div className="gpr-field gpr-field--full">
                <span className="gpr-field__label">What needs attention?</span>
                <div className="gpr-needs">
                  {needLabels.map((label) => {
                    const active = selectedNeeds.includes(label)
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => toggleNeed(label)}
                        className={'gpr-need' + (active ? ' gpr-need--active' : '')}
                      >
                        {label}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="gpr-field gpr-field--full">
                <label htmlFor="f-notes">Anything else we should know</label>
                <textarea id="f-notes" name="notes" rows={3} placeholder="Occupied or vacant, access, known issues, inspection items…" />
              </div>

              <div className="gpr-field gpr-field--full">
                <label htmlFor="f-photos">
                  Upload photos <span className="gpr-field__optional">(optional — speeds up the estimate)</span>
                </label>
                <input id="f-photos" name="photos" type="file" multiple accept="image/*" className="gpr-file" />
              </div>

              <div className="gpr-field gpr-field--full gpr-submit-row">
                <button type="submit" className="gpr-submit">
                  Get my property ready
                </button>
                <span className="gpr-submit__note">No obligation. We&rsquo;ll tell you honestly if your date isn&rsquo;t workable.</span>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
