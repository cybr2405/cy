import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { motion } from "framer-motion";
import { Star, Building2, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const detailedTestimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc.",
    industry: "Technology",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "CyberGuard's penetration testing uncovered critical vulnerabilities we had no idea existed. Their team's expertise saved us from what could have been a devastating breach. The detailed remediation guidance helped us fix issues quickly and efficiently.",
    rating: 5,
    services: ["Penetration Testing", "Security Audit"],
  },
  {
    name: "Michael Rodriguez",
    role: "CEO",
    company: "DataSecure Solutions",
    industry: "SaaS",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "The compliance assistance we received was invaluable. They helped us achieve SOC 2 certification in record time, opening doors to enterprise clients. Their structured approach made a complex process manageable.",
    rating: 5,
    services: ["SOC 2 Compliance", "Security Policies"],
  },
  {
    name: "Emily Watson",
    role: "IT Director",
    company: "HealthFirst Medical",
    industry: "Healthcare",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "Their security workshops transformed our team's approach to cybersecurity. Employee phishing click rates dropped by 90% after the training. The interactive exercises made learning engaging and memorable.",
    rating: 5,
    services: ["Security Workshops", "Phishing Simulation"],
  },
  {
    name: "David Park",
    role: "VP of Engineering",
    company: "FinanceHub",
    industry: "FinTech",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    content: "We needed to meet PCI DSS requirements for our payment processing. CyberGuard not only helped us achieve compliance but also improved our overall security posture significantly. Their expertise in financial services was evident.",
    rating: 5,
    services: ["PCI DSS Compliance", "Penetration Testing"],
  },
  {
    name: "Lisa Thompson",
    role: "CISO",
    company: "RetailMax",
    industry: "E-commerce",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    content: "The managed security service gives us peace of mind. Their 24/7 SOC caught and contained a sophisticated attack attempt within minutes. The incident response was professional and thorough.",
    rating: 5,
    services: ["Managed Security", "Incident Response"],
  },
  {
    name: "James Wilson",
    role: "Founder",
    company: "CloudStack",
    industry: "Cloud Services",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    content: "As a startup, we needed enterprise-grade security without breaking the bank. CyberGuard's Starter plan gave us exactly what we needed to secure our platform and win our first enterprise contracts.",
    rating: 5,
    services: ["Security Audit", "Cloud Security"],
  },
];

const logos = [
  "TechFlow", "DataSecure", "HealthFirst", "FinanceHub", "RetailMax", "CloudStack"
];

const Testimonials = () => {
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
                Client Success Stories
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Trusted by <span className="gradient-text">Industry Leaders</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                See how businesses across industries have strengthened their 
                security posture with CyberGuard.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trusted By Logos */}
        <section className="py-8 border-y border-border/50">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground mb-6">
              Trusted by leading companies
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {logos.map((logo) => (
                <div key={logo} className="flex items-center gap-2 text-muted-foreground/50">
                  <Building2 className="h-5 w-5" />
                  <span className="font-semibold">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {detailedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-8 relative"
                >
                  <Quote className="absolute top-8 right-8 h-10 w-10 text-primary/10" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {testimonial.services.map((service) => (
                      <span
                        key={service}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                      <div className="text-xs text-primary">
                        {testimonial.industry}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get started with a free security assessment and see how we can 
              protect your business.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
