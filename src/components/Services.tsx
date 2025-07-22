import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Truck, FileText, Users } from "lucide-react";
import heroCustoms from "@/assets/hero-customs.jpg";
import sevenHeaven from "@/assets/7Heaven.jpg";
import JIA from "@/assets/JIA.jpg";
import Nimule from "@/assets/Nimule.jpg";
import customs from "@/assets/customs.jpg";
import importImg from "@/assets/import.jpg";

const Services = () => {
  const services = [
    {
      image: JIA,
      title: "Airport Cargo Clearance",
      description: "Complete customs clearance services for air cargo at Juba International Airport. From documentation to final delivery, we handle it all."
    },
    {
      image: Nimule,
      title: "Border Entry Clearance",
      description: "Efficient border clearance services at Nimule border crossing. Fast processing for trucks and cargo entering South Sudan by road."
    },
    {
      image: customs,
      title: "Customs Documentation",
      description: "Expert preparation and processing of all required customs documents. We ensure accuracy and compliance with South Sudan regulations."
    },
    {
      image: importImg,
      title: "Import Advisory",
      description: "Professional consultation on import regulations, duties, and procedures. We guide you through the entire import process."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive clearing and forwarding solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300 bg-white border border-primary/10">
              <CardHeader>
                <div className="mx-auto mb-4 w-full flex items-center justify-center">
                  <img src={service.image} alt={service.title} className="object-cover rounded-lg w-full h-32 max-w-xs shadow" />
                </div>
                <CardTitle className="text-xl text-primary font-montserrat">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed font-inter mb-4">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-block bg-primary hover:bg-primary-light focus:bg-primary-dark text-white font-semibold px-6 py-2 rounded-lg transition-colors transition-shadow duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-primary mt-2"
                >
                  Book Us
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 bg-primary p-8 rounded-lg text-white text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-4 font-montserrat">Need Custom Solutions?</h3>
          <p className="text-lg mb-6 font-inter">
            We offer tailored clearing and forwarding solutions for specialized cargo and unique requirements.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-primary hover:bg-primary-light focus:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors transition-shadow duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;