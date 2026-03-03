import { motion } from "framer-motion";
import { Users, ClipboardCheck, BarChart3, UserCog, Calendar, FileText } from "lucide-react";

const features = [
  { icon: Users, title: "Student Management", desc: "Complete student lifecycle management from admission to graduation." },
  { icon: ClipboardCheck, title: "Attendance Tracking", desc: "Automated attendance with biometric and digital integration." },
  { icon: BarChart3, title: "Results & Analytics", desc: "Comprehensive result processing with performance analytics dashboards." },
  { icon: UserCog, title: "Faculty Management", desc: "Faculty profiles, workload allocation, and performance tracking." },
  { icon: Calendar, title: "Timetable Management", desc: "Intelligent scheduling with conflict resolution and resource optimization." },
  { icon: FileText, title: "Examination Portal", desc: "End-to-end examination management from scheduling to result publication." },
];

const UAMSSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Our Flagship Product</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            University Academic Management System
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-4 leading-relaxed">
            UAMS is a comprehensive, cloud-based academic management platform designed to streamline every aspect of university administration — from student enrollment and attendance tracking to examination management and result processing.
          </p>
          <p className="text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            Built with modern architecture and security-first principles, UAMS empowers institutions to digitize their operations, reduce manual workloads, and deliver data-driven insights for better decision-making.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-xl bg-card border border-border card-elevated text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UAMSSection;
