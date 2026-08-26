import React from "react";

import nurseImage from "../assets/Rectangle 5544.png";
import doctorImage from "../assets/Rectangle 5545.png";

function Hero() {
  return (
    <section
      id="about"
      className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-12"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* IMAGES */}
        <div className="flex justify-center">
          <div className="relative flex items-end gap-5">

            {/* BLUE CURVED BORDER */}
            <div
              className="
                absolute
                -left-3
                top-5
                bottom-[-8px]
                w-[190px]
                border-l-2
                border-b-2
                border-blue-600
                rounded-bl-[100px]
              "
            />

            {/* NURSE */}
            <div
              className="
                relative
                w-[190px]
                h-[320px]
                rounded-[70px]
                overflow-hidden
                shadow-sm
              "
            >
              <img
                src={nurseImage}
                alt="Professional Nurse"
                className="w-full h-full object-cover"
              />
            </div>

            {/* DOCTOR */}
            <div
              className="w-[190px] h-[320px] overflow-hidden"
              style={{
                borderRadius: "90px 90px 70px 70px",
              }}
            >
              <img
                src={doctorImage}
                alt="Professional Doctor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            About <span className="text-blue-700">Us</span>
          </h1>

          <p className="text-base md:text-[17px] leading-7 text-gray-700 max-w-md mb-7">
            Dedicated to connecting patients with trusted healthcare
            professionals anytime, anywhere.
          </p>

          <div className="flex flex-col gap-3.5 w-64">
            <button
              className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                rounded-lg
                px-5
                py-3.5
                flex
                items-center
                justify-between
                transition
              "
            >
              <span>Book Appointment</span>
              <span>→</span>
            </button>

            <button
              className="
                border
                border-blue-600
                text-blue-600
                hover:bg-blue-600
                hover:text-white
                rounded-lg
                px-5
                py-3.5
                flex
                items-center
                justify-between
                transition
              "
            >
              <span>Contact Us</span>
              <span>→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;