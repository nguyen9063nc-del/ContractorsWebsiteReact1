import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import { portfolioStats, portfolioProjects } from '../data/siteData.js'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section className="section-divider">
        <div className="container portfolio-hero">
          <span className="eyebrow">Portfolio</span>
          <h1 className="portfolio-hero__title">Before, after, and the date it went live.</h1>
          <p className="portfolio-hero__lede">
            Every property on this page was handed back photo-ready on the date the agent gave us. Same angle, same
            room, one contract.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-divider">
        <div className="container portfolio-stats">
          {portfolioStats.map((stat, i) => (
            <div key={stat.label} className={'portfolio-stats__item' + (i === 0 ? ' portfolio-stats__item--first' : '')}>
              <div className={'portfolio-stats__value' + (stat.accent ? ' portfolio-stats__value--accent' : '')}>{stat.value}</div>
              <div className="portfolio-stats__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="section-divider">
        <div className="container portfolio-list-wrap">
          <div className="portfolio-list__header">
            <span className="portfolio-list__label">Recent work</span>
            <span className="portfolio-list__label portfolio-list__label--accent">Every property hit its photo date</span>
          </div>

          <div className="portfolio-list">
            {portfolioProjects.map((project, i) => (
              <article key={project.title} className="portfolio-article">
                <div className="portfolio-article__images">
                  <div className="portfolio-article__image">
                    <ImagePlaceholder hint={project.beforeHint} aspectRatio="4 / 3" />
                    <div className="portfolio-article__tag portfolio-article__tag--before">BEFORE</div>
                  </div>
                  <div className="portfolio-article__image">
                    <ImagePlaceholder hint={project.afterHint} aspectRatio="4 / 3" />
                    <div className="portfolio-article__tag portfolio-article__tag--after">AFTER</div>
                  </div>
                </div>
                <div>
                  <div className="portfolio-article__num">{String(i + 1).padStart(2, '0')}</div>
                  <h2 className="portfolio-article__title">{project.title}</h2>
                  <div className="portfolio-article__kind">{project.kind}</div>
                  <p className="portfolio-article__scope">{project.scope}</p>
                  <div className="portfolio-article__stats">
                    <div className="portfolio-article__stat">
                      <div className="portfolio-article__stat-value">{project.repairs}</div>
                      <div className="portfolio-article__stat-label">repairs completed</div>
                    </div>
                    <div className="portfolio-article__stat">
                      <div className="portfolio-article__stat-value">{project.trades}</div>
                      <div className="portfolio-article__stat-label">trades coordinated</div>
                    </div>
                    <div className="portfolio-article__stat">
                      <div className="portfolio-article__stat-value">{project.days}</div>
                      <div className="portfolio-article__stat-label">days on site</div>
                    </div>
                    <div className="portfolio-article__stat">
                      <div className="portfolio-article__stat-value portfolio-article__stat-value--accent">{project.ready}</div>
                      <div className="portfolio-article__stat-label">ready for photography</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
