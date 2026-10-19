import { 
  Code2, 
  Database, 
  Cloud, 
  Server, 
  Cpu,
  Sparkles
} from "lucide-react";

export default function TechStack() {
  const stack = [
    {
      category: "Frontend & Mobile",
      technologies: ["Next.js 15 / React", "TypeScript", "Tailwind CSS", "React Native", "Flutter", "Progressive Web Apps (PWA)"],
      icon: Code2,
    },
    {
      category: "Backend & Microservices",
      technologies: ["Node.js / Express", "Python / FastAPI", "Go (Golang)", "GraphQL & REST APIs", "gRPC Pipelines", "Celery / BullMQ"],
      icon: Server,
    },
    {
      category: "Database & In-Memory Cache",
      technologies: ["PostgreSQL", "MongoDB", "Redis Cache", "ClickHouse (Analytics)", "Elasticsearch", "Pinecone (Vector DB)"],
      icon: Database,
    },
    {
      category: "Cloud, DevOps & Security",
      technologies: ["Amazon Web Services (AWS)", "Google Cloud Platform", "Docker & Kubernetes", "Cloudflare Zero Trust", "CI/CD GitHub Actions", "SSL & Encryption"],
      icon: Cloud,
    },
  ];

  const connectors = [
    {
      name: "Salesforce API",
      category: "CRM Bi-directional Sync",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#00A1E0">
          <path d="M10.1 5.3a5.2 5.2 0 0 1 4.5 2.6 4.7 4.7 0 0 1 3.7-.1 4.4 4.4 0 0 1 3.1 3.7 4.1 4.1 0 0 1 1.6 3.2 4.4 4.4 0 0 1-4.4 4.3H5.4A4.4 4.4 0 0 1 1 14.6a4.3 4.3 0 0 1 2.3-3.8 5 5 0 0 1 2.3-5.2 5.3 5.3 0 0 1 4.5-.3z"/>
        </svg>
      ),
    },
    {
      name: "HubSpot CRM",
      category: "Inbound Leads & Contacts",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF7A59">
          <path d="M18.8 7.5V5.2a1.9 1.9 0 0 0-1.2-1.8 1.9 1.9 0 0 0-2.2.4l-4.7 4a1.9 1.9 0 0 0-.6 1.4v2.8l-2.4 1.4a1.9 1.9 0 0 0-1 1.7v4.6a1.9 1.9 0 0 0 1.9 1.9 1.9 1.9 0 0 0 1.9-1.9v-3.7l2.3-1.4a1.9 1.9 0 0 0 1-1.7V9.7l4.1-3.5a1.9 1.9 0 0 0 .9 1.3v.1a2.8 2.8 0 1 0 0 5.4v.5a1.9 1.9 0 0 0 1 1.6v2a1.9 1.9 0 1 0 1.9 0v-2a1.9 1.9 0 0 0 1-1.6v-.5a2.8 2.8 0 0 0 0-5.5z"/>
        </svg>
      ),
    },
    {
      name: "Zoho CRM",
      category: "Database & Pipelines",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <rect x="2" y="2" width="9" height="9" rx="2" fill="#E42527"/>
          <rect x="13" y="2" width="9" height="9" rx="2" fill="#2E6EB5"/>
          <rect x="2" y="13" width="9" height="9" rx="2" fill="#42B84D"/>
          <rect x="13" y="13" width="9" height="9" rx="2" fill="#F49A24"/>
        </svg>
      ),
    },
    {
      name: "WhatsApp Cloud API",
      category: "Chatbots & Instant Alerts",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#25D366">
          <path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.2-.2.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-.9-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .8.8.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.6.2-1.7-.1-.2-.3-.3-.6-.5z"/>
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2z"/>
        </svg>
      ),
    },
    {
      name: "Twilio VoIP",
      category: "Click-to-Call & Telephony",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#F22F46">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="8" cy="8" r="2" fill="#fff"/>
          <circle cx="16" cy="8" r="2" fill="#fff"/>
          <circle cx="8" cy="16" r="2" fill="#fff"/>
          <circle cx="16" cy="16" r="2" fill="#fff"/>
        </svg>
      ),
    },
    {
      name: "Stripe & Razorpay",
      category: "Recurring Payments & Invoicing",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#635BFF">
          <path d="M13.9 8.7c0-.8.7-1.2 1.9-1.2 1.5 0 3.2.4 4.3 1.1V4.2c-1.3-.5-2.8-.8-4.3-.8-4 0-6.7 2.1-6.7 5.7 0 5.6 7.7 4.7 7.7 7.1 0 .9-.8 1.3-2.1 1.3-1.8 0-3.8-.7-5.1-1.6v4.6c1.5.7 3.3 1 5.1 1 4.2 0 7-2.1 7-5.8 0-6.1-7.8-5-7.8-7.1z"/>
        </svg>
      ),
    },
    {
      name: "SendGrid",
      category: "Transactional & Mass Email",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1A82E2">
          <path d="M2 5.5v13a2.5 2.5 0 0 0 2.5 2.5h15a2.5 2.5 0 0 0 2.5-2.5v-13a2.5 2.5 0 0 0-2.5-2.5h-15A2.5 2.5 0 0 0 2 5.5zm10 7L4.5 7h15L12 12.5zm-7.5-3.5L12 14.5l7.5-5.5V18.5h-15V9z"/>
        </svg>
      ),
    },
    {
      name: "Zapier Webhooks",
      category: "No-Code Automated Flows",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF4A00">
          <rect x="10.5" y="2" width="3" height="20" rx="1.5"/>
          <rect x="2" y="10.5" width="20" height="3" rx="1.5"/>
          <rect x="4.5" y="4.5" width="15" height="3" rx="1.5" transform="rotate(45 12 6)"/>
          <rect x="4.5" y="16.5" width="15" height="3" rx="1.5" transform="rotate(-45 12 18)"/>
        </svg>
      ),
    },
    {
      name: "Google Workspace",
      category: "Gmail, Calendar & Drive",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7v3.1h3.9c2.3-2.1 3.5-5.2 3.5-9z"/>
          <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-3l-3.9-3.1c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.8-5H1.2v3.2C3.2 21.3 7.3 24 12 24z"/>
          <path fill="#FBBC05" d="M5.2 14.1c-.3-.7-.4-1.5-.4-2.1s.1-1.4.4-2.1V6.7H1.2C.4 8.3 0 10.1 0 12s.4 3.7 1.2 5.3l4-3.2z"/>
          <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C18 1.2 15.2 0 12 0 7.3 0 3.2 2.7 1.2 6.7l4 3.2c1-2.9 3.7-5.1 6.8-5.1z"/>
        </svg>
      ),
    },
    {
      name: "Microsoft 365",
      category: "Outlook & Active Directory",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022"/>
          <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00"/>
          <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF"/>
          <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900"/>
        </svg>
      ),
    },
    {
      name: "Slack Webhooks",
      category: "Real-Time Deal Notifications",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#E01E5A" d="M5.5 10a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm0 1.5H3a2 2 0 0 0 0 4h2.5zm4.5-6a2 2 0 0 0-4 0v2.5H10z"/>
          <path fill="#36C5F0" d="M14 5.5a2 2 0 1 0 2-2 2 2 0 0 0-2 2zm-1.5 0V3a2 2 0 0 0-4 0v2.5zm6 4.5a2 2 0 0 0 0-4h-2.5V10z"/>
          <path fill="#2EB67D" d="M18.5 14a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0-1.5H21a2 2 0 0 0 0-4h-2.5zm-4.5 6a2 2 0 0 0 4 0v-2.5H14z"/>
          <path fill="#ECB22E" d="M10 18.5a2 2 0 1 0-2 2 2 2 0 0 0 2-2zm1.5 0V21a2 2 0 0 0 4 0v-2.5zm-6-4.5a2 2 0 0 0 0 4h2.5V14z"/>
        </svg>
      ),
    },
    {
      name: "QuickBooks Online",
      category: "Accounting & Ledger Sync",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#2CA01C">
          <circle cx="12" cy="12" r="10"/>
          <path fill="#fff" d="M9.8 8.2v5.2c0 .8-.5 1.4-1.2 1.4s-1.2-.6-1.2-1.4V9.6h-1.6v3.8c0 1.7 1.3 3 2.8 3s2.8-1.3 2.8-3V8.2H9.8zm4.4 7.6v-5.2c0-.8.5-1.4 1.2-1.4s1.2.6 1.2 1.4v3.8h1.6v-3.8c0-1.7-1.3-3-2.8-3s-2.8 1.3-2.8 3v5.2h1.6z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#fff5ef] to-[#ffedd5] text-[#ff6b1e] text-xs font-semibold mb-3 border border-[#ffd5be] shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-[#ff6b1e]" />
            <span>Modern Technology Stack</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 tracking-tight leading-[1.25]">
            <span className="block sm:whitespace-nowrap">Enterprise Architecture</span>
            <span className="bg-gradient-to-r from-[#ff5500] via-[#ff6b1e] to-[#ff8843] bg-clip-text text-transparent block mt-0.5 sm:mt-1 sm:whitespace-nowrap">
              Built for Sub-Second Speed
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We use ultra-modern, battle-tested open-source and cloud infrastructure so your CRM stays lightning fast even with millions of customer records.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-14">
          {stack.map((group) => {
            const Icon = group.icon;
            return (
              <div 
                key={group.category}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-[#ffd5be] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#fff5ef] text-[#ff6b1e] border border-[#ffd5be]/60 group-hover:bg-[#ff6b1e] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#ff6b1e] transition-colors leading-snug">
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {group.technologies.map((tech) => (
                    <li key={tech} className="text-xs text-slate-600 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b1e]" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Third Party Integrations Cloud with Warm Accents */}
        <div className="bg-slate-950 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl border border-slate-800">
          <div className="relative z-10">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff6b1e]/20 text-[#ff8843] text-xs font-semibold mb-3 border border-[#ff6b1e]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#ff8843]" />
                <span>Omnichannel Connectivity</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Pre-Built Connectors for All Business Tools
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Connect your new custom CRM to your existing ecosystem in days, not months. We handle full webhook listeners, rate limits, and two-way sync.
              </p>
            </div>

            {/* Organized Connectors Grid with Authentic Brand Logos & Titles */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-3.5">
              {connectors.map((connector) => (
                <div 
                  key={connector.name}
                  className="bg-slate-900/90 hover:bg-slate-900 border border-slate-800 hover:border-[#ff6b1e]/60 rounded-2xl p-3.5 sm:p-4 transition-all duration-200 group hover:-translate-y-0.5 shadow-sm flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-white/15 flex items-center justify-center flex-shrink-0 transition-colors p-2 shadow-xs">
                    {connector.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-[#ff8843] transition-colors truncate">
                      {connector.name}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium truncate mt-0.5">
                      {connector.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
