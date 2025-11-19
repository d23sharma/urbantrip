import { MapPin, Plane, Navigation, Briefcase, Crown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: MapPin,
    title: "Local Rentals",
    description: "Hourly or daily cab rentals for city travel and local sightseeing",
  },
  {
    icon: Plane,
    title: "Airport Pickup/Drop",
    description: "Hassle-free airport transfers with flight tracking and on-time service",
  },
  {
    icon: Navigation,
    title: "Outstation Rides",
    description: "Comfortable long-distance travel to nearby cities and tourist destinations",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "Professional transportation solutions for business meetings and events",
  },
  {
    icon: Crown,
    title: "Luxury Car Rentals",
    description: "Premium vehicles for special occasions and executive travel needs",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cab Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive transportation solutions tailored to meet all your travel requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2 hover:border-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-3">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
