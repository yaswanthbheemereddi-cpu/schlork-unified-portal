import { motion } from "framer-motion";
import { UserPlus, LogIn, CreditCard, Users, BarChart3, ArrowRight } from "lucide-react";

const apps = [
  { icon: UserPlus, title: "Student Admission Portal", desc: "Apply for admissions online", link: "#" },
  { icon: LogIn, title: "UAMS Login", desc: "Access the academic management system", link: "#" },
  { icon: CreditCard, title: "Online Fee Payment", desc: "Pay tuition and other fees securely", link: "#" },
  { icon: Users, title: "Faculty Portal", desc: "Faculty dashboard and resources", link: "#" },
  { icon: BarChart3, title: "Results Portal", desc: "View examination results online", link: "#" },
];

const ApplicationsSection = () => {
  return (
    <section id="applications" className="py-20 lg:py-28 px-4 lg:px-8 section-alt">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Quick Access</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Online Applications
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <motion.a
              key={app.title}
              href={app.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex items-start gap-4 p-6 rounded-xl bg-card border border-border card-elevated"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                <app.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base font-bold text-foreground mb-1 flex items-center gap-2">
                  {app.title}
                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                </h3>
                <p className="text-muted-foreground text-sm">{app.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
