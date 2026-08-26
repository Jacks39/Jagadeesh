import React from "react";
import Group1428 from "../assets/Group 1428.png";

function Team() {
  const team = [
    ["doctor", "Dr. Arjun Mehta", "Chief Medical Officer"],
    ["doctor", "Dr. Priya Sharma", "Senior Doctor"],
    ["doctor", "Rohit Verma", "Healthcare Coordinator"],
    ["nurse", "Anjali Singh", "Customer Support Manager"],
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-10 mt-16">
      <div className="bg-white/80 rounded-2xl shadow-sm p-7 md:p-10">

        {/* TITLE */}
        <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-10">
          Meet Our{" "}
          <span className="text-blue-700">Team</span>
        </h2>

        {/* TEAM GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {team.map((member, index) => (
            <div
              key={index}
              className="text-center"
            >

              {/* IMAGE */}
              <div className="h-40 rounded-xl overflow-hidden mb-4 bg-gray-100">
                <img
                  src={Group1428}
                  alt={member[1]}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* NAME */}
              <h3 className="font-bold text-[13px]">
                {member[1]}
              </h3>

              {/* ROLE */}
              <p className="text-blue-600 text-[11px] mt-1">
                {member[2]}
              </p>

              {/* SOCIAL ICONS */}
              <div className="flex justify-center gap-3 mt-2 text-blue-600 text-sm">
                <span className="cursor-pointer hover:text-blue-800">
                  f
                </span>

                <span className="cursor-pointer hover:text-blue-800">
                  in
                </span>

                <span className="cursor-pointer hover:text-blue-800">
                  𝕏
                </span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Team;