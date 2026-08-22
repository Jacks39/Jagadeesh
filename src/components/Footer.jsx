function Footer() {
  return (
    <footer className="border-t border-gray-400 bg-[#d5d5df]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">

        <div className="flex items-center">
          <div className="flex items-center gap-2">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100">
              🏥
            </div>

            <div>
              <p className="text-xs font-bold">
                Nithish Software
              </p>

              <p className="text-[10px] font-semibold">
                Solutions Pvt.Ltd
              </p>
            </div>

          </div>
        </div>

        <div>
          <h3 className="text-center text-xs font-bold">
            Get App On
          </h3>

          <div className="mt-4 flex justify-center gap-3">
            <button className="rounded-md bg-black px-4 py-2 text-[10px] font-semibold text-white">
              ▶ Google Play
            </button>

            <button className="rounded-md bg-black px-4 py-2 text-[10px] font-semibold text-white">
               App Store
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-center text-xs font-bold">
            Follow Us On
          </h3>

          <div className="mt-4 flex justify-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs text-white">
              f
            </div>

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs text-white">
              𝕏
            </div>

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs text-white">
              ◎
            </div>

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs text-white">
              in
            </div>

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs text-white">
              ●
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;