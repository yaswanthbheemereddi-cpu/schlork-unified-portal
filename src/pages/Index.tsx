import { type ChangeEvent, type FormEvent, useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Globe,
  Lock,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  ShieldEllipsis,
  Target,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Managed SOC",
    description: "24/7 security monitoring, incident triage, and guided response for critical threats.",
    icon: ShieldCheck,
  },
  {
    title: "Vulnerability Assessment",
    description: "Continuous discovery of risks across web apps, cloud workloads, endpoints, and networks.",
    icon: Lock,
  },
  {
    title: "Penetration Testing",
    description: "Manual + automated offensive testing to expose real exploitable paths before attackers do.",
    icon: Target,
  },
  {
    title: "Compliance Enablement",
    description: "Practical support for ISO 27001, SOC 2, HIPAA, PCI-DSS, and audit readiness programs.",
    icon: BadgeCheck,
  },
  {
    title: "Cloud Security Hardening",
    description: "Secure AWS/Azure/GCP architecture, IAM controls, and posture improvements at scale.",
    icon: Globe,
  },
  {
    title: "Incident Response Retainer",
    description: "Rapid containment and recovery support with post-incident analysis and remediation roadmap.",
    icon: ShieldEllipsis,
  },
];

const industries = ["Healthcare", "FinTech", "Education", "eCommerce", "SaaS", "Enterprise IT"];

const processSteps = [
  {
    title: "Assess",
    description: "We evaluate your environment, threat exposure, controls maturity, and compliance needs.",
  },
  {
    title: "Prioritize",
    description: "Risks are ranked by impact and exploitability so your team can focus on what matters first.",
  },
  {
    title: "Harden",
    description: "We implement safeguards, close high-risk gaps, and strengthen your detection + response stack.",
  },
  {
    title: "Monitor",
    description: "Ongoing security operations and reporting keep your organization resilient over time.",
  },
];

const trustPoints = [
  "Experienced security consultants and certified analysts",
  "Transparent reporting with business-friendly risk summaries",
  "Fast response SLAs for incidents and critical vulnerabilities",
  "Practical remediation guidance, not just findings",
];

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const Index = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const apiBaseUrl = useMemo(() => {
    return (import.meta.env.VITE_API_BASE_URL as string | undefined) || "http://localhost:8000";
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileNavOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileNavOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  const closeMobileMenu = () => setMobileNavOpen(false);

  const onFormChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.detail || data?.error || "Failed to submit your request");
      }

      setSubmitStatus("success");
      setSubmitMessage("Thank you! Your request has been submitted.");
      setFormState(initialFormState);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unexpected error occurred";
      setSubmitStatus("error");
      setSubmitMessage(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#08101f] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-[#08101f]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-400/15 text-cyan-300">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-wide">scholark</p>
              <p className="text-xs text-cyan-200/80">Cyber Security Services</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-cyan-300">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:inline-flex"
            >
              Talk to Expert
            </a>
            <button
              type="button"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              className="rounded-md border border-cyan-300/30 p-2 text-cyan-200 md:hidden"
              aria-label="Toggle mobile navigation"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav"
            >
              {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileNavOpen && (
          <nav id="mobile-nav" className="border-t border-cyan-400/10 px-5 py-3 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="rounded-md px-3 py-2 text-sm text-slate-200 transition hover:bg-cyan-300/10 hover:text-cyan-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Talk to Expert
              </a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden border-b border-cyan-400/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.12),transparent_45%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Inspired by leading cyber defense teams
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
                Build a stronger cyber defense with <span className="text-cyan-300">scholark</span>
              </h1>
              <p className="mb-8 max-w-2xl text-lg text-slate-300">
                We deliver managed security, proactive testing, and compliance-focused guidance to protect your digital
                business against modern threats.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Explore Services <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="rounded-md border border-cyan-300/30 px-5 py-3 font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/10"
                >
                  Request Consultation
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-300/15 bg-[#0e1a2f]/80 p-7 shadow-2xl shadow-cyan-500/10">
              <h2 className="mb-5 text-xl font-semibold">Why organizations choose us</h2>
              <ul className="space-y-3 text-slate-300">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-cyan-300/10 bg-[#0a1425] p-3">
                  <p className="text-cyan-300">24/7</p>
                  <p className="text-slate-400">Security Monitoring</p>
                </div>
                <div className="rounded-lg border border-cyan-300/10 bg-[#0a1425] p-3">
                  <p className="text-cyan-300">99.9%</p>
                  <p className="text-slate-400">Service Reliability</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Services</p>
            <h2 className="text-3xl font-bold md:text-4xl">
              End-to-end cybersecurity solutions for modern organizations
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-xl border border-cyan-300/10 bg-[#0e1a2f]/75 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-cyan-400/15 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="text-slate-300">{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="industries" className="border-y border-cyan-400/10 bg-[#0c172b]">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Industries We Support</p>
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">Security strategies aligned to your domain</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-cyan-300/10 bg-[#091225] p-4"
                >
                  <Building2 className="h-5 w-5 text-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Our Process</p>
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">How we secure your environment</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-cyan-300/10 bg-[#0e1a2f]/70 p-5">
                <p className="mb-3 text-sm font-semibold text-cyan-300">Step {index + 1}</p>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-cyan-400/10 bg-[#0c172b]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact</p>
              <h2 className="mb-5 text-3xl font-bold md:text-4xl">Speak with our cyber experts</h2>
              <p className="mb-7 text-slate-300">
                Share your security goals and we’ll help you build a practical roadmap for prevention, detection, and
                response.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-cyan-300" />
                  <a href="tel:7569703277" className="transition hover:text-cyan-300">
                    7569703277
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-cyan-300" />
                  <a href="mailto:yaswanthbheemereddi@gmail.com" className="transition hover:text-cyan-300">
                    yaswanthbheemereddi@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-cyan-300" />
                  <span>Mon - Sat: 9:00 AM to 8:00 PM IST</span>
                </li>
              </ul>
            </div>

            <form className="rounded-2xl border border-cyan-300/10 bg-[#091225] p-6" onSubmit={onSubmit}>
              <div className="grid gap-4">
                <input
                  name="name"
                  value={formState.name}
                  onChange={onFormChange}
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-md border border-cyan-300/20 bg-[#0b1830] px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-300"
                />
                <input
                  name="email"
                  value={formState.email}
                  onChange={onFormChange}
                  type="email"
                  placeholder="Work Email"
                  required
                  className="w-full rounded-md border border-cyan-300/20 bg-[#0b1830] px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-300"
                />
                <input
                  name="company"
                  value={formState.company}
                  onChange={onFormChange}
                  type="text"
                  placeholder="Company Name"
                  className="w-full rounded-md border border-cyan-300/20 bg-[#0b1830] px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-300"
                />
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={onFormChange}
                  rows={4}
                  placeholder="Describe your security requirement"
                  required
                  className="w-full rounded-md border border-cyan-300/20 bg-[#0b1830] px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-300"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Submitting..." : "Submit Request"} <ArrowRight className="h-4 w-4" />
                </button>
                {submitStatus !== "idle" && (
                  <p className={`text-sm ${submitStatus === "success" ? "text-emerald-300" : "text-rose-300"}`}>
                    {submitMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-cyan-400/10 bg-[#08101f] px-5 py-8 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} scholark. Built for secure, scalable, and resilient digital growth.</p>
      </footer>
    </div>
  );
};

export default Index;
