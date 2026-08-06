import { business } from '../data/siteData.js'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" role="img" aria-label="Job site / crew photo, wide shot" />
      <div className="hero__overlay" />

      <div className="container hero__content">
        <span className="hero__eyebrow">{business.tagline}</span>
        <h1 className="hero__headline">
          Building projects that <span className="hero__headline-accent">last</span>.
        </h1>
        <p className="hero__copy">
          Ridgeline Contracting is a full-service general contractor for residential and
          commercial projects — general contracting, remodeling, concrete &amp; masonry,
          and roofing, done right the first time.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn-primary">
            Get a Free Estimate
          </a>
          <a href="#portfolio" className="btn btn-ghost">
            View Our Work
          </a>
        </div>
      </div>
    </section>
  )
}
