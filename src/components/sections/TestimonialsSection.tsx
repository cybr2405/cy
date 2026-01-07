import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "CyberGuard's penetration testing uncovered critical vulnerabilities we had no idea existed. Their team's expertise saved us from what could have been a devastating breach.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "CEO",
    company: "DataSecure Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "The compliance assistance we received was invaluable. They helped us achieve SOC 2 certification in record time, opening doors to enterprise clients.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "IT Director",
    company: "HealthFirst Medical",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "Their security workshops transformed our team's approach to cybersecurity. Employee phishing click rates dropped by 90% after the training.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our clients have to say about their experience with CyberGuard.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 relative group hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
