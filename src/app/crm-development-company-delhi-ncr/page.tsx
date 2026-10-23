import type { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Home, 
  MapPin,
  PhoneCall,
  Building,
  ShieldCheck,
  Star,
  Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "Top CRM Development Company in Delhi NCR | Custom CRM Software Developers",
  description:
    "Leading Custom CRM Development Company in Delhi NCR (Delhi, Noida, Gurgaon, Faridabad). Enterprise-grade bespoke CRM software with zero per-user licensing fees.",
  keywords: [
    "crm development company delhi ncr",
    "crm development company delhi",
    "custom crm software delhi ncr",
    "crm developers gurgaon",
    "crm software company delhi",
    "bespoke crm developers delhi"
  ],
  alternates: {
    canonical: "https://crmdevelopment.in/crm-development-company-delhi-ncr",
  },
  openGraph: {
    title: "CRM Development Company in Delhi NCR | crmdevelopment.in",
    description:
      "Enterprise custom CRM development services across Delhi NCR. 100% intellectual property ownership, custom sales pipelines & WhatsApp Cloud API integration.",
    url: "https://crmdevelopment.in/crm-development-company-delhi-ncr",
    type: "article",
  },
};

export default function CrmDevelopmentDelhiNcrPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "crmdevelopment.in - CRM Development Company Delhi NCR",
    "image": "https://crmdevelopment.in/icon.png",
    "telephone": "+919990613140",
    "email": "contact@crmdevelopment.in",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8th Floor, ITHUM TOWER, B-806, Block A, Industrial Area, Sector 62",
      "addressLocality": "Noida / Delhi NCR",
      "addressRegion": "Uttar Pradesh / Delhi NCR",
      "postalCode": "201309",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6280,
      "longitude": 77.3649
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
            <span className="font-semibold text-slate-800">CRM Development Company Delhi NCR</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 border-b border-slate-100 bg-gradient-to-b from-orange-50/40 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ef] border border-[#ffd5be] text-[#ff6b1e] text-xs font-bold mb-4">
                <MapPin className="w-3.5 h-3.5" />
                Serving Delhi, Noida, Gurgaon, Faridabad &amp; Ghaziabad
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Leading CRM Development Company in Delhi NCR
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                Empower your sales and operations with custom-crafted CRM software built right here in the National Capital Region. At <strong className="text-slate-900 font-semibold">crmdevelopment.in</strong>, we help Delhi NCR enterprises save millions in SaaS licensing while gaining 100% control over their customer relationships.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#ff6b1e] hover:bg-[#e65a12] text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#ff6b1e]/25 hover:shadow-xl transition-all"
                >
                  <span>Request Free CRM Architecture Proposal</span>
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

        {/* Coverage Across NCR */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Full Coverage Across Delhi National Capital Region
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Our senior software consultants provide both on-site meetings and dedicated virtual strategy workshops throughout the NCR territory.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  city: "Delhi (Central, South & West)",
                  desc: "Custom CRM architectures for trading firms, manufacturers, healthcare providers, and consultancy businesses in Connaught Place, Nehru Place, Okhla, and Rajouri Garden."
                },
                {
                  city: "Noida & Greater Noida",
                  desc: "Direct support from our Sector 62 technology hub for real estate developers, educational institutions, IT service providers, and export houses."
                },
                {
                  city: "Gurgaon (Gurugram)",
                  desc: "High-scale enterprise CRMs and AI sales pipelines for Cyber City, Golf Course Road, and Udyog Vihar startups and corporate conglomerates."
                }
              ].map((loc, i) => (
                <div key={i} className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{loc.city}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{loc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-950 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-4">
              Looking for a Trusted Delhi NCR CRM Partner?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Contact our solutions engineering team today. We deliver working prototypes and comprehensive roadmaps within 48 hours.
            </p>
            <Link
              href="/contact"
              className="bg-[#ff6b1e] hover:bg-[#e65a12] text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
