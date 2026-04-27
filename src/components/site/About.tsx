import { Check, Users, Award, Globe2, TrendingUp } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

const capabilities = [
  {
    icon: Users,
    title: "Direct Hiring",
    desc: "We do direct hiring for industry professionals — placing highly skilled IT talent across leading enterprises.",
  },
  {
    icon: TrendingUp,
    title: "Contract Hire",
    desc: "Contract-to-hire and payroll solutions tailored to different industries and client engagement models.",
  },
  {
    icon: Award,
    title: "Professional Consultants",
    desc: "A professional resource pool of certified consultants ready to meet your organization's business requirements.",
  },
  {
    icon: Globe2,
    title: "Nationwide Reach",
    desc: "Available across all 50 US states — delivering top IT talent wherever your business operates.",
  },
];

const points = [
  "Consulting, Business Process Outsourcing & Technology Services",
  "Enterprise Application Services & Infrastructure Management",
  "Flexible engagement models — W2, C2C, Contract & Full-Time",
  "Industry expertise across BFSI, Healthcare, Retail & Tech",
];

const About = () => {
  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight text-foreground">
            About <span className="text-gradient-purple">BridgeIQ Technologies</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-brand" />
        </div>

        {/* Top: image + text */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16 mt-12">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-elevated">
              <img
                src={aboutImg}
                alt="BridgeIQ Technologies team collaborating"
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-full object-cover"
              />
            </div>
            {/* floating badge */}
            <div className="absolute -bottom-6 -right-6 card-elevated rounded-2xl p-5 border border-primary/20 shadow-glow hidden md:block animate-float">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Headquartered</div>
              <div className="font-bold text-lg mt-1 text-foreground">Austin, Texas 🇺🇸</div>
            </div>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed text-base">
              BridgeIQ Technologies is an IT services company that provides Consulting, Business Process
              Outsourcing, Business Technology Services, Enterprise Application Services, Infrastructure
              Management, and Product Engineering. Our services are spread across a range of strategic domains.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed text-base">
              As companies rapidly strive to gain a competitive advantage, we help them to innovate and
              transform by leveraging our unique insights, differentiated services and flexible partnering
              models. We have helped our customers reduce operating costs and generate new revenue streams.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed text-base">
              BridgeIQ are dedicated to helping our clients grow through combined business-IT knowledge,
              thoughtful innovation and global scale. Over the years, we have built expertise that runs
              broad and deep across almost every major industry.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-brand shrink-0">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom: capability cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="service-card rounded-2xl p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-smooth">
                <c.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-base font-bold mb-2 text-gradient">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
