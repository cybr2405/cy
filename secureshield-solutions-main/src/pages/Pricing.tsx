import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/sections/PricingSection";
import { motion } from "framer-motion";
import { CheckCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingFaqs = [
  {
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "Is there a minimum contract length?",
    answer: "Our Starter and Professional plans are month-to-month with no long-term commitment. Enterprise plans typically have a 12-month minimum.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes, we offer a 15% discount when you pay annually. Contact us for custom pricing on enterprise agreements.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and can set up invoicing for enterprise clients.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 relative">
          <div className="absolute inset-0 cyber-grid opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Pricing
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Invest in Your <span className="gradient-text">Security</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Transparent pricing with no hidden fees. Choose a plan that fits 
                your security needs and budget.
              </p>
            </motion.div>
          </div>
        </section>

        <PricingSection />

        {/* Comparison */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-2xl font-bold text-center mb-8">All Plans Include</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Dedicated Account Manager",
                  "Secure Client Portal",
                  "Detailed Reporting",
                  "Remediation Guidance",
                  "30-Day Money Back Guarantee",
                  "99.9% Uptime SLA",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 glass-card rounded-lg p-4">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-2 justify-center mb-8">
                <HelpCircle className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">Pricing FAQ</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {pricingFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="glass-card rounded-xl px-6 border-border/50"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
