const testimonials = [
  {
    name: "Rahul",
    review: "Perfect for my busy office routine!"
  },
  {
    name: "Sneha",
    review: "Healthy meals and always fresh."
  }
]

export default function Testimonials() {
  return (
    <section className="bg-[#F6FFF7] py-20">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 shadow rounded-xl"
            >
              <p className="text-gray-600">
                "{t.review}"
              </p>

              <h4 className="mt-4 font-semibold text-green-700">
                {t.name}
              </h4>
            </div>
          ))}

        </div>
      </div>

    </section>
  )
}