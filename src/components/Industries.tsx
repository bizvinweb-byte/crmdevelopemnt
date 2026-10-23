import Link from "next/link";
import { 
  Building2, 
  Stethoscope, 
  Landmark, 
  ShoppingBag, 
  Truck, 
  GraduationCap,
  ArrowRight,
  Briefcase
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: Building2,
      name: "Real Estate & PropTech CRM",
      tagline: "Lead allocation, site visit scheduling & automated builder inventory tracking",
      features: ["WhatsApp-integrated lead capture", "Floorplan & unit inventory matrix", "Commission & agent performance tracker"],
      href: "/industries/real-estate-crm-software",
    },
    {
      icon: Stethoscope,
      name: "Healthcare & Telemedicine CRM",
      tagline: "HIPAA-ready patient records, doctor scheduling & diagnostic follow-ups",
      features: ["Electronic Health Record (EHR) sync", "Prescription & lab test reminders", "Secure telemedicine consultations"],
      href: "/industries/healthcare-crm-software",
    },
    {
      icon: Landmark,
      name: "FinTech & B2B Banking CRM",
      tagline: "Loan origination pipelines, KYC validation & wealth management tracking",
      features: ["Aadhaar/PAN KYC automated APIs", "Credit score & underwriting pipelines", "Bank-grade encrypted communications"],
      href: "/industries/b2b-custom-crm",
    },
    {
      icon: ShoppingBag,
      name: "E-Commerce & D2C Brands",
      tagline: "Customer lifetime value (LTV) cohorts, abandoned cart automation & loyalty points",
      features: ["Shopify/WooCommerce bi-directional sync", "Omnichannel WhatsApp & SMS automation", "RFM customer segmentation"],
      href: "/services/custom-crm-development",
    },
    {
      icon: Truck,
      name: "Logistics, Cargo & Fleet CRM",
      tagline: "Shipment status, vendor dispatching & real-time delivery GPS triggers",
      features: ["Consignment manifest tracking", "Transporter quotation bidding portal", "Proof-of-delivery (POD) digital signatures"],
      href: "/services/crm-api-integration",
    },
    {
      icon: GraduationCap,
      name: "EdTech & University Admissions",
      tagline: "Student counselor workflows, campus tour booking & tuition fee collection",
      features: ["Multi-source student inquiry ingestion", "Tele-calling dialer & call recording", "Scholarship & document review portal"],
      href: "/services/custom-crm-development",
    },
  ];

  return (
    <section id="industries" className="pt-10 pb-16 sm:pt-12 sm:pb-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#fff5ef] to-[#ffedd5] text-[#ff6b1e] text-xs font-semibold mb-3 border border-[#ffd5be] shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-[#ff6b1e]" />
            <span>Specialized Industry Verticals</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 tracking-tight leading-[1.25] max-w-4xl mx-auto">
            <span className="block sm:whitespace-nowrap">
              Tailor-Made{" "}
              <span className="bg-gradient-to-r from-[#ff5500] via-[#ff6b1e] to-[#ff8843] bg-clip-text text-transparent">
                CRM Development
              </span>
            </span>
            <span className="block sm:whitespace-nowrap mt-0.5 sm:mt-1">
              for High-Volume Industries
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            One size never fits all. We architect industry-compliant data pipelines and workflow engines tuned to how your specific market operates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#ffd5be] hover:shadow-xl hover:shadow-[#ff6b1e]/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#fff5ef] text-[#ff6b1e] flex items-center justify-center shrink-0 border border-[#ffd5be]/60 group-hover:bg-[#ff6b1e] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#ff6b1e] transition-colors">
                        <Link href={ind.href} className="hover:text-[#ff6b1e] transition-colors">
                          {ind.name}
                        </Link>
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {ind.tagline}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {ind.features.map((item) => (
                      <li key={item} className="text-xs text-slate-700 flex items-center gap-2 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b1e] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={ind.href}
                  className="text-xs font-semibold text-[#ff6b1e] hover:text-[#e65a12] inline-flex items-center gap-1 pt-3 border-t border-slate-100"
                >
                  <span>Explore {ind.name.split(" ")[0]} CRM</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
