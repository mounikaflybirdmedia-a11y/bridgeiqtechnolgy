import { Star } from "lucide-react";

const clients = [
  { name: "Infosys", color: "text-[#007CC3]", font: "font-sans font-medium text-4xl tracking-tight" },
  { name: "Deloitte", color: "text-black", font: "font-serif font-bold text-4xl tracking-tighter" },
  { name: "TCS", color: "text-[#1175B8]", font: "font-sans font-bold text-4xl tracking-widest" },
  { name: "Accenture", color: "text-black", font: "font-sans font-black text-4xl" },
  { name: "Cognizant", color: "text-[#000048]", font: "font-sans font-bold text-4xl tracking-tight" },
  { name: "Wipro", color: "text-[#E21A22]", font: "font-sans font-bold text-4xl tracking-wide" },
  { name: "Capgemini", color: "text-[#0070AD]", font: "font-sans font-black text-4xl tracking-tighter" },
  { name: "IBM", color: "text-[#0530AD]", font: "font-serif font-black text-4xl tracking-widest" },
];

const Clients = () => {
  // Duplicate array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-20 relative bg-[#f8f9fa] border-t border-border/40 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-purple mb-3 font-display">
            Our Clients
          </h2>
          <div className="flex justify-center items-center gap-2 text-primary">
            <div className="w-4 h-1 bg-primary rounded-full" />
            <Star className="h-5 w-5 text-secondary fill-secondary" />
            <div className="w-4 h-1 bg-primary rounded-full" />
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex bg-white py-10 shadow-sm border-y border-border/40">
        
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap animate-marquee w-max items-center">
          {duplicatedClients.map((client, idx) => (
            <div 
              key={idx} 
              className="mx-8 md:mx-12 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              <div className="flex items-center gap-2">
                {client.prefix && (
                  <span className={`text-4xl ${client.color}`}>{client.prefix}</span>
                )}
                <span className={`${client.font} ${client.color}`}>
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default Clients;
