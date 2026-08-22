import productImageOne from "../assets/Frame 376 (1).png";
import productImageTwo from "../assets/Group 125.png";
import productImageThree from "../assets/Group 126.png";
import productImageFour from "../assets/Group 127.png";
import productImageFive from "../assets/Group 128.png";
import productImageSix from "../assets/Group 129.png";
const products = [
  {
    name: "Medical Product",
    price: "₹499",
    image: productImageOne,
  },
  {
    name: "Medical Product",
    price: "₹599",
    image: productImageTwo,
  },
  {
    name: "Medical Product",
    price: "₹699",
    image: productImageThree,
  },
  {
    name: "Medical Product",
    price: "₹799",
    image: productImageFour,
  },
  {
    name: "Medical Product",
    price: "₹899",
    image: productImageFive,
  },
  {
    name: "Medical Product",
    price: "₹999",
    image: productImageSix,
  },
];

function Products() {
  return (
    <section className="min-h-[400px] bg-[#c4dfe7] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <h2 className="text-center text-sm font-bold">
          Our Top Products
        </h2>

        <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

          {products.map((product, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-sm bg-white shadow-md"
            >

              <div className="flex h-36 items-center justify-center bg-white p-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="px-3 pb-3">
                <p className="text-[10px] text-gray-600">
                  {product.name}
                </p>

                <p className="mt-1 text-sm font-bold">
                  {product.price}
                </p>

                <button className="mt-2 w-full bg-[#3978d2] py-1.5 text-[9px] font-semibold text-white">
                  Add to Cart
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Products;