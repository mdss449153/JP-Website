export interface DemoProject {
  id: string;
  name: string;
  industry: string;
  tagline: string;
  description: string;
  image: string;
  demoUrl: string;
  features: string[];
  color: string;
  accentBg: string;
  livePreview: {
    heroTitle: string;
    heroSubtitle: string;
    badge: string;
    servicesOffered: string[];
    highlightQuote: string;
    phone: string;
    city: string;
  };
}

export const DEMO_PROJECTS: DemoProject[] = [
  {
    id: 'urbannest',
    name: 'UrbanNest Interiors',
    industry: 'Interior Design',
    tagline: 'Modern luxury residential & commercial spaces designed with soul',
    description:
      'A sleek, minimalist website built for a contemporary interior design studio. Features an architectural portfolio grid, interactive design style quiz, client consultation booking, and fast-loading image galleries.',
    image: '/src/assets/images/urbannest_mockup_1790998051121.jpg',
    demoUrl: 'https://demo.justpromot.com/urbannest-interiors',
    features: ['Minimalist Portfolio Grid', 'Instant Consultation Booking', 'Responsive Floorplan Showcase', '98+ Google PageSpeed Score'],
    color: '#0F172A',
    accentBg: 'from-amber-500/10 to-orange-500/10',
    livePreview: {
      heroTitle: 'Transforming Spaces Into Inspired Living',
      heroSubtitle: 'Bespoke residential interior architecture, turnkey renovations, and modular styling.',
      badge: 'Architecture & Design Studio',
      servicesOffered: ['Full Home Interior Design', 'Modular Kitchen & Wardrobes', 'Commercial & Office Spaces', '3D Visualization & VR Walkthrough'],
      highlightQuote: '“Crafting spaces that balance aesthetics, everyday practicality, and mindful elegance.”',
      phone: '+91 98765 43210',
      city: 'Bengaluru & Hyderabad',
    },
  },
  {
    id: 'sreelakshmi',
    name: 'Sree Lakshmi Caterers',
    industry: 'Catering & Events',
    tagline: 'Authentic South & North Indian culinary feasts for weddings & gala events',
    description:
      'An appetizing and festive digital presence for a premier event catering service. Includes curated traditional menu cards, plate cost calculators, event photo galleries, and quick inquiry forms.',
    image: '/src/assets/images/sreelakshmi_mockup_1790998063871.jpg',
    demoUrl: 'https://demo.justpromot.com/sree-lakshmi-caterers',
    features: ['Interactive Feast Menus', 'Guest Count Plate Estimator', 'Direct WhatsApp Enquiry', 'Event Showcase Gallery'],
    color: '#831843',
    accentBg: 'from-rose-500/10 to-amber-500/10',
    livePreview: {
      heroTitle: 'Traditional Flavors. Unforgettable Celebrations.',
      heroSubtitle: 'Pure vegetarian & multi-cuisine catering for grand weddings, receptions, and corporate galas.',
      badge: 'Catering & Hospitality Services',
      servicesOffered: ['Grand Wedding Banquets', 'Corporate Luncheons & Dinners', 'Live Counter & Chaat Stalls', 'Traditional Banana Leaf Dining'],
      highlightQuote: '“Serving four generations of families with pure love, authentic recipes, and uncompromising hygiene.”',
      phone: '+91 98450 12345',
      city: 'Chennai, Vijayawada & Vizag',
    },
  },
  {
    id: 'fitzone',
    name: 'FitZone Studio',
    industry: 'Fitness',
    tagline: 'High-energy strength training, CrossFit, and personal fitness coaching',
    description:
      'A high-intensity, modern gym website designed to drive trial memberships. Features daily class schedules, trainer profiles, virtual gym tour, and simple membership plan cards.',
    image: '/src/assets/images/fitzone_mockup_1790998076145.jpg',
    demoUrl: 'https://demo.justpromot.com/fitzone-studio',
    features: ['Live Class Schedule Table', 'Trainer Portfolio & Bios', 'Free 1-Day Pass Form', 'Mobile-First Layout'],
    color: '#0284C7',
    accentBg: 'from-sky-500/10 to-emerald-500/10',
    livePreview: {
      heroTitle: 'Unlock Your Strongest Version Yet',
      heroSubtitle: 'State-of-the-art strength training, certified personal coaches, and dynamic group workouts.',
      badge: 'Elite Strength & Conditioning Gym',
      servicesOffered: ['Personal Fitness Coaching', 'High-Intensity Interval Training (HIIT)', 'Strength & Hypertrophy Training', 'Nutritional Planning & Body Composition'],
      highlightQuote: '“No shortcuts. Just dedicated coaching, supportive community, and real measurable gains.”',
      phone: '+91 91234 56789',
      city: 'Mumbai & Pune',
    },
  },
  {
    id: 'coastalbrew',
    name: 'Coastal Brew Café',
    industry: 'Café / Food',
    tagline: 'Artisanal single-origin coffee, sourdough bakes, and peaceful coastal vibes',
    description:
      'A warm, welcoming website crafted for a specialty neighborhood coffee shop. Features a visual digital menu, operating hours, Google Maps directions, and Instagram feed integration.',
    image: '/src/assets/images/coastalbrew_mockup_1790998090748.jpg',
    demoUrl: 'https://demo.justpromot.com/coastal-brew-cafe',
    features: ['Visual Digital Drink Menu', 'Google Maps Location Embed', 'Specialty Coffee Guide', 'Instant Table Reservation'],
    color: '#78350F',
    accentBg: 'from-amber-600/10 to-emerald-600/10',
    livePreview: {
      heroTitle: 'Slow-Brewed Coffee. Honest Fresh Bakes.',
      heroSubtitle: 'Single-origin beans roasted to perfection, buttery French croissants, and cozy workspace booths.',
      badge: 'Artisanal Specialty Coffee & Bakery',
      servicesOffered: ['Pour-Over & Aeropress Bar', 'Artisanal Sourdough & Pastries', 'Work-Friendly High-Speed WiFi', 'Whole Bean Retail Bags'],
      highlightQuote: '“Where good conversations brew over fresh roasts and ocean breezes.”',
      phone: '+91 98760 11223',
      city: 'Goa & Mangaluru',
    },
  },
];
