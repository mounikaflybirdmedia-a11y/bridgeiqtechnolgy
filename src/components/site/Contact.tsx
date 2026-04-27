import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message sent",
        description: "Thanks for reaching out — our team will get back within 24 hours.",
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">Contact</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
              Let's build your <span className="text-gradient">tech team.</span>
            </h2>
            <p className="text-muted-foreground mt-6 text-lg">
              Whether you need a single specialist or a full engineering pod, we're ready
              to bridge the gap between your vision and the right talent.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-brand-soft border border-primary/30 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Headquarters</div>
                  <div className="text-foreground mt-1">5900 Balcones Drive, STE 100<br />Austin, Texas 78731, United States</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-brand-soft border border-primary/30 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</div>
                  <a href="mailto:info@bridgeiqtechnologies.com" className="text-foreground mt-1 block hover:text-primary transition-smooth">
                    info@bridgeiqtechnologies.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-brand-soft border border-primary/30 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Owner</div>
                  <div className="text-foreground mt-1">Krishna Kumar</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="glass-card rounded-2xl p-8 md:p-10 shadow-elevated"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
            <div className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</label>
                  <Input required name="name" placeholder="Jane Doe" className="mt-2 bg-background/50 border-border/60" />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Company</label>
                  <Input name="company" placeholder="Acme Inc." className="mt-2 bg-background/50 border-border/60" />
                </div>
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
                <Input required type="email" name="email" placeholder="jane@acme.com" className="mt-2 bg-background/50 border-border/60" />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea required name="message" rows={5} placeholder="Tell us about your hiring needs..." className="mt-2 bg-background/50 border-border/60 resize-none" />
              </div>
              <Button type="submit" variant="hero" size="lg" disabled={loading}>
                {loading ? "Sending..." : (<>Send Message <Send className="h-4 w-4" /></>)}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
