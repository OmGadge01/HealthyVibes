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

      <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-200px)]">

          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <h1 className="text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
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

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg mt-6">
              <span className="font-semibold text-green-600">
                Fresh. Smart. Personalized.
              </span>{" "}
              Your daily dose of wellness, crafted by expert nutritionists and
              delivered to your doorstep.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition">
                Start Your Journey
              </button>

              <button className="px-6 py-3 bg-white border border-green-200 text-green-700 rounded-xl font-semibold hover:scale-105 transition">
                View Premium Plans
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i)=>(
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white shadow-lg animate-pulse"
                    style={{animationDelay:`${i*200}ms`}}
                  />
                ))}
              </div>

              <p className="text-sm text-gray-500">
                <span className="font-bold text-gray-800">2000+</span> happy customers
              </p>
            </div>
            
        {/* Trust indicators */}
            <div className="mt-8 flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>5km delivery radius</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
                <span>100% Fresh</span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - PLATE */}
          <div className="relative flex justify-center lg:justify-end items-center overflow-visible">  

            {/* animated plate */}
            <div
              ref={plateRef}
              className="relative w-[550px] h-[550px] lg:w-[670px] lg:h-[620px] animate-plateEntry"
            >
              <Image
                src={HeroPlate}
                alt="Premium healthy food plate"
                className="w-full h-full object-contain animate-spin-slow"
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

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay:2s;
        }

        .animation-delay-4000 {
          animation-delay:4s;
        }

        @keyframes gradient {
          0%,100% { background-position:0% 50%; }
          50% { background-position:100% 50%; }
        }

        .animate-gradient {
          background-size:200% 200%;
          animation: gradient 3s ease infinite;
        }

        /* PLATE ENTER ANIMATION */
        @keyframes plateEntry {
          0% {
            transform: translateX(300px) rotate(0deg);
            opacity:1;
          }

          100% {
            transform: translateX(0) rotate(360deg);
            opacity:1;
          }
        }

        .animate-plateEntry {
          animation: plateEntry 2s ease-out forwards;
        }

        /* CONTINUOUS SLOW SPIN */
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spinSlow 10 10s linear 3;
        }

      `}</style>
    </section>
  );
}