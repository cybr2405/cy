import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Search, FileCheck, GraduationCap, Lock, Network, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "Penetration Testing",
    description: "Comprehensive security assessments that simulate real-world attacks to identify vulnerabilities in your systems before malicious actors can exploit them.",
    features: [
      "Network Penetration Testing",
      "Web Application Testing",
      "Mobile App Security Testing",
      "Social Engineering Assessments",
      "Wireless Network Testing",
      "API Security Testing",
    ],
    benefits: ["Identify vulnerabilities before attackers", "Meet compliance requirements", "Protect customer data"],
  },
  {
    icon: FileCheck,
    title: "Security Audits",
    description: "In-depth analysis of your security infrastructure, policies, and procedures to identify gaps and strengthen your overall security posture.",
    features: [
      "Infrastructure Security Review",
      "Policy & Procedure Audit",
      "Access Control Assessment",
      "Data Protection Audit",
      "Cloud Security Review",
      "Third-Party Risk Assessment",
    ],
    benefits: ["Comprehensive security overview", "Prioritized remediation roadmap", "Expert recommendations"],
  },
  {
    icon: Lock,
    title: "Compliance Services",
    description: "Expert guidance to help you meet regulatory requirements and industry standards with confidence.",
    features: [
      "SOC 2 Type I & II",
      "GDPR Compliance",
      "HIPAA Compliance",
      "ISO 27001 Certification",
      "PCI DSS Compliance",
      "NIST Framework Implementation",
    ],
    benefits: ["Avoid regulatory penalties", "Win enterprise clients", "Build customer trust"],
  },
  {
    icon: GraduationCap,
    title: "Security Workshops",
    description: "Hands-on training programs designed to transform your team into your strongest security asset.",
    features: [
      "Security Awareness Training",
      "Phishing Simulation Exercises",
      "Incident Response Training",
      "Secure Coding Workshops",
      "Executive Security Briefings",
      "Custom Training Programs",
    ],
    benefits: ["Reduce human error incidents", "Build security culture", "Empower your team"],
  },
  {
    icon: Shield,
    title: "Managed Security",
    description: "24/7 monitoring and protection with our dedicated security operations center keeping watch over your digital assets.",
    features: [
      "24/7 Security Monitoring",
      "Threat Detection & Response",
      "SIEM Management",
      "Vulnerability Management",
      "Security Analytics",
      "Incident Response",
    ],
    benefits: ["Round-the-clock protection", "Rapid threat response", "Peace of mind"],
  },
  {
    icon: Network,
    title: "Network Security",
    description: "Secure your infrastructure with enterprise-grade network protection and segmentation strategies.",
    features: [
      "Firewall Configuration",
      "Network Segmentation",
      "VPN Implementation",
      "Zero Trust Architecture",
      "DNS Security",
      "Network Access Control",
    ],
    benefits: ["Protect critical assets", "Reduce attack surface", "Control access effectively"],
  },
];

const Services = () => {
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
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Comprehensive <span className="gradient-text">Security Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                From penetration testing to compliance, we provide end-to-end 
                cybersecurity services tailored for small businesses.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span className="text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact">
                      <Button variant="hero" className="group">
                        Get Started
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className={`glass-card rounded-2xl p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h3 className="font-semibold mb-4 text-primary">What's Included</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
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
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Business?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get a free security assessment and discover how we can protect your digital assets.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Schedule Free Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
