const statistics = [
  ["500+", "Registered Doctors"],
  ["250+", "Registered Male Doctors"],
  ["500+", "Registered Nurses"],
  ["400+", "Total Registered Patient"],
  ["250+", "Registered Female Doctors"],
  ["120+", "Stored Registrations"],
  ["20+", "Registered Top Brands"],
];

function WhyChooseUs() {
  return (
    <section className="bg-[#d5d5df] py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <h2 className="text-center text-sm font-bold sm:text-base">
          Why Choose Us?
        </h2>

        <div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">

          {statistics.map(([number, title]) => (
            <div
              key={title}
              className="rounded-md bg-white px-3 py-3 text-center shadow-md"
            >
              <p className="text-2xl font-bold text-[#18549a] sm:text-3xl">
                {number}
              </p>

              <p className="mt-1 text-[9px] font-semibold sm:text-[10px]">
                {title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;