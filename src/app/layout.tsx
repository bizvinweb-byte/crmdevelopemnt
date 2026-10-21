import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { faqData } from "@/data/faq";
import { LeadModalProvider } from "@/context/LeadModalContext";
import LeadModal from "@/components/LeadModal";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ff6b1e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://crmdevelopment.in"),
  title: {
    default: "Custom CRM Development Company India | Bespoke CRM Software Solutions",
    template: "%s | crmdevelopment.in",
  },
  description:
    "Top Custom CRM Development Company in India. We engineer bespoke, AI-powered CRM systems, workflow automation & custom APIs with 100% code ownership & zero per-user licensing.",
  keywords: [
    "crm development",
    "crm development company",
    "custom crm development",
    "custom crm software india",
    "crm development services",
    "crm software development company",
    "crm development company in india",
    "crm development company in noida",
    "crm development delhi ncr",
    "bespoke crm developers",
    "enterprise crm solutions",
    "ai crm development",
    "custom crm development company",
    "salesforce alternative development",
    "hubspot alternative custom crm",
    "crm api integration",
    "crm migration services",
    "real estate crm development",
    "healthcare crm software",
    "b2b custom crm",
    "crm developers india",
    "custom crm builders",
    "lead management crm development",
    "crmdevelopment",
    "crmdevelopment in",
    "crmdevelopment.in",
    "brandmingo crm"
  ],
  authors: [{ name: "crmdevelopment.in Team", url: "https://crmdevelopment.in" }],
  creator: "crmdevelopment.in",
  publisher: "crmdevelopment.in",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Noida, Sector 62, Delhi NCR",
    "geo.position": "28.6280;77.3649",
    "ICBM": "28.6280, 77.3649",
  },
  alternates: {
    canonical: "https://crmdevelopment.in",
  },
  icons: {
    icon: [
      { url: "/favicon-48.png?v=3", type: "image/png", sizes: "48x48" },
      { url: "/favicon-32.png?v=3", type: "image/png", sizes: "32x32" },
      { url: "/icon.png?v=3", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico?v=3", sizes: "any" },
    ],
    shortcut: "/favicon-48.png?v=3",
    apple: [
      { url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://crmdevelopment.in",
    siteName: "crmdevelopment.in",
    title: "CRM Development Services | Custom Enterprise CRM Software",
    description:
      "Award-winning custom CRM development company. 100% code ownership, zero monthly per-seat fees, tailored for high-growth enterprises.",
    images: [
      {
        url: "https://crmdevelopment.in/icon-512.png",
        width: 512,
        height: 512,
        alt: "crmdevelopment.in Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM Development Solutions - crmdevelopment.in",
    description:
      "Bespoke CRM software development with AI automation, data migration, and zero recurring user fees.",
    creator: "@crmdevelopment_in",
    images: ["https://crmdevelopment.in/icon-512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Structured Data (JSON-LD) for Google SERP Domination
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://crmdevelopment.in/#organization",
    name: "crmdevelopment.in",
    url: "https://crmdevelopment.in",
    logo: "https://crmdevelopment.in/logo.png",
    description:
      "India's leading custom CRM development agency engineering bespoke enterprise CRM platforms, AI workflow automation, and cloud integrations.",
    email: "contact@crmdevelopment.in",
    telephone: "+919990613140",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8th Floor, ITHUM TOWER, B-806, Block A, Industrial Area, Sector 62",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201309",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/company/crmdevelopment-in",
      "https://twitter.com/crmdevelopment_in",
      "https://github.com/crmdevelopment-in"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "148",
      reviewCount: "148",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://crmdevelopment.in/#website",
    url: "https://crmdevelopment.in",
    name: "crmdevelopment.in - Custom CRM Development",
    publisher: {
      "@id": "https://crmdevelopment.in/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://crmdevelopment.in/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://crmdevelopment.in/#service",
    name: "Custom CRM Development Services",
    url: "https://crmdevelopment.in",
    provider: {
      "@id": "https://crmdevelopment.in/#organization",
    },
    serviceType: "Customer Relationship Management Software Development",
    areaServed: ["IN", "US", "UK", "AE", "SG", "AU"],
    priceRange: "$$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "CRM Development Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bespoke Custom CRM Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI CRM Automation & Integration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Legacy CRM Migration to Private Cloud",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://crmdevelopment.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Custom CRM Services",
        item: "https://crmdevelopment.in/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Industry CRM Solutions",
        item: "https://crmdevelopment.in/#industries",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact & Architecture Proposal",
        item: "https://crmdevelopment.in/contact",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Favicons for Browsers & Google Search Crawler */}
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=3" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png?v=3" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png?v=3" />
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />

        {/* Structured Data Script Tags for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
        <LeadModalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <LeadModal />
          <FloatingContactButtons />
        </LeadModalProvider>
      </body>
    </html>
  );
}
