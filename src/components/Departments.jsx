import departmentImageOne from "../assets/Frame 376 (1).png";
import departmentImageTwo from "../assets/Frame 377.png";
import departmentImageThree from "../assets/Frame 378.png";
import departmentImageFour from "../assets/Frame 379.png";
import departmentImageFive from "../assets/Frame379(2).png";

const departments = [
  {
    name: "General Doctor",
    image: departmentImageOne,
  },
  {
    name: "Dentist",
    image: departmentImageTwo,
  },
  {
    name: "Pediatrician",
    image: departmentImageThree,
  },
  {
    name: "Dermatology",
    image: departmentImageFour,
  },
  {
    name: "Psychiatrist",
    image: departmentImageFive,
  },
];

function Departments() {
  return (
    <section className="min-h-[190px] bg-[#acd9e3] py-7 sm:min-h-[220px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <h2 className="text-center text-sm font-bold sm:text-base">
          Departments
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">

          {departments.map((department) => (
            <div
              key={department.name}
              className="group flex cursor-pointer flex-col items-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">
                <img
                  src={department.image}
                  alt={department.name}
                  className="h-16 w-16 rounded-full object-contain"
                />
              </div>

              <p className="mt-2 text-center text-xs font-semibold">
                {department.name}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Departments;