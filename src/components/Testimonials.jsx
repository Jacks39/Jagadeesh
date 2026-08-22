import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Customer",
    text: "The doctors were very professional and helpful. The appointment process was very easy.",
  },
  {
    name: "Customer",
    text: "Excellent service and very friendly staff. I had a great experience.",
  },
  {
    name: "Customer",
    text: "Very easy to book appointments and get the required medical support.",
  },
  {
    name: "Customer",
    text: "The service was excellent and the doctors provided great support.",
  },
];

function Testimonials() {
  return (
    <section className="min-h-[280px] bg-[#b9dbe4] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <h2 className="text-center text-sm font-bold sm:text-base">
          Client Testimonial
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-5 shadow-md"
            >

              <div className="flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl">
                  👩
                </div>
              </div>

              <div className="mt-3 flex justify-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="mt-3 text-center text-xs leading-5 text-gray-600">
                "{testimonial.text}"
              </p>

              <p className="mt-3 text-center text-sm font-bold">
                {testimonial.name}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Testimonials;