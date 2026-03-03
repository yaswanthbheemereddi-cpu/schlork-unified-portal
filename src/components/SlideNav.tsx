import { X, Home, Building2, GraduationCap, Monitor, BookOpen, Wrench, FileText, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about-innovations", label: "About Schlork Innovations LLP", icon: Building2 },
  { id: "about-pvt", label: "About Schlork Pvt Ltd", icon: GraduationCap },
  { id: "uams", label: "UAMS Project", icon: Monitor },
  { id: "education", label: "Education Services", icon: BookOpen },
  { id: "it-solutions", label: "IT Solutions", icon: Wrench },
  { id: "applications", label: "Online Applications", icon: FileText },
  { id: "contact", label: "Contact", icon: Phone },
];

interface SlideNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (section: string) => void;
}

const SlideNav = ({ isOpen, onClose, activeSection, onNavigate }: SlideNavProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60]"
            style={{ backgroundColor: "var(--nav-overlay)" }}
            onClick={onClose}
          />
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] z-[70] bg-card shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <span className="font-display text-xl font-bold text-primary">Navigation</span>
              <button
                onClick={onClose}
                className="p-2 rounded-md hover:bg-secondary transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    onNavigate(item.id);
                    onClose();
                  }}
                  className={`w-full flex items-center gap-3 px-6 py-3.5 text-left transition-colors ${
                    activeSection === item.id
                      ? "bg-primary/10 text-primary border-r-2 border-primary"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default SlideNav;
