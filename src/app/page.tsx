import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Industries from "@/components/Industries";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <>
      {/* Hero Section with Primary Keyword H1 */}
      <Hero />

      {/* Services Grid with Comprehensive Solutions */}
      <Services />

      {/* Why Us - Custom CRM vs Commercial SaaS Comparison */}
      <WhyUs />

      {/* Vertical Industry Specific Modules */}
      <Industries />

      {/* Modern High-Performance Tech Stack & Integrations */}
      <TechStack />

      {/* 5-Step Delivery Lifecycle */}
      <Process />

      {/* SEO Rich FAQ Accordion with Consultation CTA */}
      <Faq />

      {/* Expert CRM Architecture Insights & Playbooks with Interactive Modal */}
      <BlogSection />
    </>
  );
}
