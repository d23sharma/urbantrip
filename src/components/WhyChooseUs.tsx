import { Users, Clock, DollarSign, Headphones, ShieldCheck, MapPin } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Professional Drivers",
    description: "Experienced and courteous drivers with verified backgrounds",
  },
  {
    icon: Clock,
    title: "On-time Pickups",
    description: "Punctual service with real-time tracking and updates",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden charges or surprises",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance for all your queries",
  },
  {
    icon: ShieldCheck,
    title: "Verified Cabs",
    description: "Well-maintained vehicles with regular safety inspections",
  },
  {
    icon: MapPin,
    title: "Real-Time Assistance",
    description: "Live tracking and instant support throughout your journey",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose UrbanTrip Cabs?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our premium cab booking service designed for your comfort and convenience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
