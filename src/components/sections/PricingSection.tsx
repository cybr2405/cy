import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    description: "Essential security for small teams",
    price: "$999",
    period: "/month",
    features: [
      "Quarterly Vulnerability Scans",
      "Basic Security Audit",
      "Email Support",
      "Security Awareness Training",
      "Monthly Reports",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    description: "Advanced protection for growing businesses",
    price: "$2,499",
    period: "/month",
    features: [
      "Monthly Penetration Testing",
      "Comprehensive Security Audit",
      "24/7 Priority Support",
      "Compliance Assistance (SOC 2, GDPR)",
      "Incident Response Planning",
      "Custom Security Workshops",
      "Weekly Reports & Dashboards",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Complete security for large organizations",
    price: "Custom",
    period: "",
    features: [
      "Continuous Penetration Testing",
      "Full Security Operations Center",
      "Dedicated Security Team",
      "Full Compliance Management",
      "24/7 Incident Response",
      "Executive Security Training",
      "Real-time Threat Intelligence",
      "Custom Integration Support",
    ],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Transparent Security Investments
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your security needs. All plans include our 
            industry-leading protection guarantee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "glass-card border-primary/50 relative overflow-hidden"
                  : "glass-card hover:border-primary/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {plan.description}
              </p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <Button
                  variant={plan.highlighted ? "hero" : "hero-outline"}
                  className="w-full"
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
