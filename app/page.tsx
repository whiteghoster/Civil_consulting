import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { ServicesSection } from "@/components/sections/services-preview";
import { WhyUsSection } from "@/components/sections/why-us";
import { ProjectsSection } from "@/components/sections/projects-preview";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ClientsSection } from "@/components/sections/clients";
import { CTASection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyUsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ClientsSection />
      <CTASection />
    </>
  );
}
