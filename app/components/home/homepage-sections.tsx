import { FloatingElements } from "@/components/floating-elements";
import { ContactSection, FaqSection, HeroSection, PortfolioSection, ProcessSection, ServicesSection, StatsSection, TestimonialsSection } from "../sections";

export function HomePageSections() {
  return (
    <main className="max-sm:p-6">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <FloatingElements />
    </main>
  )
}
