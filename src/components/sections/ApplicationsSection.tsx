import { motion } from "framer-motion";
import { UserPlus, LogIn, CreditCard, Users, BarChart3 } from "lucide-react";

const apps = [
  { icon: UserPlus, title: "Student Admission Portal", desc: "Apply for admissions online", link: "#" },
  { icon: LogIn, title: "UAMS Login", desc: "Access the academic management system", link: "#" },
  { icon: CreditCard, title: "Online Fee Payment", desc: "Pay tuition and other fees securely", link: "#" },
  { icon: Users, title: "Faculty Portal", desc: "Faculty dashboard and resources", link: "#" },
  { icon: BarChart3, title: "Results Portal", desc: "View examination results online", link: "#" },
];

const ApplicationsSection = () => {
  return (
    <section className="py-20 px-6 section-alt">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Quick Access</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-12">
            Online Applications
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <motion.a
              key={app.title}
              href={app.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group p-6 rounded-xl bg-card border border-border card-elevated cursor-pointer block"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <app.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">{app.title}</h3>
              <p className="text-muted-foreground text-sm">{app.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
