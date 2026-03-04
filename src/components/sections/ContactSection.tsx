import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  return (
    <section id="contact" className="py-20 lg:py-28 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Request a Quote</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Have Any Questions?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Get in touch with our team and let's discuss how Schlork can transform your institution with cutting-edge education and IT solutions.
            </p>
            <div className="space-y-5">
              {[
                { icon: Mail, label: "info@schlork.com" },
                { icon: Phone, label: "+91-XXXX-XXXXXX" },
                { icon: MapPin, label: "India" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{c.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="p-8 rounded-2xl bg-card border border-border shadow-lg space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select Service</option>
                  <option value="uams">UAMS</option>
                  <option value="education">Education Services</option>
                  <option value="it">IT Solutions</option>
                  <option value="web">Web Development</option>
                  <option value="cloud">Cloud Integration</option>
                </select>
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm"
              >
                <Send className="h-4 w-4" />
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
