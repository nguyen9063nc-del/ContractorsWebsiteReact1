import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import { aboutStats, rules, team, credentials } from '../data/siteData.js'
import './About.css'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="section-divider">
        <div className="container about-hero">
          <div className="about-hero__copy">
            <span className="eyebrow">About us</span>
            <h1 className="about-hero__title">
              We built this for
              <br />
              the deadline.
            </h1>
            <p className="about-hero__lede">
              Contractors Only exists for one job: take a property that isn&rsquo;t ready to photograph and hand it back on
              the date you gave us &mdash; finished, cleaned, and under one contract.
            </p>
          </div>
          <div className="about-hero__media">
            <ImagePlaceholder hint="Team on site / finished property — wide shot" fill />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-divider">
        <div className="container about-stats">
          {aboutStats.map((stat, i) => (
            <div key={stat.label} className={'about-stats__item' + (i === 0 ? ' about-stats__item--first' : '')}>
              <div className={'about-stats__value' + (stat.accent ? ' about-stats__value--accent' : '')}>{stat.value}</div>
              <div className="about-stats__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why we started */}
      <section className="section-divider">
        <div className="container about-why">
          <div>
            <span className="eyebrow">Why we started</span>
            <h2 className="about-why__title">Agents were doing our job for free.</h2>
          </div>
          <div className="about-why__copy">
            <p>
              We spent years on the trade side and watched the same thing happen on every listing that needed work: the
              agent became the project manager. Chasing a painter, waiting on a carpet order, discovering nobody hauled
              the debris the morning of the shoot.
            </p>
            <p>
              None of that is the agent&rsquo;s job, and none of it is what a seller hired them for. So we built the
              company we kept wishing existed &mdash; a single crew of trades under one roof, one scope, one invoice, and
              a completion date we commit to in writing before anyone lifts a brush.
            </p>
            <p className="about-why__emphasis">We don&rsquo;t sell trades. We sell a finished property on a deadline.</p>
          </div>
        </div>
      </section>

      {/* Four rules */}
      <section className="section-divider about-rules">
        <div className="container about-rules__intro">
          <span className="eyebrow eyebrow--on-dark">How we work</span>
          <h2 className="about-rules__title">Four rules we don&rsquo;t bend.</h2>
        </div>
        <div className="container about-rules__grid">
          {rules.map((rule) => (
            <div key={rule.number} className="about-rules__item">
              <div className="about-rules__number">{rule.number}</div>
              <h3 className="about-rules__item-title">{rule.title}</h3>
              <p className="about-rules__item-copy">{rule.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="section-divider">
        <div className="container about-team__intro">
          <div>
            <span className="eyebrow">Who you work with</span>
            <h2 className="about-team__title">A small team, on purpose.</h2>
          </div>
          <p className="about-team__lede">The person who walks your property is the person who runs it and the person who calls you.</p>
        </div>
        <div className="container about-team__grid-wrap">
          <div className="about-team__grid">
            {team.map((member) => (
              <div key={member.name} className="about-team__card">
                <div className="about-team__photo">
                  <ImagePlaceholder hint={member.hint} fill />
                </div>
                <div className="about-team__info">
                  <h3 className="about-team__name">{member.name}</h3>
                  <div className="about-team__role">{member.role}</div>
                  <p className="about-team__blurb">{member.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-divider">
        <div className="container about-credentials">
          <div>
            <span className="eyebrow">Credentials &amp; coverage</span>
            <h2 className="about-credentials__title">Fully licensed, fully insured, and local.</h2>
            <p className="about-credentials__copy">
              Documentation goes out with every proposal. If your brokerage needs a certificate on file, ask and it&rsquo;s
              sent the same day.
            </p>
          </div>
          <div className="about-credentials__list">
            {credentials.map((row) => (
              <div key={row.label} className="about-credentials__row">
                <span className="about-credentials__label">{row.label}</span>
                <span className={'about-credentials__value' + (row.accent ? ' about-credentials__value--accent' : '')}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
