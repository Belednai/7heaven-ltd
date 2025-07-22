import Hero from "@/components/Hero";
import About, { Team } from "@/components/About";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { NavigationBar } from "@/components/ui/navigation-menu";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <Team />
      <div id="services">
        <Services />
      </div>
      <WhyChoose />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
