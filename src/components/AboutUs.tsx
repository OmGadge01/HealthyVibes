"use client";

import { useRef } from "react";
import { Leaf, ChefHat, TrendingUp, Truck } from "lucide-react";

export default function About() {
  const sectionRef = useRef(null);

  return (
    <section className="relative bg-gradient-to-br from-[#F6FFF7] via-white to-[#E8F5E9] overflow-hidden py-20">
      
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-green-100">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-green-700">ABOUT US</span>
          </div>
        </div>

        {/* Grid - Left paragraph, Right icons */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT - Simple intro paragraph */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Good food, 
              <span className="text-green-600"> good life.</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              HealthyVibes makes healthy eating effortless. We create delicious, 
              nutritionist-approved meals delivered fresh to your door.
            </p>
            
            <p className="text-gray-500 text-sm">
              Founded in 2020 · 50+ team members
            </p>
          </div>

          {/* RIGHT - Simple animated icons */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Fresh ingredients */}
            <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-green-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <Leaf className="w-8 h-8 text-green-600 mb-2 group-hover:rotate-12 transition-transform" />
              <div className="font-semibold text-gray-800">Fresh</div>
              <div className="text-xs text-gray-500">Daily ingredients</div>
            </div>

            {/* Expert chefs */}
            <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-green-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <ChefHat className="w-8 h-8 text-green-600 mb-2 group-hover:rotate-12 transition-transform" />
              <div className="font-semibold text-gray-800">Expert</div>
              <div className="text-xs text-gray-500">Chef crafted</div>
            </div>

            {/* Science based */}
            <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-green-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <TrendingUp className="w-8 h-8 text-green-600 mb-2 group-hover:rotate-12 transition-transform" />
              <div className="font-semibold text-gray-800">Science</div>
              <div className="text-xs text-gray-500">Nutrition backed</div>
            </div>

            {/* Fast delivery */}
            <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-green-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
              <Truck className="w-8 h-8 text-green-600 mb-2 group-hover:rotate-12 transition-transform" />
              <div className="font-semibold text-gray-800">Delivery</div>
              <div className="text-xs text-gray-500">5km radius</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-50px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}