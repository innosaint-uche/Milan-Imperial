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
    metrics: [
      { value: '35,000+', label: 'Smallholder Farmers Supported' },
      { value: '50,000', label: 'Outgrower Target' },
      { value: '25%', label: 'Carbon Reduction Target' },
      { value: '100%', label: 'Sustainable Sourcing Goal' },
    ],
    overview: {
      lead: 'Transforming Agriculture ',
      emphasis: 'Across West Africa',
      paragraphs: [
        "Milan Imperial's Agro-Business division is one of West Africa's most comprehensive agricultural solutions providers. We empower farmers, enhance food security, and promote sustainable agricultural practices across Nigeria and the broader West African sub-region. Our mission is to transform agricultural value chains by connecting farmers to markets, enhancing productivity through sustainable practices, and delivering high-quality agricultural products that meet international standards.",
        'Since our incorporation on October 10th, 2019, Milan Imperial has built deep local relationships with over 35,000 smallholder farmers. We work alongside farming communities — providing inputs, finance, technical knowledge, and market access — to create value at every point of the agricultural chain.',
        'Our integrated approach combines agro-business operations, direct farm management, bespoke agro-financing structures, climate-smart practices, and market linkage services into a single, seamless offering. Whether you are a smallholder farmer, a commercial agricultural enterprise, or an institutional investor in West African agriculture, Milan Imperial delivers solutions tailored to your specific needs.',
      ],
    },
    whyChoose: {
      title: 'Why Choose Milan Imperial Agro?',
      points: [
        'Deep local relationships with over 35,000 smallholder farmers since October 10th, 2019',
        'Commitment to regenerative and climate-smart agricultural practices',
        'Quality assurance through rigorous testing and traceability',
        'Reliable supply chain powered by integrated logistics',
        'Bespoke agro-financing solutions for all scales of operation',
        'Direct market linkage to domestic and international buyers',
        'In-house extension services and agronomic advisory',
        'ISO-aligned quality management and traceability systems',
      ],
    },
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
    overview: {
      lead: 'Managing Complexity with ',
      emphasis: 'Strategic Precision',
      paragraphs: [
        'Milan Imperial Limited functions as a strategic partner, delivering consultancy, procurement, management, staffing, and financing services customized to the precise circumstances of each engagement.',
        'We understand that each client possesses unique requirements that demand tailored solutions. Rather than offering standardized packages, we excel at managing complexity. You gain a single point of contact guiding you through regulatory frameworks, multiple service providers, and operational milestones, thus reducing administrative burdens and accelerating timelines.',
        'From building networks of qualified professionals to securing asset-based lending and optimal capital structures, our consulting division brings unyielding dedication, reliability, and precision to your business growth.',
      ],
    },
    whyChoose: {
      title: 'Why Choose Milan Imperial Consulting?',
      points: [
        'Single point of contact for complex, multi-party engagements',
        'Deep expertise in procurement, staffing, and specialized financing',
        'Customized strategies tailored to specific client circumstances',
        'Ability to navigate challenging regulatory frameworks seamlessly',
        'Focus on long-term value creation rather than short-term fixes',
        'Extensive network of qualified professionals and institutional partners',
        'Discreet, concierge-level attention to client objectives',
      ],
    },
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
    metrics: [
      { value: '100%', label: 'On-Time Project Delivery Target' },
      { value: '100%', label: 'GPS Fleet Tracking Coverage' },
      { value: 'ISO 9001', label: 'Quality Management Certification Target' },
      { value: '3+', label: 'Major Infrastructure Contracts — New Regions' },
    ],
    overview: {
      lead: "Building Tomorrow's Infrastructure ",
      emphasis: 'Today',
      paragraphs: [
        "Milan Imperial's General Contracting division executes construction and engineering projects with precision, safety, and excellence that stand the test of time. We bring unwavering commitment to quality, transparent partnership, and a safety culture that exceeds industry norms to every project we undertake.",
        'Since our incorporation on October 10th, 2019, we have built a proven track record of on-time, on-budget project delivery. Our collaborative approach treats every client as a long-term partner — not just a contract. We develop solutions that meet long-term needs rather than short-term checkboxes.',
        'Our contracting division integrates general contracting, construction supplies procurement, and project facilitation into a seamless offering. Whether you are commissioning a commercial building, a major infrastructure project, or require specialist construction materials procurement, Milan Imperial delivers with consistency and integrity.',
      ],
    },
    whyChoose: {
      title: 'Why Choose Milan Imperial Contracting?',
      points: [
        'Proven track record of on-time, on-budget project delivery since October 10th, 2019',
        'Safety record that exceeds industry standards — zero compromises on HSE',
        'Collaborative approach treating clients as long-term partners, not just contracts',
        'Skilled workforce continuously developed through training and empowerment',
        'ISO 9001:2015 quality management certification (target)',
        'Real-time GPS tracking across 100% of logistics fleet',
        'Transparent project reporting and open-book cost management',
        'Established procurement network for timely material supply',
      ],
    },
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
    overview: {
      lead: 'End-to-End Aviation Excellence ',
      emphasis: 'Across West Africa',
      paragraphs: [
        "Milan Imperial's Private Charter division provides end-to-end aviation consultancy, procurement, crew management, staffing, and financing solutions across West Africa. Every trip is treated as a mission-critical operation — meticulously planned months in advance, never hours.",
        'We elevate your journey by providing seamless, luxurious, and impeccably planned private aviation experiences. Our asset-light model means we are never constrained by a fixed fleet — we source the right aircraft for your specific mission from our global network of vetted operators.',
      ],
    },
    whyChoose: {
      title: 'Why Choose Milan Imperial Charter?',
      points: [
        'Meticulous planning months in advance, not hours',
        'High staff-to-flight ratio ensuring personalized attention',
        'Access to a global network of vetted aircraft and operators',
        'Concierge-level service from a single, dedicated team',
        'Asset-light model focused on client needs, not debt service',
        'Safety standards that exceed regulatory requirements',
        'Deep knowledge of West African aviation routes and regulations',
        'Single point of contact for end-to-end charter management',
      ],
    },
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

// Frequently asked questions, keyed by page slug. The four division sets mirror
// the live milanimperial.com pages; `about` is company-level.
export const faqs = {
  agro: [
    {
      q: 'What agro-business services does Milan Imperial provide in Nigeria?',
      a: 'Milan Imperial provides comprehensive agro-business solutions in Nigeria including farm operations management, commodity sourcing and processing, agro-financing for smallholder and commercial farmers, agricultural value chain development, market access facilitation, and sustainable farming advisory. We have been building agricultural expertise across West Africa since October 10th, 2019.',
    },
    {
      q: 'How does Milan Imperial support smallholder farmers in West Africa?',
      a: "Milan Imperial's outgrower programme connects smallholder farmers to inputs, finance, technical support, and guaranteed markets. We work directly with farming communities to improve yields, reduce post-harvest losses, and increase income. Our programme currently supports over 35,000 smallholder farmers across West Africa, with a target to reach 50,000.",
    },
    {
      q: 'What crops and commodities does Milan Imperial work with?',
      a: 'We work across a broad range of West African commodities including cassava, maize, soybean, cocoa, palm produce, groundnuts, sesame, ginger, rice, and horticultural produce. Our commodity selection is driven by market demand, regional comparative advantage, and client requirements.',
    },
    {
      q: 'What is agro-financing and how does Milan Imperial structure it?',
      a: 'Agro-financing refers to financial products and structures specifically designed for agricultural businesses and farmers. Milan Imperial structures input financing, crop advance facilities, commodity-backed lending, and project finance for agricultural infrastructure — matching financial solutions to the specific cash flow profile and risk environment of each agricultural enterprise.',
    },
    {
      q: 'Does Milan Imperial operate farms directly or only provide advisory services?',
      a: 'Milan Imperial does both. We operate and manage farms directly as well as provide advisory, extension, and management services to third-party farming operations. Our approach is tailored to the specific needs of each client — from full farm management to targeted advisory engagements.',
    },
  ],
  consulting: [
    {
      q: "What makes Milan Imperial's consulting approach different?",
      a: "We function as a strategic partner rather than just advisors. We don't offer standardized packages; instead, we provide tailored consultancy, procurement, management, and financing solutions designed specifically for your unique operational circumstances.",
    },
    {
      q: 'What is "Complexity Management"?',
      a: 'Complexity management is our core competency. We act as a single point of contact that navigates multiple service providers, diverse regulatory frameworks, and intricate operational requirements so that you can simply focus on your overarching business goals.',
    },
    {
      q: 'How do you handle staffing needs for specialized projects?',
      a: 'We maintain relationships with experienced professionals across our key sectors. Our rigorous vetting processes ensure that every team deployed meets the highest standards of technical proficiency and operational reliability.',
    },
    {
      q: 'Can you assist with business financing?',
      a: 'Yes, our financing capabilities complement our consulting services. We connect clients with capital markets and institutional lenders familiar with the specific characteristics of their industry vertical, structuring optimization for their balance sheets.',
    },
  ],
  contracting: [
    {
      q: 'What general contracting services does Milan Imperial provide in Nigeria?',
      a: 'Milan Imperial provides comprehensive general contracting services in Nigeria including civil and structural construction, engineering project management, construction supplies procurement, project facilitation, infrastructure development, and full HSE (Health, Safety and Environment) management. We have been delivering construction excellence across West Africa since our incorporation on October 10th, 2019.',
    },
    {
      q: 'How does Milan Imperial ensure on-time project delivery?',
      a: 'Milan Imperial achieves 100% on-time delivery targets through meticulous project planning, experienced site management, real-time logistics tracking, proactive risk identification, and a collaborative approach with clients. Our project controls system provides continuous visibility into schedule, cost, and quality — and our culture of integrity means we surface problems early rather than hide them.',
    },
    {
      q: 'What types of construction and infrastructure projects does Milan Imperial undertake?',
      a: 'We undertake commercial buildings, industrial facilities, residential estates, institutional buildings (schools, hospitals, government facilities), road and bridge infrastructure, water and sanitation systems, power infrastructure, and telecommunications facilities. Our scope spans new construction, renovation, and facility management across Nigeria and West Africa.',
    },
    {
      q: 'Does Milan Imperial supply construction materials as well as contract services?',
      a: "Yes. Milan Imperial's contracting division integrates construction supplies procurement with contracting services. We source and supply a full range of construction materials — structural steel, cement, aggregates, electrical materials, plumbing supplies, and specialist equipment — through our established supplier network. This integrated approach reduces procurement risk and ensures material availability on schedule.",
    },
    {
      q: 'What safety standards does Milan Imperial maintain on construction sites?',
      a: "Milan Imperial's safety standards exceed regulatory requirements across all jurisdictions we operate in. Our HSE programme includes full risk assessment, method statements, continuous site monitoring, toolbox talks, and empowering every worker to halt unsafe work regardless of project timelines. Since our founding on October 10th, 2019, we have maintained an exemplary safety record.",
    },
  ],
  charter: [
    {
      q: 'What is private charter consultancy?',
      a: 'Private charter consultancy is a service where experienced aviation professionals advise and manage all aspects of private aircraft chartering — from aircraft selection and operator vetting to flight planning, staffing, and financing. Milan Imperial acts as your dedicated aviation partner, not just a booking agent.',
    },
    {
      q: 'How does Milan Imperial source aircraft in West Africa?',
      a: 'We maintain relationships with a global network of certified aircraft operators, including those with strong West African presence. Every operator we work with undergoes rigorous safety audits, documentation verification, and operational track record review before being approved for our clients.',
    },
    {
      q: 'What types of clients use your private charter services?',
      a: 'Our private charter division serves corporate executives, government agencies, NGOs, oil and gas companies, and high-net-worth individuals across West Africa who require reliable, discreet, and high-quality aviation solutions.',
    },
    {
      q: 'How far in advance should I book a private charter?',
      a: "For routine routes within West Africa, we recommend at least 48–72 hours. For complex international missions, special permits, or high-value itineraries, we advise clients to engage us 2–4 weeks in advance. Milan Imperial's meticulous planning approach ensures even last-minute requests are handled with precision.",
    },
    {
      q: 'Does Milan Imperial own aircraft?',
      a: 'Milan Imperial operates an asset-light model — we do not own aircraft. This approach allows us to source the most suitable and cost-effective aircraft for each specific mission, without the overhead and limitations of fleet ownership.',
    },
  ],
  about: [
    {
      q: 'When was Milan Imperial Limited founded?',
      a: 'Milan Imperial Limited was incorporated on October 10th, 2019. Though young compared to century-old institutions, our standards and our commitment to excellence rival the best in the world.',
    },
    {
      q: 'What does Milan Imperial Limited do?',
      a: 'We are a diversified enterprise operating across four divisions in West Africa: Agro-Business, Farming & Financing; Business Consulting & Services; General Contractors, Supplies & Facilitation; and Private Charter Consultancy.',
    },
    {
      q: 'Where does Milan Imperial operate?',
      a: 'We operate across West Africa, headquartered in Nigeria with regional offices, serving clients who trust us with their most important projects and journeys.',
    },
    {
      q: 'What values guide the company?',
      a: 'Everything we do is anchored in five core values: Integrity Always, Safety Above All, Excellence Without Exception, Collaborative Growth, and Sustainable Stewardship.',
    },
    {
      q: 'How do I start a partnership with Milan Imperial?',
      a: 'Reach out through our contact page or email enquiries@milanimperial.com. Tell us about your project and we will tailor a solution built on integrity, safety, and excellence.',
    },
  ],
};

export const testimonials = [
  {
    quote:
      'Milan Imperial linked our cooperative to buyers we could never have reached alone. Yields are up, payments are on time, and for the first time farming feels like a real business.',
    name: 'Amara Okonkwo',
    role: 'Cooperative Lead',
    org: 'Enugu Outgrower Network',
  },
  {
    quote:
      'Their contracting team delivered our warehouse two weeks early and on budget. The transparency at every stage is unlike any contractor we have worked with in the region.',
    name: 'Tunde Bakare',
    role: 'Operations Director',
    org: 'Lagos Logistics Group',
  },
  {
    quote:
      'The charter desk arranged a last-minute regional tour flawlessly. Discreet, professional, and genuinely obsessed with safety. We will not fly with anyone else.',
    name: 'Fatou Diallo',
    role: 'Chief of Staff',
    org: 'Dakar Holdings',
  },
  {
    quote:
      'What impressed me most was the integrity. They flagged a costing error that was in our favour and corrected it themselves. That is rare and it earned our long-term trust.',
    name: 'Chinedu Eze',
    role: 'Managing Partner',
    org: 'Meridian Capital',
  },
  {
    quote:
      'As a smallholder, the agro-financing gave me the inputs I needed at the right season. My harvest doubled and repayment was structured around my cash flow.',
    name: 'Halima Yusuf',
    role: 'Smallholder Farmer',
    org: 'Kano State',
  },
  {
    quote:
      'The consulting team untangled a genuinely complex multi-party procurement for us. One point of contact, zero drama, measurable savings. Exactly what we needed.',
    name: 'Kwame Mensah',
    role: 'Procurement Head',
    org: 'Accra Infrastructure Co.',
  },
  {
    quote:
      'From permits to final handover, they handled the regulatory maze so our team could focus on delivery. A true partner, not just a supplier.',
    name: 'Ngozi Adeyemi',
    role: 'Project Sponsor',
    org: 'Delta Development Authority',
  },
  {
    quote:
      'Their staffing solution deployed vetted specialists within days. Quality of talent was excellent and the onboarding was seamless.',
    name: 'Ibrahim Sow',
    role: 'HR Director',
    org: 'Sahel Energy',
  },
  {
    quote:
      'We started as a small pilot and now run three programmes together. They invest in the relationship and it shows in every deliverable.',
    name: 'Aisha Bello',
    role: 'Founder',
    org: 'GreenRoots Agritech',
  },
  {
    quote:
      'The private aviation experience was world-class — crew, aircraft, and coordination all faultless. Milan Imperial sets the standard in West Africa.',
    name: 'Olivier Kouassi',
    role: 'Executive Chairman',
    org: 'Abidjan Trading House',
  },
  {
    quote:
      'They think long-term. The regenerative practices they introduced improved our soil and our resilience through a difficult season.',
    name: 'Zainab Musa',
    role: 'Farm Manager',
    org: 'Northern Yields Ltd',
  },
  {
    quote:
      'Reliable, safe, and tailored to us — every project has met the standard they promise. It is why we keep coming back.',
    name: 'Samuel Otieno',
    role: 'CEO',
    org: 'Equator Ventures',
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
