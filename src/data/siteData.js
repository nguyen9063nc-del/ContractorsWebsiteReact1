// Central content/config for the Contractors Only site.
// Contractors Only preps real estate listings for photography — coordinating
// every trade a property needs under one contract, one invoice, one deadline.

export const business = {
  name: 'Contractors Only',
  phone: '(602) 555-0142',
  email: 'hello@contractorsonly.com',
  market: 'Serving the greater metro area',
  license: 'ROC #000000',
  yearsInBusiness: '12',
}

export const navLinks = [
  { label: 'Process', to: '/#process' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About Us', to: '/about' },
]

// The "everything we coordinate" checklist strip on the homepage.
export const checklist = ['Paint', 'Drywall', 'Carpet & flooring', 'Landscape', 'Deep cleaning', 'Pressure washing', 'Minor repairs']

// The "one point of contact / one proposal / one invoice / one date" strip.
export const onePoints = ['One point of contact', 'One written proposal', 'One invoice', 'One photo-ready date']

// Homepage "stop coordinating six contractors" comparison rows.
export const problemPoints = [
  { before: 'Painter says Thursday', after: 'We schedule the trades' },
  { before: 'Carpet needs three weeks', after: 'We hold the material' },
  { before: 'Nobody hauled the debris', after: 'We leave it show-ready' },
  { before: 'Four invoices, two disputes', after: 'One invoice, one company' },
]

// Five-step process shown on the homepage.
export const processSteps = [
  { number: '01', title: 'Send the property', description: 'Address, photos, and the date it has to be photo-ready.' },
  { number: '02', title: 'Walkthrough in 48 hours', description: 'We walk it, list everything, and flag what buyers will notice.' },
  { number: '03', title: 'One proposal', description: 'Every trade, one scope, one price, one completion date. Approve by text.' },
  { number: '04', title: 'We handle everything', description: 'Crews, materials, keys, access, debris. Progress updates as work closes out.' },
  { number: '05', title: 'Photo-ready', description: 'Cleaned, staged for the camera, and done before your photographer arrives.' },
]

// Four rules shown on the About page.
export const rules = [
  { number: '01', title: 'The date comes first', description: "We schedule backward from your photography date. If we can't hit it, we tell you before you sign." },
  { number: '02', title: 'Everything in writing', description: "One scope, one price, one completion date. No change orders you didn't approve by text." },
  { number: '03', title: 'Our crews, our name', description: "Licensed, insured and background-checked. We don't hand your listing to a stranger off a marketplace." },
  { number: '04', title: 'You never chase us', description: 'Progress photos as work closes out, and one person who answers the phone every time.' },
]

// For real estate agents section (homepage).
export const agentPoints = [
  'Written scope before anyone lifts a brush',
  'Licensed, insured, background-checked crews',
  'Photos of completed work, texted to you',
  'We work with vacant properties and lockboxes',
  'Your seller never has to manage a trade',
]

// Full services list — used on the homepage teaser and the Services page.
export const services = [
  { number: '01', title: 'Interior & exterior paint', description: 'Full repaints, accent walls neutralized, trim and doors touched out.' },
  { number: '02', title: 'Drywall & texture', description: 'Patches, holes, water damage, ceilings matched so repairs disappear.' },
  { number: '03', title: 'Carpet & flooring', description: 'Replacement, stretch and repair, LVP install, hard-surface refresh.' },
  { number: '04', title: 'Landscape & curb appeal', description: 'Cleanup, trim, fresh rock or mulch, dead plant removal, edging.' },
  { number: '05', title: 'Deep cleaning', description: 'Post-construction and move-out clean, windows, appliances, fixtures.' },
  { number: '06', title: 'Pressure washing', description: 'Driveways, walks, patios, siding and fences — the fastest visible win.' },
  { number: '07', title: 'Minor repairs', description: 'Doors, hardware, outlets, fixtures, fencing, the punch list from inspection.' },
]

// Team members shown on the About page.
export const team = [
  { name: 'Owner name', role: 'Owner / estimator', blurb: 'Walks every property, writes every scope, and is the number you call when something changes.', hint: 'Portrait — owner on site' },
  { name: 'Project lead', role: 'Field superintendent', blurb: 'Runs the schedule day to day, keeps the trades in sequence, and sends the progress photos.', hint: 'Portrait — superintendent on site' },
  { name: 'Coordinator', role: 'Scheduling and access', blurb: 'Handles lockboxes, material orders and the final walkthrough before your photographer arrives.', hint: 'Portrait — coordinator' },
]

// Credentials & coverage list on the About page.
export const credentials = [
  { label: 'General contractor license', value: business.license },
  { label: 'General liability insurance', value: 'Certificate on request' },
  { label: "Workers' compensation", value: 'All crews covered' },
  { label: 'Background-checked crews', value: 'Every technician' },
  { label: 'Service area', value: business.market, accent: true },
]

export const aboutStats = [
  { value: business.yearsInBusiness, label: 'Years in business' },
  { value: '140+', label: 'Listings prepared' },
  { value: '1', label: 'Point of contact, always' },
  { value: '100%', label: 'Hit the photography date', accent: true },
]

export const portfolioStats = [
  { value: '140+', label: 'Listings prepared' },
  { value: '7.4', label: 'Average days on site' },
  { value: '6', label: 'Trades per project' },
  { value: '100%', label: 'Hit the photography date', accent: true },
]

// Before/after project write-ups — Portfolio page shows all six,
// the homepage teaser uses the first three.
export const portfolioProjects = [
  {
    title: 'Property One',
    kind: 'Vacant 3-bed — full listing prep',
    scope: 'Full interior repaint, drywall repair throughout, new carpet in three bedrooms, deep clean and haul-off.',
    repairs: 12,
    trades: 6,
    days: 8,
    ready: 'Fri',
    beforeHint: 'BEFORE — dated interior, wide shot',
    afterHint: 'AFTER — same angle, finished',
  },
  {
    title: 'Property Two',
    kind: 'Curb appeal — exterior turn',
    scope: 'Pressure wash, front door and trim repaint, dead plant removal, fresh rock and edging.',
    repairs: 9,
    trades: 4,
    days: 5,
    ready: 'Tue',
    beforeHint: 'BEFORE — tired exterior / yard',
    afterHint: 'AFTER — same angle, finished',
  },
  {
    title: 'Property Three',
    kind: 'Estate sale — occupied to show-ready',
    scope: 'Clear-out, ceiling texture match, full repaint, flooring replacement, landscape reset.',
    repairs: 18,
    trades: 7,
    days: 11,
    ready: 'Mon',
    beforeHint: 'BEFORE — worn kitchen',
    afterHint: 'AFTER — same angle, finished',
  },
  {
    title: 'Property Four',
    kind: 'Kitchen refresh — pre-listing',
    scope: 'Cabinet refinish, hardware swap, backsplash repair, lighting and fixture replacement.',
    repairs: 11,
    trades: 5,
    days: 6,
    ready: 'Thu',
    beforeHint: 'BEFORE — worn kitchen, wide shot',
    afterHint: 'AFTER — same angle, finished',
  },
  {
    title: 'Property Five',
    kind: 'Rental turn — tenant damage',
    scope: 'Drywall patching in every room, full repaint, carpet replacement, door and hardware repairs.',
    repairs: 22,
    trades: 5,
    days: 9,
    ready: 'Wed',
    beforeHint: 'BEFORE — damaged walls / rental',
    afterHint: 'AFTER — same angle, finished',
  },
  {
    title: 'Property Six',
    kind: 'Bathroom + flooring — quick turn',
    scope: 'Vanity and fixture replacement, tile repair, LVP through the main level, final clean.',
    repairs: 7,
    trades: 4,
    days: 4,
    ready: 'Fri',
    beforeHint: 'BEFORE — dated bathroom',
    afterHint: 'AFTER — same angle, finished',
  },
]

// Example project schedule shown on the homepage "commitment" section.
export const scheduleExample = {
  heading: '123 Main Street — 72% complete',
  rows: [
    { task: 'Painting', status: 'Complete' },
    { task: 'Drywall', status: 'Complete' },
    { task: 'Landscaping', status: 'In progress', active: true },
    { task: 'Carpet', status: 'Tomorrow' },
    { task: 'Deep cleaning', status: 'Wednesday' },
    { task: 'Final walkthrough', status: 'Thursday' },
    { task: 'Photography', status: 'Friday — on time', final: true },
  ],
}

// Toggle chips on the "Get Property Ready" lead form.
export const needLabels = ['Paint', 'Drywall', 'Carpet / flooring', 'Landscape', 'Cleaning', 'Pressure washing', 'Minor repairs', 'Not sure — walk it']

export const heroSlides = [
  { id: 'hero-1', hint: 'Hero 1 — finished listing, wide shot' },
  { id: 'hero-2', hint: 'Hero 2 — exterior / curb appeal' },
  { id: 'hero-3', hint: 'Hero 3 — kitchen, finished' },
]
