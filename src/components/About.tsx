import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles } from "lucide-react";
import portrait from "@/assets/meghashyam.jpeg";

const stats = [
  { icon: Code2, label: "Clean Code" },
  { icon: Rocket, label: "Fast Delivery" },
  { icon: Sparkles, label: "Modern Design" },
];

export const About = () => (
  <section id="about" className="py-24 relative">
    <div className="container grid md:grid-cols-2 gap-14 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-3xl" />
        <div className="relative rounded-3xl overflow-hidden ring-1 ring-border shadow-card">
          <img src={portrait} alt="Meghashyam, founder of Zeplio Studio" loading="lazy" className="w-full object-cover" />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-4 shadow-card">
        
          
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="font-mono text-xs text-primary tracking-wider">// ABOUT ME</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold">
          Building the web,<br/><span className="text-gradient-primary">one pixel at a time.</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
          I'm <span className="text-foreground font-semibold">Meghashyam</span>, a passionate Full Stack Developer
          and the founder of Zeplio Studio. I specialize in creating modern, responsive, and user-friendly
          websites that help businesses build a strong online presence through clean design and efficient development.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          From sleek landing pages to full-scale e-commerce platforms, every project I deliver is engineered
          for speed, beauty, and conversion.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {stats.map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-xl border border-border bg-card p-4 text-center hover:border-primary/50 transition-smooth">
              <Icon className="h-6 w-6 mx-auto text-primary mb-2" />
              <div className="text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
