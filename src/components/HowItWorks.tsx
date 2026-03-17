"use client";

import { ClipboardList, ChefHat, Bike } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Choose Your Plan",
    desc: "Select breakfast, lunch or full day meal plan that fits your lifestyle.",
    icon: ClipboardList,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Fresh Cooking",
    desc: "Our chefs prepare healthy meals every morning with fresh ingredients.",
    icon: ChefHat,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Daily Delivery",
    desc: "Meals delivered fresh to your doorstep within 5km by 8 AM daily.",
    icon: Bike,
    color: "from-green-500 to-emerald-500"
  }
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [bikePosition, setBikePosition] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start animation sequence when section is visible
          setActiveStep(0);
          setBikePosition(0);
          
          // Step 1: Choose (0-2s)
          setTimeout(() => setActiveStep(0), 0);
          
          // Step 2: Cooking (2-4s)
          setTimeout(() => {
            setActiveStep(1);
            setBikePosition(43);
          }, 2000);
          
          // Step 3: Delivery (4-6s)
          setTimeout(() => {
            setActiveStep(2);
            setBikePosition(78);
          }, 4000);
          
          // Reset after animation
          setTimeout(() => {
            setActiveStep(0);
            setBikePosition(0);
          }, 8000);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-[#F6FFF7] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
            {/* <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> */}
            <span className="text-sm font-semibold text-green-700">SIMPLE PROCESS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            How It{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
        </div>

        {/* Animated Flow Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Progress Line */}
          <div className="absolute top-16 left-[10%] right-[10%] h-1 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-1000 ease-in-out"
              style={{ width: `${bikePosition+5}%` }}
            ></div>
          </div>

          {/* Moving Bike */}
          <div 
            className="absolute top-12 transition-all duration-1000 ease-in-out z-20"
            style={{ left: `${bikePosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Bike className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gradient-to-b from-green-500 to-transparent"></div>
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = activeStep === i;
              
              return (
                <div key={i} className="relative">
                  
                  {/* Icon with pulse effect when active */}
                  <div className="relative mb-6 flex justify-center">
                    <div className={`
                      w-20 h-20 rounded-full flex items-center justify-center
                      transition-all duration-700 relative
                      ${isActive 
                        ? 'bg-gradient-to-r ' + step.color + ' scale-110 shadow-2xl' 
                        : 'bg-white border-2 border-gray-200 shadow-lg'
                      }
                    `}>
                      {isActive && (
                        <div className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-30"></div>
                      )}
                      <Icon 
                        className={`
                          w-10 h-10 transition-all duration-700
                          ${isActive ? 'text-white' : 'text-gray-400'}
                        `} 
                        strokeWidth={1.5} 
                      />
                    </div>

                    {/* Number badge */}
                    <div className={`
                      absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center
                      text-sm font-bold transition-all duration-700
                      ${isActive 
                        ? 'bg-gradient-to-r ' + step.color + ' text-white scale-110' 
                        : 'bg-gray-200 text-gray-600'
                      }
                    `}>
                      {i + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className={`
                      text-xl font-bold mb-3 transition-all duration-700
                      ${isActive ? 'text-gray-900 scale-105' : 'text-gray-500'}
                    `}>
                      {step.title}
                    </h3>
                    
                    <p className={`
                      text-sm leading-relaxed transition-all duration-700
                      ${isActive ? 'text-gray-600' : 'text-gray-400'}
                    `}>
                      {step.desc}
                    </p>

                    {/* Step indicator line */}
                    <div className={`
                      h-1 w-12 mx-auto mt-4 rounded-full transition-all duration-700
                      ${isActive 
                        ? 'bg-gradient-to-r ' + step.color + ' w-16' 
                        : 'bg-gray-200'
                      }
                    `}></div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Animated cooking steam (for step 2) */}
          {activeStep === 1 && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-28 pointer-events-none">
              <div className="relative">
                <div className="absolute w-12 h-12 bg-white/60 rounded-full blur-xl animate-ping"></div>
                <div className="absolute w-16 h-16 bg-green-200/40 rounded-full blur-2xl animate-pulse"></div>
              </div>
            </div>
          )}

          {/* Animated delivery dots (for step 3) */}
          {activeStep === 2 && (
            <div className="absolute right-[15%] top-24 pointer-events-none">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
        </div>

        {/* Status text */}
        {/* <div className="text-center mt-16">
          <p className="text-sm text-gray-500 animate-pulse">
            {activeStep === 0 && '📋 You choose your plan'}
            {activeStep === 1 && '👨‍🍳 Chefs are cooking your fresh meal'}
            {activeStep === 2 && '🚚 Your meal is on the way!'}
          </p>
        </div> */}

      </div>
    </section>
  )
}