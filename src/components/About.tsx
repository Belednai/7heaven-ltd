import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, MapPin } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 font-montserrat">About 7 Heaven General Trading</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Your trusted partner for customs clearance and forwarding services in South Sudan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6 font-montserrat">Our Story</h3>
            <p className="text-lg mb-6 leading-relaxed font-inter">
              7 Heaven General Trading Company Limited is a leading clearing and forwarding agency 
              based in South Sudan. We specialize in facilitating the smooth clearance of imported 
              goods and shipments entering the country through our strategic locations at Juba 
              International Airport and the Nimule border.
            </p>
            <p className="text-lg leading-relaxed font-inter">
              With deep knowledge of South Sudan's customs regulations and import procedures, 
              we ensure your cargo clears efficiently while maintaining full compliance with 
              all regulatory requirements.
            </p>
          </div>
          
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-primary mr-3" />
                  <h4 className="font-semibold text-primary font-montserrat">Our Mission</h4>
                </div>
                <p className="text-muted-foreground font-inter">
                  To provide fast, secure, and compliant customs clearance services that 
                  facilitate trade and economic growth in South Sudan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 text-primary mr-3" />
                  <h4 className="font-semibold text-primary font-montserrat">Our Vision</h4>
                </div>
                <p className="text-muted-foreground font-inter">
                  To be the most trusted and efficient clearing and forwarding company 
                  in South Sudan, setting the standard for excellence in customs services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-primary mr-3" />
                  <h4 className="font-semibold text-primary font-montserrat">Strategic Locations</h4>
                </div>
                <p className="text-muted-foreground font-inter">
                  Positioned at key entry points - Juba International Airport and 
                  Nimule Border - for maximum coverage and efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// Our Team Section
import heroCustoms from "@/assets/hero-customs.jpg";
import sevenHeaven from "@/assets/7Heaven.jpg";
import Mayen from "@/assets/Mayen.jpg";
import Atem from "@/assets/Atem.jpg";

export const Team = () => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-primary mb-4">Our Team</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Meet the dedicated professionals behind 7 Heaven General Trading
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center w-full max-w-xs">
          <img src={Mayen} alt="Mayen Ngor Kuir" className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-primary" />
          <h3 className="text-xl font-bold text-primary mb-1">Mayen Ngor Kuir</h3>
          <p className="text-muted-foreground mb-2">Managing Director</p>
          <p className="text-sm text-center text-muted-foreground">Oversees all operations and ensures top-notch service delivery for every client.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center w-full max-w-xs">
          <img src={Atem} alt="Atem Majok Kunjok" className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-primary" />
          <h3 className="text-xl font-bold text-primary mb-1">Atem Majok Kunjok</h3>
          <p className="text-muted-foreground mb-2">CEO</p>
          <p className="text-sm text-center text-muted-foreground">Leads decisions, coordinates trade, ensures compliance, and drives growth across product categories.</p>
        </div>
      </div>
    </div>
  </section>
);