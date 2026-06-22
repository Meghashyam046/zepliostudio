import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/zeplio-logo.jpeg";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/zeplio_studio", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const Footer = () => (
  <footer className="border-t border-border bg-card/40 py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
      <a href="#home" className="flex items-center gap-3">
        <img src={logo} alt="Zeplio Studio" className="h-9 w-9 rounded-full ring-1 ring-primary/40" />
        <div>
          <div className="font-semibold">Zeplio Studio</div>
          <div className="text-xs text-muted-foreground font-mono">BUILD · SCALE · AUTOMATE</div>
        </div>
      </a>
      <div className="flex gap-3">
        {socials.map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} aria-label={label}
            className="h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth">
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">© 2026 Zeplio Studio. All rights reserved.</p>
    </div>
  </footer>
);
