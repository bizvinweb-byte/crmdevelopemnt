"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  BookOpen, 
  Share2, 
  TrendingUp,
  ShieldCheck,
  Cpu,
  ArrowUpRight
} from "lucide-react";

interface BlogPost {
  id: string;
  category: string;
  categoryColor: string;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatarText: string;
  };
  content: {
    summary: string;
    sections: {
      heading: string;
      paragraphs: string[];
      bullets?: string[];
    }[];
    takeaways: string[];
  };
}

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPost(null);
      }
    };
    if (selectedPost) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPost]);

  const posts: BlogPost[] = [
    {
      id: "custom-crm-development-cost-in-india",
      category: "Pricing & ROI",
      categoryColor: "bg-orange-50 text-[#ff6b1e] border-orange-200",
      readTime: "7 min read",
      date: "October 20, 2026",
      title: "Custom CRM Development Cost in India (2026 Complete Pricing Guide)",
      excerpt: "Detailed 2026 cost breakdown for building a bespoke CRM in India. Understand MVP vs Enterprise tiers, cloud hosting, and how you save 70% compared to Salesforce.",
      author: {
        name: "Rahul Verma",
        role: "Principal CRM Solutions Architect",
        avatarText: "RV",
      },
      content: {
        summary: "In India, custom CRM development ranges from ₹2.5 Lakhs for basic MVPs to ₹15 Lakhs+ for enterprise systems with WhatsApp Cloud API, telephony, and AI predictive scoring. Unlike commercial SaaS, you own the IP 100% with zero recurring seat fees.",
        sections: [
          {
            heading: "Commercial SaaS vs Custom CRM 3-Year Cost Comparison",
            paragraphs: [
              "A 50-person sales team typically pays ₹67,50,000+ ($81,000) over 3 years on Salesforce Enterprise licenses. A custom CRM costs around ₹9,50,000 once with minimal hosting overhead, saving over ₹55 Lakhs.",
            ],
            bullets: [
              "MVP tier: ₹2.5L - ₹4.5L (3-5 weeks)",
              "Mid-market tier: ₹5L - ₹12L (6-10 weeks)",
              "Enterprise tier: ₹15L - ₹35L+ (12-20 weeks)"
            ]
          }
        ],
        takeaways: [
          "Zero recurring per-user fees forever.",
          "Breakeven within 6 to 9 months for 25+ sales reps.",
          "100% intellectual property asset added to your company."
        ]
      }
    },
    {
      id: "why-enterprises-abandon-salesforce-hubspot",
      category: "CRM Strategy & ROI",
      categoryColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      readTime: "6 min read",
      date: "October 18, 2026",
      title: "Why High-Growth Enterprises Are Abandoning Salesforce & HubSpot for Custom CRMs",
      excerpt: "Discover how modern mid-market and enterprise businesses eliminate 7-figure annual per-seat licensing fees while gaining 100% intellectual property ownership and custom workflows.",
      author: {
        name: "Rahul Verma",
        role: "Principal CRM Solutions Architect",
        avatarText: "RV",
      },
      content: {
        summary: "As companies scale beyond 50 team members, commercial SaaS CRMs like Salesforce and HubSpot turn from helpful tools into massive cost centers. Between tier upgrades, third-party plugin fees, and artificial API rate limits, businesses spend hundreds of thousands of dollars annually on software they do not own.",
        sections: [
          {
            heading: "The Hidden Tax of Commercial Per-User SaaS",
            paragraphs: [
              "Commercial SaaS providers are structured around increasing Average Revenue Per User (ARPU). As your team grows, you are forced into enterprise tiers merely to access basic features like custom role-based permissions, advanced audit logs, or increased API call limits.",
              "A team of 100 sales and operations agents typically pays between $150,000 to $300,000 per year in recurring subscriptions alone. Over a 5-year period, this compounds into more than $1,000,000 in pure operational overhead without building any enterprise asset value.",
            ],
            bullets: [
              "Zero capital equity built: You rent code you cannot modify or sell.",
              "Feature bloat slows down daily deal entry by 40%.",
              "Annual price hikes and forced contract renewals with 3-year lock-ins.",
            ],
          },
          {
            heading: "The Custom CRM Advantage: 100% Code & Data Ownership",
            paragraphs: [
              "Building a bespoke CRM on modern frameworks (such as Next.js, Node.js, and PostgreSQL) requires a one-time capital investment that typically achieves full payback within 6 to 9 months. Once delivered, your recurring cost drops down to pure cloud hosting (AWS/GCP), which rarely exceeds $300/month even under heavy traffic.",
              "Most importantly, your business workflows are codified exactly as your sales team operates — with custom lead stages, instant WhatsApp messaging, and seamless ERP data pipelines without awkward plugin bridges.",
            ],
            bullets: [
              "Zero recurring per-user license fees forever.",
              "10x faster page transitions and purpose-built dashboard speed.",
              "Full compliance control with self-hosted PostgreSQL/MongoDB database encryption.",
            ],
          },
        ],
        takeaways: [
          "Custom CRMs deliver 3.8x higher long-term ROI compared to commercial SaaS.",
          "Breakeven is achieved within 6 to 9 months for teams with 25+ users.",
          "Proprietary IP adds tangible enterprise valuation to your company during funding or acquisition.",
        ],
      },
    },
    {
      id: "whatsapp-cloud-api-crm-integration-architecture",
      category: "Engineering & APIs",
      categoryColor: "bg-blue-50 text-blue-700 border-blue-200",
      readTime: "8 min read",
      date: "October 16, 2026",
      title: "Integrating WhatsApp Cloud API into Custom CRM: The Ultimate Architecture Guide",
      excerpt: "A deep dive into webhook concurrency, asynchronous queue management with BullMQ, automated lead routing, and compliance for sub-second customer engagement.",
      author: {
        name: "Amitabh Sen",
        role: "Lead Full-Stack Systems Engineer",
        avatarText: "AS",
      },
      content: {
        summary: "In Asian and European markets, WhatsApp accounts for over 85% of initial prospect conversations. A custom CRM with native WhatsApp Cloud API integration eliminates the need for expensive third-party wrappers (like Twilio or Wati) and enables instant, automated conversational sales pipelines.",
        sections: [
          {
            heading: "High-Throughput Webhook Listeners & Queue Buffers",
            paragraphs: [
              "Meta's WhatsApp Cloud API delivers real-time message payloads and delivery statuses via webhooks. During marketing campaigns, receiving thousands of webhooks per minute can crash standard web servers if handled synchronously.",
              "Our engineering architecture deploys an ultra-fast Redis and BullMQ event ingestion queue. The webhook endpoint returns an instant HTTP 200 acknowledgment to Meta within 15 milliseconds, while background worker processes safely parse messages, assign leads, and trigger AI automated replies.",
            ],
            bullets: [
              "Instant 15ms webhook handshake preventing Meta timeout retries.",
              "Automatic message deduplication and media asset caching in S3/Cloudflare R2.",
              "Role-based agent assignment algorithms (round-robin, performance-based, or territory-based).",
            ],
          },
          {
            heading: "Automated Conversational Journeys & Direct CRM Logging",
            paragraphs: [
              "Every incoming inquiry automatically triggers customer record creation, pipeline stage updates, and agent notifications in Slack or Teams. Sales agents can reply directly from the custom CRM web or mobile interface without ever handling separate physical handsets.",
            ],
            bullets: [
              "Full conversation history attached to the prospect's CRM contact card.",
              "Automated payment links and quotation generation via WhatsApp.",
              "Meta template approvals and interactive quick-reply button triggers.",
            ],
          },
        ],
        takeaways: [
          "Native WhatsApp Cloud API saves thousands in third-party gateway markups.",
          "Sub-minute response times increase lead qualification rates by up to 390%.",
          "Complete audit logs ensure full corporate oversight over agent-client communication.",
        ],
      },
    },
    {
      id: "ai-driven-sales-automation-predictive-scoring",
      category: "AI & Automation",
      categoryColor: "bg-[#fff5ef] text-[#ff6b1e] border-[#ffd5be]",
      readTime: "5 min read",
      date: "October 12, 2026",
      title: "AI-Driven Sales Automation: Implementing Predictive Deal Scoring in Your CRM",
      excerpt: "How modern machine learning models analyze prospect interaction signals, pipeline velocity, and sentiment to forecast revenue and prioritize high-value deals with 94%+ accuracy.",
      author: {
        name: "Dr. Vikram Joshi",
        role: "Head of AI & Enterprise Analytics",
        avatarText: "VJ",
      },
      content: {
        summary: "Most sales teams spend 60% of their day pursuing dead leads that will never convert. By building lightweight predictive AI models directly inside your custom CRM database, sales reps are automatically guided toward the opportunities with the highest closing probability.",
        sections: [
          {
            heading: "How Predictive Scoring Differs from Static Rules",
            paragraphs: [
              "Traditional CRMs rely on crude point-scoring rules (e.g. +5 points for email open, +10 for website visit). These fail because an executive opening an email from a mobile device behaves completely differently from an unqualified intern browsing documentation.",
              "Our custom AI modules ingest multi-dimensional features: response latency, email sentiment, job title seniority, company funding records, and interaction frequency to generate dynamic deal scores between 1 and 100 in real time.",
            ],
            bullets: [
              "Natural Language Processing (NLP) for call transcripts and email sentiment.",
              "Pipeline velocity decay tracking: Identifies deals stagnating in mid-funnel stages.",
              "Automated next-best-action recommendations for sales executives.",
            ],
          },
          {
            heading: "Seamless In-Dashboard AI Workflows",
            paragraphs: [
              "Rather than switching between ChatGPT or external dashboards, your custom CRM generates 1-click meeting summaries, customized proposal drafts, and urgent follow-up notifications directly in the deal view.",
            ],
            bullets: [
              "Generative email drafts tailored to the client's explicit pain points.",
              "Executive revenue forecast dashboards with automated variance tracking.",
              "Self-hosted LLMs ensuring strict confidentiality of enterprise deal pricing.",
            ],
          },
        ],
        takeaways: [
          "Sales teams using predictive scoring report a 28% increase in closed-won ratios.",
          "Average sales cycle length drops from 42 days to 26 days.",
          "Client data remains 100% private with enterprise-grade dedicated AI pipelines.",
        ],
      },
    },
  ];

  return (
    <section id="insights" className="py-12 sm:py-16 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#fff5ef] to-[#ffedd5] text-[#ff6b1e] text-xs font-semibold mb-3 border border-[#ffd5be] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#ff6b1e]" />
            <span>CRM Engineering & Strategy Playbooks</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 tracking-tight leading-[1.25]">
            Latest Insights &amp; <span className="bg-gradient-to-r from-[#ff5500] via-[#ff6b1e] to-[#ff8843] bg-clip-text text-transparent">CRM Architectural</span> Guides
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Practical technical guides, ROI frameworks, and engineering playbooks for building scalable, high-conversion enterprise CRM systems.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl border border-slate-200/90 hover:border-[#ffd5be] hover:shadow-xl hover:shadow-[#ff6b1e]/10 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-7">
                {/* Meta details */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#ff6b1e] transition-colors leading-snug mb-3">
                  <Link href={`/blog/${post.id}`} className="hover:text-[#ff6b1e] transition-colors">
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Card Footer with Author & Trigger Button */}
              <div className="px-7 py-4.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#fff5ef] border border-[#ffd5be] text-[#ff6b1e] font-bold text-xs flex items-center justify-center">
                    {post.author.avatarText}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 leading-tight">
                      {post.author.name}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      {post.date}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedPost(post)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors px-2 py-1 cursor-pointer"
                    aria-label={`Preview guide: ${post.title}`}
                  >
                    Preview
                  </button>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#ff6b1e] hover:text-[#e65a12] group-hover:translate-x-1 transition-all"
                    aria-label={`Read full guide: ${post.title}`}
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Interactive Modal Popup */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-hidden animate-fade-in"
          onClick={() => setSelectedPost(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="bg-white rounded-3xl sm:rounded-4xl border border-slate-200/90 shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col relative overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Header Bar */}
            <div className="px-6 sm:px-10 py-4.5 bg-white border-b border-slate-100 flex items-center justify-between flex-shrink-0 z-20">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${selectedPost.categoryColor}`}>
                  {selectedPost.category}
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="text-xs text-slate-500 font-medium inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {selectedPost.readTime}
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="text-xs text-slate-500 font-medium hidden sm:inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {selectedPost.date}
                </span>
              </div>
              
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 flex items-center justify-center transition-all cursor-pointer flex-shrink-0 ml-4 hover:rotate-90"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Article Body */}
            <div className="overflow-y-auto overflow-x-hidden modal-scrollbar p-6 sm:p-10 md:p-12 space-y-8 flex-1">
              {/* Header Title */}
              <div>
                <h2 id="modal-title" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-[1.25]">
                  {selectedPost.title}
                </h2>

                {/* Author Info Strip */}
                <div className="flex items-center gap-3.5 pt-5 pb-6 border-b border-slate-100 mt-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#ff6b1e] to-[#ff8843] text-white font-bold text-base flex items-center justify-center shadow-md shadow-[#ff6b1e]/20 flex-shrink-0">
                    {selectedPost.author.avatarText}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-sm sm:text-base">
                        {selectedPost.author.name}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 font-semibold px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Verified CRM Architect
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {selectedPost.author.role} • crmdevelopment.in
                    </div>
                  </div>
                </div>
              </div>

              {/* Executive Summary Callout Box */}
              <div className="bg-gradient-to-br from-[#fff7f2] via-[#fff5ef] to-amber-50/30 border border-[#ffd5be] rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#ff6b1e] uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4 text-[#ff6b1e]" />
                  <span>Executive Architecture Brief</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  {selectedPost.content.summary}
                </p>
              </div>

              {/* Detailed Content Sections */}
              <div className="space-y-8">
                {selectedPost.content.sections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-[#fff5ef] border border-[#ffd5be] text-[#ff6b1e] font-black text-xs flex items-center justify-center flex-shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                        {section.heading}
                      </h3>
                    </div>

                    <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed pl-0 sm:pl-9.5">
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>
                          {p}
                        </p>
                      ))}
                    </div>

                    {section.bullets && (
                      <div className="grid grid-cols-1 gap-2.5 pt-2 pl-0 sm:pl-9.5">
                        {section.bullets.map((b, bIdx) => (
                          <div 
                            key={bIdx} 
                            className="flex items-start gap-3 bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/60"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#ff6b1e] flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{b}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Key Architecture Takeaways Card */}
              <div className="bg-slate-950 text-white rounded-3xl p-7 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff6b1e]/15 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#ff8843] uppercase tracking-wider mb-4">
                    <TrendingUp className="w-4 h-4" />
                    <span>Strategic Architecture Takeaways</span>
                  </div>
                  <div className="space-y-3">
                    {selectedPost.content.takeaways.map((takeaway, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                        <span className="w-2 h-2 rounded-full bg-[#ff6b1e] flex-shrink-0 mt-1.5 shadow-sm shadow-[#ff6b1e]" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Consultation CTA within Modal */}
              <div className="bg-gradient-to-r from-[#fff5ef] to-[#ffedd5] border border-[#ffd5be] rounded-3xl p-6 sm:p-8 text-center space-y-4">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  Ready to implement custom CRM architecture for your enterprise?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                  Consult directly with our Senior CRM Architects. Get a custom technical roadmap, feasibility study, and transparent milestone quote within 24 hours.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/contact"
                    onClick={() => setSelectedPost(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ff6b1e] hover:bg-[#e65a12] text-white font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm shadow-md shadow-[#ff6b1e]/25 transition-all active:scale-95"
                  >
                    <span>Schedule Free Strategy Session</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedPost(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
