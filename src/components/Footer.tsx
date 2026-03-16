import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Main footer grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              HealthyVibes
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fresh, healthy meals delivered daily. Made with <Heart className="w-3 h-3 inline-block text-red-400 fill-current" /> by our expert chefs.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={i} 
                    href={social.href}
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 text-gray-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Plans", "Menu", "How it Works", "Reviews"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-green-500" />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-green-500" />
                <span>hello@healthyvibes.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-green-500" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-3">Get weekly menu updates</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 rounded-l-lg border border-gray-700 text-white text-sm focus:outline-none focus:border-green-500"
              />
              <button className="px-3 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-r-lg text-sm font-medium hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © 2025 HealthyVibes. All rights reserved.
            </p>

            {/* Bottom links */}
            <div className="flex gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-green-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-green-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-green-400 transition">FAQs</a>
            </div>

            {/* Made with love */}
            <p className="text-gray-600 text-xs flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-400 fill-current" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}