"use client";
import { Check, Sparkles, Coffee, Utensils, Sun } from "lucide-react";

const plans = [
  {
    title: "Breakfast",
    price: "₹1499",
    originalPrice: "₹1799",
    meals: "Healthy morning meals",
    features: ["5 breakfasts/week", "Fresh fruits included", "Protein rich", "7 AM delivery"],
    icon: Coffee,
    popular: false,
    color: "from-green-400 to-green-500"
  },
  {
    title: "Lunch",
    price: "₹1999",
    originalPrice: "₹2499",
    meals: "Balanced lunch meals",
    features: ["5 lunches/week", "Seasonal vegetables", "Grain bowls", "12 PM delivery"],
    icon: Utensils,
    popular: true,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Full Day",
    price: "₹3499",
    originalPrice: "₹4199",
    meals: "Breakfast + Lunch + Dinner",
    features: ["All 3 meals daily", "Snacks included", "Most popular", "Customizable"],
    icon: Sun,
    popular: false,
    color: "from-green-500 to-emerald-500"
  }
]

export default function MealPlans() {
  return (
    <section className="relative bg-gradient-to-b from-[#F6FFF7] to-white py-20 overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">FLEXIBLE PLANS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Simple{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Choose the plan that fits your lifestyle. All meals are freshly prepared and delivered daily.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {/* Decorative line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-200 to-transparent -translate-y-1/2 hidden lg:block"></div>

          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const isPopular = plan.popular;

            return (
              <div
                key={i}
                className={`
                  relative group
                  ${isPopular ? 'lg:-mt-4 lg:mb-[-1rem]' : ''}
                `}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`
                  relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-green-100
                  transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl
                  ${isPopular ? 'border-green-300 shadow-2xl' : ''}
                  overflow-hidden
                `}>
                  
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Card content */}
                  <div className="relative p-8">
                    
                    {/* Icon */}
                    <div className={`
                      w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} 
                      flex items-center justify-center mb-6 shadow-lg
                      group-hover:scale-110 group-hover:rotate-3 transition-all duration-300
                    `}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {plan.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm mb-4">
                      {plan.meals}
                    </p>

                    {/* Price */}
                    <div className="flex items-end gap-2 mb-6">
                      <span className="text-4xl font-black text-gray-800">
                        {plan.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through mb-1">
                        {plan.originalPrice}
                      </span>
                      <span className="text-xs text-green-600 font-semibold mb-1">
                        20% off
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button className={`
                      w-full py-3 rounded-xl font-semibold transition-all duration-300
                      ${isPopular 
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-200 hover:shadow-xl hover:scale-105' 
                        : 'bg-white border-2 border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 hover:scale-105'
                      }
                    `}>
                      Subscribe Now
                    </button>

                    {/* Savings badge */}
                    <p className="text-xs text-gray-400 text-center mt-4">
                      Save 20% with monthly subscription
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom features */}
        

        {/* Money back guarantee */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
            <span className="w-1 h-1 bg-green-400 rounded-full"></span>
            7-day money back guarantee • No questions asked
            <span className="w-1 h-1 bg-green-400 rounded-full"></span>
          </p>
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
  )
}