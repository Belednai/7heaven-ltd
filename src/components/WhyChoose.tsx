import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Award, MapPin, Users, Zap } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Average clearance time of 24-48 hours for standard cargo",
      badge: "Efficiency"
    },
    {
      icon: Award,
      title: "Regulatory Expertise",
      description: "Deep knowledge of South Sudan customs laws and procedures",
      badge: "Expertise"
    },
    {
      icon: Users,
      title: "Trusted by 500+ Clients",
      description: "Proven track record with businesses across various industries",
      badge: "Trust"
    },
    {
      icon: MapPin,
      title: "Strategic Locations",
      description: "Offices at both Juba Airport and Nimule Border for complete coverage",
      badge: "Coverage"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for urgent clearance needs",
      badge: "Support"
    },
    {
      icon: CheckCircle,
      title: "100% Compliance",
      description: "Zero regulatory violations in our 5+ years of operation",
      badge: "Compliance"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Why Choose 7 Heaven?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine efficiency, expertise, and trust to deliver exceptional clearing services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-primary text-lg">{reason.title}</h3>
                      <Badge variant="secondary" className="bg-primary/10 text-primary-dark border-primary/20">
                        {reason.badge}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </CardContent>
              
              {/* Hover effect border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary to-primary-light p-8 rounded-xl text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join hundreds of satisfied clients who trust us with their cargo clearance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-primary">24hrs</div>
                <div className="text-sm">Average Processing</div>
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;