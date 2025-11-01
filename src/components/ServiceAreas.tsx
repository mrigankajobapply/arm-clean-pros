import { MapPin } from "lucide-react";

const areas = [
  "Downtown District",
  "North Suburbs",
  "East Valley",
  "West Hills",
  "South County",
  "Central Business District",
  "Riverside Area",
  "Highland Park",
  "Lakeside Communities",
  "Mountain View",
  "Coastal Region",
  "Industrial Zone",
];

const ServiceAreas = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Areas We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proudly serving the entire metro area and surrounding communities with professional tank cleaning services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 p-4 bg-secondary rounded-lg hover:bg-primary/10 transition-colors duration-300"
            >
              <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-foreground font-medium">{area}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Don't see your area listed?{" "}
            <a href="/contact" className="text-primary hover:underline font-semibold">
              Contact us
            </a>{" "}
            - we may still be able to help!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
