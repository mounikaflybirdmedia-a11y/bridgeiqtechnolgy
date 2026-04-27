import { UserSearch, Briefcase, Globe2, Cpu, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: UserSearch,
    title: "Recruitment Services",
    desc: "The development of any organization relies upon the right talent. BridgeIQ follows strict procedures to source and place the brightest IT talent for any industry.",
    points: ["Vetted technology professionals", "Contract & direct hire", "Nationwide reach"],
  },
  {
    icon: Briefcase,
    title: "Consulting Services",
    desc: "Our consulting services help clients achieve high performance by efficiently anticipating, meeting, and exceeding their workforce expectations.",
    points: ["Workforce strategy", "Talent benchmarking", "Engagement models"],
  },
  {
    icon: Globe2,
    title: "Outsourcing Services",
    desc: "Our outsourcing services are built to address the staffing necessities of clients across the United States with flexible, scalable delivery.",
    points: ["Managed teams", "Offshore + onshore", "Dedicated pods"],
  },
  {
    icon: Cpu,
    title: "Technology Solutions",
    desc: "BridgeIQ recommends and implements leading technologies — from cloud and DevOps to data, AI, and cybersecurity — for enterprise clients.",
    points: ["Cloud & DevOps", "Data & AI", "Cybersecurity"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">What We Offer</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            What <span className="text-gradient">we offer</span>
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            BridgeIQ offers a focused set of services to help clients achieve the highest
            level of satisfaction — from sourcing talent to delivering technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-2xl p-8 bg-gradient-card border border-border/60 hover:border-primary/40 transition-smooth shadow-card hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6 shadow-glow">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-gradient transition-smooth">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-mono uppercase tracking-widest text-primary hover:gap-2 transition-all"
              >
                Read More <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
