import './CTA.css'

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="container cta__inner">
        <h2 className="cta__title">Ready to start your project?</h2>
        <p className="cta__copy">
          Get a free, no-obligation estimate from a licensed and insured local contractor.
        </p>
        <a href="mailto:info@ridgelinecontracting.com" className="btn btn-primary">
          Request a Free Estimate
        </a>
      </div>
    </section>
  )
}
