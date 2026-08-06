import { Link } from 'react-router-dom'
import { business } from '../data/siteData.js'
import './About.css'

// Placeholder second page — added to confirm React Router is wired up.
// Replace with real About content (company history, team, values, etc.).
export default function About() {
  return (
    <section className="section about-page">
      <div className="container about-page__inner">
        <span className="eyebrow">About Us</span>
        <h1 className="about-page__title">About {business.name}</h1>
        <p className="about-page__copy">
          This is a placeholder page to verify that React Router is routing between
          separate pages correctly. It renders at its own URL (<code>/about</code>)
          through the same Header/Footer layout as the homepage.
        </p>
        <p className="about-page__copy">
          Swap this in for real About page content — company history, team bios,
          certifications, etc.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
