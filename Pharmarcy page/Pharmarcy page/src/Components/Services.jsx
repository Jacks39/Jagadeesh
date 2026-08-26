import React from "react";

function Services() {
  const services = [
    [
      "👨‍⚕️",
      "Doctor Consultation",
      "Connect with certified healthcare professionals online or in-person.",
    ],
    [
      "📅",
      "Appointment Booking",
      "Easily schedule appointments with preferred doctors.",
    ],
    [
      "💊",
      "Online Pharmacy",
      "Order medicines quickly and safely with home delivery.",
    ],
    [
      "👩‍⚕️",
      "Nursing Support",
      "Professional nursing assistance and care for patients.",
    ],
  ];

  return (
    <section
      id="services"
      className="max-w-[1280px] mx-auto px-6 lg:px-10 mt-16"
    >
      <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-8">
        Our <span className="text-blue-700">Services</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-xl
              shadow-sm
              p-6
              flex
              items-center
              gap-4
              hover:shadow-md
              transition
            "
          >
            <div className="text-4xl">
              {service[0]}
            </div>

            <div>
              <h3 className="font-bold text-[13px]">
                {service[1]}
              </h3>

              <p className="text-[11px] text-gray-600 mt-2">
                {service[2]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;