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
  title: "Top CRM Development Company in Noida Sector 62 | Custom CRM Developers",
  description:
    "Leading Custom CRM Development Company in Noida, Sector 62. We engineer bespoke, AI-powered CRM systems for Noida & Delhi NCR businesses with 100% code ownership & zero per-seat fees.",
  keywords: [
    "crm development company in noida",
    "crm development company noida sector 62",
    "custom crm software noida",
    "crm developers noida",
    "crm software company in noida",
    "bespoke crm developers delhi ncr"
  ],
  alternates: {
    canonical: "https://crmdevelopment.in/crm-development-company-in-noida",
  },
  openGraph: {
    title: "CRM Development Company in Noida | crmdevelopment.in",
    description:
      "Visit our engineering center at ITHUM Tower, Sector 62, Noida. Custom CRM software tailored for NCR enterprises with zero monthly user licenses.",
    url: "https://crmdevelopment.in/crm-development-company-in-noida",
    type: "article",
  },
};

export default function CrmDevelopmentNoidaPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "crmdevelopment.in - CRM Development Company in Noida",
    "image": "https://crmdevelopment.in/icon.png",
    "telephone": "+919990613140",
    "email": "contact@crmdevelopment.in",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8th Floor, ITHUM TOWER, B-806, Block A, Industrial Area, Sector 62",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201309",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6280,
      "longitude": 77.3649
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:30",
      "closes": "19:00"
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
            <span className="font-semibold text-slate-800">CRM Development Company in Noida</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 border-b border-slate-100 bg-gradient-to-b from-orange-50/40 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff5ef] border border-[#ffd5be] text-[#ff6b1e] text-xs font-bold mb-4">
                <MapPin className="w-3.5 h-3.5" />
                Physical Development Center: Sector 62, Noida, NCR
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                #1 Custom CRM Development Company in Noida
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                Looking for a dependable, local CRM software development team in Noida? Located at <strong className="text-slate-900 font-semibold">ITHUM Tower, Sector 62, Noida</strong>, our senior engineering team builds high-speed, bespoke CRM systems for growing businesses across Noida, Greater Noida, and Delhi NCR.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#ff6b1e] hover:bg-[#e65a12] text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#ff6b1e]/25 hover:shadow-xl transition-all"
                >
                  <span>Book In-Person Meeting at Noida Office</span>
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

        {/* Local Office Details */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-[#ff6b1e] text-xs font-bold uppercase tracking-wider">
                  <Building className="w-4 h-4" />
                  <span>Local Development &amp; Support</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Why Noida &amp; NCR Enterprises Choose crmdevelopment.in
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Unlike remote agencies where you never meet the engineers, we invite you to our development office in Sector 62, Noida. We pair-program, conduct whiteboard scoping workshops, and provide hands-on training to your local sales team.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Direct in-person requirement analysis at your office or ours in Noida.",
                    "100% intellectual property & source code handover on day one.",
                    "Zero recurring per-user SaaS license fees — keep your team costs fixed.",
                    "Same day on-site enterprise support across Noida, Greater Noida, and Delhi."
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#ff6b1e]" />
                  <span>Noida Headquarter Address</span>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                  <strong>Brandmingo / crmdevelopment.in</strong><br />
                  8th Floor, ITHUM TOWER, B-806, Block A,<br />
                  Industrial Area, Sector 62,<br />
                  Noida, Uttar Pradesh 201309 (India)
                </p>
                <div className="space-y-3 pt-4 border-t border-slate-200 text-xs text-slate-600">
                  <p><strong>Nearest Metro Station:</strong> Noida Electronic City (Blue Line) - 5 mins walk</p>
                  <p><strong>Working Hours:</strong> Mon - Sat: 9:30 AM to 7:00 PM</p>
                  <p><strong>Direct Hotline:</strong> <a href="tel:+919990613140" className="text-[#ff6b1e] font-bold">+91 99906 13140</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-950 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-4">
              Schedule Your Free In-Person CRM Strategy Session in Noida
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Meet our senior architects at Sector 62, Noida, and let us design a CRM architecture that will streamline your sales team.
            </p>
            <Link
              href="/contact"
              className="bg-[#ff6b1e] hover:bg-[#e65a12] text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>Schedule Noida Office Meeting</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
