import type { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ChevronRight, 
  Home, 
  Cpu, 
  PhoneCall,
  GitFork,
  Radio,
  Server,
  Workflow
} from "lucide-react";

export const metadata: Metadata = {
  title: "CRM API Integration Services India | WhatsApp, ERP & Telephony Integration",
  description:
    "Enterprise CRM API integration services in India. Connect WhatsApp Cloud API, payment gateways, ERP (SAP/Tally), telephony, and custom RESTful/GraphQL APIs seamlessly.",
  keywords: [
    "crm api integration",
    "crm api integration services",
    "whatsapp cloud api crm integration",
    "crm telephony integration",
    "erp crm integration india",
    "custom crm webhook integrations",
    "meta ads crm integration"
  ],
  alternates: {
    canonical: "https://crmdevelopment.in/services/crm-api-integration",
  },
  openGraph: {
    title: "CRM API Integration Services | crmdevelopment.in",
    description:
      "Connect your custom or legacy CRM with WhatsApp Cloud API, payment gateways, VoIP telephony, ERPs, and marketing automation tools.",
    url: "https://crmdevelopment.in/services/crm-api-integration",
    type: "article",
  },
};

export default function CrmApiIntegrationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "CRM API Integration Services",
    "provider": {
      "@type": "Organization",
      "name": "crmdevelopment.in",
      "url": "https://crmdevelopment.in",
      "telephone": "+919990613140"
    },
    "description": "High-throughput, asynchronous CRM API integration for WhatsApp, ERPs, Telephony, and custom software pipelines.",
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
            <span className="font-semibold text-slate-800">CRM API Integration</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 border-b border-slate-100 bg-gradient-to-b from-blue-50/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-4">
                <GitFork className="w-3.5 h-3.5" />
                Zero-Latency Webhook Buffering • Sub-50ms Sync
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Enterprise CRM API Integration Services
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                Eliminate disconnected data silos. We architect rock-solid REST, GraphQL, and webhook data pipelines connecting your CRM to WhatsApp Cloud API, cloud telephony, payment gateways, and enterprise ERP backends.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#ff6b1e] hover:bg-[#e65a12] text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#ff6b1e]/25 hover:shadow-xl transition-all"
                >
                  <span>Discuss Your API Integration Needs</span>
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

        {/* Key Integrations Grid */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Native API Integrations We Engineer
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Robust, queue-backed connections built with Redis and BullMQ to guarantee 100% data delivery without message loss during traffic spikes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "WhatsApp Cloud API Integration",
                  desc: "Connect directly to Meta's official WhatsApp Business Cloud API. Automate lead welcome sequences, send template messages, and enable live two-way chat."
                },
                {
                  title: "Cloud Telephony (Exotel / Knowlarity)",
                  desc: "Click-to-call direct from the CRM, automatic incoming call pop-ups, agent call recordings stored securely, and IVR lead routing."
                },
                {
                  title: "ERP & Accounting Systems",
                  desc: "Two-way data sync between CRM and ERPs like SAP, Tally Prime, Zoho Books, and Microsoft Dynamics for real-time invoice and inventory visibility."
                },
                {
                  title: "Meta & Google Ads Webhooks",
                  desc: "Real-time ingestion of leads from Facebook Ads, Instagram Ads, and Google Lead Forms with zero lag and instant agent assignment."
                },
                {
                  title: "Payment Gateways (Razorpay / Stripe)",
                  desc: "Generate payment links directly from deals, track transaction statuses, and automatically move leads to 'Closed Won' on payment confirmation."
                },
                {
                  title: "Email & Calendar Synchronization",
                  desc: "Deep integration with Google Workspace, Microsoft Outlook 365, and SendGrid for tracking email opens, replies, and scheduling demos."
                }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
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
              Need Reliable API Integration for Your Systems?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Our API architects handle webhook concurrency, rate limits, and bi-directional synchronizations with 99.99% reliability.
            </p>
            <Link
              href="/contact"
              className="bg-[#ff6b1e] hover:bg-[#e65a12] text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>Get API Integration Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
