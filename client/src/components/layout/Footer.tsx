import { Link } from "wouter";
import { MapPin, Mail, Phone } from "lucide-react";
import logo from "@assets/generated_images/clean_v_icon_logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-main">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Vishrani Computech" className="h-8 w-8 object-contain" />
              <span className="font-heading font-bold text-lg text-white">
                Vishrani<span className="text-blue-400">Computech</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses with cutting-edge software solutions since 2000.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors text-sm">Products</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link href="/know-us" className="text-gray-400 hover:text-white transition-colors text-sm">Know Us</Link></li>
              <li><Link href="/connect" className="text-gray-400 hover:text-white transition-colors text-sm">Connect</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>83 L. L. Shah Marg, Dana Bunder, Masjid (E), Mumbai 400 009, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:support@vishrani.com" className="hover:text-white transition-colors">support@vishrani.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Vishrani Computech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
