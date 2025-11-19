import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I want to book a cab. Please provide me more details.";
    const whatsappURL = `https://wa.me/917385432115?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Reach out to us anytime. We're here to help 24/7
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+917385432115" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 7385432115
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:urbantrip.cab@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                      urbantrip.cab@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Service Areas</h3>
                    <p className="text-muted-foreground">
                      Mumbai, Delhi, Bangalore, Pune, Hyderabad and 50+ cities across India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* WhatsApp CTA */}
          <div className="animate-slide-in-right">
            <Card className="bg-primary text-primary-foreground h-full flex flex-col justify-center">
              <CardContent className="pt-6 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Quick WhatsApp Booking</h3>
                <p className="mb-6 text-primary-foreground/90">
                  Get instant quotes and book your cab directly through WhatsApp. Fast, easy, and convenient!
                </p>
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="bg-white text-primary hover:bg-white/90 gap-2 text-lg w-full md:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
