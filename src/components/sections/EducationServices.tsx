import { motion } from "framer-motion";
import { MonitorPlay, BookOpen, MessageSquare } from "lucide-react";

const services = [
  {
    icon: MonitorPlay,
    title: "Online Learning Platforms",
    desc: "State-of-the-art virtual classrooms with live sessions, recorded lectures, interactive quizzes, and progress tracking for a seamless remote learning experience.",
  },
  {
    icon: BookOpen,
    title: "Digital Classrooms",
    desc: "Smart classroom solutions equipped with interactive displays, IoT-enabled devices, and integrated LMS for an immersive in-person and hybrid learning environment.",
  },
  {
    icon: MessageSquare,
    title: "Academic Consulting",
    desc: "Expert guidance for institutions on curriculum development, accreditation processes, quality assurance frameworks, and digital transformation strategies.",
  },
];

const EducationServices = () => {
  return (
    <section className="py-20 px-6 section-alt">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">What We Offer</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-12">
            Education Services
          </h2>
        </motion.div>
        <div className="space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col md:flex-row gap-6 p-8 rounded-xl bg-card border border-border card-elevated"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationServices;
