import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Footer } from "@/components/Footer";

const Index = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Services />
    <Contact />
    <Footer />
    <WhatsAppChat />
  </main>
);

export default Index;
