// SleeveTechs Website Data Store
// This file contains all the information from the website for the chatbot to use

export interface WebsiteData {
  company: {
    name: string;
    tagline: string;
    description: string;
    founded: string;
    location: string;
    values: Array<{
      title: string;
      description: string;
    }>;
    journey: Array<{
      year: string;
      title: string;
      description: string;
    }>;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    availability: string;
  };
  services: Array<{
    title: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    category: string;
    keywords: string[];
  }>;
  webDev: {
    offerings: Array<{
      title: string;
      description: string;
      features: string[];
    }>;
    techStack: Array<{
      name: string;
      category: string;
    }>;
    process: Array<{
      step: string;
      title: string;
      description: string;
    }>;
  };
  faq: Array<{
    question: string;
    answer: string;
    category: string;
    keywords: string[];
  }>;
}

export const websiteData: WebsiteData = {
  company: {
    name: "SleeveTechs",
    tagline: "We Carry Tech on Our Sleeves",
    description:
      "From securing digital assets to crafting exceptional web experiences, we have evolved to meet the ever-changing demands of the digital landscape. Our services now include Outsourcing & Backoffice, vCIO Services, and Technology Consulting.",
    founded: "2015",
    location: "India",
    values: [
      {
        title: "Passion",
        description: "Technology is our passion. We carry Tech on our Sleeves.",
      },
      {
        title: "Precision",
        description:
          "Every solution is crafted with meticulous attention to detail.",
      },
      {
        title: "Innovation",
        description: "We push boundaries to deliver cutting-edge solutions.",
      },
      {
        title: "Partnership",
        description: "Your success is our success. We grow together.",
      },
    ],
    journey: [
      {
        year: "2015",
        title: "Founded",
        description: "Started as a cybersecurity consultancy firm",
      },
      {
        year: "2019",
        title: "Expanded",
        description: "Added ERP, RPA, and vCIO services",
      },
      {
        year: "2024",
        title: "Web Development",
        description: "Launched comprehensive web development services",
      },
    ],
  },
  contact: {
    email: "info@sleevetechs.com",
    phone: "+91 80-46472444",
    location: "India",
    availability:
      "Available 24/7 for urgent support, business hours for consultations",
  },
  services: [
    {
      title: "Technology Consulting",
      shortDescription: "Strategic tech guidance for your business growth.",
      fullDescription:
        "Be it Strategy, Execution, or Audit. We can help you excel in all phases of your Technology Program. Our passionate team carries Tech on our Sleeves.",
      features: [
        "IT Strategy",
        "Digital Roadmap",
        "Tech Audit",
        "Architecture Review",
      ],
      category: "consulting",
      keywords: [
        "technology",
        "consulting",
        "strategy",
        "audit",
        "it",
        "digital",
        "roadmap",
        "architecture",
        "advisory",
      ],
    },
    {
      title: "Cyber Security",
      shortDescription: "End-to-end security solutions for enterprises.",
      fullDescription:
        "Be it Strategy, Execution, or Audit. We can help you excel in all phases of your Cyber Security Program. From threat assessment to incident response.",
      features: [
        "Threat Assessment",
        "Security Audit",
        "Compliance",
        "Incident Response",
      ],
      category: "security",
      keywords: [
        "cyber",
        "security",
        "cybersecurity",
        "threat",
        "assessment",
        "audit",
        "compliance",
        "incident",
        "response",
        "hacking",
        "protection",
        "secure",
        "vulnerability",
      ],
    },
    {
      title: "ERP Solutions",
      shortDescription: "Complete ERP lifecycle support and implementation.",
      fullDescription:
        "From solution selection, through go-live, to ongoing support. We can support your entire ERP lifecycle with expertise across major platforms.",
      features: [
        "Solution Selection",
        "Implementation",
        "Go-Live Support",
        "Training",
      ],
      category: "erp",
      keywords: [
        "erp",
        "enterprise",
        "resource",
        "planning",
        "implementation",
        "sap",
        "oracle",
        "go-live",
        "training",
        "support",
        "lifecycle",
      ],
    },
    {
      title: "vCIO Services",
      shortDescription: "Expert technocrats as your management advisors.",
      fullDescription:
        "Need Experienced Technocrats as Management Board Advisors? We can help on all levels! Get C-level technology expertise without the full-time cost.",
      features: [
        "Board Advisory",
        "IT Governance",
        "Risk Management",
        "Budget Planning",
      ],
      category: "consulting",
      keywords: [
        "vcio",
        "virtual",
        "cio",
        "chief",
        "information",
        "officer",
        "advisory",
        "governance",
        "risk",
        "budget",
        "management",
        "board",
        "executive",
      ],
    },
    {
      title: "RPA Solutions",
      shortDescription: "Smart automation with ROI-focused approach.",
      fullDescription:
        "What to automate, whilst keeping ROI in mind. We bring transparency to this thought. Identify, implement, and scale robotic process automation.",
      features: [
        "Process Analysis",
        "Bot Development",
        "ROI Tracking",
        "Scaling",
      ],
      category: "automation",
      keywords: [
        "rpa",
        "robotic",
        "process",
        "automation",
        "bot",
        "roi",
        "automate",
        "workflow",
        "efficiency",
        "scaling",
      ],
    },
    {
      title: "Outsourcing & Backoffice",
      shortDescription: "Decades of offshoring experience for cost savings.",
      fullDescription:
        "Bank on us to utilise our decades of experience in offshoring processes for cost savings. We manage operations so you can focus on growth.",
      features: [
        "Process Offshoring",
        "Backoffice Ops",
        "Cost Optimization",
        "Quality Control",
      ],
      category: "outsourcing",
      keywords: [
        "outsourcing",
        "backoffice",
        "back office",
        "offshoring",
        "offshore",
        "cost",
        "savings",
        "operations",
        "quality",
        "bpo",
        "managed",
      ],
    },
    {
      title: "Web Development",
      shortDescription: "Custom web applications and digital experiences.",
      fullDescription:
        "Tailor-made web apps built with modern frameworks like React, Next.js, and Node.js. From UI/UX design to full-stack development, heatmap implementation using Microsoft Clarity, and SEO optimisation.",
      features: [
        "Custom Applications",
        "UI/UX Design",
        "Responsive Development",
        "Full-Stack Solutions",
        "Heatmap Implementation (Microsoft Clarity)",
        "SEO Optimisation",
      ],
      category: "development",
      keywords: [
        "web",
        "development",
        "website",
        "app",
        "application",
        "react",
        "nextjs",
        "nodejs",
        "frontend",
        "backend",
        "fullstack",
        "full-stack",
        "ui",
        "ux",
        "design",
        "responsive",
        "mobile",
        "heatmap",
        "microsoft clarity",
        "clarity",
        "seo",
        "search engine",
        "optimisation",
        "optimization",
        "ranking",
        "core web vitals",
        "session recording",
        "user behaviour",
        "click tracking",
        "scroll tracking",
      ],
    },
  ],
  webDev: {
    offerings: [
      {
        title: "Custom Web Applications",
        description:
          "Tailor-made web apps built with modern frameworks like React, Next.js, and Node.js.",
        features: ["Scalable Architecture", "API Integration", "Real-time Features"],
      },
      {
        title: "UI/UX Design",
        description:
          "Stunning, intuitive interfaces that delight users and drive conversions.",
        features: ["User Research", "Prototyping", "Design Systems"],
      },
      {
        title: "Responsive Development",
        description:
          "Pixel-perfect websites that look amazing on every device and screen size.",
        features: ["Mobile-first", "Cross-browser", "Performance"],
      },
      {
        title: "Full-Stack Solutions",
        description:
          "End-to-end development from database design to frontend implementation.",
        features: ["REST/GraphQL APIs", "Database Design", "Authentication"],
      },
      {
        title: "Cloud Deployment",
        description:
          "Secure, scalable deployment on AWS, Vercel, and other cloud platforms.",
        features: ["CI/CD Pipelines", "Auto-scaling", "Monitoring"],
      },
      {
        title: "Security-First Dev",
        description:
          "Built with our cybersecurity DNA. Every line of code is security-hardened.",
        features: ["Penetration Testing", "Secure Coding", "Compliance"],
      },
      {
        title: "Heatmap Implementation",
        description:
          "We integrate Microsoft Clarity into your website — a free, powerful behavioural analytics tool by Microsoft. Clarity shows you exactly where users click, how far they scroll, and which parts of your page get the most attention through visual heatmaps. It also records real user sessions so you can watch exactly how visitors navigate your site, where they get confused, and where they drop off. This data helps you make smarter design and content decisions to improve conversions.",
        features: [
          "Microsoft Clarity Integration",
          "Click & Scroll Heatmaps",
          "Session Recordings",
          "Rage Click & Dead Click Detection",
          "User Journey Analysis",
          "Conversion Funnel Insights",
        ],
      },
      {
        title: "SEO Optimisation",
        description:
          "Get found. We build sites that rank — from on-page structure to technical SEO and Core Web Vitals.",
        features: ["On-page SEO", "Technical SEO Audit", "Core Web Vitals"],
      },
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Framework" },
      { name: "TypeScript", category: "Language" },
      { name: "Node.js", category: "Backend" },
      { name: "Python", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "AWS", category: "Cloud" },
      { name: "Docker", category: "DevOps" },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description: "Understanding your vision, goals, and requirements.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "Crafting beautiful, user-centric interfaces and experiences.",
      },
      {
        step: "03",
        title: "Develop",
        description: "Building with clean, scalable, and secure code.",
      },
      {
        step: "04",
        title: "Deploy",
        description: "Launching with confidence and continuous monitoring.",
      },
    ],
  },
  faq: [
    {
      question: "What services does SleeveTechs offer?",
      answer:
        "We offer 7 core services:\n\n• Technology Consulting: Strategic IT guidance\n• Cyber Security: End-to-end security solutions\n• ERP Solutions: Full lifecycle ERP support\n• vCIO Services: Virtual CIO advisory\n• RPA Solutions: Robotic process automation\n• Outsourcing & Backoffice: Offshoring & BPO\n• Web Development: Custom web apps & design\n\nWould you like details on any specific service?",
      category: "general",
      keywords: [
        "services",
        "offer",
        "provide",
        "do you",
        "what do",
        "list",
        "all services",
        "available",
        "offerings",
        "what can",
        "help with",
      ],
    },
    {
      question: "How can I contact SleeveTechs?",
      answer:
        "You can reach us at:\n\n• Email: info@sleevetechs.com\n• Phone: +91 80-46472444\n• Location: Bangalore, India\n\nWe're available 24/7 for urgent support and during business hours for consultations.",
      category: "contact",
      keywords: [
        "contact",
        "reach",
        "email",
        "phone",
        "call",
        "get in touch",
        "talk",
        "speak",
        "connect",
        "number",
        "address",
        "location",
      ],
    },
    {
      question: "Do you provide cybersecurity services?",
      answer:
        "Yes! We provide end-to-end cybersecurity solutions including:\n\n• Threat Assessment\n• Security Audits\n• Compliance Management\n• Incident Response\n\nOur team has been delivering security programs since 2015.",
      category: "services",
      keywords: [
        "cyber",
        "security",
        "cybersecurity",
        "hacking",
        "protection",
        "secure",
        "threat",
        "vulnerability",
      ],
    },
    {
      question: "What technologies do you use for web development?",
      answer:
        "We use a modern, battle-tested tech stack:\n\n• Frontend: React, Next.js, TypeScript\n• Backend: Node.js, Python\n• Database: PostgreSQL\n• Cloud: AWS, Vercel\n• DevOps: Docker, CI/CD\n\nWe also offer Heatmap Implementation (click/scroll tracking, session recordings) and SEO Optimisation (on-page, technical SEO, Core Web Vitals). Every project is built with security-first principles.",
      category: "webdev",
      keywords: [
        "technologies",
        "tech stack",
        "stack",
        "tools",
        "framework",
        "language",
        "react",
        "nodejs",
        "python",
        "heatmap",
        "seo",
        "search engine",
        "optimisation",
      ],
    },
    {
      question: "How long have you been in business?",
      answer:
        "SleeveTechs was founded in 2015 as a cybersecurity consultancy. Over the years we've grown:\n\n• 2015: Founded as a cybersecurity firm\n• 2019: Expanded to ERP, RPA & vCIO services\n• 2024: Launched full web development services\n\nThat's 10+ years of technology expertise.",
      category: "company",
      keywords: [
        "founded",
        "history",
        "years",
        "experience",
        "since",
        "old",
        "long",
        "established",
        "background",
        "journey",
      ],
    },
    {
      question: "Do you offer outsourcing services?",
      answer:
        "Yes! We have decades of experience in offshoring and BPO, including:\n\n• Process Offshoring\n• Backoffice Operations\n• Cost Optimization\n• Quality Control\n\nWe manage operations so you can focus on growth.",
      category: "services",
      keywords: [
        "outsourcing",
        "backoffice",
        "offshore",
        "bpo",
        "cost",
        "savings",
        "operations",
      ],
    },
    {
      question: "What is vCIO?",
      answer:
        "vCIO stands for Virtual Chief Information Officer. It gives you C-level technology leadership without the full-time cost.\n\nOur vCIO services include:\n• Board Advisory\n• IT Governance\n• Risk Management\n• Budget Planning\n\nPerfect for growing businesses that need strategic tech leadership.",
      category: "services",
      keywords: [
        "vcio",
        "virtual cio",
        "chief information officer",
        "cio",
        "advisory",
        "governance",
      ],
    },
    {
      question: "Do you provide ERP implementation?",
      answer:
        "Yes! We support the complete ERP lifecycle:\n\n• Solution Selection: Choosing the right platform\n• Implementation: Full deployment support\n• Go-Live Support: Smooth transition\n• Training: Team enablement\n\nWe work across major ERP platforms.",
      category: "services",
      keywords: [
        "erp",
        "enterprise resource planning",
        "sap",
        "oracle",
        "implementation",
        "go-live",
      ],
    },
    {
      question: "Where is SleeveTechs located?",
      answer:
        "SleeveTechs is based in Bangalore, India. We serve clients globally and are available 24/7 for urgent support.",
      category: "company",
      keywords: [
        "location",
        "where",
        "based",
        "india",
        "office",
        "country",
        "headquarters",
      ],
    },
    {
      question: "What is RPA?",
      answer:
        "RPA stands for Robotic Process Automation. It uses software bots to automate repetitive business tasks.\n\nOur RPA services include:\n• Process Analysis: Identifying what to automate\n• Bot Development: Building the automation\n• ROI Tracking: Measuring the value\n• Scaling: Growing your automation program\n\nWe focus on ROI-driven automation that delivers real business value.",
      category: "services",
      keywords: [
        "rpa",
        "robotic",
        "automation",
        "automate",
        "bot",
        "workflow",
        "process",
      ],
    },
    {
      question: "What is a heatmap and how does it help my website?",
      answer:
        "A heatmap is a visual tool that shows you exactly how visitors interact with your website.\n\nWe implement Microsoft Clarity — a free behavioural analytics tool by Microsoft. Here is what it does:\n\n• Click Heatmaps: Shows which buttons, links, and areas users click most\n• Scroll Heatmaps: Shows how far down users scroll on each page\n• Session Recordings: Watch real user sessions to see how people navigate your site\n• Rage Click Detection: Identifies where users repeatedly click out of frustration\n• Dead Click Detection: Spots elements users click that have no action\n• User Journey Analysis: Understand how visitors move through your site\n\nWith this data you can fix confusing layouts, improve CTAs, and boost conversions. Microsoft Clarity is GDPR-compliant and completely free to use.\n\nInterested? Email us at info@sleevetechs.com or call +91 72049 40940.",
      category: "webdev",
      keywords: [
        "heatmap",
        "heat map",
        "microsoft clarity",
        "clarity",
        "session recording",
        "click tracking",
        "scroll tracking",
        "user behaviour",
        "rage click",
        "dead click",
        "user analytics",
        "behavioural analytics",
        "website analytics",
        "conversion",
        "ux analytics",
      ],
    },
  ],
};

// ─── Intent detection helpers ────────────────────────────────────────────────

type Intent =
  | "services_list"
  | "service_detail"
  | "contact"
  | "about"
  | "pricing"
  | "greeting"
  | "thanks"
  | "unknown";

interface IntentResult {
  intent: Intent;
  matchedService?: (typeof websiteData.services)[0];
  matchedFaq?: (typeof websiteData.faq)[0];
}

// Words that should be ignored when scoring (no signal)
const STOPWORDS = new Set([
  "i","me","my","you","your","we","us","our","they","them","their",
  "a","an","the","is","are","was","were","be","been","being",
  "have","has","had","do","does","did","will","would","could","should",
  "can","may","might","must","of","to","in","on","at","for","with","by",
  "from","up","about","into","through","during","before","after","above",
  "below","and","or","but","so","if","then","than","this","that","these",
  "those","what","which","who","whom","when","where","why","how",
  "want","need","looking","like","please","help","get","got","there",
  "here","one","also","just","very","much","most","more","some","any",
  "all","each","every","other","another","such","no","not","only","own",
  "same","too","also","does","said","says","tell","know","make","made",
  "take","takes","took","go","goes","went","come","came","new","good",
  "people","working","work","working","website","sites","page","pages"
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function meaningfulTokens(text: string): string[] {
  return tokenize(text).filter((t) => !STOPWORDS.has(t) && t.length > 1);
}

function scoreAgainst(tokens: string[], keywords: string[]): number {
  let score = 0;
  const tokenStr = tokens.join(" ");
  for (const kw of keywords) {
    const kwLower = kw.toLowerCase();
    const kwTokens = kwLower.split(/\s+/);
    // Exact phrase match in original text
    if (tokenStr.includes(kwLower)) {
      score += kwTokens.length * 2; // bonus for multi-word phrases
    } else {
      for (const t of tokens) {
        if (t === kwLower) score += 1;
        else if (kwLower.startsWith(t) && t.length > 3) score += 0.4;
      }
    }
  }
  return score;
}

// Strong "trigger" terms that map directly to a service. When found, they
// dominate the scoring so e.g. "audit" routes to Cyber Security even if
// the query also mentions "website".
const SERVICE_TRIGGERS: Array<{ pattern: RegExp; service: string; weight: number }> = [
  // Cyber Security
  { pattern: /\b(security audit|security review|pen ?test|penetration test|vulnerability)\b/i, service: "Cyber Security", weight: 10 },
  { pattern: /\b(audit|assessment)\b/i,                                       service: "Cyber Security", weight: 6 },
  { pattern: /\b(hack|hacked|breach|breached|attack|attacked|malware|ransom)\b/i, service: "Cyber Security", weight: 8 },
  { pattern: /\b(secure|securing|protect|protection|safety|threat|cyber)\b/i, service: "Cyber Security", weight: 5 },
  { pattern: /\b(compliance|gdpr|iso ?27001|soc ?2|hipaa|pci)\b/i,             service: "Cyber Security", weight: 7 },

  // Web Development
  { pattern: /\b(build|create|develop|make|design)\s+(a|my|new)?\s*(website|web ?app|web ?application|landing ?page|portal|portfolio)\b/i, service: "Web Development", weight: 10 },
  { pattern: /\b(react|next\.?js|node\.?js|frontend|front ?end|backend|back ?end|fullstack|full ?stack|api|ui|ux)\b/i, service: "Web Development", weight: 6 },
  { pattern: /\b(redesign|revamp|rebuild)\b/i,                                 service: "Web Development", weight: 5 },
  { pattern: /\b(heatmap|heat ?map|session record|click track|scroll track|user behav|hotjar|clarity|mouseflow)\b/i, service: "Web Development", weight: 9 },
  { pattern: /\b(seo|search engine optim|on.?page seo|technical seo|core web vitals|google rank|page rank|keyword rank|organic traffic|meta tag|sitemap|backlink)\b/i, service: "Web Development", weight: 9 },

  // ERP
  { pattern: /\b(erp|sap|oracle|netsuite|microsoft dynamics|tally)\b/i,        service: "ERP Solutions", weight: 8 },
  { pattern: /\b(implementation|go.?live|enterprise resource)\b/i,             service: "ERP Solutions", weight: 4 },

  // RPA
  { pattern: /\b(rpa|automation|automate|automating|bot|bots|workflow)\b/i,    service: "RPA Solutions", weight: 7 },
  { pattern: /\b(repetitive|manual process|streamline)\b/i,                    service: "RPA Solutions", weight: 4 },

  // vCIO
  { pattern: /\b(vcio|virtual cio|cio|chief information officer|board advis|it govern)\b/i, service: "vCIO Services", weight: 8 },
  { pattern: /\b(advisor|advisory|leadership|strategic guidance)\b/i,          service: "vCIO Services", weight: 4 },

  // Outsourcing & Backoffice
  { pattern: /\b(outsource|outsourcing|offshore|offshoring|backoffice|back ?office|bpo)\b/i, service: "Outsourcing & Backoffice", weight: 8 },
  { pattern: /\b(reduce cost|cost saving|cheaper|operational cost)\b/i,       service: "Outsourcing & Backoffice", weight: 5 },

  // Technology Consulting
  { pattern: /\b(consulting|consultant|consult|advice|advise|strategy|roadmap)\b/i, service: "Technology Consulting", weight: 6 },
  { pattern: /\b(modernise|modernize|architecture|tech stack|digital transform)\b/i, service: "Technology Consulting", weight: 5 },
];

function detectIntent(query: string): IntentResult {
  const lower = query.toLowerCase();
  const meaningful = meaningfulTokens(query);

  // ── Greeting (only if it's a SHORT greeting, not embedded) ───────────────
  if (/^(hi|hello|hey|hii+|yo|sup|howdy|good (morning|afternoon|evening))[\s!.,?]*$/i.test(query.trim())) {
    return { intent: "greeting" };
  }

  // ── Thanks ────────────────────────────────────────────────────────────────
  if (/\b(thanks|thank you|thx|ty|appreciate|cheers)\b/i.test(query)) {
    return { intent: "thanks" };
  }

  // ── Pricing ───────────────────────────────────────────────────────────────
  if (/\b(price|pricing|cost|costs|how much|rate|rates|fee|fees|charge|charges|quote|quotation|budget|payment|fees?)\b/i.test(lower)) {
    return { intent: "pricing" };
  }

  // ── Services LIST (catch FIRST so generic "what services" doesn't get
  //    routed to a single service detail) ──────────────────────────────────
  const isListIntent =
    // "what services do you provide / offer / have"
    /\b(what|which|list|all|tell me)\b.*\bservices?\b/i.test(query) ||
    // "services you provide / offer / have / do"
    /\bservices?\s+(you|do you|can you|that you)\b/i.test(query) ||
    // "services provided / offered / available"
    /\bservices?\s+(provided|offered|available|you offer|you provide)\b/i.test(query) ||
    // "do/does/can you offer/provide/have services"
    /\b(do|does|can)\s+(you|sleevetechs|they)\s+(offer|provide|have|do)\b/i.test(query) ||
    // "what do you do / offer / provide"
    /\bwhat\s+(do|does|can)\s+(you|sleevetechs)\s+(do|offer|provide|provide for|help)/i.test(query) ||
    // "your offerings / your services"
    /\b(your|sleevetechs|the company)\s+(services?|offerings?|solutions?|capabilities)\b/i.test(query) ||
    // "show me services" / "tell me services"
    /\b(show|tell|give)\s+(me|us)?\s*(your|the|all)?\s*services?\b/i.test(query) ||
    // bare "services"
    /^services\??$/i.test(query.trim());

  // ── Service triggers (high-weight pattern matching) ──────────────────────
  const serviceScores = new Map<string, number>();
  for (const trig of SERVICE_TRIGGERS) {
    if (trig.pattern.test(query)) {
      serviceScores.set(trig.service, (serviceScores.get(trig.service) || 0) + trig.weight);
    }
  }

  // ── Soft scoring against each service's keywords ─────────────────────────
  // (skip if it's a list intent — we don't want to pick one)
  if (!isListIntent) {
    for (const service of websiteData.services) {
      const soft = scoreAgainst(meaningful, [
        ...service.keywords,
        ...service.title.toLowerCase().split(/\s+/),
        service.category,
        ...service.features.flatMap((f) => f.toLowerCase().split(/\s+/)),
      ]);
      if (soft > 0) {
        serviceScores.set(service.title, (serviceScores.get(service.title) || 0) + soft);
      }
    }
  }

  // ── Contact intent ────────────────────────────────────────────────────────
  const isContactIntent =
    /\b(contact|reach|email|phone|call|number|address|location|where are you|office|get in touch|talk to)\b/i.test(query) &&
    !/\b(audit|security|develop|build|automation|outsource|consult)\b/i.test(query);

  // ── About intent ──────────────────────────────────────────────────────────
  const isAboutIntent =
    /\b(about|who are you|who is|founded|history|background|tell me about|what is sleevetechs|years in business|established|when did)\b/i.test(query);

  // ── Decide ────────────────────────────────────────────────────────────────
  // Find best service (only if not list intent)
  let bestService: (typeof websiteData.services)[0] | undefined;
  let bestServiceScore = 0;
  if (!isListIntent) {
    for (const [title, score] of serviceScores) {
      if (score > bestServiceScore) {
        bestServiceScore = score;
        bestService = websiteData.services.find((s) => s.title === title);
      }
    }
  }

  // Find best FAQ (only used when service score is weak)
  let bestFaq: (typeof websiteData.faq)[0] | undefined;
  let bestFaqScore = 0;
  if (!isListIntent) {
    for (const faq of websiteData.faq) {
      const score = scoreAgainst(meaningful, [
        ...faq.keywords,
        ...meaningfulTokens(faq.question),
      ]);
      if (score > bestFaqScore) {
        bestFaqScore = score;
        bestFaq = faq;
      }
    }
  }

  // ── Priority order ────────────────────────────────────────────────────────
  // 1. List intent ALWAYS wins (user wants the menu, not a single service)
  // 2. Strong service match (trigger pattern hit, score >= 5)
  // 3. Contact / About
  // 4. Weak service match
  // 5. FAQ
  // 6. Unknown

  if (isListIntent) return { intent: "services_list" };

  if (bestServiceScore >= 5 && bestService) {
    return { intent: "service_detail", matchedService: bestService };
  }

  if (isContactIntent) return { intent: "contact" };
  if (isAboutIntent) return { intent: "about" };

  if (bestServiceScore >= 2 && bestService) {
    return { intent: "service_detail", matchedService: bestService };
  }

  if (bestFaqScore >= 2 && bestFaq) {
    return { intent: "service_detail", matchedFaq: bestFaq };
  }

  return { intent: "unknown" };
}

// ─── Main search function ─────────────────────────────────────────────────────

export function searchWebsiteData(query: string): string {
  const { intent, matchedService, matchedFaq } = detectIntent(query);

  switch (intent) {
    case "greeting":
      return `Hello! Great to hear from you. I'm SleeveBot, your SleeveTechs assistant.\n\nI can help you with:\n• Our services & solutions\n• Company information\n• Contact details\n• Any specific questions\n\nWhat would you like to know?`;

    case "thanks":
      return `You're welcome! If you have any more questions, feel free to ask. You can also reach us directly at info@sleevetechs.com. We're always happy to help!`;

    case "pricing":
      return `Pricing varies based on the scope and complexity of each project. We tailor our solutions to your specific needs.\n\nFor a custom quote, please reach out to us:\n\n• Email: info@sleevetechs.com\n• Phone: +91 80-46472444\n\nWe'll get back to you within 2 business hours!`;

    case "services_list":
      return websiteData.faq.find((f) => f.category === "general")?.answer ||
        `We offer 7 core services:\n\n• Technology Consulting\n• Cyber Security\n• ERP Solutions\n• vCIO Services\n• RPA Solutions\n• Outsourcing & Backoffice\n• Web Development\n\nAsk me about any of these for more details!`;

    case "contact":
      return `Here's how to reach us:\n\n• Email: ${websiteData.contact.email}\n• Phone: ${websiteData.contact.phone}\n• Location: ${websiteData.contact.location}\n• Availability: ${websiteData.contact.availability}\n\nFeel free to reach out anytime!`;

    case "about":
      return `${websiteData.company.name}: "${websiteData.company.tagline}"\n\n${websiteData.company.description}\n\nFounded: ${websiteData.company.founded}\nLocation: ${websiteData.company.location}\n\nOur core values: ${websiteData.company.values.map((v) => v.title).join(", ")}.`;

    case "service_detail":
      if (matchedFaq) return matchedFaq.answer;
      if (matchedService) {
        return `${matchedService.title}\n\n${matchedService.fullDescription}\n\nWhat we cover:\n${matchedService.features.map((f) => `• ${f}`).join("\n")}\n\nWant to discuss your specific needs? Reach out at info@sleevetechs.com or call +91 80-46472444.`;
      }
      break;

    case "unknown":
    default:
      return `I'm not sure I have the answer to that one. For detailed queries, please email us at info@sleevetechs.com. Our team will get back to you within 2 business hours!\n\nOr call us at +91 80-46472444.\n\nIn the meantime, I can help you with our services, company info, or contact details.`;
  }

  return `I'm not sure I have the answer to that one. For detailed queries, please email us at info@sleevetechs.com. Our team will get back to you within 2 business hours!\n\nOr call us at +91 80-46472444.`;
}
