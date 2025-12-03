import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import WhyNexus from "@/components/WhyNexus";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <WhyNexus />
      <Services />
      <TechStack />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <Process />
      <FAQ />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
