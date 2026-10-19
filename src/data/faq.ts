export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    question: "What is custom CRM development and why is it better than off-the-shelf software?",
    answer: "Custom CRM development is the process of engineering a bespoke Customer Relationship Management system built strictly around your company's proprietary workflows, lead qualification funnels, and data structures. Unlike off-the-shelf SaaS platforms (like Salesforce, Zoho, or HubSpot), a custom CRM has no recurring per-user monthly licensing fees, no rigid feature constraints, and grants you 100% intellectual property ownership."
  },
  {
    question: "How much does custom CRM development cost in India?",
    answer: "The cost of custom CRM development in India typically ranges from $4,000 to $25,000 (INR 3 Lakhs to 20 Lakhs) depending on scope, feature complexity, third-party integrations, and whether mobile apps are included. Because you own the software perpetually, most companies break even and achieve full ROI within 6 to 12 months compared to paying ongoing SaaS per-seat subscriptions."
  },
  {
    question: "How long does it take to develop and launch a custom CRM?",
    answer: "A standard custom CRM Minimum Viable Architecture (MVP) is deployed within 4 to 8 weeks. For complex enterprise implementations involving legacy database migrations, multi-tier approvals, and extensive ERP/VoIP integrations, the delivery timeline typically spans 8 to 14 weeks using agile 2-week sprint releases."
  },
  {
    question: "Can you migrate data from our existing CRM or Excel spreadsheets?",
    answer: "Yes, absolutely. Our CRM engineers perform complete data extraction, deduplication, schema normalization, and automated migration from legacy tools including Salesforce, Zoho, HubSpot, Pipedrive, vTiger, and legacy Excel/Google Sheets with zero data loss and minimal operational disruption."
  },
  {
    question: "Do we get 100% ownership of the source code and database?",
    answer: "Yes, 100%. Upon final project delivery and milestone sign-off, all Git source code repositories, database schemas, architectural diagrams, and intellectual property rights are legally transferred directly to your organization. You have complete freedom to host it on your private cloud (AWS, GCP, Azure, or On-Premise)."
  },
  {
    question: "How does crmdevelopment.in ensure data security and compliance?",
    answer: "We implement enterprise-grade security protocols including AES-256 at-rest database encryption, TLS 1.3 in-transit encryption, granular Role-Based Access Control (RBAC), multi-factor authentication (MFA), complete audit logging, and automated cloud backups following ISO 27001, GDPR, and SOC 2 best practices."
  },
  {
    question: "What post-launch support and maintenance do you offer?",
    answer: "We provide 90 days of complimentary post-launch warranty support covering bug fixes, speed optimizations, and team handholding. Subsequently, we provide flexible Service Level Agreement (SLA) support plans covering infrastructure monitoring, regular security patches, and incremental feature development."
  }
];
