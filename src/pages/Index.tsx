import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import About from "@/components/site/About";
import Advantages from "@/components/site/Advantages";
import WhyUs from "@/components/site/WhyUs";
import Clients from "@/components/site/Clients";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Advantages />
        <WhyUs />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
