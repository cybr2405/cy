import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { motion } from "framer-motion";
import { Shield, Clock, Award, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "We respond to all inquiries within 24 hours",
  },
  {
    icon: Shield,
    title: "Free Assessment",
    description: "Get a complimentary security assessment",
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Certified professionals ready to help",
  },
  {
    icon: MessageCircle,
    title: "No Obligation",
    description: "Consultations are free with no pressure",
  },
];

const Contact = () => {
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
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Let's <span className="gradient-text">Talk Security</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Ready to protect your business? Get in touch for a free consultation 
                and discover how CyberGuard can help.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />

        {/* Map placeholder */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="glass-card rounded-2xl overflow-hidden h-64 md:h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">CyberGuard Headquarters</h3>
                <p className="text-muted-foreground">123 Security Lane, Cyber City, CC 12345</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
