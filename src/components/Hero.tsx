"use client";

import Link from "next/link";
import { useLeadModal } from "@/context/LeadModalContext";
import { 
  ArrowRight, 
  Sparkles,
  BarChart3,
  TrendingUp,
  Zap,
  Users,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Star
} from "lucide-react";

export default function Hero() {
  const { openLeadModal } = useLeadModal();
  return (
    <section className="relative pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-8 sm:pb-12 overflow-hidden bg-white">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] hero-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-5xl mx-auto flex flex-col items-center">
          {/* SEO Authority Pill with enhanced breathing space */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-gradient-to-r from-[#fff5ef] to-[#ffedd5] border border-[#ffd5be] text-[#ff6b1e] text-[11px] sm:text-sm font-semibold mb-5 sm:mb-6 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b1e] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b1e]" />
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#ff6b1e]" />
            <span>#1 Custom CRM Development Company in India</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#ff6b1e]/50" />
            <span className="hidden sm:inline-block text-[#ff6b1e] font-bold">crmdevelopment.in</span>
          </div>

          {/* Core H1 containing primary SEO keywords - Perfectly Centered 2 Lines */}
          <h1 className="w-full text-center text-2xl sm:text-3xl md:text-[2.2rem] lg:text-[2.5rem] xl:text-[2.75rem] font-black tracking-tight text-slate-900 leading-[1.22] mb-4 sm:mb-5">
            <span className="block text-center w-full md:whitespace-nowrap">
              Bespoke &amp; Custom{" "}
              <span className="bg-gradient-to-r from-[#ff5500] via-[#ff6b1e] to-[#ff8843] bg-clip-text text-transparent">
                CRM Development
              </span>{" "}
              Solutions
            </span>
            <span className="block text-center w-full text-slate-900">
              for High-Growth Enterprises
            </span>
          </h1>

          {/* Subheading with semantic LSI keywords - Exactly 2 lines */}
          <p className="text-center w-full text-xs sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed mb-3.5 sm:mb-5 max-w-4xl mx-auto px-1 sm:px-0">
            <span className="block text-center w-full md:block">
              Say goodbye to rigid, overpriced SaaS subscriptions. At{" "}
              <strong className="font-semibold text-slate-900">crmdevelopment.in</strong>, we engineer high-speed,
            </span>
            <span className="block text-center w-full md:block">
              custom CRM platforms, AI automation pipelines, and enterprise integrations that you{" "}
              <span className="text-slate-900 font-medium">100% own</span> with zero per-user license fees.
            </span>
          </p>

          {/* Quick-Glance Trust Chips (Compact & clean on mobile) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mb-4 sm:mb-6 text-[11px] sm:text-xs font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span className="sm:hidden">100% Code Ownership</span>
              <span className="hidden sm:inline">100% Source Code &amp; IP Ownership</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b1e] flex-shrink-0" />
              <span className="sm:hidden">Zero Per-User Fees</span>
              <span className="hidden sm:inline">Zero Per-User SaaS License Fees</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 shadow-xs">
              <Zap className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <span className="sm:hidden">AI Automations</span>
              <span className="hidden sm:inline">AI-Powered Automation &amp; Workflows</span>
            </span>
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 mb-2.5 sm:mb-3">
            <button
              type="button"
              onClick={() => openLeadModal({
                title: "Get Free CRM Architecture Plan",
                subtitle: "Discuss your workflows and get an architecture roadmap with milestone pricing within 24 hours.",
                service: "Custom CRM Development"
              })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff6b1e] to-[#f95700] hover:from-[#e65a12] hover:to-[#df4e00] text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base shadow-md shadow-[#ff6b1e]/25 hover:shadow-lg transition-all active:scale-95 group cursor-pointer"
            >
              <span>Get Free CRM Architecture Plan</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={() => openLeadModal({
                title: "Request Custom CRM Quote",
                subtitle: "Get an enterprise-grade proposal tailored to your business scale with 100% source code ownership.",
                service: "Custom CRM Development"
              })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl text-xs sm:text-base border border-slate-200 shadow-xs hover:border-[#ffd5be] transition-all active:scale-95 cursor-pointer"
            >
              <BarChart3 className="w-4 h-4 text-[#ff6b1e]" />
              <span>Request Custom CRM Quote</span>
            </button>
          </div>

          {/* Micro Trust Reassurance */}
          <p className="text-[11px] sm:text-xs text-slate-500 font-medium mb-2.5 sm:mb-3">
            ✓ Free 30-min Technical Discovery • NDA Protected • Transparent Milestone Pricing
          </p>

          {/* Key Trust Signals - Ultra-Compact & Streamlined */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 max-w-3xl mx-auto pt-3 sm:pt-3.5 border-t border-slate-100">
            {/* Stat 1 */}
            <div className="bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-[#ffd5be] py-1.5 px-2 sm:py-2 sm:px-3 rounded-xl transition-all shadow-xs text-center flex flex-col items-center justify-center group">
              <div className="flex items-center gap-1.5 justify-center">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-base sm:text-xl font-black text-slate-900 group-hover:text-[#ff6b1e] transition-colors leading-none">
                  50+
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-slate-600 font-semibold mt-1">
                Enterprise Clients
              </span>
            </div>

            {/* Stat 2 */}
            <div className="bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-[#ffd5be] py-1.5 px-2 sm:py-2 sm:px-3 rounded-xl transition-all shadow-xs text-center flex flex-col items-center justify-center group">
              <div className="flex items-center gap-1.5 justify-center">
                <TrendingUp className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span className="text-base sm:text-xl font-black text-[#ff6b1e] leading-none">
                  3.8x
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-slate-600 font-semibold mt-1">
                Faster Sales Growth
              </span>
            </div>

            {/* Stat 3 */}
            <div className="bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-[#ffd5be] py-1.5 px-2 sm:py-2 sm:px-3 rounded-xl transition-all shadow-xs text-center flex flex-col items-center justify-center group">
              <div className="flex items-center gap-1.5 justify-center">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-base sm:text-xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors leading-none">
                  100%
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-slate-600 font-semibold mt-1">
                Code &amp; IP Ownership
              </span>
            </div>

            {/* Stat 4 */}
            <div className="bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-[#ffd5be] py-1.5 px-2 sm:py-2 sm:px-3 rounded-xl transition-all shadow-xs text-center flex flex-col items-center justify-center group">
              <div className="flex items-center gap-1.5 justify-center">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                <span className="text-base sm:text-xl font-black text-emerald-600 leading-none">
                  4.9/5 ★
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-slate-600 font-semibold mt-1">
                Client Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
