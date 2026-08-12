import './ImagePlaceholder.css'

// Stand-in for real listing photography. Drop a real <img> in its place
// once photos are available — the hint text describes the intended shot.
export default function ImagePlaceholder({ hint, fill = false, aspectRatio = '4 / 3', className = '' }) {
  return (
    <div
      className={`image-placeholder grayscale ${fill ? 'image-placeholder--fill' : ''} ${className}`}
      style={fill ? undefined : { aspectRatio }}
    >
      <span className="image-placeholder__hint">{hint}</span>
    </div>
  )
}
