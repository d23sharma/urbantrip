import { Shield, Clock, Star } from "lucide-react";
import BookingForm from "./BookingForm";
import heroImage from "@/assets/hero-taxi.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern taxi cab service - UrbanTrip Cabs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Book Your Cab <span className="text-primary">Easily & Quickly</span> with UrbanTrip Cabs
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              24/7 reliable taxi service with verified professional drivers. Safe rides, affordable pricing, and on-time pickups guaranteed.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Verified Drivers</p>
                  <p className="text-sm text-white/70">100% Background Checked</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">24/7 Service</p>
                  <p className="text-sm text-white/70">Always Available</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Rated 4.8/5</p>
                  <p className="text-sm text-white/70">5000+ Happy Customers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Booking Form */}
          <div className="animate-slide-in-right">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
