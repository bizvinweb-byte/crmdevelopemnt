import { 
  Check, 
  X, 
  Key, 
  Infinity as InfinityIcon, 
  Zap, 
  Lock,
  Headphones
} from "lucide-react";

export default function WhyUs() {
  const comparisonItems = [
    {
      feature: "Monthly Per-Seat Licensing Fees",
      custom: "Zero Recurring User Fees (100% Owned)",
      commercial: "$75 - $300 / user / month forever",
      isCustomBetter: true,
    },
    {
      feature: "Source Code & Intellectual Property",
      custom: "100% Client-Owned Source Code",
      commercial: "Proprietary vendor lock-in",
      isCustomBetter: true,
    },
    {
      feature: "Custom Workflow & Database Schema",
      custom: "Tailored to exact operational flow",
      commercial: "Restricted to pre-built rigid modules",
      isCustomBetter: true,
    },
    {
      feature: "Data Privacy & Cloud Hosting",
      custom: "Your private AWS / GCP / Azure or On-Prem",
      commercial: "Shared multi-tenant cloud storage",
      isCustomBetter: true,
    },
    {
      feature: "Third-Party API Integration Limits",
      custom: "Unlimited custom webhooks & API calls",
      commercial: "API rate caps & expensive add-on tiers",
      isCustomBetter: true,
    },
    {
      feature: "Speed & Performance",
      custom: "Sub-second Next.js / Postgres loading",
      commercial: "Heavy bloat with 3-5s load delays",
      isCustomBetter: true,
    },
  ];

  return (
    <section id="why-us" className="pt-10 pb-16 sm:pt-14 sm:pb-20 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#fff5ef] to-[#ffedd5] text-[#ff6b1e] text-xs font-semibold mb-3 border border-[#ffd5be] shadow-xs">
            <Key className="w-3.5 h-3.5 text-[#ff6b1e]" />
            <span>The Custom CRM Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 tracking-tight leading-[1.25] max-w-4xl mx-auto">
            <span className="block sm:whitespace-nowrap">Why High-Growth Companies Choose</span>
            <span className="inline-block bg-gradient-to-r from-[#ff5500] via-[#ff6b1e] to-[#ff8843] bg-clip-text text-transparent mt-0.5 sm:mt-1">
              Custom CRM Over SaaS
            </span>
          </h2>
          <p className="mt-3.5 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Compare the lifetime savings, full code ownership, and zero monthly fees of{" "}
            <strong className="text-slate-900 font-semibold">crmdevelopment.in</strong> against rigid commercial platforms.
          </p>
        </div>

        {/* Feature Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[640px] bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 uppercase tracking-wider">
                  <th className="py-4 px-6">Capability & Ownership</th>
                  <th className="py-4 px-6 bg-[#fff5ef] text-[#ff6b1e]">Custom CRM (crmdevelopment.in)</th>
                  <th className="py-4 px-6 text-slate-500">Commercial SaaS (Salesforce/HubSpot)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparisonItems.map((item, idx) => (
                  <tr key={item.feature} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      {item.feature}
                    </td>
                    <td className="py-4 px-6 font-medium text-emerald-700 bg-[#fff5ef]/30">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{item.custom}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-medium text-slate-600">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        <span>{item.commercial}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12">
          {/* Pillar 1 */}
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#ffd5be] hover:shadow-md transition-all group">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#fff5ef] text-[#ff6b1e] border border-[#ffd5be]/60 group-hover:bg-[#ff6b1e] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <InfinityIcon className="w-5 h-5" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#ff6b1e] transition-colors leading-snug">
                Zero Per-User Fees
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Scale from 10 to 1,000+ employees without paying extra monthly licensing.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#ffd5be] hover:shadow-md transition-all group">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#fff5ef] text-[#ff6b1e] border border-[#ffd5be]/60 group-hover:bg-[#ff6b1e] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#ff6b1e] transition-colors leading-snug">
                Strict Data Sovereignty
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your customer data lives solely on your infrastructure under your security controls.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#ffd5be] hover:shadow-md transition-all group">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#fff5ef] text-[#ff6b1e] border border-[#ffd5be]/60 group-hover:bg-[#ff6b1e] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#ff6b1e] transition-colors leading-snug">
                Zero Feature Bloat
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Reps only see what they need, leading to 95%+ daily active team adoption.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#ffd5be] hover:shadow-md transition-all group">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#fff5ef] text-[#ff6b1e] border border-[#ffd5be]/60 group-hover:bg-[#ff6b1e] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <Headphones className="w-5 h-5" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#ff6b1e] transition-colors leading-snug">
                Direct Architect Access
              </h4>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Work directly with senior developers, not automated chatbot ticket queues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
