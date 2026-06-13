export const SITE_NAME = "StructuraPro Consultants";
export const SITE_TAGLINE = "Engineering Tomorrow's Infrastructure";
export const SITE_DESCRIPTION =
  "India's premier civil engineering consultancy specializing in quantity surveying, project monitoring, technical due diligence, and investment advisory since 2009.";

export const CONTACT_INFO = {
  address: "1204, Emaar Business Park, DLF Cyber City, Gurugram, Haryana 122002",
  phone: "+91 98100 12345",
  email: "info@structurapro.in",
  website: "www.structurapro.in",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM",
};

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/structurapro",
  facebook: "https://facebook.com/structurapro",
  instagram: "https://instagram.com/structurapro",
  twitter: "https://twitter.com/structurapro",
  youtube: "https://youtube.com/@structurapro",
};

export const STATS = [
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 500, prefix: "₹", suffix: "Cr+", label: "Project Value Managed" },
];

export const SERVICES = [
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
];

export const PROJECTS = [
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
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Sharma",
    designation: "MD, Prestige Group",
    content:
      "StructuraPro's attention to detail in quantity surveying saved us ₹45 Cr on our Bengaluru project. Their team's expertise is unmatched in the industry.",
    rating: 5,
    avatar: "/images/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "Priya Menon",
    designation: "VP Projects, Godrej Properties",
    content:
      "The technical due diligence report provided by StructuraPro was exhaustive and helped us avoid a potentially disastrous ₹200 Cr acquisition.",
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
      "StructuraPro's investment advisory helped us identify three high-yield opportunities we would have missed. They are true partners in our growth.",
    rating: 5,
    avatar: "/images/testimonial-4.jpg",
  },
];

export const CLIENTS = [
  "DLF", "Godrej", "Prestige", "Mahindra", "Lodha",
  "Oberoi", "Brigade", "Embassy", "Sobha", "Shapoorji",
  "L&T", "NHAI", "CPWD", "NBCC", "Tata Housing",
];

export const VALUES = [
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
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Quantity Surveying", href: "/services#quantity-surveying" },
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
      { label: "Corporate Offices", href: "/projects/corporate" },
      { label: "Highway Bridges", href: "/projects/bridges" },
      { label: "Green Buildings", href: "/projects/green" },
      { label: "Housing Societies", href: "/projects/housing" },
      { label: "Stadiums", href: "/projects/stadiums" },
    ],
  },
  { label: "Architecture", href: "/architecture" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export const TEAM = [
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
];

export const TIMELINE = [
  { year: "2009", event: "Founded in New Delhi with a team of 5 engineers" },
  { year: "2012", event: "Expanded to Mumbai and Bengaluru offices" },
  { year: "2015", event: "Crossed ₹100 Cr project value milestone" },
  { year: "2017", event: "Launched Investment Advisory vertical" },
  { year: "2019", event: "RICS accreditation received" },
  { year: "2021", event: "Expanded to 8 cities across India" },
  { year: "2023", event: "Crossed ₹500 Cr project value, 250+ projects" },
  { year: "2024", event: "Launched green building consultancy practice" },
];

export const OPENINGS = [
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
];
