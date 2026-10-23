import type { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Home, 
  Briefcase,
  PhoneCall,
  TrendingUp,
  BarChart3,
  Layers
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2B Custom CRM Development India | Enterprise Lead & Pipeline Software",
  description:
    "Custom B2B CRM software development in India. Multi-stakeholder account management, complex quoting (CPQ), contract lifecycle tracking, and enterprise pipeline velocity.",
  keywords: [
    "b2b custom crm",
    "b2b crm development",
    "b2b lead management software india",
    "enterprise sales pipeline software",
    "account based marketing crm",
    "custom cpq crm development"
  ],
  alternates: {
    canonical: "https://crmdevelopment.in/industries/b2b-custom-crm",
  },
  openGraph: {
    title: "B2B Custom CRM Development | crmdevelopment.in",
    description:
      "Close complex high-ticket deals with bespoke B2B CRM software designed for multi-tier decision makers, proposal tracking, and account intelligence.",
    url: "https://crmdevelopment.in/industries/b2b-custom-crm",
    type: "article",
  },
};

export default function B2bCustomCrmPage() {
  const industrySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "B2B Custom CRM Development",
    "provider": {
      "@type": "Organization",
      "name": "crmdevelopment.in",
      "url": "https://crmdevelopment.in",
      "telephone": "+919990613140"
    },
    "description": "Bespoke B2B CRM engineering for complex enterprise sales cycles, multi-touch attribution, and key account management.",
    "areaServed": ["India", "Global"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySchema) }}
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
            <Link href="/#industries" className="hover:text-[#ff6b1e] transition-colors">
              Industries
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-800">B2B Custom CRM</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold mb-4">
                <Briefcase className="w-3.5 h-3.5 text-[#ff6b1e]" />
                Engineered for Long Sales Cycles &amp; High Contract Values
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Custom B2B CRM Software Development
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                B2B enterprise sales involve multiple decision-makers, custom pricing matrices, and months-long procurement cycles. We build bespoke B2B CRMs that organize key account relationships and drive higher contract win rates.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#ff6b1e] hover:bg-[#e65a12] text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#ff6b1e]/25 hover:shadow-xl transition-all"
                >
                  <span>Build Custom B2B CRM</span>
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

        {/* B2B Modules */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Core Modules for B2B Enterprise Selling
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Everything required to govern key corporate accounts, complex quoting, and post-sales client onboarding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Account-Based Relationship Hierarchy",
                  desc: "Map parent companies, global subsidiaries, and multiple stakeholders (economic buyers, technical evaluators, legal) within a single unified account tree."
                },
                {
                  title: "Custom CPQ (Configure, Price, Quote)",
                  desc: "Generate accurate, branded PDF proposals and commercial quotes with tiered volume pricing, service discount approval workflows, and e-signatures."
                },
                {
                  title: "Contract & SLA Renewal Alerts",
                  desc: "Track annual maintenance contracts (AMCs), Master Service Agreements (MSAs), and trigger automated renewal notifications 90/60/30 days before expiration."
                },
                {
                  title: "Activity & Meeting Intelligence",
                  desc: "Sync Google Meet / Zoom meeting recordings, summarize action items automatically with AI, and link them to opportunity deal cards."
                },
                {
                  title: "Milestone-Based Pipeline Board",
                  desc: "Track procurement, security audits, RFP responses, and legal reviews with custom milestone checklists for each pipeline phase."
                },
                {
                  title: "Post-Sale Handover to Delivery",
                  desc: "Automatically push closed-won deals to project management systems (Jira/Trello/Custom) with all client requirements and signed contracts."
                }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ff6b1e] flex-shrink-0" />
                    <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-950 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-4">
              Modernize Your B2B Enterprise Sales Engine
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Schedule a strategy session to evaluate how a custom B2B CRM can streamline your enterprise deals.
            </p>
            <Link
              href="/contact"
              className="bg-[#ff6b1e] hover:bg-[#e65a12] text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>Speak to B2B Solutions Architect</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
