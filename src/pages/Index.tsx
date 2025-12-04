import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import WhyNexus from "@/components/WhyNexus";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import ComparisonTable from "@/components/ComparisonTable";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import LeadMagnet from "@/components/LeadMagnet";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      {/*<WhyNexus />*/}
   
      <Services />
      <TechStack />
      {/*<ComparisonTable />*/}
      <Pricing />
      <Portfolio />
      <Testimonials />
      <Process />
      {/*<Guarantee />*/}
      <LeadMagnet />
      <FAQ />
      <Newsletter />
      <Contact />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Index;
