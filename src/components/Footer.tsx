import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="dark-section border-t border-primary-foreground/10">
      <div className="container mx-auto max-w-6xl px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">SX</span>
              </div>
              <span className="font-display text-xl font-bold text-primary-foreground">Schlork</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Empowering education through technology. Building next-generation academic management systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {["Home", "About Us", "UAMS", "Services", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-primary-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {["Education Solutions", "IT Solutions", "Web Development", "Cloud Integration", "Cybersecurity"].map((l) => (
                <li key={l}>
                  <span className="hover:text-primary-foreground transition-colors cursor-pointer">{l}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@schlork.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91-XXXX-XXXXXX</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> India</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-primary-foreground/50">
          <p>© 2026 All Rights Reserved Schlork Pvt Ltd</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-primary-foreground/80 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary-foreground/80 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
