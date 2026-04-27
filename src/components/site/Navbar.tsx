import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/bridgeiq-logo-new.jpeg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#advantages", label: "Advantages" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "bg-white shadow-sm border-b border-border/60" : "bg-white"
      }`}
    >
      <nav className="container mx-auto flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center">
          <img 
            src={logo} 
            alt="BridgeIQ Technologies logo" 
            className="h-24 md:h-28 w-auto mix-blend-multiply object-contain scale-125 -ml-8" 
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button variant="hero" size="default" asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass-card border-t border-border/60">
          <ul className="container mx-auto py-4 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground/80 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <Button variant="hero" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>Get Started</a>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
