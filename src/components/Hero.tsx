import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import logo from "@/assets/zeplio-logo.jpeg";

export const Hero = () => (
  <section id="home" className="relative pt-32 pb-24 overflow-hidden">
    <div className="absolute inset-0 grid-pattern opacity-40" />
    <div className="absolute inset-0 bg-gradient-glow" />
    <div className="container relative grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          AVAILABLE FOR FREELANCE
        </span>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
          Hi, I'm <span className="text-gradient-primary">Meghashyam</span>
        </h1>
        <p className="mt-4 text-2xl md:text-3xl text-foreground/90 font-medium"> Full Stack Developer

Building modern websites for businesses and brands.</p>
        <p className="mt-5 text-muted-foreground max-w-xl text-lg">
          I craft modern, responsive websites that help brands stand out — built with clean code,
          striking design and zero compromise on performance.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-smooth">
            View Projects <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/50 transition-smooth font-semibold">
            <Mail className="h-4 w-4" /> Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex justify-center"
      >
        <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 rounded-full" />
        <motion.img
          src={logo}
          alt="Zeplio Studio brand logo"
          className="relative w-72 md:w-96 rounded-full shadow-glow ring-2 ring-primary/30"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  </section>
);
