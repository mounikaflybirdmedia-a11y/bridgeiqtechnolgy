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
    <section id="why" className="py-28 relative bg-muted/40">
      {/* Decorative blob left */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 blob-circle pointer-events-none" />

      <div className="container mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Why BridgeIQ</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight text-foreground">
            Engineered to <span className="text-gradient-purple">deliver.</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-brand" />
          <p className="text-muted-foreground mt-5 text-base">
            Our nimble culture, organizational structure and productivity have helped us set a proven track
            record of excellence across the US technology staffing industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((f) => (
            <div
              key={f.title}
              className="service-card rounded-2xl p-8 text-center group"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-5 shadow-glow group-hover:scale-110 transition-smooth">
                <f.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gradient">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
