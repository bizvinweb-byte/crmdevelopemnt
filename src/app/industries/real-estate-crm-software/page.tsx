import type { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Home, 
  Building2,
  PhoneCall,
  MapPin,
  Key,
  ShieldCheck,
  TrendingUp,
  Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate CRM Software Development India | Custom CRM for Builders & Brokers",
  description:
    "Top Real Estate CRM Software Development Company in India. Custom CRM for builders, developers, and property brokers with automated site-visit tracking, inventory management & WhatsApp integration.",
  keywords: [
    "real estate crm development",
    "real estate crm software india",
    "custom crm for builders",
    "real estate lead management software",
    "broker crm development company",
    "property inventory management crm",
    "real estate crm development noida delhi"
  ],
  alternates: {
    canonical: "https://crmdevelopment.in/industries/real-estate-crm-software",
  },
  openGraph: {
    title: "Real Estate CRM Development Company India | crmdevelopment.in",
    description:
      "Transform property sales with custom Real Estate CRM software. Site visit scheduling, unit availability inventory matrix, broker commission management.",
    url: "https://crmdevelopment.in/industries/real-estate-crm-software",
    type: "article",
  },
};

export default function RealEstateCrmPage() {
  const industrySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Real Estate CRM Development Services",
    "provider": {
      "@type": "Organization",
      "name": "crmdevelopment.in",
      "url": "https://crmdevelopment.in",
      "telephone": "+919990613140"
    },
    "description": "Specialized custom CRM development for real estate builders, developers, channel partners, and brokers.",
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
            <span className="font-semibold text-slate-800">Real Estate CRM Software</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 border-b border-slate-100 bg-gradient-to-b from-orange-50/40 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ef] border border-[#ffd5be] text-[#ff6b1e] text-xs font-bold mb-4">
                <Building2 className="w-3.5 h-3.5" />
                Built for Real Estate Builders, Developers &amp; IPCs
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Custom Real Estate CRM Software Development
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                Accelerate property closures and eliminate lead leakage. We engineer bespoke Real Estate CRMs with native site visit management, live unit inventory matrix, channel partner portals, and automated WhatsApp nurturing.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#ff6b1e] hover:bg-[#e65a12] text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#ff6b1e]/25 hover:shadow-xl transition-all"
                >
                  <span>Build Custom Real Estate CRM</span>
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

        {/* Real Estate Specific Modules */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Specialized Modules for Real Estate Leaders
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Generic CRMs fail in real estate because they lack inventory mapping and site-visit lifecycles. Our custom software is purpose-built.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Interactive Unit Inventory Matrix",
                  desc: "Real-time color-coded tower/floor inventory map. View available, booked, blocked, and registered flats/plots instantly to avoid double bookings."
                },
                {
                  title: "Site Visit Tracking & Geofencing",
                  desc: "Schedule site visits, generate QR-code passes for clients, and enable geofenced mobile check-ins for property sales executives on site."
                },
                {
                  title: "Channel Partner (CP) Broker Portal",
                  desc: "Dedicated portal for brokers and IPCs to register buyer leads, track deal progression, and calculate commission payout milestones transparently."
                },
                {
                  title: "Instant Portal Lead Ingestion",
                  desc: "Automated real-time capture from 99acres, MagicBricks, Housing.com, Meta Ads, and Google PPC with instant round-robin calling triggers."
                },
                {
                  title: "Cost Sheet & Quotation Generator",
                  desc: "Generate PDF payment plans (CLP, Down Payment, Possession-linked) with GST calculations, parking slots, and PLC charges with one click."
                },
                {
                  title: "Automated WhatsApp Buyer Nurturing",
                  desc: "Send project brochures, walk-through videos, and construction milestone photos straight to prospects over verified WhatsApp Cloud API."
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

        {/* Bottom CTA */}
        <section className="py-16 bg-slate-950 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-4">
              Scale Your Real Estate Sales Operation
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Book a live consultation with our real estate technology architects. We will show you working demonstrations and outline a custom roadmap.
            </p>
            <Link
              href="/contact"
              className="bg-[#ff6b1e] hover:bg-[#e65a12] text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>Get Real Estate CRM Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
