import { Zap, Target, HeartHandshake, Globe2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Speed",
    desc: "Average time-to-submission of 48 hours, powered by an active bench and intelligent matching.",
  },
  {
    icon: Target,
    title: "Precision",
    desc: "Rigorous technical screening ensures every candidate matches both skills and culture fit.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership",
    desc: "Long-term relationships, not transactions — we invest in your success at every stage.",
  },
  {
    icon: Globe2,
    title: "Reach",
    desc: "Nationwide coverage with deep talent networks across all 50 US states.",
  },
];

const WhyUs = () => {
  return (
    <section id="why" className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="container mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">Why BridgeIQ</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Engineered to <span className="text-gradient">deliver.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass-card rounded-2xl p-8 text-center hover:border-primary/50 transition-smooth group"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-brand-soft border border-primary/30 flex items-center justify-center mb-5 group-hover:shadow-glow transition-smooth">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
