import { motion } from "framer-motion";
import { MonitorPlay, BookOpen, MessageSquare, Globe, Database, Cloud, ShieldCheck, Code, Palette } from "lucide-react";

const services = [
  { icon: MonitorPlay, title: "Online Learning Platforms", desc: "Virtual classrooms with live sessions, recorded lectures, quizzes, and progress tracking.", category: "education" },
  { icon: BookOpen, title: "Digital Classrooms", desc: "Smart classroom solutions with interactive displays and integrated LMS.", category: "education" },
  { icon: MessageSquare, title: "Academic Consulting", desc: "Expert guidance on curriculum development, accreditation and digital transformation.", category: "education" },
  { icon: Globe, title: "Web Development", desc: "Custom web applications, portals, and responsive websites with modern frameworks.", category: "it" },
  { icon: Database, title: "ERP Systems", desc: "Enterprise resource planning solutions tailored for educational institutions.", category: "it" },
  { icon: Cloud, title: "Cloud Integration", desc: "Cloud migration, infrastructure management, and SaaS solutions.", category: "it" },
  { icon: ShieldCheck, title: "Cybersecurity", desc: "Security audits, threat monitoring, data protection, and compliance management.", category: "it" },
  { icon: Palette, title: "UI/UX Design", desc: "Modern, intuitive, and conversion-focused designs that delight users.", category: "it" },
];

const EducationServices = () => {
  return (
    <section id="education" className="py-20 lg:py-28 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Innovation That Drives Real Results
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-14">
            Comprehensive digital services designed to help institutions innovate, optimize operations and stay competitive.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group p-6 rounded-xl bg-card border border-border card-elevated"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <s.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationServices;
