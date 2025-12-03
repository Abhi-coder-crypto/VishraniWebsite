import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/generated_images/clean_v_icon_logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/know-us", label: "Know Us" },
  { href: "/connect", label: "Connect" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="container-main flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Vishrani Computech" className="h-10 w-10 object-contain" />
          <span className={`font-heading font-bold text-lg md:text-xl tracking-tight transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}>
            Vishrani<span className="text-blue-600">Computech</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors relative group ${
                scrolled 
                  ? (location === link.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600")
                  : (location === link.href ? "text-white" : "text-white/80 hover:text-white")
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                location === link.href ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}
          <Link 
            href="/connect" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                    location === link.href 
                      ? "text-blue-600 bg-blue-50" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/connect" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-base font-medium transition-colors text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
