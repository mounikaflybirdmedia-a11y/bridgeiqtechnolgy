import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Search, FileText, Globe } from "lucide-react";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-primary font-semibold">Join Our Team</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              <span className="text-gradient-purple">Careers</span>
            </h1>
            <div className="mx-auto w-16 h-1 rounded-full bg-gradient-brand mb-8" />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed mb-16">
            <p>
              BridgeIQ Technologies is an excellent place to not just work but also to learn new technologies and skills. We offer the best packages anyone has to offer along with a Sign up bonus. We are one of the fastest growing Information Technology Consulting Companies in the United States. We are an E-Verified Employer.
            </p>
            <p>
              BridgeIQ Technologies is now recruiting IT Professionals for its training and placement services. Candidates will have the opportunity to work as IT professionals and provide services to clients spread all across the USA. Ideal candidates should have completed their Masters or Bachelors in any related IT field. Applicants should be eligible to work: US Citizens / Green Card Holders / H1B Visa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-8 text-center flex flex-col items-center hover:border-primary/40 transition-smooth">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Search Jobs</h3>
              <p className="text-sm text-muted-foreground">Find the perfect role that fits your expertise and career goals.</p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center flex flex-col items-center hover:border-primary/40 transition-smooth">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Submit Resume</h3>
              <p className="text-sm text-muted-foreground">Send us your resume directly and we will find a match for you.</p>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center flex flex-col items-center hover:border-primary/40 transition-smooth">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Visa Sponsorship</h3>
              <p className="text-sm text-muted-foreground">We sponsor H1B, Green Card, and support OPT/CPT candidates.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
