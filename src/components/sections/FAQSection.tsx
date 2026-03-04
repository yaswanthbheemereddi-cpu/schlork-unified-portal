import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What services does Schlork provide?",
    a: "We provide comprehensive Education Solutions through Schlork Pvt Ltd and IT Solutions through Schlork Innovations LLP, including academic management systems (UAMS), digital classrooms, web development, ERP systems, cloud integration, and cybersecurity.",
  },
  {
    q: "What is UAMS?",
    a: "UAMS (University Academic Management System) is our flagship product — a cloud-based platform for managing the entire student lifecycle including admissions, attendance, examinations, results, faculty management, and analytics.",
  },
  {
    q: "Do you offer custom software development?",
    a: "Yes, we specialize in building scalable and tailored software solutions as per your institution's requirements, including web portals, mobile apps, and enterprise integrations.",
  },
  {
    q: "How do I get in touch for a project inquiry?",
    a: "You can fill out our contact form at the bottom of the page or reach out via email at info@schlork.com. We typically respond within 24 hours.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 px-4 lg:px-8 section-alt">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get Quick Answers to Common Queries
          </h2>
        </motion.div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
