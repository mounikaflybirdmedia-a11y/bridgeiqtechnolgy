import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { servicesData } from "@/data/servicesData";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { ArrowLeft } from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug || !(slug in servicesData)) {
    return <Navigate to="/" replace />;
  }

  const service = servicesData[slug as keyof typeof servicesData];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto max-w-4xl relative">
          
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {service.title}
          </h1>
          <div className="w-16 h-1 rounded-full bg-gradient-brand mb-10" />

          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground/80 font-medium mb-12">
              {service.content}
            </p>

            {service.sections.map((section, idx) => (
              <div key={idx} className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {section.heading}
                </h2>
                
                {section.text && (
                  <p className="mb-6">{section.text}</p>
                )}
                
                {section.list && (
                  <ul className="space-y-3">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-primary shrink-0 mt-2" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
