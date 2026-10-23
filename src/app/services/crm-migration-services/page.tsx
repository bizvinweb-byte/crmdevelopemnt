import type { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Home, 
  RefreshCw,
  Database,
  ShieldCheck,
  PhoneCall
} from "lucide-react";

export const metadata: Metadata = {
  title: "CRM Migration Services India | Migrate from Salesforce, HubSpot & Zoho",
  description:
    "Zero-downtime CRM data migration services in India. Migrate historical records, contact data, activities, and pipelines from Salesforce, HubSpot, Zoho, or legacy SQL to custom CRM.",
  keywords: [
    "crm migration services",
    "salesforce to custom crm migration",
    "hubspot migration services",
    "zoho crm migration india",
    "legacy crm data migration",
    "zero downtime crm migration"
  ],
  alternates: {
    canonical: "https://crmdevelopment.in/services/crm-migration-services",
  },
  openGraph: {
    title: "CRM Migration Services India | crmdevelopment.in",
    description:
      "Seamlessly migrate historical data, contacts, and custom pipelines from Salesforce, HubSpot, or Zoho with 100% data integrity.",
    url: "https://crmdevelopment.in/services/crm-migration-services",
    type: "article",
  },
};

export default function CrmMigrationServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "CRM Migration Services",
    "provider": {
      "@type": "Organization",
      "name": "crmdevelopment.in",
      "url": "https://crmdevelopment.in",
      "telephone": "+919990613140"
    },
    "description": "Enterprise-grade CRM data migration and database transformation with zero downtime and strict data security protocols.",
    "areaServed": ["India", "Global"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
            <span className="font-semibold text-slate-800">CRM Migration Services</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 border-b border-slate-100 bg-gradient-to-b from-emerald-50/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-4">
                <RefreshCw className="w-3.5 h-3.5" />
                Zero Data Loss • Strict NDA Protection
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Zero-Downtime CRM Data Migration Services
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                Ready to escape exorbitant commercial SaaS pricing? We securely migrate millions of historical customer records, sales activities, attachments, and deal pipelines to your modern custom CRM architecture without disrupting daily sales operations.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#ff6b1e] hover:bg-[#e65a12] text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#ff6b1e]/25 hover:shadow-xl transition-all"
                >
                  <span>Request Migration Assessment</span>
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

        {/* Platforms Migrated From */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Seamless Migration from Major Platforms
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                We write custom ETL (Extract, Transform, Load) pipelines to sanitize, deduplicate, and map your existing datasets into modern relational structures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  platform: "Salesforce Migration",
                  points: [
                    "Full extraction of standard & custom objects",
                    "Migration of Lead, Contact, Account, & Opportunity schemas",
                    "Preservation of audit history and communication logs"
                  ]
                },
                {
                  platform: "HubSpot Migration",
                  points: [
                    "Complete contact timeline and email interaction export",
                    "De-duplication of marketing contact records",
                    "Rebuilding automated email sequences into custom workflows"
                  ]
                },
                {
                  platform: "Zoho / Legacy SQL DBs",
                  points: [
                    "Relational normalization from older MySQL/MS-SQL schemas",
                    "Data cleansing and phone number standardization",
                    "Re-mapping legacy custom fields to modern PostgreSQL tables"
                  ]
                }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-lg mb-4">{item.platform}</h3>
                  <ul className="space-y-3">
                    {item.points.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-950 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-4">
              Plan Your Safe CRM Migration Today
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Our migration specialists execute test migrations in staging environments before switching production to ensure 100% data fidelity.
            </p>
            <Link
              href="/contact"
              className="bg-[#ff6b1e] hover:bg-[#e65a12] text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>Speak to Migration Expert</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
