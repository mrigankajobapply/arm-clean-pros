import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional septic tank cleaning team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Professional Septic & Water Tank Cleaning Services You Can Trust
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
            Advanced mechanized cleaning for residential and commercial properties. Licensed, insured, and available 24/7 for emergency services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button variant="accent" size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm">
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Emergency Service</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Licensed & Insured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
