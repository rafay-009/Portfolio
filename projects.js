// Shared project content. After editing, run node scripts/build-project-pages.cjs.
const projects = [
  {
    "type": "frontend",
    "name": "Area Limo Service",
    "label": "SERVICE WEBSITE",
    "brand": "AREA",
    "subtitle": "LIMO SERVICE",
    "visual": "area",
    "url": "https://arealimoservice.com",
    "description": "A chauffeur service website presenting transport options, vehicle information, and a path from trip details to a ride reservation.",
    "tags": [
      "Frontend",
      "Service website"
    ],
    "context": "Visitors need to understand the available transportation services and choose a suitable vehicle before planning their journey.",
    "approach": "The website presents airport, corporate, and event transportation alongside fleet information and a three-step booking explanation.",
    "outcome": "A frontend project connecting service discovery, vehicle selection, and booking information.",
    "slug": "area-limo-service",
    "steps": [
      [
        "Discover the service",
        "Airport transfers, corporate travel, and event transport introduce the available services."
      ],
      [
        "Explore the fleet",
        "Vehicle categories and passenger information help visitors understand their options."
      ],
      [
        "Plan a ride",
        "The website explains entering trip details, reserving a ride, and meeting the chauffeur."
      ]
    ]
  },
  {
    "type": "frontend",
    "name": "Urban Elite",
    "label": "LIMOUSINE SERVICE WEBSITE",
    "brand": "urban elite",
    "subtitle": "LIMOUSINE SERVICES",
    "visual": "urban",
    "url": "https://urbanelitelimo.com",
    "description": "A frontend website project for Urban Elite Limo, bringing a transportation business into my selected web portfolio.",
    "tags": [
      "Frontend",
      "Transportation",
      "Service website"
    ],
    "context": "A transportation business needs a clear digital presence where prospective customers can discover the brand and visit its service offering.",
    "approach": "This portfolio entry covers the frontend website for Urban Elite Limo. The live website is linked for a direct view of the business and its current offering.",
    "outcome": "A selected website project in the transportation category. Implementation technologies and detailed feature contributions are not specified.",
    "slug": "urban-elite",
    "steps": [
      [
        "Project context",
        "A customer-facing website for a limousine service brand."
      ],
      [
        "Frontend focus",
        "This entry represents the website interface within the selected frontend portfolio."
      ],
      [
        "Explore the website",
        "Visit Urban Elite Limo to review the current public website."
      ]
    ]
  },
  {
    "type": "frontend",
    "name": "NextBridge Systems",
    "label": "SOFTWARE & TECHNOLOGY",
    "brand": "NextBridge<b>↗</b>",
    "subtitle": "SYSTEMS",
    "visual": "next",
    "url": "https://nextbridgesystem.com",
    "description": "A software company website introducing web and app development, design services, and a clear route for prospective clients to get in touch.",
    "tags": [
      "Frontend",
      "Software services",
      "Business website"
    ],
    "context": "NextBridge Systems presents software and digital services for businesses looking for a technology partner.",
    "approach": "The site organizes service information, project examples, and contact pathways into a business-facing web experience.",
    "outcome": "A selected frontend project focused on communicating a technical service offering through an accessible website structure.",
    "slug": "nextbridge-systems",
    "steps": [
      [
        "Introduce the offering",
        "Web and app development, design, and other digital services establish the company’s capabilities."
      ],
      [
        "Explore the work",
        "Project and service sections give visitors context for a potential engagement."
      ],
      [
        "Start a conversation",
        "Contact pathways let prospective clients take the next step."
      ]
    ]
  },
  {
    "type": "frontend",
    "name": "Octal Sol",
    "label": "DIGITAL SERVICES & MARKETING",
    "brand": "OCTAL SOL",
    "subtitle": "IDEAS INTO DIGITAL EXPERIENCES",
    "visual": "octal",
    "url": "https://octalsol.com",
    "description": "A digital agency website bringing web development, design, marketing, and AI automation together in one connected service offering.",
    "tags": [
      "Frontend",
      "Agency website",
      "Digital services"
    ],
    "context": "Octal Sol presents a broad digital service offering, from websites and UI/UX to marketing and automation.",
    "approach": "Service sections, process explanations, and selected projects help visitors move from discovering the agency to understanding its work.",
    "outcome": "A selected frontend project presenting a multidisciplinary agency through a cohesive, service-focused website.",
    "slug": "octal-sol",
    "steps": [
      [
        "Understand the services",
        "Development, UI/UX, marketing, and automation are presented as parts of a broader digital offering."
      ],
      [
        "Follow the process",
        "Process explanations describe how the agency approaches a client engagement."
      ],
      [
        "Explore and enquire",
        "Selected projects and contact pathways support further exploration."
      ]
    ]
  },
  {
    "type": "automation",
    "name": "AI-Powered Job Scraping & Recruitment Automation",
    "label": "MAVERICKS UNITED · FEATURED PROJECT",
    "visual": "ai",
    "nodes": [
      "Job portals",
      "AI filtering",
      "Clean results"
    ],
    "icons": [
      "⌕",
      "✧",
      "▤"
    ],
    "description": "An AI-assisted sourcing pipeline that gathers jobs from multiple portals, filters irrelevant roles, removes duplicates, and produces structured results for recruitment teams.",
    "tags": [
      "Python",
      "Firecrawl",
      "Gemini API",
      "Data parsing",
      "GUI"
    ],
    "context": "Staff augmentation teams need relevant job opportunities without repeatedly searching portals and reviewing duplicate or unsuitable listings.",
    "approach": "Used Firecrawl to collect job listings, Python to parse and normalize the data, and Gemini to filter irrelevant positions. Deduplication and a GUI bring the workflow together into a usable sourcing tool.",
    "outcome": "Structured recruitment intelligence for review and follow-up, covering the full workflow from extraction to AI-assisted filtering.",
    "slug": "recruitment-automation",
    "steps": [
      [
        "Collect job listings",
        "Firecrawl gathers listings from multiple job portals for the sourcing pipeline."
      ],
      [
        "Parse and filter",
        "Python prepares the data, while Gemini helps remove irrelevant positions."
      ],
      [
        "Deduplicate and deliver",
        "Duplicate records are removed and structured results are made available through the workflow’s GUI."
      ]
    ]
  },
  {
    "type": "automation",
    "name": "AI-Powered Lead Qualification & CRM Automation",
    "label": "MAVERICKS UNITED · PROFESSIONAL EXPERIENCE",
    "visual": "lead",
    "nodes": [
      "New leads",
      "AI qualification",
      "CRM sync"
    ],
    "icons": [
      "+",
      "✧",
      "⇄"
    ],
    "description": "Connected workflows for lead collection, AI-based qualification, intelligent classification, and CRM synchronization, reducing repetitive sales operations.",
    "tags": [
      "Python",
      "n8n",
      "REST APIs",
      "Webhooks",
      "OpenAI / Anthropic"
    ],
    "context": "Manual lead handling requires sales teams to repeatedly collect information, classify prospects, and maintain CRM records.",
    "approach": "Combined Python and n8n workflows with REST APIs and webhooks. LLM integrations support qualification and classification before lead information is synchronized with the CRM.",
    "outcome": "A connected lead-processing workflow that supports more consistent records and reduces manual handling across sales operations.",
    "slug": "lead-qualification-crm",
    "steps": [
      [
        "Collect leads",
        "Python and n8n connect lead intake with the downstream workflow."
      ],
      [
        "Qualify and classify",
        "OpenAI / Anthropic integrations support AI-assisted evaluation and organization of lead information."
      ],
      [
        "Synchronize the CRM",
        "REST APIs and webhooks connect the processed information with CRM records."
      ]
    ]
  },
  {
    "type": "automation",
    "name": "Backend API Integration & Data Synchronization",
    "label": "MAVERICKS UNITED · PROFESSIONAL EXPERIENCE",
    "visual": "api",
    "nodes": [
      "Source APIs",
      "Transform",
      "Synchronize"
    ],
    "icons": [
      "{ }",
      "⇌",
      "⇄"
    ],
    "description": "RESTful backend APIs and multi-source pipelines that extract, clean, transform, and synchronize data between third-party services and internal systems.",
    "tags": [
      "Python",
      "Django REST Framework",
      "FastAPI",
      "REST APIs",
      "Webhooks"
    ],
    "context": "Information spread across third-party services and internal tools needs a consistent way to move between systems.",
    "approach": "Built Python backend APIs using Django REST Framework and FastAPI, with REST integrations and webhooks supporting the flow of information. Data pipelines handle extraction, cleaning, and transformation.",
    "outcome": "Integrated backend services and structured data flows that connect otherwise separate business tools.",
    "slug": "backend-api-integration",
    "steps": [
      [
        "Extract from services",
        "REST APIs and webhooks connect third-party sources with internal systems."
      ],
      [
        "Clean and transform",
        "Python pipelines prepare information for use across different systems."
      ],
      [
        "Synchronize data",
        "Django REST Framework and FastAPI support backend interfaces and connected data flows."
      ]
    ]
  },
  {
    "type": "automation",
    "name": "University & Institutional Data Scraping",
    "label": "FIVERR · FREELANCE CLIENT PROJECTS",
    "visual": "data",
    "nodes": [
      "Websites",
      "Extract & clean",
      "CSV / Excel"
    ],
    "icons": [
      "⌕",
      "≡",
      "▦"
    ],
    "description": "Custom scraping solutions that collect information from university and institutional websites and turn it into organized datasets for reporting and analysis.",
    "tags": [
      "Python",
      "Selenium",
      "BeautifulSoup",
      "CSV",
      "Excel"
    ],
    "context": "Clients need institution-specific information in usable datasets instead of manually copying content from individual web pages.",
    "approach": "Developed custom Python scrapers with Selenium for browser automation and BeautifulSoup for content extraction. Cleaned and transformed the collected information into structured CSV and Excel outputs.",
    "outcome": "Client-focused datasets that make extracted institutional information easier to review, report on, and analyze.",
    "slug": "institutional-data-scraping",
    "steps": [
      [
        "Navigate and extract",
        "Selenium supports browser automation; BeautifulSoup parses institutional web content."
      ],
      [
        "Clean the dataset",
        "Collected information is cleaned and transformed into a consistent structure."
      ],
      [
        "Deliver usable files",
        "CSV and Excel outputs support client reporting and analysis."
      ]
    ]
  }
];
