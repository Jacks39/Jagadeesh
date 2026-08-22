import {
  Search,
  ShoppingCart,
  Menu,
} from "lucide-react";

function Navbar() {
  return (
    <header className="bg-[#d7e8ed]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-xl">
            🏥
          </div>

          <div>
            <p className="text-xs font-bold sm:text-sm">
              Nithish Software
            </p>
            <p className="text-[10px] font-semibold sm:text-xs">
              Solutions Pvt.Ltd
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-5 text-xs lg:flex">
          <a href="#" className="font-semibold text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            Buy Medicine
          </a>
          <a href="#" className="hover:text-blue-600">
            Find Doctors
          </a>
          <a href="#" className="hover:text-blue-600">
            Pharmacy
          </a>
          <a href="#" className="hover:text-blue-600">
            About Us
          </a>
          <a href="#" className="hover:text-blue-600">
            Contact Us
          </a>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Search size={17} />
          <ShoppingCart size={17} />

          <button className="rounded-md bg-blue-600 px-4 py-2 text-xs font-semibold text-white">
            Login
          </button>
        </div>

        <button className="rounded-md p-2 md:hidden">
          <Menu size={24} />
        </button>

      </div>
    </header>
  );
}

export default Navbar;