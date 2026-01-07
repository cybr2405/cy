import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Workshops", href: "/workshops" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="gradient-text">CYBER</span>
              <span className="text-foreground">GUARD</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link to="/contact">
              <Button variant="hero" size="default">
                Get Protected
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="hero" className="w-full mt-4">
                  Get Protected
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
