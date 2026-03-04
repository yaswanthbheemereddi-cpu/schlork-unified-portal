import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutInnovations from "@/components/sections/AboutInnovations";
import AboutPvtLtd from "@/components/sections/AboutPvtLtd";
import UAMSSection from "@/components/sections/UAMSSection";
import EducationServices from "@/components/sections/EducationServices";
import StatsSection from "@/components/sections/StatsSection";
import ApplicationsSection from "@/components/sections/ApplicationsSection";
import FAQSection from "@/components/sections/FAQSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutInnovations />
      <AboutPvtLtd />
      <UAMSSection />
      <EducationServices />
      <StatsSection />
      <ApplicationsSection />
      <FAQSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
