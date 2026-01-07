import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WorkshopsSection } from "@/components/sections/WorkshopsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProofSection />
        <PricingSection />
        <TestimonialsSection />
        <WorkshopsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
