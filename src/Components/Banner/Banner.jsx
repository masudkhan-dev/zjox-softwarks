// banner image
import b1 from "../../../public/assets/banner1.png";
import b2 from "../../../public/assets/banner2.png";

import b4 from "../../../public/assets/banner4.png";

const Banner = () => {
  return (
    <main className="relative w-full  mt-16 md:mt-0 z-0">
      <div className="relative w-full z-10">
        {/*  banner bg */}
        <figure className="w-full z-10">
          <img src={b1} alt="banner base" className="w-full " />
        </figure>

        <figure className="absolute -top-16 right-0 w-full z-10">
          <img src={b4} alt="banner " />
        </figure>

        <figure className="absolute -bottom-10 md:-bottom-40 left-20 md:left-72  w-2/3 ">
          <img src={b2} alt="banner " />
        </figure>

        <div className="absolute left-0 top-0 h-full w-1/2 bg-black opacity-80 z-0" />

        <div className="absolute top-0 left-0 flex flex-col justify-center items-start h-full md:mx-10 gap-y-2 md:gap-y-5">
          <h2 className="text-white font-bold text-2xl md:text-5xl">
            Lets make <span className="text-green-400">{"{  }"}</span>
          </h2>
          <h2 className="text-white font-bold text-2xl md:text-5xl">
            software together!
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Banner;
