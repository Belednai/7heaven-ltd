import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      company: "Hassan Import & Export",
      location: "Juba",
      text: "7 Heaven has transformed our import process. What used to take weeks now takes just days. Their team at the airport is incredibly professional and efficient.",
      rating: 5
    },
    {
      name: "Mary Akol",
      company: "South Sudan Traders Ltd",
      location: "Nimule",
      text: "The border clearance service at Nimule is outstanding. They handled our emergency cargo shipment over the weekend and got everything cleared on time.",
      rating: 5
    },
    {
      name: "John Maker",
      company: "Nile Valley Enterprises",
      location: "Juba",
      text: "Professional, reliable, and always transparent about costs and timelines. 7 Heaven has been our trusted partner for over 3 years now.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses who trust us with their cargo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-white border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 left-4 bg-primary/10 p-2 rounded-full">
                  <Quote className="h-4 w-4 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex justify-end mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <p className="text-xs text-primary font-medium">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-current" />
                ))}
              </div>
              <span className="font-semibold text-primary">5.0 Rating</span>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Satisfied Clients</div>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;