import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "A R M Solutions did an excellent job cleaning our septic tank. The team was professional, efficient, and left everything spotless. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Property Manager",
    content: "We've been using their services for our apartment complex for years. Always reliable, professional, and their mechanized equipment makes the job so much cleaner.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Business Owner",
    content: "Emergency service on a Sunday! They responded quickly and resolved our water tank issue. Professional service and fair pricing. Thank you!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
