import { ShieldCheck, Clock, Handshake, BarChart3, Lightbulb, UserCheck } from "lucide-react";
import advantagesImg from "@/assets/advantages.png";

const advantages = [
  {
    icon: Clock,
    title: "48-Hour Submissions",
    desc: "Our active bench and intelligent matching engine delivers qualified candidates within 48 hours — dramatically reducing your time-to-hire.",
    badge: "Speed",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous Vetting Process",
    desc: "Every candidate undergoes technical screening, background checks, and culture-fit evaluation before reaching your desk.",
    badge: "Quality",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    desc: "We invest in your success at every stage — from initial placement to retention — building relationships, not just transactions.",
    badge: "Trust",
  },
  {
    icon: BarChart3,
    title: "Cost-Effective Staffing",
    desc: "Tailored engagement models — W2, C2C, Contract & Full-Time — ensuring you get the best talent at the most competitive rates.",
    badge: "Value",
  },
  {
    icon: Lightbulb,
    title: "Deep Industry Expertise",
    desc: "Specialized knowledge across BFSI, Healthcare, Retail, and Technology — we understand your industry and its unique talent demands.",
    badge: "Expertise",
  },
  {
    icon: UserCheck,
    title: "98% Client Retention",
    desc: "Our commitment to quality and partnership has earned us a 98% client retention rate, with hundreds of successful long-term placements.",
    badge: "Proven",
  },
];

const stats = [
  { value: "500+", label: "Successful Placements", grad: "text-gradient" },
  { value: "98%", label: "Client Retention Rate", grad: "text-gradient-purple" },
  { value: "48h", label: "Avg. Submission Time", grad: "text-gradient" },
  { value: "50", label: "US States Covered", grad: "text-gradient-purple" },
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-28 relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 blob-circle opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 blob-circle opacity-40 pointer-events-none" />

      <div className="container mx-auto relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-5">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Why Choose BridgeIQ</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight text-foreground">
            Our Advantages with{" "}
            <span className="text-gradient-purple">BridgeIQ Technologies</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-brand" />
          <p className="text-muted-foreground mt-5 text-base leading-relaxed">
            We combine creativity, analytical depth, and industry experience to deliver the best IT staffing
            and technology solutions — on time, every time.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
          {stats.map((s) => (
            <div
              key={s.label}
              className="service-card rounded-2xl p-6 text-center"
            >
              <div className={`text-3xl md:text-4xl font-bold ${s.grad}`}>{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Main content: image + cards */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: advantage image */}
          <div className="lg:sticky lg:top-28">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-elevated">
              <img
                src={advantagesImg}
                alt="BridgeIQ Technologies business advantages"
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-brand" />
            </div>

            {/* Quote block */}
            <div className="mt-8 service-card rounded-2xl p-6 border-l-4 border-primary">
              <p className="text-foreground/80 italic leading-relaxed text-sm">
                "BridgeIQ is dedicated to helping our clients grow through combined business-IT knowledge,
                thoughtful innovation, and nationwide scale — bridging top-tier technology talent with
                leading enterprises across the United States."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold text-sm shrink-0">
                  KK
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Krishna Kumar</div>
                  <div className="text-xs text-muted-foreground">Founder & Owner, BridgeIQ Technologies</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: advantage cards */}
          <div className="grid gap-4">
            {advantages.map((a, idx) => (
              <div
                key={a.title}
                className="service-card rounded-2xl p-5 flex gap-4"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-glow ${idx % 2 === 0 ? "bg-gradient-brand" : "bg-gradient-purple"}`}>
                  <a.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className={`text-base font-bold ${idx % 2 === 0 ? "text-gradient" : "text-gradient-purple"}`}>{a.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                      {a.badge}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
