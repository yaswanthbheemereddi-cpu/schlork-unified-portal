import { motion } from "framer-motion";
import { Users, ClipboardCheck, BarChart3, UserCog, Calendar, FileText, GraduationCap, Monitor, BookOpen } from "lucide-react";

const products = [
  { icon: GraduationCap, title: "UAMS", desc: "University Academic Management System" },
  { icon: Monitor, title: "Smart Classroom", desc: "IoT-enabled Digital Classroom" },
  { icon: BookOpen, title: "E-Learning", desc: "Online Learning Management System" },
  { icon: Users, title: "Student Portal", desc: "Complete Student Lifecycle Platform" },
  { icon: UserCog, title: "Faculty Hub", desc: "Faculty Management & Analytics" },
  { icon: BarChart3, title: "Result Engine", desc: "Automated Result Processing" },
];

const features = [
  { icon: Users, title: "Student Management", desc: "Complete student lifecycle management from admission to graduation." },
  { icon: ClipboardCheck, title: "Attendance Tracking", desc: "Automated attendance with biometric and digital integration." },
  { icon: BarChart3, title: "Results & Analytics", desc: "Comprehensive result processing with performance dashboards." },
  { icon: UserCog, title: "Faculty Management", desc: "Faculty profiles, workload allocation, and performance tracking." },
  { icon: Calendar, title: "Timetable Management", desc: "Intelligent scheduling with conflict resolution." },
  { icon: FileText, title: "Examination Portal", desc: "End-to-end examination management." },
];

const UAMSSection = () => {
  return (
    <>
      {/* Products Grid */}
      <section id="uams" className="py-20 lg:py-28 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Products</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Built to Solve Real Challenges
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our digital products improve efficiency, automation and user experience through smart education technology.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-xl bg-card border border-border card-elevated text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <p.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UAMS Features */}
      <section className="py-20 lg:py-28 px-4 lg:px-8 section-alt">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">UAMS Features</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              University Academic Management System
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A comprehensive, cloud-based platform designed to streamline every aspect of university administration.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl bg-card border border-border card-elevated"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UAMSSection;
