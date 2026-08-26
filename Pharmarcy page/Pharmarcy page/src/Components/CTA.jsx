import React from "react";

function CTA() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-10 mt-16 mb-16">
      <div
        className="
          rounded-2xl
          px-7
          md:px-10
          py-8
          text-white
        "
        style={{
          background:
            "linear-gradient(90deg, #3b82f6, #4f46e5)",
        }}
      >
        <div className="grid md:grid-cols-2 items-center gap-6">

          <div>
            <h2 className="text-2xl md:text-[26px] font-extrabold mb-2.5">
              Ready to Take Charge of Your Health?
            </h2>

            <p className="text-blue-50 text-sm leading-6">
              Book appointments, consult doctors, and access
              healthcare services anytime.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
            <button className="bg-white text-blue-600 px-5 py-3 rounded-lg text-sm font-medium">
              Book Appointment →
            </button>

            <button className="border border-white px-5 py-3 rounded-lg text-sm">
              Contact Us →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CTA;