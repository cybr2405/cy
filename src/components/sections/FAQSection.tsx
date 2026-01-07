import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is penetration testing and why do I need it?",
    answer: "Penetration testing (or pentesting) simulates real-world cyber attacks on your systems to identify vulnerabilities before malicious hackers can exploit them. It's essential for any business that handles sensitive data, as it reveals security gaps that traditional scans might miss.",
  },
  {
    question: "How long does a typical security audit take?",
    answer: "The duration depends on your organization's size and complexity. A basic audit for a small business typically takes 1-2 weeks, while comprehensive enterprise audits may take 4-6 weeks. We provide a detailed timeline during our initial assessment.",
  },
  {
    question: "What compliance standards do you help with?",
    answer: "We assist with major compliance frameworks including SOC 2 Type I & II, GDPR, HIPAA, ISO 27001, PCI DSS, and NIST. Our team guides you through the entire certification process, from gap analysis to audit preparation.",
  },
  {
    question: "Do you offer ongoing security monitoring?",
    answer: "Yes, our Managed Security service provides 24/7 monitoring, threat detection, and incident response. We use advanced SIEM technology and maintain a dedicated security operations center (SOC) to protect your assets continuously.",
  },
  {
    question: "How do your security workshops work?",
    answer: "Our workshops are customized to your team's needs and can be delivered on-site or virtually. They include interactive exercises, real-world scenarios, and practical tools your employees can use immediately. We cover topics from basic awareness to advanced incident response.",
  },
  {
    question: "What happens if you find a critical vulnerability?",
    answer: "We follow responsible disclosure practices. Critical findings are reported immediately through secure channels, and we work with your team to implement emergency remediation. All vulnerabilities are documented with severity ratings and actionable fix recommendations.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our cybersecurity services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-border/50 data-[state=open]:border-primary/30"
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
  );
}
