import type { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Home, 
  HeartPulse,
  PhoneCall,
  Calendar,
  Lock,
  ShieldCheck,
  Activity
} from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare CRM Software Development India | Clinic & Hospital Patient CRM",
  description:
    "Custom Healthcare CRM software development company in India. HIPAA/NABH aligned patient relationship management, appointment scheduling, EHR/EMR sync, and tele-consultation portals.",
  keywords: [
    "healthcare crm software development",
    "patient relationship management software",
    "hospital crm software india",
    "clinic crm development",
    "healthcare crm noida delhi",
    "telehealth crm software development"
  ],
  alternates: {
    canonical: "https://crmdevelopment.in/industries/healthcare-crm-software",
  },
  openGraph: {
    title: "Healthcare CRM Software Development | crmdevelopment.in",
    description:
      "Modern patient management CRM for hospitals, clinics, and health-tech startups. Automated appointment reminders, OPD triage, and secure patient portals.",
    url: "https://crmdevelopment.in/industries/healthcare-crm-software",
    type: "article",
  },
};

export default function HealthcareCrmPage() {
  const industrySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Healthcare CRM Software Development",
    "provider": {
      "@type": "Organization",
      "name": "crmdevelopment.in",
      "url": "https://crmdevelopment.in",
      "telephone": "+919990613140"
    },
    "description": "Secure, patient-first CRM software tailored for clinics, diagnostic chains, hospitals, and telemedicine platforms.",
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
            <span className="font-semibold text-slate-800">Healthcare CRM Software</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 border-b border-slate-100 bg-gradient-to-b from-emerald-50/40 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-4">
                <HeartPulse className="w-3.5 h-3.5" />
                NABH &amp; HIPAA Compliant Patient Relationship Architecture
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Custom Healthcare &amp; Patient CRM Software Development
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                Empower your healthcare facility with an integrated patient engagement platform. From automated appointment reminders and telemedicine scheduling to lab report dispatch and recurring care plans.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#ff6b1e] hover:bg-[#e65a12] text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#ff6b1e]/25 hover:shadow-xl transition-all"
                >
                  <span>Consult Healthcare CRM Architect</span>
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

        {/* Features */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Specialized Modules for Hospitals &amp; Clinics
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Protect sensitive patient health information while delivering frictionless clinical workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Smart Appointment Scheduling",
                  desc: "Multi-doctor, multi-clinic calendar scheduling with instant SMS/WhatsApp confirmation and automated pre-visit instructions."
                },
                {
                  title: "Secure EHR/EMR Integration",
                  desc: "Connect seamlessly with electronic medical record systems to pull diagnostic summaries, prescriptions, and historical vitals."
                },
                {
                  title: "WhatsApp Lab Report Dispatch",
                  desc: "Automated dispatch of password-protected PDF test results directly to patient smartphones within seconds of doctor verification."
                },
                {
                  title: "Patient Retention & Chronic Care",
                  desc: "Automated recurring reminder journeys for diabetes checkups, dental cleanings, pediatric vaccines, and diagnostic follow-ups."
                },
                {
                  title: "Teleconsultation & Video Rooms",
                  desc: "Encrypted browser-based video consultation rooms with built-in digital prescription writing and instant fee collection."
                },
                {
                  title: "Role-Based Medical Privacy",
                  desc: "Strict cryptographic access control ensuring receptionist, nurse, doctor, and billing staff see only their relevant data slices."
                }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
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
              Build a Compliant Healthcare CRM Today
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Schedule a technical roadmap discussion with our medical software engineering team.
            </p>
            <Link
              href="/contact"
              className="bg-[#ff6b1e] hover:bg-[#e65a12] text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg inline-flex items-center gap-2"
            >
              <span>Schedule Healthcare Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
