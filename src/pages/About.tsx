import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Users, Wrench, Shield, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import serviceImage from "@/assets/service-action.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About A R M Solutions</h1>
            <p className="text-xl text-primary-foreground/90">
              Your trusted partner for professional septic and water tank cleaning services for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2008, A R M Solutions began with a simple mission: to provide reliable, professional tank cleaning services to our community. Over the past 15 years, we've grown from a small local operation to the region's most trusted tank cleaning service provider.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our commitment to quality, safety, and customer satisfaction has earned us the trust of over 500 residential and commercial clients. We've invested in the latest mechanized cleaning technology to ensure we deliver the most efficient and thorough service possible.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we continue to uphold the values that founded our company: professionalism, reliability, and unwavering dedication to customer service.
              </p>
            </div>
            <div>
              <img
                src={serviceImage}
                alt="A R M Solutions team at work"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every job, using the best equipment and techniques available.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                Honest, transparent service with fair pricing and no hidden fees.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Customer Focus</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our top priority. We go above and beyond for every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the A R M Solutions advantage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4 p-6 bg-secondary rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Advanced Technology
                </h3>
                <p className="text-muted-foreground">
                  We use state-of-the-art mechanized equipment that provides superior cleaning results while being more efficient and environmentally friendly.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-secondary rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Expert Team
                </h3>
                <p className="text-muted-foreground">
                  Our technicians are fully certified, extensively trained, and experienced in handling all types of tank cleaning scenarios.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-secondary rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Certified & Compliant
                </h3>
                <p className="text-muted-foreground">
                  Fully licensed, insured, and compliant with all local regulations. We provide documentation for your records.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-secondary rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Safety First
                </h3>
                <p className="text-muted-foreground">
                  We follow strict safety protocols to protect our team, your property, and the environment during every job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Emergency Service</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-primary-foreground/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Experience the A R M Solutions Difference
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us for their tank cleaning needs.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Get Your Free Quote Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
