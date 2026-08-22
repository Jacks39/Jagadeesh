import nurseImage from "../assets/Nurse Images - Free Download on Freepik 1.png";

function NursingSupport() {
  return (
    <section className="border-t-4 border-[#b4d3df] bg-[#c5d8e2]">

      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">

        <div className="flex justify-center">
          <img
            src={nurseImage}
            alt="Nursing support"
            className="w-full max-w-sm object-contain"
          />
        </div>

        <div className="py-8">
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
            We Provide{" "}
            <span className="text-[#4b20e8]">
              Nursing
            </span>{" "}
            Support
            <br />
            that you can count on
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-6 text-gray-600">
            Book professional nurses for home visits,
            medical assistance, post-surgery care,
            elder care and more.
          </p>

          <button className="mt-5 rounded-md bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white">
            Book Now
          </button>
        </div>

      </div>
    </section>
  );
}

export default NursingSupport;