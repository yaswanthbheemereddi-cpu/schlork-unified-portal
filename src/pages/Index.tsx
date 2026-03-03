import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import SlideNav from "@/components/SlideNav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutInnovations from "@/components/sections/AboutInnovations";
import AboutPvtLtd from "@/components/sections/AboutPvtLtd";
import UAMSSection from "@/components/sections/UAMSSection";
import EducationServices from "@/components/sections/EducationServices";
import ITSolutions from "@/components/sections/ITSolutions";
import ApplicationsSection from "@/components/sections/ApplicationsSection";
import ContactSection from "@/components/sections/ContactSection";

const sections: Record<string, React.FC> = {
  home: HeroSection,
  "about-innovations": AboutInnovations,
  "about-pvt": AboutPvtLtd,
  uams: UAMSSection,
  education: EducationServices,
  "it-solutions": ITSolutions,
  applications: ApplicationsSection,
  contact: ContactSection,
};

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const ActiveComponent = sections[activeSection] || HeroSection;

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onMenuToggle={() => setMenuOpen(true)} />
      <SlideNav
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
      <main className="flex-1 pt-16" ref={contentRef}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
