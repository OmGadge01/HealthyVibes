const steps = [
  {
    title: "Choose Plan",
    desc: "Select breakfast, lunch or full day meal plan."
  },
  {
    title: "Fresh Cooking",
    desc: "Our chefs cook healthy meals every morning."
  },
  {
    title: "Daily Delivery",
    desc: "Meals delivered to your doorstep within 5km."
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-gray-800">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 bg-white shadow rounded-xl"
            >
              <div className="text-green-700 text-3xl font-bold mb-3">
                {i + 1}
              </div>

              <h3 className="font-semibold text-lg">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {step.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}