import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Monitor, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary-foreground/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/15 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <GraduationCap className="h-4 w-4" />
            Schlork Group of Companies
          </motion.div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Empowering Education Through Technology
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
            Building next-generation academic management systems and delivering comprehensive education and IT solutions for universities worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-colors">
              Explore UAMS
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors">
              Our Services
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl"
        >
          {[
            { icon: GraduationCap, label: "Education Solutions", value: "100+ Institutions" },
            { icon: Monitor, label: "IT Infrastructure", value: "Enterprise Grade" },
            { icon: Globe, label: "Global Reach", value: "Pan-India Network" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-primary-foreground/10 backdrop-blur-sm">
              <stat.icon className="h-8 w-8 text-primary-foreground/70" />
              <div>
                <p className="text-sm text-primary-foreground/60">{stat.label}</p>
                <p className="font-semibold text-primary-foreground">{stat.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
