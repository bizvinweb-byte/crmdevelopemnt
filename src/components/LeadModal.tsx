"use client";

import React, { useState, useEffect } from "react";
import { useLeadModal } from "@/context/LeadModalContext";
import { 
  X, 
  Sparkles, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  Layers, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Loader2 
} from "lucide-react";

export default function LeadModal() {
  const { isOpen, options, closeLeadModal } = useLeadModal();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: options.service || "Custom CRM Development",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (options.service) {
      setFormData((prev) => ({ ...prev, service: options.service || "Custom CRM Development" }));
    }
  }, [options.service]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeLeadModal();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, closeLeadModal]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMessage("Please provide a phone number or email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: options.title ? `Popup: ${options.title}` : "Hero & Navbar Popup",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(result.error || "Unable to send your request. Please try again.");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setErrorMessage("Network issue. Please contact us directly at +91 99906 13140.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    closeLeadModal();
    setTimeout(() => {
      setIsSuccess(false);
      setErrorMessage("");
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        service: "Custom CRM Development",
        message: "",
      });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-slate-950/65 backdrop-blur-sm transition-all"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-[480px] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Subtle orange accent bar at top */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#ff5500] via-[#ff6b1e] to-[#ff8843]" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all focus:outline-none cursor-pointer"
          aria-label="Close form"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          /* Success Screen */
          <div className="p-6 sm:p-7 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                Proposal Request Received!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. A Senior Technical CRM Consultant will review your scope and contact you within <span className="font-bold text-[#ff6b1e]">15 minutes</span>.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 text-left space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <Clock className="w-3.5 h-3.5 text-[#ff6b1e]" />
                <span>Next Step: Technical Architecture Call</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                We will share a preliminary system architecture diagram, tech stack recommendation, and milestone pricing tailored to your scale.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href={`https://wa.me/919990613140?text=Hi%20crmdevelopment.in,%20I%20just%20submitted%20a%20CRM%20inquiry%20for%20${encodeURIComponent(formData.company || formData.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-sm"
              >
                <span>Chat on WhatsApp Instantly</span>
              </a>
              <button
                onClick={handleResetAndClose}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          /* Form Content - Clean, fits screen without scroll on laptop, hidden scrollbar on mobile */
          <div className="p-4 sm:p-6 max-h-[90vh] overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {/* Header */}
            <div className="mb-3.5 pr-7">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#fff5ef] border border-[#ffd5be] text-[#ff6b1e] text-[10px] font-bold mb-1.5">
                <Sparkles className="w-3 h-3" />
                <span>Free Technical Discovery Call</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
                {options.title || "Request Custom CRM Architecture Plan"}
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-normal">
                {options.subtitle || "Discuss your requirements with our lead technical architect. Get an estimate within 24 hours."}
              </p>
            </div>

            {errorMessage && (
              <div className="mb-3 p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Your Name <span className="text-[#ff6b1e]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff6b1e]/20 focus:border-[#ff6b1e] transition-all text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Phone / WhatsApp <span className="text-[#ff6b1e]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 99906 13140"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff6b1e]/20 focus:border-[#ff6b1e] transition-all text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Work Email <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@company.com"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff6b1e]/20 focus:border-[#ff6b1e] transition-all text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Realty"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff6b1e]/20 focus:border-[#ff6b1e] transition-all text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Service Required */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  CRM Capability / Solution Required
                </label>
                <div className="relative">
                  <Layers className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff6b1e]/20 focus:border-[#ff6b1e] transition-all text-slate-900 appearance-none cursor-pointer"
                  >
                    <option value="Custom CRM Development">Custom CRM Software Development</option>
                    <option value="AI CRM Automation">AI CRM & Sales Workflow Automation</option>
                    <option value="CRM Migration & Cloud">CRM Migration & Cloud Architecture</option>
                    <option value="Real Estate & PropTech CRM">Real Estate & PropTech CRM</option>
                    <option value="Healthcare & Telemedicine CRM">Healthcare & Telemedicine CRM</option>
                    <option value="FinTech & Banking CRM">FinTech & Banking CRM</option>
                    <option value="Mobile Field CRM">Mobile Field CRM & Sales App</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-[10px]">
                    ▼
                  </div>
                </div>
              </div>

              {/* Row 4: Message / Requirements */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Brief Project Requirements <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="E.g., Team size, current tools (Excel/Zoho), key workflows or specific integrations..."
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ff6b1e]/20 focus:border-[#ff6b1e] transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff6b1e] via-[#ff5500] to-[#f95700] hover:from-[#e65a12] hover:to-[#df4e00] text-white font-bold py-2.5 sm:py-3 px-5 rounded-xl text-xs sm:text-sm shadow-md shadow-[#ff6b1e]/25 hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Your Request...</span>
                  </>
                ) : (
                  <>
                    <span>Claim Free Consultation &amp; Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              {/* Micro Trust Reassurance */}
              <div className="flex items-center justify-center gap-2.5 text-[10.5px] text-slate-500 pt-0.5 text-center font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  NDA Protected
                </span>
                <span>•</span>
                <span>Zero Sales Spam</span>
                <span>•</span>
                <span className="text-[#ff6b1e] font-semibold">15-Min Response</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
