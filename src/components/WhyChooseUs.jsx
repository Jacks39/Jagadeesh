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
      <div className="mx-auto max-w-[900px] px-4">

        <h2 className="text-center text-sm font-bold sm:text-base">
          Why Choose Us ?
        </h2>

        <div className="mt-7 grid grid-cols-12 gap-x-4 gap-y-8">

          {/* First 4 cards */}
          {statistics.slice(0, 4).map(([number, title]) => (
            <div
              key={title}
              className="col-span-3 flex justify-center"
            >
              <div className="h-[87px] w-[160px] rounded-[10px] bg-white px-3 py-3 text-center shadow-md sm:w-[207px]">
                <p className="text-2xl font-bold text-[#18549a]">
                  {number}
                </p>

                <p className="mt-1 text-[9px] font-semibold">
                  {title}
                </p>
              </div>
            </div>
          ))}

          {/* Bottom 3 cards */}
          {statistics.slice(4).map(([number, title], index) => (
            <div
              key={title}
              className={`col-span-3 flex justify-center ${
                index === 0
                  ? "col-start-2"
                  : index === 1
                  ? "col-start-6"
                  : "col-start-10"
              }`}
            >
              <div className="h-[87px] w-[160px] rounded-[10px] bg-white px-3 py-3 text-center shadow-md sm:w-[207px]">
                <p className="text-2xl font-bold text-[#18549a]">
                  {number}
                </p>

                <p className="mt-1 text-[9px] font-semibold">
                  {title}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;