import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul",
    review: "Perfect for my busy office routine!",
    rating: 5
  },
  {
    name: "Sneha",
    review: "Healthy meals and always fresh.",
    rating: 5
  },
  {
    name: "Amit",
    review: "Great taste and on time delivery.",
    rating: 5
  },
  {
    name: "Priya",
    review: "Finally healthy food that tastes good.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-[#F6FFF7] to-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Simple header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            What{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-md border border-green-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote className="w-6 h-6 text-green-200 mb-2 group-hover:text-green-300" />
              
              {/* Rating stars */}
              <div className="flex gap-0.5 mb-2">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-gray-600 mb-3">
                "{t.review}"
              </p>

              {/* Name */}
              <h4 className="text-sm font-semibold text-green-700">
                — {t.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Small rating summary */}
        <div className="flex justify-center items-center gap-2 mt-6 text-xs text-gray-500">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span>4.9/5 from 500+ reviews</span>
        </div>
      </div>
    </section>
  );
}