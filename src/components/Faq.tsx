"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { faqData } from "@/data/faq";

export default function Faq() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggle = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const col1 = faqData.map((item, idx) => ({ ...item, originalIndex: idx })).filter((_, i) => i % 2 === 0);
  const col2 = faqData.map((item, idx) => ({ ...item, originalIndex: idx })).filter((_, i) => i % 2 !== 0);

  const renderFaqCard = (item: typeof faqData[0] & { originalIndex: number }) => {
    const isOpen = openIndices.includes(item.originalIndex);
    return (
      <div
        key={item.question}
        className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs transition-all duration-200 hover:border-[#ffd5be] hover:shadow-md"
      >
        <button
          type="button"
          onClick={() => toggle(item.originalIndex)}
          className="w-full text-left py-4.5 px-5 sm:px-6 flex items-start justify-between gap-3 focus:outline-none cursor-pointer group"
          aria-expanded={isOpen}
        >
          <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#ff6b1e] transition-colors leading-snug">
            {item.question}
          </span>
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 mt-0.5 ${
              isOpen ? "rotate-180 bg-[#fff5ef] text-[#ff6b1e]" : "bg-slate-100 text-slate-500"
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </div>
        </button>

        {isOpen && (
          <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
            {item.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="faq" className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#fff5ef] to-[#ffedd5] text-[#ff6b1e] text-xs font-semibold mb-3 border border-[#ffd5be] shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#ff6b1e]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 tracking-tight leading-[1.25]">
            Common Questions About <span className="bg-gradient-to-r from-[#ff5500] via-[#ff6b1e] to-[#ff8843] bg-clip-text text-transparent">CRM Development</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about pricing, development timelines, data migration, and source code ownership.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
          <div className="space-y-4">
            {col1.map(renderFaqCard)}
          </div>
          <div className="space-y-4">
            {col2.map(renderFaqCard)}
          </div>
        </div>

        <div className="mt-12 text-center bg-[#fff5ef] rounded-2xl p-6 border border-[#ffd5be]">
          <h4 className="text-base font-bold text-slate-900 mb-1">
            Have a custom requirement or need an immediate NDA?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            Our Senior CRM Technical Architects are available for a direct 30-minute discovery call.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#ff6b1e] hover:bg-[#e65a12] text-white font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-[#ff6b1e]/20"
          >
            <span>Book Architectural Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
