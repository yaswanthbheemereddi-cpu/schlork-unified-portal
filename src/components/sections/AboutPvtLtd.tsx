import { motion } from "framer-motion";
import { Lightbulb, Shield, Cpu, HeartHandshake } from "lucide-react";
import whyChoose from "@/assets/why-choose.jpg";

const benefits = [
  { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge solutions built on the latest technologies." },
  { icon: Shield, title: "Security", desc: "Enterprise-grade security in every product we deliver." },
  { icon: Cpu, title: "Smart Technology", desc: "AI-driven tools for intelligent academic management." },
  { icon: HeartHandshake, title: "Client-First Approach", desc: "Dedicated support and tailored solutions for every institution." },
];

const AboutPvtLtd = () => {
  return (
    <section id="about-pvt" className="py-20 lg:py-28 px-4 lg:px-8 section-alt">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <img
              src={whyChoose}
              alt="Schlork Pvt Ltd team"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Company Benefits
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Why Choose Schlork?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Schlork Pvt Ltd is 100% dedicated to education. We combine technical expertise, industry best practices, and innovative thinking to deliver reliable academic solutions. Our focus on quality, security and scalability ensures long-term success.
            </p>
            <p className="text-primary font-semibold italic mb-8">
              Your Vision. Our Expertise. Limitless Possibilities.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{b.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPvtLtd;
