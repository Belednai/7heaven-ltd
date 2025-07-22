import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-customs.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-12 sm:pt-0 sm:pb-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80 transition-colors"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-montserrat">
          7 Heaven
          <span className="block">General Trading</span>
          <span className="text-lg xs:text-xl md:text-2xl md:text-3xl font-normal font-inter">Company Limited</span>
        </h1>
        <p className="text-base xs:text-lg md:text-xl md:text-2xl mb-8 font-medium font-inter">
          Your Reliable Gateway for Fast & Secure Clearance
        </p>
        <p className="text-sm xs:text-base md:text-lg mb-12 max-w-2xl mx-auto opacity-90 font-inter">
          Professional clearing and forwarding services at Juba International Airport 
          and Nimule Border. We make importing to South Sudan simple and efficient.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact">
            <Button size="lg" className="bg-primary hover:bg-primary-light focus:bg-primary-dark text-white font-semibold transition-colors transition-shadow duration-200">
              <Phone className="mr-2 h-5 w-5" />
              Book Us
            </Button>
          </a>
          <a href="https://wa.me/message/BLAIR3KT4TJ4P1" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary-light focus:bg-primary-dark text-white font-semibold transition-colors transition-shadow duration-200">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;