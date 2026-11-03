// All page text lives here.

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'qualifications', label: 'Qualifications' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  eyebrow: 'Project Manager · Energy, Engineering & Infrastructure',
  lede: 'I deliver complex engineering, energy and infrastructure projects safely, on budget and with every stakeholder kept informed.',
  primary: 'Get in touch',
  secondary: 'View experience',
  photoAlt: 'Portrait of Ricardo Piedade',
  facts: [
    { label: 'Based', value: 'Santiago do Cacém, Portugal' },
    { label: 'Languages', value: 'English · Português · Español' },
    { label: 'Status', value: 'Open to new projects', status: true },
  ],
};

export const figures = [
  { to: 8, suffix: '+', label: 'years in project delivery' },
  { prefix: '£', to: 5, suffix: 'm', label: 'largest budget managed' },
  { prefix: '$', to: 1, suffix: 'bn', label: 'project delivery supported' },
  { prefix: '£', to: 500, suffix: 'm', label: 'of equipment tracked globally' },
];

export const about = {
  label: 'About',
  title: 'Safety first, then clear communication',
  paragraphs: [
    "I'm a project manager with more than eight years' experience delivering engineering, energy and infrastructure projects across oil and gas, nuclear new build and major highways schemes, in the UK and around the world.",
    'Health, safety and the environment always come first. After that, my focus is clear communication: regular, honest updates that keep clients, suppliers and teams aligned from kick-off to handover.',
    "I combine formal project management training (APM, PRINCE2, Agile) with hands-on digital skills in software development and AI tools. After more than a decade working in the UK, I'm now based in Portugal and work in both English and Portuguese.",
  ],
};

export const services = {
  label: 'Services',
  title: 'How I can help',
  items: [
    {
      title: 'Project delivery',
      text: 'Planning, scheduling in Primavera P6, resourcing and cross-functional coordination from kick-off to handover.',
    },
    {
      title: 'Cost control and forecasting',
      text: 'Monthly and quarterly forecasts, budget tracking and pricing strategy on budgets from £50k to £5m.',
    },
    {
      title: 'Procurement and supply chain',
      text: 'Supplier management, expediting, inspection and test plans, factory acceptance tests and global logistics.',
    },
    {
      title: 'Stakeholder management',
      text: 'Weekly client and regional updates, clear reporting, and early handling of risks and issues.',
    },
    {
      title: 'Digital tools and processes',
      text: 'New tracking applications, PLM rollouts and user training, plus web development and AI-assisted workflows.',
    },
    {
      title: 'Safety and quality',
      text: 'An HSE-first approach backed by CDM 2015, ISO 9001:2015 and Lean Six Sigma training.',
    },
  ],
};

// Schedule runs Jan 2013 (month 0) to Dec 2026 (month 167).
// start/length are in months from Jan 2013.
export const SCHEDULE_MONTHS = 168;
export const SCHEDULE_START_YEAR = 2013;

export const career = {
  label: 'Experience',
  title: 'Career schedule',
  hint: 'Select a bar to see what I did in that role.',
  legend: { work: 'Employment', training: 'Training', cert: 'Certification' },
  milestoneLane: 'Certifications',
  showAll: 'Show all roles',
  showOne: 'Show one role at a time',
  roles: [
    {
      id: 'ge',
      logo: 'assets/logos/ge.png',
      org: 'GE Oil & Gas',
      orgNote: 'now Baker Hughes',
      short: 'Engineering & supply chain',
      title: 'Engineering Coordinator & SME Lead (IT project) · Buyer · Expeditor',
      dates: '02.2013 – 07.2016',
      place: 'Bristol, UK',
      start: 1,
      length: 42,
      points: [
        'Gathered user requirements, ran user testing and supported the launch and training for a new PLM system.',
        'Issued supplier quotations and purchase orders and managed supplier technical queries.',
        'Expedited supplier documentation and made sure manufacturing records met inspection and test plans.',
      ],
    },
    {
      id: 'he',
      logo: 'assets/logos/highways.png',
      org: 'Highways England',
      short: 'Assistant PM',
      title: 'Assistant Project Manager',
      dates: '08.2016 – 08.2017',
      place: 'Bristol, UK',
      start: 43,
      length: 13,
      points: [
        "A303 Stonehenge, part of the UK Government's Road Investment Strategy 2015–2020.",
        'Worked with tunnelling specialists on design and construction proposals.',
      ],
    },
    {
      id: 'mace',
      logo: 'assets/logos/mace.png',
      org: 'Mace Group',
      orgNote: 'PM consultancy',
      short: 'Assistant PM',
      title: 'Assistant Project Manager',
      dates: '08.2017 – 12.2018',
      place: 'Bristol, UK',
      start: 55,
      length: 17,
      points: [
        'Hinkley Point C nuclear new build: helped manage electrical and construction contractors on site.',
        'Handled technical queries and project risk and issue management.',
      ],
    },
    {
      id: 'bh1',
      logo: 'assets/logos/baker-hughes.png',
      org: 'Baker Hughes',
      short: 'Planner → Project Manager',
      title: 'Global Testing Equipment & Tooling Planner · Project Manager · Assistant Project Manager',
      dates: '01.2019 – 03.2021',
      place: 'Bristol, UK',
      start: 72,
      length: 27,
      points: [
        'Developed a new digital application and processes to manage testing and tooling equipment worth around £500m globally.',
        'As Project Manager, led the project team and delivered the project on time and within budget.',
        'Supported delivery of a $1bn project: weekly reporting, procurement tracking, engineering change control and client communication.',
      ],
    },
    {
      id: 'ci',
      logo: 'assets/logos/code-institute.png',
      org: 'Code Institute',
      training: true,
      short: 'Full-stack development',
      title: 'Full-stack software development',
      dates: '03.2021 – 08.2022',
      place: 'Remote, Portugal',
      start: 98,
      length: 18,
      points: ['Built web projects in HTML, CSS, JavaScript and Python, managing the work with Agile Kanban.'],
    },
    {
      id: 'bh2',
      logo: 'assets/logos/baker-hughes.png',
      org: 'Baker Hughes',
      short: 'Project Manager',
      title: 'Project Manager',
      dates: '09.2022 – 09.2026',
      place: 'Bristol, UK',
      start: 116,
      length: 49,
      points: [
        'Delivered brownfield projects worldwide supporting offshore oil and gas operations.',
        'Managed budgets from £50k to £5m, with monthly and quarterly financial forecasts and pricing strategy.',
        'Coordinated engineering, procurement, quality and logistics teams through production, assembly, testing and global shipping.',
        'Ran factory acceptance tests and inspection notifications with clients.',
        'Led weekly client and regional meetings to report progress, resolve concerns and find new opportunities.',
      ],
    },
  ],
  milestones: [
    { at: 37.5, label: 'PRINCE2', year: '2016' },
    { at: 68.5, label: 'APM PMQ', year: '2018' },
    { at: 89.5, label: 'Agile (BCS)', year: '2020', low: true },
    { at: 164.5, label: 'AI skills', year: '2026', end: true },
  ],
};

export const skills = {
  label: 'Skills',
  title: 'Tools I work with',
  groups: [
    { title: 'Project controls', items: ['Primavera P6', 'Unifier', 'CEMAR', 'ARM', 'MS Project'] },
    { title: 'Enterprise systems', items: ['SAP', 'Oracle', 'TeamCenter', 'SharePoint', 'Microsoft Office'] },
    { title: 'Digital', items: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'MySQL', 'GitHub', 'React', 'Claude'] },
  ],
};

export const qualifications = {
  label: 'Qualifications',
  title: 'Certified and still learning',
  filters: [
    { id: 'all', label: 'All' },
    { id: 'pm', label: 'Project management' },
    { id: 'hse', label: 'Safety and quality' },
    { id: 'digital', label: 'Digital' },
  ],
  items: [
    { year: 2026, cat: 'digital', name: 'Developing AI skills', by: 'Claude Academy' },
    { year: 2022, cat: 'digital', name: 'Full-stack Software Development', by: 'Code Institute' },
    { year: 2021, cat: 'pm', name: 'Primavera P6 Planning', by: 'Baker Hughes' },
    { year: 2020, cat: 'pm', name: 'Agile Project Management', by: 'BCS, The Chartered Institute for IT' },
    { year: 2018, cat: 'pm', name: 'APM Project Management Qualification (PMQ)', by: 'Association for Project Management' },
    { year: 2018, cat: 'hse', name: 'Yellow Jacket HSE', by: 'Mace Group' },
    { year: 2017, cat: 'hse', name: 'CSCS Card, Managers and Professionals', by: 'Mace Group' },
    { year: 2017, cat: 'hse', name: 'Introduction to CDM Regulations 2015', by: 'Highways England' },
    { year: 2016, cat: 'pm', name: 'PRINCE2 Foundation', by: 'APMG International' },
    { year: 2016, cat: 'hse', name: 'Introduction to ISO 9001:2015', by: 'Highways England' },
    { year: 2015, cat: 'hse', name: 'Lean Six Sigma', by: 'GE Oil & Gas' },
    { year: 2015, cat: 'pm', name: 'MS Project Level 1', by: 'The Knowledge Academy' },
  ],
  education: {
    title: 'Education',
    degree: 'BA (Hons) Business Management',
    school: 'Anglia Ruskin University, Cambridge · 2005–2008',
  },
  languages: {
    title: 'Languages',
    items: [
      { name: 'English', level: 'native' },
      { name: 'Português', level: 'native' },
      { name: 'Español', level: 'basic' },
    ],
  },
};

export const contact = {
  label: 'Contact',
  title: "Planning a project? Let's talk.",
  text: "I'm available for project management contracts and consultancy in Portugal and remotely.",
  email: 'rick_piedade@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/rpiedade',
  copy: 'Copy',
  copied: 'Copied',
};

export const footer = {
  updated: 'Updated November 2026',
  backToTop: 'Back to top',
  disclosureTitle: 'AI disclosure',
  disclosure:
    'In creating this Bio, I collaborated with Claude to assist with designing my CV in a digital format. I affirm that all AI-generated and co-created content underwent thorough review and evaluation. The final output accurately reflects my understanding, expertise, and intended meaning. While AI assistance was instrumental in the process, I maintain full responsibility for the content, its accuracy, and its presentation. This disclosure is made in the spirit of transparency and to acknowledge the role of AI in the creation process.',
};
