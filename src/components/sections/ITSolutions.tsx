import { motion } from "framer-motion";
import { Globe, Database, Cloud, ShieldCheck } from "lucide-react";

const solutions = [
  { icon: Globe, title: "Web Development", desc: "Custom web applications, portals, and responsive websites built with modern frameworks and best practices." },
  { icon: Database, title: "ERP Systems", desc: "Enterprise resource planning solutions tailored for educational institutions and corporate organizations." },
  { icon: Cloud, title: "Cloud Integration", desc: "Seamless cloud migration, infrastructure management, and SaaS solutions on leading cloud platforms." },
  { icon: ShieldCheck, title: "Cybersecurity", desc: "Comprehensive security audits, threat monitoring, data protection, and compliance management services." },
];

const ITSolutions = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Technology Services</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-12">
            IT Solutions
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border card-elevated"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <sol.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{sol.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{sol.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITSolutions;
