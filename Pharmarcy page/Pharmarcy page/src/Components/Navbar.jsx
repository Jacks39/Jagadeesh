import React from "react";
import logo from "../assets/Main ID 1.png";
import Frame41 from "../assets/Frame 41.png";

function Navbar() {
  return (
    <header className="relative w-full h-[112px]">

      {/* LOGO */}
      <div className="absolute top-[32px] left-[40px] flex items-center gap-3">
        <img
          src={logo}
          alt="Nithish Software Solutions"
          className="w-11 h-11 rounded-[10px] object-contain"
        />

        <div className="font-bold text-[15px] leading-tight">
          Nithish Software
          <br />
          Solutions Pvt. Ltd.
        </div>
      </div>

      {/* NAVIGATION */}
      <nav
        className="
          absolute
          top-[32px]
          left-1/2
          -translate-x-1/2
          hidden
          md:flex
          items-center
          gap-5
          px-5
          py-2.5
          bg-white
          rounded-full
          shadow-md
          text-[12px]
          whitespace-nowrap
        "
      >
        <a
          href="#home"
          className="hover:text-blue-600 transition"
        >
          Home
        </a>

        <a
          href="#services"
          className="hover:text-blue-600 transition"
        >
          Buy Medicines
        </a>

        <a
          href="#doctors"
          className="hover:text-blue-600 transition"
        >
          Find Doctors
        </a>

        <a
          href="#nurses"
          className="hover:text-blue-600 transition"
        >
          Find Nurses
        </a>

        <a
          href="#about"
          className="text-blue-700 font-semibold"
        >
          About Us
        </a>

        <a
          href="#contact"
          className="hover:text-blue-600 transition"
        >
          Contact Us
        </a>
      </nav>

      {/* RIGHT ICONS */}
      <div
        className="
          absolute
          top-[32px]
          right-[40px]
          flex
          items-center
          gap-[18px]
        "
      >
        {/* SETTINGS */}
        <button
          type="button"
          className="text-lg cursor-pointer hover:scale-110 transition"
          title="Settings"
        >
          ⚙️
        </button>

        {/* NOTIFICATIONS */}
        <button
          type="button"
          className="relative text-lg cursor-pointer hover:scale-110 transition"
          title="Notifications"
        >
          🔔

          <span
            className="
              absolute
              -top-1.5
              -right-1.5
              flex
              items-center
              justify-center
              w-3.5
              h-3.5
              bg-red-500
              text-white
              text-[8px]
              font-bold
              rounded-full
            "
          >
            1
          </span>
        </button>

        {/* FRAME 41 */}
        <button
          type="button"
          className="cursor-pointer hover:scale-105 transition"
          title="Account"
        >
          <img
            src={Frame41}
            alt="Account"
            className="w-10 h-10 object-contain"
          />
        </button>
      </div>

    </header>
  );
}

export default Navbar;