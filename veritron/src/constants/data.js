import {
  Server, Cloud, Mail, Wifi, HardDrive, Package, MousePointerClick, Truck,
  ShieldCheck, Phone, Handshake, Clock, Maximize2,
  Monitor, Headphones, BarChart3, Settings, Lock, Zap,
  RefreshCw, FileCheck, Globe, Database, Shield, Users,
  Wrench, Cpu, Building, ArrowRightLeft,
} from "lucide-react";

export const MEGA = [
  { icon: Server, t: "Managed IT", d: "Your whole IT department, on call", slug: "managed-it" },
  { icon: Cloud, t: "Cloud & Email", d: "Microsoft 365 & Google Workspace", slug: "cloud-email" },
  { icon: Wifi, t: "Network Solutions", d: "Wi-Fi, firewalls, VPN & remote access", slug: "networks" },
  { icon: HardDrive, t: "Hardware & Procurement", d: "Setup, upgrades & relocations", slug: "hardware-procurement" },
];

export const TOOLS = [
  "Microsoft 365", "Google Workspace", "Windows", "macOS", "Azure", "AWS",
  "SharePoint", "Fortinet", "Ubiquiti", "Cisco", "Datto", "SentinelOne", "Autotask",
];

export const SOLUTIONS = [
  {
    key: "managed",
    slug: "managed-it",
    label: "Managed IT",
    icon: Server,
    h: "One team watching over everything.",
    p: "We monitor, patch and maintain your systems around the clock — so problems get fixed before they reach your desk.",
    pts: ["24/7 monitoring & preventive maintenance", "Help desk with a named contact", "On-site & remote support", "Monthly reporting you can actually read"],
    heroImage: "/images/services/managed-it.jpg",
    longDescription: "Running a business is demanding enough without having to worry about whether your servers are patched, your backups are working, or your staff can actually log in on Monday morning. Veritron's Managed IT service gives you an entire IT department — monitoring, maintenance, help desk and on-site support — under a single, predictable monthly fee.\n\nWe proactively watch every endpoint, server and network device in your environment 24 hours a day. When something drifts out of spec, we fix it before it becomes a problem. When your team needs help, they reach a real person who already knows their setup — not a faceless ticket queue.",
    features: [
      { icon: Monitor, title: "24/7 Proactive Monitoring", description: "Every server, workstation and network device is watched around the clock. We catch failing drives, memory leaks and security anomalies before they become outages." },
      { icon: Headphones, title: "Dedicated Help Desk", description: "Your team gets a named contact who knows your environment. Average response under 15 minutes — from a real human, not an automated queue." },
      { icon: ShieldCheck, title: "Patch & Update Management", description: "OS patches, firmware updates and application upgrades are tested and deployed on a managed schedule so your systems stay secure without surprise reboots." },
      { icon: BarChart3, title: "Monthly Reporting", description: "Clear, jargon-free reports showing system health, tickets resolved, uptime stats and recommendations — so you always know where you stand." },
      { icon: Settings, title: "Preventive Maintenance", description: "Scheduled health checks, disk cleanups, performance tuning and policy reviews keep your infrastructure running at peak efficiency." },
      { icon: Users, title: "On-Site & Remote Support", description: "Need hands-on help? Our engineers come to you. Most issues are resolved remotely in minutes; on-site visits when it matters." },
    ],
    howItWorks: [
      { step: 1, title: "Discovery & Audit", description: "We map your entire IT environment — devices, software, users, pain points — and identify quick wins." },
      { step: 2, title: "Onboarding & Setup", description: "Our monitoring agents are deployed, backups verified, and your team is introduced to their dedicated contact." },
      { step: 3, title: "Ongoing Management", description: "24/7 monitoring kicks in. Patches are scheduled, tickets are handled, and monthly reports keep you informed." },
      { step: 4, title: "Continuous Improvement", description: "Quarterly reviews assess what's working, what's next, and how we can optimise your setup as your business grows." },
    ],
    benefits: [
      { title: "Predictable Costs", description: "One flat monthly fee replaces unpredictable break-fix bills. Budget with confidence." },
      { title: "Less Downtime", description: "Proactive monitoring and patching catch 93% of issues before they impact your team." },
      { title: "Focus on Your Business", description: "Stop being your own IT department. Let your people do what they were hired to do." },
    ],
    faqs: [
      { q: "What size business is Managed IT suitable for?", a: "We support businesses from 5 to 500+ users across single or multiple sites. The service scales with you — no rebuild required." },
      { q: "Do we need to replace our existing hardware?", a: "Not necessarily. During the discovery phase we audit your current setup and only recommend replacements where something is end-of-life or unreliable." },
      { q: "How fast is your response time?", a: "Our average first-response time is under 15 minutes during business hours. Critical issues receive immediate attention 24/7." },
      { q: "Can you support remote and hybrid workers?", a: "Absolutely. We manage VPN access, cloud desktops, and endpoint security regardless of where your team works." },
      { q: "Is there a lock-in contract?", a: "We offer month-to-month agreements after an initial 3-month onboarding period. We earn your business every month." },
    ],
  },
  {
    key: "cloud",
    slug: "cloud-email",
    label: "Cloud & Email",
    icon: Cloud,
    h: "Microsoft 365 & Google, done properly.",
    p: "Migrations without the downtime, mailboxes without the spam, and files that sync everywhere they should.",
    pts: ["Microsoft 365 & Google Workspace setup", "Zero-downtime email & data migration", "SharePoint, OneDrive & cloud backup", "Email security & spam protection"],
    heroImage: "/images/services/cloud-email.jpg",
    longDescription: "Cloud isn't just about moving files off a local server — it's about giving your team the tools to collaborate from anywhere, on any device, without worrying about data loss or security breaches. Veritron handles the full lifecycle: planning, migration, configuration, security and ongoing management.\n\nWhether you're moving from an on-premise Exchange server to Microsoft 365, setting up Google Workspace for the first time, or tightening security on an existing tenant, we make sure nothing falls through the cracks. Zero-downtime migrations, spam-free mailboxes, and files that sync exactly where they should.",
    features: [
      { icon: Cloud, title: "Microsoft 365 & Google Workspace", description: "Full setup and configuration of Exchange Online, Teams, SharePoint, OneDrive, Gmail, Drive and all collaboration tools." },
      { icon: RefreshCw, title: "Zero-Downtime Migration", description: "We migrate mailboxes, calendars, contacts and files overnight or over a weekend. Monday morning, everything just works." },
      { icon: Shield, title: "Email Security & Anti-Spam", description: "Advanced threat protection, phishing filters, DKIM/SPF/DMARC configuration and quarantine management keep your inbox clean." },
      { icon: Database, title: "Cloud Backup & Recovery", description: "Automatic daily backups of mailboxes, SharePoint sites and OneDrive files. Point-in-time recovery when you need it." },
      { icon: Lock, title: "Identity & Access Management", description: "Multi-factor authentication, conditional access policies and single sign-on configured properly from day one." },
      { icon: Globe, title: "Domain & DNS Management", description: "We handle MX records, autodiscover, SPF, DKIM and DMARC so your email deliverability is rock-solid." },
    ],
    howItWorks: [
      { step: 1, title: "Assessment", description: "We audit your current email and file storage — on-prem servers, legacy providers, or existing cloud tenants." },
      { step: 2, title: "Planning", description: "A detailed migration plan is built: what moves, when it moves, and how we'll validate everything works." },
      { step: 3, title: "Migration", description: "Data is synced in the background over days, then we cut over DNS records during a maintenance window. No lost emails." },
      { step: 4, title: "Optimisation", description: "Security policies are tightened, spam filters tuned, and your team is trained on the new tools." },
    ],
    benefits: [
      { title: "Work From Anywhere", description: "Your files, email and collaboration tools follow your team — office, home, or on the road." },
      { title: "Enterprise-Grade Security", description: "Advanced threat protection and MFA keep your data safe without slowing your team down." },
      { title: "No More Server Maintenance", description: "Eliminate the cost and hassle of maintaining on-premise mail servers and file shares." },
    ],
    faqs: [
      { q: "How long does a typical email migration take?", a: "Most migrations are completed over a single weekend. Larger environments (500+ mailboxes) may take 1–2 weeks of background sync before cutover." },
      { q: "Will we lose any emails during migration?", a: "No. We use a staged migration approach where data syncs continuously until cutover. No emails are lost." },
      { q: "Do you support hybrid environments?", a: "Yes. We can configure hybrid Exchange setups, or help you plan a phased move to full cloud." },
      { q: "Can you help with licensing?", a: "Absolutely. We advise on the right Microsoft 365 or Google Workspace plan for your needs and handle procurement." },
      { q: "What about compliance requirements?", a: "We configure retention policies, litigation hold, audit logging and data loss prevention to meet your regulatory needs." },
    ],
  },
  {
    key: "network",
    slug: "networks",
    label: "Networks",
    icon: Wifi,
    h: "Fast, secure, always connected.",
    p: "From the cabling in the wall to the firewall at the edge, your network stays quick and locked down.",
    pts: ["Office network & Wi-Fi deployment", "Router, firewall & VPN configuration", "Secure remote access", "Network optimisation & troubleshooting"],
    heroImage: "/images/services/networks.jpg",
    longDescription: "Your network is the backbone of everything your business does digitally. A slow or insecure network doesn't just frustrate your team — it costs you money and exposes you to risk. Veritron designs, deploys and manages networks that are fast, secure and built to grow with you.\n\nFrom structured cabling and enterprise Wi-Fi to next-gen firewalls and site-to-site VPNs, we handle the full stack. We partner with industry leaders like Fortinet, Ubiquiti and Cisco to deliver solutions that match your environment and budget.",
    features: [
      { icon: Wifi, title: "Enterprise Wi-Fi Deployment", description: "Site surveys, access point placement and configuration for seamless wireless coverage across your entire premises." },
      { icon: Shield, title: "Next-Gen Firewalls", description: "Fortinet, Cisco and Ubiquiti firewalls configured with intrusion prevention, content filtering and application control." },
      { icon: Lock, title: "VPN & Remote Access", description: "Secure site-to-site and client VPN tunnels so your team can work from anywhere without compromising security." },
      { icon: Zap, title: "Network Optimisation", description: "QoS policies, VLAN segmentation, bandwidth management and traffic analysis to eliminate bottlenecks." },
      { icon: Globe, title: "Structured Cabling", description: "Cat6/6A cabling, patch panel installation and cable management for new offices or retrofits." },
      { icon: Monitor, title: "Network Monitoring", description: "Real-time monitoring of switches, routers, access points and bandwidth usage with automated alerting." },
    ],
    howItWorks: [
      { step: 1, title: "Site Survey", description: "We visit your premises to assess cabling, coverage areas, device count and any existing infrastructure." },
      { step: 2, title: "Design & Proposal", description: "A network architecture is designed to match your needs — coverage maps, equipment lists and a clear quote." },
      { step: 3, title: "Installation", description: "Cabling, switches, access points, firewalls and VPNs are installed and configured with minimal disruption." },
      { step: 4, title: "Monitoring & Support", description: "Your network is added to our 24/7 monitoring platform. We manage firmware updates, security patches and performance tuning." },
    ],
    benefits: [
      { title: "Reliable Connectivity", description: "No more dead zones, dropped connections or 'the internet is slow' complaints from your team." },
      { title: "Locked-Down Security", description: "Firewalls, VLANs and access controls keep threats out and sensitive data compartmentalised." },
      { title: "Built to Scale", description: "Add users, devices or sites without redesigning your network. We build for where you're going, not just where you are." },
    ],
    faqs: [
      { q: "Do you handle cabling and physical installation?", a: "Yes. We manage everything from structured cabling and rack setup to access point mounting and patch panel termination." },
      { q: "Which firewall brands do you work with?", a: "We're certified partners with Fortinet, Ubiquiti and Cisco. We recommend the best fit based on your environment and budget." },
      { q: "Can you set up Wi-Fi for a multi-story building?", a: "Absolutely. We conduct RF site surveys to design optimal access point placement for full coverage across every floor." },
      { q: "Do you support VPN for remote workers?", a: "Yes. We configure client VPN, site-to-site tunnels and zero-trust network access for secure remote connectivity." },
      { q: "What happens if our internet goes down?", a: "We can configure failover links and SD-WAN to automatically switch to a backup connection, minimising downtime." },
    ],
  },
  {
    key: "hardware",
    slug: "hardware-procurement",
    label: "Hardware & Procurement",
    icon: HardDrive,
    h: "The right kit, set up right.",
    p: "We source, build, upgrade and relocate the gear your team runs on — and handle the licensing too.",
    pts: ["Computers, laptops, servers & peripherals", "SSD/RAM upgrades & device replacement", "Microsoft & software licensing", "Office relocations & equipment moves"],
    heroImage: "/images/services/hardware-procurement.jpg",
    longDescription: "Buying the wrong hardware wastes money. Buying the right hardware and setting it up badly wastes time. Veritron takes both problems off your hands — we source the best equipment for your needs at competitive prices, configure it to your standards, and deliver it ready to work.\n\nFrom laptops and desktops to servers and peripherals, we handle procurement, imaging, deployment, upgrades and end-of-life disposal. We also manage Microsoft and third-party software licensing so you're never over-paying or under-licensed.",
    features: [
      { icon: Cpu, title: "Device Procurement", description: "We source laptops, desktops, monitors, printers and servers from trusted vendors at competitive business pricing." },
      { icon: Wrench, title: "Setup & Configuration", description: "Every device is imaged, domain-joined, security-hardened and pre-configured with your apps before it reaches the user." },
      { icon: RefreshCw, title: "Upgrades & Repairs", description: "SSD upgrades, RAM expansions, battery replacements and component repairs to extend the life of your fleet." },
      { icon: FileCheck, title: "Software Licensing", description: "Microsoft 365, Windows, Adobe, antivirus and line-of-business app licensing — procured, tracked and renewed." },
      { icon: Building, title: "Office Relocations", description: "Moving offices? We handle the full IT relocation — packing, transport, reconnection and testing at your new site." },
      { icon: ArrowRightLeft, title: "Asset Lifecycle Management", description: "Track every device from procurement through to secure disposal. Warranty tracking, refresh scheduling and ITAD included." },
    ],
    howItWorks: [
      { step: 1, title: "Requirements Gathering", description: "We discuss what your team needs — roles, software requirements, budget and timeline." },
      { step: 2, title: "Sourcing & Quoting", description: "We source the best-fit hardware from our vendor network and present options with transparent pricing." },
      { step: 3, title: "Configuration & Deployment", description: "Devices are imaged, configured, labelled and deployed — either shipped to the user or installed on-site." },
      { step: 4, title: "Ongoing Management", description: "Warranty tracking, lifecycle planning and refresh recommendations keep your fleet current and productive." },
    ],
    benefits: [
      { title: "Save Time & Money", description: "Business pricing, bulk discounts and expert advice mean you get better gear for less." },
      { title: "Ready to Work", description: "Every device arrives configured, secured and ready to use. No first-day setup headaches." },
      { title: "Complete Lifecycle", description: "From procurement to secure disposal, we handle the full journey of every device in your fleet." },
    ],
    faqs: [
      { q: "Do you supply all brands of hardware?", a: "We work with all major vendors including Dell, HP, Lenovo, Apple and Microsoft Surface. We recommend the best fit for your needs." },
      { q: "Can you set up devices remotely?", a: "Yes. Using Windows Autopilot and Intune, we can ship devices directly to users and have them auto-configure on first boot." },
      { q: "Do you handle old equipment disposal?", a: "Absolutely. We provide certified data destruction and environmentally responsible recycling for all end-of-life devices." },
      { q: "Can you manage our software licenses?", a: "Yes. We track all your Microsoft, Adobe and third-party licences, handle renewals, and ensure you're compliant." },
      { q: "What about warranties and repairs?", a: "We track warranties for your entire fleet and coordinate repairs or replacements directly with the manufacturer." },
    ],
  },
];

export const STATS = [
  { to: 24, suffix: "/7", label: "Eyes on your systems", sub: "Round-the-clock monitoring" },
  { to: 15, prefix: "<", suffix: " min", label: "Average response", sub: "From a real human, not a queue" },
  { to: 99.9, suffix: "%", decimals: 1, label: "Uptime we aim for", sub: "Issues caught before you notice" },
  { to: 1, suffix: " team", label: "For everything", sub: "No vendor finger-pointing" },
];

export const WHY = [
  { icon: Handshake, t: "One team for everything", p: "Cloud, hardware, networks, email and procurement — handled by people who already know your setup." },
  { icon: Phone, t: "Real humans, plain English", p: "A named contact who explains things clearly and answers fast. No ticket number black holes." },
  { icon: Clock, t: "Problems caught early", p: "24/7 monitoring means we often fix things before you even notice. Fewer surprises, less downtime." },
  { icon: Maximize2, t: "Scales with you", p: "Two people or two hundred across multiple sites — the care grows with you, never a rebuild." },
];

export const PLANS = [
  { name: "Essentials", price: "49", tag: "Small teams getting set up", feats: ["Help desk & remote support", "Managed antivirus & updates", "Email & account support", "Business-hours coverage"], popular: false },
  { name: "Managed", price: "89", tag: "Growing businesses", feats: ["Everything in Essentials", "24/7 monitoring & patching", "Cloud backup & security", "Named account contact", "Monthly reporting"], popular: true },
  { name: "Complete", price: "—", tag: "Multi-site & compliance", feats: ["Everything in Managed", "On-site support included", "Procurement & licensing", "vCIO & IT roadmap", "Priority response SLA"], popular: false },
];

export const QUOTES = [
  { q: "They moved our whole office to Microsoft 365 over a weekend and nobody lost a minute on Monday.", n: "Oliver James", r: "Practice Manager · Dental", s: 5 },
  { q: "First IT company that actually explains things. We finally feel on top of our systems.", n: "Noah Thomas", r: "Director · Accounting Firm", s: 5 },
  { q: "Something breaks, one message and it's handled. That peace of mind is worth every cent.", n: "Charlotte Grace", r: "Operations · Construction", s: 5 },
];

export const FEED = [
  "Backup completed — main office", "Patch applied — 14 devices",
  "Phishing email quarantined", "Ticket resolved in 8 min",
  "Firewall rules updated", "New laptop provisioned & shipped",
  "Disk space alert cleared", "M365 licence optimised — saved $240/mo",
];
