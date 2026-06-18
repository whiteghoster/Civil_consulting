export const siteConfig = {
  meta: {
    name: "Saranya Civil Consulting",
    shortName: "Saranya Civil",
    tagline: "Independent civil consulting for cost, risk, and project visibility",
    description:
      "Saranya Civil Consulting helps developers, builders, investors, and private project owners with quantity surveying, project monitoring, technical due diligence, and investment advisory.",
    descriptor: "Cost | Site | Drawings",
    website: "www.saranyacivilconsulting.co.in",
  },
  contact: {
    address: "1204, Emaar Business Park, DLF Cyber City, Gurugram, Haryana 122002",
    phone: "+91 98100 12345",
    email: "info@saranyacivilconsulting.co.in",
    website: "www.saranyacivilconsulting.co.in",
    hours: "Mon – Sat: 9:00 AM – 7:00 PM",
    shortLocation: "Gurugram, Haryana",
  },
  social: {
    linkedin: "https://linkedin.com/company/saranyacivilconsulting",
    facebook: "https://facebook.com/saranyacivilconsulting",
    instagram: "https://instagram.com/saranyacivilconsulting",
    twitter: "https://twitter.com/saranyacivilconsulting",
    youtube: "https://youtube.com/@saranyacivilconsulting",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Quantity Surveying", href: "/services#quantity-surveying" },
        { label: "Construction Cost Estimation", href: "/services#quantity-surveying" },
        { label: "Project Monitoring", href: "/services#project-monitoring" },
        { label: "Technical Due Diligence", href: "/services#technical-due-diligence" },
        { label: "Investment Advisory", href: "/services#investment-advisory" },
      ],
    },
    {
      label: "Projects",
      href: "/projects",
      children: [
        { label: "Residential", href: "/projects/residential" },
        { label: "Commercial Sites", href: "/projects/corporate" },
        { label: "Highway Bridges", href: "/projects/bridges" },
        { label: "Green Buildings", href: "/projects/green" },
        { label: "Housing Societies", href: "/projects/housing" },
        { label: "Stadiums", href: "/projects/stadiums" },
      ],
    },
    { label: "Architecture", href: "/architecture" },
    { label: "Career", href: "/career" },
    { label: "Contact", href: "/contact" },
  ],
  stats: [
    { value: 250, suffix: "+", label: "Projects Delivered" },
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 500, prefix: "₹", suffix: "Cr+", label: "Project Value Managed" },
  ],
  services: [
    {
      id: "quantity-surveying",
      title: "Quantity Surveying & Cost Estimation",
      shortTitle: "Quantity Surveying",
      icon: "Calculator",
      description:
        "Precise BOQ preparation, cost planning, and budget management for projects of all scales.",
      features: [
        "Bill of Quantities (BOQ)",
        "Cost Planning & Budgeting",
        "Tender Analysis & Evaluation",
        "Value Engineering",
        "Cost Control & Reporting",
        "Post-Contract Cost Management",
      ],
      href: "/services#quantity-surveying",
      color: "from-blue-500/20 to-indigo-500/20",
    },
    {
      id: "project-monitoring",
      title: "Project Monitoring & Audit",
      shortTitle: "Project Monitoring",
      icon: "BarChart3",
      description:
        "Real-time progress tracking, site monitoring, and comprehensive project audits.",
      features: [
        "Progress Tracking & Reporting",
        "Site Monitoring & Inspection",
        "Quality Audits",
        "Regulatory Compliance",
        "Risk Identification",
        "Milestone Management",
      ],
      href: "/services#project-monitoring",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      id: "technical-due-diligence",
      title: "Technical Due Diligence",
      shortTitle: "Technical Due Diligence",
      icon: "Search",
      description:
        "Thorough structural analysis, feasibility studies, and risk assessments for informed decisions.",
      features: [
        "Structural Analysis",
        "Site Review & Assessment",
        "Feasibility Studies",
        "Risk Assessment",
        "Technical Reports",
        "Compliance Verification",
      ],
      href: "/services#technical-due-diligence",
      color: "from-purple-500/20 to-violet-500/20",
    },
    {
      id: "investment-advisory",
      title: "Investment Advisory",
      shortTitle: "Investment Advisory",
      icon: "TrendingUp",
      description:
        "Strategic investment analysis, ROI projections, and financial planning for real estate ventures.",
      features: [
        "Investment Analysis",
        "ROI Projections",
        "Financial Feasibility",
        "Market Research",
        "Portfolio Optimization",
        "Strategic Recommendations",
      ],
      href: "/services#investment-advisory",
      color: "from-amber-500/20 to-orange-500/20",
    },
  ],
  projects: [
    {
      id: "oberoi-sky-city",
      title: "Oberoi Sky City",
      category: "Residential Apartments",
      slug: "residential",
      location: "Mumbai, Maharashtra",
      value: "₹850 Cr",
      area: "4.2 Million sq ft",
      status: "Completed",
      year: "2023",
      image: "/images/project-1.jpg",
      description: "Luxury high-rise residential development with 3000+ units.",
      tags: ["Residential", "Luxury", "High-Rise"],
    },
    {
      id: "dlf-cyber-park",
      title: "DLF Cyber Park Phase IV",
      category: "Corporate Offices",
      slug: "corporate",
      location: "Gurugram, Haryana",
      value: "₹1200 Cr",
      area: "6.8 Million sq ft",
      status: "Ongoing",
      year: "2024",
      image: "/images/project-2.jpg",
      description: "State-of-the-art commercial office complex.",
      tags: ["Commercial", "IT Park", "LEED Certified"],
    },
    {
      id: "yamuna-expressway-bridge",
      title: "Yamuna Expressway Bridge",
      category: "Highway Bridges",
      slug: "bridges",
      location: "Greater Noida, UP",
      value: "₹320 Cr",
      area: "2.4 km span",
      status: "Completed",
      year: "2022",
      image: "/images/project-3.jpg",
      description: "Critical infrastructure bridge on the Yamuna Expressway.",
      tags: ["Infrastructure", "Bridge", "Government"],
    },
    {
      id: "godrej-green-estate",
      title: "Godrej Green Estate",
      category: "Green Buildings",
      slug: "green",
      location: "Pune, Maharashtra",
      value: "₹650 Cr",
      area: "3.1 Million sq ft",
      status: "Completed",
      year: "2023",
      image: "/images/project-4.jpg",
      description: "India's largest IGBC Platinum certified green township.",
      tags: ["Green Building", "IGBC Platinum", "Township"],
    },
    {
      id: "mahindra-happinest",
      title: "Mahindra Happinest",
      category: "Housing Societies",
      slug: "housing",
      location: "Thane, Maharashtra",
      value: "₹480 Cr",
      area: "1.8 Million sq ft",
      status: "Ongoing",
      year: "2024",
      image: "/images/project-5.jpg",
      description: "Affordable housing society with premium amenities.",
      tags: ["Affordable Housing", "Society", "Amenities"],
    },
    {
      id: "jio-world-stadium",
      title: "Reliance Sports Arena",
      category: "Stadiums",
      slug: "stadiums",
      location: "Navi Mumbai, Maharashtra",
      value: "₹2200 Cr",
      area: "12 Million sq ft",
      status: "Ongoing",
      year: "2025",
      image: "/images/project-6.jpg",
      description: "World-class multi-purpose sports and entertainment arena.",
      tags: ["Stadium", "Sports", "Iconic"],
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Rajesh Sharma",
      designation: "MD, Prestige Group",
      content:
        "Saranya Civil Consulting's attention to detail in quantity surveying gave us a clearer basis for tender negotiation and cost control.",
      rating: 5,
      avatar: "/images/testimonial-1.jpg",
    },
    {
      id: 2,
      name: "Priya Menon",
      designation: "VP Projects, Godrej Properties",
      content:
        "The technical due diligence report was structured, practical, and helped us understand acquisition risk before committing.",
      rating: 5,
      avatar: "/images/testimonial-2.jpg",
    },
    {
      id: 3,
      name: "Amit Patel",
      designation: "Director, Ahmedabad Smart City",
      content:
        "Their project monitoring system gives us real-time visibility into every aspect of our infrastructure project. The ROI has been phenomenal.",
      rating: 5,
      avatar: "/images/testimonial-3.jpg",
    },
    {
      id: 4,
      name: "Sunita Kapoor",
      designation: "CFO, DLF Limited",
      content:
        "Saranya Civil Consulting's advisory helped us compare development assumptions with a more disciplined view of cost and risk.",
      rating: 5,
      avatar: "/images/testimonial-4.jpg",
    },
  ],
  clients: [
    "DLF",
    "Godrej",
    "Prestige",
    "Mahindra",
    "Lodha",
    "Oberoi",
    "Brigade",
    "Embassy",
    "Sobha",
    "Shapoorji",
    "L&T",
    "NHAI",
    "CPWD",
    "NBCC",
    "Tata Housing",
  ],
  values: [
    {
      icon: "Shield",
      title: "Integrity",
      description:
        "Uncompromising honesty in every report, estimate, and recommendation. Our reputation is built on data you can trust.",
    },
    {
      icon: "Award",
      title: "Excellence",
      description:
        "We hold ourselves to the highest professional standards, continuously investing in expertise and technology.",
    },
    {
      icon: "Users",
      title: "Collaboration",
      description:
        "We work as an extension of your team, aligning our goals with your vision for every project.",
    },
    {
      icon: "Handshake",
      title: "Trust",
      description:
        "Long-term relationships built on consistent delivery, transparent communication, and mutual respect.",
    },
  ],
  team: [
    {
      name: "Vikram Malhotra",
      role: "Founder & Managing Director",
      experience: "25+ Years",
      bio: "IIT Delhi alumnus with over two decades leading marquee infrastructure projects across India. Former VP at Larsen & Toubro.",
      linkedin: "#",
      expertise: ["Quantity Surveying", "Cost Management", "Strategic Planning"],
      achievements: ["RICS Fellow", "Top 40 Under 40 in Construction"],
    },
    {
      name: "Ananya Krishnan",
      role: "Director – Technical",
      experience: "18+ Years",
      bio: "NIT Trichy gold medalist specializing in structural due diligence and technical audits for large-scale developments.",
      linkedin: "#",
      expertise: ["Due Diligence", "Structural Analysis", "Risk Assessment"],
      achievements: ["Chartered Engineer", "IEI Fellow"],
    },
  ],
  timeline: [
    { year: "2009", event: "Founded in New Delhi with a team of 5 engineers" },
    { year: "2012", event: "Expanded to Mumbai and Bengaluru offices" },
    { year: "2015", event: "Crossed ₹100 Cr project value milestone" },
    { year: "2017", event: "Launched Investment Advisory vertical" },
    { year: "2019", event: "RICS accreditation received" },
    { year: "2021", event: "Expanded to 8 cities across India" },
    { year: "2023", event: "Crossed ₹500 Cr project value, 250+ projects" },
    { year: "2024", event: "Launched green building consultancy practice" },
  ],
  openings: [
    {
      id: 1,
      title: "Senior Quantity Surveyor",
      location: "Gurugram, Haryana",
      type: "Full Time",
      experience: "5-8 Years",
      description: "Lead BOQ preparation and cost management for large-scale residential and commercial projects.",
    },
    {
      id: 2,
      title: "Project Monitoring Engineer",
      location: "Mumbai, Maharashtra",
      type: "Full Time",
      experience: "3-5 Years",
      description: "Monitor progress, quality, and compliance on active construction sites.",
    },
    {
      id: 3,
      title: "Investment Analyst – Real Estate",
      location: "New Delhi",
      type: "Full Time",
      experience: "2-4 Years",
      description: "Financial modeling, market research, and ROI analysis for property investments.",
    },
    {
      id: 4,
      title: "Civil Engineering Intern",
      location: "Bengaluru / Remote",
      type: "Internship",
      experience: "Fresher",
      description: "Support senior engineers in site audits, report preparation, and data analysis.",
    },
  ],
  home: {
    metrics: [
      { value: "250+", label: "civil projects reviewed" },
      { value: "15+", label: "years across site and cost advisory" },
      { value: "Rs 500Cr+", label: "project value monitored" },
      { value: "72hr", label: "typical first review note" },
    ],
    serviceRail: [
      "Construction cost estimation",
      "BOQ and tender review",
      "Site progress monitoring",
      "Technical due diligence",
    ],
    services: [
      {
        title: "Quantity Surveying",
        copy: "Measured BOQs, tender comparisons, rate analysis, and cost plans for owners before award or variation approval.",
        output: "BOQ checks, cost estimate, tender comparison, variation note.",
        icon: "Calculator",
        href: "/services#quantity-surveying",
      },
      {
        title: "Construction Cost Estimation",
        copy: "Early-stage and execution-stage estimates that show assumptions, exclusions, escalation risk, and budget exposure.",
        output: "Cost model, item assumptions, risk allowance, value engineering note.",
        icon: "Ruler",
        href: "/services#quantity-surveying",
      },
      {
        title: "Project Monitoring",
        copy: "Independent site reviews for progress, quality observations, payment milestones, and next-step action tracking.",
        output: "Site audit, photo log, milestone report, issue register.",
        icon: "BarChart3",
        href: "/services#project-monitoring",
      },
      {
        title: "Drawing and BOQ Review",
        copy: "Cross-check drawings, scope, specifications, and BOQ quantities before commitment or contractor negotiation.",
        output: "Document gaps, quantity flags, scope observations, decision note.",
        icon: "Layers",
        href: "/services#technical-due-diligence",
      },
      {
        title: "Technical Due Diligence",
        copy: "Practical review of technical, compliance, constructability, and site risks before purchase, funding, or restart.",
        output: "Risk register, document comments, site observations, advisory memo.",
        icon: "FileSearch",
        href: "/services#technical-due-diligence",
      },
      {
        title: "Investment Advisory",
        copy: "Civil-cost and execution-risk inputs for land, development, and real estate investment decisions.",
        output: "Feasibility view, cost sensitivity, exposure summary, action route.",
        icon: "TrendingUp",
        href: "/services#investment-advisory",
      },
    ],
    process: [
      {
        step: "01",
        title: "Share civil documents",
        copy: "Send drawings, BOQ, tender files, estimate, site photos, bills, or the decision you need to make.",
      },
      {
        step: "02",
        title: "Define the review scope",
        copy: "We clarify project stage, missing details, site conditions, deadline, and the exact output required.",
      },
      {
        step: "03",
        title: "Review cost, drawings, and site risk",
        copy: "The team checks quantities, assumptions, progress evidence, scope gaps, and technical exposure.",
      },
      {
        step: "04",
        title: "Receive an action-ready note",
        copy: "Use the report to award, renegotiate, pause, release payment, request clarifications, or monitor the next milestone.",
      },
    ],
    projects: [
      {
        title: "Residential tower cost review",
        scope: "BOQ validation and tender comparison",
        location: "Mumbai, Maharashtra",
        value: "Rs 850 Cr",
        image: "/images/home-residential-cost-review.jpg",
      },
      {
        title: "Commercial campus monitoring",
        scope: "Monthly progress, issue register, and payment milestone check",
        location: "Gurugram, Haryana",
        value: "Rs 1,200 Cr",
        image: "/images/home-commercial-campus.jpg",
      },
      {
        title: "Bridge package due diligence",
        scope: "Technical document review and construction risk observations",
        location: "Greater Noida, Uttar Pradesh",
        value: "Rs 320 Cr",
        image: "/images/home-infrastructure-bridge.jpg",
      },
    ],
    trustPoints: [
      {
        title: "Measured before advised",
        copy: "Recommendations are tied to quantities, drawings, site evidence, and stated assumptions.",
        icon: "ClipboardCheck",
      },
      {
        title: "Independent site view",
        copy: "Reports are structured for owners and decision-makers, not contractor convenience.",
        icon: "ShieldCheck",
      },
      {
        title: "Civil-first language",
        copy: "Outputs use practical engineering terms: BOQ, scope, progress, compliance, variation, and risk.",
        icon: "Building2",
      },
      {
        title: "Clear next action",
        copy: "Every review ends with what to approve, challenge, inspect, renegotiate, or monitor next.",
        icon: "CheckCircle2",
      },
    ],
  },
  footer: {
    columns: [
      {
        title: "Civil Services",
        links: [
          { label: "Quantity Surveying", href: "/services#quantity-surveying" },
          { label: "Construction Cost Estimation", href: "/services#quantity-surveying" },
          { label: "Project Monitoring", href: "/services#project-monitoring" },
          { label: "Technical Due Diligence", href: "/services#technical-due-diligence" },
          { label: "Investment Advisory", href: "/services#investment-advisory" },
        ],
      },
      {
        title: "Project Work",
        links: [
          { label: "Residential Developments", href: "/projects/residential" },
          { label: "Commercial Sites", href: "/projects/corporate" },
          { label: "Bridge Packages", href: "/projects/bridges" },
          { label: "Green Buildings", href: "/projects/green" },
          { label: "Housing Societies", href: "/projects/housing" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Saranya", href: "/about" },
          { label: "Architecture", href: "/architecture" },
          { label: "Careers", href: "/career" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
    social: [
      { href: "https://linkedin.com/company/saranyacivilconsulting", label: "LinkedIn" },
      { href: "https://facebook.com/saranyacivilconsulting", label: "Facebook" },
      { href: "https://instagram.com/saranyacivilconsulting", label: "Instagram" },
      { href: "https://twitter.com/saranyacivilconsulting", label: "X" },
      { href: "https://youtube.com/@saranyacivilconsulting", label: "YouTube" },
    ],
  },
} as const;

export const SITE_NAME = siteConfig.meta.name;
export const SITE_TAGLINE = siteConfig.meta.tagline;
export const SITE_DESCRIPTION = siteConfig.meta.description;
export const CONTACT_INFO = siteConfig.contact;
export const SOCIAL_LINKS = siteConfig.social;
export const STATS = siteConfig.stats;
export const SERVICES = siteConfig.services;
export const PROJECTS = siteConfig.projects;
export const TESTIMONIALS = siteConfig.testimonials;
export const CLIENTS = siteConfig.clients;
export const VALUES = siteConfig.values;
export const NAV_LINKS = siteConfig.navigation;
export const TEAM = siteConfig.team;
export const TIMELINE = siteConfig.timeline;
export const OPENINGS = siteConfig.openings;
