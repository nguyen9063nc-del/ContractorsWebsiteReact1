import { portfolio } from '../data/siteData.js'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <section className="portfolio section section-alt" id="portfolio">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="eyebrow">Recent Work</span>
            <h2 className="section-header__title">Our Portfolio</h2>
          </div>
          <a href="#portfolio" className="section-header__link">
            View All Projects &rarr;
          </a>
        </div>

        <div className="portfolio__grid">
          {portfolio.map((project) => (
            <div className="portfolio-card" key={project.title}>
              <div
                className="portfolio-card__image"
                role="img"
                aria-label={project.placeholder}
              />
              <span className="portfolio-card__category">{project.category}</span>
              <h3 className="portfolio-card__title">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
