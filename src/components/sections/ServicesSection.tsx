import { motion } from "framer-motion";
import { Shield, Search, FileCheck, GraduationCap, Lock, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "Penetration Testing",
    description: "Comprehensive security assessments to identify vulnerabilities before attackers do.",
    features: ["Network Pentesting", "Web App Testing", "Social Engineering"],
  },
  {
    icon: FileCheck,
    title: "Security Audits",
    description: "In-depth analysis of your security infrastructure and policies.",
    features: ["Policy Review", "Risk Assessment", "Gap Analysis"],
  },
  {
    icon: Lock,
    title: "Compliance",
    description: "Meet regulatory requirements with our compliance expertise.",
    features: ["GDPR", "SOC 2", "ISO 27001"],
  },
  {
    icon: GraduationCap,
    title: "Security Workshops",
    description: "Empower your team with hands-on cybersecurity training.",
    features: ["Employee Training", "Phishing Awareness", "Incident Response"],
  },
  {
    icon: Shield,
    title: "Managed Security",
    description: "24/7 monitoring and protection for your digital assets.",
    features: ["SIEM", "Threat Intelligence", "Incident Response"],
  },
  {
    icon: Network,
    title: "Network Security",
    description: "Secure your infrastructure with enterprise-grade protection.",
    features: ["Firewall Management", "VPN Setup", "Segmentation"],
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 cyber-grid opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Comprehensive Security Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From penetration testing to compliance, we provide end-to-end security 
            services tailored for small businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button variant="hero-outline" size="lg">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
