import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const clients = [
  { name: "Infosys", color: "text-[#007CC3]", font: "font-sans font-medium text-4xl tracking-tight" },
  { name: "Deloitte", color: "text-black", font: "font-serif font-bold text-4xl tracking-tighter" },
  { name: "TCS", color: "text-[#1175B8]", font: "font-sans font-bold text-4xl tracking-widest" },
  { name: "Accenture", color: "text-black", font: "font-sans font-black text-4xl" },
  { name: "Cognizant", color: "text-[#000048]", font: "font-sans font-bold text-4xl tracking-tight" },
  { name: "Wipro", color: "text-[#E21A22]", font: "font-sans font-bold text-4xl tracking-wide" },
];

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % clients.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);

  return (
    <section id="clients" className="py-20 relative bg-white border-t border-border/40">
      <div className="container mx-auto">
        {/* Section Header (Sismos Style) */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-purple mb-3 font-display">
            Our Clients
          </h2>
          <div className="flex justify-center items-center gap-2 text-primary">
            <div className="w-4 h-1 bg-primary rounded-full" />
            <Star className="h-5 w-5 text-secondary fill-secondary" />
            <div className="w-4 h-1 bg-primary rounded-full" />
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-md mx-auto relative flex items-center justify-center">
          
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute -left-4 md:-left-12 z-10 w-10 h-10 bg-primary hover:bg-primary/90 text-white rounded-md flex items-center justify-center transition-all shadow-md"
            aria-label="Previous client"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Logo Card */}
          <div className="w-full bg-[#f8f9fa] h-48 md:h-56 rounded-xl flex items-center justify-center border border-border/50 shadow-sm overflow-hidden px-8">
            <div 
              key={currentIndex}
              className="animate-fade-up flex items-center justify-center w-full h-full"
            >
              <span className={`${clients[currentIndex].font} ${clients[currentIndex].color}`}>
                {clients[currentIndex].name}
              </span>
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute -right-4 md:-right-12 z-10 w-10 h-10 bg-primary hover:bg-primary/90 text-white rounded-md flex items-center justify-center transition-all shadow-md"
            aria-label="Next client"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {clients.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all ${
                idx === currentIndex ? "w-2.5 h-2.5 bg-primary" : "w-2 h-2 bg-primary/30 hover:bg-primary/60"
              }`}
              aria-label={`Go to client ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
