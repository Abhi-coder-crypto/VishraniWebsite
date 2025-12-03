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
  const [location, setLocation] = useLocation();

  const handleHover = (href: string) => {
    if (location !== href) {
      setLocation(href);
    }
  };

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
        scrolled 
          ? "py-3 bg-white/70 backdrop-blur-md shadow-sm" 
          : "py-4 bg-white shadow-sm"
      }`}
    >
      <div className="container-main flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Vishrani Computech" className="h-11 w-11 object-contain" />
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl md:text-2xl tracking-tight leading-none">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Vishrani</span>
            </span>
            <span className="font-heading font-bold text-sm md:text-base tracking-widest uppercase bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Computech
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              onMouseEnter={() => handleHover(link.href)}
              className={`text-sm font-medium transition-colors relative group ${
                location === link.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                location === link.href ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-900"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
