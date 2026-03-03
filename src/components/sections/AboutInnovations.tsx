import { motion } from "framer-motion";
import { Lightbulb, Code, GraduationCap, Shield } from "lucide-react";

const services = [
  { icon: GraduationCap, title: "Education Solutions", desc: "Comprehensive digital learning platforms, academic management systems, and smart classroom integrations." },
  { icon: Code, title: "IT Solutions", desc: "Enterprise web development, ERP systems, cloud infrastructure, and cybersecurity services." },
  { icon: Lightbulb, title: "Innovation Lab", desc: "Research and development of cutting-edge educational technology and AI-driven learning tools." },
  { icon: Shield, title: "Consulting", desc: "Strategic technology consulting for educational institutions and corporate enterprises." },
];

const AboutInnovations = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">About Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Schlork Innovations LLP
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            Schlork Innovations LLP is a forward-thinking technology company that bridges the gap between education and IT.
            We specialize in building robust academic management systems, digital learning platforms, and enterprise IT solutions
            that empower institutions to deliver world-class education and streamline their operations.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border card-elevated"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutInnovations;
