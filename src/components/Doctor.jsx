import { Search, MapPin } from "lucide-react";
import doctorImage from "../assets/Group 1348.png";

function Doctor() {
  return (
    <section className="bg-[#c9e6ed]">
      <div className="mx-auto grid min-h-[500px] max-w-7xl items-center px-6 md:grid-cols-2 lg:px-10">

        {/* LEFT SIDE */}
        <div className="z-10 py-10">

          {/* Heading */}
          <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-5xl">
            Find the{" "}
            <span className="text-[#4b20e8]">
              Doctors
            </span>{" "}
            and
            <br />
            Book an Appointment
          </h1>

          {/* Description */}
          <div className="mt-8 max-w-lg rounded-md bg-white px-4 py-4 shadow-sm">
            <p className="text-sm leading-5 text-gray-800">
              A healthier tomorrow starts today.
              Schedule your appointment!
              <br />
              Your wellness, our expertise.
            </p>
          </div>

          {/* Department + Location + Search */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            {/* Department */}
            <select className="h-12 rounded-md bg-white px-4 text-sm outline-none shadow-sm sm:w-44">
              <option>Select Department</option>
              <option>General Doctor</option>
              <option>Dentist</option>
              <option>Pediatrician</option>
              <option>Dermatology</option>
            </select>

            {/* Location */}
            <div className="flex h-12 items-center rounded-md bg-white px-3 shadow-sm sm:w-44">
              <MapPin size={18} className="text-gray-500" />

              <input
                type="text"
                placeholder="Location"
                className="w-full px-2 text-sm outline-none"
              />
            </div>

            {/* Search */}
            <button className="flex h-12 w-12 items-center justify-center rounded-md bg-[#3978d2] text-white">
              <Search size={20} />
            </button>

          </div>

          {/* Discover More */}
          <button className="mt-7 rounded-md bg-black px-6 py-3 text-sm font-semibold text-white">
            Discover More →
          </button>

        </div>

        {/* RIGHT SIDE - DOCTOR IMAGE */}
        <div className="relative flex h-full items-end justify-center md:justify-end">

          {/* Circle background */}
          <div className="absolute right-0 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#a9c8e3] md:h-[450px] md:w-[450px]" />

          {/* Doctor */}
          <img
            src={doctorImage}
            alt="Doctor"
            className="relative z-10 w-full max-w-[450px] object-contain"
          />

        </div>

      </div>
    </section>
  );
}

export default Doctor;