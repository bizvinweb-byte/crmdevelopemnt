import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home, ShieldCheck, Clock, Award } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Schedule Free CRM Architecture Strategy Session",
  description:
    "Get in touch with crmdevelopment.in. Schedule your free 30-minute CRM architecture consultation and project estimate with our senior enterprise CRM engineers. NDA protected.",
  alternates: {
    canonical: "https://crmdevelopment.in/contact",
  },
  openGraph: {
    title: "Contact Us | Custom CRM Development Strategy Session",
    description:
      "Schedule a consultation with our senior CRM architects. 100% custom workflows, zero per-seat licensing, free technical roadmap within 24 hours.",
    url: "https://crmdevelopment.in/contact",
    type: "website",
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact crmdevelopment.in - Custom CRM Development Agency",
    "url": "https://crmdevelopment.in/contact",
    "description":
      "Direct technical consultation and architectural roadmap request for custom CRM software development.",
    "mainEntity": {
      "@type": "Organization",
      "name": "crmdevelopment.in",
      "telephone": "+919990613140",
      "email": "contact@crmdevelopment.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8th Floor, ITHUM TOWER, B-806, Block A, Industrial Area, Sector 62",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201309",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      {/* ContactPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <div className="pt-24 sm:pt-28 bg-gradient-to-b from-slate-50 via-white to-white">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <nav aria-label="Breadcrumb" className="flex items-center text-xs text-slate-500 gap-1.5">
            <Link 
              href="/" 
              className="inline-flex items-center gap-1 hover:text-[#ff6b1e] transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-800">Contact Us</span>
          </nav>
        </div>

        {/* Trust Header Highlights */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-600">
            <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200/80 px-3 py-1.5 rounded-full shadow-xs">
              <Clock className="w-3.5 h-3.5 text-[#ff6b1e]" />
              <span className="font-medium">24-Hour Roadmap Delivery</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200/80 px-3 py-1.5 rounded-full shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-medium">100% Strict Mutual NDA</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200/80 px-3 py-1.5 rounded-full shadow-xs">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span className="font-medium">Senior CRM Architects Only</span>
            </div>
          </div>
        </div>

        {/* Main Contact Section */}
        <ContactForm />
      </div>
    </>
  );
}
