// Central content/config for the Ridgeline Contracting site.
// Sourced from design-reference/style-guide.md — edit here to update copy site-wide.

export const business = {
  name: 'Ridgeline Contracting',
  phone: '(555) 123-4567',
  email: 'info@ridgelinecontracting.com',
  address: '482 Industrial Pkwy, Millbrook',
  license: 'Lic #CGC-084213',
  tagline: 'Licensed & Insured · 20+ Years',
}

// `to` values are React Router paths. Hash-suffixed paths (e.g. "/#services")
// point at a section on the homepage and work from any page.
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/#services' },
  { label: 'Portfolio', to: '/#portfolio' },
  { label: 'About', to: '/about' },
]

export const stats = [
  { value: '20+', label: 'Years in Business' },
  { value: '450+', label: 'Projects Completed' },
  { value: '98%', label: 'On-Time Delivery' },
  { value: 'A+', label: 'BBB Rating' },
]

export const services = [
  {
    title: 'General Contracting',
    description:
      'End-to-end project management for residential and commercial builds, from permitting through final walkthrough.',
  },
  {
    title: 'Remodeling & Renovation',
    description:
      'Kitchen, bath, and whole-home renovations that update outdated spaces without the guesswork.',
  },
  {
    title: 'Concrete & Masonry',
    description:
      'Foundations, driveways, retaining walls, and stonework built to last through every season.',
  },
  {
    title: 'Roofing',
    description:
      'Repairs, replacements, and new installs using durable materials backed by workmanship warranties.',
  },
]

export const portfolio = [
  {
    category: 'Residential',
    title: 'Modern Farmhouse Renovation',
    placeholder: 'exterior renovation, wide shot',
  },
  {
    category: 'Commercial',
    title: 'Millbrook Office Complex',
    placeholder: 'commercial build, exterior',
  },
  {
    category: 'Residential',
    title: 'Custom Home Build',
    placeholder: 'new construction, front elevation',
  },
]
