const menu = [
  {
    day: "Monday",
    breakfast: "Oats + Fruits",
    lunch: "Dal + Brown Rice",
    dinner: "Paneer + Roti"
  },
  {
    day: "Tuesday",
    breakfast: "Smoothie Bowl",
    lunch: "Veg Pulao",
    dinner: "Dal + Salad"
  }
]

export default function MenuPreview() {
  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-gray-800">
          Weekly Menu Preview
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {menu.map((day, i) => (
            <div
              key={i}
              className="bg-white p-6 shadow rounded-xl"
            >
              <h3 className="font-semibold text-lg">
                {day.day}
              </h3>

              <p className="text-gray-600 mt-2">
                Breakfast: {day.breakfast}
              </p>

              <p className="text-gray-600">
                Lunch: {day.lunch}
              </p>

              <p className="text-gray-600">
                Dinner: {day.dinner}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}