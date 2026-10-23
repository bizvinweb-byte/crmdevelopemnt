import type { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Database, 
  Layers, 
  TrendingUp, 
  ChevronRight, 
  Home, 
  Cpu, 
  Users, 
  Building2,
  Lock,
  PhoneCall
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom CRM Development Company India | Bespoke Enterprise CRM Software",
  description:
    "Leading custom CRM development company in India. We engineer bespoke, AI-powered CRM systems tailored 100% to your workflows with zero per-user licensing fees.",
  keywords: [
    "custom crm development",
    "custom crm software development company",
    "bespoke crm developers",
    "custom crm india",
    "enterprise crm solutions",
    "custom sales crm",
    "b2b crm development",
    "custom crm software builders"
  ],
  alternates: {
    canonical: "https://crmdevelopment.in/services/custom-crm-development",
  },
  openGraph: {
    title: "Custom CRM Development Company India | crmdevelopment.in",
    description:
      "Build a scalable custom CRM without recurring per-seat fees. Full code ownership, custom workflows, AI deal scoring, and sub-second performance.",
    url: "https://crmdevelopment.in/services/custom-crm-development",
    type: "article",
  },
};

export default function CustomCrmDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom CRM Development Services",
    "provider": {
      "@type": "Organization",
      "name": "crmdevelopment.in",
      "url": "https://crmdevelopment.in",
      "telephone": "+919990613140",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8th Floor, ITHUM TOWER, B-806, Block A, Sector 62",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201309",
        "addressCountry": "IN"
      }
    },
    "description": "Tailored, bespoke CRM software development with 100% source code ownership and zero recurring user licenses for high-growth enterprises.",
    "areaServed": ["India", "Global"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Custom CRM Engineering Modules",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bespoke Sales Pipeline Automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Contact & Account Governance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Omnichannel WhatsApp & Telephony Ingestion"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://crmdevelopment.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://crmdevelopment.in/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Custom CRM Development",
        "item": "https://crmdevelopment.in/services/custom-crm-development"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="pt-24 sm:pt-28 bg-white min-h-screen">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <nav aria-label="Breadcrumb" className="flex items-center text-xs text-slate-500 gap-1.5">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-[#ff6b1e] transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/#services" className="hover:text-[#ff6b1e] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-800">Custom CRM Development</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 border-b border-slate-100 bg-gradient-to-b from-orange-50/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ef] border border-[#ffd5be] text-[#ff6b1e] text-xs font-bold mb-4">
                <Zap className="w-3.5 h-3.5" />
                Zero Recurring Seat Licenses • 100% Code Ownership
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Custom CRM Software Development Services in India
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                Break free from generic, rigid SaaS platforms like Salesforce, Zoho, and HubSpot. At <strong className="text-slate-900 font-semibold">crmdevelopment.in</strong>, we build high-performance custom CRM systems specifically architected to mirror your exact sales workflows, team hierarchy, and business automation logic.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#ff6b1e] hover:bg-[#e65a12] text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#ff6b1e]/25 hover:shadow-xl transition-all"
                >
                  <span>Request Custom CRM Architecture Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919990613140"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 text-sm font-bold px-6 py-3.5 rounded-xl border border-slate-200 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-[#ff6b1e]" />
                  <span>Call +91 99906 13140</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Core Value Props */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Why Custom CRM Beats Commercial Off-the-Shelf SaaS
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Commercial CRMs charge exorbitant per-user monthly fees while locking your proprietary business data behind proprietary APIs. Here is why bespoke development delivers a 3.8x higher ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-7 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#ff6b1e] mb-5">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">100% Intellectual Property Ownership</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  You own the complete codebase, database schemas, and architectural blueprints. Host securely on your own AWS, Azure, or private cloud with zero vendor lock-in.
                </p>
              </div>

              <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-7 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-5">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Zero Per-User Recurring Fees</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Scale your sales force from 10 to 1,000+ reps without your software subscription inflating. Pay once for development and pay only modest server hosting costs.
                </p>
              </div>

              <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-7 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-5">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Tailored Workflows & AI Intelligence</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No unnecessary feature bloat. Build custom lead scoring algorithms, automated WhatsApp triggers, multi-level commission payouts, and sub-second dashboards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Modules */}
        <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Enterprise Custom CRM Modules We Engineer
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Every component is modular and engineered for maximum speed, security, and scalability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Lead Capture & Round-Robin Routing",
                  desc: "Instantly capture leads from Meta Ads, Google Ads, website webhooks, and IndiaMart. Automatically route leads based on agent performance, territory, or language."
                },
                {
                  title: "Omnichannel WhatsApp & Calling Suite",
                  desc: "Native WhatsApp Cloud API integration with automated conversational bots, click-to-call telephony (Exotel/Knowlarity), and automated call recording logging."
                },
                {
                  title: "Dynamic Visual Pipeline Stages",
                  desc: "Drag-and-drop Kanban deal boards customized to your precise closing milestones, quotation generation, and automated follow-up reminders."
                },
                {
                  title: "Granular Role-Based Permissions",
                  desc: "Control who sees what down to individual field levels. Mask phone numbers to prevent data leakage and maintain enterprise data privacy."
                },
                {
                  title: "ERP & Accounting Integration",
                  desc: "Seamless two-way synchronization with Tally, SAP, Zoho Books, QuickBooks, and proprietary inventory databases."
                },
                {
                  title: "AI Deal Intelligence & Forecasting",
                  desc: "Predictive deal scoring and sentiment analysis to identify at-risk accounts before they churn and forecast monthly revenue with 94%+ accuracy."
                }
              ].map((mod, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-[#ff6b1e] flex-shrink-0" />
                      <h3 className="font-bold text-slate-900 text-base">{mod.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{mod.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[#ff8843] text-xs font-bold uppercase tracking-wider mb-2 block">
                  Tech Stack Standards
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
                  Built on Modern, High-Speed Technologies
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-2xl">
                  We don&apos;t build clunky monolithic apps. Our custom CRMs leverage Next.js, Node.js, TypeScript, PostgreSQL, Redis caching, and Docker containers for enterprise-grade 99.99% uptime.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800 text-xs text-slate-400">
                  <div>
                    <strong className="text-white block font-bold text-sm">Frontend</strong>
                    <span>Next.js 15, React, Tailwind CSS</span>
                  </div>
                  <div>
                    <strong className="text-white block font-bold text-sm">Backend & APIs</strong>
                    <span>Node.js / Express, Python FastAPI</span>
                  </div>
                  <div>
                    <strong className="text-white block font-bold text-sm">Databases</strong>
                    <span>PostgreSQL, Prisma ORM, Redis</span>
                  </div>
                  <div>
                    <strong className="text-white block font-bold text-sm">Cloud & DevOps</strong>
                    <span>AWS ECS, Docker, Cloudflare</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-[#ff6b1e] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-4">
              Ready to Build Your Bespoke CRM System?
            </h2>
            <p className="text-white/90 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Get in touch with our senior CRM architects today. We will analyze your current sales workflows and provide a tailored technical scope and quotation within 24 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg"
              >
                Schedule Free Technical Consultation
              </Link>
              <Link
                href="/"
                className="text-white hover:text-white/80 font-semibold text-sm underline underline-offset-4"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
