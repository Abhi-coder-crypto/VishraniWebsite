import { Link } from "wouter";
import { MapPin, Mail, Phone } from "lucide-react";
import logo from "@assets/generated_images/modern_tech_logo_for_vishrani_computech.png";

export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Vishrani Computech" className="h-8 w-8 object-contain" />
              <span className="font-heading font-bold text-xl text-white">
                Vishrani<span className="text-primary">Computech</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Empowering businesses with cutting-edge software solutions since 2000. We turn complex problems into elegant digital experiences.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">Products</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link href="/know-us" className="text-muted-foreground hover:text-primary transition-colors text-sm">Know Us</Link></li>
              <li><Link href="/connect" className="text-muted-foreground hover:text-primary transition-colors text-sm">Connect</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>83 L. L. Shah Marg,<br />Dana Bunder, Masjid (E),<br />Mumbai 400 009, India</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:support@vishrani.com" className="hover:text-white transition-colors">support@vishrani.com</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter/Extra */}
          <div>
             <h4 className="font-heading font-bold text-white mb-6">Legal</h4>
             <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a></li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Vishrani Computech. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed for the Future.
          </p>
        </div>
      </div>
    </footer>
  );
}
