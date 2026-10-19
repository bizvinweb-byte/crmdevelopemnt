import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info with Brandmingo Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link 
              href="/" 
              className="inline-block group focus:outline-none"
            >
              <Image
                src="/brandmingo-footer-white.png"
                alt="Brandmingo Logo - crmdevelopment.in"
                width={220}
                height={50}
                unoptimized
                priority
                className="object-contain h-9 sm:h-11 w-auto transition-transform group-hover:scale-102"
              />
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              <strong className="text-white">Brandmingo</strong> presents <strong className="text-[#ff8843]">crmdevelopment.in</strong> — India&apos;s premier bespoke CRM engineering team. We build custom, AI-integrated customer relationship management architectures with 100% intellectual property ownership and zero recurring user licensing.
            </p>
            <div className="flex items-center gap-3 pt-2 text-[11px] text-slate-500">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                ISO 27001 Certified Dev Team
              </span>
              <span>•</span>
              <span>100% Code Ownership</span>
            </div>
          </div>

          {/* CRM Services Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              CRM Solutions
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#services" className="hover:text-[#ff8843] transition-colors">
                  Custom CRM Software Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#ff8843] transition-colors">
                  AI CRM Automation Services
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#ff8843] transition-colors">
                  CRM Migration & Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#ff8843] transition-colors">
                  Custom Mobile CRM App Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#ff8843] transition-colors">
                  CRM API Integration Services
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#ff8843] transition-colors">
                  CRM Security & Data Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* Industry CRM Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Industry Verticals
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#industries" className="hover:text-[#ff8843] transition-colors">
                  Real Estate CRM Systems
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-[#ff8843] transition-colors">
                  Healthcare & Telehealth CRM
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-[#ff8843] transition-colors">
                  FinTech & Banking CRM
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-[#ff8843] transition-colors">
                  E-Commerce & Retail CRM
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-[#ff8843] transition-colors">
                  Logistics & Cargo CRM
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-[#ff8843] transition-colors">
                  EdTech Admissions CRM
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ff8843] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  8th Floor, ITHUM TOWER, B-806, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ff8843] flex-shrink-0" />
                <a href="mailto:contact@crmdevelopment.in" className="hover:text-white transition-colors">
                  contact@crmdevelopment.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:+919990613140" className="hover:text-white transition-colors">
                  +91 99906 13140
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright and SEO Keyword cluster text */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {currentYear} <strong className="text-slate-300">Brandmingo</strong> / <strong className="text-[#ff8843]">crmdevelopment.in</strong>. All Rights Reserved. Engineered for Google Top Rankings & Maximum Velocity.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/#services" className="hover:text-slate-400">Services</Link>
            <Link href="/#industries" className="hover:text-slate-400">Industries</Link>
            <Link href="/#insights" className="hover:text-slate-400">Insights</Link>
            <Link href="/#faq" className="hover:text-slate-400">FAQ</Link>
            <Link href="/contact" className="hover:text-slate-400">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
