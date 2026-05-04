import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const WHATSAPP_NUMBER = "917993148967"; // TODO: replace with real number

const services = ["Business Website", "Landing Page", "Portfolio Website"];

type Step = "intro" | "service" | "details" | "done";

export const WhatsAppChat = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("intro");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const send = () => {
    const text = `Hi Zeplio Studio! 👋\n\nI'd like to inquire about: *${service}*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Address:* ${address}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setStep("done");
  };

  const reset = () => { setStep("intro"); setService(""); setName(""); setPhone(""); setAddress(""); };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}
        onClick={() => setOpen(true)} aria-label="Open WhatsApp chat"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center hover:scale-110 transition-smooth"
      >
        <MessageCircle className="h-6 w-6 text-primary-foreground" />
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-3rem)] rounded-2xl border border-border bg-card shadow-card overflow-hidden"
          >
            <div className="bg-gradient-primary p-4 flex items-center justify-between text-primary-foreground">
              <div>
                <div className="font-bold">Zeplio Studio</div>
                <div className="text-xs opacity-90">Typically replies instantly</div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat"><X className="h-5 w-5" /></button>
            </div>

            <div className="p-4 space-y-3 max-h-[420px] overflow-y-auto bg-background">
              <Bubble>Welcome to Zeplio Studio! 👋 How can I help you?</Bubble>

              {step === "intro" && (
                <Bubble>Pick a service to get started:</Bubble>
              )}
              {(step === "intro" || step === "service") && (
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <button key={s} onClick={() => { setService(s); setStep("details"); }}
                      className={`px-3 py-1.5 rounded-full text-xs border transition-smooth ${service === s ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {step === "details" && (
                <>
                  <Bubble>Great! Please share your details:</Bubble>
                  <div className="space-y-2">
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
                      className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary" />
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number"
                      className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary" />
                    <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address"
                      className="w-full bg-input border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary" />
                    <button onClick={send} disabled={!name || !phone}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground rounded-lg py-2.5 font-semibold text-sm disabled:opacity-50 hover:scale-[1.02] transition-smooth">
                      Send via WhatsApp <Send className="h-4 w-4" />
                    </button>
                  </div>
                </>
              )}

              {step === "done" && (
                <>
                  <Bubble>Opened WhatsApp with your details ✅</Bubble>
                  <button onClick={reset} className="text-xs text-primary hover:underline">Start over</button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Bubble = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-secondary text-foreground rounded-2xl rounded-tl-sm px-3 py-2 text-sm max-w-[85%]">{children}</div>
);
