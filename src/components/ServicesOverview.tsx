import { Droplet, Waves, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Droplet,
    title: "Septic Tank Cleaning",
    description: "Advanced mechanized cleaning with high-powered equipment. Complete waste removal and sanitization for optimal system performance.",
    features: ["Mechanized cleaning", "Complete waste removal", "System inspection", "Preventive maintenance"],
  },
  {
    icon: Waves,
    title: "Underground Water Tank Cleaning",
    description: "Thorough cleaning and sanitization of underground water storage tanks. Ensuring clean, safe water for your family or business.",
    features: ["Deep cleaning", "Sanitization", "Quality testing", "Sediment removal"],
  },
  {
    icon: Building2,
    title: "Commercial Services",
    description: "Large-scale tank cleaning for commercial properties, apartments, and industrial facilities. Minimal disruption to your operations.",
    features: ["Large capacity handling", "Scheduled maintenance", "Minimal downtime", "Compliance certified"],
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tank cleaning solutions for residential and commercial properties with state-of-the-art equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/services">
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Request a Free Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
