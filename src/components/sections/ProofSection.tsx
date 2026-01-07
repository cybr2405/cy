import { motion } from "framer-motion";
import { Shield, Award, Users, Clock, CheckCircle } from "lucide-react";

const proofStats = [
  {
    icon: Shield,
    value: "500+",
    label: "Businesses Protected",
    description: "Trusted by companies worldwide",
  },
  {
    icon: CheckCircle,
    value: "10,000+",
    label: "Vulnerabilities Found",
    description: "Before attackers could exploit them",
  },
  {
    icon: Clock,
    value: "99.9%",
    label: "Uptime SLA",
    description: "Round-the-clock monitoring",
  },
  {
    icon: Users,
    value: "50+",
    label: "Security Experts",
    description: "Certified professionals on your side",
  },
];

const certifications = [
  "ISO 27001", "SOC 2 Type II", "CREST", "CEH", "OSCP", "CISSP"
];

export function ProofSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Proven Track Record
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Numbers don't lie. See why hundreds of businesses trust us with their security.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {proofStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Our team holds industry-leading certifications
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="px-5 py-2.5 rounded-lg bg-card border border-border text-sm font-medium text-foreground hover:border-primary/50 transition-colors"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
