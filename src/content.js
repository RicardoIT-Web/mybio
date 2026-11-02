// All page text lives here. Each translatable value is { en, pt };
// plain strings are the same in both languages.

export const nav = [
  { id: 'about', label: { en: 'About', pt: 'Sobre' } },
  { id: 'services', label: { en: 'Services', pt: 'Serviços' } },
  { id: 'experience', label: { en: 'Experience', pt: 'Experiência' } },
  { id: 'qualifications', label: { en: 'Qualifications', pt: 'Qualificações' } },
  { id: 'contact', label: { en: 'Contact', pt: 'Contacto' } },
];

export const hero = {
  eyebrow: {
    en: 'Project Manager · Energy, Engineering & Infrastructure',
    pt: 'Gestor de Projetos · Energia, Engenharia e Infraestruturas',
  },
  lede: {
    en: 'I deliver complex engineering, energy and infrastructure projects safely, on budget and with every stakeholder kept informed.',
    pt: 'Giro projetos complexos de engenharia, energia e infraestruturas com segurança, dentro do orçamento e mantendo todas as partes interessadas informadas.',
  },
  primary: { en: 'Get in touch', pt: 'Entrar em contacto' },
  secondary: { en: 'View experience', pt: 'Ver experiência' },
  photoAlt: { en: 'Portrait of Ricardo Piedade', pt: 'Retrato de Ricardo Piedade' },
  facts: [
    { label: { en: 'Based', pt: 'Local' }, value: 'Santiago do Cacém, Portugal' },
    { label: { en: 'Languages', pt: 'Idiomas' }, value: 'English · Português · Español' },
    { label: { en: 'Status', pt: 'Estado' }, value: { en: 'Open to new projects', pt: 'Disponível para novos projetos' }, status: true },
  ],
};

export const figures = [
  { to: 8, suffix: '+', label: { en: 'years in project delivery', pt: 'anos em gestão de projetos' } },
  { prefix: '£', to: 5, suffix: 'm', label: { en: 'largest budget managed', pt: 'maior orçamento gerido' } },
  { prefix: '$', to: 1, suffix: 'bn', label: { en: 'project delivery supported', pt: 'projeto apoiado na entrega' } },
  { prefix: '£', to: 500, suffix: 'm', label: { en: 'of equipment tracked globally', pt: 'em equipamento gerido globalmente' } },
];

export const about = {
  label: { en: 'About', pt: 'Sobre mim' },
  title: { en: 'Safety first, then clear communication', pt: 'Segurança primeiro, depois comunicação clara' },
  paragraphs: [
    {
      en: "I'm a project manager with more than eight years' experience delivering engineering, energy and infrastructure projects across oil and gas, nuclear new build and major highways schemes, in the UK and around the world.",
      pt: 'Sou gestor de projetos com mais de oito anos de experiência na entrega de projetos de engenharia, energia e infraestruturas nos setores do petróleo e gás, da construção nuclear e de grandes obras rodoviárias, no Reino Unido e a nível internacional.',
    },
    {
      en: 'Health, safety and the environment always come first. After that, my focus is clear communication: regular, honest updates that keep clients, suppliers and teams aligned from kick-off to handover.',
      pt: 'A saúde, a segurança e o ambiente estão sempre em primeiro lugar. Logo a seguir vem a comunicação clara: atualizações regulares e transparentes que mantêm clientes, fornecedores e equipas alinhados, do arranque à entrega.',
    },
    {
      en: "I combine formal project management training (APM, PRINCE2, Agile) with hands-on digital skills in software development and AI tools. After more than a decade working in the UK, I'm now based in Portugal and work in both English and Portuguese.",
      pt: 'Junto formação certificada em gestão de projetos (APM, PRINCE2, Agile) a competências digitais práticas em desenvolvimento de software e ferramentas de inteligência artificial. Depois de mais de uma década a trabalhar no Reino Unido, estou agora sediado em Portugal e trabalho em português e em inglês.',
    },
  ],
};

export const services = {
  label: { en: 'Services', pt: 'Serviços' },
  title: { en: 'How I can help', pt: 'Como posso ajudar' },
  items: [
    {
      title: { en: 'Project delivery', pt: 'Gestão e entrega de projetos' },
      text: {
        en: 'Planning, scheduling in Primavera P6, resourcing and cross-functional coordination from kick-off to handover.',
        pt: 'Planeamento, calendarização em Primavera P6, gestão de recursos e coordenação entre equipas, do arranque à entrega.',
      },
    },
    {
      title: { en: 'Cost control and forecasting', pt: 'Controlo de custos e previsões' },
      text: {
        en: 'Monthly and quarterly forecasts, budget tracking and pricing strategy on budgets from £50k to £5m.',
        pt: 'Previsões mensais e trimestrais, acompanhamento orçamental e estratégia de preços em orçamentos de £50 mil a £5 milhões.',
      },
    },
    {
      title: { en: 'Procurement and supply chain', pt: 'Compras e cadeia de abastecimento' },
      text: {
        en: 'Supplier management, expediting, inspection and test plans, factory acceptance tests and global logistics.',
        pt: 'Gestão de fornecedores, expediting, planos de inspeção e ensaio, testes de aceitação em fábrica (FAT) e logística global.',
      },
    },
    {
      title: { en: 'Stakeholder management', pt: 'Gestão de partes interessadas' },
      text: {
        en: 'Weekly client and regional updates, clear reporting, and early handling of risks and issues.',
        pt: 'Reuniões semanais com clientes e regiões, relatórios claros e gestão antecipada de riscos e problemas.',
      },
    },
    {
      title: { en: 'Digital tools and processes', pt: 'Ferramentas digitais e processos' },
      text: {
        en: 'New tracking applications, PLM rollouts and user training, plus web development and AI-assisted workflows.',
        pt: 'Novas aplicações de controlo, implementação de sistemas PLM e formação de utilizadores, além de desenvolvimento web e fluxos de trabalho com IA.',
      },
    },
    {
      title: { en: 'Safety and quality', pt: 'Segurança e qualidade' },
      text: {
        en: 'An HSE-first approach backed by CDM 2015, ISO 9001:2015 and Lean Six Sigma training.',
        pt: 'Uma abordagem que coloca a segurança em primeiro lugar, apoiada por formação em CDM 2015, ISO 9001:2015 e Lean Six Sigma.',
      },
    },
  ],
};

// Schedule runs Jan 2013 (month 0) to Dec 2026 (month 167).
// start/length are in months from Jan 2013.
export const SCHEDULE_MONTHS = 168;
export const SCHEDULE_START_YEAR = 2013;

export const career = {
  label: { en: 'Experience', pt: 'Experiência' },
  title: { en: 'Career schedule', pt: 'Cronograma de carreira' },
  hint: {
    en: 'Select a bar to see what I did in that role.',
    pt: 'Selecione uma barra para ver o que fiz nessa função.',
  },
  legend: {
    work: { en: 'Employment', pt: 'Emprego' },
    training: { en: 'Training', pt: 'Formação' },
    cert: { en: 'Certification', pt: 'Certificação' },
  },
  milestoneLane: { en: 'Certifications', pt: 'Certificações' },
  showAll: { en: 'Show all roles', pt: 'Ver todas as funções' },
  showOne: { en: 'Show one role at a time', pt: 'Ver uma função de cada vez' },
  roles: [
    {
      id: 'ge',
      org: 'GE Oil & Gas',
      orgNote: { en: 'now Baker Hughes', pt: 'atual Baker Hughes' },
      short: { en: 'Engineering & supply chain', pt: 'Engenharia e abastecimento' },
      title: {
        en: 'Engineering Coordinator & SME Lead (IT project) · Buyer · Expeditor',
        pt: 'Coordenador de Engenharia e Líder SME (projeto de TI) · Comprador · Expeditor',
      },
      dates: '02.2013 – 07.2016',
      place: 'Bristol, UK',
      start: 1,
      length: 42,
      points: {
        en: [
          'Gathered user requirements, ran user testing and supported the launch and training for a new PLM system.',
          'Issued supplier quotations and purchase orders and managed supplier technical queries.',
          'Expedited supplier documentation and made sure manufacturing records met inspection and test plans.',
        ],
        pt: [
          'Levantamento de requisitos, testes com utilizadores e apoio ao lançamento e à formação de um novo sistema PLM.',
          'Emissão de pedidos de cotação e ordens de compra e gestão de questões técnicas de fornecedores.',
          'Acompanhamento da documentação de fornecedores, garantindo que os registos de fabrico cumpriam os planos de inspeção e ensaio.',
        ],
      },
    },
    {
      id: 'he',
      org: 'Highways England',
      short: { en: 'Assistant PM', pt: 'Gestor Adjunto' },
      title: { en: 'Assistant Project Manager', pt: 'Gestor de Projetos Adjunto' },
      dates: '08.2016 – 08.2017',
      place: 'Bristol, UK',
      start: 43,
      length: 13,
      points: {
        en: [
          "A303 Stonehenge, part of the UK Government's Road Investment Strategy 2015–2020.",
          'Worked with tunnelling specialists on design and construction proposals.',
        ],
        pt: [
          'A303 Stonehenge, integrado na Estratégia de Investimento Rodoviário 2015–2020 do Governo britânico.',
          'Articulação com especialistas em túneis nas propostas de projeto e construção.',
        ],
      },
    },
    {
      id: 'mace',
      org: 'Mace Group',
      orgNote: { en: 'PM consultancy', pt: 'consultoria' },
      short: { en: 'Assistant PM', pt: 'Gestor Adjunto' },
      title: { en: 'Assistant Project Manager', pt: 'Gestor de Projetos Adjunto' },
      dates: '08.2017 – 12.2018',
      place: 'Bristol, UK',
      start: 55,
      length: 17,
      points: {
        en: [
          'Hinkley Point C nuclear new build: helped manage electrical and construction contractors on site.',
          'Handled technical queries and project risk and issue management.',
        ],
        pt: [
          'Hinkley Point C, nova central nuclear: apoio na gestão de empreiteiros elétricos e de construção em obra.',
          'Gestão de pedidos de esclarecimento técnico e de riscos e problemas do projeto.',
        ],
      },
    },
    {
      id: 'bh1',
      org: 'Baker Hughes',
      short: { en: 'Planner → Project Manager', pt: 'Planeador → Gestor' },
      title: {
        en: 'Global Testing Equipment & Tooling Planner · Project Manager · Assistant Project Manager',
        pt: 'Planeador Global de Equipamento de Ensaio e Ferramentas · Gestor de Projetos · Gestor de Projetos Adjunto',
      },
      dates: '01.2019 – 03.2021',
      place: 'Bristol, UK',
      start: 72,
      length: 27,
      points: {
        en: [
          'Developed a new digital application and processes to manage testing and tooling equipment worth around £500m globally.',
          'As Project Manager, led the project team and delivered the project on time and within budget.',
          'Supported delivery of a $1bn project: weekly reporting, procurement tracking, engineering change control and client communication.',
        ],
        pt: [
          'Desenvolvimento de uma nova aplicação digital e de processos para gerir equipamento de ensaio e ferramentas avaliado em cerca de £500 milhões a nível global.',
          'Como Gestor de Projetos, liderei a equipa e concluí o projeto dentro do prazo e do orçamento.',
          'Apoio à entrega de um projeto de $1 mil milhões: relatórios semanais, acompanhamento de compras, controlo de alterações de engenharia e comunicação com o cliente.',
        ],
      },
    },
    {
      id: 'ci',
      org: 'Code Institute',
      training: true,
      short: { en: 'Full-stack development', pt: 'Desenvolvimento full-stack' },
      title: { en: 'Full-stack software development', pt: 'Desenvolvimento de software full-stack' },
      dates: '03.2021 – 08.2022',
      place: { en: 'Remote, Portugal', pt: 'Remoto, Portugal' },
      start: 98,
      length: 18,
      points: {
        en: ['Built web projects in HTML, CSS, JavaScript and Python, managing the work with Agile Kanban.'],
        pt: ['Desenvolvimento de projetos web em HTML, CSS, JavaScript e Python, com gestão ágil do trabalho em Kanban.'],
      },
    },
    {
      id: 'bh2',
      org: 'Baker Hughes',
      short: { en: 'Project Manager', pt: 'Gestor de Projetos' },
      title: { en: 'Project Manager', pt: 'Gestor de Projetos' },
      dates: '09.2022 – 09.2026',
      place: 'Bristol, UK',
      start: 116,
      length: 49,
      points: {
        en: [
          'Delivered brownfield projects worldwide supporting offshore oil and gas operations.',
          'Managed budgets from £50k to £5m, with monthly and quarterly financial forecasts and pricing strategy.',
          'Coordinated engineering, procurement, quality and logistics teams through production, assembly, testing and global shipping.',
          'Ran factory acceptance tests and inspection notifications with clients.',
          'Led weekly client and regional meetings to report progress, resolve concerns and find new opportunities.',
        ],
        pt: [
          'Gestão de projetos brownfield a nível global, em apoio a operações offshore de petróleo e gás.',
          'Gestão de orçamentos de £50 mil a £5 milhões, com previsões financeiras mensais e trimestrais e estratégia de preços.',
          'Coordenação das equipas de engenharia, compras, qualidade e logística na produção, montagem, ensaio e envio global.',
          'Gestão de testes de aceitação em fábrica e notificações de inspeção junto dos clientes.',
          'Condução de reuniões semanais com clientes e regiões para reportar progresso, resolver preocupações e identificar oportunidades.',
        ],
      },
    },
  ],
  milestones: [
    { at: 37.5, label: 'PRINCE2', year: '2016' },
    { at: 68.5, label: 'APM PMQ', year: '2018' },
    { at: 89.5, label: 'Agile (BCS)', year: '2020', low: true },
    { at: 164.5, label: { en: 'AI skills', pt: 'Competências IA' }, year: '2026', end: true },
  ],
};

export const skills = {
  label: { en: 'Skills', pt: 'Competências' },
  title: { en: 'Tools I work with', pt: 'Ferramentas que utilizo' },
  groups: [
    { title: { en: 'Project controls', pt: 'Controlo de projetos' }, items: ['Primavera P6', 'Unifier', 'CEMAR', 'ARM', 'MS Project'] },
    { title: { en: 'Enterprise systems', pt: 'Sistemas empresariais' }, items: ['SAP', 'Oracle', 'TeamCenter', 'SharePoint', 'Microsoft Office'] },
    { title: 'Digital', items: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'MySQL', 'GitHub', 'React', 'Claude'] },
  ],
};

export const qualifications = {
  label: { en: 'Qualifications', pt: 'Qualificações' },
  title: { en: 'Certified and still learning', pt: 'Certificado e sempre a aprender' },
  filters: [
    { id: 'all', label: { en: 'All', pt: 'Todas' } },
    { id: 'pm', label: { en: 'Project management', pt: 'Gestão de projetos' } },
    { id: 'hse', label: { en: 'Safety and quality', pt: 'Segurança e qualidade' } },
    { id: 'digital', label: { en: 'Digital', pt: 'Digital' } },
  ],
  items: [
    { year: 2026, cat: 'digital', name: { en: 'Developing AI skills', pt: 'Desenvolvimento de competências em IA' }, by: 'Claude Academy' },
    { year: 2022, cat: 'digital', name: { en: 'Full-stack Software Development', pt: 'Desenvolvimento de Software Full-stack' }, by: 'Code Institute' },
    { year: 2021, cat: 'pm', name: 'Primavera P6 Planning', by: 'Baker Hughes' },
    { year: 2020, cat: 'pm', name: 'Agile Project Management', by: 'BCS, The Chartered Institute for IT' },
    { year: 2018, cat: 'pm', name: 'APM Project Management Qualification (PMQ)', by: 'Association for Project Management' },
    { year: 2018, cat: 'hse', name: 'Yellow Jacket HSE', by: 'Mace Group' },
    { year: 2017, cat: 'hse', name: { en: 'CSCS Card, Managers and Professionals', pt: 'Cartão CSCS, Gestores e Profissionais' }, by: 'Mace Group' },
    { year: 2017, cat: 'hse', name: { en: 'Introduction to CDM Regulations 2015', pt: 'Introdução ao Regulamento CDM 2015' }, by: 'Highways England' },
    { year: 2016, cat: 'pm', name: 'PRINCE2 Foundation', by: 'APMG International' },
    { year: 2016, cat: 'hse', name: { en: 'Introduction to ISO 9001:2015', pt: 'Introdução à ISO 9001:2015' }, by: 'Highways England' },
    { year: 2015, cat: 'hse', name: 'Lean Six Sigma', by: 'GE Oil & Gas' },
    { year: 2015, cat: 'pm', name: 'MS Project Level 1', by: 'The Knowledge Academy' },
  ],
  education: {
    title: { en: 'Education', pt: 'Formação académica' },
    degree: { en: 'BA (Hons) Business Management', pt: 'Licenciatura (BA Hons) em Gestão de Empresas' },
    school: 'Anglia Ruskin University, Cambridge · 2005–2008',
  },
  languages: {
    title: { en: 'Languages', pt: 'Idiomas' },
    items: [
      { name: 'English', level: { en: 'native', pt: 'nativo' } },
      { name: 'Português', level: { en: 'native', pt: 'nativo' } },
      { name: 'Español', level: { en: 'basic', pt: 'básico' } },
    ],
  },
};

export const contact = {
  label: { en: 'Contact', pt: 'Contacto' },
  title: { en: "Planning a project? Let's talk.", pt: 'Tem um projeto em mente? Vamos conversar.' },
  text: {
    en: "I'm available for project management contracts and consultancy in Portugal, the UK and remotely.",
    pt: 'Estou disponível para contratos de gestão de projetos e consultoria em Portugal, no Reino Unido e em regime remoto.',
  },
  email: 'rick_piedade@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/rpiedade',
  copy: { en: 'Copy', pt: 'Copiar' },
  copied: { en: 'Copied', pt: 'Copiado' },
};

export const footer = {
  updated: { en: 'Updated November 2026', pt: 'Atualizado em novembro de 2026' },
};
