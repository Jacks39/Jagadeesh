import React from "react";

function CoreValues() {
  const coreValues = [
    [
      "♥",
      "Patient First",
      "Every decision revolves around patient care and well-being.",
      "bg-pink-100",
      "text-pink-600",
    ],
    [
      "✓",
      "Trust & Security",
      "Protecting healthcare data with advanced security and privacy.",
      "bg-blue-100",
      "text-blue-600",
    ],
    [
      "💡",
      "Innovation",
      "Leveraging technology to improve healthcare delivery every day.",
      "bg-green-100",
      "text-green-600",
    ],
    [
      "🤲",
      "Compassion",
      "Providing care with empathy, respect, and professionalism.",
      "bg-orange-100",
      "text-orange-600",
    ],
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-10 mt-16">
      <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-10">
        Our <span className="text-blue-700">Core Values</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <div
              className={`
                w-16
                h-16
                shrink-0
                rounded-full
                flex
                items-center
                justify-center
                text-2xl
                ${value[3]}
                ${value[4]}
              `}
            >
              {value[0]}
            </div>

            <div>
              <h3 className="font-bold text-[13px]">
                {value[1]}
              </h3>

              <p className="text-[11px] text-gray-600 mt-1">
                {value[2]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreValues;