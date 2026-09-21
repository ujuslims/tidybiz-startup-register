import {
  Building2,
  FileText,
  Receipt,
  ShieldCheck,
  Stamp,
  Palette,
  PenTool,
  Globe,
  Compass,
  ClipboardCheck,
  RefreshCw,
  Users,
  Archive,
  HeartHandshake,
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
  category: "Registration" | "Compliance" | "Brand";
  /** True for services priced by a live estimator rather than fixed packages (e.g. annual returns). */
  hasEstimator?: boolean;
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
    slug: "pre-registration-advisory",
    category: "Registration",
    title: "Before You Register: Business Advisory",
    shortTitle: "Pre-Registration Advisory",
    tagline: "Think it through before you file anything with the CAC",
    summary:
      "Business plan input, market research and feasibility guidance before you register — including help understanding your options for accepting payments from customers abroad.",
    icon: Compass,
    startingPrice: "From consultation",
    timeline: "By consultation",
    metaTitle: "Business Plan & Pre-Registration Advisory in Nigeria — TidyBiz",
    metaDescription:
      "Before you register with the CAC: business plan input, market research, feasibility guidance and advice on accepting international payments for your Nigerian business.",
    heroPoints: [
      "Business plan & feasibility input",
      "Market research grounded in the Nigerian context",
      "Guidance on accepting payments from customers abroad",
    ],
    benefits: [
      {
        title: "Register the right structure the first time",
        description:
          "Choosing between a Business Name and a Limited Company upfront avoids an expensive, time-consuming conversion later.",
      },
      {
        title: "Know your market before you commit",
        description: "Light feasibility and market research grounded in what actually sells in Nigeria today.",
      },
      {
        title: "Understand your payment options",
        description:
          "If you're building an online business, consulting practice or training service, we'll walk you through your options for accepting payment from customers outside Nigeria and what fits your situation — not a guarantee of any specific platform, since eligibility and onboarding rules sit entirely with the providers themselves.",
      },
      {
        title: "A plan you can actually use",
        description: "Practical, written guidance — not a generic template — built around what you're setting out to do.",
      },
    ],
    process: [
      { title: "Consultation", description: "We start with a conversation about what you're building and who it's for." },
      { title: "Research & feasibility", description: "We ground your idea in real Nigerian market conditions." },
      { title: "Structure recommendation", description: "We advise Business Name vs. Limited Company based on your goals, not a default." },
      { title: "Payment options walkthrough", description: "If relevant, we cover what's realistically available for collecting payment from abroad." },
    ],
    packages: [
      {
        name: "Advisory Session",
        price: "By consultation",
        timeline: "Scheduled call",
        features: ["Business plan input", "Structure recommendation", "Light market research"],
      },
      {
        name: "Advisory + Payments",
        price: "By consultation",
        timeline: "Scheduled call",
        features: ["Everything in Advisory Session", "International payment options walkthrough", "Follow-up notes in writing"],
        highlight: true,
      },
    ],
    faqs: [
      {
        q: "Will you get me set up on PayPal or Stripe?",
        a: "We advise on your options and what's realistically available for your situation — we don't promise a specific platform, since account eligibility and onboarding are controlled entirely by the payment providers themselves, not by TidyBiz.",
      },
      {
        q: "Do I need this before I register?",
        a: "It's optional, but it's the cheapest point to get your structure right — before a CAC filing fee is spent on the wrong entity type.",
      },
      {
        q: "I've already registered — is this still useful?",
        a: "Yes, particularly the payments conversation. Many founders come to us after registering, once they hit a real client who wants to pay from abroad.",
      },
    ],
  },
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
    slug: "incorporated-trustees-ngo",
    category: "Registration",
    title: "Incorporated Trustees (NGO) Registration",
    shortTitle: "NGO / Incorporated Trustees",
    tagline: "Register a foundation, association or religious body with the CAC",
    summary:
      "Incorporated Trustees registration for NGOs, foundations, religious bodies and community associations — a distinct CAC pathway from company or business name registration.",
    icon: HeartHandshake,
    startingPrice: "₦60,000",
    timeline: "3–6 weeks",
    metaTitle: "Incorporated Trustees (NGO) Registration Nigeria — TidyBiz",
    metaDescription:
      "Register your NGO, foundation, association or religious organisation as an Incorporated Trustee with the CAC. Constitution drafting, publication and certificate handled end to end.",
    heroPoints: [
      "Constitution drafted to CAC requirements",
      "Newspaper publication handled for you",
      "Certificate of incorporation as Trustees",
    ],
    benefits: [
      { title: "Legal recognition", description: "An Incorporated Trustees certificate lets your organisation open bank accounts, receive grants and sign agreements in its own name." },
      { title: "Grant and donor ready", description: "Most institutional donors and grant bodies require proof of incorporation before releasing funds." },
      { title: "Built for your mission", description: "Different from a company or business name — we register the structure that actually fits an NGO, foundation or association." },
      { title: "Ongoing good standing", description: "Like companies, Incorporated Trustees must file annual returns — we can keep you current under our Stay Compliant services." },
    ],
    process: [
      { title: "Name & objects", description: "We confirm your proposed name and clarify your organisation's objects for CAC approval." },
      { title: "Constitution drafting", description: "We draft your constitution to CAC requirements, covering governance, trustees and objects." },
      { title: "Publication", description: "We handle the required newspaper publication of your intent to incorporate." },
      { title: "Filing & certificate", description: "We file with the CAC and deliver your certificate of incorporation." },
    ],
    packages: [
      { name: "Standard NGO", price: "₦60,000", timeline: "3–6 weeks", features: ["Name search", "Constitution drafting", "Newspaper publication", "Certificate of incorporation"] },
      { name: "NGO + Compliance Start", price: "₦95,000", timeline: "3–6 weeks", features: ["Everything in Standard", "First-year annual return guidance", "Trustee changes support"], highlight: true },
    ],
    faqs: [
      { q: "How is this different from company registration?", a: "Incorporated Trustees is a distinct CAC pathway for non-profit purposes — NGOs, foundations, religious and community bodies — with a constitution rather than a MEMART, and trustees rather than directors/shareholders." },
      { q: "How long does it take?", a: "Typically 3–6 weeks, largely driven by the mandatory newspaper publication period before filing can be completed." },
      { q: "Do NGOs file annual returns too?", a: "Yes — Incorporated Trustees must file annual returns with the CAC just like companies. We can handle this through our Stay Compliant services once you're registered." },
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
    slug: "annual-returns",
    category: "Compliance",
    hasEstimator: true,
    title: "CAC Annual Returns",
    shortTitle: "Annual Returns",
    tagline: "Clear what you owe — get an instant estimate before you call",
    summary:
      "Filing overdue or current-year CAC annual returns. Use the estimator below to see what you owe before speaking to anyone.",
    icon: ShieldCheck,
    startingPrice: "₦20,000/year",
    timeline: "5–10 working days",
    metaTitle: "CAC Annual Returns Nigeria | Instant Estimate — TidyBiz",
    metaDescription:
      "File overdue or current CAC annual returns. Get an instant estimate for what you owe by company size and years outstanding, then let TidyBiz handle the filing.",
    heroPoints: [
      "Instant estimate — no call needed to know what you owe",
      "Flat rate for 1–10 years outstanding",
      "We handle years 11+ with a manual review, not guesswork",
    ],
    benefits: [
      { title: "Know before you call", description: "Get a straight number for what you owe based on company size and years outstanding — no stress, no guessing." },
      { title: "Avoid delisting", description: "Companies that fail to file annual returns risk penalties and eventual striking off the CAC register." },
      { title: "Clean due diligence", description: "Investors and banks check your CAC status report before funding — keep it spotless." },
      { title: "No judgment, just a fix", description: "Whether it's 1 year or 10, we've handled it before. The goal is getting you current, not dwelling on how you got behind." },
    ],
    process: [
      { title: "Estimate", description: "Use the calculator to see your indicative total by company size and years owed." },
      { title: "Document check", description: "Big companies provide audited accounts; small companies provide a statement of account." },
      { title: "Filing", description: "We file all outstanding years with the CAC and settle statutory fees on your behalf." },
      { title: "Confirmation", description: "You receive confirmation and an updated CAC status report." },
    ],
    packages: [
      { name: "Small company", price: "₦20,000/year", timeline: "5–10 working days", features: ["Share capital ≤ ₦1m", "Statement of account required", "1–10 years, flat rate"] },
      { name: "Big company", price: "₦30,000/year", timeline: "5–10 working days", features: ["Share capital > ₦1m", "Audited accounts required", "1–10 years, flat rate"], highlight: true },
      { name: "11+ years outstanding", price: "Custom quote", timeline: "By review", features: ["Manual case review", "Complex or long-outstanding filings", "Quoted after a quick look at your history"] },
    ],
    faqs: [
      { q: "How is the estimate calculated?", a: "It's a flat rate per year owed — ₦20,000/year for a small company (share capital ≤ ₦1m) and ₦30,000/year for a big company (share capital > ₦1m) — for 1 to 10 years outstanding." },
      { q: "What if I owe more than 10 years?", a: "We move to a manual quote rather than multiplying the flat rate indefinitely — long-outstanding cases often carry extra complexity worth reviewing properly." },
      { q: "Does the estimate include CAC's own penalties?", a: "The estimate reflects TidyBiz's service fee. CAC's own statutory penalties are confirmed separately once we pull your filing history — we'll never surprise you with an unexplained total." },
      { q: "What documents do I need?", a: "Big companies need audited accounts; small companies need a statement of account, for each outstanding year." },
    ],
  },
  {
    slug: "status-report",
    category: "Compliance",
    title: "CAC Status Report",
    shortTitle: "Status Report",
    tagline: "An official snapshot of your company's standing with the CAC",
    summary: "A current CAC status report — often requested by banks, investors or partners doing due diligence.",
    icon: ClipboardCheck,
    startingPrice: "₦20,000",
    timeline: "3–5 working days",
    metaTitle: "CAC Status Report Nigeria — TidyBiz",
    metaDescription: "Get an official CAC status report for your Nigerian company or business name, starting at ₦20,000.",
    heroPoints: ["Official CAC-issued document", "Confirms directors, shareholding and standing", "Common requirement for banks and investors"],
    benefits: [
      { title: "Due diligence ready", description: "Hand over an official document rather than a verbal assurance." },
      { title: "Fast turnaround", description: "Typically ready within a few working days." },
      { title: "No surprises", description: "If your status reveals outstanding filings, we'll tell you before you're asked to explain it to a bank." },
    ],
    process: [
      { title: "Request", description: "We pull your current status directly from the CAC register." },
      { title: "Review", description: "We flag anything that needs attention before you share the report." },
      { title: "Delivery", description: "You receive the official report, digitally." },
    ],
    packages: [
      { name: "Status Report", price: "₦20,000", timeline: "3–5 working days", features: ["Official CAC status report", "Review of any flagged issues"] },
    ],
    faqs: [
      { q: "What pushes the price above ₦20,000?", a: "The base fee covers a standard company or business name. More complex historical searches may cost more — we'll always confirm before proceeding." },
      { q: "Who typically needs this?", a: "Banks opening corporate accounts, investors during due diligence, and buyers in an acquisition." },
    ],
  },
  {
    slug: "status-change",
    category: "Compliance",
    title: "CAC Status Change (Inactive → Active)",
    shortTitle: "Status Change",
    tagline: "Bring your company or business name back to active status",
    summary: "Restore your CAC record from inactive to active status so you can transact and file normally again.",
    icon: RefreshCw,
    startingPrice: "₦20,000",
    timeline: "5–10 working days",
    metaTitle: "CAC Status Change: Inactive to Active — TidyBiz",
    metaDescription: "Restore your Nigerian company or business name from inactive to active status with the CAC, starting at ₦20,000.",
    heroPoints: ["Restores your ability to transact and file", "Handled end to end with the CAC", "Often paired with outstanding annual returns"],
    benefits: [
      { title: "Reopen the door", description: "An inactive status blocks banking, contracts and further CAC filings until resolved." },
      { title: "Handled together with returns", description: "Status changes are frequently tied to unfiled annual returns — we handle both in one engagement where needed." },
    ],
    process: [
      { title: "Diagnosis", description: "We confirm why the record shows inactive and what's needed to reverse it." },
      { title: "Filing", description: "We file the required change with the CAC." },
      { title: "Confirmation", description: "You receive confirmation once your status reads active again." },
    ],
    packages: [
      { name: "Status Change", price: "₦20,000", timeline: "5–10 working days", features: ["Diagnosis", "CAC filing", "Confirmation of active status"] },
    ],
    faqs: [
      { q: "What pushes the price above ₦20,000?", a: "If outstanding annual returns are also required to reactivate your record, those are quoted separately using the annual returns estimator." },
      { q: "Why did my company go inactive?", a: "Most commonly, unfiled annual returns over an extended period. We'll confirm the exact reason once we pull your record." },
    ],
  },
  {
    slug: "director-shareholder-changes",
    category: "Compliance",
    title: "Director & Shareholder Changes",
    shortTitle: "Director/Shareholder Changes",
    tagline: "Add, remove or update directors and shareholders correctly",
    summary: "Post-incorporation changes to your company's directors or shareholders, filed correctly with the CAC.",
    icon: Users,
    startingPrice: "Price on request",
    timeline: "5–10 working days",
    metaTitle: "Director & Shareholder Changes Nigeria — TidyBiz",
    metaDescription: "Add or remove directors and shareholders, or update shareholding, with correct CAC filing handled by TidyBiz.",
    heroPoints: ["Addition or removal of directors", "Addition or removal of shareholders", "Filed correctly the first time"],
    benefits: [
      { title: "Avoid disputes later", description: "Incorrectly filed changes cause real problems during due diligence or disputes — get it right the first time." },
      { title: "One point of contact", description: "We handle the CAC filing so you're not navigating the portal yourself." },
    ],
    process: [
      { title: "Details collection", description: "We collect the required resolutions, IDs and consent documents." },
      { title: "Filing", description: "We file the change with the CAC." },
      { title: "Confirmation", description: "You receive updated CAC records reflecting the change." },
    ],
    packages: [
      { name: "Director/Shareholder Change", price: "Price on request", timeline: "5–10 working days", features: ["Consultation on required documents", "CAC filing", "Updated company records"] },
    ],
    faqs: [
      { q: "Is this priced flat or by company size?", a: "This is quoted per transaction after a quick look at what's changing — get in touch and we'll confirm before any work starts." },
    ],
  },
  {
    slug: "business-cessation",
    category: "Compliance",
    title: "Closing a Business (Cessation)",
    shortTitle: "Business Closure",
    tagline: "Formally close a business name or wind down a company with the CAC",
    summary: "The mirror of registration — formally ceasing a business name or beginning voluntary striking-off for a company.",
    icon: Archive,
    startingPrice: "Price on request",
    timeline: "Varies by entity type",
    metaTitle: "Close a Business in Nigeria (CAC Cessation) — TidyBiz",
    metaDescription: "Formally close a Nigerian business name or begin voluntary company striking-off with the CAC, handled by TidyBiz.",
    heroPoints: ["Formal closure, not just walking away", "Avoids future penalties on a business you've stopped running", "Handled end to end with the CAC"],
    benefits: [
      { title: "Stop the clock", description: "An unclosed business name or company keeps accruing annual return obligations — closing it formally stops that." },
      { title: "Clean exit", description: "A properly closed record protects you if you register a new business later." },
    ],
    process: [
      { title: "Status check", description: "We confirm your current standing and any filings needed before closure can proceed." },
      { title: "Filing", description: "We file the cessation or striking-off application with the CAC." },
      { title: "Confirmation", description: "You receive confirmation once the closure is on record." },
    ],
    packages: [
      { name: "Business Closure", price: "Price on request", timeline: "Varies by entity type", features: ["Status check", "CAC filing", "Confirmation of closure"] },
    ],
    faqs: [
      { q: "Do I need to be up to date on annual returns first?", a: "Usually yes — outstanding returns typically need resolving before a clean closure. We'll confirm this during the status check." },
    ],
  },
  {
    slug: "brand-identity",
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
export const complianceServices = services.filter((s) => s.category === "Compliance");
export const brandServices = services.filter((s) => s.category === "Brand");

const CATEGORY_PATHS: Record<Service["category"], string> = {
  Registration: "/registration",
  Compliance: "/compliance",
  Brand: "/branding",
};

const CATEGORY_LABELS: Record<Service["category"], string> = {
  Registration: "Registration",
  Compliance: "Stay Compliant",
  Brand: "Branding",
};

/** Pillar base path for a category — the three-pillar site structure. */
export const categoryPath = (category: Service["category"]) => CATEGORY_PATHS[category];

/** Display label for a category, used in breadcrumbs and nav. */
export const categoryLabel = (category: Service["category"]) => CATEGORY_LABELS[category];

/** Canonical URL for a single service, nested under its pillar. */
export const servicePath = (service: Pick<Service, "slug" | "category">) =>
  `${categoryPath(service.category)}/${service.slug}`;
