import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const slides = [
  {
    title: "Digital Transformation\nin Education",
    subtitle: "Empowering universities with intelligent academic management solutions.",
  },
  {
    title: "Innovative IT\nSolutions",
    subtitle: "Building scalable, secure and modern technology for tomorrow's institutions.",
  },
  {
    title: "UAMS — University\nAcademic Management",
    subtitle: "A comprehensive platform for student lifecycle, faculty, attendance, and results.",
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <img
        src={heroBg}
        alt="Education technology background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[hsl(var(--dark-bg)/0.7)]" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 whitespace-pre-line">
            {slides[0].title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-xl leading-relaxed">
            {slides[0].subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#uams"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors text-sm"
            >
              Explore UAMS
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
