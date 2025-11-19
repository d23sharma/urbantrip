import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Professional",
    rating: 5,
    text: "Excellent service! The driver was punctual, professional, and the cab was clean. I use UrbanTrip for all my airport transfers now.",
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Frequent Traveler",
    rating: 5,
    text: "Very reliable cab service. Booking is easy via WhatsApp and the pricing is transparent. Highly recommend for outstation trips!",
    initials: "PS",
  },
  {
    name: "Amit Patel",
    role: "Corporate Client",
    rating: 5,
    text: "We use UrbanTrip for all our corporate travel needs. Professional drivers, well-maintained vehicles, and excellent customer support.",
    initials: "AP",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-scale-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-14 h-14 bg-primary">
                    <AvatarFallback className="text-primary-foreground font-semibold text-lg">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
