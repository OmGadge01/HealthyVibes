"use client";

import Image from "next/image";
import HeroPlate from "@/public/HeroPlate.png";
import { useRef } from "react";

export default function Hero() {
  const plateRef = useRef(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#F6FFF7] via-white to-[#E8F5E9] overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-20 sm:pb-24 lg:pb-32">
        
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="relative z-10 text-center lg:text-left">
            
            {/* ✅ Bigger mobile font */}
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Precision
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent animate-gradient">
                Nutrition
              </span>
              <br />
              <span className="text-gray-900">Delivered Daily</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 mt-6">
              <span className="font-semibold text-green-600">
                Fresh. Smart. Personalized.
              </span>{" "}
              Your daily dose of wellness, crafted by expert nutritionists and
              delivered to your doorstep.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition text-sm sm:text-base">
                Start Your Journey
              </button>

              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-white border border-green-200 text-green-700 rounded-xl font-semibold hover:scale-105 transition text-sm sm:text-base">
                View Premium Plans
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-3 mt-8 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i)=>(
                  <div
                    key={i}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white shadow-lg animate-pulse"
                    style={{animationDelay:`${i*200}ms`}}
                  />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-gray-500">
                <span className="font-bold text-gray-800">2000+</span> happy customers
              </p>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-8 justify-center lg:justify-start text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span>✔ 5km delivery radius</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✔ 100% Fresh</span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex justify-center lg:justify-end items-center overflow-visible mt-6 sm:mt-8 lg:mt-0">  

            <div
              ref={plateRef}
              className="relative w-[340px] h-[340px] sm:w-[700px] sm:h-[700px] md:w-[720px] md:h-[720px] lg:w-[650px] lg:h-[600px]"
            >
              <Image
                src={HeroPlate}
                alt="Premium healthy food plate"
                className="w-full h-full object-contain"
                priority
                quality={100}
              />
            </div>

          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`

        @keyframes blob {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-50px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
        }

        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay:2s; }
        .animation-delay-4000 { animation-delay:4s; }

        @keyframes gradient {
          0%,100% { background-position:0% 50%; }
          50% { background-position:100% 50%; }
        }

        .animate-gradient {
          background-size:200% 200%;
          animation: gradient 3s ease infinite;
        }

      

      `}</style>
    </section>
  );
}