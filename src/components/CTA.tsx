import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-r from-green-600 to-emerald-600 py-16 overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-semibold text-white"> LIMITED OFFER</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Start Eating{' '}
          <span className="text-yellow-300">Healthy Today</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
          Join thousands of happy customers enjoying fresh, delicious meals delivered daily.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["No commitment", "Free delivery", "Cancel anytime"].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/90">
              <CheckCircle className="w-4 h-4 text-yellow-300" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="group bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-2">
          Subscribe Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Trust text */}
        <p className="text-sm text-green-200 mt-6">
          ✦ 7-day money back guarantee ✦
        </p>
      </div>
    </section>
  );
}