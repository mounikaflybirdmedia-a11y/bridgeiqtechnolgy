import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      {/* Floating glow orbs */}
      <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-pulse-glow" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-up">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                US IT Staffing &amp; Workforce Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6 animate-fade-up text-foreground" style={{ animationDelay: "0.1s" }}>
              Helping US Companies Hire Top <span className="text-gradient">AI & Cloud Talent</span>
              <br />
              — Faster & Smarter.
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              BridgeIQ Technologies connects top-tier IT professionals with leading
              enterprises across the United States — built on quality, speed, and trust.
            </p>

            <ul className="flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start mb-10 animate-fade-up" style={{ animationDelay: "0.25s" }}>
              {["Vetted IT talent", "Direct client partnerships", "Nationwide reach"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  Hire Top Talent <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-glow">
              <img
                src={heroBg}
                alt="Diverse team of IT professionals collaborating in a modern office"
                width={1920}
                height={1280}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/30 via-transparent to-transparent" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
