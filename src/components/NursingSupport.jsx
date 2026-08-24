import nurseImage from "../assets/Group 1347.png";

function NursingSupport() {
  return (
    <section className="border-t-4 border-[#b4d3df] bg-[#c5d8e2]">
      <div className="mx-auto grid max-w-7xl items-center md:grid-cols-2">

        {/* Nurse Image */}
        <div className="flex items-end justify-start">
          <img
            src={nurseImage}
            alt="Nursing support"
            className="ml-[-8px] h-[454px] w-[406px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center py-10 md:-ml-12">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            We Provide{" "}
            <span className="text-[#4b20e8]">Nursing</span>{" "}
            Support
            <br />
            that you can count on
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-6 text-gray-600">
            Book professional nurses for home visits, medical assistance,
            post-surgery care, elder care and more.
          </p>

          <button className="mt-5 w-fit rounded-md bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white">
            Book Now
          </button>
        </div>

      </div>
    </section>
  );
}

export default NursingSupport;