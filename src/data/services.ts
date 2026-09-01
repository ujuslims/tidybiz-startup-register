import {
  Building2,
  FileText,
  Receipt,
  ShieldCheck,
  Stamp,
  Palette,
  PenTool,
  Globe,
  type LucideIcon,
} from "lucide-react";

export type ServicePackage = {
  name: string;
  price: string;
  timeline: string;
  features: string[];
  highlight?: boolean;
};

export type Service = {
  slug: string;
  category: "Registration" | "Brand";
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  icon: LucideIcon;
  startingPrice: string;
  timeline: string;
  metaTitle: string;
  metaDescription: string;
  heroPoints: string[];
  benefits: { title: string; description: string }[];
  process: { title: string; description: string }[];
  packages: ServicePackage[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "company-registration",
    category: "Registration",
    title: "Company Registration (LTD) in Nigeria",
    shortTitle: "Company Registration",
    tagline: "Incorporate a private limited company with the CAC",
    summary:
      "Full incorporation of a private limited liability company (LTD) with the Corporate Affairs Commission, including MEMART, share structure and certificate.",
    icon: Building2,
    startingPrice: "₦75,000",
    timeline: "5–10 working days",
    metaTitle: "Company Registration in Nigeria (LTD) | CAC Incorporation — TidyBiz",
    metaDescription:
      "Register a Nigerian limited liability company with the CAC. MEMART, share capital structure, certificate of incorporation and TIN — handled end to end by TidyBiz.",
    heroPoints: [
      "CAC-certified filing agents",
      "MEMART and share structure drafted for you",
      "Certificate of incorporation + status report",
    ],
    benefits: [
      {
        title: "Limited liability protection",
        description:
          "Separate your personal assets from business risk — a legal requirement for raising investment in Nigeria.",
      },
      {
        title: "Corporate bank accounts",
        description:
          "An LTD unlocks corporate accounts with Nigerian banks, payment gateways and fintech partners.",
      },
      {
        title: "Investor and grant ready",
        description:
          "Most VCs, accelerators and government grants require an incorporated entity with a clean share register.",
      },
      {
        title: "No guesswork on filings",
        description:
          "We prepare the CAC forms, resolve name rejections and follow up until your certificate is issued.",
      },
    ],
    process: [
      { title: "Name search", description: "We run a free CAC availability search on up to two proposed names." },
      { title: "Document prep", description: "We draft MEMART, share allotment and collect director/shareholder IDs." },
      { title: "CAC filing", description: "We file on the CAC portal, pay statutory fees and track the application." },
      { title: "Handover", description: "You receive your certificate, status report, MEMART and TIN guidance." },
    ],
    packages: [
      {
        name: "Starter LTD",
        price: "₦75,000",
        timeline: "7–10 working days",
        features: ["Name search & reservation", "MEMART drafting", "Up to 2 directors", "₦1m share capital", "Certificate of incorporation"],
      },
      {
        name: "Growth LTD",
        price: "₦120,000",
        timeline: "5–7 working days",
        features: ["Everything in Starter", "Up to 5 directors/shareholders", "TIN registration", "Company seal & share certificates", "Bank account support"],
        highlight: true,
      },
      {
        name: "Express LTD",
        price: "₦180,000",
        timeline: "48–72 hours",
        features: ["Everything in Growth", "Priority CAC processing", "Dedicated account manager", "Post-incorporation compliance calendar"],
      },
    ],
    faqs: [
      { q: "How long does CAC company registration take?", a: "Standard incorporation takes 5–10 working days once documents are complete. Our express option targets 48–72 hours, subject to CAC portal availability." },
      { q: "What is the minimum share capital?", a: "₦100,000 is the common minimum for a private company, though some regulated sectors and expatriate quotas require higher capital. We advise based on your sector." },
      { q: "Do I need a Nigerian director?", a: "No. Foreign nationals can own and direct a Nigerian company, but a registered Nigerian address is required and foreign-owned firms must meet a ₦100m share capital threshold." },
      { q: "What documents do I need?", a: "Valid ID for each director and shareholder, passport photographs, a residential address, and the proposed company name and objects." },
    ],
  },
  {
    slug: "business-name-registration",
    category: "Registration",
    title: "Business Name Registration in Nigeria",
    shortTitle: "Business Name Registration",
    tagline: "The fastest legal route to trading under your own name",
    summary:
      "Register a sole proprietorship or enterprise business name with the CAC and start trading legally, with a certificate in days rather than weeks.",
    icon: FileText,
    startingPrice: "₦25,000",
    timeline: "3–5 working days",
    metaTitle: "Business Name Registration Nigeria | CAC Enterprise Filing — TidyBiz",
    metaDescription:
      "Register your business name with the CAC in days. Name search, Form BN1 filing and certificate for Nigerian sole proprietors and enterprises. From ₦25,000.",
    heroPoints: ["Free CAC name availability search", "Certificate in 3–5 working days", "Perfect for solo founders and SMEs"],
    benefits: [
      { title: "Trade legally", description: "Open a business bank account, sign contracts and invoice clients under your registered name." },
      { title: "Low cost entry", description: "The most affordable way to formalise a Nigerian business while you validate your idea." },
      { title: "Name protection", description: "Stop another CAC registrant from claiming the same business name in Nigeria." },
      { title: "Marketplace access", description: "Required by most Nigerian payment processors, marketplaces and B2B buyers." },
    ],
    process: [
      { title: "Name search", description: "We confirm your preferred name is available and compliant with CAC naming rules." },
      { title: "Details collection", description: "We collect proprietor ID, address, signature and the nature of business." },
      { title: "Filing", description: "We submit Form BN1 on the CAC portal and pay statutory fees." },
      { title: "Certificate", description: "Your certificate and status report are delivered digitally." },
    ],
    packages: [
      { name: "Solo", price: "₦25,000", timeline: "5 working days", features: ["Name search", "Single proprietor", "BN1 filing", "Digital certificate"] },
      { name: "Partners", price: "₦40,000", timeline: "5 working days", features: ["Name search", "Up to 4 proprietors", "BN1 filing", "Simple partnership agreement"], highlight: true },
      { name: "Express", price: "₦55,000", timeline: "24–48 hours", features: ["Everything in Partners", "Priority processing", "Same-day submission", "Bank account letter"] },
    ],
    faqs: [
      { q: "Business name or limited company?", a: "A business name is faster and cheaper but offers no limited liability. If you plan to raise funding, hire at scale or sign large contracts, incorporate an LTD instead." },
      { q: "How long is registration valid?", a: "A CAC business name registration does not expire, but you must file an annual return to stay in good standing." },
      { q: "Can I upgrade later?", a: "Yes. Many founders start with a business name and incorporate an LTD later — we handle the transition and re-branding." },
    ],
  },
  {
    slug: "tax-registration",
    category: "Registration",
    title: "Tax Registration (TIN, VAT & FIRS)",
    shortTitle: "Tax Registration",
    tagline: "Get tax-ready with FIRS from day one",
    summary:
      "Tax Identification Number, VAT registration and FIRS onboarding so your business can invoice corporates, bid for contracts and stay compliant.",
    icon: Receipt,
    startingPrice: "₦35,000",
    timeline: "3–7 working days",
    metaTitle: "TIN & VAT Registration Nigeria | FIRS Tax Setup — TidyBiz",
    metaDescription:
      "Get your TIN, VAT registration and FIRS tax clearance setup for your Nigerian business. Invoice corporates and bid for contracts compliantly. From ₦35,000.",
    heroPoints: ["TIN issued via FIRS/JTB", "VAT registration and filing setup", "Tax clearance guidance"],
    benefits: [
      { title: "Invoice big clients", description: "Corporates and government buyers require a valid TIN and VAT number before paying invoices." },
      { title: "Avoid penalties", description: "Late VAT and company income tax filings attract FIRS penalties and interest — we set your calendar." },
      { title: "Bank and loan ready", description: "Banks request tax documents for corporate accounts, POS terminals and credit facilities." },
      { title: "Contract eligibility", description: "Tax clearance certificates are mandatory for most tenders in Nigeria." },
    ],
    process: [
      { title: "Assessment", description: "We review your entity type, turnover and sector to determine what you must register for." },
      { title: "TIN application", description: "We apply through the FIRS/JTB platform using your CAC documents." },
      { title: "VAT enrolment", description: "We enrol you for VAT and set up your filing profile." },
      { title: "Compliance plan", description: "You receive a filing calendar and guidance on monthly and annual obligations." },
    ],
    packages: [
      { name: "TIN Only", price: "₦35,000", timeline: "3–5 working days", features: ["TIN application", "FIRS profile setup", "Document guidance"] },
      { name: "Tax Ready", price: "₦65,000", timeline: "5–7 working days", features: ["TIN + VAT registration", "FIRS portal onboarding", "Filing calendar", "First VAT filing walkthrough"], highlight: true },
      { name: "Tax Clearance", price: "₦120,000", timeline: "2–4 weeks", features: ["Everything in Tax Ready", "Tax clearance certificate support", "Annual return coordination"] },
    ],
    faqs: [
      { q: "Is a TIN automatic after CAC registration?", a: "TINs are often generated alongside incorporation, but activation with FIRS still requires a separate step before you can file or obtain clearance." },
      { q: "Do small businesses pay VAT?", a: "Businesses below the statutory turnover threshold are exempt from charging VAT, but many still register voluntarily so corporate clients can transact with them." },
      { q: "What if my business is dormant?", a: "Dormant companies must still file nil returns. We can handle filings on your behalf." },
    ],
  },
  {
    slug: "business-compliance",
    category: "Registration",
    title: "Business Compliance & Annual Returns",
    shortTitle: "Business Compliance",
    tagline: "Stay in good standing with the CAC all year round",
    summary:
      "Annual returns, post-incorporation changes, statutory registers and compliance monitoring so your company never falls out of good standing.",
    icon: ShieldCheck,
    startingPrice: "₦50,000",
    timeline: "Ongoing / 5–10 days per filing",
    metaTitle: "CAC Annual Returns & Business Compliance Nigeria — TidyBiz",
    metaDescription:
      "Keep your Nigerian company compliant: CAC annual returns, director changes, share transfers, statutory registers and a managed compliance calendar. From ₦50,000.",
    heroPoints: ["CAC annual returns filed on time", "Post-incorporation changes handled", "Managed compliance calendar"],
    benefits: [
      { title: "Avoid delisting", description: "Companies that fail to file annual returns risk penalties and eventual striking off the CAC register." },
      { title: "Clean due diligence", description: "Investors and banks check your CAC status report before funding — keep it spotless." },
      { title: "Change with confidence", description: "Add directors, change addresses, increase share capital or transfer shares correctly." },
      { title: "One less thing to track", description: "We monitor deadlines and remind you before anything is due." },
    ],
    process: [
      { title: "Compliance audit", description: "We pull your CAC status report and identify outstanding filings." },
      { title: "Remediation", description: "We file overdue annual returns and settle penalties where applicable." },
      { title: "Updates", description: "We process any director, address, share or object changes you need." },
      { title: "Monitoring", description: "We maintain your registers and alert you ahead of each deadline." },
    ],
    packages: [
      { name: "Annual Return", price: "₦50,000", timeline: "5–10 working days", features: ["One financial year filing", "CAC status report", "Penalty computation"] },
      { name: "Compliance Care", price: "₦180,000/yr", timeline: "Ongoing", features: ["Annual returns filed", "2 post-incorporation changes", "Statutory registers maintained", "Deadline monitoring"], highlight: true },
      { name: "Corporate Secretary", price: "₦350,000/yr", timeline: "Ongoing", features: ["Everything in Compliance Care", "Board resolutions drafted", "Unlimited CAC changes", "Quarterly compliance review"] },
    ],
    faqs: [
      { q: "When are CAC annual returns due?", a: "Companies must file within 42 days of their annual general meeting; business names file by 30 June each year after the first." },
      { q: "What happens if I never filed?", a: "Penalties accrue per year outstanding. We compute the total, file all outstanding years and restore your good standing." },
      { q: "Can you act as our company secretary?", a: "Yes — our Corporate Secretary package covers resolutions, registers and all CAC correspondence." },
    ],
  },
  {
    slug: "trademark-registration",
    category: "Registration",
    title: "Trademark Registration in Nigeria",
    shortTitle: "Trademark Registration",
    tagline: "Own your name, logo and slogan legally",
    summary:
      "Search, file and secure your trademark with the Nigerian Trademarks Registry so competitors cannot trade on the brand you built.",
    icon: Stamp,
    startingPrice: "₦120,000",
    timeline: "9–18 months to certificate",
    metaTitle: "Trademark Registration Nigeria | Protect Your Brand — TidyBiz",
    metaDescription:
      "Register your trademark in Nigeria: availability search, class selection, filing with the Trademarks Registry, acceptance and certificate. From ₦120,000.",
    heroPoints: ["Comprehensive availability search", "Correct Nice class selection", "Acceptance letter within weeks"],
    benefits: [
      { title: "Exclusive rights", description: "A registered mark gives you exclusive nationwide rights to your name and logo in your class." },
      { title: "Enforceable protection", description: "Take action against copycats, counterfeiters and infringing domain or social handles." },
      { title: "A sellable asset", description: "Trademarks are intangible assets that add to valuation during fundraising or acquisition." },
      { title: "Platform takedowns", description: "Marketplaces and social platforms act far faster on complaints backed by a registration." },
    ],
    process: [
      { title: "Search", description: "We search the registry for conflicting marks and advise on registrability." },
      { title: "Class selection", description: "We map your products and services to the correct Nice classification classes." },
      { title: "Filing", description: "We file the application and secure your acknowledgement and acceptance letter." },
      { title: "Publication & certificate", description: "Your mark is published in the trademark journal; the certificate follows the opposition window." },
    ],
    packages: [
      { name: "Single Class", price: "₦120,000", timeline: "9–18 months", features: ["Availability search", "One class filing", "Acceptance letter", "Certificate on issuance"] },
      { name: "Brand Shield", price: "₦210,000", timeline: "9–18 months", features: ["Two classes", "Word mark + logo device", "Search report", "Status monitoring"], highlight: true },
      { name: "Portfolio", price: "From ₦380,000", timeline: "9–18 months", features: ["Three or more classes", "Multi-brand filings", "Opposition advisory", "Renewal reminders"] },
    ],
    faqs: [
      { q: "How long does a Nigerian trademark last?", a: "Seven years from the filing date, renewable every 14 years thereafter." },
      { q: "Can I use ™ before registration?", a: "Yes. ™ can be used from filing; ® may only be used once the certificate is issued." },
      { q: "Do I need to register in multiple classes?", a: "Only if you trade across distinct categories — for example apparel and cosmetics. We advise during the search stage." },
    ],
  },
  {
    slug: "branding",
    category: "Brand",
    title: "Brand Identity & Strategy",
    shortTitle: "Branding",
    tagline: "A complete identity system, not just a pretty logo",
    summary:
      "Positioning, naming, visual identity, tone of voice and a documented brand guideline your team and partners can actually use.",
    icon: Palette,
    startingPrice: "₦180,000",
    timeline: "3–4 weeks",
    metaTitle: "Brand Identity & Strategy for Nigerian Startups — TidyBiz",
    metaDescription:
      "Full brand identity for Nigerian startups: positioning, visual system, tone of voice, social templates and a documented brand guideline. From ₦180,000.",
    heroPoints: ["Positioning and messaging workshop", "Complete visual identity system", "Brand guideline document"],
    benefits: [
      { title: "Instant credibility", description: "A coherent identity makes a two-person startup look like an established firm to Nigerian buyers." },
      { title: "Consistency at scale", description: "Guidelines mean every designer, printer and agency you hire produces on-brand work." },
      { title: "Premium pricing", description: "Strong brands defend higher prices instead of competing on discount alone." },
      { title: "Faster marketing", description: "Templates and assets remove the blank-page problem from every campaign." },
    ],
    process: [
      { title: "Discovery workshop", description: "We interrogate your audience, competitors and category to find a distinct position." },
      { title: "Strategy", description: "We define your positioning, personality, messaging pillars and tone of voice." },
      { title: "Identity design", description: "We design the logo system, colour, typography, patterns and imagery direction." },
      { title: "Guidelines & rollout", description: "We document everything and produce launch assets for social, print and web." },
    ],
    packages: [
      { name: "Brand Basics", price: "₦180,000", timeline: "2 weeks", features: ["Logo suite", "Colour & type system", "Social avatars & covers", "Mini guideline (8 pages)"] },
      { name: "Brand Complete", price: "₦380,000", timeline: "3–4 weeks", features: ["Everything in Basics", "Positioning & messaging", "Tone of voice", "Full guideline (25+ pages)", "Stationery & templates"], highlight: true },
      { name: "Brand & Launch", price: "₦650,000", timeline: "5–6 weeks", features: ["Everything in Complete", "Social media setup & 10 launch posts", "Pitch deck template", "Photography direction"] },
    ],
    faqs: [
      { q: "How is this different from logo design?", a: "Logo design delivers a mark. Branding defines what your company stands for, how it speaks, and how every touchpoint looks — the logo is one output." },
      { q: "Do we own the files?", a: "Yes. You receive full ownership and every source file on final payment." },
      { q: "How many revisions are included?", a: "Two rounds per stage. Additional rounds are billed transparently before any work starts." },
    ],
  },
  {
    slug: "logo-design",
    category: "Brand",
    title: "Logo Design",
    shortTitle: "Logo Design",
    tagline: "A distinctive mark, delivered in every format you need",
    summary:
      "Custom logo design with multiple concepts, responsive lockups and a complete export pack for print, web and social.",
    icon: PenTool,
    startingPrice: "₦80,000",
    timeline: "7–10 days",
    metaTitle: "Logo Design for Nigerian Businesses | Custom Marks — TidyBiz",
    metaDescription:
      "Custom logo design for Nigerian startups and SMEs: multiple concepts, responsive lockups, full file pack and usage guide. From ₦80,000, delivered in 7–10 days.",
    heroPoints: ["Original concepts, never templates", "Responsive lockups for every size", "Full source and export pack"],
    benefits: [
      { title: "Recognition", description: "A distinctive mark makes you memorable in a crowded Nigerian market." },
      { title: "Works everywhere", description: "Horizontal, stacked, icon-only and monochrome versions for signage, socials and invoices." },
      { title: "Print-ready", description: "Vector files scale from a favicon to a billboard without losing quality." },
      { title: "Fast turnaround", description: "First concepts within five working days of the brief." },
    ],
    process: [
      { title: "Brief", description: "We capture your audience, competitors, references and must-haves." },
      { title: "Concepts", description: "You receive distinct logo directions presented in real-world mockups." },
      { title: "Refinement", description: "We refine your chosen direction across two revision rounds." },
      { title: "Delivery", description: "You get SVG, AI, PNG, PDF and a one-page usage guide." },
    ],
    packages: [
      { name: "Essential", price: "₦80,000", timeline: "7 days", features: ["2 concepts", "1 revision round", "Primary lockup", "PNG + SVG files"] },
      { name: "Signature", price: "₦140,000", timeline: "10 days", features: ["4 concepts", "2 revision rounds", "Responsive lockups", "Colour & type pairing", "All source files"], highlight: true },
      { name: "Signature+", price: "₦220,000", timeline: "12 days", features: ["Everything in Signature", "Icon set", "Business card & letterhead", "Social profile pack", "Usage guide"] },
    ],
    faqs: [
      { q: "Will my logo be unique?", a: "Yes. Every mark is drawn from scratch for your brief — we never use stock marks or generators." },
      { q: "What files do I receive?", a: "Editable vectors (AI, SVG, PDF) plus PNG and JPG exports in light, dark and monochrome versions." },
      { q: "Can you redesign an existing logo?", a: "Absolutely. Refresh projects are quoted at the Essential or Signature tier depending on scope." },
    ],
  },
  {
    slug: "website-design",
    category: "Brand",
    title: "Website Design & Development",
    shortTitle: "Website Design",
    tagline: "A fast, mobile-first site that converts Nigerian buyers",
    summary:
      "Conversion-focused websites and landing pages — designed, built, optimised for search and launched on your own domain.",
    icon: Globe,
    startingPrice: "₦150,000",
    timeline: "2–4 weeks",
    metaTitle: "Website Design & Development Nigeria | Business Sites — TidyBiz",
    metaDescription:
      "Mobile-first, conversion-focused website design and development for Nigerian businesses. SEO setup, contact forms, domain and hosting guidance. From ₦150,000.",
    heroPoints: ["Mobile-first, fast-loading builds", "SEO and analytics configured", "Domain, hosting and handover included"],
    benefits: [
      { title: "Found on Google", description: "Clean structure, metadata and performance so customers searching your service can find you." },
      { title: "Built to convert", description: "Clear hierarchy, trust signals and prominent CTAs on every page — not just decoration." },
      { title: "Mobile first", description: "The overwhelming majority of Nigerian traffic is mobile; we design for that screen first." },
      { title: "Yours to keep", description: "You own the domain, the hosting account and the code." },
    ],
    process: [
      { title: "Scope & sitemap", description: "We agree goals, page structure and the content each page needs." },
      { title: "Design", description: "We design key pages on your brand system and review them with you." },
      { title: "Build", description: "We develop responsive pages, forms, integrations and analytics." },
      { title: "Launch", description: "We connect your domain, run pre-launch checks and hand over training." },
    ],
    packages: [
      { name: "Landing Page", price: "₦150,000", timeline: "1–2 weeks", features: ["Single high-converting page", "Contact/lead form", "Mobile responsive", "Basic SEO setup"] },
      { name: "Business Site", price: "₦350,000", timeline: "3 weeks", features: ["Up to 6 pages", "Blog or resources section", "SEO metadata per page", "Analytics & WhatsApp integration", "1 month support"], highlight: true },
      { name: "Commerce / Custom", price: "From ₦700,000", timeline: "4–6 weeks", features: ["Product catalogue or bookings", "Nigerian payment gateway", "Customer accounts", "Admin dashboard", "3 months support"] },
    ],
    faqs: [
      { q: "Do you provide the content?", a: "We write conversion copy on the Business Site tier and above. On Landing Page projects we work from your content with light editing." },
      { q: "Who pays for domain and hosting?", a: "You do, directly, so you always own them. Typical cost is ₦25,000–₦90,000 per year and we set everything up." },
      { q: "Can you integrate Paystack or Flutterwave?", a: "Yes — both are supported on Commerce projects, along with WhatsApp ordering and invoicing tools." },
    ],
  },
];

export const getService = (slug?: string) => services.find((s) => s.slug === slug);

export const registrationServices = services.filter((s) => s.category === "Registration");
export const brandServices = services.filter((s) => s.category === "Brand");

/** All services live under a single /services hub. */
export const categoryPath = (_category?: Service["category"]) => "/services";

/** Canonical URL for a single service page. */
export const servicePath = (service: Pick<Service, "slug">) => `/services/${service.slug}`;
