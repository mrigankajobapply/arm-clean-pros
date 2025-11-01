import { CheckCircle2, Shield, Wrench, Clock, Leaf, Award } from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Mechanized Cleaning Technology",
    description: "Advanced equipment ensures thorough and efficient cleaning every time.",
  },
  {
    icon: Award,
    title: "Certified & Experienced",
    description: "Our technicians are fully trained, certified, and experienced professionals.",
  },
  {
    icon: CheckCircle2,
    title: "Residential & Commercial",
    description: "Expert services for homes, apartments, and commercial facilities.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Available around the clock for urgent tank cleaning needs.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Methods",
    description: "Safe, environmentally responsible cleaning solutions.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your peace of mind.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose A R M Solutions?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by hundreds of satisfied customers for reliable, professional tank cleaning services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-secondary transition-colors duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
