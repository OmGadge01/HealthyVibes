"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-green-100/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-stretch px-4 sm:px-6 relative h-[60px] sm:h-[65px]">
        
        {/* Logo */}
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-green-200">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-6h2v6zm4 0h-2v-6h2v6z" />
            </svg>
          </div>
          <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
            HealthyVibes
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="relative hidden md:flex items-center h-full">
          <div className="absolute -left-8 lg:-left-10 top-0 h-full w-8 lg:w-10 bg-green-100">
            <div className="w-full h-full bg-white rounded-bl-[40px] lg:rounded-bl-[60px]"></div>
          </div>

          <div className="bg-white px-6 lg:px-10 flex items-center gap-4 lg:gap-8 h-full shadow-md">
            {["Plans", "Menu", "How it Works", "Reviews", "Recipes"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="relative text-sm lg:text-base text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 group whitespace-nowrap"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ),
            )}
          </div>

          <div className="absolute -right-8 lg:-right-10 top-0 h-full w-8 lg:w-10 bg-green-100">
            <div className="w-full h-full bg-white rounded-br-[40px] lg:rounded-br-[60px]"></div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="hidden sm:block text-sm sm:text-base text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 px-2 sm:px-4 py-2">
            Log in
          </button>

          <button className="relative bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 hover:scale-105 transition-all duration-300 overflow-hidden group">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-1.5 sm:p-2 rounded-lg text-gray-600 hover:bg-green-200/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* 🔥 Overlay + Floating Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black/30 z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Floating menu */}
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-green-100 shadow-xl animate-slideDown z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              
              <div className="flex flex-col space-y-3">
                {["Plans", "Menu", "How it Works", "Reviews", "Recipes"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-gray-600 hover:text-green-600 font-medium py-2 px-3 rounded-lg hover:bg-green-50 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ),
                )}

                <button className="sm:hidden text-gray-600 hover:text-green-600 font-medium py-2 px-3 rounded-lg hover:bg-green-50 transition-colors text-left">
                  Log in
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-green-100">
                <p className="text-xs text-gray-500 text-center">
                  ✦ Fresh meals delivered daily ✦
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Animation */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}