import { Linkedin } from "lucide-react";
import logo from "@/assets/bridgeiq-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 pt-16 pb-8 mt-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="BridgeIQ Technologies" className="h-16 w-auto" />
              <span className="font-display font-semibold text-lg">
                <span className="text-gradient">BridgeIQ</span>
                <span className="text-muted-foreground text-xs ml-2 font-mono uppercase">Technologies</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm mt-4 max-w-md leading-relaxed">
              A trusted partner in US IT staffing and workforce solutions — bridging
              top-tier technology talent with leading enterprises nationwide.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">Services</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">About</a></li>
              <li><a href="#why" className="text-muted-foreground hover:text-primary transition-smooth">Why Us</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.linkedin.com/company/ryantechconsulting/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth inline-flex items-center gap-1">
                  LinkedIn <Linkedin className="h-3 w-3" />
                </a>
              </li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/60 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} BridgeIQ Technologies. All rights reserved.</p>
          <p className="font-mono">Austin, TX · United States</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
