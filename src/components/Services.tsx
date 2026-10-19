import Link from "next/link";
import { 
  Cpu, 
  Workflow, 
  Smartphone, 
  RefreshCw, 
  ArrowUpRight,
  Bot,
  Layers,
  ShieldCheck
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Layers,
      title: "Custom CRM Software Development",
      description: "Build custom CRM software designed around your business processes. Manage customer information, track sales opportunities, automate daily tasks, and improve team productivity with a flexible, scalable CRM system.",
      features: [
        "Custom CRM dashboards",
        "Lead & sales pipeline management",
        "Role-based user permissions",
        "Custom reports & analytics",
      ],
      highlight: "Most Popular",
    },
    {
      icon: Bot,
      title: "AI CRM Automation Services",
      description: "Simplify your sales operations with AI-powered CRM automation. Automate lead follow-ups, reduce manual work, prioritize potential customers, and help your sales team make faster, data-driven decisions.",
      features: [
        "Automated lead follow-ups",
        "AI-powered lead scoring",
        "Smart sales workflow automation",
        "AI-driven customer insights",
      ],
      highlight: "High ROI",
    },
    {
      icon: RefreshCw,
      title: "CRM Migration & Cloud Solutions",
      description: "Upgrade your existing CRM system with secure data migration and cloud-based solutions. We help businesses transfer customer records, organize important information, and transition from outdated systems to modern CRM platforms.",
      features: [
        "Secure CRM data migration",
        "Cloud-based CRM setup",
        "Data cleaning & validation",
        "Legacy CRM system integration",
      ],
      highlight: "Zero Risk",
    },
    {
      icon: Smartphone,
      title: "Custom Mobile CRM App Development",
      description: "Access your CRM software from anywhere with custom mobile CRM applications. Empower sales teams to manage leads, update customer records, track activities, and stay connected while working remotely or in the field.",
      features: [
        "Android & iOS CRM applications",
        "Mobile lead & task management",
        "Real-time sales notifications",
        "Customer data synchronization",
      ],
      highlight: "Field Ready",
    },
    {
      icon: Workflow,
      title: "CRM API Integration Services",
      description: "Connect your CRM software with the business applications you already use. Our CRM integration services help synchronize customer data, automate workflows, and improve communication between sales, marketing, and business platforms.",
      features: [
        "Third-party API integrations",
        "WhatsApp & marketing integrations",
        "Website & payment gateway integration",
        "Automated data synchronization",
      ],
      highlight: "Full Stack",
    },
    {
      icon: ShieldCheck,
      title: "CRM Security & Data Protection",
      description: "Protect sensitive customer information with secure CRM development practices. We implement access controls, data protection measures, and backup solutions to support business continuity and reliable customer data management.",
      features: [
        "Role-based access control",
        "Secure customer data management",
        "Automated data backups",
        "Data encryption & recovery",
      ],
      highlight: "Secure",
    },
  ];

  return (
    <section id="services" className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-slate-50/60 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#fff5ef] to-[#ffedd5] text-[#ff6b1e] text-xs font-semibold mb-3 border border-[#ffd5be] shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-[#ff6b1e]" />
            <span>End-to-End Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 tracking-tight leading-[1.25]">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-[#ff5500] via-[#ff6b1e] to-[#ff8843] bg-clip-text text-transparent">
              CRM Development
            </span>{" "}
            Capabilities
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We deliver tailor-made CRM architecture designed for extreme velocity, high user adoption, and long-term business scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-[#ffd5be] hover:shadow-xl hover:shadow-[#ff6b1e]/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Glow accent on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fff5ef] rounded-full blur-2xl group-hover:bg-[#ffe8dc] transition-colors pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#fff5ef] group-hover:bg-[#ff6b1e] text-[#ff6b1e] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 group-hover:bg-[#fff5ef] group-hover:text-[#ff6b1e] transition-colors">
                      {service.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#ff6b1e] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-xs font-medium text-slate-700 gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b1e] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#ff6b1e] hover:text-[#e65a12] group-hover:translate-x-1 transition-all"
                  >
                    <span>Get Free Consultation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
