import {
  Server, Cloud, Mail, Wifi, HardDrive, Package, MousePointerClick, Truck,
  ShieldCheck, Phone, Handshake, Clock, Maximize2,
} from "lucide-react";

export const MEGA = [
  { icon: Server, t: "Managed IT", d: "Your whole IT department, on call" },
  { icon: Cloud, t: "Cloud Solutions", d: "Microsoft 365 & Google Workspace" },
  { icon: Mail, t: "Business Email", d: "Secure, professional, spam-free" },
  { icon: Wifi, t: "Network Solutions", d: "Wi-Fi, firewalls, VPN & remote access" },
  { icon: HardDrive, t: "Hardware Services", d: "Setup, upgrades & relocations" },
  { icon: Package, t: "IT Procurement", d: "The right kit at the right price" },
  { icon: MousePointerClick, t: "Remote Support", d: "Help without the wait" },
  { icon: Truck, t: "On-Site Support", d: "Hands on deck when it counts" },
];

export const TOOLS = [
  "Microsoft 365", "Google Workspace", "Windows", "macOS", "Azure",
  "SharePoint", "Fortinet", "Ubiquiti", "Cisco", "Datto", "SentinelOne", "Autotask",
];

export const SOLUTIONS = [
  { key: "managed", label: "Managed IT", icon: Server, h: "One team watching over everything.", p: "We monitor, patch and maintain your systems around the clock — so problems get fixed before they reach your desk.", pts: ["24/7 monitoring & preventive maintenance", "Help desk with a named contact", "On-site & remote support", "Monthly reporting you can actually read"] },
  { key: "cloud", label: "Cloud & Email", icon: Cloud, h: "Microsoft 365 & Google, done properly.", p: "Migrations without the downtime, mailboxes without the spam, and files that sync everywhere they should.", pts: ["Microsoft 365 & Google Workspace setup", "Zero-downtime email & data migration", "SharePoint, OneDrive & cloud backup", "Email security & spam protection"] },
  { key: "network", label: "Networks", icon: Wifi, h: "Fast, secure, always connected.", p: "From the cabling in the wall to the firewall at the edge, your network stays quick and locked down.", pts: ["Office network & Wi-Fi deployment", "Router, firewall & VPN configuration", "Secure remote access", "Network optimisation & troubleshooting"] },
  { key: "hardware", label: "Hardware & Procurement", icon: HardDrive, h: "The right kit, set up right.", p: "We source, build, upgrade and relocate the gear your team runs on — and handle the licensing too.", pts: ["Computers, laptops, servers & peripherals", "SSD/RAM upgrades & device replacement", "Microsoft & software licensing", "Office relocations & equipment moves"] },
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
  { q: "They moved our whole office to Microsoft 365 over a weekend and nobody lost a minute on Monday.", n: "[Client name]", r: "Practice Manager · Dental", s: 5 },
  { q: "First IT company that actually explains things. We finally feel on top of our systems.", n: "[Client name]", r: "Director · Accounting Firm", s: 5 },
  { q: "Something breaks, one message and it's handled. That peace of mind is worth every cent.", n: "[Client name]", r: "Operations · Construction", s: 5 },
];

export const FEED = [
  "Backup completed — main office", "Patch applied — 14 devices",
  "Phishing email quarantined", "Ticket resolved in 8 min",
  "Firewall rules updated", "New laptop provisioned & shipped",
  "Disk space alert cleared", "M365 licence optimised — saved $240/mo",
];
