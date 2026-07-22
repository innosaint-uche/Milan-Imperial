// Central content for Milan Imperial Limited — mirrors the live milanimperial.com site.

const U = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const LOGO = '/milanlogo.svg';

export const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Agro-Business', href: '/agro' },
  { name: 'Business Consulting', href: '/consulting' },
  { name: 'Contracting', href: '/contracting' },
  { name: 'Private Charter', href: '/charter' },
];

export const company = {
  name: 'Milan Imperial Limited',
  founded: 'October 10th, 2019',
  area: 'West Africa',
  tagline: 'Creating Values',
  location: 'West Africa — Nigeria & Regional Offices',
  email: 'enquiries@milanimperial.com',
  phone: '+234 (0) 000 000 0000',
};

export const heroSlides = [
  {
    key: 'agro',
    overline: 'Agro-Business',
    title: 'Transforming Agriculture Across the Region',
    subtitle: 'Agro-Business · Farming · Agro-Financing',
    image: U('1500382017468-9049fed747ef'),
    to: '/agro',
  },
  {
    key: 'consulting',
    overline: 'Business Consulting',
    title: 'Driving Operational Excellence & Growth',
    subtitle: 'Consultancy · Procurement · Complexity Management',
    image: 'https://res.cloudinary.com/innosaint/image/upload/v1773656127/Business__Consulting_Services_abmwlv.png',
    to: '/consulting',
  },
  {
    key: 'contracting',
    overline: 'General Contracting',
    title: "Building Tomorrow's Infrastructure Today",
    subtitle: 'General Contractors · Supplies · Facilitation',
    image: U('1504307651254-35680f356dfd'),
    to: '/contracting',
  },
  {
    key: 'charter',
    overline: 'Private Charter',
    title: 'Elevating Every Journey in West Africa',
    subtitle: 'Consultancy · Procurement · Management',
    image: U('1436491865332-7a61a109cc05'),
    to: '/charter',
  },
];

export const stats = [
  { value: '35,000+', label: 'Smallholder Farmers Supported' },
  { value: '4', label: 'Business Divisions Operating' },
  { value: '2019', label: 'Year Founded' },
  { value: '100%', label: 'Commitment to Safety & Excellence' },
];

export const story = {
  heading: "West Africa's Most Trusted Diversified Enterprise",
  emphasis: 'Diversified Enterprise',
  paragraphs: [
    'Milan Imperial Limited was incorporated on October 10th, 2019 with a simple but powerful idea: that a diversified enterprise, built on integrity, excellence, and collaboration, could transform industries and communities across West Africa.',
    'From a single office with a handful of dedicated professionals, we have grown into an organisation operating across dynamic sectors — private charter consultancy, agro-business, business consulting, and general contracting — serving clients who trust us with their most important projects and journeys.',
    'Our incorporation date is more than a legal formality. It is the foundation upon which everything we have built stands. Though we may be young compared to century-old institutions, our standards and our commitment to excellence rival the best in the world.',
  ],
  vision:
    'To be the most trusted and innovative diversified enterprise in West Africa, setting the standard for excellence in agribusiness, contracting, and private aviation.',
  mission:
    'To empower progress across West Africa by delivering world-class agricultural solutions, superior construction projects, and seamless private charter experiences.',
  images: [U('1497366811353-6870744d04b2', 900), U('1519389950473-47ba0277781c', 600), U('1460925895917-afdab827c52f', 600)],
};

export const divisions = [
  {
    num: '01',
    slug: 'agro',
    name: 'Agro-Business, Farming & Financing',
    quote: 'We transform agricultural value chains.',
    image: U('1464226184884-fa280b87c399'),
    description:
      "Milan Imperial's Agro-Business division connects farmers to markets, enhances productivity through sustainable practices, and delivers high-quality agricultural products meeting international standards. With deep local relationships across 35,000+ smallholder farmers, we are reshaping West African agriculture.",
    keywords: ['Agro-Business Nigeria', 'Farm Financing West Africa', 'Agricultural Value Chain', 'Sustainable Farming Nigeria', 'Agro-Financing West Africa'],
    services: [
      { num: '01', title: 'Agro-Business', desc: 'Full-scale agricultural enterprise management across the value chain.' },
      { num: '02', title: 'Farming Operations', desc: 'Modern, climate-smart farming practices for higher, sustainable yields.' },
      { num: '03', title: 'Agro-Financing', desc: 'Tailored financing for smallholder farmers and agribusinesses.' },
      { num: '04', title: 'Market Linkage', desc: 'Connecting farmers to domestic and international markets.' },
      { num: '05', title: 'Supply Chain', desc: 'Reliable, integrated logistics from farm gate to market.' },
    ],
  },
  {
    num: '02',
    slug: 'consulting',
    name: 'Business Consulting & Services',
    quote: 'Excellence Across Sectors.',
    image: 'https://res.cloudinary.com/innosaint/image/upload/v1773656127/Business__Consulting_Services_abmwlv.png',
    description:
      'A strategic partner delivering consultancy, procurement, management, staffing, and financing services customised to each engagement. We manage complexity so our clients can focus on what they do best.',
    keywords: ['Business Consulting', 'Enterprise Complexity Management', 'Strategic Partnerships', 'Corporate Financing Solutions', 'Staffing & Procurement'],
    services: [
      { num: '01', title: 'Strategic Advisory', desc: 'Bespoke consultancy delivering operational clarity and direction.' },
      { num: '02', title: 'Complexity Management', desc: 'A single point of contact navigating complex, multi-party projects.' },
      { num: '03', title: 'Procurement Strategy', desc: 'Optimising supply chain efficiency, quality, and cost.' },
      { num: '04', title: 'Staffing Solutions', desc: 'Rapid deployment of specialised, vetted talent.' },
      { num: '05', title: 'Financial Structuring', desc: 'Connecting clients with capital markets and financing.' },
    ],
  },
  {
    num: '03',
    slug: 'contracting',
    name: 'General Contractors, Supplies & Facilitation',
    quote: 'We build with integrity.',
    image: 'https://res.cloudinary.com/innosaint/image/upload/v1773654210/Gemini_Generated_Image_rjap7zrjap7zrjap_uc84hi.png',
    description:
      'Our contracting division delivers construction and engineering projects emphasising quality, safety, and transparent partnership — from initial blueprints and material supply to final handover.',
    keywords: ['General Contracting Nigeria', 'Construction West Africa', 'Infrastructure Contractor Nigeria', 'Building Supplies West Africa', 'Construction Facilitation'],
    services: [
      { num: '01', title: 'General Contracting', desc: 'End-to-end project delivery, from blueprint to handover.' },
      { num: '02', title: 'Supplies', desc: 'Quality-assured building materials and equipment.' },
      { num: '03', title: 'Facilitation', desc: 'Regulatory compliance, permits, and approvals.' },
      { num: '04', title: 'Engineering', desc: 'Civil, structural, and MEP engineering expertise.' },
      { num: '05', title: 'Project Management', desc: 'Rigorous on-time, on-budget project delivery.' },
    ],
  },
  {
    num: '04',
    slug: 'charter',
    name: 'Private Charter Consultancy',
    quote: 'We elevate your journey.',
    image: 'https://res.cloudinary.com/innosaint/image/upload/v1773654714/Private_Charter_Consultancy_gtks60.png',
    description:
      'End-to-end aviation consultancy, procurement, crew management, staffing, and financing solutions across West Africa — assuring safety, privacy, and operational excellence on every journey.',
    keywords: ['Private Charter West Africa', 'Aviation Consultancy Nigeria', 'Charter Procurement', 'Private Aviation Financing', 'Aircraft Management'],
    services: [
      { num: '01', title: 'Consultancy', desc: 'Expert advisory on charter routes, aircraft, and operations.' },
      { num: '02', title: 'Procurement', desc: 'Access to a global network of aircraft and operators.' },
      { num: '03', title: 'Management', desc: 'Full operational management from takeoff to landing.' },
      { num: '04', title: 'Staffing', desc: 'High staff-to-flight ratio ensuring premium service.' },
      { num: '05', title: 'Financing', desc: 'Flexible aviation financing solutions.' },
    ],
  },
];

export const coreValues = [
  {
    num: '01',
    title: 'Integrity Always',
    desc: 'We do the right thing, even when no one is watching. Honesty and transparency are the foundation of every relationship we build.',
    practice: 'A project manager corrects a bid error that was in our favour, choosing long-term trust over short-term gain.',
  },
  {
    num: '02',
    title: 'Safety Above All',
    desc: 'Everyone who works for or with Milan Imperial deserves to go home safe. Safety is never compromised for speed or cost.',
    practice: 'Our private charter division maintains rigorous safety standards, and our contracting teams halt any unsafe work without hesitation.',
  },
  {
    num: '03',
    title: 'Excellence Without Exception',
    desc: 'We strive to be the best at what we do, continuously raising the bar and refusing to settle for "good enough." This is reflected in our carefully selected workforce, our continuous investment in training, and our relentless focus on quality.',
    practice: 'An agro-business team researches and implements best practices from around the world to help local farmers increase yields sustainably. Though we began operations in 2019, our standards rival those of companies decades older.',
  },
  {
    num: '04',
    title: 'Collaborative Growth',
    desc: 'We succeed together. We build lasting partnerships with clients, communities, and colleagues, sharing knowledge and creating value for all.',
    practice: 'Our contracting division partners closely with clients to co-develop long-term solutions rather than one-off transactions.',
  },
  {
    num: '05',
    title: 'Sustainable Stewardship',
    desc: 'We think long-term. We steward the resources, environment, and communities we operate in for the benefit of future generations.',
    practice: 'Our agro division promotes regenerative practices that improve soil health and build farmer resilience to a changing climate.',
  },
];

export const okrs = [
  {
    num: '01',
    title: 'Operational Excellence',
    results: [
      '100% on-time project delivery in contracting',
      'Real-time GPS tracking across 100% of the logistics fleet',
      '50% reduction in aircraft grounding time through proactive maintenance',
      'ISO 9001:2015 certification for quality management',
    ],
  },
  {
    num: '02',
    title: 'Sustainable Growth',
    results: [
      '+15% Nigerian agro-processing market share',
      '+25% private charter client base in West Africa',
      '3 major infrastructure contracts secured in new regions',
      'Sustainable sourcing programme for 100% of key commodities',
    ],
  },
  {
    num: '03',
    title: 'Empowered Workforce',
    results: [
      'Top Employer certification in Nigeria',
      'Leadership programme for 20 high-potential employees',
      '90%+ employee retention rate, above industry average',
      '100% of employees complete annual safety training',
    ],
  },
  {
    num: '04',
    title: 'Community & Environment',
    results: [
      'Outgrower programme supporting 50,000 smallholder farmers',
      '25% reduction in carbon emissions',
      'Community development in all operating regions',
      'Zero waste-to-landfill at headquarters and major facilities',
    ],
  },
];

export const footer = {
  tagline:
    "West Africa's trusted diversified enterprise — delivering excellence in private charter consultancy, agro-business, and general contracting since October 10th, 2019.",
  quote:
    "Milan Imperial Limited delivers integrated excellence across agribusiness, contracting, and private charter — combining global standards with local expertise to provide solutions that are reliable, safe, and tailored to our clients' unique needs.",
  columns: [
    {
      title: 'Company',
      links: [
        { name: 'About Milan Imperial', href: '/about' },
        { name: 'Our Vision & Mission', href: '/about' },
        { name: 'Our Values', href: '/about' },
        { name: 'Strategic Goals', href: '/about' },
      ],
    },
    {
      title: 'Divisions',
      links: [
        { name: 'Agro-Business', href: '/agro' },
        { name: 'Business Consulting', href: '/consulting' },
        { name: 'General Contracting', href: '/contracting' },
        { name: 'Private Charter', href: '/charter' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Partnerships', href: '/contact' },
        { name: 'Careers', href: '/contact' },
      ],
    },
  ],
};
