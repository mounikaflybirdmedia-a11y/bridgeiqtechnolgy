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
    <section id="contact" className="py-28 relative bg-muted/40 overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 blob-circle opacity-60 pointer-events-none" />

      <div className="container mx-auto relative">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight text-foreground">
            Let's build your <span className="text-gradient-purple">tech team.</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-brand" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
          {/* Left: info */}
          <div>
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              Whether you need a single specialist or a full engineering pod, we're ready
              to bridge the gap between your vision and the right talent. Submit your details
              and our team will get back to you shortly.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0 shadow-glow">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Headquarters</div>
                  <div className="text-foreground mt-1 text-sm">5900 Balcones Drive, STE 100<br />Austin, Texas 78731, United States</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0 shadow-glow">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Email</div>
                  <a href="mailto:info@bridgeiqtechnologies.com" className="text-foreground mt-1 block hover:text-primary transition-smooth text-sm">
                    info@bridgeiqtechnologies.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0 shadow-glow">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Owner</div>
                  <div className="text-foreground mt-1 text-sm">Krishna Kumar</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={onSubmit}
            className="service-card rounded-2xl p-8 md:p-10 border-t-4 border-primary"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
            <div className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Name</label>
                  <Input required name="name" placeholder="Jane Doe" className="mt-2" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Company</label>
                  <Input name="company" placeholder="Acme Inc." className="mt-2" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</label>
                <Input required type="email" name="email" placeholder="jane@acme.com" className="mt-2" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea required name="message" rows={5} placeholder="Tell us about your hiring needs..." className="mt-2 resize-none" />
              </div>
              <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full">
                {loading ? "Sending..." : (<>Send Message <Send className="h-4 w-4 ml-2" /></>)}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
