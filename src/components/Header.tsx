import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center font-bold text-2xl text-primary-foreground">
              UT
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">UrbanTrip</h1>
              <p className="text-xs text-muted-foreground">Cabs</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("how-it-works")} className="text-foreground hover:text-primary transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+917385432115">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
            <Button size="sm" onClick={() => scrollToSection("hero")} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border animate-fade-in">
            <button onClick={() => scrollToSection("services")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("how-it-works")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <div className="flex flex-col space-y-2 pt-2">
              <a href="tel:+917385432115">
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
              <Button size="sm" onClick={() => scrollToSection("hero")} className="w-full bg-primary text-primary-foreground">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
