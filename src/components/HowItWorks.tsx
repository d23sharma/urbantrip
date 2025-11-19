import { FileText, CheckCircle, Car } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Enquiry",
    description: "Fill out the booking form with your travel details including pickup, drop location, and preferred cab type",
  },
  {
    icon: CheckCircle,
    title: "Get Confirmation",
    description: "Receive instant confirmation via WhatsApp or call with driver details and estimated arrival time",
  },
  {
    icon: Car,
    title: "Enjoy the Ride",
    description: "Relax and enjoy a comfortable, safe journey with our professional drivers to your destination",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your cab in three simple steps and hit the road in minutes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Connecting Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-primary/30 -z-10"></div>
              )}

              <div className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative">
                  <step.icon className="w-12 h-12 text-primary-foreground" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
