import { UserSearch, Briefcase, Globe2, Cpu, ArrowUpRight } from "lucide-react";
import recruitmentImg from "@/assets/service-recruitment-v3.png";
import consultingImg from "@/assets/service-consulting.png";
import outsourcingImg from "@/assets/service-outsourcing-v2.png";
import technologyImg from "@/assets/service-technology.png";

const services = [
  {
    icon: UserSearch,
    title: "Recruitment Services",
    desc: "The development of any organization relies upon the right talent. BridgeIQ follows strict procedures to source and place the brightest IT talent for any industry.",
    points: ["Vetted technology professionals", "Contract & direct hire", "Nationwide reach"],
    image: recruitmentImg,
    imageAlt: "Professional IT recruitment and hiring",
  },
  {
    icon: Briefcase,
    title: "Consulting Services",
    desc: "Our consulting services help clients achieve high performance by efficiently anticipating, meeting, and exceeding their workforce expectations.",
    points: ["Workforce strategy", "Talent benchmarking", "Engagement models"],
    image: consultingImg,
    imageAlt: "Business consulting and workforce strategy",
  },
  {
    icon: Globe2,
    title: "Outsourcing Services",
    desc: "Our outsourcing services are built to address the staffing necessities of clients across the United States with flexible, scalable delivery.",
    points: ["Managed teams", "Offshore + onshore", "Dedicated pods"],
    image: outsourcingImg,
    imageAlt: "Global IT outsourcing and remote collaboration",
  },
  {
    icon: Cpu,
    title: "Technology Solutions",
    desc: "BridgeIQ recommends and implements leading technologies — from cloud and DevOps to data, AI, and cybersecurity — for enterprise clients.",
    points: ["Cloud & DevOps", "Data & AI", "Cybersecurity"],
    image: technologyImg,
    imageAlt: "Cloud technology and DevOps solutions",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 relative bg-muted/40">
      {/* Decorative blob */}
      <div className="absolute right-0 bottom-0 w-80 h-80 blob-circle opacity-60 pointer-events-none" />

      <div className="container mx-auto relative">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight text-foreground">
            Our <span className="text-gradient-purple">Services</span>
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-brand" />
          <p className="text-muted-foreground mt-4 text-base">
            BridgeIQ offers a focused set of services to help clients achieve the highest level of
            satisfaction — from sourcing talent to delivering technology.
          </p>
        </div>

        {/* Service cards — each with its own image */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {services.map((s, idx) => (
            <article
              key={s.title}
              className="service-card rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                {/* Coloured overlay band at bottom */}
                <div className={`absolute bottom-0 left-0 right-0 h-1.5 ${idx % 2 === 0 ? "bg-gradient-brand" : "bg-gradient-to-r from-secondary to-secondary/70"}`} />
                {/* Icon badge */}
                <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow">
                  <s.icon className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className={`text-xl font-bold mb-3 ${idx % 2 === 0 ? "text-gradient" : "text-gradient-purple"}`}>
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
                <ul className="space-y-2 mb-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Read More <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
