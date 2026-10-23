export const ROTATING_LINES = [
  "for your digital infrastructure",
  "for your enterprise security",
  "for the way your team works",
  "for your cloud performance",
  "for what comes next",
];

export const HERO_SLIDES = [
  {
    id: "slide-1",
    theme: "dark",
    bgColor: "#0f172a",
    title: "Strategically led IT architecture and managed delivery.",
    bgImage: "/images/contour/hero-workplace.jpg",
    previewImage: "/images/contour/hero-workplace.jpg",
    projectTitle: "Summit Logistics Hub",
    projectSubtitle: "Melbourne Enterprise Infrastructure",
    buttonTitle: "Read the case study",
    caseStudyId: "summit-logistics",
    taglinePrimary: "Architecting what's possible",
  },
  {
    id: "slide-2",
    theme: "olive",
    bgColor: "#444d34",
    title: "IT systems are strategic tools. We make them work harder.",
    bgImage: null,
    previewImage: "/images/contour/server-datacenter.jpg",
    projectTitle: "FinEdge Financial Group",
    projectSubtitle: "Bank-Grade Network & SOC",
    buttonTitle: "See how we've done it",
    caseStudyId: "finedge-capital",
    taglinePrimary: "Engineering reliable performance",
  },
  {
    id: "slide-3",
    theme: "navy",
    bgColor: "#142338",
    title: "One framework. Infinite possibilities.",
    bgImage: null,
    previewImage: "/images/contour/studio-lounge.jpg",
    projectTitle: "Our Approach",
    projectSubtitle: "Discovery · Architecture · Execution · Care",
    buttonTitle: "Explore our framework",
    caseStudyId: "our-approach",
    taglinePrimary: "One team watching over everything",
  },
];

export const PARTNER_LOGOS = [
  { name: "Microsoft 365", category: "Cloud & Productivity" },
  { name: "Google Workspace", category: "Collaboration" },
  { name: "Amazon Web Services", category: "Cloud Infrastructure" },
  { name: "Microsoft Azure", category: "Enterprise Cloud" },
  { name: "Fortinet", category: "Next-Gen Cybersecurity" },
  { name: "Ubiquiti UniFi", category: "Enterprise Wi-Fi & Switching" },
  { name: "Cisco Systems", category: "Enterprise Routing" },
  { name: "SentinelOne", category: "Autonomous Endpoint AI" },
  { name: "Datto", category: "Business Continuity & Backup" },
  { name: "Dell Technologies", category: "Enterprise Hardware" },
  { name: "Apple at Work", category: "Device Fleet" },
  { name: "Autotask PSA", category: "Service Management" },
];

export const TESTIMONIAL = {
  quote:
    "From the outset, Veritron took the time to understand who we are and what we wanted our technology systems to achieve. The result is an IT environment that runs smoothly, protects our sensitive data, and genuinely connects to how our team operates.",
  author: "Jason Rees",
  role: "Director of Operations ANZ",
  company: "Summit Logistics & Supply Chain",
};

export const INSIGHTS = [
  {
    id: 1,
    title: "Zero-Trust Architecture: Why perimeter firewalls are no longer enough in 2026.",
    category: "Cybersecurity",
    readTime: "5 min read",
    summary:
      "Modern hybrid work demands continuous authentication, least-privilege access, and micro-segmentation across all endpoints.",
  },
  {
    id: 2,
    title: "Zero-Downtime Cloud Migration: How to transition 500+ mailboxes over a single weekend.",
    category: "Cloud Migration",
    readTime: "4 min read",
    summary:
      "The exact blueprint for staged data synchronisation, cutover planning, and ensuring Monday morning is business as usual.",
  },
  {
    id: 3,
    title: "Workplace Wi-Fi 6 Design: Solving high-density interference in open-plan corporate offices.",
    category: "Networks",
    readTime: "6 min read",
    summary:
      "RF site survey fundamentals, channel planning, and placement strategies for seamless VoIP and video conferencing roaming.",
  },
];

export const CASE_STUDIES = [
  {
    id: "summit-logistics",
    title: "Summit Logistics Australia",
    theme: "bark",
    themeColor: "#9c846f",
    accentBg: "#8f7661",
    subtitle: "Elevating operational resilience across 12 distribution facilities.",
    heroImage: "/images/contour/hero-workplace.jpg",
    detailImage: "/images/contour/server-datacenter.jpg",
    client: "Summit Logistics Group",
    location: "Melbourne & Sydney, Australia",
    scope: "Cloud Migration, Redundant SD-WAN, 24/7 Managed IT",
    challenge:
      "Legacy on-premises Exchange servers and disjointed Wi-Fi across warehouses were causing frequent communication delays and inventory sync dropouts during peak shipping windows.",
    solution:
      "Veritron executed a zero-downtime migration to Microsoft 365, deployed enterprise Fortinet SD-WAN with 4G/5G failover, and installed high-throughput Ubiquiti Wi-Fi 6 access points across all 12 hubs.",
    results: [
      { metric: "99.99%", label: "System Uptime" },
      { metric: "<10 min", label: "Ticket Resolution" },
      { metric: "0", label: "Shipping Delays from IT" },
    ],
    quote:
      "Veritron overhauled our entire national communication network without disrupting a single dispatch schedule.",
  },
  {
    id: "finedge-capital",
    title: "FinEdge Financial Group",
    theme: "rust",
    themeColor: "#b24429",
    accentBg: "#9e3820",
    subtitle: "Bank-grade cybersecurity, ISO compliance & 24/7 SOC endpoint defense.",
    heroImage: "/images/contour/server-datacenter.jpg",
    detailImage: "/images/contour/studio-lounge.jpg",
    client: "FinEdge Wealth & Asset Management",
    location: "Collins Street, Melbourne VIC",
    scope: "SentinelOne EDR, Compliance Auditing, Cloud Vaults",
    challenge:
      "Strict Australian APRA CPS 234 standards required institutional-level endpoint isolation, continuous vulnerability management, and immutable off-site backups for sensitive financial portfolios.",
    solution:
      "Engineered an end-to-end Zero-Trust posture with SentinelOne autonomous AI EDR, Datto immutable air-gapped backups, and automated multi-factor biometric authentication.",
    results: [
      { metric: "100%", label: "APRA CPS 234 Compliance" },
      { metric: "0", label: "Security Breaches" },
      { metric: "15 min", label: "SOC Response SLA" },
    ],
    quote:
      "Our compliance audit went off without a hitch. Veritron provides the rigorous security our wealth clients expect.",
  },
  {
    id: "aura-health",
    title: "Aura Medical Diagnostic Network",
    theme: "navy",
    themeColor: "#182a42",
    accentBg: "#122033",
    subtitle: "High-density clinical Wi-Fi 6 & compliant medical data pipelines.",
    heroImage: "/images/contour/studio-lounge.jpg",
    detailImage: "/images/contour/hardware-lab.jpg",
    client: "Aura Health Clinics",
    location: "Victoria, Australia",
    scope: "Medical Network Isolation, Workstation Deployment",
    challenge:
      "High-resolution digital imaging machines required ultra-fast local throughput without interfering with telehealth streams and clinical patient record access.",
    solution:
      "Designed a segmented multi-VLAN architecture with 10Gbps switching, dedicated clinician Wi-Fi 6 channels, and compliant cloud storage for diagnostic imaging.",
    results: [
      { metric: "10 Gbps", label: "Backbone Speed" },
      { metric: "100%", label: "HIPAA/Privacy Compliant" },
      { metric: "65+", label: "Medical Devices Integrated" },
    ],
    quote:
      "Fast, dependable, and completely compliant. Our doctors never have to wait for high-res scans to load.",
  },
  {
    id: "studio-arch",
    title: "Studio Arch Architects HQ",
    theme: "amber",
    themeColor: "#c27526",
    accentBg: "#a8621a",
    subtitle: "High-performance CAD workstation fleet & 10Gbps studio network.",
    heroImage: "/images/contour/hardware-lab.jpg",
    detailImage: "/images/contour/hero-workplace.jpg",
    client: "Studio Arch Architects & Designers",
    location: "Southbank, Melbourne VIC",
    scope: "Hardware Procurement, Autodesk Cloud, Studio Relocation",
    challenge:
      "Studio relocation required seamless moving and re-commissioning of 40+ dual-monitor 3D rendering workstations, network storage, and firewall routing over a single weekend.",
    solution:
      "Managed end-to-end relocation: packaged, catalogued, transported, and reconnected all workstations with structured Cat6A cabling and 10Gbps NAS rendering storage.",
    results: [
      { metric: "48 hrs", label: "Total Relocation Time" },
      { metric: "40+", label: "Workstations Deployed" },
      { metric: "10x", label: "Faster Render Transfer" },
    ],
    quote:
      "We wrapped up at our old studio on Friday and began designing on Monday morning without missing a beat.",
  },
];

export const OFFICE_INFO = {
  address: "Melbourne & Surrounds, Victoria, Australia",
  phone: "+61 450 513 399",
  email: "info@veritron.com.au",
  hours: "Monday – Friday: 8:00am – 6:00pm AEST (24/7 Monitoring)",
};
