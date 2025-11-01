import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              A R M <span className="text-accent">Solutions</span>
            </h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Professional septic and water tank cleaning services for residential and commercial properties.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Septic Tank Cleaning</li>
              <li className="text-primary-foreground/80">Water Tank Cleaning</li>
              <li className="text-primary-foreground/80">Commercial Services</li>
              <li className="text-primary-foreground/80">Emergency Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@armsolutions.com" className="hover:text-accent transition-colors">
                  info@armsolutions.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  123 Service Road, Your City, ST 12345
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm font-semibold">Business Hours:</p>
              <p className="text-sm text-primary-foreground/80">Mon-Fri: 7AM - 6PM</p>
              <p className="text-sm text-primary-foreground/80">Sat: 8AM - 4PM</p>
              <p className="text-sm text-primary-foreground/80">24/7 Emergency Service</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} A R M Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
