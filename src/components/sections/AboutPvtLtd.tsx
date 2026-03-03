import { motion } from "framer-motion";
import { BookOpen, Users, Award, Target } from "lucide-react";

const pillars = [
  { icon: BookOpen, title: "Academic Excellence", desc: "Delivering quality education through innovative curricula and modern pedagogical methods." },
  { icon: Users, title: "Student-Centric", desc: "Every initiative is designed with the student at the center, ensuring holistic development." },
  { icon: Award, title: "Accredited Programs", desc: "Internationally recognized programs that meet global education standards." },
  { icon: Target, title: "Mission Driven", desc: "Committed to making quality education accessible and affordable for all." },
];

const AboutPvtLtd = () => {
  return (
    <section className="py-20 px-6 section-alt">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Education Focus</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Schlork Pvt Ltd
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            Schlork Pvt Ltd is a dedicated education institution committed 100% to transforming the educational landscape.
            We provide comprehensive academic programs, digital learning environments, and institutional management solutions
            that prepare students for the challenges of tomorrow.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border card-elevated"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <pillar.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPvtLtd;
