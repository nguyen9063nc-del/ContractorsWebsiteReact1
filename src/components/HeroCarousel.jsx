import { useState } from 'react'
import ImagePlaceholder from './ImagePlaceholder.jsx'
import './HeroCarousel.css'

export default function HeroCarousel({ slides }) {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i + slides.length - 1) % slides.length)
  const next = () => setActive((i) => (i + 1) % slides.length)

  return (
    <div className="hero-carousel">
      {slides.map((slide, i) => (
        <div key={slide.id} className={'hero-carousel__pane' + (i === active ? ' hero-carousel__pane--active' : '')}>
          <ImagePlaceholder hint={slide.hint} fill />
        </div>
      ))}

      <button type="button" aria-label="Previous image" onClick={prev} className="hero-carousel__arrow hero-carousel__arrow--prev">
        &larr;
      </button>
      <button type="button" aria-label="Next image" onClick={next} className="hero-carousel__arrow hero-carousel__arrow--next">
        &rarr;
      </button>

      <div className="hero-carousel__dots">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Show hero image ${i + 1}`}
            onClick={() => setActive(i)}
            className={'hero-carousel__dot' + (i === active ? ' hero-carousel__dot--active' : '')}
          />
        ))}
      </div>
    </div>
  )
}
