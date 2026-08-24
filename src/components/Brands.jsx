import productImageOne from "../assets/Nivea (2021) Logo (PNG720p) - Vector69Com 1.png";
import productImageTwo from "../assets/Group 125.png";
import productImageThree from "../assets/Group 126.png";
import productImageFour from "../assets/Group 127.png";
import productImageFive from "../assets/Group 128.png";
import productImageSix from "../assets/Group 129.png";

const brandImages = [
  productImageOne,
  productImageTwo,
  productImageThree,
  productImageFour,
  productImageFive,
  productImageSix,
];

function Brands() {
  return (
    <section className="bg-[#d5d5df] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <h2 className="text-center text-sm font-bold">
          Our Top Brands
        </h2>

        <div className="mt-7 grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">

          {brandImages.map((brand, index) => (
            <div
              key={index}
              className="flex h-24 w-24 items-center justify-center rounded-full bg-white p-4 shadow-md"
            >
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="h-full w-full object-contain"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Brands;