import { Link } from "react-router-dom";
import { Cloud, Cpu, ShieldCheck, Code, Settings, ArrowUpRight } from "lucide-react";
import recruitmentImg from "@/assets/service-recruitment-v3.png";
import consultingImg from "@/assets/service-consulting.png";
import outsourcingImg from "@/assets/service-outsourcing-v2.png";
import technologyImg from "@/assets/service-technology.png";

const services = [
  {
    icon: Cloud,
    title: "Cloud - Azure, SAP, AWS",
    slug: "cloud-services",
    desc: "We provide comprehensive cloud solutions across major platforms including Azure, SAP, and AWS, ensuring seamless migration, deployment, and management.",
    points: ["Cloud Migration", "Architecture Design", "Managed Services"],
    image: technologyImg,
    imageAlt: "Cloud Services",
  },
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    desc: "Leverage the power of AI to transform your business processes, enhance decision-making, and create innovative products.",
    points: ["Machine Learning", "Predictive Analytics", "Natural Language Processing"],
    image: consultingImg,
    imageAlt: "Artificial Intelligence Services",
  },
  {
    icon: ShieldCheck,
    title: "Quality Engineering & Assurance",
    slug: "quality-engineering",
    desc: "Ensure software reliability and performance with our robust quality engineering and testing methodologies.",
    points: ["Test Automation", "Performance Testing", "Security Testing"],
    image: outsourcingImg,
    imageAlt: "Quality Engineering & Assurance",
  },
  {
    icon: Code,
    title: "Application Services",
    slug: "application-services",
    desc: "End-to-end application services covering custom development, modernization, and maintenance to keep your business agile.",
    points: ["Custom Development", "App Modernization", "Maintenance & Support"],
    image: recruitmentImg,
    imageAlt: "Application Services",
  },
  {
    icon: Settings,
    title: "DevOps",
    slug: "devops",
    desc: "Accelerate software delivery and improve operational efficiency with our continuous integration and deployment DevOps practices.",
    points: ["CI/CD Pipelines", "Infrastructure as Code", "Continuous Monitoring"],
    image: technologyImg,
    imageAlt: "DevOps Services",
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
            BridgeIQ Technologies is a top IT outsourcing company in USA. We have highly professional skilled engineers in business analysis, project leading and architecture designing and development management, etc.
          </p>
        </div>

        {/* Service cards — each with its own image */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
                <Link
                  to={`/services/${s.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Read More <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
