import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Schema />
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
