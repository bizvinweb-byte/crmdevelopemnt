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
    default: "CRM Development Company India | Custom CRM Software Solutions - crmdevelopment.in",
    template: "%s | crmdevelopment.in",
  },
  description:
    "Looking for custom CRM development? crmdevelopment.in builds high-performance, bespoke CRM systems, AI workflow automation, and enterprise integrations with zero per-user monthly licensing.",
  keywords: [
    "crmdevelopment",
    "crm development",
    "custom crm development",
    "crm development company",
    "custom crm software india",
    "crm development services",
    "crm software development",
    "crm migration services",
    "enterprise crm solutions",
    "bespoke crm developers",
    "crmdevelopment in",
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
  alternates: {
    canonical: "https://crmdevelopment.in",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
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

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Favicons for Browsers & Google Search Crawler */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

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
