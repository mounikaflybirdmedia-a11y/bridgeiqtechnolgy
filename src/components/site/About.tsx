import { Check } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

const points = [
  "Curated network of pre-vetted US-based IT professionals",
  "Flexible engagement models — W2, C2C, contract & full-time",
  "Industry expertise across BFSI, Healthcare, Retail & Tech",
  "Long-term partnerships built on transparency and trust",
];

const About = () => {
  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-3xl rounded-3xl" />
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
          <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 shadow-glow hidden md:block animate-float">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Headquartered</div>
            <div className="font-display font-semibold text-lg mt-1">Austin, Texas 🇺🇸</div>
          </div>
        </div>

        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">About</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            More than staffing — <br />
            <span className="text-gradient">a bridge to opportunity.</span>
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            BridgeIQ Technologies is a trusted partner in US IT staffing and workforce
            solutions. We specialize in connecting top-tier technology talent with leading
            enterprises across the United States — ensuring the right match between client
            requirements and candidate expertise.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            With a focus on quality, speed and reliability, we deliver tailored staffing
            models that drive success and empower professionals to achieve their career goals.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-brand shrink-0">
                  <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                </span>
                <span className="text-sm text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
