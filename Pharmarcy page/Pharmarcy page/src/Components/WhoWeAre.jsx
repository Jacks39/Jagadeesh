import React from "react"

function WhoWeAre() {
  return (
    <section className="w-full mt-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* ================= LEFT - TEXT ================= */}
          <div className="pr-0 lg:pr-4">

            <h2 className="text-blue-700 font-bold text-base mb-7">
              WHO WE ARE
            </h2>

            <p className="leading-7 text-gray-900 text-[17px] mb-7">
              Nithish Software Solutions Pvt. Ltd. provides a modern
              healthcare platform that connects patients, doctors,
              nurses, and pharmacies in one place.
            </p>

            <p className="leading-7 text-gray-900 text-[17px] mb-7">
              Our goal is to simplify healthcare access by offering
              online appointment booking, teleconsultation services,
              pharmacy support, and healthcare management solutions.
            </p>

            <p className="text-blue-700 font-medium text-[17px] leading-7">
              We believe quality healthcare should be accessible,
              convenient, and available 24/7.
            </p>

          </div>


          {/* ================= RIGHT - IMAGE ================= */}
          <div className="relative">

            <div className="w-full h-[280px] lg:h-[520px] overflow-hidden rounded-2xl">
              <img
                src={whoWeAreImage}
                alt="Healthcare services"
                className="w-full h-full object-cover"
              />
            </div>


            {/* ================= COMMITMENT CARD ================= */}
            <div
              className="
                absolute
                -bottom-4
                left-5
                lg:left-[-60px]
                bg-white/90
                backdrop-blur-md
                rounded-2xl
                border
                border-white
                shadow-lg
                px-6
                py-4
                flex
                items-center
                gap-4
                min-w-[300px]
              "
            >

              {/* Icon */}
              <div className="text-blue-700 text-3xl">
                👥
              </div>

              {/* Content */}
              <div>
                <p className="font-bold text-gray-800 text-[16px]">
                  Our Commitment
                </p>

                <p className="text-gray-600 text-[15px]">
                  Better Health
                </p>

                <p className="text-gray-600 text-[15px]">
                  Better Tomorrow
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;