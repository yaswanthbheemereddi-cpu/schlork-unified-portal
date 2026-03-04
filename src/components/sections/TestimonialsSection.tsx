import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "UAMS transformed our entire university administration. The automated attendance and result processing saved us hundreds of hours every semester.",
    name: "Dr. Priya Sharma",
    role: "Dean, National University",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Schlork's IT team delivered a rock-solid cloud infrastructure for our institution. Their support and professionalism are unmatched.",
    name: "Rajesh Kumar",
    role: "CTO, EduTech Corp",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    text: "The digital classroom solution has been a game-changer for our students. Interactive, reliable, and incredibly user-friendly.",
    name: "Anita Desai",
    role: "Principal, Greenfield School",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Client Reviews</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by institutions for delivering secure, scalable and innovative education solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border card-elevated relative"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
