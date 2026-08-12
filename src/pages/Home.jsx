import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import {
  business,
  checklist,
  onePoints,
  problemPoints,
  processSteps,
  services,
  portfolioProjects,
  agentPoints,
  scheduleExample,
  heroSlides,
} from '../data/siteData.js'
import './Home.css'

export default function Home() {
  const phoneDigits = business.phone.replace(/[^0-9+]/g, '')
  const teaserServices = services.slice(0, 7)
  const teaserProjects = portfolioProjects.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="section-divider">
        <div className="container home-hero">
          <div className="home-hero__copy">
            <span className="eyebrow">Listing preparation — {business.market}</span>
            <h1 className="home-hero__title">
              Get your listing
              <br />
              market-ready.
            </h1>
            <p className="home-hero__lede">One call. Every repair. One company — photo-ready by the date you give us.</p>
            <div className="home-hero__actions">
              <Link to="/get-property-ready" className="btn btn-primary">
                Get my property ready
              </Link>
              <a href={`tel:${phoneDigits}`} className="btn btn-outline">
                Call<span>&nbsp;{business.phone}</span>
              </a>
            </div>
          </div>
          <div className="home-hero__media">
            <HeroCarousel slides={heroSlides} />
          </div>
        </div>
      </section>

      {/* Checklist strip */}
      <section className="section-divider">
        <div className="container">
          <div className="home-checklist__header">
            <span className="home-checklist__label">Everything we coordinate</span>
            <span className="home-checklist__label home-checklist__label--accent">Typical turnaround 5&ndash;11 days</span>
          </div>
          <div className="home-checklist__grid">
            {checklist.map((item) => (
              <div key={item} className="home-checklist__item">
                <span className="home-checklist__check">&#10003;</span>
                <span>{item}</span>
              </div>
            ))}
            <div className="home-checklist__item home-checklist__item--more">
              <span className="home-checklist__check">+</span>
              <span>Whatever else it needs</span>
            </div>
          </div>
        </div>
      </section>

      {/* One points strip */}
      <section className="section-divider">
        <div className="container home-one-points">
          {onePoints.map((point, i) => (
            <div key={point} className={'home-one-points__item' + (i === onePoints.length - 1 ? ' home-one-points__item--accent' : '')}>
              {point}
            </div>
          ))}
        </div>
      </section>

      {/* The problem */}
      <section className="section-divider">
        <div className="container home-problem">
          <div>
            <span className="eyebrow">The problem</span>
            <h2 className="home-problem__title">Stop coordinating six different contractors.</h2>
            <p className="home-problem__copy">
              A listing that needs work turns into a project management job you never asked for. Six numbers to chase, six
              schedules to align, six invoices to reconcile — while the photographer is already booked.
            </p>
          </div>
          <div className="home-problem__rows">
            {problemPoints.map((row) => (
              <div key={row.before} className="home-problem__row">
                <div className="home-problem__before">{row.before}</div>
                <div className="home-problem__after">{row.after}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section-divider home-process">
        <div className="container home-process__intro">
          <span className="eyebrow eyebrow--on-dark">How it works</span>
          <h2 className="home-process__title">Five steps from send to photo-ready.</h2>
        </div>
        <div className="container home-process__grid">
          {processSteps.map((step) => (
            <div key={step.number} className="home-process__step">
              <div className="home-process__number">{step.number}</div>
              <h3 className="home-process__step-title">{step.title}</h3>
              <p className="home-process__step-copy">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services teaser */}
      <section id="services" className="section-divider">
        <div className="container home-services__intro">
          <div>
            <span className="eyebrow">Services</span>
            <h2 className="home-services__title">Everything a listing needs, under one contract.</h2>
          </div>
          <p className="home-services__lede">If it stands between the property and a clean set of listing photos, it&rsquo;s in scope.</p>
        </div>
        <div className="container home-services__grid-wrap">
          <div className="home-services__grid">
            {teaserServices.map((service) => (
              <div key={service.number} className="home-services__card">
                <div className="home-services__card-number">{service.number}</div>
                <h3 className="home-services__card-title">{service.title}</h3>
                <p className="home-services__card-copy">{service.description}</p>
              </div>
            ))}
            <div className="home-services__card home-services__card--accent">
              <div className="home-services__card-number">08</div>
              <div>
                <h3 className="home-services__card-title">Not on the list?</h3>
                <p className="home-services__card-copy">If it&rsquo;s needed to list the property, we coordinate it.</p>
                <Link to="/services" className="home-services__ask">
                  Ask us &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section id="projects" className="section-divider">
        <div className="container home-portfolio__intro">
          <div>
            <span className="eyebrow">Recent listing transformations</span>
            <h2 className="home-portfolio__title">Before, after, and the date it went live.</h2>
          </div>
          <p className="home-portfolio__lede">We don&rsquo;t sell trades. We sell a finished property on a deadline.</p>
        </div>
        <div className="container home-portfolio__list">
          {teaserProjects.map((project) => (
            <article key={project.title} className="home-portfolio__article">
              <div className="home-portfolio__images">
                <div className="home-portfolio__image">
                  <ImagePlaceholder hint={project.beforeHint} aspectRatio="4 / 3" />
                  <div className="home-portfolio__tag home-portfolio__tag--before">BEFORE</div>
                </div>
                <div className="home-portfolio__image">
                  <ImagePlaceholder hint={project.afterHint} aspectRatio="4 / 3" />
                  <div className="home-portfolio__tag home-portfolio__tag--after">AFTER</div>
                </div>
              </div>
              <div>
                <h3 className="home-portfolio__project-title">{project.title}</h3>
                <div className="home-portfolio__project-kind">{project.kind}</div>
                <div className="home-portfolio__stats">
                  <div className="home-portfolio__stat">
                    <div className="home-portfolio__stat-value">{project.repairs}</div>
                    <div className="home-portfolio__stat-label">repairs completed</div>
                  </div>
                  <div className="home-portfolio__stat">
                    <div className="home-portfolio__stat-value">{project.trades}</div>
                    <div className="home-portfolio__stat-label">trades coordinated</div>
                  </div>
                  <div className="home-portfolio__stat">
                    <div className="home-portfolio__stat-value">{project.days}</div>
                    <div className="home-portfolio__stat-label">days on site</div>
                  </div>
                  <div className="home-portfolio__stat">
                    <div className="home-portfolio__stat-value home-portfolio__stat-value--accent">{project.ready}</div>
                    <div className="home-portfolio__stat-label">ready for photography</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* For agents */}
      <section className="section-divider home-agents">
        <div className="container home-agents__grid">
          <div>
            <span className="eyebrow home-agents__eyebrow">For real estate agents</span>
            <h2 className="home-agents__title">One contractor relationship for every listing.</h2>
            <p className="home-agents__lede">
              Send the address. We handle scope, crews, schedule and cleanup, and hand the property back on the date you
              gave us — so you keep selling instead of dispatching.
            </p>
          </div>
          <div className="home-agents__list">
            {agentPoints.map((point) => (
              <div key={point} className="home-agents__item">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment / schedule example */}
      <section className="section-divider">
        <div className="container home-commitment">
          <div>
            <span className="eyebrow">Our commitment</span>
            <h2 className="home-commitment__title">Tell us your photography date. We build the schedule backward from it.</h2>
            <p className="home-commitment__copy">
              The deadline isn&rsquo;t a hope on our end — it&rsquo;s the first line of the proposal. If we can&rsquo;t hit
              your date, we say so before you sign, not the week of.
            </p>
          </div>
          <div className="home-commitment__card">
            <div className="home-commitment__card-header">{scheduleExample.heading}</div>
            {scheduleExample.rows.map((row) => (
              <div
                key={row.task}
                className={
                  'home-commitment__row' +
                  (row.active ? ' home-commitment__row--active' : '') +
                  (row.final ? ' home-commitment__row--final' : '')
                }
              >
                <span className="home-commitment__task">{row.task}</span>
                <span className="home-commitment__status">{row.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
