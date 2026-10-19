import Link from "next/link";
import { 
  Compass, 
  Layout, 
  Code, 
  CheckCircle2, 
  Rocket, 
  ArrowRight
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "CRM Consultation & Requirement Analysis",
      description: "We analyze your business processes, sales workflows, and customer management needs to create a custom CRM development strategy tailored to your business.",
      icon: Compass,
    },
    {
      num: "02",
      title: "CRM UI/UX Design & Planning",
      description: "Our team designs user-friendly CRM dashboards, lead management systems, and workflows to ensure a smooth experience across desktop and mobile devices.",
      icon: Layout,
    },
    {
      num: "03",
      title: "Custom CRM Software Development",
      description: "We develop scalable CRM software with lead tracking, sales automation, role-based access, third-party integrations, and customized business workflows.",
      icon: Code,
    },
    {
      num: "04",
      title: "CRM Integration, Testing & Data Migration",
      description: "We integrate your CRM with existing business tools, securely migrate customer data, and test every feature for performance, security, and reliability.",
      icon: CheckCircle2,
    },
    {
      num: "05",
      title: "CRM Deployment, Training & Support",
      description: "We deploy your CRM system, train your team, and provide ongoing technical support to keep your customer relationship management software running smoothly.",
      icon: Rocket,
    },
  ];

  return (
    <section id="process" className="py-12 sm:py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#fff5ef] to-[#ffedd5] text-[#ff6b1e] text-xs font-semibold mb-3 border border-[#ffd5be] shadow-xs">
            <span>Proven Delivery Lifecycle</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 tracking-tight leading-[1.25]">
            Our 5-Step <span className="bg-gradient-to-r from-[#ff5500] via-[#ff6b1e] to-[#ff8843] bg-clip-text text-transparent">CRM Development</span> Methodology
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A transparent, milestone-driven framework that guarantees on-time delivery, zero data disruption, and rapid sales team adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#ffd5be] hover:shadow-lg hover:shadow-[#ff6b1e]/10 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#fff5ef] text-[#ff6b1e] flex items-center justify-center group-hover:bg-[#ff6b1e] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-[#ff6b1e]/40 transition-colors font-mono">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff6b1e] hover:text-[#e65a12]"
          >
            <span>Have custom timeline or compliance requirements? Speak to our team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
