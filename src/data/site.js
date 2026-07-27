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
  email: 'milanimperial2@gmail.com',
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
  { value: '775', label: 'Plots of Farmland — 51.7 Hectares' },
  { value: '+107%', label: 'Land Portfolio Growth This Year' },
  { value: '8,000+', label: 'Yam Tubers Planted & Harvested' },
  { value: '2,500+', label: 'Farmers Engaged Across Our Land' },
];

export const story = {
  heading: "West Africa's Most Trusted Diversified Enterprise",
  emphasis: 'Diversified Enterprise',
  paragraphs: [
    'Milan Imperial Limited was incorporated on October 10th, 2019 with a simple but powerful idea: that a diversified enterprise, built on integrity, excellence, and collaboration, could transform industries and communities across West Africa.',
    'From a single office with a handful of dedicated professionals, we have grown into an organisation operating across dynamic sectors — agro-business, business consulting, general contracting, and private charter consultancy — serving clients who trust us with their most important projects and journeys.',
    'That growth is measurable. We began with 375 plots of Nigerian farmland. This year alone we added 400 more across Benue, Taraba and Plateau State, taking the portfolio to 775 plots — 51.7 hectares — and more than doubling our land base in twelve months. On it we have planted and harvested over 8,000 tubers of yam, commenced our first trial export to the United Kingdom, and built a livestock operation supplying restaurants in Lagos.',
    'Our reach extends beyond agriculture and beyond Nigeria. Alongside our general contracting practice, we acquire residential property in the United States, the United Kingdom and Australia. And through our consulting division we open the door to agriculture for people who have capital but no land, and for landowners who have ground but no plan.',
    'Our incorporation date is more than a legal formality. It is the foundation upon which everything we have built stands. Though we may be young compared to century-old institutions, our standards and our commitment to excellence rival the best in the world.',
  ],
  vision:
    'To be the most trusted and innovative diversified enterprise in West Africa, setting the standard for excellence in agribusiness, contracting, and private aviation.',
  mission:
    'To empower progress across West Africa by delivering world-class agricultural solutions, superior construction projects, and seamless private charter experiences.',
  images: [U('1497366811353-6870744d04b2', 900), U('1519389950473-47ba0277781c', 600), U('1460925895917-afdab827c52f', 600)],
};

// ---------------------------------------------------------------------------
// Verified operating figures. Plot-to-hectare conversion uses the Nigerian
// standard 60ft x 120ft plot (~669 m2) = 15 plots per hectare, which is the
// ratio implied by the founding holding of 375 plots = 25 hectares.
// Shared by the About page and the Agro division page.
// ---------------------------------------------------------------------------
export const landPortfolio = {
  overline: 'Land Under Management',
  title: 'From 25 Hectares to 51.7 — In a Single Year',
  intro:
    'Milan Imperial does not talk about agriculture in the abstract. We own and work the land. This is the full position as it stands today, state by state, with nothing rounded in our favour.',
  columns: ['Location', 'Plots', 'Hectares', 'Status'],
  rows: [
    { region: 'Benue', plots: '115', hectares: '7.7', status: 'Acquired 2026' },
    { region: 'Taraba', plots: '255', hectares: '17.0', status: 'Acquired 2026' },
    { region: 'Jos, Plateau', plots: '30', hectares: '2.0', status: 'Acquired 2026' },
    { region: 'Founding holdings', plots: '375', hectares: '25.0', status: 'Held since inception' },
  ],
  total: { region: 'Total portfolio', plots: '775', hectares: '51.7', status: 'Under management' },
  highlight: {
    value: '400',
    unit: 'plots',
    label: 'added this year — 26.7 hectares',
    sub: 'A 107% increase on our founding land base, acquired in twelve months.',
  },
  footnote:
    'Hectares converted at the Nigerian standard 60ft x 120ft plot (15 plots per hectare) — the same ratio as our founding 375-plot, 25-hectare holding.',
};

export const traction = {
  overline: 'What We Have Actually Done',
  title: 'Proof, Not Projections',
  intro:
    'Every figure below describes work already completed — land already bought, crops already in the ground and out of it, animals already sold, product already on its way overseas.',
  items: [
    {
      num: '01',
      stat: '775 plots',
      title: 'Land Acquired and Held',
      desc: '51.7 hectares across Benue, Taraba, Plateau and our founding holdings — more than doubled in the past twelve months.',
    },
    {
      num: '02',
      stat: '8,000+',
      title: 'Yam Tubers Planted and Harvested',
      desc: 'Not planted and hoped for. Planted, grown, and brought in — a completed production cycle on our own land.',
    },
    {
      num: '03',
      stat: 'First export',
      title: 'Trial Shipment to the United Kingdom',
      desc: 'Our first trial export to the UK has commenced, opening the foreign-currency market that changes the economics of everything we grow.',
    },
    {
      num: '04',
      stat: '2,500+',
      title: 'Farmers Engaged',
      desc: 'We engage the equivalent of 50 farmers per hectare, working hand-in-hand with local farming communities rather than displacing them.',
    },
    {
      num: '05',
      stat: 'Livestock',
      title: 'Ruminants Supplying Lagos',
      desc: 'We have moved into animal husbandry, acquiring ruminant animals and supplying Lagos restaurants — revenue that does not wait on a harvest calendar.',
    },
    {
      num: '06',
      stat: '4 divisions',
      title: 'Diversified Beyond Agriculture',
      desc: 'Agro-business, consulting, general contracting, and private charter — plus residential property acquisition in the US, UK and Australia.',
    },
  ],
};

export const growthTargets = {
  overline: 'Targets & Track Record',
  title: 'We Set Targets. We Meet Them.',
  intro:
    'A target only means something if there is a history of hitting them. Here is what we set out to do this year, what we delivered, and what we are committing to next.',
  deliveredLabel: 'Set for 2026 — Delivered',
  nextLabel: 'Committed for 2027',
  delivered: [
    { target: 'Expand the land base beyond our founding holdings', result: '400 plots added — 26.7 hectares, a 107% increase' },
    { target: 'Complete a full production cycle at scale', result: '8,000+ yam tubers planted and harvested' },
    { target: 'Open an international market channel', result: 'First trial export to the United Kingdom commenced' },
    { target: 'Diversify revenue beyond seasonal crops', result: 'Ruminant livestock operation supplying Lagos restaurants' },
  ],
  next: [
    { target: '1,200 plots — 80 hectares under management', detail: 'Continuing the acquisition programme across Benue, Taraba and Plateau.' },
    { target: '25,000 yam tubers planted and harvested', detail: 'Scaling our proven production cycle onto the newly acquired land.' },
    { target: 'First full commercial export container to the UK', detail: 'Converting the successful trial shipment into recurring export revenue.' },
    { target: '4,000 farmer placements', detail: 'Maintaining 50 farmers per hectare as the land base grows.' },
  ],
  footnote: 'Targets are reviewed and reported against annually.',
};

export const investorPaths = {
  overline: 'Invest With Us',
  title: 'Three Ways In — Whatever You Are Starting With',
  intro:
    'You do not need a fortune and you do not need to know anything about farming. You need capital or land, and a decision. We handle everything between that decision and your return.',
  paths: [
    {
      num: '01',
      title: 'You have capital, not land',
      lead: 'The most common place people start.',
      steps: [
        'Tell us what you want to farm and the gain you are working towards.',
        'We provide the land from our own 51.7-hectare portfolio.',
        'We supply the farmers who plant, tend and harvest it.',
        'If you want, we sell the harvest for you through our market and export channels.',
        'You receive your capital and your gain. We take only the percentage agreed at the start.',
      ],
      note: 'No minimum fortune required. The percentage is agreed before a single seed goes in the ground.',
    },
    {
      num: '02',
      title: 'You have land, not a plan',
      lead: 'Idle land is the most expensive thing you can own.',
      steps: [
        'We assess your land and advise exactly what it can profitably grow.',
        'You take that plan and farm it yourself, with our advisory behind you.',
        'Or we farm it for you end to end — our farmers, our inputs, our management.',
        'If we farm it, you take an agreed percentage of what the land produces.',
      ],
      note: 'Either route, you find out what your land is actually worth before you spend anything on it.',
    },
    {
      num: '03',
      title: 'You want to grow with the company',
      lead: 'Back the operation itself, not a single field.',
      steps: [
        'Participate across a portfolio already spanning 775 plots in three states.',
        'Exposure to crop production, livestock, and our UK export channel together.',
        'Backed by a company that more than doubled its land base in twelve months.',
        'Transparent reporting against published annual targets.',
      ],
      note: 'Talk to us about the level that fits what you have to commit.',
    },
  ],
  cta: { label: 'Start a Conversation', text: 'Tell us what you have to work with and we will tell you honestly what it can do.' },
};

export const divisions = [
  {
    num: '01',
    slug: 'agro',
    name: 'Agro-Business, Farming & Financing',
    quote: 'Empower farmers. Enhance food security. Create lasting value.',
    image: U('1464226184884-fa280b87c399'),
    description:
      "Milan Imperial's Agro-Business division owns and works 775 plots — 51.7 hectares across Benue, Taraba and Plateau. We have planted and harvested over 8,000 yam tubers, commenced our first trial export to the UK, and moved into livestock supplying Lagos restaurants. We farm our own land, and we farm yours.",
    keywords: [
      'Agro-Business Nigeria',
      'Farmland Investment Nigeria',
      'Managed Farming Nigeria',
      'Agricultural Value Chain Nigeria',
      'Yam Production & Export',
      'Animal Husbandry Nigeria',
      'Agro-Financing Nigeria',
      'Farm Partnership Benue Taraba Plateau',
    ],
    metrics: [
      { value: '775', label: 'Plots Owned — 51.7 Hectares' },
      { value: '8,000+', label: 'Yam Tubers Harvested' },
      { value: '2,500+', label: 'Farmers Engaged' },
      { value: '+107%', label: 'Land Growth This Year' },
    ],
    overview: {
      lead: 'We Own the Land. ',
      emphasis: 'We Work It.',
      paragraphs: [
        "Milan Imperial's Agro-Business division is not an advisory practice that talks about farming from an office. We hold 775 plots of Nigerian farmland — 51.7 hectares across Benue, Taraba and Plateau State — and we more than doubled that base in the last twelve months, adding 400 plots in a single year.",
        'On that land we have planted and harvested over 8,000 tubers of yam: a complete production cycle, start to finish. We have commenced our first trial export to the United Kingdom, opening the foreign-currency channel that transforms the economics of everything we grow. And we have moved into animal husbandry, acquiring ruminant animals and supplying Lagos restaurants — revenue that does not wait on a harvest calendar.',
        'We engage the equivalent of 50 farmers per hectare, working alongside local farming communities rather than displacing them. Across the portfolio that is more than 2,500 people earning a living from land we manage. Growth here is not an abstraction — it is measured in plots bought, tubers lifted, animals sold, and containers shipped.',
        'If you have capital and want to farm, we will provide the land, the farmers and the buyer. If you have land and do not know what to do with it, we will tell you what it can grow and, if you want, grow it for you. That is the whole offer, and it is open to you whatever the size of what you are starting with.',
      ],
    },
    whyChoose: {
      title: 'Why Invest Through Milan Imperial?',
      ctaLabel: 'Start a Conversation',
      points: [
        '775 plots — 51.7 hectares of farmland owned and worked, not leased on paper',
        'Land base more than doubled in twelve months: 400 plots added this year',
        'A completed production cycle: 8,000+ yam tubers planted and harvested',
        'First trial export to the United Kingdom already commenced',
        'Livestock operation supplying Lagos restaurants — revenue between harvests',
        'No minimum fortune required — we structure around what you have',
        'Your percentage agreed in writing before a single seed goes in the ground',
        'You get land, farmers, management and a buyer from one organisation',
      ],
    },
    valueProp: {
      quote:
        'Tell us what you want to farm and what you want to earn. We provide the land, the farmers, the harvest and the buyer — you take your capital and your gain, and we take only the percentage we agreed at the start.',
      label: 'Milan Imperial Agro-Business Division Value Proposition',
    },
    servicesHeading: { overline: 'Our Services', title: 'What We Deliver' },
    services: [
      {
        num: '01',
        title: 'Managed Farming for Investors',
        paragraphs: [
          'You bring capital. We bring everything else. Tell us what you want to farm and the return you are working towards, and we allocate land from our own 51.7-hectare portfolio, deploy the farmers who plant and harvest it, and manage the crop through to lifting.',
          'If you want us to, we sell the harvest through our domestic and export channels too. You receive your capital and your gain, and we take only the percentage agreed before planting begins. There is no minimum fortune — we structure around what you actually have.',
        ],
      },
      {
        num: '02',
        title: 'Land Advisory & Farm Partnership',
        paragraphs: [
          'Own land and do not know what to do with it? We assess soil, climate and market conditions and tell you exactly what your land can profitably grow — then you decide how far you want us involved.',
          'Take the plan and farm it yourself with our advisory behind you, or hand it to us entirely: our farmers, our inputs, our management, and an agreed percentage of the proceeds back to you. Either way you stop guessing what your land is worth.',
        ],
      },
      {
        num: '03',
        title: 'Farming & Production',
        paragraphs: [
          'We work 775 plots across Benue, Taraba and Plateau State, engaging the equivalent of 50 farmers per hectare from the surrounding communities. This past cycle we planted and harvested over 8,000 tubers of yam on our own land.',
          'Operations cover land clearing and preparation, planting schedules, soil health management, pest and disease control, harvest logistics, and post-harvest handling built to export standard.',
        ],
      },
      {
        num: '04',
        title: 'Animal Husbandry & Livestock',
        paragraphs: [
          'Milan Imperial has moved into livestock, acquiring ruminant animals and supplying restaurants across Lagos. It is a deliberate hedge: livestock generates revenue on a different cycle to crops, so the business is not held hostage by a single harvest calendar.',
          'The operation covers stock acquisition, husbandry and welfare, feed management, and direct supply relationships with Lagos hospitality buyers.',
        ],
      },
      {
        num: '05',
        title: 'Market Access & Export',
        paragraphs: [
          'Our first trial export to the United Kingdom has commenced — the channel that turns naira-denominated harvests into foreign-currency revenue. We handle compliance, certification, documentation and buyer relationships end to end.',
          'For partners farming through us, this is the difference between selling into a local glut at harvest time and reaching a buyer who pays a premium for quality and traceability.',
        ],
      },
      {
        num: '06',
        title: 'Agro-Financing',
        paragraphs: [
          'Access to capital is the single largest barrier for Nigerian farmers. We structure input financing, crop advance facilities, commodity-backed lending, and project finance for agricultural infrastructure.',
          'Each structure is matched to the cash flow profile of the specific crop and season, so repayment falls due when the money actually arrives — after harvest, not before it.',
        ],
      },
    ],
    narrative: {
      overline: 'Sustainable Stewardship',
      title: 'Agriculture That Builds Tomorrow',
      paragraphs: [
        "Milan Imperial's agro-business division promotes regenerative agricultural practices that improve soil health, sequester carbon, and increase farmer resilience to climate change. We think long-term — our decisions today must benefit farmers, clients, communities, and ecosystems for generations to come.",
        'Our commitment to sustainable stewardship is not just an ethical position — it is a business strategy. Sustainable farms are more productive, more resilient, and more attractive to premium buyers. By integrating climate-smart practices from the ground up, we create agricultural enterprises that are built to last.',
        'We engage the equivalent of 50 farmers per hectare, which across our 51.7 hectares means more than 2,500 people earning from land we manage. We work with the local farming communities already on the ground rather than displacing them — their knowledge of the soil is an asset no amount of capital can buy.',
      ],
      pillars: [
        { title: 'Regenerative Practices', desc: 'Soil health, cover cropping, and agroforestry integrated into all programmes.' },
        { title: 'Local Farmers First', desc: '50 farmers engaged per hectare, drawn from the surrounding communities.' },
        { title: 'Revenue Diversification', desc: 'Livestock alongside crops, so income is not tied to one harvest calendar.' },
        { title: 'Export Discipline', desc: 'Post-harvest handling built to the standard our UK channel demands.' },
      ],
    },
    cta: {
      overline: 'Ready to Grow?',
      title: 'Put Your Money in Ground That Is Already Producing',
      text: 'Capital, land, or just an interest in where this is going — tell us what you have and we will tell you honestly what it can do.',
      buttonLabel: 'Start a Conversation',
    },
  },
  {
    num: '02',
    slug: 'consulting',
    name: 'Business Consulting & Services',
    quote: 'Excellence Across Sectors.',
    image: 'https://res.cloudinary.com/innosaint/image/upload/v1773656127/Business__Consulting_Services_abmwlv.png',
    description:
      'A strategic partner delivering consultancy, procurement, management, staffing, and financing services customised to each engagement — including our agricultural entry advisory for investors with capital and landowners with idle ground.',
    keywords: [
      'Business Consulting',
      'Agricultural Investment Advisory',
      'Land Utilisation Consulting Nigeria',
      'Enterprise Complexity Management',
      'Strategic Partnerships',
      'Corporate Financing Solutions',
      'Staffing & Procurement',
    ],
    overview: {
      lead: 'Managing Complexity with ',
      emphasis: 'Strategic Precision',
      paragraphs: [
        'Milan Imperial Limited functions as a strategic partner, delivering consultancy, procurement, management, staffing, and financing services customized to the precise circumstances of each engagement.',
        'We understand that each client possesses unique requirements that demand tailored solutions. Rather than offering standardized packages, we excel at managing complexity. You gain a single point of contact guiding you through regulatory frameworks, multiple service providers, and operational milestones, thus reducing administrative burdens and accelerating timelines.',
        'One of our fastest-growing consulting practices is agricultural entry. Clients come to us with capital and no farmland, or with farmland and no plan — and in both cases we can advise, execute, or do both. Because Milan Imperial farms 51.7 hectares of its own, this is advice from an operator, not a spectator.',
        'From building networks of qualified professionals to securing asset-based lending and optimal capital structures, our consulting division brings unyielding dedication, reliability, and precision to your business growth.',
      ],
    },
    whyChoose: {
      title: 'Why Choose Milan Imperial?',
      ctaLabel: 'Partner With Us',
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
    servicesHeading: { overline: 'Our Consulting Expertise', title: 'What We Provide' },
    services: [
      {
        num: '01',
        title: 'Strategic Advisory',
        paragraphs: [
          'Bespoke consultancy tailored to the unique goals of your organization. We deliver operational clarity and actionable pathways to growth.',
          'From organizational restructuring to market entry strategies, our advisors partner with your leadership to navigate complex business environments.',
        ],
      },
      {
        num: '02',
        title: 'Complexity Management',
        paragraphs: [
          'Simplifying multi-party engagements, reducing administrative burdens, and accelerating project timelines.',
          'We provide a single point of contact for navigating multiple service providers, regulatory frameworks, and operational requirements.',
        ],
      },
      {
        num: '03',
        title: 'Procurement Strategy',
        paragraphs: [
          'Enhancing supply chain efficiency and managing complex acquisitions with reliability and precision.',
          'Leveraging established networks to optimize vendor relationships, ensuring cost efficiency without compromising on quality.',
        ],
      },
      {
        num: '04',
        title: 'Staffing Solutions',
        paragraphs: [
          'Rapid deployment of specialized, highly-vetted teams across various operational sectors.',
          'We provide both temporary personnel for specific engagements and permanent placements to strengthen your core capabilities.',
        ],
      },
      {
        num: '05',
        title: 'Financial Structuring',
        paragraphs: [
          'Access to capital markets and specialized financing arrangements optimized for your specific industry vertical.',
          'We connect clients with institutional lenders and craft funding frameworks that support expansive growth and operational stability.',
        ],
      },
      {
        num: '06',
        title: 'Regulatory Compliance',
        paragraphs: [
          'Proactive management of compliance requirements across different jurisdictions and sectors.',
          'Our experts ensure that your operations consistently meet or exceed local and international regulatory standards.',
        ],
      },
      {
        num: '07',
        title: 'Agricultural Investment Advisory',
        paragraphs: [
          'For clients with capital who want to move into agriculture but have no land, no farmers and no idea where to start. You tell us what you want to farm and the gain you are targeting; we tell you honestly whether it is achievable, and what it will take.',
          'From there we can execute the whole thing — allocating land from our own portfolio, deploying farmers, managing the crop, and selling the harvest. You take your capital and your gain; we take the percentage agreed up front.',
        ],
      },
      {
        num: '08',
        title: 'Land Utilisation Consulting',
        paragraphs: [
          'For landowners sitting on ground that earns nothing. We assess soil, climate, access and market demand, then tell you exactly what your land can profitably produce and what the realistic numbers look like.',
          'You can act on that plan yourself with our advisory support, or hand the land to us to farm on an agreed profit share. Either way you leave the engagement knowing what your asset is actually worth.',
        ],
      },
    ],
    cta: {
      overline: 'Ready to Advance?',
      title: 'Request a Strategic Consultation',
      text: 'Our consulting team is prepared to guide your enterprise towards unmatched operational excellence.',
      buttonLabel: 'Get Started',
    },
  },
  {
    num: '03',
    slug: 'contracting',
    name: 'General Contractors, Supplies & Facilitation',
    quote: 'We build with integrity — delivering projects that stand the test of time.',
    image: 'https://res.cloudinary.com/innosaint/image/upload/v1773654210/Gemini_Generated_Image_rjap7zrjap7zrjap_uc84hi.png',
    description:
      'Our contracting division delivers construction and engineering projects emphasising quality, safety, and transparent partnership — from initial blueprints and material supply to final handover. We also acquire residential property in the United States, United Kingdom and Australia.',
    keywords: [
      'General Contracting Nigeria',
      'Construction West Africa',
      'International Property Acquisition',
      'Residential Acquisition US UK Australia',
      'Infrastructure Nigeria',
      'Building Supplies Nigeria',
      'Project Facilitation West Africa',
      'Civil Contractor Nigeria',
    ],
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
    projectTypes: ['Commercial Buildings', 'Industrial Facilities', 'Infrastructure', 'Public Institutions', 'Residential Estates', 'MEP Works'],
    whyChoose: {
      title: 'Why Choose Milan Imperial Contracting?',
      ctaLabel: 'Discuss a Project',
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
    valueProp: {
      quote:
        'We build with integrity — delivering construction and engineering projects that stand the test of time through unwavering commitment to quality, safety, and transparent partnership.',
      label: 'Milan Imperial Contracting Division Value Proposition',
    },
    servicesHeading: { overline: 'Our Services', title: 'What We Build' },
    services: [
      {
        num: '01',
        title: 'General Contracting',
        paragraphs: [
          'Milan Imperial delivers end-to-end general contracting services across Nigeria and West Africa — from civil and structural works to mechanical, electrical, and finishing. We bring the same commitment to quality and safety to every project, regardless of size or complexity.',
          'Covering commercial buildings, industrial facilities, residential estates, institutional buildings, and public infrastructure across the West African sub-region.',
        ],
      },
      {
        num: '02',
        title: 'Construction & Engineering',
        paragraphs: [
          'Our construction and engineering team executes projects with precision, safety, and excellence that stand the test of time. With a skilled workforce continuously developed through training, we deliver engineering solutions that exceed client expectations.',
          'Services include structural engineering, civil works, MEP (mechanical, electrical, plumbing), site supervision, and project management from concept to commissioning.',
        ],
      },
      {
        num: '03',
        title: 'Supplies & Procurement',
        paragraphs: [
          'Milan Imperial provides comprehensive construction supplies and material procurement services. Our established supplier network ensures access to high-quality building materials at competitive prices — delivered on time, every time.',
          'Procurement categories include structural steel, cement and aggregates, electrical materials, plumbing supplies, finishes, and specialist construction equipment.',
        ],
      },
      {
        num: '04',
        title: 'Project Facilitation',
        paragraphs: [
          'We facilitate complex construction projects through every stage — from regulatory approvals, stakeholder coordination, and design management to contractor supervision and quality assurance. Our facilitation expertise ensures projects run smoothly from inception to handover.',
          'Facilitation services include permit acquisition, community engagement, design coordination, multi-contractor supervision, progress reporting, and handover documentation.',
        ],
      },
      {
        num: '05',
        title: 'Infrastructure Development',
        paragraphs: [
          'Milan Imperial targets major infrastructure contracts across new regions in West Africa. We have a proven track record of delivering on-time, on-budget infrastructure projects — roads, bridges, water systems, power infrastructure, and public facilities.',
          'Our infrastructure practice is supported by rigorous project controls, experienced site engineers, and a commitment to safety standards that exceed industry norms.',
        ],
      },
      {
        num: '06',
        title: 'Health, Safety & Environment',
        paragraphs: [
          'Safety is not a slogan at Milan Imperial — it is a fundamental value that guides every decision on every construction site. Our HSE standards exceed regulatory requirements, and our teams are empowered to halt work if conditions become unsafe, regardless of deadlines.',
          'Full HSE management including risk assessments, method statements, toolbox talks, incident reporting, environmental impact monitoring, and site safety audits.',
        ],
      },
      {
        num: '07',
        title: 'International Residential Acquisition',
        paragraphs: [
          'Milan Imperial acquires residential houses in the United States, the United Kingdom and Australia. This is an acquisition capability, not an estate agency — we are not in the business of listing and selling property, we are in the business of securing the right house on the right terms.',
          'The work covers sourcing and shortlisting, structural and title due diligence, price negotiation, coordinating solicitors and surveyors across jurisdictions, and seeing the purchase through to completion. Our contracting background means a building is assessed by people who know what a defect costs to put right.',
        ],
      },
    ],
    narrative: {
      overline: 'Safety Above All',
      title: 'Every Worker Goes Home Safe',
      paragraphs: [
        'Safety is not a slogan at Milan Imperial — it is a fundamental value that guides every decision on every construction site. Everyone who works for or with Milan Imperial deserves to go home safe and happy. Our contracting teams are empowered to halt work if conditions become unsafe, regardless of deadlines or commercial pressures.',
        'Our private charter division maintains rigorous safety standards that exceed regulatory requirements, and we apply the same philosophy to every construction site we operate. Since our incorporation on October 10th, 2019, we have maintained an exemplary safety record.',
        'Our HSE management system includes comprehensive risk assessment, method statements, toolbox talks, continuous site monitoring, incident reporting, and environmental impact controls — all managed by qualified HSE professionals embedded within every project team.',
      ],
      pillars: [
        { title: 'Zero Tolerance HSE Policy', desc: 'Work stops immediately if safety is compromised — no exceptions.' },
        { title: 'Proactive Monitoring', desc: 'Continuous site surveillance and real-time hazard reporting.' },
        { title: 'Certified Standards', desc: 'ISO 9001:2015 quality management aligned safety systems.' },
        { title: 'Exemplary Safety Record', desc: 'Maintaining an industry-leading safety record since 2019.' },
      ],
    },
    cta: {
      overline: 'Start a Project',
      title: 'Request a Contracting Consultation',
      text: 'Our team delivers projects with precision, integrity, and a commitment to safety above all.',
      buttonLabel: 'Discuss a Project',
    },
  },
  {
    num: '04',
    slug: 'charter',
    name: 'Private Charter Consultancy',
    quote: 'We elevate your journey.',
    image: 'https://res.cloudinary.com/innosaint/image/upload/v1773654714/Private_Charter_Consultancy_gtks60.png',
    description:
      'End-to-end aviation consultancy, procurement, crew management, staffing, and financing solutions across West Africa — assuring safety, privacy, and operational excellence on every journey.',
    keywords: [
      'Private Charter West Africa',
      'Aviation Consultancy Nigeria',
      'Charter Procurement',
      'Private Aviation Financing',
      'Aircraft Management Nigeria',
      'Business Aviation West Africa',
      'Private Jet Nigeria',
    ],
    overview: {
      lead: 'End-to-End Aviation Excellence ',
      emphasis: 'Across West Africa',
      paragraphs: [
        "Milan Imperial's Private Charter division provides end-to-end aviation consultancy, procurement, crew management, staffing, and financing solutions across West Africa. Every trip is treated as a mission-critical operation — meticulously planned months in advance, never hours.",
        'We elevate your journey by providing seamless, luxurious, and impeccably planned private aviation experiences. Our asset-light model means we are never constrained by a fixed fleet — we source the right aircraft for your specific mission from our global network of vetted operators.',
        "Since our incorporation on October 10th, 2019, Milan Imperial's Private Charter division has built a reputation for reliability, discretion, and concierge-level service that rivals the best aviation consultancies in the world.",
      ],
    },
    whyChoose: {
      title: 'Why Choose Milan Imperial?',
      ctaLabel: 'Request a Charter',
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
    servicesHeading: { overline: 'Our Offerings', title: 'What We Provide' },
    services: [
      {
        num: '01',
        title: 'Consultancy',
        paragraphs: [
          'Expert advisory on charter routes, aircraft selection, regulatory compliance, and operational frameworks. Our consultants have deep knowledge of West African aviation markets.',
          'We assess your travel patterns, destination requirements, and budget to recommend the optimal charter solution — whether a single mission flight or an ongoing programme.',
        ],
      },
      {
        num: '02',
        title: 'Procurement',
        paragraphs: [
          'Access to a global network of vetted aircraft and certified operators. We source the right aircraft for every mission at the best available rate without compromising on safety.',
          'Our procurement process involves rigorous vetting of operators, aircraft condition checks, and compliance verification across ICAO/IATA standards.',
        ],
      },
      {
        num: '03',
        title: 'Management',
        paragraphs: [
          'Full operational management from pre-flight planning to post-flight review. We handle every detail so you focus on your objectives, not logistics.',
          'Includes flight planning, slot coordination, permits, ground handling, catering, customs, and comprehensive post-flight reporting.',
        ],
      },
      {
        num: '04',
        title: 'Staffing',
        paragraphs: [
          'High staff-to-flight ratio ensuring personalised, concierge-level attention on every journey. Our cabin crew are trained to the highest international hospitality standards.',
          'We staff both the ground and in-flight experience — from dedicated client liaisons to trained flight attendants and on-board service specialists.',
        ],
      },
      {
        num: '05',
        title: 'Financing',
        paragraphs: [
          'Flexible aviation financing solutions tailored to corporate and private clients. We structure deals that optimise cash flow while maintaining service quality.',
          'Options include block hour programmes, pre-paid charter accounts, deferred payment arrangements, and bespoke corporate aviation finance structures.',
        ],
      },
      {
        num: '06',
        title: 'Planning',
        paragraphs: [
          'Meticulous planning months in advance, not hours. Our mission-critical planning approach ensures no detail is left to chance, regardless of destination complexity.',
          'Every flight is planned with primary, alternate, and contingency options. We monitor weather, NOTAMs, and geopolitical conditions continuously.',
        ],
      },
    ],
    cta: {
      overline: 'Ready to Fly?',
      title: 'Request a Private Charter Consultation',
      text: 'Our team is ready to plan your next journey with meticulous attention to detail.',
      buttonLabel: 'Get Started',
    },
  },
];

// About-page sections that don't map onto divisions/values/okrs.
export const aboutTagline = {
  overline: 'Our Tagline',
  title: 'Creating Values',
  text: 'Every decision we make is guided by a singular purpose: to create lasting value for our clients, communities, and the continent.',
};

export const aboutValueProp = {
  overline: 'Value Proposition',
  title: 'Why Clients Choose Milan Imperial',
  intro:
    "Milan Imperial Limited delivers integrated excellence across agribusiness, business consulting, contracting, and private charter — combining global standards with local expertise to provide solutions that are reliable, safe, and tailored to our clients' unique needs. Since October 10th, 2019, we have built a reputation for delivering on this promise — and the figures on this page are the evidence.",
  cards: [
    {
      label: 'Agro-Business',
      slug: 'agro',
      quote:
        'We own and work 775 plots of Nigerian farmland. Bring capital and we provide the land, the farmers and the buyer. Bring land and we tell you what it can grow — then grow it for you if you want.',
    },
    {
      label: 'Business Consulting',
      slug: 'consulting',
      quote:
        'We manage enterprise complexity so you can focus on growth — delivering precise consultancy, procurement, and staffing services customized to every engagement.',
    },
    {
      label: 'Contracting',
      slug: 'contracting',
      quote:
        'We build with integrity — and we acquire residential property in the US, UK and Australia, assessed by people who know what a defect costs to put right.',
    },
    {
      label: 'Private Charter',
      slug: 'charter',
      quote:
        'We elevate your journey — providing seamless, luxurious, and impeccably planned private aviation experiences that treat every trip as a mission-critical operation.',
    },
  ],
};

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
      '1,200 plots — 80 hectares of farmland under management',
      '25,000 yam tubers planted and harvested',
      'First full commercial export container to the United Kingdom',
      '3 major infrastructure contracts secured in new regions',
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
      '4,000 farmer placements at 50 farmers per hectare',
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
      q: 'How much land does Milan Imperial actually own?',
      a: 'We hold 775 plots of Nigerian farmland — 51.7 hectares. That breaks down as 115 plots in Benue, 255 in Taraba, 30 in Jos, Plateau State, and 375 plots held since inception. We added 400 plots this year alone, more than doubling our founding land base in twelve months. Hectares are converted at the Nigerian standard 60ft x 120ft plot, which is 15 plots per hectare.',
    },
    {
      q: 'How small an investment will Milan Imperial accept?',
      a: 'There is no grand minimum. We structure around what you actually have rather than turning people away for starting small. Tell us the amount you are working with and what you want to achieve, and we will tell you honestly what is achievable at that level — including if the answer is that you should wait. What matters more than the size of your capital is that the terms are clear before anything is planted.',
    },
    {
      q: 'I have money but no land and no farming experience. How does this work?',
      a: 'That is the most common way people start with us. You tell us what you want to farm and the gain you are working towards. We allocate land from our own portfolio, provide the farmers who plant and harvest, and manage the crop through to lifting. If you want, we also sell the harvest through our domestic and export channels. You receive your capital and your gain, and we take only the percentage agreed before planting began. You never need to visit a field.',
    },
    {
      q: 'I own land but do not know what to do with it. Can you help?',
      a: 'Yes. We assess your soil, climate, access and local market demand, then tell you exactly what your land can profitably produce and what the realistic numbers look like. From there you choose: take the plan and farm it yourself with our advisory behind you, or hand the land to us and we farm it end to end with our own farmers and inputs, returning an agreed percentage of the proceeds to you.',
    },
    {
      q: 'What has Milan Imperial actually produced so far?',
      a: 'We have planted and harvested over 8,000 tubers of yam — a complete production cycle on our own land, not a trial plot. We have commenced our first trial export to the United Kingdom. And we have moved into animal husbandry, acquiring ruminant animals and supplying restaurants in Lagos, which gives the business revenue on a cycle independent of the harvest calendar.',
    },
    {
      q: 'How many farmers does Milan Imperial employ?',
      a: 'We engage the equivalent of 50 farmers per hectare. Across our 51.7 hectares that is more than 2,500 people earning from land we manage. We work with the local farming communities already present rather than displacing them, because their knowledge of the ground is something no amount of capital can replace.',
    },
    {
      q: 'Does Milan Imperial export?',
      a: 'Our first trial export to the United Kingdom has commenced. This is the channel that converts naira-denominated harvests into foreign-currency revenue, and it is why our post-harvest handling is built to export standard rather than local-market standard. Our 2027 target is to convert the successful trial into a full commercial container.',
    },
    {
      q: 'What crops and commodities does Milan Imperial work with?',
      a: 'Yam is our proven production crop, with over 8,000 tubers planted and harvested. Beyond that we work across cassava, maize, soybean, cocoa, palm produce, groundnuts, sesame, ginger, rice, and horticultural produce. Commodity selection is driven by market demand, regional comparative advantage, and what a specific piece of land can actually support.',
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
      a: 'We are a diversified enterprise operating across four divisions: Agro-Business, Farming & Financing; Business Consulting & Services; General Contractors, Supplies & Facilitation; and Private Charter Consultancy. Beyond the four divisions we also acquire residential property in the United States, United Kingdom and Australia, and we run a livestock operation supplying restaurants in Lagos.',
    },
    {
      q: 'Where does Milan Imperial operate?',
      a: 'Our farmland sits across Benue, Taraba and Plateau State in Nigeria, and we are headquartered in Nigeria serving clients throughout West Africa. Our residential property acquisition reaches the United States, the United Kingdom and Australia, and our first agricultural export channel runs to the UK.',
    },
    {
      q: 'Is Milan Imperial actually growing, or is this just ambition?',
      a: 'We began with 375 plots of farmland. This year we added 400 more, taking the portfolio to 775 plots — 51.7 hectares — a 107% increase in twelve months. In the same period we completed a full production cycle of over 8,000 yam tubers, opened a trial export channel to the United Kingdom, and launched a livestock operation. We publish our targets and report against them annually so the growth can be checked rather than taken on trust.',
    },
    {
      q: 'How can I invest in Milan Imperial, and how much do I need?',
      a: 'There are three routes: you bring capital and we provide land, farmers and a buyer; you bring land and we tell you what it can grow or grow it for you on a profit share; or you participate in the wider operation across crops, livestock and export. There is no grand minimum — we structure around what you have. Contact us with the amount you are working with and we will tell you honestly what it can do.',
    },
    {
      q: 'What values guide the company?',
      a: 'Everything we do is anchored in five core values: Integrity Always, Safety Above All, Excellence Without Exception, Collaborative Growth, and Sustainable Stewardship.',
    },
    {
      q: 'How do I start a partnership with Milan Imperial?',
      a: 'Reach out through our contact page or email milanimperial2@gmail.com. Tell us about your project and we will tailor a solution built on integrity, safety, and excellence.',
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
