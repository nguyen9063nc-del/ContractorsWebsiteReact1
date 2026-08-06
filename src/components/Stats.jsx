import { stats } from '../data/siteData.js'
import './Stats.css'

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((stat) => (
          <div className="stats__item" key={stat.label}>
            <div className="stats__value">{stat.value}</div>
            <div className="stats__label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
