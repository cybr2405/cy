import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/sections/FAQSection";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const additionalFaqs = {
  services: [
    {
      question: "What's the difference between a vulnerability scan and a penetration test?",
      answer: "A vulnerability scan is an automated process that identifies potential weaknesses in your systems. A penetration test goes further—our ethical hackers actively try to exploit those vulnerabilities to understand the real-world impact and provide actionable remediation guidance.",
    },
    {
      question: "Do you test cloud environments?",
      answer: "Yes, we have extensive experience testing cloud environments across AWS, Azure, Google Cloud, and other platforms. Our cloud security assessments cover infrastructure configuration, access controls, data protection, and compliance requirements.",
    },
    {
      question: "How do you handle sensitive data during testing?",
      answer: "We follow strict data handling protocols. All testing is conducted under NDA, we use secure channels for communication, and we never store sensitive customer data beyond what's necessary for reporting. All data is securely destroyed after project completion.",
    },
  ],
  process: [
    {
      question: "How do I get started with CyberGuard?",
      answer: "Simply contact us through our form or schedule a call. We'll discuss your needs, conduct a brief discovery call, and provide a customized proposal. Once approved, we can typically begin work within 1-2 weeks.",
    },
    {
      question: "What information do you need from us before testing?",
      answer: "We'll need scope documentation, network diagrams, access credentials (for authenticated testing), and signed authorization forms. Our team provides a detailed checklist and works with you to gather everything needed.",
    },
    {
      question: "How are findings reported?",
      answer: "You receive a comprehensive report including an executive summary, detailed technical findings with severity ratings, proof-of-concept evidence where applicable, and prioritized remediation recommendations. We also offer a presentation and Q&A session.",
    },
  ],
  support: [
    {
      question: "What kind of ongoing support do you provide?",
      answer: "All clients receive access to our secure portal for report access and communication. Professional and Enterprise clients get priority support, regular check-ins, and access to our security advisors for questions between engagements.",
    },
    {
      question: "Can you help us implement your recommendations?",
      answer: "While we focus on assessment and advisory services, we can provide guidance during remediation, verify fixes through retesting, and recommend trusted implementation partners if needed.",
    },
    {
      question: "Do you offer emergency incident response?",
      answer: "Enterprise clients have access to our 24/7 incident response team. For other clients, we offer emergency response on a case-by-case basis. Contact us immediately if you suspect a breach—time is critical.",
    },
  ],
};

const FAQ = () => {
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
                FAQ
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Got <span className="gradient-text">Questions?</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our services, process, 
                and what to expect when working with CyberGuard.
              </p>
            </motion.div>
          </div>
        </section>

        <FAQSection />

        {/* Additional FAQ Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-12">
              {Object.entries(additionalFaqs).map(([category, faqs], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-xl font-bold mb-6 capitalize">
                    {category === "services" && "About Our Services"}
                    {category === "process" && "Our Process"}
                    {category === "support" && "Support & Follow-up"}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category}-${index}`}
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
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                Contact Us
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
