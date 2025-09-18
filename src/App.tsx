import React, { lazy, Suspense } from "react";

// ✅ Layout
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// ✅ Sections (always visible)
import HeroSection from "@/components/sections/HeroSection";
import CollectionsSection from "@/components/sections/CollectionsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import InfoGrid from "@/components/sections/InfoGrid";
import NewsletterSection from "@/components/sections/NewsletterSection";

// ✅ Lazy-load Optionals (improves performance for below-the-fold content)
const TestimonialsSection = lazy(() => import("@/components/optionals/TestimonialsSection"));
const CTASection = lazy(() => import("@/components/optionals/CTASection"));
const AboutSection = lazy(() => import("@/components/optionals/AboutSection"));
const FAQSection = lazy(() => import("@/components/optionals/FAQSection"));

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <section aria-label="Hero Section">
          <HeroSection />
        </section>

        <section aria-label="Collections">
          <CollectionsSection />
        </section>

        <section aria-label="Projects">
          <ProjectsSection />
        </section>

        <section aria-label="Information Grid">
          <InfoGrid />
        </section>

        <section aria-label="Newsletter Signup">
          <NewsletterSection />
        </section>

        {/* ✅ Lazy Loaded Optionals */}
        <Suspense fallback={<div className="text-center py-8 text-gray-500">Loading...</div>}>
          <section aria-label="Testimonials">
            <TestimonialsSection />
          </section>

          <section aria-label="Call to Action">
            <CTASection />
          </section>

          <section aria-label="About Us">
            <AboutSection />
          </section>

          <section aria-label="FAQ">
            <FAQSection />
          </section>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
