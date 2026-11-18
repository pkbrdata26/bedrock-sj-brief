// Bedrock Data - San Jose CISO Dinner Brief - Nov 18, 2026
// Source of attendees: Google Sheet "Bedrock Data | Nov. 18th | SanJose Dinner" (Sheet1, pulled Nov 17, 2026).
// All profile facts come from public sources listed per person under `sources`.
// Anything not verifiable is left out or marked "not found". Photos are not used (initials only).
// Fields mirror the SF brief: name, title, company, pronoun, li, whoTheyAre, aiInitiatives, worldRightNow, painPoints.
// Extra fields: industry, employees (sheet band), ae (Bedrock AE per sheet), src (Sourced by Bedrock), status, verify, thin, sources.

const PEOPLE = [
  {
    "name": "Sumit Ohri",
    "title": "Global Chief Information Security Officer",
    "company": "Clearwater Analytics",
    "industry": "Software Development",
    "employees": "1,001–5,000",
    "li": "https://www.linkedin.com/in/sumitohri/",
    "ae": "",
    "src": false,
    "whoTheyAre": [
      "New in seat. Global CISO at Clearwater Analytics since July 2026, based in San Jose.",
      "Career: Sr. Security Consultant at Dell Force10 (2012–13) → CISO / CIO at HealthSource RI (2013–20) → CISO at GetInsured (2020–26) → Clearwater Analytics (Jul 2026–present).",
      "LinkedIn lists his program scope as board reporting, product security, data privacy, data governance, data loss prevention, cloud security and insider threat, across healthtech, financial, media and insurance. Certifications: CISSP, CEH.",
      "Education: MS Computer Engineering, Drexel; BE Electronics & Communication Engineering, VIT."
    ],
    "aiInitiatives": "Clearwater Analytics describes itself as a natively agentic investment management platform built on a single, continuously reconciled investment record, supporting more than $10 trillion in assets for insurers, asset managers, hedge funds, banks, corporations and governments. In September 2026 it reported agentic AI running in production across nearly 900 clients, with workflow runs up 105% year to date.\n\nIt has embedded AI into its Beacon risk platform for model validation, exposure analysis and scenario testing with governed workflow automation. Clearwater did not publish a stand-alone AI security or data governance program that we could find.",
    "worldRightNow": "Clearwater was taken private in a $8.4B deal by Permira and Warburg Pincus (completed June 2026), with Francisco Partners supporting and Temasek participating. The deal aims to accelerate its AI roadmap and bring Enfusion and Beacon together into one front-to-back platform. Headquartered in Boise, ID; about 3,281 employees (LinkedIn company data).",
    "painPoints": [
      "New CISO taking over the data estate in the middle of a take-private and a platform integration (Enfusion and Beacon).",
      "Agentic workflows now run in production for ~900 clients, so he needs to know what client investment data those agents can reach.",
      "His own stated scope includes data governance and DLP, which is the Bedrock conversation (our read, not something he has said)."
    ],
    "sources": [
      [
        "LinkedIn profile (read Nov 17, 2026)",
        "https://linkedin.com/in/sumitohri"
      ],
      [
        "Humantic AI work history",
        "https://humantic.ai/public-profile/sumit-ohri-d2a30667f5003fb2"
      ],
      [
        "Clearwater: take-private completed",
        "https://cwan.com/press-releases/clearwater-analytics-completes-8-4-billion-take-private-acquisition-by-permira-and-warburg-pincus/"
      ],
      [
        "Clearwater: agentic AI in production",
        "https://cwan.com/press-releases/clearwater-analytics-reports-agentic-ai-now-running-in-production-across-nearly-900-clients/"
      ],
      [
        "Clearwater: AI in Beacon",
        "https://cwan.com/press-releases/clearwater-analytics-embeds-ai-into-beacon-risk-platform-to-accelerate-model-validation-and-exposure-analysis/"
      ]
    ]
  },
  {
    "name": "Maria Ng",
    "title": "SVP, Global CISO",
    "company": "Snap Finance",
    "industry": "Financial Services",
    "employees": "1,001–5,000",
    "li": "https://www.linkedin.com/in/myng/",
    "ae": "Ben",
    "src": false,
    "whoTheyAre": [
      "SVP, Global CISO at Snap Finance since February 2023 (the registration sheet says CISO). Her LinkedIn headline is '3x CISO'. Founder of AtherwoodGroup. Based in Redwood City.",
      "Career: CISO at Gymboree (2016–19) → Security Architecture and Infrastructure Engineering at PayPal (2019–22) → CISO at CITCON (2021–23) → Snap Finance (Feb 2023–present). Earlier public listings also show Sr. Manager, information security roles at Walmart eCommerce and Gap (dates not captured).",
      "A former colleague's LinkedIn recommendation credits her with running Gymboree's security program to a PCI Report on Compliance with a lean team.",
      "Education: UC Berkeley Extension (Computer Science); SANS SEC401 and SEC560. Certifications listed: GSEC, PCIP. 20+ years in IT.",
      "Spoke at the CISOMeet San Francisco event (CXO Inc.) in June 2026."
    ],
    "aiInitiatives": "Snap Finance's public Trust Center reports SOC 2 certification, PCI DSS v4.0 (SAQ D) and alignment to NIST CSF v2.0. It states a human-in-the-loop posture for AI and that it does not train on customer data.\n\nIn April 2026 Snap highlighted AI-driven underwriting as a way to expand credit access across its lease-to-own and loan products. Snap also publishes guidance for retailers on securing application data, limiting staff access and controlling retention before data is handed to Snap.",
    "worldRightNow": "Lease-to-own and financing provider to retailers and consumers, so applications carry consumer PII and financial data. Won two Bronze Stevie Awards in the 2026 American Business Awards.",
    "painPoints": [
      "Needs to evidence the 'we do not train on customer data' and human-in-the-loop AI claims with data-level controls.",
      "PCI DSS v4.0 plus consumer application data moving between Snap and its retail partners.",
      "AI underwriting depends on sensitive applicant data, so she needs to know where it sits and who or what can reach it."
    ],
    "sources": [
      [
        "LinkedIn profile (read Nov 17, 2026)",
        "https://www.linkedin.com/in/myng/"
      ],
      [
        "Comparably profile",
        "https://www.comparably.com/companies/snap-finance/maria-ng"
      ],
      [
        "Snap Finance Trust Center",
        "https://trust.snapfinance.com/"
      ],
      [
        "Snap Finance 2026 Stevie Awards (AI underwriting)",
        "https://www.businesswire.com/news/home/20260429761931/en/Snap-Finance-Honored-with-Two-Bronze-Stevie-Awards-in-2026-American-Business-Awards"
      ],
      [
        "Snap Finance: data privacy guidance for retailers",
        "https://snapfinance.com/business-blogs/data-privacy-for-retailers-what-you-need-to-know-when-offering-third-party-financing"
      ]
    ]
  },
  {
    "name": "Maxim Hudaley",
    "title": "CISO",
    "company": "Complete Genomics",
    "industry": "Biotechnology Research",
    "employees": "200–500",
    "li": "https://www.linkedin.com/in/maxim-hudaley/",
    "ae": "",
    "src": false,
    "verify": "Role and background are now confirmed on LinkedIn. The company news below (AI variant-calling results, AGBT launch, first-security-function story) is carried over from the SF brief and was not re-checked. The Swiss Rockets deal is shown as pending in the latest sources found; check status before the dinner.",
    "whoTheyAre": [
      "CISO at Complete Genomics since June 2023. His LinkedIn describes him as 'de facto Chief AI Officer'. Headline: 'Making AI trust provable: access, custody, logs, evals | AI agents as privileged users.'",
      "Built Complete Genomics' first cybersecurity function from zero (per SF brief). Active LinkedIn writer on AI security and LLM topics. CISSP.",
      "Career: Engineering Cybersecurity IT Manager at ICE Consulting (2021–22) → freelance multicloud cybersecurity architect (2023) → Complete Genomics (CISO, Jun 2023–present).",
      "Education: BNTU; State University of Informatics and Radioelectronics."
    ],
    "aiInitiatives": "Complete Genomics (founded 2005, San Jose) provides end-to-end DNA sequencing platforms, reagents and software; its DNBSEQ technology is cited in 10,900+ scientific publications (per SF brief). In April 2026 it announced AI-trained variant calling models that reduce genome analysis errors by up to 73% on DNBSEQ data. At AGBT 2026 (February) it launched the DNBSEQ-T7+ platform for population-scale genomics (both per SF brief).\n\nOn February 23, 2026 it agreed to be acquired by Swiss Rockets AG, moving it out of MGI/BGI ownership. The most recent public sources we found still describe the deal as pending MGI shareholder and U.S. regulatory approvals. Check status before the dinner.",
    "worldRightNow": "Headquartered in San Jose, so effectively a local company for this dinner. Ownership transition (MGI/BGI to Swiss Rockets) pending in the latest sources found.",
    "painPoints": [
      "Governing AI access to genomic data, which is permanently identifying.",
      "Cross-border data governance (US and Switzerland) if the Swiss Rockets deal closes.",
      "Built the security function from scratch, so likely tool-hungry but resource-constrained (our read)."
    ],
    "sources": [
      [
        "LinkedIn profile (read Nov 17, 2026)",
        "https://www.linkedin.com/in/maxim-hudaley/"
      ],
      [
        "Swiss Rockets: 'A Defining Milestone'",
        "https://swissrockets.com/news/a-defining-milestone-for-swiss-rockets-and-complete-genomics"
      ],
      [
        "GenomeWeb: shed Chinese ownership",
        "https://www.genomeweb.com/sequencing/complete-genomics-shed-chinese-ownership-through-acquisition-swiss-rockets"
      ],
      [
        "SF brief (June 2026)",
        "https://dhairya-bedrock.github.io/bedrock-sf-brief/index.html"
      ]
    ]
  },
  {
    "name": "Prashant Vadlamudi",
    "title": "CISO",
    "company": "SiTime",
    "industry": "Semiconductor Manufacturing",
    "employees": "501–1,000",
    "li": "https://www.linkedin.com/in/prashant-vad/",
    "ae": "Jasper (unconfirmed)",
    "src": false,
    "whoTheyAre": [
      "New in seat. CISO at SiTime since August 2026 (KARV Tech Insider, Aug 11, 2026). Also an advisor to ComplianceCow.",
      "Career: Director, Cloud Security, Risk & Compliance at Adobe (2011–20) → VP, Federal Security Ops Stack & Global Cloud Compliance at Cisco (2020–24) → SVP, Product Security & Compliance at Salesforce (2024–26) → SiTime (Aug 2026–present).",
      "Education: MBA, LSU; BE Mechanical, Utkal University.",
      "Billed to speak in the AI Security track at the Global CISO Summit, Bay Area edition (Tejas Cyber Network), Oct 24, 2026.",
      "In the SiTime announcement he called the company 'a foundational piece of the technology stack powering the AI era'."
    ],
    "aiInitiatives": "SiTime makes MEMS-based precision timing chips, and AI datacenters are a growth driver for it. In July 2026 it completed the acquisition of Renesas' timing business (announced at about $1.5B), which it expects to add at least $300M of first-year revenue, about 75% from AI-datacenter and communications markets.\n\nWe did not find a published corporate AI governance or data security initiative at SiTime. The public angle is securing a fast-growing company that sits inside AI infrastructure.",
    "worldRightNow": "Just closed the Renesas timing deal, so there is an integration of people, systems and data. New CISO building his plan.",
    "painPoints": [
      "Integrating Renesas timing business systems and data into SiTime after the July close.",
      "Protecting IP and design data for a company positioned inside AI infrastructure (our read).",
      "First months in the role, so likely still scoping the program and tooling."
    ],
    "sources": [
      [
        "KARV Tech Insider: joins SiTime as CISO",
        "https://karvtechinsider.com/ai/cxo-moves/prashant-vadlamudi-joins-sitime-as-chief-information-security-officer"
      ],
      [
        "LinkedIn profile (read Nov 17, 2026)",
        "https://linkedin.com/in/prashant-vad"
      ],
      [
        "SiTime completes Renesas timing acquisition",
        "https://www.sitime.com/company/newsroom/press-release/sitime-completes-acquisition-renesas-timing-business"
      ],
      [
        "Forbes: SiTime to acquire Renesas timing unit",
        "https://www.forbes.com/sites/davealtavilla/2026/02/06/sitime-to-acquire-renesas-timing-unit-in-15b-ai-infrastructure-bet/"
      ]
    ]
  },
  {
    "name": "Jonathan Chan",
    "title": "Head of Privacy, Compliance, Security & Technology",
    "company": "Reveleer",
    "industry": "Hospitals & Healthcare",
    "employees": "501–1,000",
    "li": "https://www.linkedin.com/in/jonathan--chan/",
    "ae": "",
    "src": false,
    "whoTheyAre": [
      "Head of Privacy, Compliance, Security and Technology at Reveleer since June 2026, so he is the executive security leader (the registration sheet lists him as CISO). Scope per his posts: cloud environments, AI/LLM systems, PHI-heavy data flows and SaaS.",
      "Career: Director of IT at Global Payments (2005–21) → BISO at Alluma (part-time, 2021–22) and Head of IT, Infrastructure & Security at Bill.com (2021–22) → Head of Technology, IT & Security at Optum (2022–26) → Reveleer (Jun 2026–present).",
      "Advisory roles: Glilot Capital, Craft Ventures, Cyberstarts CISO board, and Dominican University's MS Cybersecurity program.",
      "Education: BS Civil Engineering & Materials Science, UC Davis.",
      "Recent LinkedIn post: AI security challenges 'aren't entirely new', citing prompt injection, data leakage, model abuse and supply chain risk. Also posts about mentoring the next generation of cyber professionals."
    ],
    "aiInitiatives": "Reveleer's 2026 platform uses agentic AI to extract and validate clinical evidence from records, then applies clinician-authored deterministic rules for risk adjustment and HEDIS/Stars quality-gap closure. Its EVE Hybrid AI (on Google Cloud) produces audit-ready evidence graphs linking each suspect condition to source documentation, with clinicians reviewing coding decisions.\n\nChan has publicly posted about scaling Reveleer's AI platform team to build and secure proprietary AI infrastructure and tackle agentic security challenges. Reveleer also named Fadi Almachraki as CTO.",
    "worldRightNow": "Healthcare AI platform that ingests medical records (PHI) at scale. Brand-new leader, a new CTO, and an AI platform team being built out.",
    "painPoints": [
      "PHI inside medical records feeding agentic AI pipelines; classification before extraction matters.",
      "Securing proprietary AI infrastructure and agents while the platform team is still being hired.",
      "Audit-ready evidence is a product promise, so data lineage is also a customer-facing requirement."
    ],
    "sources": [
      [
        "LinkedIn profile (read Nov 17, 2026) - sheet link",
        "https://linkedin.com/in/jonathan--chan"
      ],
      [
        "LinkedIn profile (second URL, same person)",
        "https://www.linkedin.com/in/jonathan-chan-1852066"
      ],
      [
        "Reveleer EVE Hybrid AI",
        "https://www.reveleer.com/news/eve-hybrid-ai-risk-adjustment"
      ],
      [
        "Reveleer Enterprise AI",
        "https://www.reveleer.com/technology/ai"
      ]
    ]
  },
  {
    "name": "Dmitriy Dunavetsky",
    "title": "VP Product Security",
    "company": "Dayforce",
    "industry": "Software Development",
    "employees": "5,001–10,000",
    "li": "https://www.linkedin.com/in/dmitriy-dunavetsky-1aa826b/",
    "ae": "Ben",
    "src": false,
    "whoTheyAre": [
      "VP, Product Security (and Cybersecurity) at Dayforce since September 2021. Remote, SF Bay Area. 25+ years in security.",
      "Per his own site: hired and developed a global product security team across North America, APJ and EMEA; directs product security strategy across 300+ SaaS services; led a CNAPP transformation with Microsoft, CrowdStrike and Wiz; implemented LLM and RAG based threat modeling, code review and secret detection.",
      "Earlier: Engineering Director, Security at Synopsys (2020–21).",
      "Writes publicly on AI risk. Aug 2025 post: 'The Shadow AI Crisis: Why 97% of Breached Organizations Lack AI Governance'. Panelist at the 2026 San Francisco Secure Software and AppSec Summit."
    ],
    "aiInitiatives": "Dayforce completed its acquisition by Thoma Bravo (about $12.3B) in February 2026 and launched an Agentic HCM Platform in which AI agents and customer-built bots perform multi-step HR and payroll work under existing identity, permissions, privacy, approvals, audit trails and observability controls. Dayforce Build extends this to no-code apps with server-held credentials, role-based access and per-action permission checks.\n\nOn governance, Dayforce documents a nine-step AI governance cycle (privacy reviews, risk tiers, human oversight, independent bias and fairness audits for higher-risk models). It reports ISO 42001 certification, NIST AI RMF attestation, and ISO and SOC 2 Type II security controls.",
    "worldRightNow": "Now a Thoma Bravo-owned company. Global HCM platform (payroll, HR, benefits, talent, workforce management); 5,000+ employees; HQ Minneapolis. Agentic features are shipping to customers.",
    "painPoints": [
      "Agents acting on payroll and HR data: permissions only help if the underlying data is correctly classified.",
      "Shadow AI is a stated concern of his, per his own writing.",
      "300+ SaaS services to cover with product security; discovery of sensitive data across them is a scale problem (our read)."
    ],
    "sources": [
      [
        "LinkedIn profile",
        "https://linkedin.com/in/dmitriy-dunavetsky-1aa826b"
      ],
      [
        "Personal site",
        "https://www.dunavetsky.com/index.html"
      ],
      [
        "His post: Shadow AI Crisis",
        "https://www.dunavetsky.com/blogs/shadow-ai-governance-crisis.html"
      ],
      [
        "Dayforce: Thoma Bravo completes acquisition",
        "https://www.dayforce.com/who-we-are/newsroom/thoma-bravo-completes-acquisition-of-dayforce"
      ],
      [
        "Dayforce: Agentic HCM platform",
        "https://www.dayforce.com/who-we-are/newsroom/dayforce-unveils-the-agentic-hcm-platform"
      ],
      [
        "Dayforce: AI governance cycle",
        "https://www.dayforce.com/blog/dayforce-ai-governance-cycle"
      ],
      [
        "Dayforce: ISO 42001 / NIST AI RMF",
        "https://www.dayforce.com/who-we-are/newsroom/dayforce-advances-trustworthy-ai-through-independent-validation"
      ]
    ]
  },
  {
    "name": "Sharon Cohen",
    "title": "VP, Head of Security",
    "company": "BetterHelp",
    "industry": "Mental Health Care",
    "employees": "501–1,000",
    "li": "https://www.linkedin.com/in/sharoncohen/",
    "ae": "Ben",
    "src": false,
    "whoTheyAre": [
      "VP, Head of Security at BetterHelp since September 2019, with responsibilities that span both CIO and CISO functions. Based in Sunnyvale. 33 years of experience.",
      "Career: Symantec (Sr. IT Manager, WinOps Security, 2000–08) → Precise Software Solutions (Head of IT and CSO, 2008–12) → PRO Unlimited (VP IT, Technical Operations and CISO, 2012–16) → Fluent Analytics (cloud architect, CISO and CIO consultant) → Birst (Head of Operations and IT, 2017–18) → OPSWAT (VP of IT and CISO, 2018–19) → BetterHelp.",
      "Named in RSA 2020 Cybersecurity Heroes. Fluent in English and Hebrew."
    ],
    "aiInitiatives": "BetterHelp (part of Teladoc) expanded its use of AI in 2026 and states publicly that the tools support licensed therapists rather than replace them and do not diagnose or treat. Its privacy policy says therapy data is not used to train AI unless users agree.\n\nBetterHelp operates under a 2023 FTC order ($7.8M consumer payment, a ban on sharing health data for advertising, and a mandated comprehensive privacy program), so how it proves where sensitive data goes is a live topic.",
    "worldRightNow": "Online therapy marketplace handling highly sensitive mental health data. Expanding AI while under a standing FTC privacy order.",
    "painPoints": [
      "FTC order means sensitive-data flows have to be demonstrable, not just policy.",
      "AI features touching therapy data, with a public promise not to train on it without consent.",
      "HIPAA-adjacent data in many systems; one person covering both CIO and CISO scope (our read)."
    ],
    "sources": [
      [
        "LinkedIn profile",
        "https://linkedin.com/in/sharoncohen"
      ],
      [
        "Office Hours profile",
        "https://officehours.com/sharon-cohen"
      ],
      [
        "Endpoints: BetterHelp expands use of AI",
        "https://endpoints.news/teladocs-mental-health-arm-betterhelp-has-quietly-expanded-the-use-of-ai/"
      ],
      [
        "BetterHelp: responsible AI",
        "https://www.betterhelp.com/responsible-ai/"
      ],
      [
        "BetterHelp privacy policy",
        "https://www.betterhelp.com/privacy/"
      ],
      [
        "FTC press release (2023)",
        "https://www.ftc.gov/news-events/news/press-releases/2023/03/ftc-ban-betterhelp-revealing-consumers-data-including-sensitive-mental-health-information-facebook?c_id=7014x000000eQOD"
      ]
    ]
  },
  {
    "name": "Benjamin C. Chang",
    "title": "VP, Security and IT Operations",
    "company": "Glooko",
    "industry": "Hospitals & Healthcare",
    "employees": "200–500",
    "li": "https://www.linkedin.com/in/benjamincchangcissp/",
    "ae": "",
    "src": false,
    "whoTheyAre": [
      "VP, Security and IT Operations at Glooko since August 2021. 30+ years in Silicon Valley security and enterprise software.",
      "Per his LinkedIn: executive roles at Oracle (tripled Database Security revenue to over $40M through a SIEM, encryption and DDL/DML controls), PayPal (built teams of 120+ engineers) and LinkedIn, plus several venture-backed startups.",
      "Education: MIT Executive Education certificate (Management, Innovation and Technology); LinkedIn bio cites MIT, Stanford and UC Berkeley. Holds CISSP.",
      "Says he used Google Gemini to automate security questionnaire responses, internal support and onboarding workflows. Helped integrate four acquisitions at Glooko."
    ],
    "aiInitiatives": "Glooko markets itself as the only diabetes management company with multiple industry-leading security certifications. In an Aug 12, 2026 post by Chang, Glooko announced recertification of ISO 27001 (U.S.), SOC 3 (global), and a consolidated HITRUST r2 certification covering its platform globally.\n\nOn AI: Glooko won Best in Class at the 2026 Digital Health & AI Awards, and its 2026 product updates centre on connected diabetes data, EHR workflows, population health and device integrations. We did not find a named Glooko AI product launch.",
    "worldRightNow": "His LinkedIn cites protecting data on 4.5M patients. He is responsible for Glooko Inc. (Palo Alto) and Glooko AB (Gothenburg), with sites in Croatia, France, Germany and India.",
    "painPoints": [
      "Patient health data across U.S. and EU entities with HITRUST, SOC and ISO audits to keep passing.",
      "Using genAI internally while keeping PHI out of it.",
      "Small team covering both security and IT for a global footprint (our read)."
    ],
    "sources": [
      [
        "LinkedIn profile",
        "https://linkedin.com/in/benjamincchangcissp"
      ],
      [
        "MIT Executive Education certificate profile",
        "https://executive.mit.edu/certificate-holder-community/benjamin-chang-003U100000cSZszIAG.html"
      ],
      [
        "Glooko: latest certifications (Aug 2026)",
        "https://glooko.com/leading-the-way-in-digital-health-security-glookos-latest-certifications/"
      ],
      [
        "Glooko: Best in Class, Digital Health & AI Awards",
        "https://glooko.com/glooko-wins-best-in-class-at-2026-digital-health-ai-awards/"
      ]
    ]
  },
  {
    "name": "Carl Hallberg",
    "title": "VP, Lead Information Security Engineer",
    "company": "Wells Fargo",
    "industry": "Financial Services",
    "employees": "10,000+",
    "li": "https://www.linkedin.com/in/carl-hallberg-security/",
    "ae": "",
    "src": false,
    "whoTheyAre": [
      "Hands-on security engineer, not a CISO. VP, Lead Information Security Engineer at Wells Fargo since February 2002 (about 24 years). Based in Rohnert Park, CA.",
      "Career: Wells Fargo (Unix System Administrator, 1997–99) → AtomicTangerine (Senior Technologist, 1999–2002) → Wells Fargo (Lead Information Security Engineer, 2002–present). 30 years of total experience.",
      "Focus areas on LinkedIn: intrusion detection, email security, network security, vulnerability management; mentors other engineers. GIAC certifications: GCIA, GCTI, GCLD.",
      "Education: BA Psychology, Sonoma State University."
    ],
    "aiInitiatives": "Wells Fargo is scaling generative and agentic AI behind its own AI control plane: policy as code, identity and role controls, a model registry with lineage, data contracts, runtime guardrails and immutable decision logs, with humans in the loop where needed (CIO News interview with a Wells Fargo MD).\n\nPublic job postings show the security work: a Principal Engineer role for agentic identity security (agent identity, delegated access, capability-based authorization, audit trails) and a GenAI guardrails role that includes sensitive-data redaction. Wells Fargo deploys Google Agentspace and has expanded its Google Cloud relationship.",
    "worldRightNow": "One of the largest U.S. banks, with AI agents moving from pilot to scale under a central control plane.",
    "painPoints": [
      "Detection and engineering lens: expect a practical conversation about alert quality and visibility rather than governance.",
      "Data contracts and redaction for AI only work if sensitive data is found and labelled first (our read).",
      "Not a buyer by title; may be a technical influencer (our read)."
    ],
    "sources": [
      [
        "LinkedIn profile (read Nov 17, 2026)",
        "https://linkedin.com/in/carl-hallberg-security"
      ],
      [
        "RocketReach profile",
        "https://rocketreach.co/carl-hallberg-email_98006145"
      ],
      [
        "CIO News: Wells Fargo AI control plane",
        "https://www.cionews.com/post/control-plane-bank-ledger-bijit-ghosh-wells-fargo"
      ],
      [
        "Wells Fargo job: Agentic Identity Security",
        "https://wf.wd1.myworkdayjobs.com/en-US/WellsFargoJobs/job/Principal-Engineer---Agentic-Identity-Security_R-573156"
      ],
      [
        "Google Cloud blog: Wells Fargo Agentspace",
        "https://cloud.google.com/blog/topics/financial-services/wells-fargo-agentic-ai-agentspace-empowering-workers"
      ]
    ]
  },
  {
    "name": "Veena Gopu",
    "title": "Head of GRC",
    "company": "Altera",
    "industry": "Semiconductor Manufacturing",
    "employees": "1,001–5,000",
    "li": "https://www.linkedin.com/in/veenagopu/",
    "ae": "Ben",
    "src": false,
    "whoTheyAre": [
      "Head of GRC at Altera since May 2026, based in Sunnyvale. She joined Altera in August 2025 as Senior Manager, Infosec.",
      "Career at Walmart Global Tech (10 years): IT Audit Manager (2015–19) → Risk Lead, External Party Risk Management (2019–23) → Staff Risk Expert → Senior Manager II, Infosec - External Party Risk Management (2024–25). Earlier roles: Quality Manager at Programmer Resources; Technical Leader - Quality at Philips Innovation Campus.",
      "AIUC-1 consortium member (an industry standard effort for AI agent security and safety).",
      "Education: BTech Instrumentation, Madras Institute of Technology.",
      "LinkedIn: recently posted that Altera is hiring a Senior Security Analyst (cloud hardening, identity defense, detection)."
    ],
    "aiInitiatives": "Altera became an independent FPGA company when Silver Lake acquired 51% in September 2025, with Intel keeping 49%. Its AI story is product: FPGAs for edge and physical AI, data preprocessing and sensor fusion, the Agilex 2X portfolio and AI-assisted QuartusIQ design tools.\n\nWe did not find a public Altera AI governance or data security program.",
    "worldRightNow": "Newly independent from Intel and reported (Reuters) to have confidentially filed for a U.S. IPO in September 2026. Growth above 20% in 2025. An IPO means new SEC disclosure and controls work for a GRC lead.",
    "painPoints": [
      "Separating from Intel systems and standing up its own GRC program ahead of a reported IPO.",
      "Third-party and AI vendor risk, a theme in her background and the AIUC-1 listing.",
      "Design IP and customer data classification (our read)."
    ],
    "sources": [
      [
        "LinkedIn profile (read Nov 17, 2026)",
        "https://linkedin.com/in/veenagopu"
      ],
      [
        "Her Walmart hiring post",
        "https://www.linkedin.com/posts/veenagopu_riskmanagement-walmartinfoseclife-activity-7118044993314828288-YQsA"
      ],
      [
        "AIUC-1 Consortium",
        "https://www.aiuc-1.com/consortium"
      ],
      [
        "Altera: Silver Lake investment closes",
        "https://www.altera.com/newsroom/altera-silver-lake"
      ],
      [
        "Reuters: Altera confidentially files for IPO",
        "https://www.reuters.com/business/chipmaker-altera-confidentially-files-us-ipo-2026-09-15/"
      ]
    ]
  },
  {
    "name": "Dmitry Izumskiy",
    "title": "Principal Product Security Engineer",
    "company": "ServiceNow",
    "industry": "Software Development",
    "employees": "10,000+",
    "li": "https://www.linkedin.com/in/idimaster/",
    "ae": "Lanny",
    "src": false,
    "whoTheyAre": [
      "Principal Product Security Engineer at ServiceNow since October 2026 (LinkedIn). Recent posts reference Veza, which ServiceNow acquired in March 2026.",
      "Career: Tech Lead at Exigen Services StarSoft (2008–11) → Principal Software Architect at EIS Group (2011–17) → Intuit for 9 years (Principal SWE & Security R&D Chief Architect, 2019–24; Principal SWE, PDX Group, 2025–Oct 2026) → ServiceNow (Oct 2026–present).",
      "Contributes to the OpenID Foundation and IETF. Education: MS Computer Science, Dniprovsk State Technical University.",
      "Speaker at Neo4j NODES 2026 on 'A Neurosymbolic Integration Planning Agent on Neo4j MCP'. Attended NVIDIA GTC 2026 workshops. Spoke at Scale By the Bay 2020."
    ],
    "aiInitiatives": "ServiceNow acquired Veza (March 2, 2026, about $1.2B) for AI-native identity security and its Access Graph, covering access for humans, machines and AI agents. It acquired Armis (April 20, 2026, about $7.6B) for visibility across IT, OT, IoT, cloud and physical assets.\n\nTogether they underpin ServiceNow's Autonomous Security & Risk platform, launched in 2026 to govern every AI agent, identity and connected asset. SiliconANGLE (Aug 4, 2026) counted six autonomous security products built on Armis and Veza.",
    "worldRightNow": "ServiceNow is now a security vendor in its own right and sells products that govern AI agents and identities (per its 2026 launches). Worth knowing before positioning Bedrock (our read).",
    "painPoints": [
      "Works inside a vendor that sells agent and identity governance; will compare Bedrock's data layer against that (our read).",
      "Agent access governance is only as good as the data classification beneath it."
    ],
    "sources": [
      [
        "LinkedIn profile (read Nov 17, 2026)",
        "https://linkedin.com/in/idimaster"
      ],
      [
        "Neo4j NODES 2026 speakers",
        "https://neo4j.com/nodes/speakers/dmitry-izumskiy/"
      ],
      [
        "His post on Veza from ServiceNow",
        "https://www.linkedin.com/posts/idimaster_at-veza-from-servicenow-weve-spent-countless-activity-7523911369654624257-NknE"
      ],
      [
        "Veza + ServiceNow",
        "https://veza.com/blog/veza-servicenow-the-enterprise-agent-identity-control-plane/"
      ],
      [
        "ServiceNow: Autonomous Security & Risk",
        "https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-launches-Autonomous-Security--Risk-integrating-Armis-and-Veza-to-govern-every-AI-agent-identity-and-connected-asset/default.aspx"
      ],
      [
        "SiliconANGLE: six autonomous security products",
        "https://siliconangle.com/2026/08/04/servicenow-debuts-six-autonomous-security-products-built-armis-veza/"
      ]
    ]
  },
  {
    "name": "Sonaika Singh",
    "title": "Senior Manager - Security",
    "company": "PubMatic",
    "industry": "Technology, Information, & Internet",
    "employees": "501–1,000",
    "li": "https://www.linkedin.com/in/sonaikasingh",
    "ae": "Ben",
    "src": true,
    "whoTheyAre": [
      "Senior Manager, Security at PubMatic since May 2023 (LinkedIn profile confirmed as hers).",
      "Career: Aricent (Network Security Specialist, 2008–12) → BT for 10 years, ending as Head of Security Integration (2020–22) → New York State Office of the State Comptroller (Senior Security Manager, 2022–23) → PubMatic (May 2023–present).",
      "Certifications: CISSP, CISM. Education: BE in Electronics & Communication Engineering, Kurukshetra University."
    ],
    "aiInitiatives": "PubMatic's 2026 AgenticOS lets publishers activate first-party audiences without transferring the underlying data. Agents authenticate, access only approved datasets and generate audit trails. PubMatic also launched a governance architecture for agentic advertising: buyer-configured budgets, inventory and audience restrictions, pre-approved assets, human approval workflows and drift detection.\n\nIts AgenticOS agreement requires customer consent, opt-out handling and a Data Protection Addendum. PubMatic's FY2025 10-K (filed Feb 26, 2026) includes the required cybersecurity disclosure.",
    "worldRightNow": "Ad-tech platform whose AI agents act on audience data for buyers and publishers. Public company, so security programs are disclosed in SEC filings.",
    "painPoints": [
      "Agents are given access only to approved datasets, so someone must keep 'approved' accurate as data changes (our read).",
      "Consent and opt-out obligations on audience data.",
      "Sourced by Bedrock, so likely already warm."
    ],
    "sources": [
      [
        "LinkedIn profile (read Nov 17, 2026)",
        "https://linkedin.com/in/sonaikasingh"
      ],
      [
        "PubMatic: governance architecture for AgenticOS",
        "https://pubmatic.com/news/pubmatic-launches-governance-architecture-for-agentic-advertising-on-agenticos/"
      ],
      [
        "PubMatic: Inside AgenticOS",
        "https://pubmatic.com/blog/inside-agenticos-a-look-at-pubmatics-full-buy-side-agent-stack/"
      ],
      [
        "Optable and PubMatic partnership",
        "https://www.optable.co/newsroom/optable-and-pubmatic-partner"
      ],
      [
        "PubMatic AgenticOS agreement",
        "https://pubmatic.com/legal/agenticos-agreement/"
      ],
      [
        "PubMatic 10-K cybersecurity (Feb 2026)",
        "https://www.board-cybersecurity.com/annual-reports/tracker/20260226-pubmatic-cybersecurity-10k"
      ]
    ]
  },
  {
    "name": "Netsai Massetti",
    "title": "Senior Director, Global Privacy Compliance & Operations (Enterprise & Product)",
    "company": "Intuitive",
    "industry": "Medical Equipment Manufacturing",
    "employees": "10,000+",
    "li": "https://www.linkedin.com/in/netsai/",
    "ae": "",
    "src": false,
    "whoTheyAre": [
      "Senior Director, Global Privacy Compliance & Operations (Enterprise & Product) at Intuitive since January 2026. She started at Intuitive in August 2025 as a consultant.",
      "Earlier: Chief Compliance Officer at Prósperos.ai (2024); PCI SSC Board of Advisors (2023–24).",
      "Certifications: AIGP, CIPP-US, CRISC, CDPSE. Education: Georgetown AI Governance certificate (2025); other education not captured."
    ],
    "aiInitiatives": "See also Amit Wasson (same company). Intuitive's da Vinci 5 ecosystem uses system telemetry, video, kinematics and force data for Case Insights analytics, and My Intuitive+ adds video analysis, telepresence and training. Its stated AI strategy is validated, surgeon-controlled assistance on a 'data to autonomy' capability stack.\n\nOn security and privacy, Intuitive cites HITRUST and NIST-aligned design, ISO 27001:2022 certification, encryption, continuous monitoring and enhanced instrument encryption.",
    "worldRightNow": "Surgical robotics company turning procedure data into analytics and AI features, which is where privacy operations and data governance meet.",
    "painPoints": [
      "Procedure video and device telemetry used for analytics and AI: privacy classification across mixed data types.",
      "Global privacy compliance operations (her stated scope) depend on knowing what personal data exists and where.",
      "AIGP certified, so she is thinking about AI governance specifically (our read)."
    ],
    "sources": [
      [
        "LinkedIn profile (read Nov 17, 2026)",
        "https://linkedin.com/in/netsai"
      ],
      [
        "Intuitive: AI-enabled future of healthcare",
        "https://investor.intuitivesurgical.com/news-releases/news-release-details/intuitive-shares-vision-ai-enabled-future-healthcare/"
      ],
      [
        "My Intuitive / My Intuitive+",
        "https://www.intuitive.com/en-us/digital-solutions/my-intuitive"
      ],
      [
        "Vinay Pai post on Prósperos CCO hire",
        "https://www.linkedin.com/posts/vinaypai_please-join-me-in-welcoming-our-newest-pr%C3%B3sperito-activity-7203528705049055232-Sbls"
      ]
    ]
  },
  {
    "name": "Manny Thinakaran",
    "title": "Head of Security (Global)",
    "company": "Ingenio",
    "industry": "Technology, Information, & Internet",
    "employees": "200–500",
    "li": "https://www.linkedin.com/in/manmathanthinakaran/",
    "ae": "Jasper (unconfirmed)",
    "src": false,
    "whoTheyAre": [
      "Manmathan 'Manny' Thinakaran, Head of Security (Global) at Ingenio since October 2021. Leads security operations, engineering, GRC, privacy, risk management and incident response.",
      "Career: Cypress Semiconductor (2006–13) → Clorox (2013–14) → Sr. Manager, Cyber Security at Samsung Semiconductor (2014–21) → Ingenio (Oct 2021–present).",
      "Education: MBA, Alagappa University; BE Electronics & Communication Engineering, Manonmaniam Sundaranar University.",
      "On the CISO Ascent advisory board. Listed as an Executive in Residence for the University of Washington Foster School's Cybersecurity Leadership Program. Volunteers as a leadership coach with Braven for SFSU students."
    ],
    "aiInitiatives": "Ingenio is the company behind Keen, a pay-per-minute marketplace for phone and chat sessions with independent spiritual advisors. In 2026 Keen is repositioning from 'psychic' to everyday wellbeing with a new global brand.\n\nIngenio's AI activity is on the product and content side: Veda, a personalized spiritual-guidance chatbot (astrology, tarot, numerology), and AI-generated content (Digiday). We did not find any public Ingenio data security or AI governance initiative.",
    "worldRightNow": "Consumer marketplace that stores very personal conversations and payment data. A chatbot that collects what users confide adds a new data type.",
    "painPoints": [
      "Intimate user conversations (advice sessions, chatbot) are sensitive even though they are not clinical (our read).",
      "Small company where one global security head covers everything from SecOps to privacy."
    ],
    "sources": [
      [
        "LinkedIn profile (read Nov 17, 2026)",
        "https://linkedin.com/in/manmathanthinakaran"
      ],
      [
        "The Org profile",
        "https://theorg.com/org/ingenio/person/manmathan-thinakaran"
      ],
      [
        "Foster School: Executives in Residence",
        "https://foster.uw.edu/executive-edu/executive-programs/cybersecurity-leadership-program/executives-in-residence/"
      ],
      [
        "CISO Ascent board",
        "https://cisoascent.com/board-of-directors"
      ],
      [
        "Keen brand repositioning",
        "https://roastbrief.us/mother-design-creates-new-brand-identity-for-keen-reposition-psychic-and-spiritual-for-the-modern-wellbeing-era/"
      ],
      [
        "Digiday: Ingenio generative AI",
        "https://digiday.com/media/how-one-publisher-is-using-generative-ai-to-publish-thousands-of-evergreen-posts-create-a-chatbot/"
      ]
    ]
  },
  {
    "name": "Kashish Mittal",
    "title": "AI Security Lead",
    "company": "Salesforce",
    "industry": "Software Development",
    "employees": "10,000+",
    "li": "https://www.linkedin.com/in/kashishmittalcmu/",
    "ae": "Ben",
    "src": true,
    "whoTheyAre": [
      "AI Security Lead at Salesforce (also described as AI Security Architect or head of AI security), based in the SF Bay Area.",
      "Earlier: founded and led Emigre, a Y Combinator (W22) security consultancy; Security Lead at Brex; led security for Microsoft's MileIQ / Modern Life Experiences group; also worked at Duo Security and CMU CyLab. Exact dates not confirmed.",
      "Education: B.S. and M.S., Carnegie Mellon University, with a security focus.",
      "Public speaker: RVAsec speaker feature. Also appears in connection with the Open Future Forum's CISO Executive Forum on AI Security and Governance (not verified)."
    ],
    "aiInitiatives": "Salesforce's Agentforce runs on the Einstein Trust Layer: zero third-party LLM data retention, secure grounding, prompt-injection defense, toxicity detection and audit logs. Agents inherit the user's licenses, permissions, field-level security and sharing rules.\n\nIn 2026 Salesforce introduced a Trusted Enterprise AI Harness with data and metadata lineage, quality controls, guardrails, identity and runtime security and an AI Control Plane for agent discovery, policy, lifecycle and monitoring. Salesforce's help documentation states that Einstein Trust Layer data masking (pattern-based and field-based) is disabled for agents, and that agent-accessed data including PII is protected in transit and not retained or used for training by external LLM providers.",
    "worldRightNow": "Agentforce is Salesforce's headline product and its trust model is the sales pitch, so AI security there is a business-critical function.",
    "painPoints": [
      "Permission inheritance works for governed Salesforce data, but customers' agents also reach data outside the CRM (our read).",
      "Salesforce's docs say Trust Layer data masking is disabled for agents, so access controls and knowing what sensitive data agents can reach carry the load.",
      "Sourced by Bedrock, so likely already warm."
    ],
    "sources": [
      [
        "LinkedIn profile",
        "https://www.linkedin.com/in/kashishmittalcmu"
      ],
      [
        "Humantic AI profile",
        "https://humantic.ai/public-profile/kashish-mittal-eb577d6049bf5a23"
      ],
      [
        "RVAsec speaker feature",
        "https://rvasec.com/speaker-feature-kashish-mittal/"
      ],
      [
        "Open Future Forum: CISO Executive Forum",
        "https://openfutureforum.com/ciso-executive-forum"
      ],
      [
        "Salesforce Help: Trust and Agentforce",
        "https://help.salesforce.com/s/articleView?id=copilot_trust.htm&language=en_US&type=5"
      ],
      [
        "Salesforce: Trusted Enterprise AI Harness",
        "https://www.salesforce.com/news/stories/enterprise-ai-harness/"
      ]
    ]
  },
  {
    "name": "Tucker Perry",
    "title": "Sr. Manager, Enterprise Security",
    "company": "Abridge",
    "industry": "Artificial Intelligence",
    "employees": "501–1,000",
    "li": "https://www.linkedin.com/in/tuckerperry/",
    "ae": "",
    "src": true,
    "whoTheyAre": [
      "New in seat. Senior Manager, Enterprise Security at Abridge since October 2026, leading the Corporate Security team and building the enterprise security program: identity and access, endpoint, SaaS and third-party risk, network security and security automation.",
      "Career: Uber (2013–17) → Sr. Manager, Collaboration Apps at Splunk (2018–19) → IT Engineering Manager at Glassdoor (2019–20) → Head of IT Systems Engineering at Asana (2020–26; featured in an Asana customer story on centralizing identity) → Abridge (Oct 2026–present).",
      "Education: BA Computer Science / Graphic Design, Hampshire College."
    ],
    "aiInitiatives": "Abridge's ambient AI platform documents clinician-patient conversations. It reports a HIPAA-compliant platform with U.S. data centers, 256-bit encryption, Business Associate Agreements and SOC 2 Type 1 and Type 2, with a public Trust Center.\n\nIn 2026 it expanded beyond documentation into clinician intelligence, billing, decision support and life-sciences workflows, and is co-developing a clinical-conversation foundation model with NVIDIA. It has raised about $830M, including a $316M Series E extension in April 2026 at a $5.3B valuation (Fortune).",
    "worldRightNow": "Hypergrowth healthcare AI company recording real patient conversations and now moving into new data uses (billing, life sciences).",
    "painPoints": [
      "Building the corporate security program from scratch at a company growing quickly.",
      "SaaS and third-party sprawl around a platform that handles PHI (our read).",
      "New data uses (life sciences, foundation model) raise questions about what data goes where."
    ],
    "sources": [
      [
        "LinkedIn profile (read Nov 17, 2026)",
        "https://linkedin.com/in/tuckerperry"
      ],
      [
        "His LinkedIn post: joined Abridge",
        "https://www.linkedin.com/posts/tuckerperry_some-news-ive-joined-abridge-to-lead-the-activity-7518134052105687040-KJ2f"
      ],
      [
        "Abridge Trust Center",
        "https://trust.abridge.com/"
      ],
      [
        "Abridge: data security and HIPAA",
        "https://support.abridge.com/hc/en-us/articles/30235294201619-Data-Security-and-HIPAA-Compliance"
      ],
      [
        "Fortune: Abridge and NVIDIA",
        "https://fortune.com/2026/06/11/abridge-operating-system-medicine-nvidia-eli-lilly-artsight/"
      ]
    ]
  },
  {
    "name": "Chirag Shah",
    "title": "Global Information Security Officer & DPO",
    "company": "Model N",
    "industry": "Software Development",
    "employees": "1,001–5,000",
    "li": "https://www.linkedin.com/in/cbshah/",
    "ae": "Jasper",
    "src": false,
    "whoTheyAre": [
      "Global Information Security Officer and Data Protection Officer at Model N since November 2019. 20+ years in security and technology.",
      "Member of the Forbes Technology Council and a contributor to CIO Influence. Prior roles: not found.",
      "Public views (CyberTech Top Voice interview, Aug 2024): GenAI can speed threat detection and response but needs human oversight; priorities include cloud and supply chain security, zero trust and SASE, and rising privacy regulation."
    ],
    "aiInitiatives": "Model N sells revenue optimization, pricing, market-access and compliance software to life sciences manufacturers. In 2026 it expanded its AI with Data nSights and agentic workflows, stressing governance, security and compliance for regulated workflows, and was named in Healthcare Digital's Top 10 Agentic AI Platforms in Life Sciences.\n\nIt manages $1.3 trillion in customer gross revenue and acquired Kalderos to strengthen gross-to-net and 340B intelligence. As DPO, Shah also owns data protection obligations, and Model N participates in the Data Privacy Framework.",
    "worldRightNow": "Vista Equity portfolio company. Appointed Koti Reddy Nandyala as CTO on Nov 16, 2026, the day before this brief was built.",
    "painPoints": [
      "Dual role: security officer and DPO, so he owns both breach risk and data-protection obligations.",
      "Agentic workflows on customers' pricing and rebate data in a regulated industry.",
      "Kalderos acquisition means newly merged data and systems (our read)."
    ],
    "sources": [
      [
        "LinkedIn profile",
        "https://linkedin.com/in/cbshah"
      ],
      [
        "Forbes Technology Council profile",
        "https://councils.forbes.com/profile/Chirag-Shah-Global-Information-Security-Officer-DPO-Model-N-Inc/5dbc9a38-aef3-4413-915e-d7dc9c085b48"
      ],
      [
        "CyberTech Top Voice interview",
        "https://cybertechnologyinsights.com/interview/cybertech-top-voice-interview-with-model-ns-chirag-shah/"
      ],
      [
        "Model N: Top 10 agentic AI platforms",
        "https://www.modeln.com/company/news/media-coverage/model-n-recognized-in-healthcare-digitals-top-10-agentic-ai-platforms-in-life-sciences/"
      ],
      [
        "Model N: $1.3T gross revenue managed",
        "https://www.modeln.com/company/news/press-center/model-n-manages-1-3-trillion-in-gross-revenue-for-life-sciences-customers/"
      ],
      [
        "Model N names new CTO (Nov 16, 2026)",
        "https://www.globenewswire.com/news-release/2026/11/16/3403875/0/en/model-n-appoints-koti-reddy-nandyala-as-chief-technology-officer-to-accelerate-platform-innovation.html"
      ]
    ]
  },
  {
    "name": "Swagata Ashwani",
    "title": "AI Tech Lead / Manager (Data Science Manager, Technical AI Lead)",
    "company": "Boomi",
    "industry": "Software Development",
    "employees": "1,001–5,000",
    "li": "https://www.linkedin.com/in/swagata-ashwani/",
    "ae": "Matt",
    "src": false,
    "whoTheyAre": [
      "Data Science Manager and Technical AI Lead at Boomi since April 2026. Leads AI initiatives including AI agents for integration documentation and error resolution; worked on Boomi Scribe (an AWS-based agent that generates and compares integration documentation).",
      "Carnegie Mellon master's (data science and AI). 7+ years building data and AI products across healthcare, retail and enterprise software, including as a Principal Data Scientist. Holds a USPTO patent.",
      "NLP researcher who publishes papers and book chapters and speaks at ODSC on LLMOps and responsible AI. Chapter lead for Women in Data in San Francisco. Creator of The AI Gal (@the.ai.gal) education brand; co-founder of Stackforce (per its site)."
    ],
    "aiInitiatives": "Boomi's Agentstudio includes Agent Control Tower, a vendor-neutral registry for registering, governing and monitoring agents from Boomi and third parties, with trust levels, enable/disable controls, token and error metrics, anomaly detection, session tracing and audit logs. The November 2026 release added real-time Agent Garden registration, universal session logs and centralized visibility across parent and sub-accounts. Agentstudio also supports bring-your-own-model and self-hosted runtimes.\n\nShe is on the builder side: she builds the agents rather than owning security. Her public writing stresses responsible AI that works with people rather than replacing them.",
    "worldRightNow": "Boomi is pushing agents that move data between customers' systems, so what those agents touch is a live customer question.",
    "painPoints": [
      "Agents that read integration data need to know what is sensitive before they act on it (our read).",
      "Governance is a Boomi product theme (Agent Control Tower), but it is registry and monitoring rather than data classification.",
      "Technical AI lead, not a security buyer; best framed as 'what would make your agents safer to ship'."
    ],
    "sources": [
      [
        "LinkedIn profile",
        "https://linkedin.com/in/swagata-ashwani"
      ],
      [
        "Personal site",
        "https://www.swagataashwani.com/"
      ],
      [
        "AWS blog: Boomi Scribe",
        "https://aws.amazon.com/blogs/machine-learning/how-boomi-scribe-streamlines-documentation-using-aws/"
      ],
      [
        "Blockchain Magazine interview",
        "https://blockchainmagazine.com/leadership/swagata-ashwani-designing-ai-that-works-with-you-not-instead-of-you/"
      ],
      [
        "Boomi docs: managing and monitoring agents",
        "https://help.boomi.com/docs/Atomsphere/Platform/Act-manageandmonitor"
      ],
      [
        "Boomi: November 2026 release",
        "https://boomi.com/blog/everything-you-want-to-know-about-the-november-2026-boomi-integration-and-automation-platform-release/"
      ]
    ]
  },
  {
    "name": "Swati Ranganathan",
    "title": "Head of GRC",
    "company": "Postman",
    "industry": "Software Development",
    "employees": "1,001–5,000",
    "li": "https://www.linkedin.com/in/swatiranganathan/",
    "ae": "Ben",
    "src": false,
    "whoTheyAre": [
      "Head of GRC at Postman since October 2025. Focused on streamlining security and compliance and reducing friction for customers.",
      "Career: CIO at Elo Touch → Head of Enterprise Apps at Rocket Fuel (2014–17) → Sr. Director, Finance Systems at RingCentral (2017–19) → VP, IT & Business Systems at Bill.com (2019–22) → Uniphore (VP IT & Systems with CIO scope from Oct 2022, and CISO from May 2024 to Oct 2025) → Postman (Oct 2025–present).",
      "Education: MS Mechanical Engineering, University of Houston; BE, University of Madras.",
      "Public voice on IT leadership and AI (Atomicwork 'Atomic Conversations' interview). Recently posted that Postman earned ISO/IEC 42001:2023 certification for its AI Management System, and that she is hiring for builders in GRC."
    ],
    "aiInitiatives": "Postman's Agent Mode (used by developers on Amazon Bedrock per AWS) has enterprise controls: granular AI access, MCP server allowlists, client-side secret redaction and AWS PII redaction before prompts reach the LLM. Agents inherit users' RBAC permissions and sensitive actions require approval.\n\nIn September 2026 Postman made Fabric Gateway generally available (a control plane for agent and API identity, policy, discovery and governance) and Passport (secretless, task-scoped agent access with vault-held credentials and revocable grants). Postman holds ISO/IEC 42001 certification for its AI management system.",
    "worldRightNow": "Postman is building the security story for agents calling APIs and is certified for AI management, with a GRC head who is publicly hiring.",
    "painPoints": [
      "Proving AI governance to customers (ISO 42001 plus security questionnaires) without drowning the team.",
      "Request and response payloads in Agent Mode can contain customer data even with redaction (our read)."
    ],
    "sources": [
      [
        "LinkedIn profile (read Nov 17, 2026)",
        "https://linkedin.com/in/swatiranganathan"
      ],
      [
        "Atomicwork interview",
        "https://www.atomicwork.com/blog/atomic-conversations-swati-ranganathan"
      ],
      [
        "Her post: Postman earns ISO 42001",
        "https://www.linkedin.com/posts/swatiranganathan_postman-earns-iso-42001-certification-for-activity-7486174059580526593-qcsM"
      ],
      [
        "Postman Agent Mode enterprise features",
        "https://learning.postman.com/docs/use/agent-mode/enterprise/"
      ],
      [
        "Postman Fabric Gateway GA",
        "https://www.businesswire.com/news/home/20260929329910/en/Postman-Introduces-the-Control-Plane-for-the-Agentic-World-with-General-Availability-of-Fabric-Gateway"
      ],
      [
        "Postman Passport GA",
        "https://www.businesswire.com/news/home/20260915641646/en/Postman-Announces-General-Availability-of-Passport-Bringing-Secretless-API-Access-to-the-Agentic-Era"
      ]
    ]
  },
  {
    "name": "Pratik Savla",
    "title": "Principal / Head - Enterprise Security Strategy and Compliance (Office of the CISO)",
    "company": "Synaptics",
    "industry": "Semiconductor Manufacturing",
    "employees": "1,001–5,000",
    "li": "https://www.linkedin.com/in/pratiksavla/",
    "ae": "Ben",
    "src": true,
    "whoTheyAre": [
      "Principal / Head of Enterprise Security Strategy and Compliance in Synaptics' Office of the CISO since May 2023. Leads security strategy, compliance and privacy programs. Based in San Jose.",
      "Career: Venafi (Principal Product Security & Compliance Officer, 2019–23) → Synaptics (May 2023–present). 17+ years in information security.",
      "Community roles: Nasdaq Center for Board Excellence member; ISACA Silicon Valley board (2024–25); Vendor Security Alliance core committee; MITRE CWE/CAPEC; Google MVSP.",
      "Education: MS Information Security, Purdue. Certifications: CISA, CDPSE, CEH, CCISO. Has spoken at Cyber Security & Cloud Expo North America."
    ],
    "aiInitiatives": "Synaptics' public AI and security work is product-side: its Astra edge-AI processors added embedded fTPM support (with SecEdge) for the SL2610 line, and the SR200 xMCU series adds hardware isolation, cryptographic acceleration, anti-tamper detection and secure boot, targeting PSA Level 3 and CC EAL4+.\n\nWe did not find a public Synaptics corporate AI governance or data security program. His compliance and privacy remit is the likely entry point.",
    "worldRightNow": "Edge-AI chip company. Enterprise compliance and privacy sit with his team.",
    "painPoints": [
      "Compliance and privacy program scope across a global semiconductor company (our read).",
      "Design IP and customer data classification.",
      "Sourced by Bedrock, so likely already warm."
    ],
    "sources": [
      [
        "LinkedIn profile (read Nov 17, 2026)",
        "https://linkedin.com/in/pratiksavla"
      ],
      [
        "Neuron profile",
        "https://neuron.com/profile/4336590210/pratik-savla"
      ],
      [
        "Cyber Security & Cloud Expo speaker page",
        "https://www.cybersecuritycloudexpo.com/northamerica/speaker/pratik-savla/"
      ],
      [
        "SecEdge and Synaptics fTPM",
        "https://www.secedge.com/news/synaptics-partners-with-secedge-on-embedded-tpm-solutions-for-its-astra-ai-native-edge-computing-processors/"
      ],
      [
        "Synaptics Astra SR200",
        "https://www.synaptics.com/company/news/synaptics-astra-sr200-series-multimodal-edge-ai-processors"
      ]
    ]
  },
  {
    "name": "Vidya Bodepudi",
    "title": "Information Security Manager",
    "company": "Ultima Genomics",
    "industry": "Biotechnology Research",
    "employees": "501–1,000",
    "li": "https://www.linkedin.com/in/vidyabodepudi/",
    "ae": "Joe",
    "src": true,
    "whoTheyAre": [
      "Information Security Manager at Ultima Genomics (Fremont) since April 2026. Per her LinkedIn summary she is the company's first security hire and acting information security and privacy officer, building its global security strategy, detection and response, product security, application security and GRC programs.",
      "Career: Engineering Manager, Security & Compliance at Crunchyroll (2020–21) → Director of Information Security at Truepill (2021–26) → Ultima Genomics (Apr 2026–present).",
      "AIUC-1 consortium member and Operator/Advisor at Whiterabbit. Education: UC Davis, Computational Mathematics & Applied Physics.",
      "Per her personal site: spoke on secret harvesting at Sec Nerds: The Conference 2026 (SF Bay Area) and on InfoSec burnout."
    ],
    "aiInitiatives": "Ultima Genomics makes high-throughput DNA sequencers. In 2026 it launched Solaris 2.0 and Solaris 2.0 Max (paired-end sequencing, a $60 genome) at ASHG, and the UG200 series.\n\nOn AI and data: Ultima was selected to generate a one-million-sample multi-omic dataset for the Precure LLC AI/ML initiative, is building GPU-accelerated pangenome-aware analysis with NVIDIA and Google's DeepVariant, and was chosen for a large immune-profiling study with IMU Biosciences, UK Biobank and Waters. No corporate data security announcement found.",
    "worldRightNow": "Sequencing-at-scale company generating massive human genomic datasets for AI, with a security function she is building as the first security hire.",
    "painPoints": [
      "Population-scale genomic datasets feeding AI, with research partners such as UK Biobank (our read).",
      "First security hire, so she is likely building the program and picking tools now.",
      "Sourced by Bedrock, so likely already warm."
    ],
    "sources": [
      [
        "LinkedIn profile (read Nov 17, 2026)",
        "https://linkedin.com/in/vidyabodepudi"
      ],
      [
        "Personal site",
        "https://vidyabodepudi.com/"
      ],
      [
        "Ultima: Solaris 2.0 Max at ASHG 2026",
        "https://www.prnewswire.com/news-releases/ultima-genomics-launches-paired-end-sequencing-and-solaris-2-0-max-at-ashg-2026--doubling-output-and-enabling-the-60-genome-302914208.html"
      ],
      [
        "Ultima: Precure one-million-sample dataset",
        "https://www.prnewswire.com/news-releases/ultima-genomics-selected-to-generate-one-million-sample-world-leading-multi-omic-biomedical-dataset-for-aiml-precure-llc-initiative-302885572.html"
      ],
      [
        "Ultima with NVIDIA and DeepVariant",
        "https://www.prnewswire.com/news-releases/ultima-genomics-to-advance-pangenome-aware-whole-genome-sequencing-analysis-at-population-scale-in-collaboration-with-nvidia-using-googles-deepvariant-302873179.html"
      ]
    ]
  },
  {
    "name": "Amit Wasson",
    "title": "Director, Information Technology Security",
    "company": "Intuitive",
    "industry": "Medical Equipment Manufacturing",
    "employees": "10,000+",
    "li": "https://www.linkedin.com/in/amitwasson/",
    "ae": "",
    "src": false,
    "whoTheyAre": [
      "Director, Information Technology Security at Intuitive since October 2021 (Sr. Manager, InfoSec there from July 2018). Based in Sunnyvale. Leads enterprise IT security.",
      "Career: Aspen Communications (2005–06) → Network Security Consultant at Wachovia (2006–07) → Sr. TPM, InfoSec at KLA-Tencor (2007–18) → Intuitive (2018–present).",
      "Education: Stanford Advanced Cybersecurity Certificate; Bachelor's, Delhi University.",
      "Active in the community: Tejas Cyber Network member spotlight; participant in the ISC2 East Bay chapter's 2024 Cyber in Healthtech event."
    ],
    "aiInitiatives": "See also Netsai Massetti (same company). Intuitive's da Vinci 5 ecosystem feeds Case Insights analytics from system telemetry, video, kinematics and force data, and it describes a validated, surgeon-controlled AI strategy.\n\nIntuitive cites HITRUST and NIST-aligned design, ISO 27001:2022 certification, encryption, continuous monitoring and vulnerability analysis in its security posture.",
    "worldRightNow": "Two Intuitive security and privacy leaders registered (Amit and Netsai), a rare chance to talk to both sides of the same account.",
    "painPoints": [
      "Enterprise IT security across a global medical device manufacturer (our read).",
      "Data flowing from devices into analytics and AI features."
    ],
    "sources": [
      [
        "LinkedIn profile (read Nov 17, 2026)",
        "https://linkedin.com/in/amitwasson"
      ],
      [
        "Neuron profile",
        "https://neuron.com/profile/5267994873/amit-wasson"
      ],
      [
        "Tejas Cyber Network member spotlight",
        "https://www.linkedin.com/posts/tejas-cyber-network_cybersecurity-ciso-securityleadership-activity-7484993166606032896-rNs6"
      ],
      [
        "Intuitive: AI-enabled future of healthcare",
        "https://investor.intuitivesurgical.com/news-releases/news-release-details/intuitive-shares-vision-ai-enabled-future-healthcare/"
      ]
    ]
  },
  {
    "name": "Steve Kim",
    "title": "Director of Security",
    "company": "Ethos",
    "industry": "Insurance",
    "employees": "501–1,000",
    "li": "https://www.linkedin.com/in/hykim/",
    "ae": "Jordan",
    "src": false,
    "verify": "Role and background are now confirmed on LinkedIn. The May 2026 ChatGPT-integrated product claim comes from the SF brief and is not verified; confirm it or drop it. The IPO details are also carried from the SF brief.",
    "whoTheyAre": [
      "Director of Security at Ethos since April 2026 (Principal Security Engineer there 2024–26). AI Security and Product Security specialist.",
      "Career: Director of Product Security Architecture at Coupang (2019–24) → Ethos (2024–present).",
      "Certifications: CISSP, GSSP-JAVA (per SF brief). Education: MS Computer Science, New Jersey Institute of Technology; BS Computer Science, University of Bridgeport.",
      "Also Assistant Scout Master, Bay Area Council, Boy Scouts of America (per SF brief)."
    ],
    "aiInitiatives": "Ethos listed on Nasdaq on January 29–30, 2026 (ticker LIFE, $19 per share), which brought SEC cybersecurity disclosure obligations (Regulation S-K Item 106) into scope (per SF brief).\n\nQ3 2026 results: $235.2M revenue, up 151% year over year, 142,111 policies activated and $34.9M adjusted EBITDA. Its underwriting is rules-based (about 40,000 rules drawn from a library of over a million, informed by roughly 200,000 to 250,000 data points per application); AI is used to suggest rule-set improvements and humans audit the outcomes. Per the SF brief, Ethos also launched a ChatGPT-integrated life insurance product in May 2026.",
    "worldRightNow": "Public company, growing fast (revenue +151% in Q3), with a security team that has to document its program annually.",
    "painPoints": [
      "Sensitive health and financial data in applications, now under public-company disclosure rules.",
      "Third-party channel growth means more data moving between partners.",
      "ChatGPT integration is a new AI data surface (per SF brief)."
    ],
    "sources": [
      [
        "LinkedIn profile (read Nov 17, 2026)",
        "https://www.linkedin.com/in/hykim/"
      ],
      [
        "Ethos Q3 2026 results (SEC exhibit 99.1)",
        "https://www.sec.gov/Archives/edgar/data/1788451/000119312526443655/life-ex99_1.htm"
      ],
      [
        "Ethos Q3 2026 earnings call transcript",
        "https://www.fool.com/earnings/call-transcripts/2026/11/02/ethos-life-q3-2026-earnings-call-transcript/"
      ],
      [
        "SF brief (June 2026)",
        "https://dhairya-bedrock.github.io/bedrock-sf-brief/index.html"
      ]
    ]
  },
  {
    "name": "Ravi Kasamsetty",
    "title": "VP of Engineering, AI",
    "company": "Komodo Health",
    "industry": "Hospitals & Healthcare",
    "employees": "501–1,000",
    "li": "https://www.linkedin.com/in/ravikanthkasamsetty/",
    "ae": "",
    "src": false,
    "status": "Status blank in sheet (not marked Approved)",
    "whoTheyAre": [
      "New in seat. VP of Engineering, AI at Komodo Health since August 2026. Leads the core AI platform built on Komodo's Healthcare Map.",
      "Career: Milestone (VP Engineering, 2019–21) → Promethium (VP Engineering, 2021–24) → ServiceChannel (VP Engineering, 2025) → Plume (Engineering Leader, Data & AI Platforms, 2025–26) → Komodo Health (Aug 2026–present).",
      "Education: BTech Computer Science & Engineering, IIT Kharagpur; MS Computer Science & Engineering, Penn State."
    ],
    "aiInitiatives": "Komodo's Marmot platform uses AI agents to turn natural-language questions into structured plans that run deterministic SQL and cohort logic on the Healthcare Map; the LLM does not calculate the numbers. Komodo says governance is built into the query path: role-based access, tenant isolation, data residency, audit logs, evaluation gates and human review for high-stakes outputs.\n\nThe Marmot November 2026 release added Cohort Insights and Marmot Builder (versioned, inspectable SQL, Python and R for reproducible analyses). Komodo also publishes on 'verifiable AI' and trust in healthcare AI.",
    "worldRightNow": "Healthcare data company putting agents on top of a large patient-level dataset. His mandate covers trusted AI, agent infrastructure, evaluations, observability and governance.",
    "painPoints": [
      "Governance of agents over patient-level data, which he is explicitly responsible for.",
      "Customer proof of tenant isolation and residency (our read)."
    ],
    "sources": [
      [
        "LinkedIn profile (read Nov 17, 2026)",
        "https://linkedin.com/in/ravikanthkasamsetty"
      ],
      [
        "Komodo: welcome post",
        "https://www.linkedin.com/posts/komodo-health_welcomedragon-onekomodo-engineeringleadership-activity-7493712993432707073-s0QP"
      ],
      [
        "Komodo: framework for trusted AI in healthcare",
        "https://www.komodohealth.com/perspectives/building-the-framework-for-trusted-ai-in-healthcare/"
      ],
      [
        "Komodo Marmot product",
        "https://www.komodohealth.com/product/marmot/"
      ],
      [
        "Marmot November 2026 release",
        "https://www.komodohealth.com/perspectives/marmot-november-2026-release-cohort-insights-and-marmot-builder/"
      ]
    ]
  },
  {
    "name": "Jim Nagata",
    "title": "VP, IT & Cybersecurity",
    "company": "Hansen Hunter",
    "industry": "Business & compliance services for long-term care",
    "li": "https://www.linkedin.com/in/jim-nagata-cissp-838424a/",
    "ae": "",
    "src": false,
    "status": "Status blank in sheet (not marked Approved)",
    "verify": "The registration sheet lists Ridgeline as his company. His LinkedIn does not show Ridgeline; it shows Hansen Hunter. Confirm which he's attending for.",
    "whoTheyAre": [
      "VP, IT & Cybersecurity at Hansen Hunter since September 2026 (LinkedIn).",
      "Career: Director of IT at SAE Expression College (2012–14) → Director of Infrastructure & Security at Jamba Juice (2014–17) → Sr. Director, Cybersecurity & IT Ops at Armanino (Sep 2017–Jan 2026) → CISO at Cherry Bekaert (Jan–Aug 2026) → Hansen Hunter (Sep 2026–present).",
      "LinkedIn post: 15+ years advancing cybersecurity and IT transformation across financial services, media, retail and higher education. CISSP.",
      "Education: BA International Business, San Francisco State University; MBA (MIS), Argosy University."
    ],
    "aiInitiatives": "Hansen Hunter & Co. provides technology-enabled business, accounting, compliance and clinical services (billing, reimbursement, cost reporting, tax, audits, licensure) to post-acute care, long-term care and senior living organizations. Ryan Prindiville was announced as its leader.\n\nNot found: any public Hansen Hunter AI or data security initiative.",
    "worldRightNow": "Joined Hansen Hunter in September 2026, after about eight years at Armanino and a short CISO stint at Cherry Bekaert. New to the role.",
    "painPoints": [
      "Unknown. Lead with open questions about his new role."
    ],
    "sources": [
      [
        "LinkedIn profile (read Nov 17, 2026)",
        "https://www.linkedin.com/in/jim-nagata-cissp-838424a/"
      ],
      [
        "Hansen Hunter",
        "https://www.hansen-hunter.com/"
      ],
      [
        "Hansen Hunter: new leader",
        "https://www.hansen-hunter.com/ryan-prindiville-to-lead-hansen-hunter/"
      ]
    ]
  }
];
