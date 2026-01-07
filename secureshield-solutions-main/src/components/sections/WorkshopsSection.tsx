import { motion } from "framer-motion";
import { GraduationCap, Users, Clock, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const workshops = [
  {
    title: "Security Fundamentals",
    duration: "4 hours",
    audience: "All Employees",
    description: "Build a security-first culture with foundational cybersecurity awareness training.",
    topics: ["Phishing Recognition", "Password Security", "Social Engineering", "Safe Browsing"],
  },
  {
    title: "Incident Response Training",
    duration: "8 hours",
    audience: "IT Teams",
    description: "Learn to detect, contain, and recover from security incidents effectively.",
    topics: ["Threat Detection", "Containment Strategies", "Forensic Analysis", "Recovery Planning"],
  },
  {
    title: "Executive Security Briefing",
    duration: "2 hours",
    audience: "C-Suite & Management",
    description: "Strategic security insights for leadership and decision-makers.",
    topics: ["Risk Management", "Compliance Overview", "Budget Allocation", "Vendor Management"],
  },
];

export function WorkshopsSection() {
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
            Security Training
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Empower Your Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Human error causes 95% of security breaches. Our workshops transform your 
            team into your strongest security asset.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-2">{workshop.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {workshop.description}
              </p>

              <div className="flex gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  {workshop.duration}
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" />
                  {workshop.audience}
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2">Topics covered:</p>
                <div className="flex flex-wrap gap-2">
                  {workshop.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link to="/workshops">
            <Button variant="hero" size="lg" className="group">
              Explore All Workshops
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
