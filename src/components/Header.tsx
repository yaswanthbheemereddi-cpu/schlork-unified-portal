import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  {
    label: "About Us",
    children: [
      { label: "Schlork Innovations LLP", href: "#about-innovations" },
      { label: "Schlork Pvt Ltd", href: "#about-pvt" },
    ],
  },
  {
    label: "Solutions",
    children: [
      { label: "UAMS Project", href: "#uams" },
      { label: "Education Services", href: "#education" },
      { label: "IT Solutions", href: "#it-solutions" },
    ],
  },
  { label: "Applications", href: "#applications" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setOpenDropdown(null);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 lg:h-20 px-4 lg:px-8">
        {/* Logo */}
        <button onClick={() => scrollTo("#home")} className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">SX</span>
          </div>
          <span
            className={`font-display text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Schlork
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    scrolled
                      ? "text-foreground hover:bg-secondary"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <AnimatePresence>
                  {openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-card rounded-lg shadow-lg border border-border py-2"
                    >
                      {link.children.map((child) => (
                        <button
                          key={child.href}
                          onClick={() => scrollTo(child.href)}
                          className="w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors"
                        >
                          {child.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href!)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  scrolled
                    ? "text-foreground hover:bg-secondary"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </button>
            )
          )}
          <button
            onClick={() => scrollTo("#contact")}
            className="ml-4 px-5 py-2.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Request A Quote
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.label ? null : link.label)
                      }
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-foreground rounded-md hover:bg-secondary"
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className="pl-4 space-y-1">
                        {link.children.map((child) => (
                          <button
                            key={child.href}
                            onClick={() => scrollTo(child.href)}
                            className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href!)}
                    className="w-full text-left px-3 py-2.5 text-sm font-medium text-foreground rounded-md hover:bg-secondary"
                  >
                    {link.label}
                  </button>
                )
              )}
              <button
                onClick={() => scrollTo("#contact")}
                className="w-full mt-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Request A Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
