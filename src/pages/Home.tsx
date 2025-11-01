import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <WhyChooseUs />
        <Testimonials />
        <ServiceAreas />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
