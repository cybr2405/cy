import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

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
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Start Your Security Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to protect your business? Get in touch for a free consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-8">
              Have questions about our services? Our security experts are ready 
              to help you understand your security needs and find the right solution.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">hello@cyberguard.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="font-medium">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Office</div>
                  <div className="font-medium">123 Security Lane, Cyber City</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {isSubmitted ? (
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p className="text-muted-foreground">
                  We've received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input
                      placeholder="John Doe"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company</label>
                    <Input
                      placeholder="Your Company"
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="mb-4">
                  <label className="text-sm font-medium mb-2 block">Service Interest</label>
                  <select className="w-full h-10 px-3 rounded-lg border border-input bg-background/50 text-sm">
                    <option value="">Select a service</option>
                    <option value="pentest">Penetration Testing</option>
                    <option value="audit">Security Audit</option>
                    <option value="compliance">Compliance</option>
                    <option value="workshop">Security Workshops</option>
                    <option value="managed">Managed Security</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell us about your security needs..."
                    rows={4}
                    required
                    className="bg-background/50"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
