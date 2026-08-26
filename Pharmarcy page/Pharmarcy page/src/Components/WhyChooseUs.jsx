import React from "react";

function MissionVision() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-10 mt-16">
      <div
        className="
          bg-white/80
          rounded-2xl
          shadow-sm
          p-7
          md:p-10
          grid
          md:grid-cols-2
          gap-8
        "
      >

        {/* MISSION */}
        <div
          className="
            flex
            gap-6
            items-center
            md:border-r
            md:border-gray-300
            md:pr-10
          "
        >
          <div
            className="
              w-20
              h-20
              shrink-0
              rounded-full
              border
              border-blue-500
              flex
              items-center
              justify-center
              text-3xl
              text-blue-700
            "
          >
            🎯
          </div>

          <div>
            <h3 className="text-blue-700 text-lg font-bold mb-2">
              Our Mission
            </h3>

            <p className="text-sm leading-6 text-gray-700">
              To make healthcare accessible, affordable, and
              efficient through technology-driven solutions.
            </p>
          </div>
        </div>

        {/* VISION */}
        <div className="flex gap-6 items-center">
          <div
            className="
              w-20
              h-20
              shrink-0
              rounded-full
              border
              border-blue-500
              flex
              items-center
              justify-center
              text-3xl
              text-blue-700
            "
          >
            👁
          </div>

          <div>
            <h3 className="text-blue-700 text-lg font-bold mb-2">
              Our Vision
            </h3>

            <p className="text-sm leading-6 text-gray-700">
              To become a leading digital healthcare ecosystem
              that improves patient care and empowers medical
              professionals worldwide.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default MissionVision;