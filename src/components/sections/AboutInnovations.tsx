import { motion } from "framer-motion";
import aboutTeam from "@/assets/about-team.jpg";

const AboutInnovations = () => {
  return (
    <section id="about-innovations" className="py-20 lg:py-28 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              About Schlork Innovations
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Empowering Smarter Digital Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Schlork Innovations LLP is a technology-driven company delivering innovative, scalable and secure education & IT solutions. We specialize in academic management systems, cloud infrastructure, software development, and digital transformation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mission is to bridge the gap between education and technology, empowering institutions to deliver world-class learning experiences through cutting-edge platforms.
            </p>
            <a
              href="#uams"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm"
            >
              Learn More
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={aboutTeam}
              alt="Schlork Innovations team collaborating"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutInnovations;
