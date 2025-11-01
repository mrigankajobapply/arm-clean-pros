import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How often should septic tanks be cleaned?",
    answer: "We recommend cleaning your septic tank every 3-5 years for residential properties, depending on usage and household size. Commercial properties may require more frequent service.",
  },
  {
    question: "What does the cleaning process involve?",
    answer: "Our mechanized cleaning process includes complete waste removal, tank inspection, cleaning of all components, and sanitization. We ensure minimal disruption and leave your property clean.",
  },
  {
    question: "How long does the cleaning take?",
    answer: "Most residential tank cleanings take 1-2 hours. Commercial properties may require more time depending on tank size and complexity. We work efficiently to minimize any inconvenience.",
  },
  {
    question: "Is your cleaning process safe and eco-friendly?",
    answer: "Yes! We use environmentally responsible methods and all waste is properly disposed of according to local regulations. Our processes are safe for your property and the environment.",
  },
  {
    question: "Do you provide emergency services?",
    answer: "Absolutely! We offer 24/7 emergency services for urgent tank cleaning needs. Call us anytime and we'll dispatch a team as quickly as possible.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed, bonded, and insured. Our technicians are certified professionals with years of experience in tank cleaning services.",
  },
  {
    question: "What preparation is needed before service?",
    answer: "We need clear access to the tank location. We'll provide specific instructions when you schedule your service. Our team handles all the heavy work - you just need to ensure accessibility.",
  },
  {
    question: "Do you service both residential and commercial properties?",
    answer: "Yes! We serve homeowners, apartment complexes, commercial facilities, and industrial properties. Our equipment can handle tanks of all sizes.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our tank cleaning services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
