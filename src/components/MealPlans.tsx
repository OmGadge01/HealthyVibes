const plans = [
  {
    title: "Breakfast",
    price: "₹1499",
    meals: "Healthy morning meals"
  },
  {
    title: "Lunch",
    price: "₹1999",
    meals: "Balanced lunch meals"
  },
  {
    title: "Full Day",
    price: "₹3499",
    meals: "Breakfast + Lunch + Dinner"
  }
]

export default function MealPlans() {
  return (
    <section className="bg-[#F6FFF7] py-20">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-gray-800">
          Meal Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold">
                {plan.title}
              </h3>

              <p className="text-green-700 text-3xl font-bold mt-3">
                {plan.price}
              </p>

              <p className="text-gray-600 mt-2">
                {plan.meals}
              </p>

              <button className="mt-6 bg-green-700 text-white px-5 py-2 rounded-lg">
                Subscribe
              </button>
            </div>
          ))}

        </div>
      </div>

    </section>
  )
}