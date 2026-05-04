import { motion } from "framer-motion";
import { Globe, Layout, User, ShoppingBag } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Custom-built, lightning-fast websites tailored to your brand and business goals." },
  { icon: Layout, title: "Landing Pages", desc: "High-converting landing pages designed to turn visitors into customers." },
  { icon: User, title: "Portfolio Websites", desc: "Striking personal portfolios that showcase your work and tell your story." },
  { icon: ShoppingBag, title: "E-commerce Websites", desc: "Full-featured online stores with secure checkout and admin dashboards." },
];

export const Services = () => (
  <section id="services" className="py-24 relative bg-gradient-dark">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="font-mono text-xs text-primary tracking-wider">// WHAT I DO</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold">Services <span className="text-gradient-primary">I offer</span></h2>
        <p className="mt-4 text-muted-foreground">Everything you need to launch and scale a stunning online presence.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative p-7 rounded-2xl border border-border bg-card hover:border-primary/60 hover:-translate-y-2 transition-smooth shadow-card"
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-smooth" />
            <div className="relative">
              <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-smooth" />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
