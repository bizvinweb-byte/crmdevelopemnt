"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, 
  X, 
  PhoneCall, 
  ArrowRight,
} from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";

export default function Navbar() {
  const { openLeadModal } = useLeadModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Industries", href: "/#industries" },
    { name: "Why Custom CRM", href: "/#why-us" },
    { name: "Cost Guide", href: "/blog/custom-crm-development-cost-in-india" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-4" 
          : "bg-white/95 backdrop-blur-sm py-5 sm:py-6 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brandmingo Logo with increased size and breathing room */}
          <Link 
            href="/" 
            className="flex items-center group focus:outline-none flex-shrink-0"
            aria-label="Brandmingo - crmdevelopment.in"
          >
            <Image
              src="/brandmingo-logo.png"
              alt="Brandmingo Logo"
              width={210}
              height={50}
              priority
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-[#ff6b1e] transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:+919990613140"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#ff6b1e] px-3.5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 text-[#ff6b1e]" />
              <span>+91 99906 13140</span>
            </a>
            <button
              type="button"
              onClick={() => openLeadModal({
                title: "Get Free CRM Architecture Quote",
                subtitle: "Tell us about your team size and use case. We'll send a technical proposal and quotation within 24 hours.",
              })}
              className="inline-flex items-center gap-2 bg-[#ff6b1e] hover:bg-[#e65a12] text-white text-xs font-bold px-5 py-3 rounded-xl shadow-md shadow-[#ff6b1e]/25 hover:shadow-lg hover:shadow-[#ff6b1e]/35 transition-all active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-6 border-t border-slate-100 bg-white rounded-2xl shadow-xl px-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-slate-700 hover:text-[#ff6b1e] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLeadModal({
                    title: "Schedule Free CRM Consultation",
                    subtitle: "Connect with our Senior CRM Architect for a 30-minute discovery call.",
                  });
                }}
                className="w-full text-center bg-[#ff6b1e] text-white py-3.5 rounded-xl font-bold text-sm shadow-md active:scale-95 transition-transform cursor-pointer"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
