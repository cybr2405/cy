import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { GraduationCap, Users, Clock, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const workshops = [
  {
    title: "Security Fundamentals",
    duration: "4 hours",
    audience: "All Employees",
    format: "In-person or Virtual",
    price: "$2,500",
    description: "Build a security-first culture with foundational cybersecurity awareness training that every employee needs.",
    topics: [
      "Recognizing Phishing Attacks",
      "Password Best Practices",
      "Social Engineering Tactics",
      "Safe Browsing Habits",
      "Physical Security Awareness",
      "Reporting Security Incidents",
    ],
    outcomes: [
      "90% reduction in phishing click rates",
      "Improved security awareness scores",
      "Certificate of completion for all attendees",
    ],
  },
  {
    title: "Incident Response Training",
    duration: "Full Day (8 hours)",
    audience: "IT & Security Teams",
    format: "In-person Preferred",
    price: "$5,000",
    description: "Learn to detect, contain, and recover from security incidents effectively with hands-on tabletop exercises.",
    topics: [
      "Incident Classification",
      "Detection & Identification",
      "Containment Strategies",
      "Eradication Techniques",
      "Recovery Procedures",
      "Post-Incident Analysis",
    ],
    outcomes: [
      "Documented incident response playbook",
      "Improved response time metrics",
      "Team readiness assessment",
    ],
  },
  {
    title: "Executive Security Briefing",
    duration: "2 hours",
    audience: "C-Suite & Board Members",
    format: "In-person or Virtual",
    price: "$3,500",
    description: "Strategic security insights designed specifically for leadership and decision-makers.",
    topics: [
      "Current Threat Landscape",
      "Business Risk Assessment",
      "Regulatory Compliance Overview",
      "Security Investment ROI",
      "Vendor Risk Management",
      "Board Reporting Best Practices",
    ],
    outcomes: [
      "Executive security strategy document",
      "Risk prioritization framework",
      "Budget recommendation guide",
    ],
  },
  {
    title: "Secure Coding Workshop",
    duration: "2 Days (16 hours)",
    audience: "Development Teams",
    format: "In-person Preferred",
    price: "$8,000",
    description: "Hands-on training to help developers write secure code and identify common vulnerabilities.",
    topics: [
      "OWASP Top 10 Vulnerabilities",
      "Secure Authentication Implementation",
      "Input Validation & Sanitization",
      "Encryption Best Practices",
      "Secure API Development",
      "Code Review Techniques",
    ],
    outcomes: [
      "Reduced vulnerability count in code",
      "Secure coding guidelines document",
      "Developer certification",
    ],
  },
];

const Workshops = () => {
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
                Security Training
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Empower Your <span className="gradient-text">Team</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Human error causes 95% of security breaches. Our workshops transform 
                your team into your strongest security asset.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "5,000+", label: "Employees Trained" },
                { value: "200+", label: "Workshops Delivered" },
                { value: "90%", label: "Satisfaction Rate" },
                { value: "85%", label: "Phishing Reduction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshops */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={workshop.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-card rounded-2xl overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <GraduationCap className="h-5 w-5 text-primary" />
                          </div>
                          <h2 className="text-2xl font-bold">{workshop.title}</h2>
                        </div>
                        <p className="text-muted-foreground">{workshop.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold gradient-text">{workshop.price}</div>
                        <div className="text-sm text-muted-foreground">per session</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        {workshop.duration}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4 text-primary" />
                        {workshop.audience}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        {workshop.format}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-semibold mb-3 text-primary">Topics Covered</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {workshop.topics.map((topic) => (
                            <div key={topic} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="text-muted-foreground">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3 text-primary">Expected Outcomes</h3>
                        <ul className="space-y-2">
                          {workshop.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-4">
                      <Link to="/contact">
                        <Button variant="hero" className="group">
                          Book This Workshop
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      <Button variant="hero-outline">
                        Download Syllabus
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Training CTA */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Custom Training?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We can create tailored training programs specific to your industry, 
              technology stack, and security challenges.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Request Custom Training
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Workshops;
