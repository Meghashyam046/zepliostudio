import { motion } from "framer-motion";
import logo from "@/assets/zeplio-logo.jpeg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => (
  <motion.header
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border"
  >
    <nav className="container flex items-center justify-between h-16">
      <a href="#home" className="flex items-center gap-3">
        <img src={logo} alt="Zeplio Studio logo" className="h-9 w-9 rounded-full ring-1 ring-primary/40" />
        <span className="font-semibold tracking-tight">Zeplio <span className="text-primary">Studio</span></span>
      </a>
      <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="hover:text-primary transition-smooth">{l.label}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow hover:scale-105 transition-smooth">
        Hire Me
      </a>
    </nav>
  </motion.header>
);
