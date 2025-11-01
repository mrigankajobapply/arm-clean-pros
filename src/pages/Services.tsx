import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Waves, Building2, CheckCircle2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import equipmentImage from "@/assets/equipment.jpg";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Professional Services</h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive tank cleaning solutions using advanced mechanized equipment for residential and commercial properties.
            </p>
          </div>
        </div>
      </section>

      {/* Septic Tank Cleaning */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Droplet className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Septic Tank Cleaning</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our advanced mechanized cleaning process ensures complete waste removal and optimal system performance. We use state-of-the-art equipment to thoroughly clean and sanitize your septic tank.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">What's Included:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Complete waste removal using powerful vacuum trucks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Thorough inspection of tank and components</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">High-pressure water jetting for deep cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Filter cleaning and maintenance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Proper waste disposal per regulations</span>
                </li>
              </ul>

              <Card className="bg-accent/10 border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-accent">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    When to Clean Your Septic Tank
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Slow draining sinks or toilets</li>
                    <li>• Unpleasant odors around the property</li>
                    <li>• Gurgling sounds in plumbing</li>
                    <li>• Regular maintenance every 3-5 years</li>
                    <li>• Before selling or buying a property</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div>
              <img
                src={equipmentImage}
                alt="Professional septic tank cleaning equipment"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Water Tank Cleaning */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={equipmentImage}
                alt="Water tank cleaning service"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Waves className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Underground Water Tank Cleaning</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ensure clean, safe water for your family or business with our thorough water tank cleaning and sanitization services. We remove sediment, biofilm, and contaminants.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Process:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Complete water drainage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Manual scrubbing of tank walls and floor</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">High-pressure washing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Sanitization with approved disinfectants</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Water quality testing (optional)</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Health Benefits:</h3>
              <p className="text-muted-foreground mb-4">
                Regular water tank cleaning prevents bacterial growth, removes harmful contaminants, eliminates foul odors, and ensures your water supply remains safe and clean for consumption.
              </p>
              
              <p className="text-sm text-muted-foreground italic">
                Recommended: Clean underground water tanks every 6-12 months
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Commercial Tank Cleaning Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized services for apartment complexes, commercial buildings, industrial facilities, and large-scale properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Large Capacity Handling</CardTitle>
                <CardDescription>
                  Equipment and expertise to handle tanks of any size, from small commercial tanks to large industrial facilities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scheduled Maintenance</CardTitle>
                <CardDescription>
                  Customized maintenance plans to keep your systems running smoothly with minimal disruption to operations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compliance Certified</CardTitle>
                <CardDescription>
                  All services meet local health and safety regulations. We provide documentation for compliance records.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Minimal Downtime</CardTitle>
                <CardDescription>
                  Efficient service scheduling to minimize impact on your business operations and tenant convenience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Property Management Solutions</CardTitle>
                <CardDescription>
                  Dedicated support for property managers with multi-property service coordination.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Response</CardTitle>
                <CardDescription>
                  Priority emergency services for commercial clients to prevent business disruption.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Request Commercial Service Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Service?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your tank cleaning needs. Our team is ready to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="accent" size="lg" className="w-full sm:w-auto">
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Call: (123) 456-7890
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
