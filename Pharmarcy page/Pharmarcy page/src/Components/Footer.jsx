import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-[#eef8ff] border-t border-white">

      {/* ================= FOOTER CONTENT ================= */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 py-12">

          {/* ================= COMPANY ================= */}
          <div>
            <img
              src="/logo.png"
              alt="Nithish Software Solutions"
              className="w-[220px] h-auto mb-7"
            />

            <p className="text-[16px] leading-7 text-gray-800 max-w-[300px]">
              We connect patients with trusted doctors, nurses, and
              healthcare services for a healthier tomorrow.
            </p>
          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="text-[20px] font-bold text-gray-900 mb-4">
              Quick Links
            </h3>

            <div className="w-8 h-1 bg-blue-600 mb-7"></div>

            <ul className="space-y-5">
              <li>
                <a
                  href="#home"
                  className="flex items-center gap-4 text-[16px] text-gray-800 hover:text-blue-600 transition"
                >
                  <span className="text-xl">›</span>
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="flex items-center gap-4 text-[16px] text-gray-800 hover:text-blue-600 transition"
                >
                  <span className="text-xl">›</span>
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#doctors"
                  className="flex items-center gap-4 text-[16px] text-gray-800 hover:text-blue-600 transition"
                >
                  <span className="text-xl">›</span>
                  Doctors
                </a>
              </li>

              <li>
                <a
                  href="#departments"
                  className="flex items-center gap-4 text-[16px] text-gray-800 hover:text-blue-600 transition"
                >
                  <span className="text-xl">›</span>
                  Departments
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="flex items-center gap-4 text-[16px] text-gray-800 hover:text-blue-600 transition"
                >
                  <span className="text-xl">›</span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>


          {/* ================= SERVICES ================= */}
          <div>
            <h3 className="text-[20px] font-bold text-gray-900 mb-4">
              Our Services
            </h3>

            <div className="w-8 h-1 bg-blue-600 mb-7"></div>

            <ul className="space-y-5">
              <li>
                <a
                  href="#appointment"
                  className="flex items-center gap-4 text-[16px] text-gray-800 hover:text-blue-600 transition"
                >
                  <span className="text-xl">›</span>
                  Appointment Booking
                </a>
              </li>

              <li>
                <a
                  href="#consultation"
                  className="flex items-center gap-4 text-[16px] text-gray-800 hover:text-blue-600 transition"
                >
                  <span className="text-xl">›</span>
                  Online Consultation
                </a>
              </li>

              <li>
                <a
                  href="#pharmacy"
                  className="flex items-center gap-4 text-[16px] text-gray-800 hover:text-blue-600 transition"
                >
                  <span className="text-xl">›</span>
                  Online Pharmacy
                </a>
              </li>

              <li>
                <a
                  href="#nursing"
                  className="flex items-center gap-4 text-[16px] text-gray-800 hover:text-blue-600 transition"
                >
                  <span className="text-xl">›</span>
                  Nursing Support
                </a>
              </li>

              <li>
                <a
                  href="#health-checkups"
                  className="flex items-center gap-4 text-[16px] text-gray-800 hover:text-blue-600 transition"
                >
                  <span className="text-xl">›</span>
                  Health Checkups
                </a>
              </li>
            </ul>
          </div>


          {/* ================= CONTACT ================= */}
          <div id="contact">

            <h3 className="text-[20px] font-bold text-gray-900 mb-4">
              Contact Us
            </h3>

            <div className="w-8 h-1 bg-blue-600 mb-7"></div>


            {/* PHONE */}
            <div className="flex items-start gap-4 mb-5">

              <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 text-lg">
                📞
              </div>

              <a
                href="tel:+917901311555"
                className="pt-2 text-[16px] text-gray-700 hover:text-blue-600 transition"
              >
                +91 7901311555
              </a>

            </div>


            {/* EMAIL */}
            <div className="flex items-start gap-4 mb-5">

              <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 text-lg">
                ✉
              </div>

              <a
                href="mailto:hr.nss@nssorg.com"
                className="pt-2 text-[16px] text-gray-700 hover:text-blue-600 transition"
              >
                hr.nss@nssorg.com
              </a>

            </div>


            {/* ADDRESS */}
            <div className="flex items-start gap-4">

              <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 text-lg">
                📍
              </div>

              <p className="text-[16px] leading-7 text-gray-700">
                Eswar Plaza, Dwaraka Nagar,
                <br />
                Visakhapatnam, Andhra Pradesh
                <br />
                530016
              </p>

            </div>

          </div>

        </div>


        {/* ================= FOOTER BOTTOM ================= */}
        <div className="border-t border-gray-300 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-700 text-center md:text-left">
            © 2026 Nithish Software Solutions Pvt. Ltd. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-700">
              Follow Us On
            </span>

            <a
              href="#"
              className="font-bold text-blue-600 hover:text-blue-800"
            >
              f
            </a>

            <a
              href="#"
              className="font-bold text-blue-600 hover:text-blue-800"
            >
              in
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-blue-600"
            >
              ◎
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-blue-600"
            >
              ◉
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;