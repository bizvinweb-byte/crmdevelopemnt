"use client";

import { useState } from "react";
import { 
  Send, 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  MessageSquare, 
  Mail, 
  Phone, 
  Building,
  Sparkles,
  Download
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    usersCount: "10-50 users",
    budget: "$5,000 - $15,000 (INR 4L - 12L)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: `CRM Scope (${formData.usersCount}, Budget: ${formData.budget})`,
          message: formData.message,
          source: "Contact Page Dedicated Form",
        }),
      });
      // Automatically trigger brochure download
      try {
        const downloadLink = document.createElement("a");
        downloadLink.href = "/brandmingo-brochure-2026.pdf";
        downloadLink.download = "Brandmingo-CRM-Brochure-2026.pdf";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } catch (downloadErr) {
        console.error("Auto-download failed:", downloadErr);
      }
      setSubmitted(true);
    } catch (err) {
      console.error("Contact form submit error:", err);
      setSubmitted(true); // Still show confirmation so user is not stuck
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-8 sm:py-14 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#fff5ef] to-[#ffedd5] text-[#ff6b1e] text-xs font-semibold mb-3 border border-[#ffd5be] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#ff6b1e]" />
            <span>Fast-Track Project Scope</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 tracking-tight leading-[1.25]">
            Schedule Your Free <span className="bg-gradient-to-r from-[#ff5500] via-[#ff6b1e] to-[#ff8843] bg-clip-text text-transparent">CRM Architecture</span> Strategy Session
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Discuss your workflows, team requirements, and integration goals with a Senior Technical CRM Consultant. We will prepare an architectural roadmap within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden border border-slate-800">
              <div className="relative z-10">
                <span className="text-xs font-semibold text-[#ff8843] uppercase tracking-wider block mb-2">
                  Direct Inquiries
                </span>
                <h3 className="text-2xl font-bold mb-4">
                  Let&apos;s Build Your Ideal CRM System
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-8">
                  Whether you are planning to modernize a legacy database or replace bloated SaaS subscriptions, our engineering team is here to assist.
                </p>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-[#ff8843]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Direct Email</div>
                      <a href="mailto:contact@crmdevelopment.in" className="font-semibold text-white hover:text-[#ff8843] transition-colors">
                        contact@crmdevelopment.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Direct Phone / WhatsApp</div>
                      <a href="tel:+919990613140" className="font-semibold text-white hover:text-emerald-400 transition-colors">
                        +91 99906 13140
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Headquarters</div>
                      <span className="font-semibold text-white leading-snug block">
                        8th Floor, ITHUM TOWER, B-806, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#ff8843]" />
                    <span>Average response time: &lt; 2 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>100% Strict Mutual Non-Disclosure Agreement (NDA)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Connect Button */}
            <a
              href="https://wa.me/919990613140?text=Hi%20crmdevelopment.in%2C%20I%20am%20interested%20in%20custom%20CRM%20development."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl shadow-md transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat on WhatsApp Directly</span>
            </a>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Consultation Request Received!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                  Thank you for reaching out to <strong className="text-slate-900">crmdevelopment.in</strong>. A Principal CRM Architect will review your requirements and contact you within 2 hours.
                </p>

                {/* Brochure Auto Download Notification */}
                <div className="max-w-md mx-auto mb-6 bg-gradient-to-r from-orange-50 to-[#fff5ef] rounded-2xl p-4 border border-orange-200 text-left flex items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ff6b1e] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Download className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Brochure Downloaded!</p>
                      <p className="text-xs text-slate-500">Didn&apos;t start automatically?</p>
                    </div>
                  </div>
                  <a
                    href="/brandmingo-brochure-2026.pdf"
                    download="Brandmingo-CRM-Brochure-2026.pdf"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#ff6b1e] text-[#ff6b1e] text-xs font-bold hover:bg-[#ff6b1e] hover:text-white transition-all shadow-xs whitespace-nowrap"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-semibold text-[#ff6b1e] hover:text-[#e65a12] underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="full-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="full-name"
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b1e] focus:border-transparent text-sm text-slate-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="work-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Business Email *
                    </label>
                    <input
                      id="work-email"
                      required
                      type="email"
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b1e] focus:border-transparent text-sm text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone-number" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="phone-number"
                      required
                      type="tel"
                      placeholder="+91 99906 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b1e] focus:border-transparent text-sm text-slate-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="company-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Company Name
                    </label>
                    <input
                      id="company-name"
                      type="text"
                      placeholder="e.g. Acme Enterprises"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b1e] focus:border-transparent text-sm text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expected-users" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Expected CRM Users
                    </label>
                    <select
                      id="expected-users"
                      value={formData.usersCount}
                      onChange={(e) => setFormData({ ...formData, usersCount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b1e] focus:border-transparent text-sm text-slate-900 bg-white"
                    >
                      <option>Under 10 users</option>
                      <option>10-50 users</option>
                      <option>50-200 users</option>
                      <option>200+ Enterprise users</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="estimated-budget" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Estimated Project Budget
                    </label>
                    <select
                      id="estimated-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b1e] focus:border-transparent text-sm text-slate-900 bg-white"
                    >
                      <option>$3,000 - $5,000 (INR 2.5L - 4L)</option>
                      <option>$5,000 - $15,000 (INR 4L - 12L)</option>
                      <option>$15,000 - $35,000 (INR 12L - 30L)</option>
                      <option>$35,000+ Enterprise</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="project-requirements" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Describe Your Current CRM Pain Points or Goals
                  </label>
                  <textarea
                    id="project-requirements"
                    rows={3}
                    placeholder="e.g. We need to replace HubSpot with a custom solution that connects to our Postgres inventory and WhatsApp leads..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ff6b1e] focus:border-transparent text-sm text-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl bg-[#ff6b1e] hover:bg-[#e65a12] text-white font-bold text-base shadow-lg shadow-[#ff6b1e]/30 transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-75 cursor-pointer"
                >
                  {loading ? (
                    <span>Processing Architecture Scope...</span>
                  ) : (
                    <>
                      <span>Request Free Architecture Roadmap & Quote</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
