"use client";

import React from "react";
import { Phone } from "lucide-react";

export default function FloatingContactButtons() {
  const phoneNumber = "+919990613140";
  const displayPhone = "+91 99906 13140";
  const whatsappUrl = `https://wa.me/919990613140?text=${encodeURIComponent(
    "Hi crmdevelopment.in, I would like to discuss a custom CRM software project for my business."
  )}`;

  return (
    <>
      {/* ======================================================== */}
      {/* 1. DESKTOP FLOATING BUTTONS (Bottom-Right Sticky)        */}
      {/* ======================================================== */}
      <div 
        className="hidden sm:flex flex-col items-end gap-2.5 fixed bottom-6 right-6 z-40 pointer-events-auto"
        aria-label="Direct Contact Actions"
      >
        {/* Direct Phone Call Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="group flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white pl-3 pr-4 py-2 rounded-full shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:-translate-y-0.5 border border-slate-700/80 transition-all duration-300"
          title="Direct Call to CRM Architect"
        >
          <span className="w-8 h-8 rounded-full bg-[#ff6b1e]/15 text-[#ff6b1e] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Phone className="w-4 h-4 fill-current" />
          </span>
          <div className="text-left">
            <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider leading-none">
              Direct Call
            </span>
            <span className="text-xs font-bold text-white tracking-wide leading-tight">
              {displayPhone}
            </span>
          </div>
        </a>

        {/* WhatsApp Chat Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white pl-3 pr-4 py-2 rounded-full shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:-translate-y-0.5 border border-emerald-300/40 transition-all duration-300"
          title="Instant WhatsApp Consultation"
        >
          <span className="relative w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <WhatsAppIcon className="w-4 h-4 text-white fill-current" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#25D366]" />
          </span>
          <div className="text-left">
            <span className="text-[10px] text-emerald-100 flex items-center gap-1.5 uppercase font-bold tracking-wider leading-none">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Online Now
            </span>
            <span className="text-xs font-bold text-white tracking-wide leading-tight">
              Chat on WhatsApp
            </span>
          </div>
        </a>
      </div>

      {/* ======================================================== */}
      {/* 2. MOBILE STICKY BOTTOM BAR (Side-by-Side 50-50 Split)   */}
      {/* ======================================================== */}
      <div 
        className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.1)] px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] flex items-center gap-2.5"
        aria-label="Mobile Contact Bar"
      >
        {/* Left Side: Direct Call */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex-1 flex items-center justify-center gap-2 bg-slate-900 active:bg-slate-800 text-white font-bold py-3 px-3 rounded-xl text-xs shadow-sm active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#ff6b1e] fill-current" />
          <span>Call: 99906 13140</span>
        </a>

        {/* Right Side: WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#20ba59] text-white font-bold py-3 px-3 rounded-xl text-xs shadow-sm active:scale-95 transition-transform"
        >
          <WhatsAppIcon className="w-4 h-4 text-white fill-current" />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className={className}
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
