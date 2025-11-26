import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      {/*<Clients />*/}
      <Services />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
