import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
 
const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80), 
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Invalid email").max(200),
  address: z.string().trim().max(300).optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  project_details: z.string().trim().min(10, "Tell me a bit more (10+ chars)").max(2000),
});

const services = ["Website Development", "Landing Page", "Portfolio Website", "E-commerce Website"];

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      address: String(fd.get("address") || ""),
      service: String(fd.get("service") || ""),
      project_details: String(fd.get("project_details") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert([{
      name: parsed.data.name,
      phone: parsed.data.phone,
      email: parsed.data.email,
      service: parsed.data.service,
      project_details: parsed.data.project_details,
      address: parsed.data.address || undefined,
    }]);
    setLoading(false);
    if (error) { toast.error("Could not send. Try again."); return; }
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="container relative grid lg:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <span className="font-mono text-xs text-primary tracking-wider">// LET'S BUILD</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Start your <span className="text-gradient-primary">next project</span></h2>
          <p className="mt-4 text-muted-foreground">Tell me about your idea — I'll get back within 24 hours with a clear next step.</p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-3 p-8 rounded-2xl border border-border bg-card shadow-card"
        >
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Message sent!</h3>
              <p className="text-muted-foreground mt-2">Thanks for reaching out. I'll be in touch soon.</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 px-5 py-2 rounded-full border border-border hover:border-primary transition-smooth">
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" required />
              <Field label="Phone Number" name="phone" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Address" name="address" />
              <div className="sm:col-span-2">
                <Label>Service</Label>
                <select name="service" required defaultValue="" className="mt-1.5 w-full bg-input border border-border rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-smooth">
                  <option value="" disabled>Select a service…</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <Label>Project Details</Label>
                <textarea name="project_details" required rows={4} placeholder="Tell me about your project, timeline and budget…"
                  className="mt-1.5 w-full bg-input border border-border rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-smooth resize-none" />
              </div>
              <button disabled={loading} type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition-smooth disabled:opacity-60">
                {loading ? "Sending…" : <>Send Message <Send className="h-4 w-4" /></>}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="text-sm font-medium text-muted-foreground">{children}</label>
);

const Field = ({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) => (
  <div>
    <Label>{label}{required && " *"}</Label>
    <input name={name} type={type} required={required}
      className="mt-1.5 w-full bg-input border border-border rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-smooth" />
  </div>
);
